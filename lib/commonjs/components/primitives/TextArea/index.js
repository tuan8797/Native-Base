"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = require("../Input");
var _useThemeProps = require("../../../hooks/useThemeProps");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("../../../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextArea = (_ref2, ref) => {
  let {
    wrapperRef,
    isDisabled,
    isInvalid,
    isReadOnly,
    isFocused: isFocusedProp,
    isHovered: isHoveredProp,
    ...props
  } = _ref2;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const [isFocused, setIsFocused] = _react.default.useState(isFocusedProp);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const {
    totalLines,
    onFocus,
    onBlur,
    ...newProps
  } = (0, _useThemeProps.usePropsResolution)('TextArea', props, {
    isHovered: isHoveredProp || isHovered,
    isDisabled,
    isFocused,
    isInvalid,
    isReadOnly
  }, {
    extendTheme: ['Input']
  });
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Input.Input, _extends({}, newProps, {
    INTERNAL_notResolveThemeAndPseudoProps: true,
    numberOfLines: totalLines,
    wrapperRef: wrapperRef,
    ref: (0, _utils.mergeRefs)([_ref, ref]),
    onFocus: e => {
      handleFocus(true, onFocus ? () => onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, onBlur ? () => onBlur(e) : () => {});
    },
    isDisabled: isDisabled,
    isInvalid: isInvalid,
    isReadOnly: isReadOnly
  }));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(TextArea));
exports.default = _default;
//# sourceMappingURL=index.js.map