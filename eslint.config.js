const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const jestPlugin = require('eslint-plugin-jest');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx', '**/__tests__/**/*'],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
    env: {
      'jest/globals': true,
    },
  },
]);
