"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Context = require("./Context");
var _hooks = require("./../color-mode/hooks");
var _hooks2 = require("../../hooks");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const HybridProvider = _ref => {
  let {
    children,
    options: {
      initialColorMode = 'light',
      accessibleColors: isTextColorAccessible = false,
      useSystemColorMode
    },
    colorModeManager
  } = _ref;
  // Color-mode content
  const {
    colorMode,
    setColorMode
  } = (0, _hooks.useModeManager)(initialColorMode, useSystemColorMode, colorModeManager);
  const toggleColorMode = _react.default.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  // Accessible color hook
  const [accessibleColors, setAccessibleColors] = _react.default.useState(isTextColorAccessible);
  const contextValue = (0, _react.useMemo)(() => {
    return {
      colorMode: {
        colorMode,
        toggleColorMode,
        setColorMode,
        accessibleColors,
        setAccessibleColors
      }
    };
  }, [colorMode, toggleColorMode, setColorMode, accessibleColors, setAccessibleColors]);
  _react.default.useEffect(() => {
    let escapeKeyListener = null;
    if (_reactNative.Platform.OS === 'web') {
      escapeKeyListener = e => {
        if (e.key === 'Escape') {
          if (_hooks2.keyboardDismissHandlerManager.length() > 0) {
            const lastHandler = _hooks2.keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    }
    return () => {
      if (_reactNative.Platform.OS === 'web') {
        document.removeEventListener('keydown', escapeKeyListener);
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Context.HybridContext.Provider, {
    value: contextValue
  }, children);
};
var _default = HybridProvider;
exports.default = _default;
//# sourceMappingURL=HybridProvider.js.map