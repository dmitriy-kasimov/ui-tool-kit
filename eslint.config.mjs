import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReact from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['config', 'build', 'eslint.config.mjs', 'node_modules', '.git'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports,
            'eslint-plugin-react': eslintPluginReact,
            'eslint-config-prettier': eslintConfigPrettier
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'eslint-plugin-react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'sort-imports': [
                'warn',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                    allowSeparatedGroups: false
                }
            ]
        }
    }
)
