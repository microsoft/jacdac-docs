"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2657],{

/***/ 94597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */function Head(props){var _site$siteMetadata,_data$page,_site$siteMetadata2;var{pageContext,data,description,image,title,meta=[]}=props;var{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");var metaTitle=title||(pageContext===null||pageContext===void 0?void 0:pageContext.title)||(site===null||site===void 0?void 0:(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title);if(!/^(Jacdac|DeviceScript)/i.test(metaTitle))metaTitle="Jacdac - "+metaTitle;var metaDescription=description||(data===null||data===void 0?void 0:(_data$page=data.page)===null||_data$page===void 0?void 0:_data$page.description)||(site===null||site===void 0?void 0:(_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.description);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{key:"title"},metaTitle),[{name:"description",content:metaDescription},{name:"og:image",content:image},{name:"og:title",content:metaTitle},{name:"og:description",content:metaDescription},{name:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:site.siteMetadata.author},{name:"twitter:title",content:title},{name:"twitter:description",content:metaDescription}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(meta)).filter(_ref=>{var{content}=_ref;return!!content;}).map(_ref2=>{var{name,content}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:name,name:name,content:content});}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"fontsgoogle",rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"gitusercontent",rel:"preconnect",href:"https://raw.githubusercontent.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"viewport",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}));}

/***/ }),

/***/ 91679:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ player_Head; },
  "default": function() { return /* binding */ Page; },
  "frontmatter": function() { return /* binding */ frontmatter; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx
var PacketsContext = __webpack_require__(12457);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(20399);
// EXTERNAL MODULE: ./src/components/hooks/useWindowEvent.ts
var useWindowEvent = __webpack_require__(45666);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowPaste.ts
function useWindowPaste(onPaste){var cb=(0,react.useCallback)(e=>{e.preventDefault();var text=e.clipboardData.getData("text");onPaste(text);},[onPaste]);// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,useWindowEvent/* default */.Z)("paste",cb);}
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 2 modules
var Container = __webpack_require__(86089);
;// CONCATENATED MODULE: ./src/components/trace/TraceAnalyzer.tsx
function TraceAnalyzer(){var bus=(0,useBus/* default */.Z)();var{replayTrace,setReplayTrace}=(0,react.useContext)(PacketsContext/* default */.Z);var importTrace=(0,react.useCallback)(text=>{var trace=(0,logparser/* parseTrace */.k9)(text);setReplayTrace(trace);},[setReplayTrace]);useWindowPaste(importTrace);var traceText=(0,useChange/* default */.Z)(bus,bus=>{if(bus)replayTrace===null||replayTrace===void 0?void 0:replayTrace.resolveDevices(bus);return replayTrace===null||replayTrace===void 0?void 0:replayTrace.serializeToText();},[replayTrace]);if(!traceText)return/*#__PURE__*/react.createElement(Container/* default */.Z,null,/*#__PURE__*/react.createElement("p",null,"No trace loaded."," ",/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{to:"/tools/traces"},"Learn how to collect a trace.")));return/*#__PURE__*/react.createElement("pre",null,traceText);}
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/pages/tools/player.tsx


var frontmatter = {
  title: "Trace Player",
  description: "Replay a packet trace."
};

var player_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, Object.assign({}, props, frontmatter));
function Page() {
  return /*#__PURE__*/react.createElement(TraceAnalyzer, null);
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-player-tsx-ef18eb67fa64e3af46b7.js.map