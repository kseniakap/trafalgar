// eslint-disable-next-line @typescript-eslint/no-var-requires
const branchNameLint = require('@web-bee-ru/branch-name-lint');

// See: https://github.com/barzik/branch-name-lint#options
const options = {
  prefixes: ['feature', 'hotfix', 'release'],
  suggestions: {
    features: 'feature',
    feat: 'feature',
    fix: 'hotfix',
    releases: 'release',
  },
  banned: ['wip', 'bugfix'],
  skip: ['master', 'develop', 'main'],
  disallowed: ['staging'],
  separator: '/',
  msgBranchBanned: 'Branches with the name "%s" are not allowed.',
  msgBranchDisallowed: 'Pushing to "%s" is not allowed, use git-flow.',
  msgPrefixNotAllowed: 'Branch prefix "%s" is not allowed.',
  msgPrefixSuggestion: 'Instead of "%s" try "%s".',
  msgseparatorRequired: 'Branch "%s" must contain a separator "%s".',
  msgDoesNotMatchRegex: 'Branch "%s" does not match the allowed pattern: "%s"',
};

const answer = new branchNameLint(options).doValidation();

if (answer === 1) {
  process.exit(1);
}
