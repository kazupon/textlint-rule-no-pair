// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)

import { splitAST, SentenceSplitterSyntax } from 'sentence-splitter'
import { IgnoreNodeManager } from 'textlint-rule-helper'
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
import { createSourceCode } from './SourceCode'
import { createBracketMarker } from './BracketMaker'

import type { TextlintRuleModule } from '@textlint/types'
import type { Brackets } from './brackets'

export interface Options {
  disallowBrackets?: Brackets[]
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
  const { Syntax, RuleError, report } = context
  const disallowBrackets = options.disallowBrackets || []
  const ignoreNodeManager = new IgnoreNodeManager()
  return {
    [Syntax.Paragraph](node) {
      // @ts-expect-error FIXME: `splitAST` first argument miss-match
      const sentences = splitAST(node)
      // @ts-expect-error FIXME: `ignoreChildrenByTypes` first argument miss-match
      ignoreNodeManager.ignoreChildrenByTypes(node, [
        Syntax.CodeBlock,
        Syntax.Code,
        Syntax.Link,
        Syntax.Strong,
        Syntax.Emphasis,
        Syntax.BlockQuote,
        Syntax.Comment
      ])
      sentences.children
        .filter(node => node.type === SentenceSplitterSyntax.Sentence)
        .forEach(sentence => {
          const source = createSourceCode(sentence.raw)
          const pairMaker = createBracketMarker(disallowBrackets)
          const sentenceIndex = sentence.range[0]
          while (source.canRead()) {
            // If the character is in ignored range, skip it
            const characterIndex = sentenceIndex + source.index
            if (!ignoreNodeManager.isIgnoredIndex(characterIndex)) {
              pairMaker.mark(source)
            }
            source.peek()
          }
          // Report Error for each existing context keys
          source.matchedLocations.forEach(ctxLoc => {
            report(
              node,
              new RuleError(
                `Disallow ${ctxLoc.brackets.name} '${ctxLoc.brackets.start}' and '${ctxLoc.brackets.end}'.`,
                {
                  index: sentenceIndex - node.range[0] + ctxLoc.index
                }
              )
            )
          })
        })
    }
  }
}

/**
 * Supports export of individual built-in brackets
 */
const brackets = {
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

/**
 * Supports export of all built-in brackets with Array
 * ```
 */
const defaultBrackets = Object.values(brackets)

export default {
  linter: report,
  fixer: report,
  brackets,
  defaultBrackets
}
