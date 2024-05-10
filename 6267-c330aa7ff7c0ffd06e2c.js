"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6267],{

/***/ 26267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeProjects; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15785);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5754);
function MakeCodeProjects(props){var _arrayify;var{serviceName,serviceClass,header}=props;var serviceNames=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .unique */ .Tw)([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((serviceName===null||serviceName===void 0?void 0:serviceName.split(/\s*,\s*/gi).filter(s=>!!s))||[]),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(((_arrayify=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .arrayify */ .lE)(serviceClass))===null||_arrayify===void 0?void 0:_arrayify.map(sc=>{var _serviceSpecification;return(_serviceSpecification=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc))===null||_serviceSpecification===void 0?void 0:_serviceSpecification.shortId;}).filter(s=>!!s))||[])));var query=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("3868184074");var nodes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{// grab the nodes
var nodes=query.allMdx.edges.map(edge=>edge.node);// filter out
if(serviceNames!==null&&serviceNames!==void 0&&serviceNames.length)nodes=nodes.filter(node=>serviceNames.some(n=>{var _node$frontmatter$ser;return((_node$frontmatter$ser=node.frontmatter.services)===null||_node$frontmatter$ser===void 0?void 0:_node$frontmatter$ser.indexOf(n))>-1;}));return nodes.map(_ref=>{var{fields,frontmatter}=_ref;return{slug:fields.slug,title:frontmatter.title,description:frontmatter.description,services:frontmatter.services,order:frontmatter.order};});},[serviceNames.join(",")]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{header:header,nodes:nodes});}

/***/ })

}]);
//# sourceMappingURL=6267-c330aa7ff7c0ffd06e2c.js.map