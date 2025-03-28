"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1583],{

/***/ 6812:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75938);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2874);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47644);
var HORIZON=16;function DashboardButton(props){var{service}=props;var svgRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);var positionRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .PlanarPositionReg.Position */ .VI7.Position);var[x,y]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(positionRegister,props);var{0:points,1:setPoints}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{controlBackground,active,textProps}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(color);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setPoints([]),[positionRegister]);// clear points on new register
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setPoints(pts=>x===undefined?[]:[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(pts),[[x,y]]).slice(-HORIZON)),[x,y]);// append new points
var n=points.length;var[xn,yn]=points[n-1]||[0,0];var min=points.reduce((prev,curr)=>[Math.min(prev[0],curr[0]),Math.min(prev[1],curr[1])],[0,0]);var max=points.reduce((prev,curr)=>[Math.min(prev[0],curr[0]),Math.min(prev[1],curr[1])],[0,0]);var width=Math.max(64,max[0]-min[0]);var handlePointerMove=ev=>{var svg=svgRef.current;var pt=svg.createSVGPoint();pt.x=ev.clientX;pt.y=ev.clientY;var svgP=pt.matrixTransform(svg.getScreenCTM().inverse());var[cx,cy]=server.reading.values();server.move(svgP.x-cx+(width>>1),svgP.y-cy+(width>>1));};if(x===undefined||y===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:positionRegister});var tvalue=Math.round(x)+"mm, "+Math.round(y)+"mm";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{svgRef:svgRef,width:width,height:width,size:"12rem"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{fill:controlBackground,rx:2,x:0,y:0,width:width,height:width,onPointerMove:server?handlePointerMove:undefined,style:{cursor:server?"pointer":undefined}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate("+(-width>>1)+", "+(-width>>1)+")"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:""+points.map((p,i)=>(i?"L":"M")+" "+p[0]+" "+p[1]).join(" "),stroke:active,strokeWidth:"2",fill:"none"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:xn,cy:yn,r:"4",fill:active})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({x:width>>1,y:width>>1},textProps,{"aria-label":tvalue,fontSize:"0.4rem"}),tvalue));}

/***/ })

}]);
//# sourceMappingURL=1583-9311a8b53cb897468709.js.map