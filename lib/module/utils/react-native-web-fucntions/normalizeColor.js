/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

import ConvertNumberIntoHex from 'normalize-css-color';
const processColor = color => {
  if (color === undefined || color === null) {
    return color;
  }

  // convert number and hex
  let int32Color = ConvertNumberIntoHex(color);
  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }
  //@ts-ignore
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};
const isWebColor = color => color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
const normalizeColor = function (color) {
  let opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (color == null) return;
  if (typeof color === 'string' && isWebColor(color)) {
    return color;
  }
  const colorInt = processColor(color);
  if (colorInt != null) {
    const r = colorInt >> 16 & 255;
    const g = colorInt >> 8 & 255;
    const b = colorInt & 255;
    const a = (colorInt >> 24 & 255) / 255;
    const alpha = (a * opacity).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
};
export default normalizeColor;
//# sourceMappingURL=normalizeColor.js.map