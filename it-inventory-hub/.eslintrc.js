module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "ui-components",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["src/*"],
            message: "Usage of relative parent imports is not allowed.",
          },
        ],
      },
    ],
    complexity: ["error", { max: 10 }],
    radix: ["error"],
    "import/no-deprecated": "warn",
    "max-lines-per-function": [
      "error",
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "no-loss-of-precision": ["error"],
    "no-else-return": ["error"],
    "no-new-wrappers": ["error"],
    "no-param-reassign": ["error"],
    "no-throw-literal": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-return": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "require-await": ["error"],
    "yoda": ["error"],
    "no-shadow": "off",
    "no-extra-boolean-cast": "off",
    "no-confusing-arrow": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "prefer-const": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "symbol-description": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/consistent-indexed-object-style": ["error"],
    "@typescript-eslint/consistent-type-assertions": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-dynamic-delete": ["error"],
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-require-imports": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/prefer-literal-enum-member": ["error"],
    "@typescript-eslint/prefer-ts-expect-error": ["error"],
    "@typescript-eslint/unified-signatures": ["error"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "classProperty",
        "modifiers": ["static", "readonly"],
        "format": ["UPPER_CASE"],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "classMethod",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "parameterProperty",
        "format": ["camelCase"],
        "leadingUnderscore": "forbid"
      },
      {
        "selector": "accessor",
        "format": ["camelCase"],
        "leadingUnderscore": "forbid"
      }
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "signature",
          "field",
          "constructor",
          "method"
        ]
      }
    ]
  },
};