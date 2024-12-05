"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7191],{

/***/ 57191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeDependencies; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var _makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9668);
// tslint:disable-next-line: no-submodule-imports
function MakeCodeDependencies(props){var{slug,branch}=props;var pxt=(0,_makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(slug,branch);var dependencies=(pxt===null||pxt===void 0?void 0:pxt.dependencies)||{};var jds=Object.entries(dependencies).filter(_ref=>{var[,value]=_ref;return /^github:microsoft\/pxt-jacdac\/\w/i.test(value);});if(!jds.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{variant:"caption"},"Jacdac dependencies:",jds.map(_ref2=>{var[key,value]=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{marginLeft:"0.5em"},key:key},value.replace(/^github:microsoft\/pxt-jacdac\//i,""),",");}));}

/***/ })

}]);
//# sourceMappingURL=7191-6ec8eac09dcf9d03eafb.js.map