// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)

/**
 * Pair Type
 * @description An interface that defines the pair type.
 */
export interface Pair {
  /**
   * The name of the pair
   */
  name: string
  /**
   * The opening pair character.
   */
  start: string
  /**
   * The closing pair character.
   */
  end: string
}

/**
 * Built-in Pairs
 */

/**
 * Parenthesis
 * @see https://en.wikipedia.org/wiki/Bracket#Parentheses_or_round_brackets
 */
export const Parenthesis: Pair = {
  name: 'Parenthesis',
  start: '(', // unicode: U+0028
  end: ')' // unicode: U+0029
}

/**
 * Square Brackets
 * @see https://en.wikipedia.org/wiki/Bracket#Square_brackets
 */
export const SquareBrackets: Pair = {
  name: 'Square Brackets',
  start: '[', // unicode: U+005B
  end: ']' // unicode: U+005D
}

/**
 * Curly Brackets
 * @see https://en.wikipedia.org/wiki/Bracket#Curly_brackets
 */
export const CurlyBrackets: Pair = {
  name: 'Curly Brackets',
  start: '{', // unicode: U+007B
  end: '}' // unicode: U+007D
}

/**
 * Full-Width Parenthesis
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%B8%B8%E6%8B%AC%E5%BC%A7%EF%BC%88_%EF%BC%89
 */
export const FullWidthParenthesis: Pair = {
  name: 'Full-Width Parenthesis',
  start: '（', // unicode: U+FF08
  end: '）' // unicode: U+FF09
}

/**
 * Full-Width Square Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E8%A7%92%E6%8B%AC%E5%BC%A7%EF%BC%BB_%EF%BC%BD
 */
export const FullWidthSquareBrackets: Pair = {
  name: 'Full-Width Square Brackets',
  start: '［', // unicode: U+FF3B
  end: '］' // unicode: U+FF3D
}

/**
 * Full-Width Curly Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E6%B3%A2%E6%8B%AC%E5%BC%A7%EF%BD%9B_%EF%BD%9D
 */
export const FullWidthCurlyBrackets: Pair = {
  name: 'Full-Width Curly Brackets',
  start: '｛', // unicode: U+FF5B
  end: '｝' // unicode: U+FF5D
}

/**
 * Corner Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%89%A4%E6%8B%AC%E5%BC%A7%E3%80%8C_%E3%80%8D
 */
export const CornerBrackets: Pair = {
  name: 'Corner Brackets',
  start: '「', // unicode: U+300C
  end: '」' // unicode: U+300D
}

/**
 * White Corner Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%BA%8C%E9%87%8D%E9%89%A4%E6%8B%AC%E5%BC%A7%E3%80%8E_%E3%80%8F
 */
export const WhiteCornerBrackets: Pair = {
  name: 'White Corner Brackets',
  start: '『', // unicode: U+300E
  end: '』' // unicode: U+300F
}

/**
 * Less-Than and Greater-Than Signs
 * @see https://en.wikipedia.org/wiki/Bracket#Angle_brackets
 */
export const LessGreeterThanAngleBrackets: Pair = {
  name: 'Less-Than and Greater-Than Angle Brackets',
  start: '<', // unicode: U+003C
  end: '>' // unicode: U+003E
}

/**
 * Lenticular Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%9A%85%E4%BB%98%E3%81%8D%E6%8B%AC%E5%BC%A7%E3%80%90_%E3%80%91
 */
export const LenticularBrackets: Pair = {
  name: 'Lenticular Brackets',
  start: '【', // unicode: U+3010
  end: '】' // unicode: U+3011
}

/**
 * White Lenticular Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%9A%85%E4%BB%98%E3%81%8D%E6%8B%AC%E5%BC%A7%EF%BC%88%E7%99%BD%EF%BC%89%E3%80%96_%E3%80%97
 */
export const WhiteLenticularBrackets: Pair = {
  name: 'White Lenticular Brackets',
  start: '〖', // unicode: U+3016
  end: '〗' // unicode: U+3017
}

/**
 * White Square Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%BA%8C%E9%87%8D%E8%A7%92%E6%8B%AC%E5%BC%A7%E3%80%9A_%E3%80%9B
 */
export const WhiteSquareBrackets: Pair = {
  name: 'White Square Brackets',
  start: '〚', // unicode: U+301A
  end: '〛' // unicode: U+301B
}
