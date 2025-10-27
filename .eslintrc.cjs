/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
  rules: {
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "import/prefer-default-export": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-param-reassign": ["error"],
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",
    "padding-line-between-statements": "off",
    "no-var": "off",
    "prefer-const": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/jsx-filename-extension": "off",
    "react/no-unescaped-entities": "off",
    "no-nested-ternary": "error",
  },
};

module.exports = config;
