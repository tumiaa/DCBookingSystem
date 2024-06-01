// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintParser from '@typescript-eslint/parser'

// @ts-ignore
import pluginVue from 'eslint-plugin-vue'
//@ts-ignore
import eslintConfigPrettier from '@vue/eslint-config-prettier'

import esLintPluginPlaywright from 'eslint-plugin-playwright'

export default withNuxt([
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: ['**/node_modules/**', '**/.nuxt/**', '**/dist/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
  {
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    plugins: {
      playwright: 'eslint-plugin-playwright',
    },
    rules: {
      ...esLintPluginPlaywright.configs.recommended.rules,
    },
  },
]);
