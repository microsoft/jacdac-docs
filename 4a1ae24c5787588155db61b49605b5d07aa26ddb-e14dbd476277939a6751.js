"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4762],{

/***/ 77957:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');
exports.Z = _default;

/***/ }),

/***/ 77775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DashboardDevice; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(64680);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 17 modules
var DashboardServiceWidget = __webpack_require__(61213);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/services/useStatusCode.ts
var useStatusCode = __webpack_require__(71612);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(36807);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
;// CONCATENATED MODULE: ./src/components/services/StatusCodeAlert.tsx
var _excluded=["service"];var codes={[specconstants/* SRV_WIFI */.zti]:{[specconstants/* SystemStatusCodes.WaitingForInput */._kj.WaitingForInput]:()=>"Waiting for WiFi credentials."}};var severities={[specconstants/* SystemStatusCodes.Sleeping */._kj.Sleeping]:"info",[specconstants/* SystemStatusCodes.Initializing */._kj.Initializing]:"info",[specconstants/* SystemStatusCodes.Calibrating */._kj.Calibrating]:"info"};function StatusCodeAlert(props){var _codes$serviceClass,_codes$serviceClass$c;var{service}=props,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var{serviceClass}=service;var{code,vendorCode}=(0,useStatusCode/* default */.Z)(service,rest);if((code===specconstants/* SystemStatusCodes.Ready */._kj.Ready||code===specconstants/* SystemStatusCodes.Sleeping */._kj.Sleeping||code===specconstants/* SystemStatusCodes.Initializing */._kj.Initializing)&&vendorCode===0)return null;var severity=severities[code]||"warning";return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:severity},!!code&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},(0,jdspec/* humanify */.lW)(((_codes$serviceClass=codes[serviceClass])===null||_codes$serviceClass===void 0?void 0:(_codes$serviceClass$c=_codes$serviceClass[code])===null||_codes$serviceClass$c===void 0?void 0:_codes$serviceClass$c.call(_codes$serviceClass,service))||specconstants/* SystemStatusCodes */._kj[code]||"?")),!!vendorCode&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},"vendor error: 0x",vendorCode.toString(16)));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(14563);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./src/components/services/useRoleManagerClient.ts
var useRoleManagerClient = __webpack_require__(23239);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(88286);
;// CONCATENATED MODULE: ./src/components/services/useServiceRole.ts
function useServiceRole(service){return (0,useEventRaised/* default */.Z)(constants/* ROLE_CHANGE */.X5h,service,_=>_===null||_===void 0?void 0:_.role);}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/rolemanager.ts
var rolemanager = __webpack_require__(97031);
;// CONCATENATED MODULE: ./src/components/services/ServiceRole.tsx
var SelectRoleDialog=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(4097)]).then(__webpack_require__.bind(__webpack_require__, 64097)));var MAX_NAME_LENGTH=20;var RoleButton=(0,styled/* default */.ZP)(Button/* default */.Z)({textTransform:"none"});function ServiceRole(props){var{service}=props;var{0:showSelectRoleDialog,1:setShowSelectRoleDialog}=(0,react.useState)(false);var roleManager=(0,useRoleManagerClient/* default */.Z)();var role=useServiceRole(service);var handleOpen=()=>setShowSelectRoleDialog(true);var handleClose=()=>setShowSelectRoleDialog(false);var hasRoleForService=(0,useChange/* default */.Z)(roleManager,_=>_===null||_===void 0?void 0:_.hasRoleForService(service),[service]);// hide if no role manager or role not compatible with required roles
if(!hasRoleForService)return null;var name=(0,pretty/* isDeviceId */.fo)(role)?(0,pretty/* shortDeviceId */.xV)(role):(0,utils/* ellipse */.hr)((0,rolemanager/* escapeRoleName */.Z1)(role),MAX_NAME_LENGTH)||"...";return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(RoleButton,{title:role||"Choose role for service",size:"small",onClick:handleOpen},name),showSelectRoleDialog&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(SelectRoleDialog,{service:service,onClose:handleClose})));}
// EXTERNAL MODULE: ./src/components/services/useInstanceName.ts
var useInstanceName = __webpack_require__(28709);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Edit.js
var Edit = __webpack_require__(77957);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItemHeader.tsx
var DashboardServiceWidgetItemHeader_excluded=["service","expanded","toggleExpanded"];function DashboardServiceWidgetItemHeader(props){var{service,expanded,toggleExpanded}=props,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,DashboardServiceWidgetItemHeader_excluded);var{serviceClass}=service;var instanceName=(0,useInstanceName/* default */.Z)(service,rest);var icon=(0,DashboardServiceWidget/* dashboardServiceIcon */.I7)(serviceClass);var iconProps={titleAccess:(0,pretty/* serviceName */.HV)(serviceClass),color:"disabled"};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,alignItems:"center"},icon&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Tooltip/* default */.Z,{title:(0,pretty/* serviceName */.HV)(serviceClass)},/*#__PURE__*/react.createElement(react.Suspense,{fallback:null},/*#__PURE__*/(0,react.createElement)(icon,iconProps)))),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(ServiceRole,{service:service})),instanceName&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{className:"no-pointer-events",variant:"caption",component:"span",style:{float:"right"}},instanceName)),expanded!==undefined&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{size:"small",title:expanded?"Hide configuration":"Show configuration",onClick:toggleExpanded},/*#__PURE__*/react.createElement(Edit/* default */.Z,null)))));}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidgetItem.tsx
var DashboardServiceWidgetItem_excluded=["service","controlled"];function DashboardServiceWidgetItem(props){var{service,controlled}=props,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,DashboardServiceWidgetItem_excluded);var{serviceClass}=service;var expandable=props.expandable||(0,DashboardServiceWidget/* isExpandableView */.sO)(serviceClass);var{0:expanded,1:setExpanded}=(0,react.useState)(!controlled&&expandable?false:undefined);var statusCodeAlert=/*#__PURE__*/react.createElement(StatusCodeAlert,Object.assign({service:service},rest));var toggleExpanded=()=>setExpanded(e=>!e);(0,react.useEffect)(()=>{setExpanded(!controlled&&expandable?false:undefined);},[controlled,expandable]);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(DashboardServiceWidgetItemHeader,Object.assign({},props,{expanded:expanded,toggleExpanded:toggleExpanded})),statusCodeAlert,/*#__PURE__*/react.createElement(DashboardServiceWidget/* default */.ZP,Object.assign({},props,{expanded:expanded})));}
// EXTERNAL MODULE: ./src/components/devices/useDeviceName.ts
var useDeviceName = __webpack_require__(83100);
;// CONCATENATED MODULE: ./src/components/hooks/useIntersectionObserver.ts
function useIntersectionObserver(elementRef,options){var{0:entry,1:setEntry}=(0,react.useState)();var{threshold=0,root=null,rootMargin="0%",freezeOnceVisible}=options||{};var frozen=(entry===null||entry===void 0?void 0:entry.isIntersecting)&&freezeOnceVisible;var updateEntry=_ref=>{var[entry]=_ref;setEntry(entry);};(0,react.useEffect)(()=>{var node=elementRef===null||elementRef===void 0?void 0:elementRef.current;// DOM Ref
var hasIOSupport=!!window.IntersectionObserver;if(!hasIOSupport||frozen||!node)return;var observerParams={threshold,root,rootMargin};var observer=new IntersectionObserver(updateEntry,observerParams);//console.log(`observe`, { node })
observer.observe(node);return()=>observer.disconnect();},[elementRef,threshold,root,rootMargin,frozen]);return entry;}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(53304);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(32589);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 1 modules
var DeviceAvatar = __webpack_require__(30841);
// EXTERNAL MODULE: ./src/components/devices/DeviceActions.tsx
var DeviceActions = __webpack_require__(42714);
// EXTERNAL MODULE: ./src/jacdac/useDeviceDescription.ts
var useDeviceDescription = __webpack_require__(69461);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDeviceCardHeader.tsx
function DashboardDeviceCardHeader(props){var{device,showAvatar,showReset}=props;var description=(0,useDeviceDescription/* default */.Z)(device);return/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{style:{paddingBottom:0},avatar:showAvatar&&/*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z,{device:device}),action:/*#__PURE__*/react.createElement(DeviceActions/* default */.Z,{device:device,showStop:true,hideIdentity:true,showReset:showReset,showSettings:false}),title:/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{showShortId:false,device:device}),subheader:/*#__PURE__*/react.createElement(react.Fragment,null,description&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",gutterBottom:true},description))});}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx
var DeviceProxyAlert=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2717).then(__webpack_require__.bind(__webpack_require__, 62717)));var DeviceBootloaderAlert=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8204).then(__webpack_require__.bind(__webpack_require__, 78204)));var ignoredServices=[constants/* SRV_CONTROL */.gm9,constants/* SRV_LOGGER */.w9j,constants/* SRV_SETTINGS */.B9b,constants/* SRV_PROTO_TEST */.$Bn,constants/* SRV_PROXY */.Ahc,constants/* SRV_INFRASTRUCTURE */.QWn,constants/* SRV_UNIQUE_BRAIN */.U9t];function DashboardDevice(props){var{device,serviceFilter,variant,showAvatar,showHeader,showReset,showDeviceProxyAlert,alwaysVisible,controlled}=props;var name=(0,useDeviceName/* default */.Z)(device);var services=(0,useChange/* default */.Z)(device,_=>_===null||_===void 0?void 0:_.services({specification:true}).filter(service=>ignoredServices.indexOf(service.serviceClass)<0&&!service.isMixin&&(!serviceFilter||serviceFilter(service))));// refresh when visible
var serviceGridRef=(0,react.useRef)();var intersection=useIntersectionObserver(serviceGridRef);var visible=alwaysVisible||!intersection||!!intersection.isIntersecting;var ServiceWidgets=(0,react.useCallback)(()=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{ref:serviceGridRef,component:"div",container:true,spacing:2,justifyContent:"center",alignItems:"flex-end",alignContent:"space-between"},services===null||services===void 0?void 0:services.map(service=>/*#__PURE__*/react.createElement(DashboardServiceWidgetItem,{key:service.nodeId,service:service,services:services,variant:variant,visible:visible,controlled:controlled}))),[(0,eventsource/* dependencyId */.BX)(services),variant,visible,controlled]);if(!showHeader)return/*#__PURE__*/react.createElement(Paper/* default */.Z,{style:{padding:"0.25em"},variant:"outlined"},/*#__PURE__*/react.createElement(ServiceWidgets,null));return/*#__PURE__*/react.createElement(Card/* default */.Z,{"aria-live":"polite","aria-label":"device "+name+" started"},/*#__PURE__*/react.createElement(DashboardDeviceCardHeader,{device:device,showAvatar:showAvatar,showReset:showReset}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,{style:{paddingTop:0}},/*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M,{device:device}),/*#__PURE__*/react.createElement(Suspense/* default */.Z,{fallback:null},/*#__PURE__*/react.createElement(DeviceBootloaderAlert,{device:device})),showDeviceProxyAlert&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceProxyAlert,{device:device})),/*#__PURE__*/react.createElement(ServiceWidgets,null)));}

