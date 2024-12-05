"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4157],{

/***/ 88979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DialogActions_DialogActions; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogActions/dialogActionsClasses.js


function getDialogActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiDialogActions', slot);
}
const dialogActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiDialogActions', ['root', 'spacing']);
/* harmony default export */ var DialogActions_dialogActionsClasses = ((/* unused pure expression or super */ null && (dialogActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js


const _excluded = ["className", "disableSpacing"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiDialogActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  alignItems: 'center',
  padding: 8,
  justifyContent: 'flex-end',
  flex: '0 0 auto'
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const DialogActions = /*#__PURE__*/react.forwardRef(function DialogActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiDialogActions'
  });
  const {
      className,
      disableSpacing = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var DialogActions_DialogActions = (DialogActions);

/***/ }),

/***/ 10662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CmdButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41796);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90948);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89572);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96173);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86010);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37862);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26040);
/* harmony import */ var _widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86992);
var _excluded=["onClick","className","style","children","icon","title","disabled","disableReset","autoRun","trackName","trackProperties","ackResetDelay","color"];// tslint:disable-next-line: match-default-export-name no-submodule-imports
var PREFIX="CmdButton";var classes={ack:PREFIX+"Ack",error:PREFIX+"Error"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)("span")(_ref=>{var{theme}=_ref;return{["& ."+classes.ack]:{color:"#fff",fontWeight:theme.typography.fontWeightMedium,backgroundColor:theme.palette.success.main},["& ."+classes.error]:{color:"#fff",backgroundColor:(theme.palette.mode==="light"?_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .lighten */ .$n:_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .darken */ ._j)(theme.palette.error.main,0.6)}};});var ACK_RESET_DELAY=500;var ERROR_RESET_DELAY=2000;function CmdButton(props){var{onClick,className,style,children,icon,title,disabled,disableReset,autoRun,trackName,trackProperties,ackResetDelay,color}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(props,_excluded);var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();var{setError:setAppError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var{0:working,1:setWorking}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:ack,1:setAck}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var mounted=(0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var _disabled=disabled||working;var run=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(){if(working)return;// already working
if(trackName)trackEvent("cmd."+trackName,trackProperties);try{setError(undefined);setAck(false);setWorking(true);yield onClick(mounted);if(!mounted())return;setAck(true);if(!disableReset){yield bus.delay(ackResetDelay||ACK_RESET_DELAY);if(!mounted())return;setAck(false);}}catch(e){if(!mounted())return;setAppError(e);setError(e);if(!disableReset){yield bus.delay(ERROR_RESET_DELAY);if(!mounted())return;setError(undefined);}}finally{if(mounted())setWorking(false);}});return function run(){return _ref2.apply(this,arguments);};}();var handleClick=/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(ev){ev.stopPropagation();ev.preventDefault();run();});return function handleClick(_x){return _ref3.apply(this,arguments);};}();var statusIcon=error?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null):undefined;var modeClassName=error?classes.error:ack?classes.ack:undefined;var elClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(className,modeClassName);// run once
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(autoRun&&mounted())run();},[autoRun]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Root,null,!children&&icon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({className:elClassName,style:style,onClick:handleClick,"aria-label":title,title:title,disabled:_disabled,color:color},others),statusIcon||icon):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{title:title,placement:"bottom"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx,Object.assign({className:elClassName,style:style,startIcon:icon,endIcon:statusIcon,onClick:handleClick,"aria-label":title,title:"",disabled:_disabled,color:color},others),children)));}

/***/ }),

