function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, forwardRef } from 'react';
import { TextInput, Platform } from 'react-native';
import { useToken } from '../../../hooks';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const StyledInput = makeStyledComponent(TextInput);
const InputBase = (_ref2, ref) => {
  let {
    onKeyPress,
    onFocus,
    onBlur,
    disableFocusHandling,
    inputProps,
    wrapperRef,
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    ...props
  } = _ref2;
  let passUnresolvedProps;
  if (InputLeftElement || InputRightElement || leftElement || rightElement) {
    passUnresolvedProps = true;
  }
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState, callback) => {
    !disableFocusHandling && setIsFocused(focusState);
    callback();
  };
  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required
  };
  const _ref = React.useRef(null);
  const {
    isHovered
  } = useHover({}, _ref);
  const {
    isFullWidth,
    isDisabled,
    isReadOnly,
    ariaLabel,
    accessibilityLabel,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    type,
    fontFamily,
    fontWeight,
    fontStyle,
    _webInputBase,
    ...resolvedProps
  } = usePropsResolution('Input', {
    ...inputThemeProps,
    ...props
  }, {
    isDisabled: inputThemeProps.isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly
  });
  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight ?? 400,
    fontStyle: fontStyle ?? 'normal'
  });
  const resolvedPlaceholderTextColor = useToken('colors', placeholderTextColor);
  const resolvedSelectionColor = useToken('colors', selectionColor);
  const resolvedUnderlineColorAndroid = useToken('colors', underlineColorAndroid);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({
    ...props,
    onKeyPress,
    onFocus,
    onBlur,
    disableFocusHandling,
    inputProps
  })) {
    return null;
  }
  return /*#__PURE__*/React.createElement(StyledInput, _extends({}, inputProps, {
    secureTextEntry: type === 'password',
    accessible: true,
    accessibilityLabel: ariaLabel || accessibilityLabel,
    editable: isDisabled || isReadOnly ? false : true,
    w: isFullWidth ? '100%' : undefined
  }, passUnresolvedProps ? props : resolvedProps, resolvedFontFamily, {
    placeholderTextColor: resolvedPlaceholderTextColor,
    selectionColor: resolvedSelectionColor,
    underlineColorAndroid: resolvedUnderlineColorAndroid,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, onFocus ? () => onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, onBlur ? () => onBlur(e) : () => {});
    }
    // TODO: this can be moved to baseStyle using _web
  }, Platform.OS === 'web' ? {
    disabled: isDisabled,
    cursor: isDisabled ? 'not-allowed' : 'auto'
  } : {}, {
    ref: mergeRefs([ref, _ref, wrapperRef]),
    style: Platform.OS === 'web' ? _webInputBase : {}
  }));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(InputBase));
//# sourceMappingURL=InputBase.js.map