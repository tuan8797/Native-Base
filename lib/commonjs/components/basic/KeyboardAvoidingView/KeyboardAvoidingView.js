"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardAvoidingView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hooks = require("../../../hooks");
var _styled = require("../../../utils/styled");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledKeyboardAvoidingView = (0, _styled.makeStyledComponent)(_reactNative.KeyboardAvoidingView);
const KeyboardAvoidingView = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    ...resolvedProps
  } = (0, _hooks.usePropsResolution)('KeyboardAvoidingView', props, {});
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(StyledKeyboardAvoidingView, _extends({}, resolvedProps, {
    ref: ref
  }));
});
exports.KeyboardAvoidingView = KeyboardAvoidingView;
//# sourceMappingURL=KeyboardAvoidingView.js.map