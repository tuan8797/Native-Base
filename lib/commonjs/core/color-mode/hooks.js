"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccessibleColors = useAccessibleColors;
exports.useColorMode = exports.useAppState = void 0;
exports.useColorModeValue = useColorModeValue;
exports.useColorScheme = void 0;
exports.useModeManager = useModeManager;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./../hybrid-overlay/Context");
var _reactNative = require("react-native");
var _shim = require("use-sync-external-store/shim");
var _NativeBaseContext = require("../NativeBaseContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useColorMode = () => {
  const {
    colorMode: colorModeContext
  } = _react.default.useContext(_Context.HybridContext);
  if (colorModeContext === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }
  return colorModeContext;
};
exports.useColorMode = useColorMode;
function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
const useAppState = () => {
  const subscription = _react.default.useMemo(() => ({
    getCurrentValue: () => _reactNative.AppState.currentState,
    subscribe: callback => {
      const subsription = _reactNative.AppState.addEventListener('change', callback);
      return () => {
        // React Native >= 0.65
        // @ts-ignore:next-line ignoring ts error as devDependency contains "@types/react-native" < 0.65
        subsription.remove();
      };
    }
  }), []);
  const isSSR = (0, _NativeBaseContext.useNativeBaseConfig)('useBreakpointResolvedProps').isSSR;
  if (isSSR) {
    return 'unknown';
  } else {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _shim.useSyncExternalStore)(subscription.subscribe, subscription.getCurrentValue, subscription.getCurrentValue);
  }
};
exports.useAppState = useAppState;
const useColorScheme = () => {
  const colorScheme = (0, _reactNative.useColorScheme)();
  const [currentScheme, setCurrentScheme] = (0, _react.useState)(colorScheme);
  const appState = useAppState();
  (0, _react.useEffect)(() => {
    if (appState === 'active') {
      setCurrentScheme(colorScheme);
    }
  }, [appState, colorScheme]);
  return currentScheme;
};
exports.useColorScheme = useColorScheme;
function useModeManager(initialColorMode, useSystemColorMode, colorModeManager) {
  const systemColorMode = useColorScheme();
  if (useSystemColorMode) {
    initialColorMode = systemColorMode;
  }
  const [colorMode, setRawMode] = (0, _react.useState)(initialColorMode);
  const setColorMode = _react.default.useCallback(async val => {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }
    setRawMode(val);
  }, [colorModeManager]);

  // For initial setting initial color mode from storage
  (0, _react.useEffect)(() => {
    if (colorModeManager) {
      (async function getMode() {
        const value = await colorModeManager.get(initialColorMode);
        if (value && value !== colorMode) {
          setRawMode(value);
        }
      })();
    }
  }, [colorMode, initialColorMode, colorModeManager]);

  // Set system color mode only when user has not passed a colorModeManager
  (0, _react.useEffect)(() => {
    if (!colorModeManager && useSystemColorMode) {
      setRawMode(systemColorMode);
    }
  }, [systemColorMode, colorModeManager, useSystemColorMode, setRawMode]);
  return {
    colorMode,
    setColorMode
  };
}
function useAccessibleColors() {
  const {
    colorMode: colorModeContext
  } = _react.default.useContext(_Context.HybridContext);
  const toggleAccessibleColors = () => colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);
  return [colorModeContext.accessibleColors, colorModeContext.setAccessibleColors, toggleAccessibleColors];
}
//# sourceMappingURL=hooks.js.map