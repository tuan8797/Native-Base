"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("../../primitives/Box"));
var _useThemeProps = require("../../../hooks/useThemeProps");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Circle = (props, ref) => {
  const resolvedProps = (0, _useThemeProps.usePropsResolution)('Circle', props);

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({}, resolvedProps, {
    ref: ref
  }));
};
var _default = /*#__PURE__*/_react.default.memo( /*#__PURE__*/_react.default.forwardRef(Circle));
exports.default = _default;
//# sourceMappingURL=Circle.js.map