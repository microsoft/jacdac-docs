"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8524],{

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

/***/ 9792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FilteredDeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94659);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26040);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63339);
/* harmony import */ var _ui_FilterChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48256);
/* harmony import */ var _DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45235);
/* harmony import */ var _ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46335);
var _excluded=["showSearch","showServiceList"];function FilteredDeviceSpecificationList(props){var{showSearch,showServiceList}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(props,_excluded);var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var{deviceCatalog}=bus;var{0:serviceClass,1:setServiceClass}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(NaN);var handleServiceChanged=value=>setServiceClass(value);var{0:query,1:setQuery}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var{0:firmwareSources,1:setFirmwareSources}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{0:hardwareDesign,1:setHardwareDesign}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var tags=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(deviceCatalog,_=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .unique */ .Tw)((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .arrayConcatMany */ .ue)(_.specifications().map(spec=>spec.tags).filter(tags=>!!tags))));var{0:selectedTags,1:setSelectedTags}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);var handleSearchQueryChange=e=>(0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(()=>setQuery(e.target.value));var handleSetFirmwareSources=()=>setFirmwareSources(c=>!c);var handleSetHardwareDesign=()=>setHardwareDesign(c=>!c);var handleSetSelectedTag=tag=>()=>setSelectedTags(ts=>{var i=ts.indexOf(tag);if(i<0)return[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ts),[tag]);else return[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ts.slice(0,i)),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ts.slice(i+1)));});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{sx:{mb:1},container:true,spacing:1},showSearch&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{tabIndex:0,type:"search",value:query,fullWidth:true,size:"small",label:"Search devices","aria-label":"Search devices",onChange:handleSearchQueryChange})),showServiceList&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceSpecificationSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{label:"Filter by Service",serviceClass:serviceClass,setServiceClass:handleServiceChanged,hasRegisteredDevice:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_FilterChip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:"firmware code",value:firmwareSources,onClick:handleSetFirmwareSources})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_FilterChip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:"hardware design",value:hardwareDesign,onClick:handleSetHardwareDesign})),tags===null||tags===void 0?void 0:tags.filter(t=>t!=="ec30").map(tag=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,key:tag},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_FilterChip__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:tag,value:selectedTags.indexOf(tag)>-1,onClick:handleSetSelectedTag(tag)})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_5__["default"],Object.assign({},others,{query:query,buyNow:true,connector:"jacdac",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_5__["default"],Object.assign({},others,{header:"Grove, Qwiic, STEMMA QT connectors",query:query,buyNow:true,connector:"grove",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_5__["default"],Object.assign({},others,{header:"No PCB Edge connector (does not connect with Jacdac cables)",query:query,buyNow:true,connector:"none",firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginTop:"5rem"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_5__["default"],Object.assign({},others,{header:"Prototypes (not available for purchase)",query:query,buyNow:false,firmwareSources:firmwareSources,hardwareDesign:hardwareDesign,serviceClass:serviceClass,tags:selectedTags})));}

/***/ }),

/***/ 48256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FilterChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90461);
function FilterChip(props){var{label,value,icon,onClick}=props;var descr=value?"Disable "+label+" filter":"Filter by "+label+" support";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{label:label,"aria-label":descr,title:descr,icon:icon,variant:value?undefined:"outlined",color:value?"secondary":undefined,onClick:onClick});}

/***/ }),

/***/ 84384:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontmatter": function() { return /* binding */ frontmatter; },
/* harmony export */   "Head": function() { return /* binding */ Head; },
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_specification_FilteredDeviceSpecificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9792);
/* harmony import */ var _components_shell_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94597);


var frontmatter = {
  title: "Devices"
};

var Head = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shell_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, Object.assign({}, props, frontmatter));
function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_specification_FilteredDeviceSpecificationList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    showServiceList: true,
    showSearch: true
  });
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-devices-tsx-cd55a3a92cd45af3683c.js.map