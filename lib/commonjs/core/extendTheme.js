"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendTheme = extendTheme;
var _theme = require("./../theme");
var _lodash = require("lodash");
function isFunction(value) {
  return typeof value === 'function';
}
function extendTheme(overrides) {
  function customizer(source, override) {
    if (isFunction(source)) {
      return function () {
        const sourceValue = source(...arguments);
        const overrideValue = isFunction(override) ? override(...arguments) : override;
        return (0, _lodash.mergeWith)({}, sourceValue, overrideValue, customizer);
      };
    }
    return undefined;
  }
  for (var _len = arguments.length, restOverrides = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restOverrides[_key - 1] = arguments[_key];
  }
  const finalOverrides = [overrides, ...restOverrides].reduce((prevValue, currentValue) => {
    return (0, _lodash.mergeWith)({}, prevValue, currentValue, customizer);
  }, _theme.theme);
  return finalOverrides;
}
//# sourceMappingURL=extendTheme.js.map