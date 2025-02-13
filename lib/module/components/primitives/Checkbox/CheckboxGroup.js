function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { createContext, memo, forwardRef, useMemo } from 'react';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useFormControlContext } from '../../composites/FormControl';
import Box from '../Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';
export const CheckboxGroupContext = /*#__PURE__*/createContext(null);
function CheckboxGroup(_ref, ref) {
  let {
    size,
    _checkbox,
    colorScheme,
    ...props
  } = _ref;
  const resolvedProps = usePropsResolution('CheckboxGroup', props);
  const {
    children
  } = props;
  const state = useCheckboxGroupState(props);
  const {
    groupProps
  } = useCheckboxGroup({
    'aria-label': props.accessibilityLabel,
    ...props
  }, state);
  const formControlContext = useFormControlContext();
  const value = useMemo(() => ({
    size,
    colorScheme,
    ..._checkbox,
    ...formControlContext,
    state
  }), [_checkbox, colorScheme, formControlContext, size, state]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps({
    ...props,
    size,
    colorScheme
  })) {
    return null;
  }
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(CheckboxGroupContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement(Box, _extends({}, resolvedProps, groupProps, props, {
      ref: ref
    }), children))
  );
}
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(CheckboxGroup));
//# sourceMappingURL=CheckboxGroup.js.map