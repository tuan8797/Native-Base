"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Popper = require("../Popper");
var _utils = require("../../../utils");
var _hooks = require("../../../hooks");
var _PopoverContext = require("./PopoverContext");
var _Box = _interopRequireDefault(require("../../primitives/Box"));
var _Backdrop = _interopRequireDefault(require("../Backdrop"));
var _focus = require("@react-native-aria/focus");
var _Transitions = require("../Transitions");
var _reactNative = require("react-native");
var _utils2 = require("@react-native-aria/utils");
var _Overlay = require("../../primitives/Overlay");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
var _lodash = require("lodash");
var _ResponsiveQueryProvider = require("../../../utils/useResponsiveQuery/ResponsiveQueryProvider");
var _useThemeProps = require("../../../hooks/useThemeProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Popover = (_ref, ref) => {
  let {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
    children,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    useRNModal,
    trapFocus = true,
    _backdrop,
    ...props
  } = _ref;
  const {
    _overlay
  } = (0, _useThemeProps.usePropsResolution)('Popover', props);
  const triggerRef = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([triggerRef]);
  const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = _react.default.useState(false);
  const [headerMounted, setHeaderMounted] = _react.default.useState(false);
  let id = (0, _lodash.uniqueId)();
  const responsiveQueryContext = _react.default.useContext(_ResponsiveQueryProvider.ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = (0, _utils2.useId)();
  }
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = _react.default.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const updatedTrigger = () => {
    return trigger({
      'ref': mergedRef,
      'onPress': handleOpen,
      'aria-expanded': isOpen ? true : false,
      'aria-controls': isOpen ? popoverContentId : undefined,
      'aria-haspopup': true
    }, {
      open: isOpen
    });
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    ref: ref
  }, updatedTrigger(), /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, _extends({
    isOpen: isOpen,
    onRequestClose: handleClose,
    useRNModalOnAndroid: true,
    useRNModal: useRNModal
  }, _overlay), /*#__PURE__*/_react.default.createElement(_Transitions.PresenceTransition, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 150
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 100
      }
    },
    visible: isOpen,
    style: _reactNative.StyleSheet.absoluteFill
  }, /*#__PURE__*/_react.default.createElement(_Popper.Popper, _extends({
    onClose: handleClose,
    triggerRef: triggerRef
  }, props), /*#__PURE__*/_react.default.createElement(_Backdrop.default, _extends({
    onPress: handleClose,
    bg: "transparent"
  }, _backdrop)), /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverContext.Provider, {
    value: {
      onClose: handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen
    }
  }, /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children))))));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(Popover));
exports.default = _default;
//# sourceMappingURL=Popover.js.map