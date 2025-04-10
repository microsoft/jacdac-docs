"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6965],{

/***/ 46366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceTemperatureChip; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_useService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25677);
// tslint:disable-next-line: no-submodule-imports
function DeviceTemperatureChip(props){var{device}=props;var controlService=(0,_jacdac_useService__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(device,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .JD_SERVICE_INDEX_CTRL */ .fey);var tempRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(controlService,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.McuTemperature */ .toU.McuTemperature);var[temperature]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(tempRegister);if(isNaN(temperature))return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{size:"small",label:temperature+"\xB0"});}

/***/ })

}]);
//# sourceMappingURL=6965-b7c2955c42044accb3ae.js.map