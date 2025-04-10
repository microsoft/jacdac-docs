"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6760],{

/***/ 36760:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardMatrixKeypad; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98816);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75938);
/* harmony import */ var _hooks_useFireKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38846);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82312);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47644);
function DashboardMatrixKeypad(props){var{service,services,variant}=props;var widgetRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var pressedRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Pressed */ .f6T.Pressed);var labelsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Labels */ .f6T.Labels);var rowsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Rows */ .f6T.Rows);var columnsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Columns */ .f6T.Columns);var[pressed]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(pressedRegister,props);var[labels]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(labelsRegister,props);var[rows]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister,props);var[columns]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var{background,controlBackground,active,textProps}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(color);var widgetSize=(0,_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(variant,services===null||services===void 0?void 0:services.length);// no data about layout
if(rows===undefined||columns===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:rows===undefined?rowsRegister:columnsRegister});var clickeable=!!server;// compute size
var pw=8;var ph=8;var ps=0.5;var pr=1;var m=2;var w=columns*pw+(columns+1)*m;var h=rows*ph+(rows+1)*m;var handleButtonUp=index=>()=>{server.up(index);pressedRegister.refresh();};var handleButtonDown=index=>()=>{server.down(index);pressedRegister.refresh();};// add leds
var render=()=>{var ledEls=[];var ledProps={className:clickeable?"clickeable":undefined,role:clickeable?"button":"",tabIndex:clickeable?0:undefined};var y=m;for(var row=0;row<rows;row++){var x=m;var _loop=function _loop(col){var _labels$index;var index=row*columns+col;var on=(pressed===null||pressed===void 0?void 0:pressed.findIndex(p=>p[0]===index))>-1;var label=labels===null||labels===void 0?void 0:(_labels$index=labels[index])===null||_labels$index===void 0?void 0:_labels$index[0];var handleUp=clickeable?handleButtonUp(index):undefined;var handleDown=clickeable?handleButtonDown(index):undefined;var fireUp=(0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(handleUp);var fireDown=(0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(handleDown);ledEls.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",Object.assign({key:"l"+row+"-"+col,x:x,y:y,width:pw,height:ph,rx:pr,ry:pr,fill:on?active:controlBackground,stroke:"none",strokeWidth:ps},ledProps,{"aria-label":label||"key "+row+","+col,onKeyDown:fireDown,onKeyUp:fireUp,onPointerDown:handleDown,onPointerUp:handleUp})));if(label){ledEls.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({key:"t"+row+"-"+col,fontSize:ph*2/3},textProps,{x:x+pw/2,y:y+ph/2}),label));}x+=pw+m;};for(var col=0;col<columns;col++){_loop(col);}y+=ph+m;}return{ledEls};};var{ledEls}=render();var navProps=(0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(widgetRef.current);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{width:w,height:h,size:widgetSize},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,width:w,height:h,rx:pr,ry:pr,fill:background}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",Object.assign({ref:widgetRef},navProps),ledEls));}

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
//# sourceMappingURL=6760-06d714ac8fe199b79867.js.map