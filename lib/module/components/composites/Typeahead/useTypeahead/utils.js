export const dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};
export function capitalizeString(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
}
export function getDefaultValue(props, propKey) {
  let defaultStateValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dropdownDefaultStateValues;
  const defaultPropKey = `default${capitalizeString(propKey)}`;
  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }
  //@ts-ignore
  return defaultStateValues[propKey];
}
//# sourceMappingURL=utils.js.map