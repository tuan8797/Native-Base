"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("../components/primitives/Box"));
var _ResponsiveQueryProvider = require("./useResponsiveQuery/ResponsiveQueryProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Thanks @gregberge for code and @nandorojo for suggestion.
// Original source: https://github.com/gregberge/react-flatten-children
function flattenChildren(children) {
  let keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const childrenArray = _react.default.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child, index) => {
    if (child.type === _react.default.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children, keys.concat(child.key || index)));
    }
    if ( /*#__PURE__*/_react.default.isValidElement(child)) {
      flatChildren.push( /*#__PURE__*/_react.default.cloneElement(child, {
        key: keys.concat(String(child.key || index)).join('.')
      }));
    } else {
      flatChildren.push(child);
    }
    return flatChildren;
  }, []);
}
const getSpacedChildren = (children, space, axis, reverse, divider) => {
  let childrenArray = _react.default.Children.toArray(flattenChildren(children));
  childrenArray = reverse === 'reverse' ? [...childrenArray].reverse() : childrenArray;
  const orientation = axis === 'X' ? 'vertical' : 'horizontal';

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const responsiveQueryContext = _react.default.useContext(_ResponsiveQueryProvider.ResponsiveQueryContext);
  const disableCSSMediaQueries = responsiveQueryContext.disableCSSMediaQueries;

  // If there's a divider, we wrap it with a Box and apply vertical and horizontal margins else we add a spacer Box with height or width
  if (divider) {
    const spacingProp = {
      ...(axis === 'X' ? {
        mx: space
      } : {
        my: space
      })
    };
    divider = /*#__PURE__*/_react.default.cloneElement(divider, {
      orientation,
      ...spacingProp
    });
    childrenArray = childrenArray.map((child, index) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: child.key ?? `spaced-child-${index}`
      }, child, index < childrenArray.length - 1 && divider);
    });
  } else {
    const spacingProp = {
      ...(axis === 'X' ? {
        width: space
      } : {
        height: space
      })
    };
    childrenArray = childrenArray.map((child, index) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: child.key ?? `spaced-child-${index}`
      }, child, disableCSSMediaQueries ? index < childrenArray.length - 1 && /*#__PURE__*/_react.default.createElement(_Box.default, spacingProp) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
    });
  }
  return childrenArray;
};
var _default = getSpacedChildren;
exports.default = _default;
//# sourceMappingURL=getSpacedChildren.js.map