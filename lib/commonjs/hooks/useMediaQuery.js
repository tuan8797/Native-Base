"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMediaQuery = useMediaQuery;
var _reactNative = require("react-native");
var _lodash = require("lodash");
function useMediaQuery(query) {
  const dims = (0, _reactNative.useWindowDimensions)();
  const height = dims === null || dims === void 0 ? void 0 : dims.height;
  const width = dims === null || dims === void 0 ? void 0 : dims.width;
  return iterateQuery(query, height, width);
}
function queryResolver(query, width, height) {
  for (const queryKey in query) {
    if (!calculateQuery(queryKey, query[queryKey], height, width)) {
      return false;
    }
  }
  return true;
}
function iterateQuery(query, height, width) {
  const queryResults = [];
  if (Array.isArray(query)) {
    query.forEach(subQuery => {
      queryResults.push(queryResolver(subQuery, width, height));
    });
  } else {
    queryResults.push(queryResolver(query, width, height));
  }
  return queryResults;
}
function calculateQuery(key, val, height, width) {
  let retval;
  if ((0, _lodash.isNil)(width) || (0, _lodash.isNil)(height) || (0, _lodash.isNil)(val)) {
    return;
  }
  switch (key) {
    case 'maxWidth':
      retval = !(0, _lodash.isNil)(val) ? width <= Number(val) : undefined;
      break;
    case 'minWidth':
      retval = !(0, _lodash.isNil)(val) ? width >= Number(val) : undefined;
      break;
    case 'maxHeight':
      retval = !(0, _lodash.isNil)(val) ? height <= Number(val) : undefined;
      break;
    case 'minHeight':
      retval = !(0, _lodash.isNil)(val) ? height >= Number(val) : undefined;
      break;
    case 'orientation':
      if (!(0, _lodash.isNil)(val)) {
        if (width > height) {
          retval = val === 'landscape';
        } else {
          retval = val === 'portrait';
        }
      }
      break;
    default:
      break;
  }
  return retval;
}
//# sourceMappingURL=useMediaQuery.js.map