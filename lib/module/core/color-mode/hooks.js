import React, { useState, useEffect } from 'react';
import { HybridContext } from './../hybrid-overlay/Context';
import { AppState, useColorScheme as _useColorScheme } from 'react-native';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { useNativeBaseConfig } from '../NativeBaseContext';
export const useColorMode = () => {
  const {
    colorMode: colorModeContext
  } = React.useContext(HybridContext);
  if (colorModeContext === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }
  return colorModeContext;
};
export function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
export const useAppState = () => {
  const subscription = React.useMemo(() => ({
    getCurrentValue: () => AppState.currentState,
    subscribe: callback => {
      const subsription = AppState.addEventListener('change', callback);
      return () => {
        // React Native >= 0.65
        // @ts-ignore:next-line ignoring ts error as devDependency contains "@types/react-native" < 0.65
        subsription.remove();
      };
    }
  }), []);
  const isSSR = useNativeBaseConfig('useBreakpointResolvedProps').isSSR;
  if (isSSR) {
    return 'unknown';
  } else {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSyncExternalStore(subscription.subscribe, subscription.getCurrentValue, subscription.getCurrentValue);
  }
};
export const useColorScheme = () => {
  const colorScheme = _useColorScheme();
  const [currentScheme, setCurrentScheme] = useState(colorScheme);
  const appState = useAppState();
  useEffect(() => {
    if (appState === 'active') {
      setCurrentScheme(colorScheme);
    }
  }, [appState, colorScheme]);
  return currentScheme;
};
export function useModeManager(initialColorMode, useSystemColorMode, colorModeManager) {
  const systemColorMode = useColorScheme();
  if (useSystemColorMode) {
    initialColorMode = systemColorMode;
  }
  const [colorMode, setRawMode] = useState(initialColorMode);
  const setColorMode = React.useCallback(async val => {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }
    setRawMode(val);
  }, [colorModeManager]);

  // For initial setting initial color mode from storage
  useEffect(() => {
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
  useEffect(() => {
    if (!colorModeManager && useSystemColorMode) {
      setRawMode(systemColorMode);
    }
  }, [systemColorMode, colorModeManager, useSystemColorMode, setRawMode]);
  return {
    colorMode,
    setColorMode
  };
}
export function useAccessibleColors() {
  const {
    colorMode: colorModeContext
  } = React.useContext(HybridContext);
  const toggleAccessibleColors = () => colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);
  return [colorModeContext.accessibleColors, colorModeContext.setAccessibleColors, toggleAccessibleColors];
}
//# sourceMappingURL=hooks.js.map