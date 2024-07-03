"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsFlattener = exports.compareSpecificity = void 0;
var _lodash = require("lodash");
const SPECIFICITY_100 = 100;
const SPECIFICITY_70 = 70;
const SPECIFICITY_60 = 60;
const SPECIFICITY_55 = 55;
const SPECIFICITY_50 = 50;
const SPECIFICITY_40 = 40;
const SPECIFICITY_30 = 30;
const SPECIFICITY_10 = 10;
const SPECIFICITY_1 = 1;
const specificityPrecedence = [SPECIFICITY_100, SPECIFICITY_70, SPECIFICITY_60, SPECIFICITY_55, SPECIFICITY_50, SPECIFICITY_40, SPECIFICITY_30, SPECIFICITY_10, SPECIFICITY_1];
const INITIAL_PROP_SPECIFICITY = {
  [SPECIFICITY_100]: 0,
  [SPECIFICITY_70]: 0,
  [SPECIFICITY_60]: 0,
  [SPECIFICITY_50]: 0,
  [SPECIFICITY_55]: 0,
  [SPECIFICITY_40]: 0,
  [SPECIFICITY_30]: 0,
  [SPECIFICITY_10]: 0,
  [SPECIFICITY_1]: 0
};
const pseudoPropsMap = {
  _web: {
    dependentOn: 'platform',
    priority: SPECIFICITY_10
  },
  _ios: {
    dependentOn: 'platform',
    priority: SPECIFICITY_10
  },
  _android: {
    dependentOn: 'platform',
    priority: SPECIFICITY_10
  },
  _light: {
    dependentOn: 'colormode',
    priority: SPECIFICITY_10
  },
  _dark: {
    dependentOn: 'colormode',
    priority: SPECIFICITY_10
  },
  // TODO: have to add more interactionProps and stateProps
  _indeterminate: {
    dependentOn: 'state',
    respondTo: 'isIndeterminate',
    priority: SPECIFICITY_30
  },
  _checked: {
    dependentOn: 'state',
    respondTo: 'isChecked',
    priority: SPECIFICITY_30
  },
  // Add new pseudeo props in between -------
  _readOnly: {
    dependentOn: 'state',
    respondTo: 'isReadOnly',
    priority: SPECIFICITY_30
  },
  // Add new pseudeo props in between -------
  _invalid: {
    dependentOn: 'state',
    respondTo: 'isInvalid',
    priority: SPECIFICITY_40
  },
  _focus: {
    dependentOn: 'state',
    respondTo: 'isFocused',
    priority: SPECIFICITY_50
  },
  _focusVisible: {
    dependentOn: 'state',
    respondTo: 'isFocusVisible',
    priority: SPECIFICITY_55
  },
  _hover: {
    dependentOn: 'state',
    respondTo: 'isHovered',
    priority: SPECIFICITY_60
  },
  _pressed: {
    dependentOn: 'state',
    respondTo: 'isPressed',
    priority: SPECIFICITY_70
  },
  _disabled: {
    dependentOn: 'state',
    respondTo: 'isDisabled',
    priority: SPECIFICITY_100
  }
};
const compareSpecificity = (exisiting, upcoming, ignorebaseTheme) => {
  if (!exisiting) return true;
  if (!upcoming) return false;
  const condition = ignorebaseTheme ? specificityPrecedence.length - 1 : specificityPrecedence.length;
  for (let index = 0; index < condition; index++) {
    if (exisiting[specificityPrecedence[index]] > upcoming[specificityPrecedence[index]]) {
      return false;
    } else if (exisiting[specificityPrecedence[index]] < upcoming[specificityPrecedence[index]]) {
      return true;
    }
  }
  return true;
};
exports.compareSpecificity = compareSpecificity;
const shouldResolvePseudoProp = _ref => {
  let {
    property,
    state,
    platform,
    colormode
  } = _ref;
  if (pseudoPropsMap[property].dependentOn === 'platform') {
    return property === `_${platform}`;
  } else if (pseudoPropsMap[property].dependentOn === 'colormode') {
    return property === `_${colormode}`;
  } else if (pseudoPropsMap[property].dependentOn === 'state') {
    return state[pseudoPropsMap[property].respondTo];
  } else {
    return false;
  }
};
const simplifyProps = function (_ref2) {
  let {
    props,
    colormode,
    platform,
    state,
    currentSpecificity,
    previouslyFlattenProps
  } = _ref2;
  let flattenProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let specificityMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let priority = arguments.length > 3 ? arguments[3] : undefined;
  for (const property in props) {
    var _pseudoPropsMap$prope, _pseudoPropsMap$prope2;
    // NOTE: the order is important here. Keep in mind while specificity breakpoints.
    const propertySpecity = currentSpecificity ? {
      ...currentSpecificity
    } : {
      ...INITIAL_PROP_SPECIFICITY,
      [SPECIFICITY_1]: priority
    };
    if (state[(_pseudoPropsMap$prope = pseudoPropsMap[property]) === null || _pseudoPropsMap$prope === void 0 ? void 0 : _pseudoPropsMap$prope.respondTo] || ['_dark', '_light', '_web', '_ios', '_android'].includes(property)) {
      if (shouldResolvePseudoProp({
        property,
        state,
        platform,
        colormode
      })) {
        propertySpecity[pseudoPropsMap[property].priority]++;
        simplifyProps({
          props: props[property],
          colormode,
          platform,
          state,
          currentSpecificity: propertySpecity,
          previouslyFlattenProps: previouslyFlattenProps
        }, flattenProps, specificityMap, priority);
      }
    } else if (state[(_pseudoPropsMap$prope2 = pseudoPropsMap[property]) === null || _pseudoPropsMap$prope2 === void 0 ? void 0 : _pseudoPropsMap$prope2.respondTo] === undefined) {
      if (property.startsWith('_')) {
        if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
          specificityMap[property] = propertySpecity;
          // merging internal props (like, _text, _checked, ...)
          flattenProps[property] = (0, _lodash.merge)({}, flattenProps[property], props[property]);
        } else {
          flattenProps[property] = (0, _lodash.merge)({}, props[property], flattenProps[property]);
        }
      } else {
        if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
          specificityMap[property] = propertySpecity;
          // replacing simple props (like, p, m, bg, color, ...)
          flattenProps[property] = props[property];
        }
      }
    }
  }
};
const propsFlattener = (_ref3, priority) => {
  let {
    props,
    colormode,
    platform,
    state,
    currentSpecificityMap,
    previouslyFlattenProps
  } = _ref3;
  const flattenProps = {};
  for (const property in props) {
    var _pseudoPropsMap$prope3;
    if (state[(_pseudoPropsMap$prope3 = pseudoPropsMap[property]) === null || _pseudoPropsMap$prope3 === void 0 ? void 0 : _pseudoPropsMap$prope3.respondTo] === undefined && property.startsWith('_')) {
      flattenProps[property] = previouslyFlattenProps[property];
    }
  }
  const specificityMap = currentSpecificityMap || {};

  // STEP 1.a (if): Check weather it should be recursively resolved
  // NOTE: (when true) recursively resolved it
  // STEP 1.b (else if): Check specificty
  // STEP 1.b.i: Check for pseudo props
  // NOTE: (when true) Merge it.
  // NOTE: (when false) Replace it.

  simplifyProps({
    props,
    colormode,
    platform,
    state,
    currentSpecificityMap,
    previouslyFlattenProps
  }, flattenProps, specificityMap, priority);
  return [flattenProps, specificityMap];
};
exports.propsFlattener = propsFlattener;
//# sourceMappingURL=propsFlattenerTest.js.map