/***/ 34157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardCloudConfiguration; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(77750);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(88979);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
// EXTERNAL MODULE: ./src/jacdac/useServiceClient.ts
var useServiceClient = __webpack_require__(56691);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(71670);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(52102);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/cloudconfigurationclient.ts
/**
 * A generic client for cloud configuration servers.
 */var CloudConfigurationClient=/*#__PURE__*/function(_JDServiceClient){(0,inheritsLoose/* default */.Z)(CloudConfigurationClient,_JDServiceClient);function CloudConfigurationClient(service){var _this;_this=_JDServiceClient.call(this,service)||this;(0,utils/* assert */.hu)(service.serviceClass===constants/* SRV_CLOUD_CONFIGURATION */.MW3);// tell the bus to refresh these register
_this.serverNameRegister=_this.service.register(constants/* CloudConfigurationReg.ServerName */.iMu.ServerName);_this.cloudDeviceIdRegister=_this.service.register(constants/* CloudConfigurationReg.CloudDeviceId */.iMu.CloudDeviceId);_this.cloudTypeRegister=_this.service.register(constants/* CloudConfigurationReg.CloudType */.iMu.CloudType);_this.connectionStatusRegister=_this.service.register(constants/* CloudConfigurationReg.ConnectionStatus */.iMu.ConnectionStatus);_this.mount(()=>_this.serverNameRegister.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>_this.emit(constants/* CHANGE */.Ver)));_this.mount(()=>_this.connectionStatusRegister.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>{_this.emit(constants/* CHANGE */.Ver);}));_this.mount(()=>_this.service.event(constants/* CloudConfigurationEvent.ConnectionStatusChange */.omR.ConnectionStatusChange).on(constants/* EVENT */.Ks0,()=>{_this.connectionStatusRegister.scheduleRefresh();}));return _this;}var _proto=CloudConfigurationClient.prototype;/**
     * Sends a connect command to the hub
     */_proto.connect=/*#__PURE__*/function(){var _connect=(0,asyncToGenerator/* default */.Z)(function*(){yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.Connect */.Now.Connect,undefined,true);});function connect(){return _connect.apply(this,arguments);}return connect;}()/**
     * Sends a disconnect command to the hub
     */;_proto.disconnect=/*#__PURE__*/function(){var _disconnect=(0,asyncToGenerator/* default */.Z)(function*(){yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.Disconnect */.Now.Disconnect,undefined,true);});function disconnect(){return _disconnect.apply(this,arguments);}return disconnect;}()/**
     * Sends a new connection string to the iot debice
     * @param connectionString
     */;_proto.setConnectionString=/*#__PURE__*/function(){var _setConnectionString=(0,asyncToGenerator/* default */.Z)(function*(connectionString){var data=(0,pack/* jdpack */.AV)("s",[connectionString||""]);yield this.service.sendCmdAsync(constants/* CloudConfigurationCmd.SetConnectionString */.Now.SetConnectionString,data,true);});function setConnectionString(_x){return _setConnectionString.apply(this,arguments);}return setConnectionString;}();(0,createClass/* default */.Z)(CloudConfigurationClient,[{key:"serverName",get:function get(){return this.serverNameRegister.stringValue;}},{key:"cloudDeviceId",get:function get(){return this.cloudDeviceIdRegister.stringValue;}},{key:"cloudType",get:function get(){return this.cloudTypeRegister.stringValue;}},{key:"connectionStatus",get:function get(){var _reg$unpackedValue;var reg=this.connectionStatusRegister;var status=(_reg$unpackedValue=reg.unpackedValue)===null||_reg$unpackedValue===void 0?void 0:_reg$unpackedValue[0];if(status===undefined)reg.scheduleRefresh();return status;}}]);return CloudConfigurationClient;}(serviceclient/* JDServiceClient */.P);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(36807);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Settings.js
