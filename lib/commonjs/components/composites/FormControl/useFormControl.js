"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlContext = void 0;
exports.useFormControl = useFormControl;
exports.useFormControlContext = void 0;
exports.useFormControlProvider = useFormControlProvider;
var _react = _interopRequireDefault(require("react"));
var _utils = require("@react-native-aria/utils");
var _utils2 = require("../../../utils");
var _ResponsiveQueryProvider = require("../../../utils/useResponsiveQuery/ResponsiveQueryProvider");
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormControlContext = /*#__PURE__*/_react.default.createContext({});
exports.FormControlContext = FormControlContext;
function useFormControlProvider(props) {
  const {
    nativeID: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  let id = (0, _lodash.uniqueId)();
  const responsiveQueryContext = _react.default.useContext(_ResponsiveQueryProvider.ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = (0, _utils.useId)();
  }

  // const id = '';
  // Generate all the required ids
  const nativeID = idProp || `field-${id}`;
  const labelId = `${nativeID}-label`;
  const feedbackId = `${nativeID}-feedback`;
  const helpTextId = `${nativeID}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = _react.default.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = _react.default.useState(false);
  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    nativeID,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps
  };
  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
function useFormControl(props) {
  const field = useFormControlContext();
  const describedBy = [];

  // Error message must be described first in all scenarios.
  if (field !== null && field !== void 0 && field.hasFeedbackText) describedBy.push(field === null || field === void 0 ? void 0 : field.feedbackId);
  if (field !== null && field !== void 0 && field.hasHelpText) describedBy.push(field === null || field === void 0 ? void 0 : field.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');
  const cleanProps = (0, _lodash.omit)(props, ['isInvalid', 'isDisabled', 'isReadOnly', 'isRequired']);
  let nativeID = props === null || props === void 0 ? void 0 : props.nativeID;
  if (!nativeID && field !== null && field !== void 0 && field.nativeID) {
    nativeID = `${field === null || field === void 0 ? void 0 : field.nativeID}-input`;
  }
  return {
    ...cleanProps,
    nativeID: nativeID,
    disabled: props.isDisabled || (field === null || field === void 0 ? void 0 : field.isDisabled),
    readOnly: props.isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly),
    required: props.isRequired || (field === null || field === void 0 ? void 0 : field.isRequired),
    accessibilityInvalid: (0, _utils2.ariaAttr)(props.isInvalid || (field === null || field === void 0 ? void 0 : field.isInvalid)),
    accessibilityRequired: (0, _utils2.ariaAttr)(props.isRequired || (field === null || field === void 0 ? void 0 : field.isRequired)),
    accessibilityReadOnly: (0, _utils2.ariaAttr)(props.isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly)),
    accessibilityDescribedBy: ariaDescribedBy || undefined
  };
}
const useFormControlContext = () => {
  return _react.default.useContext(FormControlContext);
};
exports.useFormControlContext = useFormControlContext;
//# sourceMappingURL=useFormControl.js.map