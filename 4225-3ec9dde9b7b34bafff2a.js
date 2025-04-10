"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4225],{

/***/ 94225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardPower; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75938);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18763);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15725);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48831);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32849);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68320);
function DashboardPower(props){var _PowerPowerStatus$pow;var{service,expanded,visible}=props;var allowedRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.Allowed */ .$xp.Allowed);var powerStatusRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.PowerStatus */ .$xp.PowerStatus);var batteryChargeRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.BatteryCharge */ .$xp.BatteryCharge);var keepOnPulseDurationRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.KeepOnPulseDuration */ .$xp.KeepOnPulseDuration);var keepOnPulsePeriodRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.KeepOnPulsePeriod */ .$xp.KeepOnPulsePeriod);var allowed=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(allowedRegister,props);var[powerStatus]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(powerStatusRegister,props);var[batteryCharge]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(batteryChargeRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";if(powerStatus===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{register:powerStatusRegister});var off=!allowed;var label=off?"off":powerStatus===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Powering */ .p6N.Powering?"on":(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_4__/* .humanify */ .lW)((_PowerPowerStatus$pow=_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus */ .p6N[powerStatus])===null||_PowerPowerStatus$pow===void 0?void 0:_PowerPowerStatus$pow.toLowerCase());var toggleEnabled=()=>allowedRegister.sendSetBoolAsync(!allowed,true);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{container:true,spacing:1,alignItems:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{color:powerStatus===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Overload */ .p6N.Overload||powerStatus===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Overprovision */ .p6N.Overprovision?"error":color,label:label,checked:!off,onChange:toggleEnabled})),batteryCharge!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{label:"battery",value:Math.floor(batteryCharge*100),min:0,max:100})),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:keepOnPulseDurationRegister,showRegisterName:false,visible:visible})),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:keepOnPulsePeriodRegister,showRegisterName:false,visible:visible})));}

/***/ }),

/***/ 32849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92486);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["label"];function SliderWithLabel(props){var{label}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);var labelId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var sliderId=labelId+"sliderId";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,variant:"caption",gutterBottom:true},label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,Object.assign({id:sliderId,"aria-labelledby":labelId,"aria-label":label,valueLabelDisplay:"auto"},others)));}

/***/ })

}]);
//# sourceMappingURL=4225-3ec9dde9b7b34bafff2a.js.map