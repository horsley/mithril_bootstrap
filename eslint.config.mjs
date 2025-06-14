// ESLint 9+ Flat Config
import js from "@eslint/js";

export default [
    {
        ignores: [
            'dist/**'
        ]
    },
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly"
            }
        },
        rules: {
            // 可以根据需要自定义规则
            indent: ["error", 2],
        },
    }
];
