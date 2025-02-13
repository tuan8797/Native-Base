"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("../../primitives/Box"));
var _useThemeProps = require("../../../hooks/useThemeProps");
var _useFormControl = require("./useFormControl");
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormControlHelperText = (props, ref) => {
  const formControlContext = (0, _useFormControl.useFormControlContext)();
  const combinedProps = (0, _utils.combineContextAndProps)(formControlContext, props);
  const resolvedProps = (0, _useThemeProps.usePropsResolution)('FormControlHelperText', combinedProps, {
    isDisabled: combinedProps.isDisabled,
    isReadOnly: combinedProps.isReadOnly,
    isInvalid: combinedProps.isInvalid
    // isRequired: combinedProps.isRequired,
  });

  _react.default.useEffect(() => {
    resolvedProps === null || resolvedProps === void 0 ? void 0 : resolvedProps.setHasHelpText(true);
    return () => {
      resolvedProps === null || resolvedProps === void 0 ? void 0 : resolvedProps.setHasHelpText(false);
    };
  });
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({}, resolvedProps, {
    nativeID: resolvedProps === null || resolvedProps === void 0 ? void 0 : resolvedProps.feedbackId,
    ref: ref
  }));
};
var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(FormControlHelperText));
exports.default = _default;
//# sourceMappingURL=FormControlHelperText.js.map