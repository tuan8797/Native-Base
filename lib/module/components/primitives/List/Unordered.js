function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { VStack } from '../Stack';
import { usePropsResolution } from '../../../hooks';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const UnorderedList = (_ref, ref) => {
  let {
    children,
    ...props
  } = _ref;
  const {
    _text,
    _hover,
    ...resolvedProps
  } = usePropsResolution('List', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  // add props to children
  children = React.Children.map(children, (child, ind) => {
    return /*#__PURE__*/React.cloneElement(child, {
      index: ind,
      ul: true,
      _text: _text,
      _hover,
      ...child.props
    }, child.props.children);
  });
  return /*#__PURE__*/React.createElement(VStack, _extends({}, resolvedProps, {
    ref: ref
  }), children);
};
export default /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(UnorderedList));
//# sourceMappingURL=Unordered.js.map