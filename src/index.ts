module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:node/recommended',
    'eslint:recommended',
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended', // typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['node_modules', '.eslintrc.js'],
  overrides: [
    {
      files: ['spec/**/*.ts'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['sort-keys-fix'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      { format: null, modifiers: ['requiresQuotes'], selector: 'default' },
      { format: ['camelCase', 'PascalCase'], selector: 'default' }
    ],
    camelcase: 'off',
    'import/extensions': ['error', 'never', { ignorePackages: true }],
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'no-throw-literal': 'error',
    'no-underscore-dangle': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-missing-import': ['error', { tryExtensions: ['.ts', '.d.ts', '.js'] }],
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'sort-keys-fix/sort-keys-fix': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    node: {
      resolvePaths: ['./src', 'node_modules']
    }
  }
};
