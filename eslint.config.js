import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginESLintComments from 'eslint-plugin-eslint-comments';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      globals: globals.browser,
    },
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'simple-import-sort': pluginSimpleImportSort,
      'testing-library': pluginTestingLibrary,
      'eslint-comments': pluginESLintComments,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-named-as-default': 'off',
      'testing-library/await-async-utils': 'off',
      'testing-library/no-unnecessary-act': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      'eslint-comments/no-unused-disable': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-console': ['warn', { allow: ['error'] }],
      'no-unused-expressions': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-misused-promises': ['off', { checksVoidReturn: false }],
      'import/no-relative-parent-imports': 'warn',
      'import/no-unresolved': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'error',
      'import/no-named-as-default-member': 'off',
      'simple-import-sort/exports': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              '^(assert|buffer|child_process|cluster|console|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            ],
            ['^react', '^@?\\w'],
            ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$', '^.+\\.styled'],
          ],
        },
      ],
    },
  },

  prettier,
];
