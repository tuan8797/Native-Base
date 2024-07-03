"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNativeBaseConfig = exports.defaultConfig = exports.NativeBaseConfigProvider = void 0;
var _createContext = require("../utils/createContext");
const defaultConfig = {
  strictMode: 'off'
};
exports.defaultConfig = defaultConfig;
const [NativeBaseConfigProvider, useNativeBaseConfig] = (0, _createContext.createContext)('NativeBaseConfigProvider');
exports.useNativeBaseConfig = useNativeBaseConfig;
exports.NativeBaseConfigProvider = NativeBaseConfigProvider;
//# sourceMappingURL=NativeBaseContext.js.map