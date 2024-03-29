module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:svelte/recommended',
        'plugin:svelte/prettier'
    ],
    overrides: [{files: ['*.svelte']}],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
};
