"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResponsiveQuery = exports.getStyleElement = void 0;
var _atomic = require("../react-native-web-fucntions/atomic");
var _preprocess = _interopRequireDefault(require("../react-native-web-fucntions/preprocess"));
var _reactNative = require("react-native");
var _stableHash = _interopRequireDefault(require("stable-hash"));
var _hash = _interopRequireDefault(require("./hash"));
var _useStableMemo = require("./useStableMemo");
var _common = require("./common");
var _ResponsiveQueryProvider = require("./ResponsiveQueryProvider");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { atomic } from 'react-native-web/dist/exports/StyleSheet/compiler';

// @ts-ignore

/******************** Implementation after RNW v0.18 ***********************/
/**
 * 1. preprocess:- Handles shadow/text shadow conversion from RN styles to web *                 styles
 *
 * 2. atomic:- it handles prefixing, converting RN specific styles to web styles *             and generating the CSS selector.
 *             Input {marginTop: 10}
 *             Output
 *             compiledStyle : marginTop: "r-marginTop-156q2ks"
 *             compiledOrderedRules : ".r-marginTop-156q2ks{margin-top:10px;}"
 *      a)compiledStyle:- Array it holds identifier/selector with properties
 *      b)compiledOrderedRules:- Array it holds the css rule with selector name
 *      Also from RNW v0.18 handles swapping of ltr styles if enabled by user
 * 3. createSheet:- used to grab sheet which exist already created by rnw. when we *                  call createSheet without id it will return sheet which exist. *                  cause it automatically takes a default ID  which is already in *                  use (created by rnw with default ID) so this return sheet *                  which exist with  ID doesn't create a new sheet.
 *
 * This Implementation is based on asumptions that RNW doesn't change the         * function  or doesn't re-write them. if there is any change in RNW implmentation * it we'll break and needs to be updated.
 *
 */
let textContentMap = {};
const useResponsiveQuery = queries => {
  const responsiveQueryContext = _react.default.useContext(_ResponsiveQueryProvider.ResponsiveQueryContext);
  const disableCSSMediaQueries = (queries === null || queries === void 0 ? void 0 : queries.disableCSSMediaQueries) ?? responsiveQueryContext.disableCSSMediaQueries;

  // Only attaches listener if disableCSSMediaQueries is true
  const windowWidth = (0, _common.useDimensionsWithEnable)({
    enable: disableCSSMediaQueries
  }).width;
  const values = (0, _useStableMemo.useStableMemo)(() => {
    // Use the non-media query responsive styling
    if (disableCSSMediaQueries) {
      const getResponsiveStyles = (0, _common.getResponsiveStylesImpl)(windowWidth);
      if (queries) {
        const {
          styles
        } = getResponsiveStyles(queries);
        return {
          styles,
          getResponsiveStyles
        };
      } else {
        return {
          getResponsiveStyles
        };
      }
    } else {
      if (queries) {
        const {
          styles,
          dataSet
        } = getResponsiveStyles(queries);
        return {
          dataSet,
          styles,
          getResponsiveStyles
        };
      } else {
        return {
          getResponsiveStyles
        };
      }
    }
  }, [queries, windowWidth, disableCSSMediaQueries]);
  return values;
};
exports.useResponsiveQuery = useResponsiveQuery;
const getDataAttribute = queryRule => {
  if (typeof queryRule.minWidth === 'number' && typeof queryRule.maxWidth === 'number') {
    return `min-width-${queryRule.minWidth}-max-width-${queryRule.maxWidth}`;
  } else if (typeof queryRule.minWidth === 'number') {
    return `min-width-${queryRule.minWidth}`;
  } else if (typeof queryRule.maxWidth === 'number') {
    return `max-width-${queryRule.maxWidth}`;
  }
  return undefined;
};
const getMediaQueryRule = (query, newRule) => {
  if (typeof query.minWidth === 'number' && typeof query.maxWidth === 'number') {
    return `@media only screen and (min-width: ${query.minWidth}px) and (max-width: ${query.maxWidth}px) { ${newRule} }`;
  } else if (typeof query.minWidth === 'number') {
    return `@media only screen and (min-width: ${query.minWidth}px) { ${newRule} }`;
  } else if (typeof query.maxWidth === 'number') {
    return `@media only screen and (max-width: ${query.maxWidth}px) { ${newRule} }`;
  }
  return undefined;
};
let styleSheet;
const insert = rule => {
  if (rule === '') {
    return;
  }
  if (typeof window !== 'undefined') {
    if (!styleSheet) {
      const styleEl = document.createElement('style');
      styleEl.type = 'text/css';
      styleEl.appendChild(document.createTextNode(''));
      document.head.appendChild(styleEl);
      styleSheet = styleEl.sheet;
    }
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
};
const getResponsiveStyles = queries => {
  const queryString = (0, _stableHash.default)(queries.query);
  const queriesHash = (0, _hash.default)(queryString);
  const styles = queries.initial ? [_reactNative.StyleSheet.create({
    initial: _reactNative.StyleSheet.flatten(queries.initial)
  }).initial] : undefined;
  let dataSet = {};

  /**
   * This function is copied from intergalacticspacehighway/rnw-responsive-ssr
   */

  if (queries.query) {
    queries.query.forEach(queryRule => {
      const queryHash = queriesHash + (0, _hash.default)((0, _stableHash.default)(queryRule));
      const dataAttribute = getDataAttribute(queryRule);
      if (dataAttribute) {
        const newIdentifier = `[data-${dataAttribute}$="${queryHash}"]`;
        dataSet[dataAttribute] = queryHash;
        let mediaRules = '';
        const flattenQueryStyle = _reactNative.StyleSheet.flatten(queryRule.style);
        const newStyle = (0, _preprocess.default)(flattenQueryStyle);
        const [compiledStyle, compiledOrderedRules] = (0, _atomic.atomic)(newStyle);
        //@ts-ignore
        delete compiledStyle.$$css; //removing unnecessary $$css property
        Object.keys(compiledStyle).forEach(key => {
          const oldIdentifier = compiledStyle[key];
          compiledOrderedRules.forEach(_ref => {
            let [rules, _order] = _ref;
            // Rule returned by atomic has css selectors, so we'll replace it with data-attr selector

            let newRule = '';
            if (rules[0].includes(oldIdentifier)) {
              newRule = rules[0].replace('.' + oldIdentifier, newIdentifier);
            }
            mediaRules += newRule;
          });
        });
        if (mediaRules) {
          const mediaQueryRule = getMediaQueryRule(queryRule, mediaRules);
          const queryKey = `/*${queryHash}{}*/${mediaQueryRule}`;
          if (!textContentMap[queryKey]) {
            insert(queryKey);
            textContentMap[queryKey] = true;
          }
        }
      }
    });
  }
  return {
    styles,
    dataSet
  };
};

/**
 * This function is copied from intergalacticspacehighway/rnw-responsive-ssr
 */
const getStyleElement = () => {
  return /*#__PURE__*/_react.default.createElement("style", {
    type: "text/css",
    dangerouslySetInnerHTML: {
      __html: Object.keys(textContentMap).join('')
    }
  });
};
exports.getStyleElement = getStyleElement;
//# sourceMappingURL=useResponsiveQuery.web.js.map