# textlint-rule-no-bracket

textlint rule for no bracket

## 📖 Rule Details

This rule checks whether the disallowed brackets are present in the sentences.

## 🍭 Example

For example, if full-width parenthesis and lenticular brackets are not allowed, the following are NG and OK:

### ❌ NG

```
They are coming to our house after work（around six o’ clock）.

【重要】これは(秘密)です。
```

### ✅ OK

```
They are coming to our house after work (around six o’ clock).

[重要] これは(秘密)です。
```

## 💿 Installlation

Install with [npm](https://www.npmjs.com/):

```sh
npm install textlint-rule-no-bracket
```

## 🚀 Usages

### Configure `.textlintrc`

It’s recommended that this rule is used in `.textlintrc`.

**This rule allows all brackets by default**. So you need to put to `disallowBrackets` option which brackets you do not allow.

Below is an example of using full-width parenthesis and lenticular brackets:

```js
const { FullWidthParenthesis, LenticularBrackets } =
  require('textlint-rule-no-bracket').brackes

module.exports = {
  rules: {
    'no-bracket': {
      disallowBrackets: [FullWidthParenthesis, LenticularBrackets]
    }
  }
}
```

### Custom disallow brackets

If you would like to use other brackets, you can put the bracket scheme.

You must define the bracket scheme, which is an object with following the properties:

- `name`: the name of the bracket
- `start`: the openning bracket character
- `end`: the closing bracket character

```js
module.exports = {
  rules: {
    'no-bracket': {
      disallowBrackets: [
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

## 🔨 Support Built-in Brackets

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

If you would like to use these built-in brackets and custom brackets, you can use spread syntax (`...`) as follows:

```js
const { defaultBrackets } = require('textlint-rule-no-bracket')

module.exports = {
  rules: {
    'no-bracket': {
      disallowBrackets: [
        {
          name: 'Double Angle Quotation Mark',
          start: '«',
          end: '»'
        },
        ...defaultBrackets
      ]
    }
  }
}
```

## 🙌 Contributing guidelines

If you are interested in contributing to `textlint-rule-no-bracket`, I highly recommend checking out [the contributing guidelines](/CONTRIBUTING.md) here. You'll find all the relevant information such as [how to make a PR](/CONTRIBUTING.md#pull-request-guidelines), [how to setup development](/CONTRIBUTING.md#development-setup)) etc., there.

## ©️ License

MIT ©️ 2024 [kazupon](https://github.com/kazupon)
