function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { useControllableState, useKeyboardDismissable } from '../../../hooks';
import { Popper } from '../Popper';
import { composeEventHandlers, mergeRefs } from '../../../utils';
import { PresenceTransition } from '../Transitions';
import { Platform, StyleSheet } from 'react-native';
import { usePropsResolution } from '../../../hooks';
import Box from '../../primitives/Box';
import { useId } from '@react-native-aria/utils';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { uniqueId } from 'lodash';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
export const Tooltip = _ref => {
  let {
    label,
    children,
    onClose,
    onOpen,
    defaultIsOpen,
    placement,
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    offset,
    isDisabled,
    hasArrow,
    arrowSize = 12,
    isOpen: isOpenProp,
    ...props
  } = _ref;
  if (hasArrow && offset === undefined) {
    offset = 0;
  } else {
    offset = 6;
  }
  const resolvedProps = usePropsResolution('Tooltip', props);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const arrowBg = props.backgroundColor ?? props.bgColor ?? props.bg ?? resolvedProps.bg;
  const targetRef = React.useRef(null);
  const enterTimeout = React.useRef();
  const exitTimeout = React.useRef();
  // const tooltipID = '';
  // const tooltipID = useId();

  let tooltipID = uniqueId();

  // let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    tooltipID = useId();
  }
  const openWithDelay = React.useCallback(() => {
    if (!isDisabled) {
      enterTimeout.current = setTimeout(() => setIsOpen(true), openDelay);
    }
  }, [isDisabled, setIsOpen, openDelay]);
  const closeWithDelay = React.useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
    }
    exitTimeout.current = setTimeout(() => setIsOpen(false), closeDelay);
  }, [closeDelay, setIsOpen]);
  React.useEffect(() => () => {
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
  }, []);
  let newChildren = children;
  if (typeof children === 'string') {
    newChildren = /*#__PURE__*/React.createElement(Box, null, children);
  }
  newChildren = /*#__PURE__*/React.cloneElement(newChildren, {
    'onPress': composeEventHandlers(newChildren.props.onPress, () => {
      if (closeOnClick) {
        closeWithDelay();
      }
    }),
    'onFocus': composeEventHandlers(newChildren.props.onFocus, openWithDelay),
    'onBlur': composeEventHandlers(newChildren.props.onBlur, closeWithDelay),
    'onMouseEnter': composeEventHandlers(newChildren.props.onMouseEnter, openWithDelay),
    'onMouseLeave': composeEventHandlers(newChildren.props.onMouseLeave, closeWithDelay),
    'ref': mergeRefs([newChildren.ref, targetRef]),
    'aria-describedby': isOpen ? tooltipID : undefined
  });
  useKeyboardDismissable({
    enabled: isOpen,
    callback: () => setIsOpen(false)
  });
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, newChildren, isOpen && /*#__PURE__*/React.createElement(OverlayContainer, null, /*#__PURE__*/React.createElement(PresenceTransition, {
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
      transition: {
        duration: 100
      }
    },
    visible: isOpen,
    style: StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(Popper, {
    triggerRef: targetRef,
    onClose: () => setIsOpen(false),
    placement: placement,
    offset: offset
  }, /*#__PURE__*/React.createElement(Popper.Content, {
    isOpen: isOpen
  }, hasArrow && /*#__PURE__*/React.createElement(Popper.Arrow, {
    borderColor: "transparent",
    backgroundColor: arrowBg,
    height: arrowSize,
    width: arrowSize
  }), /*#__PURE__*/React.createElement(Box, _extends({}, resolvedProps, {
    //@ts-ignore
    accessibilityRole: Platform.OS === 'web' ? 'tooltip' : undefined,
    nativeID: tooltipID
  }), label))))));
};
//# sourceMappingURL=Tooltip.js.map