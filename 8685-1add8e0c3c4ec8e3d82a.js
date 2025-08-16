"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8685],{

/***/ 68685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardWindDirection; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75938);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22907);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92486);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22878);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47644);
function DashboardWindDirection(props){var{service}=props;var directionRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .WindDirectionReg.WindDirection */ .wrj.WindDirection);var[direction]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(directionRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background,controlBackground,active}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(color);var arrowHeadId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var widgetSize="clamp(3rem, 10vw, 10vh)";var a=(0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(direction,360);if(direction===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{register:directionRegister});var w=64;var h=64;var mw=5;var mh=4.5;var r=(w>>1)-4;var sw=3;var cx=w>>1;var cy=h*4/5;var cy2=h*2/5;var handleChange=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function*(ev,newValue){yield server===null||server===void 0?void 0:server.reading.setValues([newValue]);directionRegister.refresh();});return function handleChange(_x,_x2){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{container:true,direction:"column"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{width:w,height:h,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("marker",{id:arrowHeadId,markerWidth:mw,markerHeight:mh,refX:0,refY:mh/2,orient:"auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon",{fill:active,points:"0 0, "+mw+" "+mh/2+", 0 "+mh}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"rotate("+a+", "+(w>>1)+", "+(h>>1)+")"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:w>>1,cy:h>>1,r:r,fill:controlBackground,stroke:background,strokeWidth:sw}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line",{x1:cx,y1:cy,x2:cx,y2:cy2,stroke:active,strokeWidth:sw,markerEnd:"url(#"+arrowHeadId+")","aria-label":"arrow point at "+direction+"\xB0"})))),server&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{color:color,valueLabelDisplay:"auto",min:0,max:360,step:5,value:direction,onChange:handleChange})));}

/***/ })

}]);
//# sourceMappingURL=8685-1add8e0c3c4ec8e3d82a.js.map