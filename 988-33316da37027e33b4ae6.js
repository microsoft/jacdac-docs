"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[988],{

/***/ 10988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardTrafficLight; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75938);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56212);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82312);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
var m=2;var r=8;var ri=7;var w=2*r+2*m;var h=4*w+2*m;var cx=w/2;var sw=2;function TrafficLight(props){var{cx,cy,fill,background,label,onDown}=props;var buttonProps=(0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(label,onDown);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:cx,cy:cy,r:r,fill:background,stroke:"none"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",Object.assign({cx:cx,cy:cy,r:ri,fill:fill,strokeWidth:sw},buttonProps)));}function DashboardTrafficLight(props){var{service,services,variant}=props;var widgetRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var redRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Red */ .r6v.Red);var yellowRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Yellow */ .r6v.Yellow);var greenRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Green */ .r6v.Green);var red=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(redRegister,props);var yellow=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(yellowRegister,props);var green=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(greenRegister,props);var lightRegs=[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Red */ .r6v.Red,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Yellow */ .r6v.Yellow,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .TrafficLightReg.Green */ .r6v.Green];var lights=[red,yellow,green];var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background,controlBackground}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(color);var widgetSize=(0,_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(variant,services===null||services===void 0?void 0:services.length);var cy=0;var names=["red","yellow","green"];var colors=["red","orange","green"];var navProps=(0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(widgetRef.current);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{width:w,height:h,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",Object.assign({ref:widgetRef},navProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,width:w,height:h,rx:m,fill:background}),lights.map((v,i)=>{cy+=m+2*r;var fill=v?colors[i]:controlBackground;var onDown=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(){var reg=service.register(lightRegs[i]);yield reg.sendSetBoolAsync(!v,true);});return function onDown(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TrafficLight,{key:i,cx:cx,cy:cy,background:background,fill:fill,onDown:onDown,label:names[i]+" "+(v?"on":"off")});})));}

/***/ }),

/***/ 82312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(38846);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts
var PAGE_DOWN=34;var PAGE_UP=33;var HOME=36;var END=35;var LEFT_KEY=37;var UP_KEY=38;var RIGHT_KEY=39;var DOWN_KEY=40;function useArrowKeys(options){var{onLeft,onUp,onRight,onDown,symmetric}=options;if(!onLeft&&!onUp&&!onRight&&!onDown)return undefined;var handlers={[LEFT_KEY]:onLeft,[RIGHT_KEY]:onRight,[UP_KEY]:onUp||symmetric&&onRight,[DOWN_KEY]:onDown||symmetric&&onLeft};return e=>{var charCode=(0,useFireKey/* keyCodeFromEvent */.$)(e);var handler=handlers[charCode];if(handler){e.preventDefault();handler();}};}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef,wrap){if(wrap===void 0){wrap=false;}var query='[tabindex="0"]';var onMove=offset=>()=>{var focusable=Array.from((parentRef===null||parentRef===void 0?void 0:parentRef.querySelectorAll(query))||[]);if(focusable.length){var me=focusable.findIndex(f=>f===document.activeElement);// don't wrap
if(!wrap&&(me===0&&offset<0||me===focusable.length-1&&offset>0))return;var next=(me+offset+focusable.length)%focusable.length;focusable[next].focus();}};return onMove;}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts
function useKeyboardNavigationProps(parentRef,vertical){var onMove=useKeyboardNavigation(parentRef);var onKeyDown=useArrowKeys({onLeft:!vertical&&onMove(-1),onRight:!vertical&&onMove(1),onDown:vertical&&onMove(1),onUp:vertical&&onMove(-1)});return{onKeyDown:parentRef&&onKeyDown};}

/***/ })

}]);
//# sourceMappingURL=988-33316da37027e33b4ae6.js.map