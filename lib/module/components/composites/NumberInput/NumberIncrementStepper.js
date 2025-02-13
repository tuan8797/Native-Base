function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NBStepper } from './NumberInputStepper';
import { NumberInputContext } from './Context';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const NumberIncrementStepper = (_ref, ref) => {
  let {
    children,
    isDisabled: pIsDisabled,
    ...props
  } = _ref;
  const {
    numberInputValue = 0,
    step = 1,
    max = +Infinity,
    handleChange,
    ...context
  } = React.useContext(NumberInputContext);
  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange && handleChange(numberInputValue + step);
  };
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return /*#__PURE__*/React.createElement(NBStepper, _extends({
    isIncrement: true,
    isDisabled: isDisabled,
    pressHandler: pressHandler,
    disablitityCheck: numberInputValue + step > max
  }, props, {
    ref: ref
  }), children);
};
export default /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(NumberIncrementStepper));
//# sourceMappingURL=NumberIncrementStepper.js.map