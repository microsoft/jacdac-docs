"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2217,4300],{

/***/ 42643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardContent_CardContent; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardContent', ['root']);
/* harmony default export */ var CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/CardContent.js


const _excluded = ["className", "component"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  };
});
const CardContent = /*#__PURE__*/react.forwardRef(function CardContent(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
      className,
      component = 'div'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardContentRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardContent_CardContent = (CardContent);

/***/ }),

/***/ 77682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceCatalog; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/**
 * Gets the device catalog from the current bus
 * @returns
 */function useDeviceCatalog(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();return bus.deviceCatalog;}

/***/ }),

/***/ 36141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceImage; }
/* harmony export */ });
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71562);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5018);
function useDeviceImage(specification,size){var sz=size||"full";return specification&&(0,gatsby_link__WEBPACK_IMPORTED_MODULE_1__/* .withPrefix */ .dq)("images/devices/"+(0,_jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_0__/* .identifierToUrlPath */ .uM)(specification.id)+"."+sz+".jpg");}

/***/ }),

/***/ 56225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceSpecifications; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecifications(options){var catalog=(0,_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specifications=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(catalog,_=>_===null||_===void 0?void 0:_.specifications(options),[JSON.stringify(options)],(a,b)=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayEq */ .vm)(a,b,(l,r)=>l.id===r.id));return specifications;}

/***/ }),

/***/ 99458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WN": function() { return /* binding */ DEFAULT_OPTIONS; },
/* harmony export */   "gs": function() { return /* binding */ isEC30; },
/* harmony export */   "Xi": function() { return /* binding */ toEC30; },
/* harmony export */   "xD": function() { return /* binding */ generateEC30EnclosureModel; },
/* harmony export */   "Sk": function() { return /* binding */ shapeToEC30; }
/* harmony export */ });
var DEFAULT_OPTIONS={legs:{type:"well"},cover:{}};function isEC30(shape){return typeof shape==="string"&&/^ec30_/.test(shape);}function toEC30(gridWidth,gridHeight,connectors){if(connectors===void 0){connectors="";}return"ec30_"+gridWidth+"x"+gridHeight+"_"+connectors;}function generateEC30EnclosureModel(gridWidth,gridHeight,connectors,depth){if(connectors===void 0){connectors="";}if(depth===void 0){depth=6;}var width=gridWidth*10;var height=gridHeight*10;var c=8;var boxWidth=width+c;var boxHeight=height+c;return{name:width+"x"+height,grid:{width:gridWidth,height:gridHeight,connectors},box:{width:boxWidth,height:boxHeight,depth},rings:[{x:width>>1,y:height>>1},{x:width>>1,y:-(height>>1)},{x:-(width>>1),y:-(height>>1)},{x:-(width>>1),y:height>>1}],components:[{x:-(width>>1)+1.5,y:0,type:"led"},{x:(width>>1)-1.5,y:0,type:"led"},{x:0,y:-(height>>1)+1.5,type:"led"},{x:0,y:(height>>1)-1.5,type:"led"}],connectors:[{x:0,y:-(width>>1)+2,dir:"bottom",type:"jacdac"},{x:0,y:(width>>1)-2,dir:"top",type:"jacdac"},{x:-(width>>1)+2,y:0,dir:"left",type:"jacdac"},{x:(width>>1)-2,y:0,dir:"right",type:"jacdac"}]};}function shapeToEC30(shape,depth){if(depth===void 0){depth=7;}if(typeof shape==="string"){var m=/^ec30_(\d+)x(\d+)_([lrup\d]+)$/.exec(shape);if(m){var w=Number(m[1]);var h=Number(m[2]);var c=m[3];return generateEC30EnclosureModel(w,h,c,depth);}}return undefined;}

/***/ }),

/***/ 82217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeProjectFooter; }
/* harmony export */ });
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45235);
/* harmony import */ var _ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5754);
function MakeCodeProjectFooter(props){var{serviceNames=""}=props;var names=serviceNames.split(/\s*,\s*/gi);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_PageLinkList__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{header:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",{id:"extensions"},"Extensions"),nodes:names.map(serviceName=>(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB)(serviceName)).map(spec=>({slug:"/clients/makecode/extensions/"+spec.shortId+"/",title:spec.name,description:spec.notes["short"],services:spec.shortId}))})," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",{id:"devices"},"Devices"),names.length>1?names.map(name=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__["default"],{key:name,header:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",null,(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB)(name).name),serviceName:name,buyNow:true})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_specification_DeviceSpecificationList__WEBPACK_IMPORTED_MODULE_3__["default"],{key:names[0],serviceName:names[0],buyNow:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",null,"See Also"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Link */ .rU,{to:"/clients/makecode/user-guide/"},"User guide"))));}

/***/ }),

