//@ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...pluginVue.configs['flat/recommended'],
    {
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
                tsconfigRootDir: "./",
            },
        },
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            'keyword-spacing': ['error', {before: true, after: true}],
            'indent': ['error', 4, {'SwitchCase': 1}],
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': [
                'error', {
                    'ignores': [
                        'Home',
                        'Templates',
                        'Test'
                    ]
                }
            ]
        }
    }
);
