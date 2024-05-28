// SPDX-License-Identifier: MIT
// Author: kazuya kawaguchi (a.k.a. kazupon)

/**
 * Brackets Type
 * @description An interface that defines the bracket type.
 */
export interface Brackets {
  /**
   * The name of the bracket.
   */
  name: string
  /**
   * The opening bracket.
   */
  start: string
  /**
   * The closing bracket.
   */
  end: string
}

/**
 * Built-in Brackets
 */

/**
 * Parenthesis
 * @see https://en.wikipedia.org/wiki/Bracket#Parentheses_or_round_brackets
 */
export const Parenthesis: Brackets = {
  name: 'Parenthesis',
  start: '(', // unicode: U+0028
  end: ')' // unicode: U+0029
}

/**
 * Square Brackets
 * @see https://en.wikipedia.org/wiki/Bracket#Square_brackets
 */
export const SquareBrackets: Brackets = {
  name: 'Square Brackets',
  start: '[', // unicode: U+005B
  end: ']' // unicode: U+005D
}

/**
 * Curly Brackets
 * @see https://en.wikipedia.org/wiki/Bracket#Curly_brackets
 */
export const CurlyBrackets: Brackets = {
  name: 'Curly Brackets',
  start: '{', // unicode: U+007B
  end: '}' // unicode: U+007D
}

/**
 * Full-Width Parenthesis
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%B8%B8%E6%8B%AC%E5%BC%A7%EF%BC%88_%EF%BC%89
 */
export const FullWidthParenthesis: Brackets = {
  name: 'Full-Width Parenthesis',
  start: '（', // unicode: U+FF08
  end: '）' // unicode: U+FF09
}

/**
 * Full-Width Square Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E8%A7%92%E6%8B%AC%E5%BC%A7%EF%BC%BB_%EF%BC%BD
 */
export const FullWidthSquareBrackets: Brackets = {
  name: 'Full-Width Square Brackets',
  start: '［', // unicode: U+FF3B
  end: '］' // unicode: U+FF3D
}

/**
 * Full-Width Curly Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E6%B3%A2%E6%8B%AC%E5%BC%A7%EF%BD%9B_%EF%BD%9D
 */
export const FullWidthCurlyBrackets: Brackets = {
  name: 'Full-Width Curly Brackets',
  start: '｛', // unicode: U+FF5B
  end: '｝' // unicode: U+FF5D
}

/**
 * Corner Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%89%A4%E6%8B%AC%E5%BC%A7%E3%80%8C_%E3%80%8D
 */
export const CornerBrackets: Brackets = {
  name: 'Corner Brackets',
  start: '「', // unicode: U+300C
  end: '」' // unicode: U+300D
}

/**
 * White Corner Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%BA%8C%E9%87%8D%E9%89%A4%E6%8B%AC%E5%BC%A7%E3%80%8E_%E3%80%8F
 */
export const WhiteCornerBrackets: Brackets = {
  name: 'White Corner Brackets',
  start: '『', // unicode: U+300E
  end: '』' // unicode: U+300F
}

/**
 * Less-Than and Greater-Than Signs
 * @see https://en.wikipedia.org/wiki/Bracket#Angle_brackets
 */
export const LessGreeterThanAngleBrackets: Brackets = {
  name: 'Less-Than and Greater-Than Angle Brackets',
  start: '<', // unicode: U+003C
  end: '>' // unicode: U+003E
}

/**
 * Lenticular Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%9A%85%E4%BB%98%E3%81%8D%E6%8B%AC%E5%BC%A7%E3%80%90_%E3%80%91
 */
export const LenticularBrackets: Brackets = {
  name: 'Lenticular Brackets',
  start: '【', // unicode: U+3010
  end: '】' // unicode: U+3011
}

/**
 * White Lenticular Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E9%9A%85%E4%BB%98%E3%81%8D%E6%8B%AC%E5%BC%A7%EF%BC%88%E7%99%BD%EF%BC%89%E3%80%96_%E3%80%97
 */
export const WhiteLenticularBrackets: Brackets = {
  name: 'White Lenticular Brackets',
  start: '〖', // unicode: U+3016
  end: '〗' // unicode: U+3017
}

/**
 * White Square Brackets
 * @see https://ja.wikipedia.org/wiki/%E6%8B%AC%E5%BC%A7#%E4%BA%8C%E9%87%8D%E8%A7%92%E6%8B%AC%E5%BC%A7%E3%80%9A_%E3%80%9B
 */
export const WhiteSquareBrackets: Brackets = {
  name: 'White Square Brackets',
  start: '〚', // unicode: U+301A
  end: '〛' // unicode: U+301B
}
