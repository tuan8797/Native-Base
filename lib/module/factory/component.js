function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { usePropsWithComponentTheme } from '../hooks/useThemeProps/usePropsWithComponentTheme';
import { makeStyledComponent } from '../utils/styled';
export default function Factory(Component, componentTheme) {
  return /*#__PURE__*/React.forwardRef((_ref, ref) => {
    let {
      children,
      _state,
      ...props
    } = _ref;
    const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
    const calculatedProps = usePropsWithComponentTheme(componentTheme ?? {}, props, _state);
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({}, calculatedProps, {
      ref: ref
    }), children);
  });
}
//# sourceMappingURL=component.js.map