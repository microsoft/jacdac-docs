"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3816],{

/***/ 35776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GithubRepositoryList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _GithubRepositoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72975);
var _excluded=["repos"];function GithubRepositoryList(props){var{repos}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props,_excluded);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,{container:true,spacing:2},repos.map(repo=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,{item:true,xs:12,key:repo},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GithubRepositoryCard__WEBPACK_IMPORTED_MODULE_1__["default"],Object.assign({slug:repo},others)))));}

/***/ }),

/***/ 61927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Samples; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _components_github_GithubRespositoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35776);



function Samples() {
  var repos = [// merged extensions
  "1010Technologies/pxt-makerbit-motor/jacdac", "1010Technologies/pxt-makerbit-touch/jacdac", "1010Technologies/pxt-makerbit-lcd1602/jacdac", "monkmakes/monkmakes-7-segment/jacdac", "mworkfun/pxt-k-bit/jacdac", // PR in progress
  "pelikhan/pxt-kitronik-stopbit/jacdac", "pelikhan/pxt-kitronik-viewtext32/jacdac", "pelikhan/pxt-kitronik-lampbit/jacdac", "pelikhan/pxt-kitronik-simple-servo/jacdac", "pelikhan/pxt-kitronik-motor-driver/jacdac", "pelikhan/pxt-kitronik-zip-64/jacdac", "pelikhan/pxt-kitronik-accessbit/jacdac", "pelikhan/pxt-kitronik-servo-lite/jacdac", "pelikhan/pxt-kitronik-i2c-16-servo/jacdac", "pelikhan/pxt-gamer-bit/jacdac", "pelikhan/pxt-envirobit/jacdac", "pelikhan/pxt-weather-bit/jacdac", "pelikhan/pxt-robotbit/jacdac", "pelikhan/Tiny-bitLib/jacdac", // needs PR
  "pelikhan/pxt-kitronik-air-quality/jacdac", "pelikhan/kitronik-zip-halo-jacdac", "pelikhan/yahboom-microbit-led-jacdac/", "pelikhan/keystudio-relay-breakout-jacdac/", "pelikhan/pxt-dfrobot_maqueenplus_v20/jacdac"];
  var [official, samples] = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .splitFilter */ .ap)(repos, r => !/^pelikhan\//.test(r));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "MakeCode/Jacdac accessory extension samples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This page links to a number of accessory extension repositories with the software-only Jacdac layer implemented."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "These samples can be tested from MakeCode by importing the repository path into the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Add Extension"), " dialog."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Extensions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_github_GithubRespositoryList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    repos: official,
    showDescription: true,
    showDependencies: true,
    showMakeCodeButton: true,
    showMakeCodeImportButton: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Samples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_github_GithubRespositoryList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    repos: samples,
    showDescription: true,
    showDependencies: true,
    showMakeCodeButton: true,
    showMakeCodeImportButton: true
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-ddk-microbit-extension-samples-tsx-b50bfca0334642afa664.js.map