"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3656],{

/***/ 53656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashbaordWaterLevel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75938);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9680);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92486);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22878);
function DashbaordWaterLevel(props){var{service,services,variant}=props;var levelRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .WaterLevelReg.Level */ .sdM.Level);var[value]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_5__/* .useRegisterUnpackedValue */ .Pf)(levelRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background,controlBackground,active,textProps}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(color);var hasValue=!isNaN(value);var widgetSize=(0,_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(variant,services===null||services===void 0?void 0:services.length);var tvalue=hasValue?Math.round(value*100)+"%":"--";var mx=5;var wx=6;var n=8;var w=(wx+mx)*n+2*mx;var mty=42;var mby=mx;var hy=w*2;var h=hy+mty+mby;var r=1;var onChange=(event,newValue)=>{var svalue=newValue;server===null||server===void 0?void 0:server.reading.setValues([svalue]);levelRegister.refresh();};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{width:w,height:h,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{fill:background,x:0,y:0,width:w,height:h,r:r}),Array(n).fill(0).map((_,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{key:"back"+i,stroke:controlBackground,d:"M "+(2*mx+i*(wx+mx))+" "+(h-mby)+" v "+-hy,strokeWidth:wx,strokeLinecap:i%2===0?"round":"square"})),hasValue&&Array(n).fill(0).map((_,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{key:"water"+i,stroke:active,d:"M "+(2*mx+i*(wx+mx))+" "+(h-mby-2)+" v "+-hy*value,strokeWidth:wx+2,strokeLinecap:"square"})),tvalue&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({key:"text",x:w>>1,y:mty>>1},textProps,{fill:"#fff"}),tvalue))),server&&hasValue&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{valueLabelDisplay:"off",min:0,max:1,step:0.05,value:value,onChange:onChange,color:color})));}

/***/ })

}]);
//# sourceMappingURL=3656-a387458ef408783f2b3e.js.map