var Settings = __webpack_require__(94229);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx
var CmdButton = __webpack_require__(10662);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/hooks/useEvent.ts
var useEvent = __webpack_require__(34452);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(67768);
// EXTERNAL MODULE: ./src/components/ui/DialogTitleWithClose.tsx + 1 modules
var DialogTitleWithClose = __webpack_require__(64720);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardCloudConfiguration.tsx
function ConnectionStringDialog(props){var{client,open,setOpen}=props;var{0:value,1:setValue}=(0,react.useState)("");var connectionStringId=(0,react.useId)();var handleCancel=()=>{setValue("");setOpen(false);};var handleValueChange=event=>{setValue(event.target.value);};var handleOk=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){yield client.setConnectionString(value||"");if(!mounted())return;setValue("");setOpen(false);});return function handleOk(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Dialog/* default */.Z,{open:open,fullWidth:true,maxWidth:"md"},/*#__PURE__*/react.createElement(DialogTitleWithClose/* default */.Z,{onClose:handleCancel},"Enter device connection string"),/*#__PURE__*/react.createElement(DialogContent/* default */.Z,null,/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"p",variant:"caption"},"Open your IoT Hub in the Azure portal, select IoT Devices, select or create a device, copy the primary or secondary connection string."),/*#__PURE__*/react.createElement(TextField/* default */.Z,{sx:{mt:2},id:connectionStringId,value:value,label:"Value",fullWidth:true,type:"password",size:"small",placeholder:"Connection string",onChange:handleValueChange})),/*#__PURE__*/react.createElement(DialogActions/* default */.Z,null,/*#__PURE__*/react.createElement(CmdButton/* default */.Z,{variant:"contained",color:"primary",disabled:!client,onClick:handleOk},"Save")));}function DashboardCloudConfiguration(props){var{service}=props;var{0:open,1:setOpen}=(0,react.useState)(false);var serverNameRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.ServerName */.iMu.ServerName);var cloudDeviceIdRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.CloudDeviceId */.iMu.CloudDeviceId);var cloudTypeRegister=(0,useRegister/* default */.Z)(service,specconstants/* CloudConfigurationReg.CloudType */.iMu.CloudType);var[serverName]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(serverNameRegister,props);var[cloudDeviceId]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(cloudDeviceIdRegister,props);var[cloudType]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(cloudTypeRegister,props);var connectionStatusRegister=service.register(specconstants/* CloudConfigurationReg.ConnectionStatus */.iMu.ConnectionStatus);var[connectionStatus]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(connectionStatusRegister,props);var messageSentEvent=(0,useEvent/* default */.Z)(service,specconstants/* CloudConfigurationEvent.MessageSent */.omR.MessageSent);var messageSent=(0,useEventCount/* default */.Z)(messageSentEvent);var factory=(0,react.useCallback)(srv=>new CloudConfigurationClient(srv),[]);var client=(0,useServiceClient/* default */.Z)(service,factory);var color="primary";var connected=connectionStatus===specconstants/* CloudConfigurationConnectionStatus.Connected */.moD.Connected;var handleConnect=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(){var cmd=connected?specconstants/* CloudConfigurationCmd.Disconnect */.Now.Disconnect:specconstants/* CloudConfigurationCmd.Connect */.Now.Connect;yield service.sendCmdAsync(cmd);});return function handleConnect(){return _ref2.apply(this,arguments);};}();var handleConfigure=()=>setOpen(true);return/*#__PURE__*/react.createElement(react.Fragment,null,cloudType&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"subtitle2"},cloudType),/*#__PURE__*/react.createElement(ChipList/* default */.Z,null,serverName&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{color:connected?"primary":"default",label:serverName,onClick:handleConnect,disabled:connectionStatus===undefined,title:specconstants/* CloudConfigurationConnectionStatus */.moD[connectionStatus]||"Waiting..."}),cloudDeviceId&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"device: "+cloudDeviceId}),messageSent!==undefined&&/*#__PURE__*/react.createElement(Chip/* default */.Z,{label:"messages: "+messageSent}),/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"Configure",onClick:handleConfigure},/*#__PURE__*/react.createElement(Settings/* default */.Z,null))),client&&/*#__PURE__*/react.createElement(ConnectionStringDialog,{client:client,open:open,setOpen:setOpen}));}

/***/ }),

/***/ 96173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useMounted(){var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);return()=>mounted.current;}

/***/ }),

/***/ 1103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ChipList; }
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var PREFIX="ChipList";var classes={root:PREFIX+"root"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)("span")(_ref=>{var{theme}=_ref;return{["&."+classes.root]:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap","& > *":{margin:theme.spacing(0.5)}}};});function ChipList(props){var{children}=props;if(!children)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root,{className:classes.root},children);}

/***/ }),

/***/ 67768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
function useEventCount(event){var{0:count,1:setCount}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event===null||event===void 0?void 0:event.count)||0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event===null||event===void 0?void 0:event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver,()=>{setCount(event.count);}),[event]);return count;}

/***/ }),

/***/ 56691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useServiceClient(service,factory,deps){if(deps===void 0){deps=[];}var{0:client,1:setClient}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var c=service&&factory(service);setClient(c);return()=>c===null||c===void 0?void 0:c.unmount();},[service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(deps)));// don't use factory in cache!
return client;}

/***/ })

}]);
//# sourceMappingURL=4157-e95d5e6d1911831fead6.js.map