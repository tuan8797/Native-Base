export const resolveStackStyleInput = (variant, color) => {
  if (variant === 'underlined') {
    return {
      outlineWidth: '0',
      boxShadow: `0 1px 0 0 ${color}`
    };
  } else if (variant === 'unstyled') {
    return {
      outlineWidth: 0
    };
  } else {
    return {
      outlineWidth: '0',
      boxShadow: `0 0 0 1px ${color}`
    };
  }
};
//# sourceMappingURL=resolveStackStyleInput.js.map