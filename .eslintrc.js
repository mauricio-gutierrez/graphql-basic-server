module.exports = {
    extends: ["airbnb-base","plugin:prettier/recommended"],
    parser: "babel-eslint",
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "arrow-body-style": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "no-shadow": "off",
      camelcase: "off",
      "no-plusplus": "off",
      "no-param-reassign": "off",
      "no-case-declarations": "off",
      "no-unneeded-ternary": "off",
      "no-else-return": ["error", { allowElseIf: true }],
    },
  };