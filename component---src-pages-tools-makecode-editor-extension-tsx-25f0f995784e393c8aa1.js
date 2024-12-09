"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6456],{

/***/ 96540:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');
exports.Z = _default;

/***/ }),

/***/ 41733:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
exports.Z = _default;

/***/ }),

/***/ 78946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AddServiceIconButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85265);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33797);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2658);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62070);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48147);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
// tslint:disable-next-line: match-default-export-name no-submodule-imports
// tslint:disable-next-line: match-default-export-name no-submodule-imports
function AddServiceIconButton(props){var{error,onAdd,children,serviceFilter,serviceSorter}=props;var{0:servicesAnchorEl,1:setServicesAnchorEl}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);var servicesMenuId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var services=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var res=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(srv=>srv.classIdentifier===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_DEVICE_SCRIPT_MANAGER */ .I5||!(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isInfrastructure */ .lz)(srv)).filter(srv=>!serviceFilter||serviceFilter(srv));if(serviceSorter)res=res.sort(serviceSorter);return res;},[serviceFilter]);var handleServiceAddClick=event=>{setServicesAnchorEl(event.currentTarget);};var handleServiceAddClose=id=>()=>{setServicesAnchorEl(null);if(id!==undefined){var srv=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id);onAdd(srv);}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:"Add a service","aria-controls":servicesMenuId,"aria-haspopup":"true",onClick:handleServiceAddClick},children||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{id:servicesMenuId,anchorEl:servicesAnchorEl,keepMounted:true,open:Boolean(servicesAnchorEl),onClose:handleServiceAddClose(undefined)},services.map(srv=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{key:srv.classIdentifier,value:srv.classIdentifier.toString(16),onClick:handleServiceAddClose(srv.classIdentifier)},srv.name))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{variant:"caption",color:error?"error":"inherit",component:"div"},error||"Select one or more services."));}

/***/ }),

/***/ 22878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRegister; }
/* harmony export */ });
function useRegister(service,identifier){return service===null||service===void 0?void 0:service.register(identifier);}

/***/ }),

/***/ 91945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64680);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var _excluded=["children","padding","elevation","bgcolor"];function PaperBox(props){var{children,padding=1,elevation=1,bgcolor}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props,_excluded);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{sx:Object.assign({mb:1,bgcolor,p:padding},others),square:true,elevation:elevation},children);}

/***/ }),

/***/ 31246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceProductIdentifier; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36807);
/* harmony import */ var _components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
/* harmony import */ var _useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
function useDeviceProductIdentifier(device){var reg=(0,_components_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device===null||device===void 0?void 0:device.service(0),_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.ProductIdentifier */ .toU.ProductIdentifier);var[id]=(0,_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(reg);return id;}

/***/ }),

/***/ 11352:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ useDeviceSpecification; },
/* harmony export */   "Oi": function() { return /* binding */ useDeviceSpecificationFromProductIdentifier; },
/* harmony export */   "iR": function() { return /* binding */ useDeviceSpecificationFromIdentifier; }
/* harmony export */ });
/* harmony import */ var _useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31246);
/* harmony import */ var _useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecification(device){var id=(0,_useDeviceProductIdentifier__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(device);return useDeviceSpecificationFromProductIdentifier(id);}function useDeviceSpecificationFromProductIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromProductIdentifier(id),[id]);return specification;}function useDeviceSpecificationFromIdentifier(id){var deviceCatalog=(0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specification=(0,_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deviceCatalog,_=>_.specificationFromIdentifier(id),[id]);return specification;}

/***/ }),

