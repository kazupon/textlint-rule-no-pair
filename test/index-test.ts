import TextLintTester from 'textlint-tester'
import rule from '../src/index'
import {
  Parenthesis,
  FullWidthParenthesis,
  LenticularBrackets,
  CornerBrackets
} from '../src/brackets'

const tester = new TextLintTester()

tester.run('no-bracket', rule, {
  valid: [
    `{"{ABC}"}`,
    'test {"{ABC`{"{ABC}"}`}"} ok.',
    'これは(秘密)です。',
    `John said "Hello World!".`,
    '`(` is ok.',
    '文字列リテラルには3種類ありますが、まずは`"`（ダブルクオート）と`\'`（シングルクオート）について見ていきます。',
    `a is b.
\`"\`（ダブルクオート）と\`'\`（シングルクオート）に意味的な違いはありません。
この書籍では、\`"\`（ダブルクオート）を主に文字列リテラルとして利用します。`,
    `そのため、Todoアイテムの状態を更新するには、HTML要素にTodoアイテムの情報（タイトルや識別子となるidなど）をすべて埋め込む必要があります。
しかし、HTML要素に対して文字列しか埋め込めないため、Todoアイテムのデータを文字列にしないといけないという制限が発生します。

また操作と表示が1対1で更新される場合、1つの操作に対して複数の箇所の表示が更新されることもあります。
今回のTodoアプリでもTodoリスト（\`#js-todo-list\`）とTodoアイテム数（\`#js-todo-count\`）の2箇所を更新する必要があることからも分かります。
`
  ],
  invalid: [
    {
      text: '【重要】これは（秘密）です。',
      options: {
        disallowBrackets: [FullWidthParenthesis, LenticularBrackets]
      },
      errors: [
        {
          index: 1,
          message: `Disallow Lenticular Brackets '【' and '】'.`
        },
        {
          index: 8,
          message: `Disallow Full-Width Parenthesis '（' and '）'.`
        }
      ]
    },
    {
      text:
        '`src/App.js`にファイルを作成し、次のような内容のJavaScriptモジュールとします。\n' +
        'モジュールは、基本的には何かしらを外部に公開(`export`)します。',
      options: {
        disallowBrackets: [Parenthesis]
      },
      errors: [
        {
          index: 74
        }
      ]
    },
    {
      text: `このように\`count\`変数が自動解放されずに保持できているのは「（\`increment\`）関数が外側のスコープにある（\`count\`）変数への参照を保持できる」ためです。このような性質のことをクロージャー(関数閉包)と呼びます。クロージャーは静的スコープと変数は参照され続けていればデータは保持されるという2つの性質によって成り立っています。`,
      options: {
        disallowBrackets: [FullWidthParenthesis, CornerBrackets]
      },
      errors: [
        {
          line: 1,
          column: 34,
          index: 33,
          message: `Disallow Corner Brackets '「' and '」'.`
        },
        {
          line: 1,
          column: 35,
          index: 34,
          message: `Disallow Full-Width Parenthesis '（' and '）'.`
        },
        {
          line: 1,
          column: 61,
          index: 60,
          message: `Disallow Full-Width Parenthesis '（' and '）'.`
        }
      ]
    },
    {
      text: `DUMMY DUUMY.


このように\`count\`変数が自動解放されずに保持できているのは「（\`increment\`）関数が外側のスコープにある（\`count\`）変数への参照を保持できる」ためです。このような性質のことをクロージャー(関数閉包)と呼びます。クロージャーは静的スコープと変数は参照され続けていればデータは保持されるという2つの性質によって成り立っています。`,
      options: {
        disallowBrackets: [FullWidthParenthesis, CornerBrackets]
      },
      errors: [
        {
          line: 4,
          column: 34,
          index: 48
        },
        {
          line: 4,
          column: 35,
          index: 49
        },
        {
          line: 4,
          column: 61,
          index: 75
        }
      ]
    }
  ]
})
