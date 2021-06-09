module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "block-opening-brace-space-before": "always",
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"],
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["use", "include", "for", "function", "return", "mixin"],
      },
    ],
    "order/properties-alphabetical-order": true,
  },
};