/***/ 9680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e_": function() { return /* binding */ useRegisterHumanValue; },
/* harmony export */   "Pf": function() { return /* binding */ useRegisterUnpackedValue; },
/* harmony export */   "I8": function() { return /* binding */ useRegisterBoolValue; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18763);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
/* harmony import */ var _components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _useEventRaised__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88286);
function readRegisterValue(register,reader,defaultValue,trackError){try{var value=reader(register);return value;}catch(e){var _register$service,_register$service$dev,_register$service2;trackError(e,{dev:register===null||register===void 0?void 0:(_register$service=register.service)===null||_register$service===void 0?void 0:(_register$service$dev=_register$service.device)===null||_register$service$dev===void 0?void 0:_register$service$dev.anonymizedDeviceId,srv:register===null||register===void 0?void 0:(_register$service2=register.service)===null||_register$service2===void 0?void 0:_register$service2.name,reg:register===null||register===void 0?void 0:register.name});return defaultValue;}}function resolveRenderer(srv,reg){if(reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .BaseReg.StatusCode */ .vCn.StatusCode)return reg=>{var _humanify;var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[code,vendorCode]=values;if(code===undefined)return"?";var r=((_humanify=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_0__/* .humanify */ .lW)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SystemStatusCodes */ ._kj[code]||"?"))===null||_humanify===void 0?void 0:_humanify.toLowerCase())+" (0x"+code.toString(16)+")";if(vendorCode){r+=", vendor: 0x"+code.toString(16);}return r;};if(srv===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_DEVICE_SCRIPT_MANAGER */ .I5&&reg===_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .DeviceScriptManagerReg.RuntimeVersion */ .nhI.RuntimeVersion){return reg=>{var values=(reg===null||reg===void 0?void 0:reg.unpackedValue)||[];var[patch,minor,major]=values;if(patch===undefined)return"?";return major+"."+minor+"."+patch;};}return undefined;}function useRegisterHumanValue(register,options){var{visible,maxLength}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var renderer=register?resolveRenderer(register.service.serviceClass,register.code):undefined;return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>renderer?renderer(__):(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .ellipse */ .hr)(__===null||__===void 0?void 0:__.humanValue,maxLength),"???",trackError),[visible,maxLength]);}function useRegisterUnpackedValue(register,options){var{visible}=options||{visible:true};var{trackError}=(0,_components_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>readRegisterValue(_,__=>(__===null||__===void 0?void 0:__.unpackedValue)||[],[],trackError),[visible]);}function useRegisterBoolValue(register,options){var{visible}=options||{visible:true};return (0,_useEventRaised__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ,visible?register:undefined,_=>_===null||_===void 0?void 0:_.boolValue,[visible]);}

/***/ }),

