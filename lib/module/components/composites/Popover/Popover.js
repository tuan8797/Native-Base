function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, memo } from 'react';
import { Popper } from '../Popper';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';
import Backdrop from '../Backdrop';
import { FocusScope } from '@react-native-aria/focus';
import { PresenceTransition } from '../Transitions';
import { StyleSheet } from 'react-native';
import { useId } from '@react-native-aria/utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { uniqueId } from 'lodash';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import { usePropsResolution } from '../../../hooks/useThemeProps';
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
  } = usePropsResolution('Popover', props);
  const triggerRef = React.useRef(null);
  const mergedRef = mergeRefs([triggerRef]);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);
  let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useId();
  }
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = React.useCallback(() => {
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
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  }, updatedTrigger(), /*#__PURE__*/React.createElement(Overlay, _extends({
    isOpen: isOpen,
    onRequestClose: handleClose,
    useRNModalOnAndroid: true,
    useRNModal: useRNModal
  }, _overlay), /*#__PURE__*/React.createElement(PresenceTransition, {
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
    style: StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(Popper, _extends({
    onClose: handleClose,
    triggerRef: triggerRef
  }, props), /*#__PURE__*/React.createElement(Backdrop, _extends({
    onPress: handleClose,
    bg: "transparent"
  }, _backdrop)), /*#__PURE__*/React.createElement(PopoverContext.Provider, {
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
  }, /*#__PURE__*/React.createElement(FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children))))));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Popover));
//# sourceMappingURL=Popover.js.map