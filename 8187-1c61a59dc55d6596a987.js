"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8187],{

/***/ 88187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ YouTubeButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11462);
/* harmony import */ var _YouTubeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98697);
var _excluded=["videoId","variant"];function YouTubeButton(props){var{videoId,variant="outlined"}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props,_excluded);var{setVideoId}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_YouTubeContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);var handleClick=()=>setVideoId(videoId);var{mobile}=(0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var label="Play Video";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx,Object.assign({variant:variant},rest,{onClick:mobile?undefined:handleClick,href:mobile?"https://youtu.be/watch?v="+videoId:undefined}),label);}

/***/ })

}]);
//# sourceMappingURL=8187-1c61a59dc55d6596a987.js.map