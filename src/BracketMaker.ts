// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)
// Forked: https://github.com/textlint-rule/textlint-rule-no-unmatched-pair/blob/95ef2dfe8e61487d37433deeb5de7731add9e11d/src/parser/PairMaker.js

import type { SourceCode } from './SourceCode'
import type { Brackets } from './brackets'

export function createBracketMarker(bracketsList: Brackets[]) {
  const bracketMarksEntries = bracketsList
    .map<[[string, Brackets], [string, Brackets]]>(mark => {
      return [
        [mark.start, mark],
        [mark.end, mark]
      ]
    })
    .flat(1)

  const bracketMarksKeyMap = new Map(bracketMarksEntries)
  const matchPair = (str: string) => {
    return bracketMarksKeyMap.get(str)
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
        const pair = bracketsList.find(pair => pair.end === str)
        if (pair) {
          sourceCode.leaveContext(pair)
        }
      } else {
        const pair = bracketsList.find(pair => pair.start === str)
        if (pair) {
          sourceCode.enterContext(pair)
        }
      }
    }
  }
}
