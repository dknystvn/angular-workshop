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
  },
};