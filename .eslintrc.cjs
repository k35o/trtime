/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vitest.config.ts', 'scripts'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.test.json'],
    tsconfigRootDir: __dirname,
  },
}

module.exports = config
