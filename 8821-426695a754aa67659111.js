"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8821],{

/***/ 26307:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');
exports.Z = _default;

/***/ }),

/***/ 10662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CmdButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41796);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90948);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89572);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96173);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86010);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37862);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26040);
/* harmony import */ var _widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86992);
var _excluded=["onClick","className","style","children","icon","title","disabled","disableReset","autoRun","trackName","trackProperties","ackResetDelay","color"];// tslint:disable-next-line: match-default-export-name no-submodule-imports
var PREFIX="CmdButton";var classes={ack:PREFIX+"Ack",error:PREFIX+"Error"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)("span")(_ref=>{var{theme}=_ref;return{["& ."+classes.ack]:{color:"#fff",fontWeight:theme.typography.fontWeightMedium,backgroundColor:theme.palette.success.main},["& ."+classes.error]:{color:"#fff",backgroundColor:(theme.palette.mode==="light"?_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .lighten */ .$n:_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .darken */ ._j)(theme.palette.error.main,0.6)}};});var ACK_RESET_DELAY=500;var ERROR_RESET_DELAY=2000;function CmdButton(props){var{onClick,className,style,children,icon,title,disabled,disableReset,autoRun,trackName,trackProperties,ackResetDelay,color}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(props,_excluded);var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();var{setError:setAppError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var{0:working,1:setWorking}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:ack,1:setAck}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var mounted=(0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var _disabled=disabled||working;var run=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(){if(working)return;// already working
if(trackName)trackEvent("cmd."+trackName,trackProperties);try{setError(undefined);setAck(false);setWorking(true);yield onClick(mounted);if(!mounted())return;setAck(true);if(!disableReset){yield bus.delay(ackResetDelay||ACK_RESET_DELAY);if(!mounted())return;setAck(false);}}catch(e){if(!mounted())return;setAppError(e);setError(e);if(!disableReset){yield bus.delay(ERROR_RESET_DELAY);if(!mounted())return;setError(undefined);}}finally{if(mounted())setWorking(false);}});return function run(){return _ref2.apply(this,arguments);};}();var handleClick=/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(ev){ev.stopPropagation();ev.preventDefault();run();});return function handleClick(_x){return _ref3.apply(this,arguments);};}();var statusIcon=error?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null):undefined;var modeClassName=error?classes.error:ack?classes.ack:undefined;var elClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(className,modeClassName);// run once
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(autoRun&&mounted())run();},[autoRun]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Root,null,!children&&icon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({className:elClassName,style:style,onClick:handleClick,"aria-label":title,title:title,disabled:_disabled,color:color},others),statusIcon||icon):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{title:title,placement:"bottom"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx,Object.assign({className:elClassName,style:style,startIcon:icon,endIcon:statusIcon,onClick:handleClick,"aria-label":title,title:"",disabled:_disabled,color:color},others),children)));}

/***/ }),

/***/ 8821:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCODALMessageBus; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94659);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26307);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10662);
function DashboardCODALMessageBus(props){var{service}=props;var sourceId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var valueId=sourceId+"value";var{0:source,1:setSource}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var nsource=parseInt(source);var nvalue=parseInt(value);var disabled=isNaN(nsource)||isNaN(nvalue);var handleSourceChange=ev=>setSource(ev.target.value.trim());var handleValueChange=ev=>setValue(ev.target.value.trim());var handleSend=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(function*(){return yield service.sendCmdPackedAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .CodalMessageBusCmd.Send */ .QxS.Send,[nsource,nvalue],true);});return function handleSend(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true,xs:12,md:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{type:"number",id:sourceId,label:"Source",value:source,onChange:handleSourceChange,error:!!source&&isNaN(nsource),helperText:isNaN(nsource)?"source must be an unsigned number":"source of the message"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true,xs:12,md:5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{type:"number",id:valueId,label:"Value",value:value,onChange:handleValueChange,error:!!value&&isNaN(nvalue),helperText:isNaN(nvalue)?"value must be an unsigned number":"value of the message"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"send message",disabled:disabled,onClick:handleSend},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null))));}

/***/ }),

/***/ 96173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useMounted(){var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);return()=>mounted.current;}

/***/ })

}]);
//# sourceMappingURL=8821-426695a754aa67659111.js.map