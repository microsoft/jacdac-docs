"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[815],{

/***/ 77957:
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');
exports.Z = _default;

/***/ }),

/***/ 70815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardLEDSingle; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2976);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(71670);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/ui/SliderWithLabel.tsx
var SliderWithLabel = __webpack_require__(32849);
// EXTERNAL MODULE: ./src/components/widgets/ColorButtons.tsx
var ColorButtons = __webpack_require__(27362);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(77957);
;// CONCATENATED MODULE: ./src/components/widgets/LEDWidget.tsx
function LEDWidgetController(props){var{ledColor,onLedColorChange,speed=32,onSpeedChange,brightness=16,onBrightnessChange}=props;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleSpeedChange=(event,newSpeed)=>onSpeedChange(newSpeed);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleBrightnessChange=(event,newValue)=>onBrightnessChange(newValue);var percentValueFormat=newValue=>(newValue/0xff*100|0)+"%";return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignItems:"center",alignContent:"center"},onLedColorChange&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(ColorButtons/* default */.Z,{color:ledColor,onColorChange:onLedColorChange})),onSpeedChange&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(SliderWithLabel/* default */.Z,{label:"speed",min:0,step:5,max:255,value:speed,valueLabelDisplay:"auto",valueLabelFormat:percentValueFormat,onChange:handleSpeedChange})),onBrightnessChange&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(SliderWithLabel/* default */.Z,{label:"brightness",min:0,step:5,max:255,value:brightness,valueLabelDisplay:"auto",valueLabelFormat:percentValueFormat,onChange:handleBrightnessChange})));}function LEDWidgetBulb(props){var{color,ledCount,ledColor,edit,onEdit}=props;var r=ledColor>>16&0xff;var g=ledColor>>8&0xff;var b=ledColor>>0&0xff;var{active}=(0,useWidgetTheme/* default */.Z)(color);var opacity=!r&&!b&&!g?0:1;var fill="rgb("+r+", "+g+", "+b+")";var ln=Math.min(ledCount||1,5);var lw=15.5;var m=1;var w=(lw+m)*ln;var h=42;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h,size:"5em"},Array(ln).fill(0).map((_,i)=>/*#__PURE__*/react.createElement("g",{key:i,transform:"translate("+i*(lw+m)+", 0)"},/*#__PURE__*/react.createElement("path",{fill:"#999",d:"M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z",opacity:".65"}),/*#__PURE__*/react.createElement("path",{fill:active,d:"M2.8 17.5l-1.2-1.4h1L5 17.5v18.6c0 .3-.5.5-1.1.5-.6 0-1.1-.2-1.1-.5zm10.1 6.7c0-.7-1.1-1.3-2.1-1.8-.4-.2-1.2-.6-1.2-.9v-3.4l2.5-2h-.9l-3.7 2v3.5c0 .7.9 1.2 1.9 1.7.4.2 1.3.8 1.3 1.1v16.9c0 .4.5.7 1.1.7.6 0 1.1-.3 1.1-.7z",stroke:"#8c8c8c",strokeWidth:"1px"}),/*#__PURE__*/react.createElement("path",{opacity:opacity,fill:fill,d:"M14.2 13V7.1C14.2 3.2 11 0 7.1 0 3.2 0 0 3.2 0 7.1v13.7c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.2-.5-2.3-1.3-3.2z"}),/*#__PURE__*/react.createElement("path",{fill:"#d1d1d1",d:"M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",opacity:".9"}),/*#__PURE__*/react.createElement("path",{fill:"#e6e6e6",d:"M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v4.6c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9v-1.5c0-1.1-.5-2.2-1.3-3.1z",opacity:".7"}),/*#__PURE__*/react.createElement("path",{fill:"#e6e6e6",d:"M14.2 13v3.1c0 2.7-3.2 5-7.1 5-3.9 0-7.1-2.2-7.1-5v3.1c1.9 1.9 4.4 2.9 7.1 2.8 4.6 0 8.4-2.6 8.4-5.9 0-1.1-.5-2.2-1.3-3.1z",opacity:".25"}),/*#__PURE__*/react.createElement("ellipse",{cx:"-7.2",cy:"-16.1",fill:"#e6e6e6",opacity:".25",rx:"7.1",ry:"5",transform:"scale(-1)"}),/*#__PURE__*/react.createElement("ellipse",{cx:"-7.2",cy:"-16.1",fill:"#e6e6e6",opacity:".25",rx:"7.1",ry:"5",transform:"scale(-1)"}),/*#__PURE__*/react.createElement("path",{opacity:".61",fill:"#fff",d:"M7.2 22c-4.3 0-6.1-2-6.1-2l.7-.7S3.4 21 7.2 21c2.4.1 4.7-.9 6.3-2.7l.8.6C12.4 21 9.9 22.1 7.2 22z"}),/*#__PURE__*/react.createElement("path",{opacity:".61",fill:"#fff",d:"M2.6 3.2C1.5 4.3.9 5.8.9 7.4v10.3l1.9 1.5V8.8c-.9-2.8-.3-4.2.7-5.2-.3-.1-.6-.2-.9-.4zm7.3-1.6l-.3.9c1.5.7 2.6 2.1 2.8 3.7h1c-.3-2-1.6-3.7-3.5-4.6z"}))))),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",style:{fontFamily:"monospace"}},(0,utils/* rgbToHtmlColor */.b)(ledColor))),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:!edit?"show editor":"hide editor",onClick:onEdit},/*#__PURE__*/react.createElement(Edit/* default */.Z,null))));}function LEDWidget(props){var{color,waveLength,ledCount,ledColor,onLedColorChange,speed=32,onSpeedChange,brightness=16,onBrightnessChange}=props;var{0:edit,1:setEdit}=(0,react.useState)(false);var handleEdit=()=>setEdit(e=>!e);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignItems:"center",alignContent:"center"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(LEDWidgetBulb,{color:color,ledColor:ledColor,ledCount:ledCount,edit:edit,onEdit:handleEdit})),edit&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(LEDWidgetController,{color:color,waveLength:waveLength,ledColor:ledColor,onLedColorChange:onLedColorChange,speed:speed,onSpeedChange:onSpeedChange,brightness:brightness,onBrightnessChange:onBrightnessChange})));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardLEDSingle.tsx
function DashboardLEDSingle(props){var{service}=props;var{setError}=(0,useSnackbar/* default */.Z)();var server=(0,useServiceServer/* default */.Z)(service);var themeColor=server?"secondary":"primary";var{0:speed,1:setSpeed}=(0,react.useState)(64);var{0:brightness,1:setBrightness}=(0,react.useState)(32);var colorRegister=(0,useRegister/* default */.Z)(service,constants/* LedSingleReg.Color */.yoq.Color);var[r,g,b]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(colorRegister,props);var{0:uiColor,1:setUiColor}=(0,react.useState)(r<<16|g<<8|b);var{0:uiSpeed,1:setUiSpeed}=(0,react.useState)(speed);var waveLengthRegister=(0,useRegister/* default */.Z)(service,constants/* LedSingleReg.WaveLength */.yoq.WaveLength);var[waveLength]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(waveLengthRegister,props);var ledCountRegister=(0,useRegister/* default */.Z)(service,constants/* LedSingleReg.LedCount */.yoq.LedCount);var[ledCount]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(ledCountRegister,props);var setRgb=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(rgb){var r=(rgb>>16&0xff)*brightness>>8&0xff;var g=(rgb>>8&0xff)*brightness>>8&0xff;var b=(rgb>>0&0xff)*brightness>>8&0xff;try{yield service.sendCmdAsync(constants/* LedSingleCmd.Animate */.X_Q.Animate,(0,pack/* jdpack */.AV)("u8 u8 u8 u8",[r,g,b,speed]));setUiColor(r<<16|g<<8|b);setUiSpeed(speed);}catch(e){setError(e);}});return function setRgb(_x){return _ref.apply(this,arguments);};}();// sniff animate call
(0,react.useEffect)(()=>service===null||service===void 0?void 0:service.subscribe(constants/* COMMAND_RECEIVE */.R76,pkt=>{if(pkt.serviceCommand===constants/* LedSingleCmd.Animate */.X_Q.Animate){var[_r,_g,_b,s]=pkt.jdunpack("u8 u8 u8 u8");setUiColor(_r<<16|_g<<8|_b);setUiSpeed(s);}}),[service]);// sync color
(0,react.useEffect)(()=>setUiColor(r<<16|g<<8|b),[r,g,b]);// nothing to see
if(isNaN(uiColor))return/*#__PURE__*/react.createElement(LoadingProgress/* default */.Z,null);return/*#__PURE__*/react.createElement(LEDWidget,{color:themeColor,ledColor:uiColor,waveLength:waveLength,ledCount:ledCount,onLedColorChange:setRgb,speed:speed,onSpeedChange:setSpeed,brightness:brightness,onBrightnessChange:setBrightness});}

/***/ }),

/***/ 32849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92486);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["label"];function SliderWithLabel(props){var{label}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);var labelId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var sliderId=labelId+"sliderId";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,variant:"caption",gutterBottom:true},label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,Object.assign({id:sliderId,"aria-labelledby":labelId,"aria-label":label,valueLabelDisplay:"auto"},others)));}

/***/ })

}]);
//# sourceMappingURL=815-41a1bc08ba8a3195b676.js.map