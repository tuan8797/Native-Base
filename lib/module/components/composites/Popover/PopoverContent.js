function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useKeyboardDismissable, usePropsResolution, useToken } from '../../../hooks';
import React from 'react';
import { Platform } from 'react-native';
import { Popper } from '../Popper';
import { PopoverContext } from './PopoverContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export const PopoverContent = /*#__PURE__*/React.forwardRef((props, ref) => {
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
  } = React.useContext(PopoverContext);
  const resolvedProps = usePropsResolution('PopoverContent', props);
  const arrowDefaultColor = props.bgColor ?? props.bg ?? props.backgroundColor ?? resolvedProps.backgroundColor;
  const color = useToken('colors', arrowDefaultColor);
  React.useEffect(() => {
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
  useKeyboardDismissable({
    enabled: true,
    callback: onClose
  });
  let arrowElement = null;
  const restChildren = [];
  React.Children.toArray(props.children).forEach(child => {
    var _child$type;
    if ((child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'PopperArrow') {
      arrowElement = /*#__PURE__*/React.cloneElement(child, {
        backgroundColor: child.props.color ?? color
      });
    } else {
      restChildren.push(child);
    }
  });
  const accessibilityProps = Platform.OS === 'web' ? {
    'accessibilityRole': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Popper.Content, _extends({
    nativeID: popoverContentId
  }, accessibilityProps, resolvedProps, {
    ref: ref,
    isOpen: isOpen
  }), arrowElement, restChildren);
});
PopoverContent.displayName = 'PopoverContent';
//# sourceMappingURL=PopoverContent.js.map