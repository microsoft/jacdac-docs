"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1269],{

/***/ 61269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceImage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11352);
/* harmony import */ var _useDeviceImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36141);
function DeviceImage(props){var{id,size}=props;var spec=(0,_jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_1__/* .useDeviceSpecificationFromIdentifier */ .iR)(id);var url=(0,_useDeviceImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(spec,size);if(!url)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{style:{aspectRatio:"4 / 3",margin:0},src:url,alt:spec.name,loading:"lazy"});}

/***/ }),

/***/ 77682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceCatalog; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/**
 * Gets the device catalog from the current bus
 * @returns
 */function useDeviceCatalog(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();return bus.deviceCatalog;}

/***/ }),

/***/ 36141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceImage; }
/* harmony export */ });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71562);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5018);
function useDeviceImage(specification,size){var sz=size||"full";return specification&&(0,gatsby_link__WEBPACK_IMPORTED_MODULE_1__/* .withPrefix */ .dq)("images/devices/"+(0,_jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__/* .identifierToUrlPath */ .uM)(specification.id)+"."+sz+".jpg");}

/***/ }),

/***/ 22878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRegister; }
/* harmony export */ });
function useRegister(service,identifier){return service===null||service===void 0?void 0:service.register(identifier);}

/***/ }),

/***/ 31246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceProductIdentifier; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36807);
/* harmony import */ var _components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
/* harmony import */ var _useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
function useDeviceProductIdentifier(device){var reg=(0,_components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device===null||device===void 0?void 0:device.service(0),_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.ProductIdentifier */ .toU.ProductIdentifier);var[id]=(0,_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(reg);return id;}

/***/ }),

/***/ 11352:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ useDeviceSpecification; },
/* harmony export */   "Oi": function() { return /* binding */ useDeviceSpecificationFromProductIdentifier; },
/* harmony export */   "iR": function() { return /* binding */ useDeviceSpecificationFromIdentifier; }
/* harmony export */ });
/* harmony import */ var _useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31246);
/* harmony import */ var _useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecification(device){var id=(0,_useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(device);return useDeviceSpecificationFromProductIdentifier(id);}function useDeviceSpecificationFromProductIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromProductIdentifier(id),[id]);return specification;}function useDeviceSpecificationFromIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromIdentifier(id),[id]);return specification;}

/***/ }),

/***/ 9680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e_": function() { return /* binding */ useRegisterHumanValue; },
/* harmony export */   "Pf": function() { return /* binding */ useRegisterUnpackedValue; },
/* harmony export */   "I8": function() { return /* binding */ useRegisterBoolValue; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18763);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
/* harmony import */ var _components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _useEventRaised__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88286);
function readRegisterValue(register,reader,defaultValue,trackError){try{var value=reader(register);return value;}catch(e){var _register$service,_register$service$dev,_register$service2;trackError(e,{dev:register===null||register===void 0?void 0:(_register$service=register.service)===null||_register$service===void 0?void 0:(_register$service$dev=_register$service.device)===null||_register$service$dev===void 0?void 0:_register$service$dev.anonymizedDeviceId,srv:register===null||register===void 0?void 0:(_register$service2=register.service)===null||_register$service2===void 0?void 0:_register$service2.name,reg:register===null||register===void 0?void 0:register.name});return defaultValue;}}function resolveRenderer(srv,reg){if(reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BaseReg.StatusCode */ .vCn.StatusCode)return reg=>{var _humanify;var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[code,vendorCode]=values;if(code===undefined)return"?";var r=((_humanify=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__/* .humanify */ .lW)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SystemStatusCodes */ ._kj[code]||"?"))===null||_humanify===void 0?void 0:_humanify.toLowerCase())+" (0x"+code.toString(16)+")";if(vendorCode){r+=", vendor: 0x"+code.toString(16);}return r;};if(srv===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_DEVICE_SCRIPT_MANAGER */ .I5&&reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .DeviceScriptManagerReg.RuntimeVersion */ .nhI.RuntimeVersion){return reg=>{var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[patch,minor,major]=values;if(patch===undefined)return"?";return major+"."+minor+"."+patch;};}return undefined;}function useRegisterHumanValue(register,options){var{visible,maxLength}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var renderer=register?resolveRenderer(register.service.serviceClass,register.code):undefined;return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>renderer?renderer(__):(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .ellipse */ .hr)(__===null||__===void 0?void 0:__.humanValue,maxLength),"???",trackError),[visible,maxLength]);}function useRegisterUnpackedValue(register,options){var{visible}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>(__===null||__===void 0?void 0:__.unpackedValue)||[],[],trackError),[visible]);}function useRegisterBoolValue(register,options){var{visible}=options||{visible:true};return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>_===null||_===void 0?void 0:_.boolValue,[visible]);}

/***/ })

}]);
//# sourceMappingURL=1269-0fdbbc1f827b5a520129.js.map