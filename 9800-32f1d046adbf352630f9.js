"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9800],{

/***/ 89800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLightBulb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75938);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2874);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3964);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92486);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98816);
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15073);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47644);
function DashboardLightBulb(props){var{service}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{controlBackground,active,textProps}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(color);var brightnessRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LightBulbReg.Brightness */ .DPc.Brightness);var[brightness]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister,props);var brightnessPercent=Math.round(brightness*100);var dimmeableRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LightBulbReg.Dimmable */ .DPc.Dimmable);var dimmeable=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterBoolValue */ .I8)(dimmeableRegister,props);if(brightness===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{register:brightnessRegister});var handleChecked=()=>brightnessRegister.sendSetPackedAsync([brightness>0?0:1],true);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleChange=(event,value)=>{var b=value/100;brightnessRegister.sendSetPackedAsync([b],true);};var w=96;var sw=2;var cx=w/2;var cy=w/2;var r=w/2-4;var ri=r*brightnessPercent/100;var roff=r/3;var riff=roff-4;var on=brightnessPercent>0;var off=!on;var tvalue=dimmeable?Math.round(brightnessPercent)+"%":on?"on":"off";var widgetSize="clamp(4rem, 12vw, 12vh)";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{tabIndex:0,width:w,height:w,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:cx,cy:cx,r:r,fill:controlBackground,strokeWidth:sw}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:cy,cy:cy,r:ri,fill:active,stroke:controlBackground,strokeWidth:sw}),dimmeable!==true?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{off:off,label:tvalue,cx:cx,cy:cy,r:roff,ri:riff,color:color,onClick:handleChecked}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({},textProps,{x:cx,y:cy,"aria-label":tvalue}),tvalue))),dimmeable===true&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{value:brightnessPercent,min:0,max:100,valueLabelDisplay:"off",onChange:handleChange})));}

/***/ })

}]);
//# sourceMappingURL=9800-32f1d046adbf352630f9.js.map