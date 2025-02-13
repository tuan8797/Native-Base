"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _backgroundClip = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/backgroundClip"));
var _crossFade = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/crossFade"));
var _cursor = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/cursor"));
var _filter = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/filter"));
var _imageSet = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/imageSet"));
var _logical = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/logical"));
var _position = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/position"));
var _sizing = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/sizing"));
var _transition = _interopRequireDefault(require("inline-style-prefixer/lib/plugins/transition"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable */
//@ts-nocheck
// This functions is taken from react native web

const w = ['Webkit'];
const m = ['Moz'];
const wm = ['Webkit', 'Moz'];
const wms = ['Webkit', 'ms'];
const wmms = ['Webkit', 'Moz', 'ms'];
var _default = {
  plugins: [_backgroundClip.default, _crossFade.default, _cursor.default, _filter.default, _imageSet.default, _logical.default, _position.default, _sizing.default, _transition.default],
  prefixMap: {
    appearance: wmms,
    userSelect: wm,
    textEmphasisPosition: wms,
    textEmphasis: wms,
    textEmphasisStyle: wms,
    textEmphasisColor: wms,
    boxDecorationBreak: wms,
    clipPath: w,
    maskImage: wms,
    maskMode: wms,
    maskRepeat: wms,
    maskPosition: wms,
    maskClip: wms,
    maskOrigin: wms,
    maskSize: wms,
    maskComposite: wms,
    mask: wms,
    maskBorderSource: wms,
    maskBorderMode: wms,
    maskBorderSlice: wms,
    maskBorderWidth: wms,
    maskBorderOutset: wms,
    maskBorderRepeat: wms,
    maskBorder: wms,
    maskType: wms,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    breakAfter: w,
    breakBefore: w,
    breakInside: w,
    columnCount: w,
    columnFill: w,
    columnGap: w,
    columnRule: w,
    columnRuleColor: w,
    columnRuleStyle: w,
    columnRuleWidth: w,
    columns: w,
    columnSpan: w,
    columnWidth: w,
    backdropFilter: w,
    hyphens: w,
    flowInto: w,
    flowFrom: w,
    regionFragment: w,
    textOrientation: w,
    tabSize: m,
    fontKerning: w,
    textSizeAdjust: w
  }
};
exports.default = _default;
//# sourceMappingURL=staticData.js.map