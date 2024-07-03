"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToken = useToken;
var _useTheme = require("./useTheme");
var _lodash = require("lodash");
function useToken(property, token, fallback) {
  const theme = (0, _useTheme.useTheme)();
  if (Array.isArray(token)) {
    let fallbackArr = [];
    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }
    return token.map((innerToken, index) => {
      const path = `${property}.${innerToken}`;
      return (0, _lodash.get)(theme, path, fallbackArr[index] ?? innerToken);
    });
  }
  const path = `${property}.${token}`;
  return (0, _lodash.get)(theme, path, fallback ?? token);
}
//# sourceMappingURL=useToken.js.map