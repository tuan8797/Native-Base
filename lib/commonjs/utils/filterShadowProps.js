"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterShadowProps = void 0;
var _tools = require("./../theme/tools/");
var _lodash = require("lodash");
const filterShadowProps = (props, ignoredProps, OS) => {
  if (OS !== 'web') {
    return {
      ...ignoredProps,
      ...props
    };
  }
  let style = ignoredProps.style ?? {};
  let [shadowProps, remainingProps] = (0, _tools.extractInObject)(props, ['shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius']);
  if (!(0, _lodash.isEmpty)(shadowProps)) {
    style = {
      ...style,
      ...shadowProps
    };
  }
  return {
    ...remainingProps,
    ...ignoredProps,
    style
  };
};
exports.filterShadowProps = filterShadowProps;
//# sourceMappingURL=filterShadowProps.js.map