"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlatformProps = void 0;
var _lodash = require("lodash");
var _reactNative = require("react-native");
const usePlatformProps = props => {
  const {
    _web,
    _ios,
    _android,
    ...remainingProps
  } = props;
  const platformProps = () => {
    switch (_reactNative.Platform.OS) {
      case 'web':
        return _web;
      case 'ios':
        return _ios;
      case 'android':
        return _android;
      default:
        return {};
    }
  };
  return (0, _lodash.merge)(remainingProps, platformProps());
};
exports.usePlatformProps = usePlatformProps;
//# sourceMappingURL=usePlatformProps.js.map