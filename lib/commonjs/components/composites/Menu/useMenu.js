"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenuTypeahead = exports.useMenuTrigger = exports.useMenuOptionItem = exports.useMenuItem = exports.useMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _focus = require("@react-native-aria/focus");
var _utils = require("@react-native-aria/utils");
var _reactNative = require("react-native");
var _ResponsiveQueryProvider = require("../../../utils/useResponsiveQuery/ResponsiveQueryProvider");
var _lodash = require("lodash");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useMenuTrigger = _ref => {
  let {
    handleOpen,
    isOpen
  } = _ref;
  let menuTriggerId = (0, _lodash.uniqueId)();

  // let id = uniqueId();
  const responsiveQueryContext = _react.default.useContext(_ResponsiveQueryProvider.ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;
  if (!disableCSSMediaQueries) {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    menuTriggerId = (0, _utils.useId)();
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
exports.useMenuTrigger = useMenuTrigger;
const useMenu = () => {
  const focusManager = (0, _focus.useFocusManager)();
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
exports.useMenu = useMenu;
const useMenuItem = _ref2 => {
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
      if (ref.current && _reactNative.Platform.OS === 'web') ref.current.focus();
    }
  };
};
exports.useMenuItem = useMenuItem;
const useMenuOptionItem = _ref3 => {
  let {
    isChecked,
    type
  } = _ref3;
  return {
    accessibilityRole: 'menuitem' + (_reactNative.Platform.OS === 'web' ? type : ''),
    accessibilityState: {
      checked: isChecked
    },
    accessibilityChecked: isChecked
  };
};
exports.useMenuOptionItem = useMenuOptionItem;
const ITEM_ATTR = 'data-nativebase-menu-item';
const getValue = element => element.getAttribute(ITEM_ATTR) ?? '';
const useMenuTypeahead = props => {
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
exports.useMenuTypeahead = useMenuTypeahead;
//# sourceMappingURL=useMenu.js.map