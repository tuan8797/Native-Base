function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import Box from '../../primitives/Box';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const Code = (_ref, ref) => {
  let {
    ...props
  } = _ref;
  let {
    ...newProps
  } = useThemeProps('Code', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Box, _extends({
    _text: {
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace'
    }
  }, newProps, {
    ref: ref
  }));
};
export default /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Code));
//# sourceMappingURL=index.js.map