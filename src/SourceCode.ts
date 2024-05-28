// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)
// Forked: https://github.com/textlint-rule/textlint-rule-no-unmatched-pair/blob/95ef2dfe8e61487d37433deeb5de7731add9e11d/src/parser/SourceCode.js

import type { Brackets } from './brackets'

export type SourceCode = ReturnType<typeof createSourceCode>

export function createSourceCode(text: string) {
  const _text: string = text
  const _contextLocations: { index: number; brackets: Brackets }[] = []
  const _matchedLocations: { index: number; brackets: Brackets }[] = []
  let _index: number = 0

  const read = () => _text[_index]
  const canRead = () => read() !== undefined
  const peek = (index = 1) => (_index += index)

  return {
    read,
    canRead,
    peek,
    get index() {
      return _index
    },
    get contextLocations() {
      return _contextLocations
    },
    get matchedLocations() {
      return _matchedLocations
    },
    enterContext(brackets: Brackets) {
      _contextLocations.push({
        index: _index + 1,
        brackets
      })
    },
    leaveContext(brackets: Brackets) {
      const index = _contextLocations.findIndex(context => {
        return context.brackets.name === brackets.name
      })
      if (index !== -1) {
        const ctxLoc = _contextLocations[index]
        _matchedLocations.push(ctxLoc)
        _contextLocations.splice(index, 1)
      }
    },
    isInContext(brackets: Brackets) {
      return _contextLocations.some(
        contextLocation => contextLocation.brackets.name === brackets.name
      )
    }
  }
}
