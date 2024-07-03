"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxGroupContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _checkbox2 = require("@react-stately/checkbox");
var _checkbox3 = require("@react-native-aria/checkbox");
var _FormControl = require("../../composites/FormControl");
var _Box = _interopRequireDefault(require("../Box"));
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
var _useThemeProps = require("../../../hooks/useThemeProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxGroupContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.CheckboxGroupContext = CheckboxGroupContext;
function CheckboxGroup(_ref, ref) {
  let {
    size,
    _checkbox,
    colorScheme,
    ...props
  } = _ref;
  const resolvedProps = (0, _useThemeProps.usePropsResolution)('CheckboxGroup', props);
  const {
    children
  } = props;
  const state = (0, _checkbox2.useCheckboxGroupState)(props);
  const {
    groupProps
  } = (0, _checkbox3.useCheckboxGroup)({
    'aria-label': props.accessibilityLabel,
    ...props
  }, state);
  const formControlContext = (0, _FormControl.useFormControlContext)();
  const value = (0, _react.useMemo)(() => ({
    size,
    colorScheme,
    ..._checkbox,
    ...formControlContext,
    state
  }), [_checkbox, colorScheme, formControlContext, size, state]);

  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)({
    ...props,
    size,
    colorScheme
  })) {
    return null;
  }
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react.default.createElement(CheckboxGroupContext.Provider, {
      value: value
    }, /*#__PURE__*/_react.default.createElement(_Box.default, _extends({}, resolvedProps, groupProps, props, {
      ref: ref
    }), children))
  );
}
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(CheckboxGroup));
exports.default = _default;
//# sourceMappingURL=CheckboxGroup.js.map