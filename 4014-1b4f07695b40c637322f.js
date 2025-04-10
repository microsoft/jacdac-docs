"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4014],{

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

/***/ 94014:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ReactCodeButton; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/ui/CodeSandboxButton.tsx
var CodeSandboxButton = __webpack_require__(91842);
// EXTERNAL MODULE: ./jacdac-ts/package.json
var jacdac_ts_package = __webpack_require__(73354);
;// CONCATENATED MODULE: ./react-jacdac/package.json
var react_jacdac_package_namespaceObject = {"i8":"1.1.13"};
;// CONCATENATED MODULE: ./src/components/ui/ReactCodeButton.tsx
var AppTsx="import * as React from \"react\";\nimport { JacdacProvider } from \"react-jacdac\";\nimport { bus } from \"./bus\";\nimport Connect from \"./Connect\";\nimport Demo from \"./Demo\";\n\nexport default function App() {\n  return (\n    // wrap your application with the jacdac provider\n    <JacdacProvider initialBus={bus}>\n      <Connect />\n      <Demo />\n    </JacdacProvider>\n  );\n}\n";var ConnectTsx="import * as React from \"react\";\nimport { injectDevTools } from \"jacdac-ts\";\nimport { useBus, useChange } from \"react-jacdac\";\n\n/**\n * A barebone connect button for Jacdac. Rewrite to your taste.\n */\nexport default function Connect() {\n  // fetch the bus from the jacdac context\n  const bus = useBus();\n  // fetch the connect state, useChange will trigger a re-render when connected changes\n  const connected = useChange(bus, (_) => _.connected);\n  // connect or disconnect in a handler\n  const handleConnect = () => (connected ? bus.disconnect() : bus.connect());\n  // inject dev tools window\n  const handleDevTools = () => injectDevTools(bus)\n\n  return (\n    <div>\n        <button onClick={handleConnect}>\n            jacdac {connected ? \"disconnect\" : \"connect\"}\n        </button>\n        <button onClick={handleDevTools} className=\"button-clear\">dev tools</button>\n    </div>\n  );\n}\n";var indexTsx="import * as React from \"react\";\nimport { createRoot } from \"react-dom/client\";\nimport \"milligram\";\n\nimport App from \"./App\";\n\nconst container = document.getElementById(\"root\");\nconst root = createRoot(container!);\nroot.render(<App />);\n";var busTs="import { createWebBus } from \"jacdac-ts\";\n\n/**\n * The Jacdac bus singleton.\n *\n * Declare this instance in a separate file from your components, to avoid\n * reloading the bus in the development hot-reload cycles.\n */\nexport const bus = createWebBus();\n";function ReactCodeButton(props){var{title,source}=props;var{tsx=""}=source;var files=(0,react.useCallback)(()=>{var DemoTsx=tsx;var indexHtml="\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        \n        <head>\n            <meta charset=\"utf-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n            <meta name=\"theme-color\" content=\"#000000\">\n        </head>\n        <body>\n            <noscript>\n                You need to enable JavaScript to run this app.\n            </noscript>\n            <div id=\"root\"></div>\n            <footer>\n            <small>\n            Need to learn more about Jacdac?\n            <a target=\"_blank\" href=\"https://aka.ms/jacdac\">Read the docs</a>\n            or\n            <a\n                target=\"_blank\"\n                href=\"https://github.com/microsoft/jacdac/discussions\"\n                >start a discussion</a\n            >.\n            </small>\n        </footer>\n    \n        </body>        \n        </html>  \n        ";return{"package.json":{content:{name:"react-jacdac-starter",version:"1.0.0",description:"React, Jacdac and TypeScript start",keywords:["typescript","react","starter","jacdac"],main:"src/index.tsx",dependencies:{milligram:"1.4.1",react:"18.1.0","react-dom":"18.1.0","react-scripts":"5.0.1","jacdac-ts":"^"+jacdac_ts_package/* version */.i8,"react-jacdac":"^"+react_jacdac_package_namespaceObject.i8},devDependencies:{"@types/react":"^18.0.12","@types/react-dom":"^18.0.5",typescript:"^4.7.3"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},"src/bus.ts":{content:busTs},"src/App.tsx":{content:AppTsx},"src/Connect.tsx":{content:ConnectTsx},"src/Demo.tsx":{content:DemoTsx},"src/index.tsx":{content:indexTsx},"public/index.html":{content:indexHtml}};},[title,source,tsx]);return/*#__PURE__*/react.createElement(CodeSandboxButton/* default */.Z,{files:files,startFile:"src/Demo.tsx"});}

/***/ })

}]);
//# sourceMappingURL=4014-1b4f07695b40c637322f.js.map