"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strictModeLogger = void 0;
const tokenNotString = 'tokenNotString';
const tokenNotFound = 'tokenNotFound';
const strictModeLogger = _ref => {
  let {
    token,
    scale,
    mode,
    type
  } = _ref;
  if (!mode) {
    mode = 'off';
  }
  if (mode === 'off') return;

  // eslint-disable-next-line no-console
  const log = console[mode];
  switch (type) {
    case tokenNotFound:
      log(`Token ${token} not found in theme scale of ${scale}. Please use extendTheme function to add this token in your theme`);
      return;
    case tokenNotString:
      log(`Token ${token} should be passed as a string.`);
      return;
    default:
      return;
  }
};
exports.strictModeLogger = strictModeLogger;
//# sourceMappingURL=StrictMode.js.map