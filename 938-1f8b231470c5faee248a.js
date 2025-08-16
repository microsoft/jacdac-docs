"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[938],{

/***/ 40938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EC30Editor; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _enclosure_ec30__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99458);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32849);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19811);
/* eslint-disable @typescript-eslint/no-explicit-any */var EC30Card=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(4904), __webpack_require__.e(317), __webpack_require__.e(9927)]).then(__webpack_require__.bind(__webpack_require__, 8041)));function EC30Editor(){var{0:gridWidth,1:setGridWith}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);var{0:gridHeight,1:setGridHeight}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);var{0:connectors,1:setConnectors}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({l:1,r:1});var id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var gridHeightId=id+"-height";var gridWidthId=id+"-width";var lconnectorId=id+"-l-connectors";var rconnectorId=id+"-r-connectors";var handleGridWidth=(event,value)=>setGridWith(value);var handleGridHeight=(event,value)=>{var v=value;setGridHeight(v);setConnectors({l:Math.min(connectors.l,v-1),r:Math.min(connectors.r,v-1)});};var handleLeftConnector=(event,value)=>setConnectors(Object.assign({},connectors,{l:value}));var handleRightConnector=(event,value)=>setConnectors(Object.assign({},connectors,{r:value}));var c=Object.entries(connectors).map(_ref=>{var[key,value]=_ref;return value>0?""+key+(value>1?value:""):"";}).join("");var model=(0,_enclosure_ec30__WEBPACK_IMPORTED_MODULE_1__/* .generateEC30EnclosureModel */ .xD)(gridWidth,gridHeight,c,1.6);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{container:true,spacing:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:gridWidthId,label:"grid width: "+gridWidth*10+"mm",value:gridWidth,onChange:handleGridWidth,min:1,max:12})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:gridHeightId,label:"grid height: "+gridHeight*10+"mm",value:gridHeight,onChange:handleGridHeight,min:2,max:12})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:lconnectorId,label:"left connectors: "+(connectors.l||0),value:connectors.l,onChange:handleLeftConnector,min:1,max:gridHeight-1})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:rconnectorId,label:"right connectors: "+(connectors.r||0),value:connectors.r,onChange:handleRightConnector,min:0,max:gridHeight-1})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EC30Card,{model:model,showSave:true}))));}

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

/***/ 32849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92486);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["label"];function SliderWithLabel(props){var{label}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);var labelId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var sliderId=labelId+"sliderId";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,variant:"caption",gutterBottom:true},label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,Object.assign({id:sliderId,"aria-labelledby":labelId,"aria-label":label,valueLabelDisplay:"auto"},others)));}

/***/ })

}]);
//# sourceMappingURL=938-1f8b231470c5faee248a.js.map