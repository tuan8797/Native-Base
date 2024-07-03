export function useSpinner(props) {
  return {
    spinnerProps: {
      accessible: true,
      accessibilityLabel: props.accessibilityLabel ?? 'loading'
    }
  };
}
//# sourceMappingURL=useSpinner.js.map