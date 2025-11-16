import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // Global ignores for folders like dist and node_modules
  {
    ignores: ['dist', 'node_modules'],
  },

  // 1. Base ESLint recommended rules
  js.configs.recommended,

  // 2. Spread the TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 3. React Hooks recommended rules
  reactHooks.configs.flat.recommended,

  // 4. Prettier config to disable conflicting style rules (must come before your custom rules)
  prettierConfig,

  // 5. Your custom project configuration
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      // This is the key change to fix the "does not include this file" error
      parserOptions: {
        project: './tsconfig.eslint.json', // Use the new ESLint-specific tsconfig
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Your specific rules can override the ones from the configs above
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error', // Report Prettier issues as ESLint errors
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
);
