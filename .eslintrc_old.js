module.exports = {
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "react/function-component-definition": "off",
  },
};
