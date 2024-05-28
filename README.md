# textlint-rule-no-pair

textlint rule for no pair

## 📖 Rule Details

This rule checks whether the disallowed brackets are present in the sentences.

## 🍭 Example

For example, if full-width parenthesis and lenticular brackets are not allowed, the following are NG and OK:

### ❌ NG

```
They are coming to our house after work（around six o'clock）.

【重要】これは(秘密)です。
```

### ✅ OK

```
They are coming to our house after work (around six o'clock).

[重要] これは(秘密)です。
```

## 💿 Installlation

Install with [npm](https://www.npmjs.com/):

```sh
npm install textlint-rule-no-pair
```

## 🚀 Usages

### Configure `.textlintrc`

It’s recommended that this rule is used in `.textlintrc.js`.

**This rule allows all pair by default**. So you need to put to `disallowPairs` option which pairs you do not allow.

Below is an example of using full-width parenthesis and lenticular brackets:

```js
const { FullWidthParenthesis, LenticularBrackets } =
  require('textlint-rule-no-pair').pairs

module.exports = {
  rules: {
    'no-pair': {
      disallowPairs: [FullWidthParenthesis, LenticularBrackets]
    }
  }
}
```

### Custom disallow pairs

If you would like to use other pairs, you can put the pairs scheme.

You must define the pair scheme, which is an object with following the properties:

- `name`: the name of the bracket
- `start`: the opening pair character
- `end`: the closing pair character

these interface is defined in [here](https://github.com/kazupon/textlint-rule-no-pair/blob/c43a27eca5809f485272ce2d5e16a3de88e09d1a/src/brackets.ts#L8-L21)

```js
module.exports = {
  rules: {
    'no-pair': {
      disallowPairs: [
        {
          name: 'Double Angle Quotation Mark',
          start: '«',
          end: '»'
        }
      ]
    }
  }
}
```

## 🔨 Support Built-in Pairs

- Parenthesis: `(` and `)`
- Square Brackets: `[` and `]`
- Curly Brackets: `{` and `}`
- Full-Width Parenthesis: `（` and `）`
- Full-Width Square Brackets: `［` and `］`
- Full-Width Curly Brackets: `｛` and `｝`
- Corner Brackets: `「` and `」`
- White Corner Brackets: `『` and `』`
- Less-Than and Greater-Than Angle Brackets: `<` and `>`
- Lenticular Brackets: `【` and `】`
- White Lenticular Brackets: `〖` and `〗`
- White Square Brackets: `〚` and `〛`

These built-in pairs is defined in [here](https://github.com/kazupon/textlint-rule-no-pair/blob/main/src/brackets.ts#L27-L145)

If you would like to use these built-in pairs and custom pairs, you can use spread syntax (`...`) as follows:

```js
const { defaultPairs } = require('textlint-rule-no-pair')

module.exports = {
  rules: {
    'no-pair': {
      disallowPairs: [
        {
          name: 'Double Angle Quotation Mark',
          start: '«',
          end: '»'
        },
        ...defaultPairs
      ]
    }
  }
}
```

## 🙌 Contributing guidelines

If you are interested in contributing to `textlint-rule-no-pair`, I highly recommend checking out [the contributing guidelines](/CONTRIBUTING.md) here. You'll find all the relevant information such as [how to make a PR](/CONTRIBUTING.md#pull-request-guidelines), [how to setup development](/CONTRIBUTING.md#development-setup)) etc., there.

## ©️ License

MIT ©️ 2024 [kazupon](https://github.com/kazupon)
