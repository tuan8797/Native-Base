function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, forwardRef } from 'react';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const AlertDialogHeader = (props, ref) => {
  const newProps = usePropsResolution('AlertDialogHeader', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Box, _extends({}, newProps, {
    ref: ref
  }));
};
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(AlertDialogHeader));
//# sourceMappingURL=AlertDialogHeader.js.map