"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};
function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (name in cache) {
    return cache[name];
  }
  const hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
var _default = hyphenateStyleName;
exports.default = _default;
//# sourceMappingURL=hyphenateStyleName.js.map