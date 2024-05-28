// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)
// Forked: https://github.com/textlint-rule/textlint-rule-no-unmatched-pair/blob/95ef2dfe8e61487d37433deeb5de7731add9e11d/src/parser/PairMaker.js

import type { SourceCode } from './SourceCode'
import type { Pair } from './pairs'

export function createPairMarker(pairs: Pair[]) {
  const pairMarksEntries = pairs
    .map<[[string, Pair], [string, Pair]]>(mark => {
      return [
        [mark.start, mark],
        [mark.end, mark]
      ]
    })
    .flat(1)

  const pairMarksKeyMap = new Map(pairMarksEntries)
  const matchPair = (str: string) => {
    return pairMarksKeyMap.get(str)
  }

  return {
    mark(sourceCode: SourceCode) {
      const str = sourceCode.read()
      if (!str) {
        return
      }

      const matchedPair = matchPair(str)
      if (!matchedPair) {
        return
      }

      // support nested pair
      if (sourceCode.isInContext(matchedPair)) {
        // check that string is end mark?
        const pair = pairs.find(pair => pair.end === str)
        if (pair) {
          sourceCode.leaveContext(pair)
        }
      } else {
        const pair = pairs.find(pair => pair.start === str)
        if (pair) {
          sourceCode.enterContext(pair)
        }
      }
    }
  }
}
