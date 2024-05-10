"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3053],{

/***/ 43053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5754);
function ErrorList(){var _data$allMdx,_data$allMdx$nodes;var data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("1089213825");var nodes=data===null||data===void 0?void 0:(_data$allMdx=data.allMdx)===null||_data$allMdx===void 0?void 0:(_data$allMdx$nodes=_data$allMdx.nodes)===null||_data$allMdx$nodes===void 0?void 0:_data$allMdx$nodes.filter(node=>{var _node$fields,_node$frontmatter;return((_node$fields=node.fields)===null||_node$fields===void 0?void 0:_node$fields.slug.indexOf("/"))>-1&&((_node$frontmatter=node.frontmatter)===null||_node$frontmatter===void 0?void 0:_node$frontmatter.title);}).map(node=>{var _node$fields2;return{slug:(_node$fields2=node.fields)===null||_node$fields2===void 0?void 0:_node$fields2.slug,title:node.frontmatter.title,order:node.frontmatter.order};});var groups=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .groupBy */ .vM)(nodes,node=>node.slug.split("/",3)[2]||"");var groupNames=Object.keys(groups).filter(g=>!!g);console.debug(groupNames);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,groupNames.map(group=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{key:group},group),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{nodes:groups[group]}))));}

/***/ })

}]);
//# sourceMappingURL=3053-85d9ff69494c99aa537c.js.map