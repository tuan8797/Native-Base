import { themeTools } from '../../../theme';
export function findProps(props) {
  const [textProps, remaining] = themeTools.extractInObject(props, ['fontWeight', 'fontSize', 'textDecorationLine', 'color']);
  const [borderProps, otherRemainingProps] = themeTools.extractInObject(remaining, ['border', 'borderBottom', 'borderTop', 'borderLeft', 'borderRight', 'borderWidth', 'borderRadius', 'borderColor', 'borderRightColor', 'borderBottomWidth', 'borderLeftWidth', 'borderTopWidth', 'borderBotttomWidth', 'borderTopLeftRadius', 'borderBottomColor', 'borderBottomEndRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomStartRadius', 'borderBottomWidth', 'borderEndColor', 'borderLeftColor', 'borderLeftWidth', 'borderRadius', 'borderRightWidth', 'borderStartColor', 'borderTopColor', 'borderTopEndRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopStartRadius', 'borderTopWidth']);
  const [layoutProps, remainingProps] = themeTools.extractInObject(otherRemainingProps, ['m', 'margin', 'mt', 'marginTop', 'mr', 'marginRight', 'mb', 'marginBottom', 'ml', 'marginLeft', 'mx', 'marginX', 'my', 'marginY', 'left', 'top', 'bottom', 'right', 'position', 'minH', 'minHeight', 'minWidth', 'minW', 'height', 'width']);
  return [textProps, remainingProps, layoutProps, borderProps];
}
//# sourceMappingURL=utils.js.map