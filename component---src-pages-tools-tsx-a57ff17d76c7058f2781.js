"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1618],{

/***/ 73306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ tools_Head; },
  "default": function() { return /* binding */ tools; },
  "frontmatter": function() { return /* binding */ frontmatter; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-dc34ce8e.js
var index_browser_dc34ce8e = __webpack_require__(93723);
// EXTERNAL MODULE: ./src/components/home/CenterGrid.tsx
var CenterGrid = __webpack_require__(62342);
// EXTERNAL MODULE: ./src/components/home/SplitGrid.tsx
var SplitGrid = __webpack_require__(84999);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(5355);
;// CONCATENATED MODULE: ./src/components/home/Tools.tsx
function Tools(){var{setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var handleShowDeviceTree=()=>setDrawerType(AppContext/* DrawerType.Dom */.jw.Dom);var handleShowPacketConsole=()=>setDrawerType(AppContext/* DrawerType.Packets */.jw.Packets);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:10,direction:"column",alignContent:"center",alignItems:"center"},/*#__PURE__*/react.createElement(CenterGrid/* default */.Z,{title:"Web Tools",subtitle3:"Visualize, debug, sniff, track, record, replay, update... from your browser."}),/*#__PURE__*/react.createElement(SplitGrid/* default */.Z,{right:true,subtitle:"Digital Twins and Simulators.",description:"Visualize and interact with digital twins of physical devices, or simulated devices. Interact with the simulators on the left. To see more details, open the device tree.",image:/*#__PURE__*/react.createElement(index_browser_dc34ce8e.S,{src:"./dashboard.png",alt:"Dashboard",__imageData:__webpack_require__(42951)}),buttonText:"Open Device Tree",buttonVariant:"link",onButtonClick:handleShowDeviceTree}),/*#__PURE__*/react.createElement(SplitGrid/* default */.Z,{right:false,subtitle:"Packet Console",description:"Sniff the packet traffic, record and replay traces in the packet console.",image:/*#__PURE__*/react.createElement(index_browser_dc34ce8e.S,{src:"./packets.png",alt:"Packet view",__imageData:__webpack_require__(61293)}),buttonText:"Open Packet Console",buttonVariant:"link",onButtonClick:handleShowPacketConsole}),/*#__PURE__*/react.createElement(SplitGrid/* default */.Z,{right:true,subtitle:"Data collector.",description:"Record any register data into a CSV file.",buttonText:"Collect data",buttonVariant:"link",buttonUrl:"/tools/collector/",image:/*#__PURE__*/react.createElement(index_browser_dc34ce8e.S,{src:"./recordit.png",alt:"Data collector user interface",__imageData:__webpack_require__(72891)})}),/*#__PURE__*/react.createElement(SplitGrid/* default */.Z,{right:false,subtitle:"Device Tester.",description:"A compliance test suite for module development or the factory floor.",buttonText:"Test your device",buttonVariant:"link",buttonUrl:"/tools/device-tester/",image:/*#__PURE__*/react.createElement(index_browser_dc34ce8e.S,{src:"./device-tester.png",alt:"Device Tester contains a device twin of a device and a tree of unit tests",__imageData:__webpack_require__(53616)})}),/*#__PURE__*/react.createElement(CenterGrid/* default */.Z,{subtitle2:"Can I build my own tools?",description:"Absolutely! You can use the JavaScript package to build your own Jacdac tooling.",buttonText:"Integrate Jacdac into your web app",buttonVariant:"link",buttonUrl:"/clients/javascript/"}),/*#__PURE__*/react.createElement(CenterGrid/* default */.Z,{subtitle2:"More web tools",buttonText:"Read more",buttonVariant:"link",buttonUrl:"/tools/more"}));}
;// CONCATENATED MODULE: ./src/pages/tools.tsx

var frontmatter = {
  title: "Web Tools",
  hideBreadcrumbs: true
};

var tools_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, Object.assign({}, props, frontmatter));

/* harmony default export */ var tools = (Tools);

/***/ }),

/***/ 42951:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/36674/dashboard.png","srcSet":"/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/49fac/dashboard.png 149w,\\n/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/7795f/dashboard.png 297w,\\n/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/36674/dashboard.png 594w","sizes":"(min-width: 594px) 594px, 100vw"},"sources":[{"srcSet":"/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/21b31/dashboard.webp 149w,\\n/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/90214/dashboard.webp 297w,\\n/jacdac-docs/static/b1bfec9370a94caba4b1c5477a8daddc/5b97f/dashboard.webp 594w","type":"image/webp","sizes":"(min-width: 594px) 594px, 100vw"}]},"width":594,"height":598}');

/***/ }),

/***/ 53616:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/40f89/device-tester.png","srcSet":"/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/118f1/device-tester.png 303w,\\n/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/cfb13/device-tester.png 606w,\\n/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/40f89/device-tester.png 1212w","sizes":"(min-width: 1212px) 1212px, 100vw"},"sources":[{"srcSet":"/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/a5ca4/device-tester.webp 303w,\\n/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/143ae/device-tester.webp 606w,\\n/jacdac-docs/static/2d4a1c5ed91de71cdc2ff7a5d2efbb66/8a511/device-tester.webp 1212w","type":"image/webp","sizes":"(min-width: 1212px) 1212px, 100vw"}]},"width":1212,"height":910}');

/***/ }),

/***/ 72891:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/1e429/recordit.png","srcSet":"/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/c4ae8/recordit.png 186w,\\n/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/f590b/recordit.png 371w,\\n/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/1e429/recordit.png 742w","sizes":"(min-width: 742px) 742px, 100vw"},"sources":[{"srcSet":"/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/110d6/recordit.webp 186w,\\n/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/cb3c1/recordit.webp 371w,\\n/jacdac-docs/static/52776ea5cd92e087bf597dfa61ac1db3/9274c/recordit.webp 742w","type":"image/webp","sizes":"(min-width: 742px) 742px, 100vw"}]},"width":742,"height":395}');

/***/ }),

/***/ 61293:
/***/ (function(module) {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/e71c6/packets.png","srcSet":"/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/907d0/packets.png 275w,\\n/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/f4c45/packets.png 550w,\\n/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/e71c6/packets.png 1100w","sizes":"(min-width: 1100px) 1100px, 100vw"},"sources":[{"srcSet":"/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/d442b/packets.webp 275w,\\n/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/833ec/packets.webp 550w,\\n/jacdac-docs/static/64d8699f5aae04117ea56aaa0874cbce/30b06/packets.webp 1100w","type":"image/webp","sizes":"(min-width: 1100px) 1100px, 100vw"}]},"width":1100,"height":822}');

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-tsx-a57ff17d76c7058f2781.js.map