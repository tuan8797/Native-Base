"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hooks = require("../../../hooks");
var _Box = _interopRequireDefault(require("../../primitives/Box"));
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Container = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const resolvedProps = (0, _hooks.usePropsResolution)('Container', props);

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
    ref: ref
  }, resolvedProps), children);
};
var _default = /*#__PURE__*/_react.default.memo( /*#__PURE__*/_react.default.forwardRef(Container));
exports.default = _default;
//# sourceMappingURL=index.js.map