function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, forwardRef } from 'react';
import { Pressable } from '../../primitives/Pressable';
import Box from '../../primitives/Box';
import { HStack } from '../../primitives/Stack';
import Spinner from '../../primitives/Spinner';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const ActionsheetItem = (_ref, ref) => {
  let {
    //@ts-ignore
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    isDisabled,
    isLoading,
    spinnerPlacement = 'start',
    ...props
  } = _ref;
  const {
    _text,
    _stack,
    _icon,
    _spinner,
    isLoadingText,
    ...resolvedProps
  } = usePropsResolution('ActionsheetItem', props, undefined, {
    cascadePseudoProps: true
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (endIcon && /*#__PURE__*/React.isValidElement(endIcon)) {
    endIcon = React.Children.map(endIcon, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
        key: `button-end-icon-${index}`,
        ..._icon,
        ...child.props
      });
    });
  }
  if (startIcon && /*#__PURE__*/React.isValidElement(startIcon)) {
    startIcon = React.Children.map(startIcon, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
        key: `button-start-icon-${index}`,
        ..._icon,
        ...child.props
      });
    });
  }
  const spinnerElement = spinner ? spinner : /*#__PURE__*/React.createElement(Spinner, _extends({
    color: _text === null || _text === void 0 ? void 0 : _text.color
  }, _spinner));
  const boxChildren = child => {
    return child ? /*#__PURE__*/React.createElement(Box, {
      _text: _text
    }, child) : null;
  };
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    disabled: isDisabled || isLoading
  }, resolvedProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(HStack, _extends({}, _stack, {
    test: true
  }), startIcon && !isLoading ? startIcon : null, isLoading && spinnerPlacement === 'start' ? spinnerElement : null, isLoading ? isLoadingText ? boxChildren(isLoadingText) : null : boxChildren(children), endIcon && !isLoading ? endIcon : null, isLoading && spinnerPlacement === 'end' ? spinnerElement : null));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(ActionsheetItem));
//# sourceMappingURL=ActionsheetItem.js.map