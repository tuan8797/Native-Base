"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisuallyHidden = VisuallyHidden;
var _hooks = require("../../../hooks");
function VisuallyHidden(_ref) {
  let {
    children
  } = _ref;
  const screenReaderEnabled = (0, _hooks.useScreenReaderEnabled)();
  return screenReaderEnabled ? children : null;
}
//# sourceMappingURL=index.js.map