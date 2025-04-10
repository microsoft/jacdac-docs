"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[350],{

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

/***/ 91842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CodeSandboxButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77957);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11462);
/* harmony import */ var gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3146);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37862);
function CodeSandboxButton(props){var{files,startFile}=props;var{setError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var{mobile}=(0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var{0:importing,1:setImporting}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var handleClick=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){var f=files();var file=startFile||Object.keys(f).filter(fn=>/\.js$/.test(fn))[0]||"index.js";try{setImporting(true);var x=yield fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({files:f})});var data=yield x.json();var url="https://codesandbox.io/s/"+data.sandbox_id+"?file=/"+file;window.open(url,"_blank","noreferrer");}catch(error){setError(error);}finally{setImporting(false);}});return function handleClick(){return _ref.apply(this,arguments);};}();return mobile?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{color:"primary",onClick:handleClick,disabled:importing,title:"Try in CodeSandbox"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx,{color:"primary",variant:"outlined",onClick:handleClick,startIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null),disabled:importing},"Try in CodeSandbox");}

/***/ }),

/***/ 70350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VanillaCodeButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91842);
/* harmony import */ var _jacdac_ts_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73354);
function VanillaCodeButton(props){var{title,source}=props;var{js="",html=""}=source;var files=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{// find imports
var i=js.indexOf("\n\n");var imports=js.slice(0,i);var code=js.slice(i+2).trim();var indexTs="\nimport \"milligram\";\nimport { createWebBus, injectDevTools, CONNECTION_STATE, CHANGE } from \"jacdac-ts\";\n"+imports+"\n\nconst connectEl = document.getElementById(\"connectbtn\") as HTMLButtonElement;\nconst devtoolsEl = document.getElementById(\"devtoolsbtn\") as HTMLButtonElement;\nconst logEl = document.getElementById(\"log\") as HTMLPreElement;\nconst log = (msg: any) => {\n  console.log(msg);\n  logEl.innerText += msg + \"\\n\";\n};\n// create WebUSB bus\nconst bus = createWebBus();\n// track connection state and update button\nbus.on(CONNECTION_STATE, () => {\n  connectEl.innerText = bus.connected\n    ? \"connected \uD83C\uDF89\"\n    : bus.disconnected\n    ? \"connect\"\n    : \"\uD83D\uDC40\uD83D\uDC40\uD83D\uDC40\";\n});\n// connect must be triggered by a user interaction\nconnectEl.onclick = async () =>\n  bus.connected ? bus.disconnect() : bus.connect();\n// inject dev tools window\ndevtoolsEl.onclick = () => injectDevTools(bus);\n// we're ready\nlog(\"click connect to start\")\n\n"+code+"\n";var indexHtml="\n<html>\n    <body>\n        <h1>Jacdac "+(title||"demo")+"</h1>\n        <div>\n        <button id=\"connectbtn\">connect</button>\n        <button id=\"devtoolsbtn\" class=\"button-clear\">dev tools</button>\n        </div>    \n\n"+html+"\n        <pre id=\"log\"></pre>\n\n    <footer>\n        <small>\n        Need to learn more about Jacdac?\n        <a target=\"_blank\" href=\"https://aka.ms/jacdac\">Read the docs</a>\n        or\n        <a\n            target=\"_blank\"\n            href=\"https://github.com/microsoft/jacdac/discussions\"\n            >start a discussion</a\n        >.\n        </small>\n    </footer>\n    <script src=\"./index.ts\"></script>\n    </body>\n</html>    \n        ";return{"package.json":{content:{name:"vanilla-jacdac-typescript",version:"0.0.0",description:"Vanilla Jacdac + TypeScript sandbox - https://aka.ms/jacdac",main:"index.html",scripts:{start:"parcel index.html --open",build:"parcel build index.html"},dependencies:{"jacdac-ts":"^"+_jacdac_ts_package_json__WEBPACK_IMPORTED_MODULE_2__/* .version */ .i8,milligram:"^1.4.1","parcel-bundler":"^2.0.0"},devDependencies:{typescript:"^4.4.3"},resolutions:{"@babel/preset-env":"^7.15.8"},keywords:["jacdac","typescript","javascript"],browserslist:["defaults"]}},"index.ts":{content:indexTs},"index.html":{content:indexHtml}};},[title,source,js,html]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeSandboxButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{files:files});}

/***/ })

}]);
//# sourceMappingURL=350-3d5c546a55d49c129a7d.js.map