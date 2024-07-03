"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;
var _hooks = require("../../../hooks");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Popper = require("../Popper");
var _PopoverContext = require("./PopoverContext");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PopoverContent = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    onClose,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    headerMounted,
    bodyMounted,
    bodyId,
    headerId,
    isOpen
  } = _react.default.useContext(_PopoverContext.PopoverContext);
  const resolvedProps = (0, _hooks.usePropsResolution)('PopoverContent', props);
  const arrowDefaultColor = props.bgColor ?? props.bg ?? props.backgroundColor ?? resolvedProps.backgroundColor;
  const color = (0, _hooks.useToken)('colors', arrowDefaultColor);
  _react.default.useEffect(() => {
    const finalFocusRefCurrentVal = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current;
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
    return () => {
      if (finalFocusRefCurrentVal) {
        finalFocusRefCurrentVal.focus();
      }
    };
  }, [finalFocusRef, initialFocusRef]);
  (0, _hooks.useKeyboardDismissable)({
    enabled: true,
    callback: onClose
  });
  let arrowElement = null;
  const restChildren = [];
  _react.default.Children.toArray(props.children).forEach(child => {
    var _child$type;
    if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'PopperArrow') {
      arrowElement = /*#__PURE__*/_react.default.cloneElement(child, {
        backgroundColor: child.props.color ?? color
      });
    } else {
      restChildren.push(child);
    }
  });
  const accessibilityProps = _reactNative.Platform.OS === 'web' ? {
    'accessibilityRole': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Popper.Popper.Content, _extends({
    nativeID: popoverContentId
  }, accessibilityProps, resolvedProps, {
    ref: ref,
    isOpen: isOpen
  }), arrowElement, restChildren);
});
exports.PopoverContent = PopoverContent;
PopoverContent.displayName = 'PopoverContent';
//# sourceMappingURL=PopoverContent.js.map