import { merge } from 'lodash';
const SPECIFICITY_1000 = 1000;
const SPECIFICITY_110 = 110;
const SPECIFICITY_100 = 100;
const SPECIFICITY_70 = 70;
const SPECIFICITY_60 = 60;
const SPECIFICITY_55 = 55;
const SPECIFICITY_50 = 50;
const SPECIFICITY_40 = 40;
const SPECIFICITY_30 = 30;
// SPECIFICITY_20 is being user for defferentiating between User Props and Theme Props. So any specificity less than SPECIFICITY_20 will be ovridable by user props.
const SPECIFICITY_20 = 20;
const SPECIFICITY_10 = 10;
const specificityPrecedence = [SPECIFICITY_1000, SPECIFICITY_110, SPECIFICITY_100, SPECIFICITY_70, SPECIFICITY_60, SPECIFICITY_55, SPECIFICITY_50, SPECIFICITY_40, SPECIFICITY_30, SPECIFICITY_20, SPECIFICITY_10];
const INITIAL_PROP_SPECIFICITY = {
  [SPECIFICITY_1000]: 0,
  [SPECIFICITY_110]: 0,
  [SPECIFICITY_100]: 0,
  [SPECIFICITY_70]: 0,
  [SPECIFICITY_60]: 0,
  [SPECIFICITY_50]: 0,
  [SPECIFICITY_55]: 0,
  [SPECIFICITY_40]: 0,
  [SPECIFICITY_30]: 0,
  [SPECIFICITY_20]: 0,
  [SPECIFICITY_10]: 0
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
  },
  _loading: {
    dependentOn: 'state',
    respondTo: 'isLoading',
    priority: SPECIFICITY_110
  },
  _important: {
    dependentOn: null,
    priority: SPECIFICITY_1000
  }
};
export const compareSpecificity = (exisiting, upcoming, ignorebaseTheme) => {
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
    // @ts-ignore
    return state[pseudoPropsMap[property].respondTo];
  } else if (pseudoPropsMap[property].dependentOn === null) {
    return true;
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
    previouslyFlattenProps,
    cascadePseudoProps
  } = _ref2;
  let flattenProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let specificityMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let priority = arguments.length > 3 ? arguments[3] : undefined;
  const mergePsuedoProps = (property, propertySpecity) => {
    if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
      if (process.env.NODE_ENV === 'development' && props.debug) {
        /* eslint-disable-next-line */
        console.log(`%c ${property}`, 'color: #818cf8;', 'updated as internal prop with higher specificity');
      }
      specificityMap[property] = propertySpecity;
      // merging internal props (like, _text, _stack ...)
      flattenProps[property] = merge({}, flattenProps[property], props[property]);
    } else {
      if (process.env.NODE_ENV === 'development' && props.debug) {
        /* eslint-disable-next-line */
        console.log(`%c ${property}`, 'color: #818cf8;', 'updated as internal prop with lower specificity');
      }
      flattenProps[property] = merge({}, props[property], flattenProps[property]);
    }
  };
  for (const property in props) {
    var _pseudoPropsMap$prope;
    // NOTE: the order is important here. Keep in mind while specificity breakpoints.
    const propertySpecity = currentSpecificity ? {
      ...currentSpecificity
    } : {
      ...INITIAL_PROP_SPECIFICITY,
      [SPECIFICITY_20]: priority
    };
    if (
    // @ts-ignore
    state[(_pseudoPropsMap$prope = pseudoPropsMap[property]) === null || _pseudoPropsMap$prope === void 0 ? void 0 : _pseudoPropsMap$prope.respondTo] || ['_dark', '_light', '_web', '_ios', '_android', '_important'].includes(property)) {
      // @ts-ignore
      if (shouldResolvePseudoProp({
        property,
        state,
        platform,
        colormode
      })) {
        // NOTE: Handling (state driven) props like _important, _web, _ios, _android, _dark, _light, _disabled, _focus, _focusVisible, _hover, _pressed, _readOnly, _invalid, .... Only when they are true.
        if (process.env.NODE_ENV === 'development' && props.debug) {
          /* eslint-disable-next-line */
          console.log(`%c ${property}`, 'color: #818cf8;', 'recursively resolving');
        }
        // @ts-ignore
        propertySpecity[pseudoPropsMap[property].priority]++;
        simplifyProps({
          props: props[property],
          colormode,
          platform,
          state,
          currentSpecificity: propertySpecity,
          previouslyFlattenProps: previouslyFlattenProps,
          cascadePseudoProps
        }, flattenProps, specificityMap, priority);
      }
      // @ts-ignore
    } else if (pseudoPropsMap[property] === undefined) {
      if (property.startsWith('_')) {
        // NOTE: Handling (internal) props like _text, _stack, ....
        mergePsuedoProps(property, propertySpecity);
      } else {
        if (compareSpecificity(specificityMap[property], propertySpecity, false)) {
          if (process.env.NODE_ENV === 'development' && props.debug) {
            /* eslint-disable-next-line */
            console.log(`%c ${property}`, 'color: #818cf8;', 'updated as simple prop');
          }
          specificityMap[property] = propertySpecity;
          // replacing simple props (like, p, m, bg, color, ...)
          flattenProps[property] = props[property];
        } else {
          if (process.env.NODE_ENV === 'development' && props.debug) {
            /* eslint-disable-next-line */
            console.log(`%c ${property}`, 'color: #818cf8;', 'ignored');
          }
        }
      }
    } else {
      // Can delete unused props
      if (!cascadePseudoProps) {
        delete flattenProps[property];
        if (process.env.NODE_ENV === 'development' && props.debug) {
          /* eslint-disable-next-line */
          console.log(`%c ${property}`, 'color: #818cf8;', 'deleted');
        }
      } else {
        if (process.env.NODE_ENV === 'development' && props.debug) {
          /* eslint-disable-next-line */
          console.log(`%c ${property}`, 'color: #818cf8;', 'cascaded');
        }
        mergePsuedoProps(property, propertySpecity);
      }
    }
  }
};
export const propsFlattener = (_ref3, priority) => {
  let {
    props,
    colormode,
    platform,
    state,
    currentSpecificityMap,
    previouslyFlattenProps,
    cascadePseudoProps
  } = _ref3;
  const flattenProps = {};
  for (const property in props) {
    var _pseudoPropsMap$prope2;
    if (
    // @ts-ignore
    state[(_pseudoPropsMap$prope2 = pseudoPropsMap[property]) === null || _pseudoPropsMap$prope2 === void 0 ? void 0 : _pseudoPropsMap$prope2.respondTo] === undefined && property.startsWith('_')) {
      flattenProps[property] = previouslyFlattenProps[property];
    }
  }
  const specificityMap = currentSpecificityMap || {};
  simplifyProps({
    props,
    colormode,
    platform,
    state,
    currentSpecificityMap,
    previouslyFlattenProps,
    cascadePseudoProps
  }, flattenProps, specificityMap, priority);
  return [flattenProps, specificityMap];
};
//# sourceMappingURL=propsFlattener.js.map