"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _toggle = require("@react-stately/toggle");
var _reactNative = require("react-native");
var _lodash = require("lodash");
var _useThemeProps = require("../../../hooks/useThemeProps");
var _hooks = require("../../../hooks");
var _styled = require("../../../utils/styled");
var _utils = require("../../../utils");
var _interactions = require("@react-native-aria/interactions");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
var _FormControl = require("../../composites/FormControl");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledNBSwitch = (0, _styled.makeStyledComponent)(_reactNative.Switch);

// TODO: Needs proper refactor
const Switch = (_ref2, ref) => {
  let {
    disabled,
    isDisabled,
    isInvalid,
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint,
    onToggle,
    value,
    onValueChange,
    isHovered: isHoveredProp,
    ...props
  } = _ref2;
  const formControlContext = (0, _FormControl.useFormControlContext)();
  const combinedProps = (0, _utils.combineContextAndProps)(formControlContext, props);
  const state = (0, _toggle.useToggleState)({
    defaultSelected: !(0, _lodash.isNil)(defaultIsChecked) ? defaultIsChecked : false
  });
  const checked = !(0, _lodash.isNil)(isChecked) ? isChecked : state.isSelected;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    onTrackColor: _onTrackColor,
    offTrackColor: _offTrackColor,
    onThumbColor: _onThumbColor,
    offThumbColor: _offThumbColor,
    ...resolvedProps
  } = (0, _useThemeProps.usePropsResolution)('Switch', props, {
    isHovered: isHoveredProp || isHovered,
    isDisabled: disabled || isDisabled || combinedProps.isDisabled,
    isInvalid: isInvalid || combinedProps.isInvalid,
    isChecked: checked
  });
  const onTrackColor = (0, _hooks.useToken)('colors', _onTrackColor);
  const offTrackColor = (0, _hooks.useToken)('colors', _offTrackColor);
  const onThumbColor = (0, _hooks.useToken)('colors', _onThumbColor);
  const offThumbColor = (0, _hooks.useToken)('colors', _offThumbColor);

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)({
    ...props,
    isDisabled,
    isInvalid,
    isChecked,
    defaultIsChecked,
    accessibilityLabel,
    accessibilityHint
  })) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(StyledNBSwitch, _extends({
    accessibilityLabel: accessibilityLabel,
    accessibilityHint: accessibilityHint,
    trackColor: {
      false: offTrackColor,
      true: onTrackColor
    },
    thumbColor: checked ? onThumbColor : offThumbColor,
    activeThumbColor: onThumbColor // react-native-web prop for active thumbColor
    ,
    ios_backgroundColor: offTrackColor
  }, resolvedProps, {
    disabled: disabled || isDisabled || combinedProps.isDisabled,
    onValueChange: val => {
      onValueChange && onValueChange(val);
      onToggle ? onToggle(val) : state.toggle();
    },
    value: value || checked,
    ref: (0, _utils.mergeRefs)([ref, _ref])
  }));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(Switch));
exports.default = _default;
//# sourceMappingURL=index.js.map