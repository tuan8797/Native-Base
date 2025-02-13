function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, forwardRef } from 'react';
import StackMain from './Stack';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const HStack = (props, ref) => {
  const resolvedProps = usePropsResolution('HStack', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(StackMain, _extends({
    ref: ref,
    direction: "row"
  }, resolvedProps));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(HStack));
//# sourceMappingURL=HStack.js.map