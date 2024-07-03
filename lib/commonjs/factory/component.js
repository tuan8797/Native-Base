"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Factory;
var _react = _interopRequireWildcard(require("react"));
var _usePropsWithComponentTheme = require("../hooks/useThemeProps/usePropsWithComponentTheme");
var _styled = require("../utils/styled");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Factory(Component, componentTheme) {
  return /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
    let {
      children,
      _state,
      ...props
    } = _ref;
    const StyledComponent = (0, _react.useMemo)(() => (0, _styled.makeStyledComponent)(Component), []);
    const calculatedProps = (0, _usePropsWithComponentTheme.usePropsWithComponentTheme)(componentTheme ?? {}, props, _state);
    return /*#__PURE__*/_react.default.createElement(StyledComponent, _extends({}, calculatedProps, {
      ref: ref
    }), children);
  });
}
//# sourceMappingURL=component.js.map