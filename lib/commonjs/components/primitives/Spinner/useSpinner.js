"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSpinner = useSpinner;
function useSpinner(props) {
  return {
    spinnerProps: {
      accessible: true,
      accessibilityLabel: props.accessibilityLabel ?? 'loading'
    }
  };
}
//# sourceMappingURL=useSpinner.js.map