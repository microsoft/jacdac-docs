"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5913],{

/***/ 96540:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');
exports.Z = _default;

/***/ }),

/***/ 94895:
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
  d: "M19 13H5v-2h14v2z"
}), 'Remove');
exports.Z = _default;

/***/ }),

/***/ 83335:
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
  d: "M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"
}), 'RotateLeft');
exports.Z = _default;

/***/ }),

/***/ 10940:
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
  d: "M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"
}), 'RotateRight');
exports.Z = _default;

/***/ }),

/***/ 95913:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLEDStrip; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15785);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33797);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94659);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95247);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70970);
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94895);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96540);
/* harmony import */ var _mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70655);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75938);
/* harmony import */ var _jacdac_ts_src_servers_ledstripserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94317);
/* harmony import */ var _widgets_LightWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87225);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3964);
/* harmony import */ var _widgets_ColorButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27362);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19811);
/* harmony import */ var _mui_icons_material_RotateLeft__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(83335);
/* harmony import */ var _mui_icons_material_RotateRight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10940);
/* harmony import */ var _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42758);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(22878);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94229);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48831);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var ColorInput=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 9900).then(__webpack_require__.bind(__webpack_require__, 69900)));/*
0xD6: range P=0 N=length W=1 S=0- range from pixel P, Npixels long (currently unsupported: every Wpixels skip Spixels)
*/var lightCommands=[{name:"setall",args:"C+",description:"set all pixels in current range to given color pattern"},{name:"fade",args:"C+",description:"set pixels in current range to colors between colors in sequence"},{name:"rotfwd",args:"K",description:"rotate (shift) pixels away from the connector",valueDescription:"pixel positions to rotate"},{name:"rotback",args:"K",description:"rotate (shift) pixels towards the connector",valueDescription:"pixel positions to rotate"}];function LightCommand(props){var{service}=props;var{0:sending,1:setSending}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{0:command,1:setCommand}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lightCommands[1]);var{0:offset,1:setOffset}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("1");var{0:duration,1:setDuration}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("100");var{0:colors,1:setColors}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["#0000ff","#ff0000"]);var{0:mode,1:setMode}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var{name,args,description,valueDescription}=command;var dcolors=args=="PC"?colors.slice(0,1):colors;var encoded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var sargs="";var vargs=[];switch(args){case"C+":sargs=Array(colors.length).fill("#").join(" ");vargs=colors.map(c=>parseInt(c.slice(1),16));break;case"K":{sargs="%";vargs=[parseInt(offset)];break;}case"PC":{sargs="% #";vargs=[parseInt(offset),parseInt(colors[0].slice(1),16)];break;}}if(mode)vargs.unshift(mode);if(vargs.some(v=>v===undefined||isNaN(v)))return undefined;var ms=parseInt(duration);if(isNaN(ms))ms=100;var src=[mode&&"tmpmode %",name+" "+sargs,"show %"].filter(l=>!!l).join("\n");var largs=[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(vargs),[ms]);var r=(0,_jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_1__/* .lightEncode */ ._)(src,largs);return r;},[command,colors,duration,offset,mode]);var sendCommand=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function*(){if(!encoded)return;try{setSending(true);yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripCmd.Run */ .HKZ.Run,encoded);}finally{setSending(false);}});return function sendCommand(){return _ref.apply(this,arguments);};}();var handleCommandChange=ev=>{var newName=ev.target.value;setCommand(lightCommands.find(cmd=>cmd.name===newName));};var handleOffsetChange=ev=>{setOffset(ev.target.value);};var handleModeChange=ev=>{var v=parseInt(ev.target.value);if(!isNaN(v))setMode(v);};var handleDurationChange=ev=>{setDuration(ev.target.value);};var handleColorChange=index=>/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function*(color){var cs=colors.slice(0);cs[index]=color;setColors(cs);});return function(_x){return _ref2.apply(this,arguments);};}();var handleRemoveColor=()=>{var cs=colors.slice(0);cs.pop();setColors(cs);};var handleAddColor=()=>{var cs=colors.slice(0);cs.push("#ff0000");setColors(cs);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"descr",xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{variant:"caption"},description)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"select",xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{disabled:sending,fullWidth:true,label:"command",value:name,onChange:handleCommandChange},lightCommands.map(cmd=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{key:cmd.name,value:cmd.name},cmd.name)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"time",xs:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,{variant:"outlined",label:"duration (milliseconds)",type:"number",value:duration,onChange:handleDurationChange})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"mode",xs:6},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{fullWidth:true,label:"update mode",value:mode+"",onChange:handleModeChange},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{value:0},"replace"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{value:1},"add"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{value:2},"substract"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{value:3},"multiply"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row",alignItems:"center",alignContent:"flex-start",justifyContent:"flex-start"},(args==="K"||args==="PC")&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"K"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,{variant:"outlined",type:"number",helperText:valueDescription,value:offset,onChange:handleOffsetChange})),(args==="C+"||args==="PC")&&dcolors.map((c,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,xs:true,key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorInput,{value:c,onChange:handleColorChange(i)})))),args==="C+"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,xs:true,key:"minuscolor"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{disabled:colors.length<2,title:"Remove color",onClick:handleRemoveColor},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{disabled:colors.length>4,title:"Add color",onClick:handleAddColor},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,xs:true,key:"run"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{disabled:!encoded,title:"Run command",onClick:sendCommand},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PlayArrow__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,null))))));}var MAX_ROT=6;function EffectButtons(props){var{setEffect,configure,toggleConfigure,addGradientColor}=props;var{0:rot,1:setRot}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var handleRotChanged=()=>setRot(value=>value<0?2:value>=MAX_ROT?0:value+1);var handleCounterRotChanged=()=>setRot(value=>value>0?-2:value<=-MAX_ROT?0:value-1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var effect=[];if(rot)effect.push((rot>0?"rotfwd":"rotback")+" "+Math.abs(rot));setEffect(effect.join("\n"));},[rot]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{selected:rot<0,title:rot<0?"rotate counter clockwise, "+rot+" per frame":"rotate counter clockwise",onClick:handleCounterRotChanged},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RotateLeft__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{selected:rot>0,title:rot>0?"rotate clockwise, "+rot+" per frame":"rotate clockwise",onClick:handleRotChanged},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RotateRight__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"Add gradient color",onClick:addGradientColor},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:configure?"Hide configuration":"Show configuration",onClick:toggleConfigure},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,null))));}var configureRegisters=[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.Brightness */ .bvw.Brightness,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.ActualBrightness */ .bvw.ActualBrightness,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.NumPixels */ .bvw.NumPixels,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.MaxPixels */ .bvw.MaxPixels,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.LightType */ .bvw.LightType,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.MaxPower */ .bvw.MaxPower];function RegisterInputItem(props){var{service,registerCode,visible}=props;var register=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z)(service,registerCode);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{register:register,visible:visible,showRegisterName:true});}function DashboardLEDStrip(props){var{service,services,expanded,visible,controlled}=props;var{0:configure,1:setConfigure}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var animationCounter=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);var{0:penColor,1:setPenColor}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:gradientColors,1:setGradientColors}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);var{0:effect,1:setEffect}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var canLedClick=!isNaN(penColor)&&expanded&&!controlled;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service,()=>new _jacdac_ts_src_servers_ledstripserver__WEBPACK_IMPORTED_MODULE_5__/* .LedStripServer */ .t({variant:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripVariant.Strip */ .t1x.Strip}));var handleColorChange=newColor=>setPenColor(current=>newColor===current?undefined:newColor);var handleGradientColorChange=index=>newColor=>setGradientColors(current=>newColor===current[index]?[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(current.slice(0,index)),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(current.slice(index+1))):[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(current.slice(0,index)),[newColor],(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(current.slice(index+1))));var handleLedClick=/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(function*(index){var encoded=(0,_jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_1__/* .lightEncode */ ._)("setone % #\nshow 20",[index,penColor]);yield service===null||service===void 0?void 0:service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripCmd.Run */ .HKZ.Run,encoded);});return function handleLedClick(_x2){return _ref3.apply(this,arguments);};}();var toggleConfigure=()=>setConfigure(c=>!c);var handleAddGradientColor=()=>setGradientColors(current=>[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(current),[_widgets_ColorButtons__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_COLORS[0].value */ .Q[0].value]));// rotation animation
var animationSkip=1;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>effect?_jacdac_providerbus__WEBPACK_IMPORTED_MODULE_10__/* ["default"].subscribe */ .Z.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .REFRESH */ .RGM,()=>{var a=animationCounter.current=animationCounter.current+1;if(a%animationSkip===0){var command=[];var args=[];if(!isNaN(penColor)&&!gradientColors.length){command.push("setone 0 #");args.push(penColor);}command.push(effect);command.push("show 0");var encoded=(0,_jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_1__/* .lightEncode */ ._)(command.join("\n"),args);service===null||service===void 0?void 0:service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripCmd.Run */ .HKZ.Run,encoded);}}):undefined,[service,effect,penColor]);// set gradient
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(gradientColors.length){var command=["fade "+Array(gradientColors.length+1).fill(0).map(()=>"#").join(" "),"show 0"];var args=[penColor].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(gradientColors)).map(c=>c||0);var encoded=(0,_jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_1__/* .lightEncode */ ._)(command.join("\n"),args);service===null||service===void 0?void 0:service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripCmd.Run */ .HKZ.Run,encoded);}},[service,penColor,gradientColors]);var colors=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>server===null||server===void 0?void 0:server.colors,[server]);var registers=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({numPixels:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.NumPixels */ .bvw.NumPixels,variant:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.Variant */ .bvw.Variant,actualBrightness:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.ActualBrightness */ .bvw.ActualBrightness,numColumns:_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .LedStripReg.NumColumns */ .bvw.NumColumns}),[]);var subscribeColors=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(handler=>server===null||server===void 0?void 0:server.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .RENDER */ .kq7,handler),[server]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,server&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_LightWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,Object.assign({colors:colors,subscribeColors:subscribeColors,registers:registers,widgetCount:services===null||services===void 0?void 0:services.length,onLedClick:canLedClick?handleLedClick:undefined},props)),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{container:true,direction:"column",spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EffectButtons,{setEffect:setEffect,configure:configure,toggleConfigure:toggleConfigure,addGradientColor:handleAddGradientColor})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_ColorButtons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{color:penColor,onColorChange:handleColorChange})),gradientColors.map((gradientColor,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:"gradient"+index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_ColorButtons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{color:gradientColor,onColorChange:handleGradientColorChange(index)}))),configure&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightCommand,{service:service,expanded:expanded})),configure&&configureRegisters.map(code=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP,{item:true,key:code},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RegisterInputItem,{service:service,registerCode:code,visible:visible})))));}

/***/ }),

/***/ 70970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76446);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56036);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33797);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function SelectWithLabel(props){var{sx,label,fullWidth,required,disabled,value,error,placeholder,onChange,onClose,children,helperText,type,none,size}=props;var id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var labelId=id+"-label";var descrId=id+"-descr";var hasDescr=!!helperText||!!error;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{fullWidth:fullWidth,variant:"outlined"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,key:"label"},required?label+" *":label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:id,sx:sx,disabled:disabled,label:label,value:value,error:!!error,fullWidth:true,placeholder:placeholder,type:type,labelId:labelId,"aria-describedby":hasDescr?descrId:undefined,onChange:onChange,onClose:onClose,size:size},none!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{key:"none",value:""},none),children),hasDescr&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{id:descrId},error||helperText));}

/***/ })

}]);
//# sourceMappingURL=5913-95258463640b71d9a0fc.js.map