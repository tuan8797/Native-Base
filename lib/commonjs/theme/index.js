"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  theme: true,
  themeTools: true,
  getColor: true
};
Object.defineProperty(exports, "getColor", {
  enumerable: true,
  get: function () {
    return _styledSystem.getColor;
  }
});
exports.themeTools = exports.theme = void 0;
var _base = _interopRequireDefault(require("./base"));
var _components = _interopRequireDefault(require("./components"));
var tools = _interopRequireWildcard(require("./tools"));
exports.themeTools = tools;
var _styledSystem = require("./styled-system");
var _v33xTheme = require("./v33x-theme");
Object.keys(_v33xTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _v33xTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _v33xTheme[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//@ts-ignore

const config = {
  useSystemColorMode: false,
  // TODO: implement this
  initialColorMode: 'light',
  accessibleColors: false
};
const theme = {
  ..._base.default,
  components: _components.default,
  config
};
exports.theme = theme;
//# sourceMappingURL=index.js.map