/***/ 36581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DeviceSpecificationCard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90461);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62070);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16821);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36141);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18763);
/* harmony import */ var _ui_ChipList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1103);
/* harmony import */ var _jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5018);
// tslint:disable-next-line: match-default-export-name no-submodule-imports
function DeviceSpecificationCard(props){var{specification,size,onClick,hideChips,hideServices}=props;var{id,name,version,company,services,hardwareDesign,firmwareSource,storeLink,makeCodeRepo,tags}=specification;var imageUrl=(0,_devices_useDeviceImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(specification,size);var names=[(tags===null||tags===void 0?void 0:tags.indexOf("kit"))>-1?"kit":undefined,(tags===null||tags===void 0?void 0:tags.indexOf("hub"))>-1?"hub":undefined,(tags===null||tags===void 0?void 0:tags.indexOf("adapter"))>-1?"adapter":undefined].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .uniqueMap */ .EM)(services||[],srv=>srv+"",srv=>srv).map(sc=>{var _serviceSpecification;return (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_5__/* .humanify */ .lW)((_serviceSpecification=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(sc))===null||_serviceSpecification===void 0?void 0:_serviceSpecification.shortName.toLowerCase());}))).filter(s=>!!s).join(", ");var to=onClick?undefined:"/devices/"+(0,_jacdac_ts_src_jdom_catalog__WEBPACK_IMPORTED_MODULE_7__/* .identifierToUrlPath */ .uM)(id);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{raised:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .CardActionArea */ .MU,{to:to,onClick:onClick},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:imageUrl,style:{aspectRatio:"4 / 3",width:"100%"},alt:"photograph of "+specification.name,loading:"lazy"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{variant:"subtitle2",color:"text.secondary"},company),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{gutterBottom:true,variant:"subtitle1",component:"div"},name,version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{sx:{ml:1},variant:"caption",component:"span"},"v",version)),!hideServices&&names&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{component:"div",variant:"subtitle2"},names),!hideChips&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_ChipList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,!storeLink&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"prototype"}),!!(makeCodeRepo!==null&&makeCodeRepo!==void 0&&makeCodeRepo.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"MakeCode",title:"MakeCode extension available."}),firmwareSource&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"firmware code",title:"Firmware source is avaiable."}),hardwareDesign&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{size:"small",label:"hardware design",title:"Hardware design files available."})))));}

/***/ }),

