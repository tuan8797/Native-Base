import { mode, getColorScheme } from './../tools';
const baseStyle = props => {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.300`)(props),
    px: 2
  };
};
const defaultProps = {
  colorScheme: 'primary'
};
export default {
  baseStyle,
  defaultProps
};
//# sourceMappingURL=app-bar.js.map