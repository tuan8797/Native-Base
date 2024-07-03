"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalizeString = capitalizeString;
exports.dropdownDefaultStateValues = void 0;
exports.getDefaultValue = getDefaultValue;
const dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};
exports.dropdownDefaultStateValues = dropdownDefaultStateValues;
function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
function getDefaultValue(props, propKey) {
  let defaultStateValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dropdownDefaultStateValues;
  const defaultPropKey = `default${capitalizeString(propKey)}`;
  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }
  //@ts-ignore
  return defaultStateValues[propKey];
}
//# sourceMappingURL=utils.js.map