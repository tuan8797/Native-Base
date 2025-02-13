"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Stack = require("../Stack");
var _useThemeProps = require("../../../hooks/useThemeProps");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const OrderedList = (_ref, ref) => {
  let {
    style,
    children,
    ...props
  } = _ref;
  const {
    _text,
    start,
    _hover,
    ...resolvedProps
  } = (0, _useThemeProps.usePropsResolution)('List', props);
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  // add props to children
  children = _react.default.Children.map(children, (child, ind) => {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      ol: true,
      index: ind,
      _text,
      _hover,
      start,
      ...child.props
    }, child.props.children);
  });
  return /*#__PURE__*/_react.default.createElement(_Stack.VStack, _extends({
    style: style
  }, resolvedProps, {
    ref: ref
  }), children);
};
var _default = /*#__PURE__*/_react.default.memo( /*#__PURE__*/_react.default.forwardRef(OrderedList));
exports.default = _default;
//# sourceMappingURL=Ordered.js.map