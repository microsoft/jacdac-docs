"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9161],{

/***/ 84990:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDJoystick; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76914);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22878);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32849);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75938);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63339);
function AxisWidget(props){var{service}=props;var axisCountRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .HidJoystickReg.AxisCount */ .brk.AxisCount);var[axisCount=0]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(axisCountRegister,props);var axis=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Array(axisCount).fill(0));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{axis.current=new Array(axisCount).fill(0);},[axisCount]);// axis
var sendAxis=()=>service.sendCmdPackedAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .HidJoystickCmd.SetAxis */ .fK1.SetAxis,[axis.current.map(v=>[v])]);var handleAxisChange=index=>/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(event,newValue){var nv=newValue;axis.current[index]=nv;yield sendAxis();});return function(_x,_x2){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:2},Array(axisCount).fill(0).map((_,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:6,key:"axis"+i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{size:"small",label:"AXIS "+i,title:"axis "+i,min:-1,max:1,step:0.1,marks:true,defaultValue:0,onChange:handleAxisChange(i)}))));}function ButtonsWidget(props){var{service}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(service);var serverButtons=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(server,_=>_===null||_===void 0?void 0:_.buttons);var buttonCountRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .HidJoystickReg.ButtonCount */ .brk.ButtonCount);var[buttonCount=0]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(buttonCountRegister,props);var buttons=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Array(buttonCount).fill(0));// update size
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{buttons.current=new Array(buttonCount).fill(0);},[buttonCount]);// buttons
var sendButtons=()=>service.sendCmdPackedAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .HidJoystickCmd.SetButtons */ .fK1.SetButtons,[buttons.current.map(v=>[v])]);var handleButtonDown=index=>/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){buttons.current[index]=1;yield sendButtons();});var handleButtonUp=index=>/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){buttons.current[index]=0;yield sendButtons();});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},Array(buttonCount).fill(0).map((_,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,key:"button"+i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{size:"small",variant:(serverButtons===null||serverButtons===void 0?void 0:serverButtons[i])>127?"contained":"outlined",title:"button "+i,onPointerDown:handleButtonDown(i),onPointerUp:handleButtonUp(i)},"B",i))));}function DashboardHIDJoystick(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{xs:12,item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsWidget,props)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{xs:12,item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AxisWidget,props)));}

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
//# sourceMappingURL=9161-a515cd34c599b0ed62a3.js.map