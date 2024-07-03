import React from 'react';
import { useFocusManager } from '@react-native-aria/focus';
import { useId } from '@react-native-aria/utils';
import { Platform } from 'react-native';
import { ResponsiveQueryContext } from '../../../utils/useResponsiveQuery/ResponsiveQueryProvider';
import { uniqueId } from 'lodash';
export const useMenuTrigger = _ref => {
  let {
    handleOpen,
    isOpen
  } = _ref;
  let menuTriggerId = uniqueId();

  // let id = uniqueId();
  const responsiveQueryContext = React.useContext(ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    menuTriggerId = useId();
  }
  return {
    'onKeyDownCapture': event => {
      if ([' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        handleOpen();
      }
    },
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen ? true : undefined,
    'nativeID': menuTriggerId
  };
};
export const useMenu = () => {
  const focusManager = useFocusManager();
  const onKeyDown = e => {
    switch (e.key) {
      case 'ArrowDown':
        {
          e.preventDefault();
          //@ts-ignore
          focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusNext({
            wrap: true
          });
          break;
        }
      case 'ArrowUp':
        {
          e.preventDefault();
          //@ts-ignore
          focusManager === null || focusManager === void 0 ? void 0 : focusManager.focusPrevious({
            wrap: true
          });
          break;
        }
    }
  };
  return {
    onKeyDown,
    accessibilityRole: 'menu'
  };
};
export const useMenuItem = _ref2 => {
  let {
    textValue,
    ref
  } = _ref2;
  return {
    accessibilityRole: 'menuitem',
    dataSet: {
      nativebaseMenuItem: textValue
    },
    onHoverIn: () => {
      if (ref.current && Platform.OS === 'web') ref.current.focus();
    }
  };
};
export const useMenuOptionItem = _ref3 => {
  let {
    isChecked,
    type
  } = _ref3;
  return {
    accessibilityRole: 'menuitem' + (Platform.OS === 'web' ? type : ''),
    accessibilityState: {
      checked: isChecked
    },
    accessibilityChecked: isChecked
  };
};
const ITEM_ATTR = 'data-nativebase-menu-item';
const getValue = element => element.getAttribute(ITEM_ATTR) ?? '';
export const useMenuTypeahead = props => {
  return {
    onKeyDown(event) {
      if (props.onKeyDown) {
        props.onKeyDown(event);
      }
      if (event.key.length === 1 && !(event.ctrlKey || event.altKey || event.metaKey)) {
        const container = event.currentTarget;
        const values = Array.from(container.querySelectorAll(`[${ITEM_ATTR}]`)).map(getValue);
        const searchKey = event.key;
        const foundValue = values.find(value => value.toLowerCase().startsWith(searchKey));
        const newItem = container.querySelector(`[${ITEM_ATTR}="${foundValue}"]`);
        if (newItem) {
          /**
           * Imperative focus during keydown is risky so we prevent React's batching updates
           * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
           */
          setTimeout(() => newItem.focus());
        }
      }
    }
  };
};
//# sourceMappingURL=useMenu.js.map