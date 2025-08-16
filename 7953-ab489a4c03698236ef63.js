"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7953,9858],{

/***/ 39858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(95318);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
}), 'PowerSettingsNew');
exports["default"] = _default;

/***/ }),

/***/ 77953:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBrailleDisplay; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94659);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22878);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10662);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63343);
/* harmony import */ var _widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50374);
/* harmony import */ var _mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39858);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47644);
// https://en.wikipedia.org/wiki/Braille_ASCII
/** 
const ascii = " A1B'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)="
const unicode = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
const a0 = " ".charCodeAt(0)
let r = ''
for (let i = 0; i < 64; ++i) {
    const c = String.fromCharCode(a0 + i)
    const j = ascii.indexOf(c)
    const u = unicode.charAt(j)
    r += u
}
console.log(r)
 */function brailify(s){if(!s)return s;// space char -> unicode character
var braille_ascii="⠀⠮⠐⠼⠫⠩⠯⠄⠷⠾⠡⠬⠠⠤⠨⠌⠴⠂⠆⠒⠲⠢⠖⠶⠦⠔⠱⠰⠣⠿⠜⠹⠈⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵⠪⠳⠻⠘⠸";var a0=" ".charCodeAt(0);var an=braille_ascii.length;var r="";var su=s.toLocaleUpperCase();for(var i=0;i<su.length;++i){var c=su.charCodeAt(i);var ai=c-a0;if(c>=0x2800&&c<=0x28ff)r+=String.fromCharCode(c);else if(ai<an)r+=braille_ascii.charAt(ai);else r+="";}return r;}function DashboardBrailleDisplay(props){var{service,expanded}=props;var textId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var patternsRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Patterns */ .Dvj.Patterns);var lengthRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Length */ .Dvj.Length);var enabledRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BrailleDisplayReg.Enabled */ .Dvj.Enabled);var[patterns]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(patternsRegister,props);var enabled=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(enabledRegister,props);var[length]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(lengthRegister,props);var{0:fieldMessage,1:setFieldMessage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(patterns);var handleFieldMessageChange=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(ev){var text=ev.target.value;var brailled=brailify(text);setFieldMessage(text);yield patternsRegister.sendSetStringAsync(brailled,true);});return function handleFieldMessageChange(_x){return _ref.apply(this,arguments);};}();var handleClear=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){setFieldMessage("");yield patternsRegister.sendSetStringAsync("",true);});return function handleClear(){return _ref2.apply(this,arguments);};}();var handleEnabled=/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){return yield enabledRegister.sendSetBoolAsync(!enabled,true);});return function handleEnabled(){return _ref3.apply(this,arguments);};}();// set first value of message
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!fieldMessage&&patterns)setFieldMessage(patterns);},[patterns]);if(length===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{register:lengthRegister});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1,alignItems:"center"},expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{id:textId,label:"text",helperText:"Unicode Braille patterns or Braille ASCII","aria-label":"text field to enter Braille unicode pattersn or Braille ASCII",value:fieldMessage,onChange:handleFieldMessageChange,multiline:false,fullWidth:true,disabled:!enabled})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:"clear the entire display",onClick:handleClear,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null)})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_CharacterScreenWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{rows:1,columns:length,message:patterns,disabled:!enabled})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{title:enabled?"disable display":"enable display",onClick:handleEnabled,color:enabled?"primary":undefined,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__["default"],null)})));}

/***/ })

}]);
//# sourceMappingURL=7953-ab489a4c03698236ef63.js.map