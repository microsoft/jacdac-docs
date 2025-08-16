"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[248],{

/***/ 40248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSatNav; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15725);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_servers_satnavserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96361);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22878);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75938);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48831);
function DashboardSatNav(props){var{service,visible}=props;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(service);var positionRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SatNavReg.Position */ .Ad1.Position);var enabledRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SatNavReg.Enabled */ .Ad1.Enabled);var{0:geoUnmount,1:setGeoUnmount}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>{var _geoUnmount$unmount;return geoUnmount===null||geoUnmount===void 0?void 0:(_geoUnmount$unmount=geoUnmount.unmount)===null||_geoUnmount$unmount===void 0?void 0:_geoUnmount$unmount.call(geoUnmount);},[geoUnmount]);var handleUnuseMyLocationClick=()=>{var _geoUnmount$unmount2;geoUnmount===null||geoUnmount===void 0?void 0:(_geoUnmount$unmount2=geoUnmount.unmount)===null||_geoUnmount$unmount2===void 0?void 0:_geoUnmount$unmount2.call(geoUnmount);setGeoUnmount(undefined);};var handleUseMyLocationClick=()=>{var unmount=(0,_jacdac_ts_src_servers_satnavserver__WEBPACK_IMPORTED_MODULE_3__/* .watchLocation */ .p)(server);setGeoUnmount(unmount?{unmount}:undefined);enabledRegister.sendSetBoolAsync(true,true);};var[time,latitude,longitude,accuracy,altitude,altitudeAccuracy]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__/* .useRegisterUnpackedValue */ .Pf)(positionRegister,props);console.log({geoUnmount});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{container:true,spacing:1},server&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx,{variant:"outlined",onClick:geoUnmount?handleUnuseMyLocationClick:handleUseMyLocationClick},geoUnmount?"Stop my location":"Use my location")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:enabledRegister,showRegisterName:true,visible:visible})),latitude!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},"latitude, longitude: ",latitude,", ",longitude,", \xB1",accuracy,"m"),altitude!==undefined&&altitudeAccuracy!==0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,{item:true,xs:12},"altitude: ",altitude,", \xB1",altitudeAccuracy,"m"));}

/***/ })

}]);
//# sourceMappingURL=248-17dd2924390a1c9ce683.js.map