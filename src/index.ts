import type { TextlintRuleModule } from '@textlint/types'

interface Options {}

const report: TextlintRuleModule<Options> = (_context, _options = {}) => {
  // const { Syntax, RuleError, report, fixer, getSource, locator } = context
  return {}
}

export default {
  linter: report,
  fixer: report
}
