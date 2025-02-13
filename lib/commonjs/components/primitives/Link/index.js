"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Box = _interopRequireDefault(require("../Box"));
var _Text = _interopRequireDefault(require("../Text"));
var _hooks = require("../../../hooks");
var _useLink = require("./useLink");
var _utils = require("../../../utils");
var _Pressable = require("../Pressable");
var _interactions = require("@react-native-aria/interactions");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Link = (_ref2, ref) => {
  let {
    isHovered: isHoveredProp,
    ...props
  } = _ref2;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    isUnderlined,
    children,
    _text,
    href,
    onPress,
    isExternal,
    ...resolvedProps
  } = (0, _hooks.usePropsResolution)('Link', props, {
    isHovered: isHoveredProp || isHovered
  });
  const {
    linkProps
  } = (0, _useLink.useLink)({
    href,
    onPress,
    isExternal,
    _ref
  });
  const linkTextProps = {
    textDecorationLine: isUnderlined ? 'underline' : 'none',
    ..._text
  };
  // function getHoverProps() {
  //   let hoverTextProps = {
  //     ...linkTextProps,
  //     ..._hover?._text,
  //   };
  //   return {
  //     ...hoverTextProps,
  //   };
  // }
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _reactNative.Platform.OS === 'web' ? /*#__PURE__*/_react.default.createElement(_Box.default, _extends({}, linkProps, resolvedProps, {
    _text: linkTextProps,
    ref: (0, _utils.mergeRefs)([ref, _ref]),
    flexDirection: "row"
  }), children) : /*#__PURE__*/_react.default.createElement(_Pressable.Pressable, _extends({}, linkProps, resolvedProps, {
    ref: ref,
    flexDirection: "row"
  }), _react.default.Children.map(children, child => typeof child === 'string' || typeof child === 'number' ? /*#__PURE__*/_react.default.createElement(_Text.default, _extends({}, resolvedProps._text, linkTextProps), child) : child)));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(Link));
exports.default = _default;
//# sourceMappingURL=index.js.map