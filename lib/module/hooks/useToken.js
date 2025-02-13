import { useTheme } from './useTheme';
import { get } from 'lodash';
export function useToken(property, token, fallback) {
  const theme = useTheme();
  if (Array.isArray(token)) {
    let fallbackArr = [];
    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }
    return token.map((innerToken, index) => {
      const path = `${property}.${innerToken}`;
      return get(theme, path, fallbackArr[index] ?? innerToken);
    });
  }
  const path = `${property}.${token}`;
  return get(theme, path, fallback ?? token);
}
//# sourceMappingURL=useToken.js.map