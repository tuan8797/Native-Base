"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorModeProps = void 0;
var _lodash = require("lodash");
var _colorMode = require("../core/color-mode");
const useColorModeProps = props => {
  const {
    _light,
    _dark,
    ...remainingProps
  } = props;
  const {
    colorMode
  } = (0, _colorMode.useColorMode)();
  const colorModeProps = () => {
    switch (colorMode) {
      case 'light':
        return _light;
      case 'dark':
        return _dark;
      default:
        return {};
    }
  };
  return (0, _lodash.merge)(remainingProps, colorModeProps());
};
exports.useColorModeProps = useColorModeProps;
//# sourceMappingURL=useColorModeProps.js.map