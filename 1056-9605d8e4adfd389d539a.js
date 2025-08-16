"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1056],{

/***/ 61056:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSerial; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15725);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46196);
function DashboardSerial(props){var{service}=props;var baudRateRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SerialReg.BaudRate */ .h7w.BaudRate);var dataBitsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SerialReg.DataBits */ .h7w.DataBits);var stopBitsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SerialReg.StopBits */ .h7w.StopBits);var parityRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SerialReg.ParityMode */ .h7w.ParityMode);var baudRate=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(baudRateRegister,props);var dataBits=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(dataBitsRegister,props);var stopBits=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(stopBitsRegister,props);var parity=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(parityRegister,props);var connection=(baudRate||"?")+" baud/"+(dataBits||"?")+((parity===null||parity===void 0?void 0:parity[0])||"?")+(stopBits||"?");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>service.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .REPORT_RECEIVE */ .Gb8,pkt=>{var{data,serviceCommand}=pkt;if(serviceCommand===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SerialCmd.Received */ .dF0.Received){console.log((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .NC)(data));}}),[service]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{item:true,xs:12},connection));}

/***/ })

}]);
//# sourceMappingURL=1056-9605d8e4adfd389d539a.js.map