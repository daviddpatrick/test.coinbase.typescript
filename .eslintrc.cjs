/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    "plugins": ["prettier", "unused-imports", "no-floating-promise"],
    root: true,
    "rules": {
        "class-methods-use-this": "off",
        " prefer-const": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "prettier/prettier": ["error", { "trailingComma": "all", "printWidth": 120 }],
        "no-underscore-dangle": "off",
        "no-param-reassign": "off",
        "no-restricted-globals": "off",
        "no-use-before-define": ["warn", { "functions": true }],
        "require-await": 2,
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "error",
        "no-floating-promise/no-floating-promise": "error"
    },
    "globals": {
        "window": false,
        "Data": false,
        "actor": false,
        "within": false,
        "Feature": false,
        "Scenario": false
    }
};