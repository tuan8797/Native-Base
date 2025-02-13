import React from 'react';
import { default as Box } from '../../primitives/Box';
import { CheckIcon } from '../../primitives/Icon/Icons';
const SizedIcon = _ref => {
  let {
    icon,
    _icon,
    isChecked
  } = _ref;
  return isChecked ? icon ? /*#__PURE__*/React.cloneElement(icon, {
    ..._icon
  }) : /*#__PURE__*/React.createElement(CheckIcon, _icon) : /*#__PURE__*/React.createElement(Box, _icon);
};
export default SizedIcon;
//# sourceMappingURL=SizedIcon.js.map