/***/ }),

/***/ 73598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardDeviceItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77775);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61213);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5355);
var _excluded=["device"];function DashboardDeviceItem(props){var{device}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(props,_excluded);var{drawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP);var breakpoints=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device,()=>{var breakpointWeight=device.services().map(srv=>{return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o2)(srv)||(srv.readingRegister||srv.valueRegister||srv.intensityRegister?1:0);}).reduce((c,v)=>c+v,0);if(breakpointWeight>3||drawerType!==_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None)return{xs:12,sm:12,md:12,lg:6,xl:6};else if(breakpointWeight==3)return{xs:12,sm:12,md:4,lg:4,xl:4};else if(breakpointWeight==2)return{xs:12,sm:6,md:4,lg:3,xl:4};else return{xs:6,sm:4,md:3,lg:2,xl:"auto"};},[drawerType],(a,b)=>a.xs==b.xs&&a.sm==b.sm&&a.md==b.md&&a.sm==b.sm&&a.lg==b.lg&&a.xl==b.xl);// based on size, expanded or reduce widget size
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,Object.assign({item:true},breakpoints),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({device:device},other)));}

/***/ }),

/***/ 26785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceProviderFromServiceClass; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43850);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26040);
function useServiceProviderFromServiceClass(serviceClass){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();// run once
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var devices=bus.devices({serviceClass});var def=!devices.length&&(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .serviceProviderDefinitionFromServiceClass */ .vd)(serviceClass);var provider=def&&(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_1__/* .addServiceProvider */ .Q6)(bus,def);return()=>bus.removeServiceProvider(provider);},[serviceClass]);}

