"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1022],{

/***/ 71022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LazyDeviceImage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11352);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36141);
function LazyDeviceImage(props){var{device}=props;var specification=(0,_jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(device);var imageUrl=(0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(specification,"lazy");var largeImageUrl=(0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(specification,"catalog");var{0:showLarge,1:setShowLarge}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);if(!imageUrl)return null;var handleLargeLoaded=()=>setShowLarge(true);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:"photograph of the device",style:{width:"100%",display:showLarge?undefined:"none"},src:largeImageUrl,onLoad:handleLargeLoaded}),!showLarge&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:"large photograph of the device",style:{minHeight:"18rem",width:"100%",filter:"blur"},src:imageUrl}));}

/***/ })

}]);
//# sourceMappingURL=1022-47b3cba66698599bff16.js.map