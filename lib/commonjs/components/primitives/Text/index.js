"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeProps = require("../../../hooks/useThemeProps");
var _interactions = require("@react-native-aria/interactions");
var _mergeRefs = require("../../../utils/mergeRefs");
var _styled = require("../../../utils/styled");
var _useResolvedFontFamily = require("../../../hooks/useResolvedFontFamily");
var _reactNative = require("react-native");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const StyledText = (0, _styled.makeStyledComponent)(_reactNative.Text);
// To have a RN compatible behaviour, we'll inherit parent text styles as base style
const TextAncestorContext = /*#__PURE__*/_react.default.createContext(false);
const Text = (_ref2, ref) => {
  let {
    children,
    ...props
  } = _ref2;
  const hasTextAncestor = _react.default.useContext(TextAncestorContext);
  const {
    isTruncated,
    noOfLines,
    bold,
    italic,
    sub,
    highlight,
    underline,
    strikeThrough,
    fontFamily: propFontFamily,
    fontWeight: propFontWeight,
    fontStyle: propFontStyle,
    _hover,
    fontSize,
    numberOfLines,
    ...resolvedProps
  } = (0, _useThemeProps.usePropsResolution)('Text', props, {}, {
    resolveResponsively: ['noOfLines', 'numberOfLines'],
    // We override the component base theme if text has an ancestor.
    componentTheme: hasTextAncestor ? {} : undefined
  });
  const _ref = (0, _react.useRef)(null);
  // TODO: might have to add this condition
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _hover ? _ref : null);
  // const { isHovered } = useHover({}, _ref);
  let fontFamily = propFontFamily;
  const fontStyle = italic ? 'italic' : propFontStyle;
  const fontWeight = bold ? 'bold' : propFontWeight;
  let resolvedFontFamily;
  resolvedFontFamily = (0, _useResolvedFontFamily.useResolvedFontFamily)({
    fontFamily,
    fontWeight: fontWeight ?? (hasTextAncestor ? undefined : 400),
    fontStyle: fontStyle ?? (hasTextAncestor ? undefined : 'normal')
  });
  if (resolvedFontFamily) {
    fontFamily = resolvedFontFamily;
  }
  // Need to apply fontWeight & fontStyle on web
  if (_reactNative.Platform.OS === 'web') {
    if (resolvedFontFamily) {
      fontFamily = resolvedFontFamily.fontFamily;
    }
    resolvedFontFamily = {
      fontFamily,
      fontWeight: fontWeight ?? (hasTextAncestor ? undefined : 400),
      fontStyle: fontStyle ?? (hasTextAncestor ? undefined : 'normal')
    };
  }

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  const propsToSpread = {
    ...resolvedProps,
    numberOfLines: numberOfLines || noOfLines ? numberOfLines || noOfLines : isTruncated ? 1 : undefined,
    ...resolvedFontFamily,
    bg: highlight ? 'warning.300' : resolvedProps.bg,
    textDecorationLine: underline && strikeThrough ? 'underline line-through' : underline ? 'underline' : strikeThrough ? 'line-through' : resolvedProps.textDecorationLine,
    fontSize: sub ? 10 : fontSize,
    ref: (0, _mergeRefs.mergeRefs)([ref, _ref]),
    ...(isHovered && _hover)
  };
  return hasTextAncestor ? /*#__PURE__*/_react.default.createElement(StyledText, propsToSpread, children) : /*#__PURE__*/_react.default.createElement(TextAncestorContext.Provider, {
    value: true
  }, /*#__PURE__*/_react.default.createElement(StyledText, propsToSpread, children));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(Text));
exports.default = _default;
//# sourceMappingURL=index.js.map