function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, memo } from 'react';
import { StyleSheet } from 'react-native';
import Backdrop from '../Backdrop';
import { Slide } from '../Transitions';
import { FocusScope } from '@react-native-aria/focus';
import { useControllableState, usePropsResolution } from '../../../hooks';
import { ModalContext } from './Context';
import Box from '../../primitives/Box';
import { Fade } from '../../composites/Transitions';
import { useKeyboardBottomInset } from '../../../utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const Modal = (_ref, ref) => {
  let {
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    overlayVisible = true,
    backdropVisible = true,
    animationPreset,
    ...rest
  } = _ref;
  const bottomInset = useKeyboardBottomInset();
  const {
    contentSize,
    _backdrop,
    _backdropFade,
    _fade,
    _slide,
    _overlay,
    useRNModal,
    ...resolvedProps
  } = usePropsResolution('Modal', rest);
  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const handleClose = React.useCallback(() => setVisible(false), [setVisible]);
  const child = /*#__PURE__*/React.createElement(Box, _extends({
    bottom: avoidKeyboard ? bottomInset + 'px' : undefined
  }, resolvedProps, {
    ref: ref,
    pointerEvents: "box-none"
  }), children);
  const contextValue = React.useMemo(() => {
    return {
      handleClose,
      contentSize,
      initialFocusRef,
      finalFocusRef,
      visible
    };
  }, [handleClose, contentSize, initialFocusRef, finalFocusRef, visible]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(rest)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Overlay, _extends({
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    animationPreset: animationPreset,
    useRNModalOnAndroid: true,
    useRNModal: useRNModal
  }, _overlay), /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(Fade, _extends({
    in: visible,
    style: StyleSheet.absoluteFill
  }, _backdropFade), overlayVisible && backdropVisible && /*#__PURE__*/React.createElement(Backdrop, _extends({
    onPress: () => {
      closeOnOverlayClick && handleClose();
    }
  }, _backdrop))), animationPreset === 'slide' ? /*#__PURE__*/React.createElement(Slide, _extends({
    in: visible
  }, _slide), /*#__PURE__*/React.createElement(FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, child)) : /*#__PURE__*/React.createElement(Fade, _extends({
    in: visible,
    style: StyleSheet.absoluteFill
  }, _fade), /*#__PURE__*/React.createElement(FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, child))));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Modal));
//# sourceMappingURL=Modal.js.map