/***/ 45235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeviceSpecificationList; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15725);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18763);
/* harmony import */ var _devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56225);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44300);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34743);
/* harmony import */ var _DeviceSpecificationCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36581);
/* harmony import */ var _enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99458);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62070);
/* harmony import */ var _ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99834);
function DeviceSpecificationList(props){var{sx,header,query,count,serviceClass,serviceName,company,devices,updates,buyNow,makeCode,hardwareDesign,firmwareSources,transports,tags,ec30,connector,shapes,ids,onDeviceClick,hideChips,hideServices}=props;var specifications=(0,_devices_useDeviceSpecifications__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({includeExperimental:!buyNow});var specs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var r=(devices||specifications).slice(0);if(ids!==null&&ids!==void 0&&ids.length)r=r.filter(_ref=>{var{id}=_ref;return ids.indexOf(id)>-1;});if(company){var lc=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .escapeDeviceIdentifier */ .o9)(company);r=r.filter(spec=>(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .escapeDeviceIdentifier */ .o9)(spec.company).startsWith(lc));}if(!isNaN(serviceClass))r=r.filter(spec=>{var _spec$services;return((_spec$services=spec.services)===null||_spec$services===void 0?void 0:_spec$services.indexOf(serviceClass))>-1;});if(serviceName){var si=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_7__/* .serviceSpecificationFromName */ .kB)(serviceName);if(si)r=r.filter(spec=>{var _spec$services2;return((_spec$services2=spec.services)===null||_spec$services2===void 0?void 0:_spec$services2.indexOf(si.classIdentifier))>-1;});}if(updates)r=r.filter(spec=>spec.repo);if(buyNow!==undefined)r=r.filter(spec=>!!spec.storeLink===buyNow);if(hardwareDesign)r=r.filter(spec=>spec.hardwareDesign);if(connector==="jacdac")r=r.filter(spec=>spec.connector!=="noConnector"&&spec.connector!=="grove"&&spec.connector!=="qwiic");else if(connector==="grove")r=r.filter(spec=>spec.connector==="grove"||spec.connector==="qwiic");else if(connector==="none")r=r.filter(spec=>spec.connector==="noConnector"||spec.connector==="edgeIndependent");if(firmwareSources)r=r.filter(spec=>spec.firmwareSource);if(ec30)r=r.filter(spec=>{var _spec$tags;return (0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(spec.shape)||((_spec$tags=spec.tags)===null||_spec$tags===void 0?void 0:_spec$tags.includes("ec30"));});if(shapes)r=r.filter(spec=>shapes.some(shape=>shape===spec.shape));if(typeof makeCode==="string")r=r.filter(spec=>{var _spec$makeCodeRepo;return(_spec$makeCodeRepo=spec.makeCodeRepo)===null||_spec$makeCodeRepo===void 0?void 0:_spec$makeCodeRepo.some(r=>r.target===makeCode);});else if(makeCode!==undefined)r=r.filter(spec=>{var _spec$makeCodeRepo2;return!!((_spec$makeCodeRepo2=spec.makeCodeRepo)!==null&&_spec$makeCodeRepo2!==void 0&&_spec$makeCodeRepo2.length)===makeCode;});if(transports!==null&&transports!==void 0&&transports.length)r=r.filter(spec=>{var _spec$transport;return transports.indexOf((_spec$transport=spec.transport)===null||_spec$transport===void 0?void 0:_spec$transport.type)>-1;});if(tags!==null&&tags!==void 0&&tags.length)r=r.filter(spec=>tags.every(tag=>{var _spec$tags2;return(_spec$tags2=spec.tags)===null||_spec$tags2===void 0?void 0:_spec$tags2.includes(tag);}));if(query)r=r.filter(spec=>[spec.name,spec.description,spec.company].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.productIdentifiers||[]).map(p=>p.toString(16))),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.services||[]).map(p=>p.toString(16))),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((spec.services||[]).map(srv=>(0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_4__/* .serviceName */ .HV)(srv)))).some(s=>{var _s$toLowerCase;return(s===null||s===void 0?void 0:(_s$toLowerCase=s.toLowerCase())===null||_s$toLowerCase===void 0?void 0:_s$toLowerCase.indexOf(query.toLowerCase()))>-1;}));r=r.sort((a,b)=>{var _a$tags,_b$tags;// kits first
var c=-(((_a$tags=a.tags)===null||_a$tags===void 0?void 0:_a$tags.indexOf("kit"))>-1?1:0)+(((_b$tags=b.tags)===null||_b$tags===void 0?void 0:_b$tags.indexOf("kit"))>-1?1:0);if(c)return c;// device with transports
c=-(a.transport?1:0)+(b.transport?1:0);if(c)return c;// use ec30 shape
c=-((0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(a.shape)?1:0)+((0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_6__/* .isEC30 */ .gs)(b.shape)?1:0);if(c)return c;// with connectors first
c=-(a.connector==="noConnector"||a.connector==="edgePassive"||a.connector==="edgeIndependent"?1:0)+(b.connector==="noConnector"||b.connector==="edgePassive"||b.connector==="edgeIndependent"?1:0);if(c)return c;// by order
c=(a.order||50)-(b.order||50);if(c)return c;// by name
return a.name.localeCompare(b.name);});if(count!==undefined)r=r.slice(0,count);return r;},[query,serviceClass,serviceName,count,company,JSON.stringify(devices===null||devices===void 0?void 0:devices.map(d=>d.id)),specifications,updates,buyNow,makeCode,hardwareDesign,firmwareSources,transports===null||transports===void 0?void 0:transports.join(","),tags===null||tags===void 0?void 0:tags.join(","),ec30,connector,shapes===null||shapes===void 0?void 0:shapes.join(","),ids===null||ids===void 0?void 0:ids.join(",")]);var gridBreakpoints=(0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(specs.length);var size=(specs===null||specs===void 0?void 0:specs.length)<6?"catalog":"preview";if(!specs.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,{sx:sx,container:true,spacing:3},header&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_GridHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{title:header}),specs.map(specification=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP,Object.assign({key:specification.id,item:true},gridBreakpoints),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceSpecificationCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{specification:specification,size:size,onClick:onDeviceClick?()=>onDeviceClick(specification):undefined,hideChips:hideChips,hideServices:hideServices}))));}

/***/ }),

/***/ 99834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90461);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
var PREFIX="GridHeader";var classes={hr:PREFIX+"hr",start:PREFIX+"start"};var StyledGrid=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_ref=>{var{theme}=_ref;return{["& ."+classes.hr]:{background:theme.palette.text.disabled,marginBottom:"unset"},["& ."+classes.start]:{width:theme.spacing(2)}};});function GridHeader(props){var{title,count,variant,action}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledGrid,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{container:true,direction:"row",spacing:1,justifyContent:"center",alignItems:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(classes.hr,classes.start)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true},action&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{component:"span",mr:1},action),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{component:"span",variant:variant||"subtitle1"},title),count!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{component:"span",ml:0.5},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{label:count}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr",{className:classes.hr}))));}

/***/ }),

/***/ 44300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5355);
function useGridBreakpoints(itemCount){var{drawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);var hasDrawer=drawerType!==_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;if(!drawerType&&itemCount!==undefined){switch(itemCount){case 1:case 2:case 3:return{xs:12,sm:6,md:6,lg:4,xl:4};}}if(hasDrawer)return{xs:12,md:6,sm:6,lg:6,xl:4};else return{xs:12,sm:6,md:4,lg:4,xl:3};}

/***/ })

}]);
//# sourceMappingURL=2217-89206580985d771ebdec.js.map