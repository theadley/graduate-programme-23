module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: "airbnb-base",
  rules: {
    "no-alert": "error",
  },
};
