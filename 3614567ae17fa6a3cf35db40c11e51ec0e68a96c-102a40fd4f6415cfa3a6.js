"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2774],{

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

/***/ 32589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ DeviceLostAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88286);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46259);
function DeviceLostAlert(props){var{device}=props;var lost=(0,_jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOST */ .XWw,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .FOUND */ .a6y],device,dev=>!!(dev!==null&&dev!==void 0&&dev.lost));var flashing=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device,_=>(_===null||_===void 0?void 0:_.bootloader)||!!(_!==null&&_!==void 0&&_.firmwareUpdater));if(!lost||flashing)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"info"},"Device lost...");}

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

/***/ 96290:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBusWithMode; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26040);
/**
 * Grabs the Jacdac singleton bus from the current Jacdac context and configures it.
 * Throws an error if bus is missing.
 */function useBusWithMode(options){var{autoConnect,passive,streaming}=options;var bus=(0,_useBus__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();// enable auto-connect if needed
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var unsubs=[];if(streaming){bus.streaming=true;unsubs.push(()=>{bus.streaming=false;});}if(passive){bus.passive=true;unsubs.push(()=>{bus.passive=false;});}if(autoConnect){bus.autoConnect=true;unsubs.push(()=>{bus.autoConnect=false;});}return()=>unsubs.forEach(unsub=>unsub());},[autoConnect,passive,streaming]);return bus;}

/***/ })

}]);
//# sourceMappingURL=3614567ae17fa6a3cf35db40c11e51ec0e68a96c-102a40fd4f6415cfa3a6.js.map