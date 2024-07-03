"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _PresenceTransition = _interopRequireDefault(require("./PresenceTransition"));
var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const defaultStaggerConfig = {
  offset: 0,
  reverse: false
};
const Stagger = _ref => {
  let {
    children,
    ...restProps
  } = _ref;
  //TODO: refactor for responsive prop
  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(restProps)) {
    return null;
  }
  return _react.default.Children.map(children, (child, index) => {
    const clonedAnimationConfig = (0, _lodash.cloneDeep)(restProps);
    const {
      animate,
      exit
    } = clonedAnimationConfig;
    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (_react.default.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      animate.transition.delay = animate.transition.delay + offset;
    }
    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (_react.default.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      exit.transition.delay = exit.transition.delay + offset;
    }
    return /*#__PURE__*/_react.default.createElement(_PresenceTransition.default, _extends({
      key: child.key
    }, clonedAnimationConfig), child);
  });
};
var _default = Stagger;
exports.default = _default;
//# sourceMappingURL=Stagger.js.map