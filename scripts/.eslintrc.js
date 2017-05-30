module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        // Possible errors
        "no-await-in-loop": "warn",
        "no-compare-neg-zero": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-dupe-args": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty": "warn",
        "no-empty-character-class": "warn",
        "no-ex-assign": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-parens": "warn",
        "no-extra-semi": "warn",
        "no-func-assign": "warn",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-irregular-whitespace": "warn",
        "no-obj-calls": "warn",
        "no-prototype-builtins": "warn",
        "no-regex-spaces": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-unexpected-multiline": "warn",
        "no-unreachable": "warn",
        "no-unsafe-finally": "warn",
        "no-unsafe-negation": "warn",
        "use-isnan": "warn",
        "valid-jsdoc": "off",
        "valid-tyepof": "warn",

        // Best Practices
        "accessor-pairs": "off",
        "array-callback-return": "warn",
        "block-scoped-var": "warn",
        "class-methods-use-this": "warn",
        "complexity": ["warn", 5],
        "consistent-return": "warn",
        "curly": "warn",
        "default-case": "warn",
        "dot-location": ["warn", "property"],
        "dot-notation": ["warn", { "allowKeywords": false }],
        "eqeqeq": "warn",
        "guard-for-in": "warn",
        "no-alert": "warn",
        "no-caller": "warn",
        "no-case-declarations": "warn",
        "no-div-regex": "warn",
        "no-empty-pattern": "warn",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eval": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-falltrough": "warn",
        "no-floating-decimal": "warn",
        "no-global-assign": "warn",
        "no-implicit-coercion": "warn",
        "no-implicit-globals": "warn",
        "no-implied-eval": "warn",
        "no-invalid-this": "warn",
        "no-iterator": "warn",
        "no-labels": "warn",
        "no-lone-block": "warn",
        "no-loop-func": "warn",
        "no-magic-numbers": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-wrappers": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-param-reassign": "warn",
        "no-proto": "warn",
        "no-redeclare": "warn",
        "no-return-assign": "warn",
        "no-return-await": "warn",
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-throw-literal": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": "warn",
        "no-unused=labels": "warn",
        "no-useless-call": "warn",
        "no-useless-concat": "warn",
        "no-useless-escape": "warn",
        "no-useless-return": "warn",
        "no-void": "warn",
        "no-with": "warn",
        "prefer-promise-reject-errors": "warn",
        "radix": "off",
        "require-await": "warn",
        "vars-on-top": "warn",
        "wrap-iife": ["warn", "inside"],
        "yoda": "warn",

        // Strict Mode
        "strict": "off",

        // Variables
        "init-declarations": "warn",
        "no-catch-shadow": "warn",
        "no-delete-var": "warn",
        "no-label-var": "warn",
        "no-restricted-globals": "warn",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "warn",
        "no-undef": "warn",
        "no-undef-init": "warn",
        "no-undefined": "warn",
        "no-unused-var": "warn",
        "no-use-before-define": "warn",

        // Node.js and CommonJS alles error
        "callback-return": "warn",
        "global-require": "warn",
        "handle-callback-err": "warn",
        "no-mixed-requires": "warn",
        "no-new-require": "warn",
        "no-path-concat": "warn",
        "no-process-env": "warn",
        "no-process-exit": "warn",
        "no-restricted-modules": "warn",
        "no-sync": "warn",

        // Stylistic Issues
        "array-bracket-spacing": ["warn", "never"],
        "block-spacing": "warn",
        "brace-styles": "warn",
        "camelcase": "warn",
        "capitalized-comments": "warn",
        "comma-dangle": ["warn", "always"],
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        "consistent-this": ["warn", "that"],
        "eol-last": "warn",
        "func-call-spacing": "warn",
        "func-name-matching": "warn",
        "func-names": "warn",
        "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": ["warn", 2],
        "jsx-quotes": "off",
        "key-spacing": ["warn", { "align": "value" }],
        "keyword-spacing": "warn",
        "line-comment-position": "warn",
        "linebreak-style": ["warn", "unix"],
        "lines-around-comment": "warn",
        "lines-around-directive": "warn",
        "max-depth": "warn",
        "max-len": "warn",
        "max-lines": ["warn", 300, {
            "skipBlankLines": true,
            "skipComments": true,
        }],
        "max-nested-callbacks": "warn",
        "max-params": "warn",
        "max-statements": "warn",
        "max-statements-per-line": "warn",
        "multiline-ternary": ["warn", "never"],
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-after-var": "warn",
        "newline-before-return": "warn",
        "newline-per-chained-call": "warn",
        "no-array-constructor": "warn",
        "no-bitwise": "warn",
        "no-continue": "warn",
        "no-inline-comments": "warn",
        "no-lonely-if": "warn",
        "no-mixed-operators": "warn",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-assign": "warn",
        "no-multiple-empty-lines": "warn",
        "no-negated-condition": "warn",
        "no-nested-ternary": "warn",
        "no-new-object": "warn",
        "no-plusplus": "warn",
        "no-restricted-syntax": "off",
        "no-tabs": "warn",
        "no-ternary": "off",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "warn",
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "warn",
        "object-curly-spacing": ["warn", "always"],
        "object-property-newline": "warn",
        "one-var": "warn",
        "one-var-declaration-per-line": "warn",
        "operator-assignment": "warn",
        "operator-linebreak": ["warn", "none"],
        "padded-blocks": ["warn", "never"],
        "quote-props": ["warn", "as-needed"],
        "quotes": ["warn", "single"],
        "require-doc": "off",
        "semi": ["warn", "always"],
        "semi-spacing": "warn",
        "sort-keys": "warn",
        "sort-vars": "warn",
        "space-before-blocks": "warn",
        "space-before-function-paren": "warn",
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "spaced-comment": "warn",
        "template-tag-spacing": "warn",
        "unicode-bom": "warn",
        "wrap-regex": "warn",

        // ECMAScript 6
        "arrow-body-style": "warn",
        "arrow-parens": "warn",
        "arrow-spacing": "warn",
        "constructor-super": "warn",
        "generator-star-space": "warn",
        "no-class-assign": "warn",
        "no-confusing-arrow": "warn",
        "no-const-assign": "warn",
        "no-dupe-class-members": "warn",
        "no-duplicate-imports": "warn",
        "no-new-symbol": "warn",
        "no-restricted-imports": "off",
        "no-this-before-super": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-var": "warn",
        "object-shorthand": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-rest-params": "warm",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": "warn",
        "sort-imports": "warn",
        "symbol-description": "warn",
        "template-curly-spacing": "warn",
        "yield-star-spacing": "warn"
    }
};