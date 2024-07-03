import { useScreenReaderEnabled } from '../../../hooks';
export function VisuallyHidden(_ref) {
  let {
    children
  } = _ref;
  const screenReaderEnabled = useScreenReaderEnabled();
  return screenReaderEnabled ? children : null;
}
//# sourceMappingURL=index.js.map