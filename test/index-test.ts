import TextLintTester from 'textlint-tester'
import rule from '../src/index'

const tester = new TextLintTester()

tester.run('no-bracket', rule, {
  valid: [],
  invalid: []
})
