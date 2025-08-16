"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3111],{

/***/ 73111:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardRelay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75938);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68320);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47644);
function DashboardRelay(props){var{service}=props;var activeRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .RelayReg.Active */ .D_x.Active);var active=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(activeRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{textPrimary}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(color);var handleClose=(event,checked)=>activeRegister===null||activeRegister===void 0?void 0:activeRegister.sendSetBoolAsync(checked,true);if(active===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:activeRegister});var labelStyle={color:textPrimary};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:active?"active":"inactive",checked:active,onChange:handleClose,labelStyle:labelStyle});}

/***/ })

}]);
//# sourceMappingURL=3111-8196761e06984517d3ca.js.map