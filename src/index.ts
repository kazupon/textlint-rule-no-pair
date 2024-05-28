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
} from './pairs'
import { createSourceCode } from './SourceCode'
import { createPairMarker } from './PairMaker'

import type { TextlintRuleModule } from '@textlint/types'
import type { Pair } from './pairs'

export interface Options {
  disallowPairs?: Pair[]
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
  const { Syntax, RuleError, report } = context
  const disallowPairs = options.disallowPairs || []
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
          const pairMaker = createPairMarker(disallowPairs)
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
                `Disallow ${ctxLoc.pair.name} '${ctxLoc.pair.start}' and '${ctxLoc.pair.end}'.`,
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
 * Supports export of individual built-in pairs
 */
const pairs = {
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
const defaultPairs = Object.values(pairs)

export default {
  linter: report,
  fixer: report,
  pairs,
  defaultPairs
}
