"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1560],{

/***/ 1560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardReflectedLight; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75938);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22907);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56212);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3964);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
function DashboardReflectedLight(props){var{service}=props;var brighessRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .ReflectedLightReg.Brightness */ .XXp.Brightness);var variantRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .ReflectedLightReg.Variant */ .XXp.Variant);var[brightness]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(brighessRegister,props);var[sensorVariant]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(variantRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background,controlBackground}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(color);var widgetSize="clamp(3rem, 10vw, 10vh)";var maxValue=1.0;var handleDown=()=>{server.reading.setValues([brightness>0?0:1.0]);brighessRegister.refresh();};var buttonProps=(0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("line detector",server&&handleDown);var actualBrightness=(0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(brightness||0,maxValue<<2);var w=64;var h=64;var m=4;var sw=sensorVariant===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_6__/* .ReflectedLightVariant.InfraredAnalog */ .cRH.InfraredAnalog?32:16;var dx=w>>1;var x=(w-sw-dx)/2+actualBrightness/maxValue*dx;var sh=32;var dark="#000";var bright="#ddd";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{width:w,height:h,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",Object.assign({x:0,y:0,width:w>>1,height:h,fill:dark,"aria-label":"dark area"},buttonProps)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",Object.assign({x:w>>1,y:0,width:w>>1,height:h,fill:bright,"aria-label":"bright area"},buttonProps)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate("+x+", "+(h-m-sh)+")"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",Object.assign({x:0,y:0,width:sw,height:sh,fill:background},buttonProps)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:sw>>1,cy:sh/3,r:sw/2-4,fill:dark,stroke:controlBackground,strokeWidth:2,style:{userSelect:"none",pointerEvents:"none"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:sw>>1,cy:sh*2/3,r:sw/2-4,fill:bright,stroke:controlBackground,strokeWidth:2,style:{userSelect:"none",pointerEvents:"none"}})));}

/***/ })

}]);
//# sourceMappingURL=1560-9ff5324b448a1ad97f66.js.map