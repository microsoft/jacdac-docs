"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7933],{

/***/ 52900:
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
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');
exports.Z = _default;

/***/ }),

/***/ 97933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImportButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76914);
/* harmony import */ var _mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52900);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6867);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var MAX_SIZE=5000000;function ImportButton(props){var{text,onFilesUploaded,disabled,acceptedFiles,icon,multiple,className}=props;var inputId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var handleSave=ev=>{var _toArray;var{target}=ev;var files=(_toArray=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .toArray */ .qo)(target.files))===null||_toArray===void 0?void 0:_toArray.filter(f=>f.size<MAX_SIZE);if(files!==null&&files!==void 0&&files.length)onFilesUploaded(files);};var ip=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{id:inputId,type:"file",hidden:true,accept:acceptedFiles===null||acceptedFiles===void 0?void 0:acceptedFiles.join(","),multiple:multiple,onChange:handleSave});return icon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:inputId},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:text||"import",className:className,disabled:disabled,component:"span"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null),ip)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:className,variant:"contained",component:"label",disabled:disabled,startIcon:icon||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null)},text||"import",ip);}

/***/ })

}]);
//# sourceMappingURL=7933-7a2949620267595496c6.js.map