/***/ 3063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MakeCodeEditorExtensionPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTheme.js + 13 modules
var createTheme = __webpack_require__(24345);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/responsiveFontSizes.js
var responsiveFontSizes = __webpack_require__(90645);
// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx + 6 modules
var ThemedLayout = __webpack_require__(25871);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(41733);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/components/AddServiceIconButton.tsx
var AddServiceIconButton = __webpack_require__(78946);
// EXTERNAL MODULE: ./src/components/specification/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__(46335);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__(12094);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__(11630);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(11352);
;// CONCATENATED MODULE: ./src/components/hooks/useClient.ts
function useClient(factory,deps){var client=(0,react.useMemo)(factory,deps||[]);(0,react.useEffect)(()=>()=>client===null||client===void 0?void 0:client.unmount(),[client]);return client;}
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(60763);
// EXTERNAL MODULE: ./src/components/makecode/services.ts + 1 modules
var services = __webpack_require__(29363);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtensionContext.tsx
var READ="read";var MESSAGE_PACKET="messagepacket";var HIDDEN="hidden";var SHOWN="shown";var MakeCodeEditorExtensionClient=/*#__PURE__*/function(_JDClient){(0,inheritsLoose/* default */.Z)(MakeCodeEditorExtensionClient,_JDClient);// full apptarget
function MakeCodeEditorExtensionClient(){var _this;_this=_JDClient.call(this)||this;_this.pendingCommands={};_this.extensionId=(0,iframeclient/* inIFrame */.H)()?window.location.hash.substr(1):undefined;_this._target={id:"microbit"};_this._connected=false;_this._visible=false;_this.nextRequestId=1;_this.handleMessage=_this.handleMessage.bind((0,assertThisInitialized/* default */.Z)(_this));if(typeof self!=="undefined"){self.addEventListener("message",_this.handleMessage,false);_this.mount(()=>self.removeEventListener("message",_this.handleMessage));}// always refresh on load
_this.on(SHOWN,()=>_this.refresh());// notify parent that we're ready
_this.init();return _this;}var _proto=MakeCodeEditorExtensionClient.prototype;_proto.setVisible=function setVisible(vis){if(this._visible!==vis){this._visible=vis;this.emit(constants/* CHANGE */.Ver);}};_proto.mkRequest=function mkRequest(resolve,reject,action,body){var id="jd_"+this.nextRequestId++;this.pendingCommands[id]={action,resolve,reject};return{type:"pxtpkgext",action,extId:this.extensionId,response:true,id,body};};_proto.sendRequest=function sendRequest(action,body){this.log("send "+action);if(!this.extensionId)return Promise.resolve(undefined);return new Promise((resolve,reject)=>{var msg=this.mkRequest(resolve,reject,action,body);window.parent.postMessage(msg,"*");});};_proto.handleMessage=function handleMessage(ev){var msg=ev.data;if((msg===null||msg===void 0?void 0:msg.type)!=="pxtpkgext")return;if(!msg.id){switch(msg.event){case"extinit":this.log("init");this._target=msg.target;this._connected=true;this.emit(constants/* CONNECT */.JD8);this.emit(constants/* CHANGE */.Ver);break;case"extloaded":this.log("loaded");break;case"extshown":this.setVisible(true);this.emit(SHOWN);this.emit(constants/* CHANGE */.Ver);break;case"exthidden":this.setVisible(false);this.emit(HIDDEN);this.emit(constants/* CHANGE */.Ver);break;case"extdatastream":this.emit("datastream",true);break;case"extconsole":this.emit("console",msg.body);break;case"extmessagepacket":this.emit(MESSAGE_PACKET,msg.body);break;default:console.debug("Unhandled event",msg);}}else{var{action,resolve,reject}=this.pendingCommands[msg.id]||{};delete this.pendingCommands[msg.id];if(msg.success&&resolve)resolve(msg.resp);else if(!msg.success&&reject)reject(msg.resp);// raise event as well
switch(action){case"extinit":this._target=msg.target;this._connected=true;this.emit(constants/* CONNECT */.JD8);this.emit(constants/* CHANGE */.Ver);break;case"extusercode":// Loaded, set the target
this.emit("readuser",msg.resp);this.emit(constants/* CHANGE */.Ver);break;case"extreadcode":// Loaded, set the target
this.emit(READ,msg.resp);this.emit(constants/* CHANGE */.Ver);break;case"extwritecode":this.emit("written",undefined);break;}}};_proto.init=/*#__PURE__*/function(){var _init=(0,asyncToGenerator/* default */.Z)(function*(){this.log("initializing");yield this.sendRequest("extinit");this.log("connected");yield this.refresh();});function init(){return _init.apply(this,arguments);}return init;}();_proto.refresh=/*#__PURE__*/function(){var _refresh=(0,asyncToGenerator/* default */.Z)(function*(){this.log("refresh");yield this.read();});function refresh(){return _refresh.apply(this,arguments);}return refresh;}();_proto.read=/*#__PURE__*/function(){var _read=(0,asyncToGenerator/* default */.Z)(function*(){if(!this.extensionId){var r={};this.emit(READ,r);return r;}else{var _resp=yield this.sendRequest("extreadcode");return _resp;}});function read(){return _read.apply(this,arguments);}return read;}();_proto.readUser=/*#__PURE__*/function(){var _readUser=(0,asyncToGenerator/* default */.Z)(function*(){yield this.sendRequest("extusercode");});function readUser(){return _readUser.apply(this,arguments);}return readUser;}();_proto.write=/*#__PURE__*/function(){var _write=(0,asyncToGenerator/* default */.Z)(function*(code,json,jres,dependencies){if(!this.extensionId){// Write to local storage instead
this.emit("written",undefined);}else{yield this.sendRequest("extwritecode",{code:code||undefined,json:json||undefined,jres:jres||undefined,dependencies});}});function write(_x,_x2,_x3,_x4){return _write.apply(this,arguments);}return write;}();_proto.queryPermission=/*#__PURE__*/function(){var _queryPermission=(0,asyncToGenerator/* default */.Z)(function*(){yield this.sendRequest("extquerypermission");});function queryPermission(){return _queryPermission.apply(this,arguments);}return queryPermission;}();_proto.requestPermission=/*#__PURE__*/function(){var _requestPermission=(0,asyncToGenerator/* default */.Z)(function*(console){yield this.sendRequest("extrequestpermission",{console});});function requestPermission(_x5){return _requestPermission.apply(this,arguments);}return requestPermission;}();_proto.dataStreamConsole=/*#__PURE__*/function(){var _dataStreamConsole=(0,asyncToGenerator/* default */.Z)(function*(console){yield this.sendRequest("extdatastream",{console});});function dataStreamConsole(_x6){return _dataStreamConsole.apply(this,arguments);}return dataStreamConsole;}();_proto.dataStreamMessages=/*#__PURE__*/function(){var _dataStreamMessages=(0,asyncToGenerator/* default */.Z)(function*(messages){yield this.sendRequest("extdatastream",{messages});});function dataStreamMessages(_x7){return _dataStreamMessages.apply(this,arguments);}return dataStreamMessages;}();(0,createClass/* default */.Z)(MakeCodeEditorExtensionClient,[{key:"target",get:function get(){return this._target;}},{key:"connected",get:function get(){return this._connected;}},{key:"visible",get:function get(){return this._visible;}}]);return MakeCodeEditorExtensionClient;}(client/* JDClient */.z);var MakeCodeEditorExtensionContext=/*#__PURE__*/(0,react.createContext)({target:{id:"microbit"},connected:false,configuration:undefined,setConfiguration:()=>{},device:undefined});MakeCodeEditorExtensionContext.displayName="makecode";function toTypescript(config){var ns="myModules";return"// auto-generated, do not edit.\nnamespace "+ns+" {\n"+config.roles.map(role=>"\n    //% fixedInstance whenUsed block=\""+role.name+"\"\n    export const "+(0,jdspec/* camelize */._A)(role.name)+" = new "+(0,services/* resolveMakecodeServiceFromClassIdentifier */.WB)(role.service).client.qName+"(\""+(0,jdspec/* camelize */._A)(role.name)+"\");\n").join("")+"\n}\n    ";}function toDependencies(target,config,device){var _device$makeCodeRepo;var r={};config===null||config===void 0?void 0:config.roles.forEach(role=>{var mk=(0,services/* resolveMakecodeServiceFromClassIdentifier */.WB)(role.service);r[mk.client.name]="github:"+mk.client.repo;});console.log({target,config,device});device===null||device===void 0?void 0:(_device$makeCodeRepo=device.makeCodeRepo)===null||_device$makeCodeRepo===void 0?void 0:_device$makeCodeRepo.filter(r=>r.target===target).forEach(repo=>{r[repo.name]="github:"+repo.slug;});return r;}function toJSON(config){return config&&JSON.stringify(config,null,4);}function MakeCodeEditorExtensionProvider(props){var{children}=props;var bus=(0,useBus/* default */.Z)();(0,useEffectAsync/* default */.Z)(()=>bus.stop(),[]);var client=useClient(()=>new MakeCodeEditorExtensionClient(),[]);var target=(0,useChange/* default */.Z)(client,_=>_===null||_===void 0?void 0:_.target);var connected=(0,useChange/* default */.Z)(client,c=>c===null||c===void 0?void 0:c.connected);var{0:configuration,1:setConfiguration}=(0,react.useState)({roles:[]});var device=(0,useDeviceSpecification/* useDeviceSpecificationFromIdentifier */.iR)(configuration.device);(0,react.useEffect)(()=>client===null||client===void 0?void 0:client.subscribe(READ,resp=>{console.log("mkcd: read received");var cfg=(0,utils/* JSONTryParse */.ZZ)(resp.json);console.log({resp,cfg});if(cfg)setConfiguration(cfg);}),[client]);(0,useEffectAsync/* default */.Z)(/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function*(){var ts=toTypescript(configuration);var json=toJSON(configuration);var deps=toDependencies(target===null||target===void 0?void 0:target.id,configuration,device);console.log("mkcd: saving...",{configuration,ts,json,deps});yield client.write(ts,json,undefined,deps);}),[client,target,configuration,device]);return/*#__PURE__*/react.createElement(MakeCodeEditorExtensionContext.Provider,{value:{target,connected,configuration,setConfiguration,device}},children);}function useMakeCodeEditorExtension(){var props=(0,react.useContext)(MakeCodeEditorExtensionContext);return props;}
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeRoleEditorExtension.tsx
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function escapeName(name){// TODO: makecode component escape name
return name;}function ClientRoleRow(props){var{component,onUpdate,config}=props;var{name,service}=component;var{nameError,serviceError}=(0,react.useMemo)(()=>validateClientRole(config,component),[config,component]);var textId=(0,react.useId)();var handleComponentNameChange=ev=>{component.name=escapeName(ev.target.value);onUpdate();};var handleSetService=serviceClass=>{component.service=serviceClass;onUpdate();};var handleComponentDelete=()=>{config.roles.splice(config.roles.indexOf(component),1);onUpdate();};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:4,md:6},/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:textId,fullWidth:true,error:!!nameError,variant:"outlined",label:"role name",helperText:nameError,value:name,size:"small",onChange:handleComponentNameChange})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:4,md:4},/*#__PURE__*/react.createElement(ServiceSpecificationSelect/* default */.Z,{variant:"outlined",label:"role service",serviceClass:service,setServiceClass:handleSetService,error:serviceError})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"Remove role",onClick:handleComponentDelete},/*#__PURE__*/react.createElement(Delete/* default */.Z,null)))));}// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validateClientRole(config,role){var serviceError=undefined;var nameError=undefined;// TODO: properly validate client role
return{serviceError,nameError};}/**
 * To test locally, add ?localeditorextensions=1&debugextensions=1
 */function MakeRoleCodeEditorExtension(){var _configuration$roles;var{target,configuration,setConfiguration}=useMakeCodeEditorExtension();var hasMakeCodeService=(0,react.useCallback)(srv=>{var mkc=(0,services/* resolveMakecodeService */.K9)(srv);return mkc&&target&&(!mkc.client.targets||mkc.client.targets.indexOf(target.id)>-1);},[target]);var update=()=>{setConfiguration((0,utils/* clone */.d9)(configuration));};var handleAddService=service=>{if(!configuration.roles)configuration.roles=[];var names=configuration.roles.map(c=>c.name).concat((0,spec/* serviceSpecifications */.Le)().map(spec=>spec.camelName)).filter(n=>!!n);configuration.roles.push({name:(0,utils/* uniqueName */.yZ)(names,service.camelName||service.shortId,"",3),service:service.classIdentifier});update();};var makecodeServiceSorter=(0,react.useCallback)((l,r)=>{// favor makecode services supported by released hardware kits
return l.name.localeCompare(r.name);},[]);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"row",spacing:2},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"subtitle1"},"Configure roles"),/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},"The roles define which Jacdac services (sensor or actuators) are needed in your program. Use this dialog to define multiple roles using the same type of service, like multiple button roles. For each services, there is always one or two default roles (for example ",/*#__PURE__*/react.createElement("code",null,"button1")," and"," ",/*#__PURE__*/react.createElement("code",null,"button2"),") that is already defined.")),(_configuration$roles=configuration.roles)===null||_configuration$roles===void 0?void 0:_configuration$roles.map((c,i)=>/*#__PURE__*/react.createElement(ClientRoleRow,{key:"config"+i,config:configuration,component:c,onUpdate:update})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(AddServiceIconButton/* default */.Z,{serviceFilter:hasMakeCodeService,serviceSorter:makecodeServiceSorter,onAdd:handleAddService})));}
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(91945);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(50553);
// EXTERNAL MODULE: ./src/components/specification/DeviceSpecificationList.tsx
var DeviceSpecificationList = __webpack_require__(45235);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeAddExtensionBox.tsx
function MakeCodeAddExtensionBox(){var{configuration,setConfiguration,device,target}=useMakeCodeEditorExtension();var handleClick=dev=>{setConfiguration(Object.assign({},configuration,{device:dev===null||dev===void 0?void 0:dev.id}));};return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(DeviceSpecificationList["default"],{makeCode:(target===null||target===void 0?void 0:target.id)||"microbit",header:device?"Current accessory":"Select accessory",onDeviceClick:handleClick,hideChips:true,hideServices:true,devices:device?[device]:undefined}));}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
;// CONCATENATED MODULE: ./src/pages/tools/makecode-editor-extension.tsx










