const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es6: true,
    es2020: true,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugins: [
    'react',
    'react-hooks',
    'unused-imports',
    'import',
    'jsx-a11y',
  ],
  globals: {
    Atomics: 'readonly',
    React: 'writable',
    SharedArrayBuffer: 'readonly',
    __base: false,
    awslambda: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  ignorePatterns: ['**/face_mesh/*.js'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'max-len': 0,
    'no-continue': 0,
    'no-throw-literal': 0,
    camelcase: 0,
    'no-console': 1,
    'no-await-in-loop': 1,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'linebreak-style': ['off', 'windows'],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'react/prop-types': 0,
    'new-cap': 0,
    'no-extra-boolean-cast': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-plusplus': 0,
    'no-irregular-whitespace': 0,
    'default-case': 0,
    'no-restricted-properties': 0,
    eqeqeq: 0,
    radix: 0,
    'arrow-parens': 0,
    'consistent-return': 0,
    'prefer-rest-params': 0,
    'no-script-url': 0,
    'import/newline-after-import': 0,
    'operator-linebreak': 0,
    'max-classes-per-file': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-no-target-blank': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', './'],
      },
      alias: {
        map: [
          ['@client', path.join(__dirname, './packages/client')],
          ['@server', path.join(__dirname, './packages/server')],
          ['@shared', path.join(__dirname, './packages/shared')],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