/***/ }),

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

/***/ 23239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRoleManagerClient; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26040);
function useRoleManagerClient(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var{0:mgr,1:setMgr}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bus.roleManager);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLE_MANAGER_CHANGE */ .kqR,()=>setMgr(bus.roleManager)),[bus]);return mgr;}

/***/ }),

/***/ 71612:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useStatusCode; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
function useStatusCode(service,options){var register=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.StatusCode */ .ZJq.StatusCode);var[code=0,vendorCode=0]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(register,options);return{code,vendorCode};}

/***/ }),

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

/***/ 98153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/components/specification/PacketSpecification.tsx + 11 modules
var PacketSpecification = __webpack_require__(1243);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(95492);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(22129);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx
function EnumSpecification(props){var{serviceClass}=props;var spec=(0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);var enums=Object.values((spec===null||spec===void 0?void 0:spec.enums)||{}).filter(en=>!en.derived);if(!enums.length)return/*#__PURE__*/react.createElement(react.Fragment,null);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h2",null,"Enums"),enums.map(e=>/*#__PURE__*/react.createElement(react.Fragment,{key:e.name},/*#__PURE__*/react.createElement("h3",null,e.name," ",e.isFlags&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"flags",size:"small"})),/*#__PURE__*/react.createElement("ul",null,Object.keys(e.members).map(en=>/*#__PURE__*/react.createElement("li",{key:en},en,":"," ",/*#__PURE__*/react.createElement("code",null,"0x",e.members[en].toString(16))))))));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(43897);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(26785);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(73598);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(18891);
;// CONCATENATED MODULE: ./src/components/specification/ServiceSpecification.tsx
function DashboardServiceDevices(props){var{serviceClass}=props;var devices=(0,useDevices/* default */.Z)({serviceClass});return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},devices.map(device=>/*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z,{key:device.id,device:device,showAvatar:true,showHeader:true})));}function ServiceSpecification(props){var _node$extends;var{service:node,showDerived}=props;var{shortId,name,classIdentifier}=node;var packets=node.packets.filter(pkt=>showDerived||!pkt.derived);var registers=packets.filter(jdom_spec/* isRegister */.x5);var events=packets.filter(jdom_spec/* isEvent */.cO);var commands=packets.filter(jdom_spec/* isCommand */.ao);var reports=packets.filter(r=>r.secondary);var pipeReports=packets.filter(jdom_spec/* isPipeReport */._5);var others=packets.filter(r=>registers.indexOf(r)<0&&events.indexOf(r)<0&&commands.indexOf(r)<0&&reports.indexOf(r)<0&&pipeReports.indexOf(r)<0);// spin up provider on demand
(0,useServiceProviderFromServiceClass/* default */.Z)(node.classIdentifier);var reportOf=pkt=>reports.find(rep=>(0,jdom_spec/* isReportOf */.Dm)(pkt,rep));var pipeReportOf=pkt=>pipeReports.find(rep=>(0,jdom_spec/* isPipeReportOf */.yr)(pkt,rep));return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h1",{key:"title"},name,/*#__PURE__*/react.createElement(Box/* default */.Z,{ml:1,component:"span"},/*#__PURE__*/react.createElement(IDChip/* default */.Z,{id:node.classIdentifier,filter:"srv:"+shortId}))),/*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z,{specification:node}),node.notes.short&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body2"},node.notes.short),!!((_node$extends=node.extends)!==null&&_node$extends!==void 0&&_node$extends.length)&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("span",null,"Extends "),node.extends.map((extend,i)=>/*#__PURE__*/react.createElement(react.Fragment,{key:"extend"+extend},i>0&&/*#__PURE__*/react.createElement("span",null,", "),/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{key:"extend"+extend,to:"/services/"+extend+"/"},(0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name))),"."),/*#__PURE__*/react.createElement(Markdown/* default */.Z,{key:"noteslong",source:node.notes.long||""}),/*#__PURE__*/react.createElement(DashboardServiceDevices,{serviceClass:classIdentifier}),/*#__PURE__*/react.createElement(EnumSpecification,{key:"enums",serviceClass:classIdentifier}),[{name:"Registers",packets:registers,note:node.notes["registers"]},{name:"Events",packets:events,note:node.notes["events"]},{name:"Commands",packets:commands,note:node.notes["commands"]},{name:"Others",packets:others,note:node.notes["others"]}].filter(group=>group.packets.length).map(group=>/*#__PURE__*/react.createElement(react.Fragment,{key:"group"+group.name},/*#__PURE__*/react.createElement("h2",null,group.name),group.note&&/*#__PURE__*/react.createElement(Markdown/* default */.Z,{key:"node"+group.name,source:group.note}),group.packets.sort((l,r)=>(l.derived?1:-1)-(r.derived?1:-1)).map(pkt=>/*#__PURE__*/react.createElement(PacketSpecification/* default */.Z,{key:"pkt"+pkt.identifier,serviceClass:node.classIdentifier,packetInfo:pkt,reportInfo:reportOf(pkt),pipeReportInfo:pipeReportOf(pkt),showDevices:true})))));}

/***/ })

}]);
//# sourceMappingURL=4a1ae24c5787588155db61b49605b5d07aa26ddb-e14dbd476277939a6751.js.map