var PREFIX = "makecode-editor-extension";
var classes = {
  content: PREFIX + "content"
};
var Root = (0,styled/* default */.ZP)("div")(_ref => {
  var {
    theme
  } = _ref;
  return {
    ["& ." + classes.content]: {
      display: "flex",
      minHeight: "100vh",
      minWidth: "10rem",
      flexDirection: "column",
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      flexGrow: 1
    }
  };
});
function MakeCodeEditorExtensionPage() {
  var {
    toggleDarkMode,
    darkModeMounted
  } = (0,react.useContext)(DarkModeContext/* default */.ZP);
  var rawTheme = (0,createTheme/* default */.Z)({
    palette: {
      primary: {
        main: "#2e7d32"
      },
      secondary: {
        main: "#ffc400"
      },
      background: {
        default: "#fff"
      },
      contrastThreshold: 5.1,
      mode: "light"
    }
  });
  var theme = (0,responsiveFontSizes/* default */.Z)(rawTheme);
  (0,react.useEffect)(() => {
    if (darkModeMounted) toggleDarkMode("light");
  }, [darkModeMounted]);
  return /*#__PURE__*/react.createElement(Root, null, /*#__PURE__*/react.createElement(ThemedLayout/* default */.Z, {
    theme: theme
  }, /*#__PURE__*/react.createElement(MakeCodeEditorExtensionProvider, null, /*#__PURE__*/react.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(MakeRoleCodeEditorExtension, null)), flags/* Flags.diagnostics */.v.diagnostics && /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(MakeCodeAddExtensionBox, null))))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-editor-extension-tsx-25f0f995784e393c8aa1.js.map