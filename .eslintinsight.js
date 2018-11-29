module.exports = {
    // Standard
    'id-length': [2, {'min': 1, 'max': 30}],
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': 'error',
    'require-await': 'error',
    'no-useless-return': 'error',
    'array-callback-return': 'error',
    'complexity': ['error', 30],
    'consistent-return': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'no-fallthrough': 'off',
    'yoda': 'error',
    'callback-return': 'error',
    'func-style': ["error", "declaration", { "allowArrowFunctions": true }],
    'no-unused-expressions': 'off',

    // Vue Specific
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off'
}