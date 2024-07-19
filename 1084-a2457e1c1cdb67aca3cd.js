"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1084],{

/***/ 28709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useInstanceName; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
function useInstanceName(service,options){var instanceNameRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.InstanceName */ .ZJq.InstanceName);var[instanceName]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(instanceNameRegister,options);return instanceName;}

/***/ }),

/***/ 18847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ JDomTreeView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90948);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86010);
/* harmony import */ var _mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89757);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45111);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21596);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18891);
/* harmony import */ var _JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25241);
/* harmony import */ var _jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86160);
var _excluded=["defaultExpanded","defaultSelected"];// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var PREFIX="JDomTreeView";var classes={root:PREFIX+"root",margins:PREFIX+"margins"};var StyledTreeView=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)(_mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_ref=>{var{theme}=_ref;return{["&."+classes.root]:{flexGrow:1},["&."+classes.margins]:{marginLeft:theme.spacing(0.5),marginRight:theme.spacing(0.5)}};});function JDomTreeView(props){var{defaultExpanded,defaultSelected}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props,_excluded);var{0:expanded,1:setExpanded}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultExpanded||[]);var{0:selected,1:setSelected}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelected||[]);var devices=(0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({ignoreInfrastructure:!_jacdac_ts_src_jdom_flags__WEBPACK_IMPORTED_MODULE_3__/* .Flags.diagnostics */ .v.diagnostics});var handleToggle=(event,nodeIds)=>{setExpanded(nodeIds);};var handleSelect=(event,nodeIds)=>{setSelected(nodeIds);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTreeView,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(classes.root,classes.margins),defaultCollapseIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null),defaultExpandIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null),defaultEndIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:12}}),expanded:expanded,selected:selected,onNodeToggle:handleToggle,onNodeSelect:handleSelect},devices===null||devices===void 0?void 0:devices.map(device=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_2__/* .DeviceTreeItem */ .yw,Object.assign({key:device.id,device:device,expanded:expanded,selected:selected},other))));}

/***/ })

}]);
//# sourceMappingURL=1084-a2457e1c1cdb67aca3cd.js.map