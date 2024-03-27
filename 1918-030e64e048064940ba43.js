"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1918],{

/***/ 51918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PassiveAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46259);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93155);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16821);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26040);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21149);
/* harmony import */ var _useInteractionMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31146);
function PassiveAlert(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();var{interactionMode,interactionTitle,interactionDescription}=(0,_useInteractionMode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var handleActive=()=>bus.interactionMode=_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_4__.BusInteractionMode.Active;var handlePassive=()=>bus.interactionMode=_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_4__.BusInteractionMode.Passive;if(interactionMode===_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_4__.BusInteractionMode.Active)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"warning",closeable:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,interactionTitle),interactionDescription,interactionMode!==_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_4__.BusInteractionMode.Passive&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{sx:{ml:1},color:"inherit",variant:"outlined",onClick:handlePassive},"Switch to Passive Mode"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{sx:{ml:1},color:"inherit",variant:"outlined",onClick:handleActive},"Switch to Active Mode"));}

/***/ })

}]);
//# sourceMappingURL=1918-030e64e048064940ba43.js.map