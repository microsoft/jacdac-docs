"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8827],{

/***/ 28827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardColor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75938);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2976);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22878);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19811);
var ColorInput=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 9900).then(__webpack_require__.bind(__webpack_require__, 69900)));function DashboardColor(props){var{service}=props;var register=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ColorReg.Color */ .GOL.Color);var[r,g,b]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(color);if(r===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null);var value="rgb("+(r*0xff|0)+", "+(g*0xff|0)+", "+(b*0xff|0)+")";var handleChange=color=>{var hex=color.replace(/^#/,"");var rgb=parseInt(hex,16);var r=rgb>>16&0xff;var g=rgb>>8&0xff;var b=(rgb|0)&0xff;server.reading.setValues([r/0xff,g/0xff,b/0xff]);register.refresh();};var w=64;var rx=4;if(server)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorInput,{value:value,onChange:handleChange}));else return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{width:w,height:w},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,width:w,height:w,rx:rx,ry:rx,fill:value,stroke:background,strokeWidth:2,tabIndex:0,"aria-label":"color "+value+" detected"}));}

/***/ })

}]);
//# sourceMappingURL=8827-ff96f005bb243a194a2d.js.map