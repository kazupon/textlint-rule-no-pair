// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)

import {
  Parenthesis,
  SquareBrackets,
  CurlyBrackets,
  FullWidthParenthesis,
  FullWidthSquareBrackets,
  FullWidthCurlyBrackets,
  CornerBrackets,
  WhiteCornerBrackets,
  LessGreeterThanAngleBrackets,
  LenticularBrackets,
  WhiteLenticularBrackets,
  WhiteSquareBrackets
} from './brackets'
import type { Brackets } from './brackets'
import type { TextlintRuleModule } from '@textlint/types'

export interface Options {
  disallowBrackets?: Brackets[]
}

const report: TextlintRuleModule<Options> = (_context, _options = {}) => {
  // const { Syntax, RuleError, report, fixer, getSource, locator } = context
  return {}
}

export default {
  linter: report,
  fixer: report,
  brackets: {
    Parenthesis,
    SquareBrackets,
    CurlyBrackets,
    FullWidthParenthesis,
    FullWidthSquareBrackets,
    FullWidthCurlyBrackets,
    CornerBrackets,
    WhiteCornerBrackets,
    LessGreeterThanAngleBrackets,
    LenticularBrackets,
    WhiteLenticularBrackets,
    WhiteSquareBrackets
  }
}
