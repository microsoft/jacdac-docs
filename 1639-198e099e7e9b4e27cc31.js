"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1639],{

/***/ 31639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceFirmwareVersionChip; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90461);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11352);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_useService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25677);
// tslint:disable-next-line: no-submodule-imports
function DeviceFirmwareVersionChip(props){var _specification$firmwa,_specification$firmwa2;var{device}=props;var specification=(0,_jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(device);var control=(0,_jacdac_useService__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(device,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .JD_SERVICE_INDEX_CTRL */ .fey);var productIdentifierRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(control,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.ProductIdentifier */ .toU.ProductIdentifier);var[productIdentifier]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(productIdentifierRegister);var firmwareVersionRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(control,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.FirmwareVersion */ .toU.FirmwareVersion);var[firmwareVersion]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(firmwareVersionRegister);if(firmwareVersion==undefined)return null;var firmwareName=!!productIdentifier&&(specification===null||specification===void 0?void 0:(_specification$firmwa=specification.firmwares)===null||_specification$firmwa===void 0?void 0:(_specification$firmwa2=_specification$firmwa.find(fw=>fw.productIdentifier===productIdentifier))===null||_specification$firmwa2===void 0?void 0:_specification$firmwa2.name);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{size:"small",label:[firmwareName,firmwareVersion].filter(f=>!!f).join(" ")});}

/***/ })

}]);
//# sourceMappingURL=1639-198e099e7e9b4e27cc31.js.map