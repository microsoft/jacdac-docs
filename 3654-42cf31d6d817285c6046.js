"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3654],{

/***/ 40055:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done');
exports.Z = _default;

/***/ }),

/***/ 56868:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}), 'FileCopy');
exports.Z = _default;

/***/ }),

/***/ 64017:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'ReportProblem');
exports.Z = _default;

/***/ }),

/***/ 96173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useMounted(){var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);return()=>mounted.current;}

/***/ }),

/***/ 63654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CopyButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56868);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40055);
/* harmony import */ var _mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64017);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48147);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76914);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96173);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
var _excluded=["label","text","title","disabled","onCopy","copyIcon"];function CopyButton(props){var{label,text,title="copy data to clipboard",disabled,onCopy,copyIcon}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props,_excluded);var{0:copied,1:setCopied}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var mounted=(0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var handleClick=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(ev){ev.stopPropagation();ev.preventDefault();try{setCopied(null);var _copied=text||(yield onCopy===null||onCopy===void 0?void 0:onCopy());if(typeof _copied==="string"){var c=_copied;yield navigator.clipboard.writeText(c);}else{var canvas=_copied;var blob=yield new Promise(resolve=>canvas.toBlob(blob=>resolve(blob)));var item=new ClipboardItem({"image/png":blob});navigator.clipboard.write([item]);}if(mounted())setCopied(true);}catch(e){console.debug(e);if(mounted())setCopied(false);}finally{yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .delay */ .gw)(2000);if(mounted())setCopied(undefined);}});return function handleClick(_x){return _ref.apply(this,arguments);};}();var hasCopied=copied!==undefined;var buttonText=copied===true?"Copied!":copied===false?"Copy failed":label||title||"copy to clipboard";return label?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,Object.assign({title:title,disabled:disabled||hasCopied},rest,{onClick:hasCopied?undefined:handleClick}),buttonText):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({trackName:"ui.copy",title:buttonText},rest,{onClick:disabled?undefined:handleClick}),copied===true?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{color:"success"}):copied===false?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ReportProblem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null):copyIcon||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null));}

/***/ })

}]);
//# sourceMappingURL=3654-42cf31d6d817285c6046.js.map