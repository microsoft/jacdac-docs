"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9797],{

/***/ 99797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardBuzzer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71670);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75938);
/* harmony import */ var _jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38261);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19811);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52288);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16821);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26340);
/* harmony import */ var _ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99521);
/* harmony import */ var _widgets_VolumeWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73072);
var PianoWidget=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(2886)]).then(__webpack_require__.bind(__webpack_require__, 92886)));function DashboardBuzzer(props){var{service,expanded}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(service);var volumeRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BuzzerReg.Volume */ .CGK.Volume);var{playTone,onClickActivateAudioContext,activated}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_WebAudioContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP);// listen for playTone commands from the buzzer
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>server===null||server===void 0?void 0:server.subscribe(_jacdac_ts_src_servers_buzzerserver__WEBPACK_IMPORTED_MODULE_4__/* .BuzzerServer.PLAY_TONE */ .C.PLAY_TONE,_ref=>{var{frequency,duration,volume}=_ref;return playTone===null||playTone===void 0?void 0:playTone(frequency,duration,volume);}),[server]);var sendPlayTone=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(f){if(server)onClickActivateAudioContext();// enable audio context within click handler
var vol=1;var period=1000000/f;var duty=period*vol/2;var duration=400;var data=(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_2__/* .jdpack */ .AV)("u16 u16 u16",[period,duty,duration]);yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BuzzerCmd.PlayTone */ .Rv2.PlayTone,data);});return function sendPlayTone(_x){return _ref2.apply(this,arguments);};}();var handleUnlock=()=>sendPlayTone(400);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,server&&!activated&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{severity:"warning"},"Click to activate sounds. \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__/* .IconButton */ .hU,{"aria-label":"unlock sounds",onClick:handleUnlock,size:"large"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:true,"aria-hidden":true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PianoWidget,{playTone:sendPlayTone}))),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_VolumeWidget__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,Object.assign({register:volumeRegister},props))));}

/***/ })

}]);
//# sourceMappingURL=9797-5bdb84b9e909d89a5a5f.js.map