"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6366],{

/***/ 8364:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteForever');
exports.Z = _default;

/***/ }),

/***/ 25449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var React = _interopRequireWildcard(__webpack_require__(67294));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), 'GitHub');
exports.Z = _default;

/***/ }),

/***/ 59334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86010);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94780);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2658);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59773);
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71657);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90948);
/* harmony import */ var _listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26336);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const _excluded = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ['root', inset && 'inset', dense && 'dense', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(slots, _listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__/* .getListItemTextUtilityClass */ .L, classes);
};
const ListItemTextRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('div', {
  name: 'MuiListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].primary */ .Z.primary}`]: styles.primary
    }, {
      [`& .${_listItemTextClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].secondary */ .Z.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
}));
const ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    props: inProps,
    name: 'MuiListItemText'
  });
  const {
      children,
      className,
      disableTypography = false,
      inset = false,
      primary: primaryProp,
      primaryTypographyProps,
      secondary: secondaryProp,
      secondaryTypographyProps
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(props, _excluded);
  const {
    dense
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;
  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  });
  const classes = useUtilityClasses(ownerState);
  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z && !disableTypography) {
    primary = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: primaryTypographyProps != null && primaryTypographyProps.variant ? undefined : 'span',
      display: "block"
    }, primaryTypographyProps, {
      children: primary
    }));
  }
  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "text.secondary",
      display: "block"
    }, secondaryTypographyProps, {
      children: secondary
    }));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ListItemTextRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [primary, secondary]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = (ListItemText);

/***/ }),

/***/ 78055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71508);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46259);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20528);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79104);
/* harmony import */ var _buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13456);
/* harmony import */ var _hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18891);
/* harmony import */ var _jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42758);
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports
function NoSsrConnectAlert(props){var{serviceClass,closeable}=props;var{bus}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);var{transports}=bus;var devices=(0,_hooks_useDevices__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({serviceClass,ignoreInfrastructure:true});var spec=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);// don't show if no transport, some devices
if(!_jacdac_providerbus__WEBPACK_IMPORTED_MODULE_6__/* .UIFlags.connect */ .A.connect&&!transports.length||devices!==null&&devices!==void 0&&devices.length)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{displayPrint:"none"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,{severity:"info",closeable:closeable},!spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect your device?"),spec&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",null,"Did you connect a ",spec.name," device?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{component:"span",ml:2},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{full:"always",transparent:true}))));}function ConnectAlert(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert,props));}

/***/ }),

/***/ 13672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareLoader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99360);
function FirmwareLoader(){(0,_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null);}

/***/ }),

/***/ 31038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ FlashDeviceButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76914);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3838);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(93155);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52288);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_flashing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98307);
/* harmony import */ var _ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26072);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63339);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92513);
/* harmony import */ var _jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11352);
/* harmony import */ var gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3146);
/* harmony import */ var _ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64720);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6603);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26040);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37862);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3964);
/* harmony import */ var _useDeviceFirmwareInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36409);
/* harmony import */ var _jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82910);
/* harmony import */ var _FirmwareFlashInstructions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37796);
function DragAndDropUpdateButton(props){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();var{firmwareVersion,specification,info,productIdentifier}=props;var{name,url}=info;var{0:open,1:setOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();var handleOpen=()=>{trackEvent("flash.download",{device:specification.name,firmwareName:name});setOpen(true);};var handleClose=()=>setOpen(false);var{version,assertUrl}=(0,_github__WEBPACK_IMPORTED_MODULE_8__/* .useLatestReleaseAsset */ .Vv)(url);var current=!!productIdentifier&&productIdentifier===info.productIdentifier;var hasUpdate=current&&version&&firmwareVersion&&(0,_jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_14__/* .semverCmp */ .k)(firmwareVersion,version)>0;// device dissapears after reset
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(open){bus.pushDeviceFrozen();return()=>bus.popDeviceFrozen();}},[open]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{variant:hasUpdate?"contained":"outlined",color:current?"primary":"inherit",onClick:handleOpen},name,version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{sx:{ml:1},variant:"caption"},version)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,{open:open},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{onClose:handleClose},"Updating your ",specification.name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Follow these instruction to upgrade your"," ",specification.name," with ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,name),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_material_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .rU,{href:assertUrl||url},"Download the firmware file")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FirmwareFlashInstructions__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{specification:specification})))));}function FlashDeviceButton(props){var{device,blob,ignoreFirmwareCheck,hideUpToDate}=props;var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();var{setError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();var{trackEvent,trackError}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();var{0:progress,1:setProgress}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var specification=(0,_jacdac_useDeviceSpecification__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(device);var firmwares=specification===null||specification===void 0?void 0:specification.firmwares;var bootloader=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(device,_=>_===null||_===void 0?void 0:_.bootloader);var firmwareUpdater=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(device,_=>_===null||_===void 0?void 0:_.firmwareUpdater);var firmwareInfo=(0,_useDeviceFirmwareInfo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(device);var update=ignoreFirmwareCheck||(blob===null||blob===void 0?void 0:blob.version)&&(firmwareInfo===null||firmwareInfo===void 0?void 0:firmwareInfo.version)&&(0,_jacdac_ts_src_jdom_flashing__WEBPACK_IMPORTED_MODULE_1__/* .updateApplicable */ .Kl)(firmwareInfo,blob);var upToDate=(blob===null||blob===void 0?void 0:blob.version)&&(firmwareInfo===null||firmwareInfo===void 0?void 0:firmwareInfo.version)&&blob.version===firmwareInfo.version;var unsupported=specification&&!specification.repo;var missing=!device||!blob;var disabled=!!firmwareUpdater;var color=update&&!upToDate?"primary":"inherit";(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>firmwareUpdater===null||firmwareUpdater===void 0?void 0:firmwareUpdater.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .PROGRESS */ .ad7,v=>setProgress(v*100)),[firmwareUpdater]);var handleFlashing=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(function*(){if(device.firmwareUpdater)return;var props={productId:firmwareInfo.productIdentifier,name:firmwareInfo.name,version:firmwareInfo.version};console.debug("start flash",Object.assign({},props,{device}));trackEvent("flash.start",props);var updater=new _jacdac_ts_src_jdom_flashing__WEBPACK_IMPORTED_MODULE_1__/* .FirmwareUpdater */ .c6(device.bus,blob);try{device.firmwareUpdater=updater;setProgress(0);var updateCandidates=[firmwareInfo];yield updater.flash(updateCandidates,ignoreFirmwareCheck);trackEvent("flash.success",props);}catch(e){trackError(e,props);trackEvent("flash.error",props);setError(e);}finally{console.debug("end flash",Object.assign({},props,{device}));// rebuild device
bus.removeDevice(device.deviceId);}});return function handleFlashing(){return _ref.apply(this,arguments);};}();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(device&&firmwareInfo&&!bootloader&&update&&!upToDate){handleFlashing();}},[device,firmwareInfo,bootloader,update,upToDate]);if(hideUpToDate&&upToDate)return null;if(firmwares!==null&&firmwares!==void 0&&firmwares.length)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},firmwares.map(fw=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP,{item:true,key:fw.name},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DragAndDropUpdateButton,{firmwareVersion:firmwareInfo===null||firmwareInfo===void 0?void 0:firmwareInfo.version,productIdentifier:firmwareInfo===null||firmwareInfo===void 0?void 0:firmwareInfo.productIdentifier,specification:specification,info:fw}))));return unsupported?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,{severity:"info"},"No registered firmware"):missing?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,{severity:"info"},"No firmware available"):firmwareUpdater?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{variant:"caption",component:"div",color:"textSecondary"},"Updating firmware"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{value:progress})):firmwareInfo||update?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,{severity:upToDate?"success":"info"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,null,upToDate?"Up to date!":blob.version+" available"),(!upToDate||ignoreFirmwareCheck)&&firmwareInfo&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{title:"Flash "+blob.version,disabled:disabled,variant:"contained",color:color,onClick:handleFlashing},"Update")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,{severity:"info"},"No firmware available");}

/***/ }),

/***/ 34312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceFirmwareBlob; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _useDeviceFirmwareInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36409);
function useDeviceFirmwareBlob(device){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();var blobs=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(bus,_=>_.firmwareBlobs);var firmwareInfo=(0,_useDeviceFirmwareInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device);var blob=firmwareInfo&&(blobs===null||blobs===void 0?void 0:blobs.find(b=>firmwareInfo.productIdentifier==b.productIdentifier));return blob;}

/***/ }),

/***/ 36409:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceFirmwareInfo; }
/* harmony export */ });
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63339);
function useDeviceFirmwareInfo(device){var firmwareInfo=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(device,_=>_===null||_===void 0?void 0:_.firmwareInfo,undefined,(a,b)=>!!a==!!b&&(!a||a.deviceId===b.deviceId&&a.version===b.version&&a.productIdentifier===b.productIdentifier&&a.bootloaderProductIdentifier==b.bootloaderProductIdentifier));return firmwareInfo;}

/***/ }),

/***/ 6885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ GithubRepositoryCardHeader; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./src/components/github.ts
var github = __webpack_require__(6603);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GitHub.js
var GitHub = __webpack_require__(25449);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeOpenSnippetButton.tsx
var MakeCodeOpenSnippetButton = __webpack_require__(66749);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeGithubImportLink.tsx
// tslint:disable-next-line: no-submodule-imports
function MakeCodeGithubImportLink(props){var{slug}=props;var importUrl="https://makecode.microbit.org/#pub:github:"+slug;return/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{href:importUrl,target:"blank",underline:"hover",title:"open extension in MakeCode"},/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"h5"},slug));}
;// CONCATENATED MODULE: ./src/components/github/GithubRepositoryCardHeader.tsx
// tslint:disable-next-line: no-submodule-imports
function GithubRepositoryCardHeader(props){var{slug,showRelease,showMakeCodeButton,showMakeCodeImportButton}=props;var{repoPath,name:repoName}=(0,github/* normalizeSlug */.E1)(slug);var{response:release}=(0,github/* useLatestFirmwareRelease */.B5)(showRelease&&slug);return/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:showMakeCodeImportButton?/*#__PURE__*/react.createElement(MakeCodeGithubImportLink,{slug:slug}):/*#__PURE__*/react.createElement(react.Fragment,null,slug),subheader:showRelease&&release&&/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{color:"textSecondary",target:"_blank",to:release.html_url},release.version),avatar:/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",underline:"hover",title:"Open repository in github.com",href:"https://github.com/"+repoPath},/*#__PURE__*/react.createElement(GitHub/* default */.Z,null)),action:showMakeCodeButton&&/*#__PURE__*/react.createElement(MakeCodeOpenSnippetButton["default"],{name:repoName+" with jacdac",slug:slug})});}

/***/ }),

/***/ 71348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony default export */ __webpack_exports__["Z"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({titleAccess:"MakeCode logo"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",strokeWidth:".75"})));

/***/ }),

/***/ 66749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeOpenSnippetButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76914);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71348);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11462);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37862);
/* harmony import */ var _makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9668);
function MakeCodeOpenSnippetButton(props){var{setError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var{mobile}=(0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var{0:importing,1:setImporting}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{sx,code="",options,name="Jacdac demo",slug,branch="master",full}=props;var pxt=(0,_makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(slug,branch);var disabled=importing||slug&&!pxt;var handleClick=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){var _options$package;var md="\n";var target="microbit";var editor="https://makecode.microbit.org/";var deps=options===null||options===void 0?void 0:(_options$package=options.package)===null||_options$package===void 0?void 0:_options$package.split(",").map(dep=>dep.split("=",2));var dependencies=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .toMap */ .qL)(deps,deps=>deps[0],deps=>deps[1])||{};if(pxt)dependencies[pxt.name]="github:"+slug+"#v"+pxt.version;try{setImporting(true);var x=yield fetch("https://makecode.com/api/scripts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name,target,description:"Made with ❤️ in Microsoft Jacdac.",editor:"blocksprj",text:{"README.md":md,"main.blocks":code?"":"<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>","main.ts":code,"pxt.json":JSON.stringify({name:name,dependencies:Object.assign({core:"*",microphone:"*"},dependencies),description:"",files:["main.blocks","main.ts","README.md"]})},meta:{}})});var data=yield x.json();var url=editor+"#pub:"+data.shortid;window.open(url,"_blank","noreferrer");}catch(error){setError(error);}finally{setImporting(false);}});return function handleClick(){return _ref.apply(this,arguments);};}();if(mobile)// mobile blocks all popups
return undefined;return!full&&mobile?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{sx:sx,onClick:handleClick,color:"primary",disabled:disabled,title:"Try in MakeCode"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{sx:sx,variant:"outlined",color:"primary",onClick:handleClick,disabled:disabled,startIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null)},"Try in MakeCode");}

/***/ }),

/***/ 9668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ usePxtJson; }
/* harmony export */ });
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6603);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34284);
function usePxtJson(slug,branch){if(!slug)return undefined;var url=(0,_github__WEBPACK_IMPORTED_MODULE_0__/* .rawUrl */ .ck)(slug,branch,"pxt.json");var{response:pxtJson}=(0,_useFetch__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(url);return pxtJson;}

/***/ }),

/***/ 89086:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AlertSwitch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71508);
/* harmony import */ var _SwitchWithLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68320);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46259);
function AlertSwitch(props){var{severity,title,checked,onChecked,children}=props;var handleChecked=(ev,newChecked)=>onChecked(newChecked);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{severity:severity},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{checked:checked,onChange:handleChecked,label:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{component:"span",variant:"body1"},title)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{mr:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{component:"span",variant:"caption"},children)));}

/***/ }),

/***/ 26072:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CircularProgressWithLabel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59062);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2658);
function CircularProgressWithLabel(props){var{value}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{position:"relative",display:"inline-flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({variant:"determinate"},props)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{variant:"caption",component:"div",color:"textSecondary"},Math.round(value)+"%")));}

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

/***/ 38665:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useProxy; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80662);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _useBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26040);
/**
 * A hook to force brains into proxy mode.
 * @param force
 */function useProxy(force){var bus=(0,_useBus__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(!force)return;var forceProxy=()=>{var pkt=_jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_0__/* .Packet.onlyHeader */ .W.onlyHeader(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .ControlCmd.Proxy */ .VSW.Proxy);pkt.sendAsMultiCommandAsync(bus,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SRV_CONTROL */ .gm9);};var unsub=bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEVICE_ANNOUNCE */ .Hob,forceProxy);forceProxy();return unsub;},[force]);}

/***/ }),

/***/ 18848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ updater_Head; },
  "default": function() { return /* binding */ Page; },
  "frontmatter": function() { return /* binding */ frontmatter; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(44656);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(62640);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(8760);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(78055);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__(81407);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(60763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(88286);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(80662);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(56225);
// EXTERNAL MODULE: ./src/components/devices/useDeviceCatalog.ts
var useDeviceCatalog = __webpack_require__(77682);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(53304);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareRepos.ts
function useFirmwareRepos(showAllRepos){var bus=(0,useBus/* default */.Z)();var{0:repos,1:setRepos}=(0,react.useState)([]);var specifications=(0,useDeviceSpecifications/* default */.Z)();var deviceCatalog=(0,useDeviceCatalog/* default */.Z)();var devices=(0,useEventRaised/* default */.Z)(constants/* DEVICE_CHANGE */.RoP,bus,()=>bus.devices({announced:true,ignoreInfrastructure:true}),[]);var bootloaders=devices.filter(device=>device.bootloader);var registers=devices.filter(device=>!device.bootloader)// not a bootloader
.map(device=>{var _device$service;return(_device$service=device.service(0))===null||_device$service===void 0?void 0:_device$service.register(constants/* ControlReg.ProductIdentifier */.toU.ProductIdentifier);}).filter(reg=>!!reg);(0,useEffectAsync/* default */.Z)(/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(mounted){var repos=[];if(showAllRepos)repos=specifications.map(spec=>spec.repo);else{var productIdentifiers=[];// ask firmware registers
for(var register of registers){yield register.refresh(true);var productIdentifier=register.intValue;if(productIdentifier!==undefined&&productIdentifiers.indexOf(productIdentifier)<0)productIdentifiers.push(productIdentifier);}// ask bootloaders
for(var bootloader of bootloaders){var boot=bootloader.services({serviceClass:constants/* SRV_BOOTLOADER */.PWm})[0];var bl_announce=packet/* Packet.onlyHeader */.W.onlyHeader(constants/* BootloaderCmd.Info */.e96.Info);try{var resp=yield boot.sendCmdAwaitResponseAsync(bl_announce);var[,,,_productIdentifier]=resp.jdunpack("u32 u32 u32 u32");if(_productIdentifier!==undefined&&productIdentifiers.indexOf(_productIdentifier)<0)productIdentifiers.push(_productIdentifier);}catch(e){console.warn("bootloader product identifier failed",e);}}repos=productIdentifiers.map(fw=>{var _deviceCatalog$specif;return(_deviceCatalog$specif=deviceCatalog.specificationFromProductIdentifier(fw))===null||_deviceCatalog$specif===void 0?void 0:_deviceCatalog$specif.repo;}).filter(repo=>!!repo);}if(mounted){var urepos=(0,utils/* unique */.Tw)(repos);setRepos(urepos);}});return function(_x){return _ref.apply(this,arguments);};}(),[(0,eventsource/* dependencyId */.BX)(devices),(0,eventsource/* dependencyId */.BX)(registers),showAllRepos,specifications]);return repos;}
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(70576);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(59334);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./src/components/firmware/useFirmwareBlobs.ts + 1 modules
var useFirmwareBlobs = __webpack_require__(99360);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/firmware/LocalFileFirmwareCard.tsx
var ImportButton=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7933).then(__webpack_require__.bind(__webpack_require__, 97933)));var LOCAL_FILE_SLUG="local file";function LocalFileFirmwareCard(){var slug=LOCAL_FILE_SLUG;var{0:downloading,1:setDownloading}=(0,react.useState)(false);var{0:error,1:setError}=(0,react.useState)("");var{setFirmwareFile,firmwareBlobs}=(0,useFirmwareBlobs/* useFirmwareBlob */.x)(slug);var disabled=downloading;var version=firmwareBlobs===null||firmwareBlobs===void 0?void 0:firmwareBlobs[0].version;var handleFiles=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(files){var file=files[0];if(file){try{setDownloading(true);yield setFirmwareFile(undefined,file);}finally{setDownloading(false);}}});return function handleFiles(_x){return _ref.apply(this,arguments);};}();var handleClear=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(){try{setError("");setDownloading(true);setFirmwareFile(undefined,undefined);}finally{setDownloading(false);}});return function handleClear(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:slug}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,error&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},error),version&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body2"},"version ",/*#__PURE__*/react.createElement("code",null,version)),!!(firmwareBlobs!==null&&firmwareBlobs!==void 0&&firmwareBlobs.length)&&/*#__PURE__*/react.createElement(List/* default */.Z,{dense:true},firmwareBlobs.map(blob=>/*#__PURE__*/react.createElement(ListItem/* default */.ZP,{key:blob.productIdentifier},/*#__PURE__*/react.createElement(ListItemText/* default */.Z,{primary:blob.name,secondary:"0x"+blob.productIdentifier.toString(16)}))))),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,!downloading&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(ImportButton,{text:"Import UF2 file",onFilesUploaded:handleFiles})),!downloading&&(firmwareBlobs===null||firmwareBlobs===void 0?void 0:firmwareBlobs.length)&&/*#__PURE__*/react.createElement(Button/* default */.Z,{disabled:disabled,variant:"text","arial-label":"Clear",onClick:handleClear},"Clear")));}
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
;// CONCATENATED MODULE: ./src/components/firmware/FirmwareCardGrid.tsx
// tslint:disable-next-line: no-submodule-imports
function FirmwareCardGrid(){var{bus}=(0,react.useContext)(Context/* default */.Z);var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)();var safeBoot=(0,useChange/* default */.Z)(bus,b=>b.safeBoot);var firmwareRepos=useFirmwareRepos(safeBoot);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({},gridBreakpoints,{item:true,key:"localfile"}),/*#__PURE__*/react.createElement(LocalFileFirmwareCard,null)),firmwareRepos.map(firmwareRepo=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({},gridBreakpoints,{item:true,key:"firmwarerepo"+firmwareRepo}),/*#__PURE__*/react.createElement(FirmwareCard/* default */.Z,{slug:firmwareRepo}))));}
// EXTERNAL MODULE: ./src/components/devices/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__(73568);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(18891);
// EXTERNAL MODULE: ./src/components/firmware/FlashDeviceButton.tsx
var FlashDeviceButton = __webpack_require__(31038);
// EXTERNAL MODULE: ./src/components/firmware/useDeviceFirmwareBlob.ts
var useDeviceFirmwareBlob = __webpack_require__(34312);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
;// CONCATENATED MODULE: ./src/components/UpdateDeviceList.tsx
function UpdateDeviceCard(props){var{device}=props;var blob=(0,useDeviceFirmwareBlob/* default */.Z)(device);return/*#__PURE__*/react.createElement(DeviceCard/* default */.Z,{device:device,showFirmware:true,showReset:true// tslint:disable-next-line: react-this-binding-issue
,action:/*#__PURE__*/react.createElement(FlashDeviceButton/* FlashDeviceButton */.X,{device:device,blob:blob})});}function UpdateDeviceList(){var{bus}=(0,react.useContext)(Context/* default */.Z);var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)(3);var safeBoot=(0,useChange/* default */.Z)(bus,b=>b.safeBoot);var devices=(0,useDevices/* default */.Z)({announced:true,ignoreInfrastructure:true,ignoreSimulators:true},[safeBoot]).filter((dev,_,devs)=>safeBoot||// show all devices
!dev.bootloader||// show non-bootloader devices
!devs.some(d=>(0,spec/* isDualDeviceId */.Fw)(d.deviceId,dev.deviceId))// show bootloaders which don't have the application device listed
);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},devices.map(device=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:device.id,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(UpdateDeviceCard,{device:device}))));}
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(24973);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DeleteForever.js
var DeleteForever = __webpack_require__(8364);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
// EXTERNAL MODULE: ./src/components/ui/AlertSwitch.tsx
var AlertSwitch = __webpack_require__(89086);
// EXTERNAL MODULE: ./src/jacdac/useProxy.ts
var useProxy = __webpack_require__(38665);
;// CONCATENATED MODULE: ./src/components/firmware/SafeBootAlert.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: match-default-export-name tslint:disable-next-line: no-submodule-imports
function SafeBootAlert(props){var{proxy}=props;var{bus}=(0,react.useContext)(Context/* default */.Z);var{db}=(0,react.useContext)(DbContext/* default */.ZP);var{enqueueSnackbar}=(0,useSnackbar/* default */.Z)();var safeBoot=(0,useChange/* default */.Z)(bus,_=>_.safeBoot);var firmwares=db===null||db===void 0?void 0:db.firmwares;var handleRecovery=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){return bus.safeBoot=!bus.safeBoot;});return function handleRecovery(){return _ref.apply(this,arguments);};}();var handleClear=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(){yield firmwares.clear();enqueueSnackbar("firmwares cleared","info");});return function handleClear(){return _ref2.apply(this,arguments);};}();(0,useProxy/* default */.Z)(safeBoot||proxy);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(AlertSwitch/* default */.Z,{severity:"info",title:"recovery mode",checked:safeBoot,onChecked:handleRecovery},"If your module is malfunctioning from the start, you can flash it in bootloader mode. Turn on recovery mode and unplug/replug any malfunctioning device to switch it to bootloader mode (glowing status LED). Once your module is flashed, turn off recovery mode and unplug/replug your module again."),safeBoot&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"warning"},/*#__PURE__*/react.createElement(Button/* default */.Z,{size:"small",variant:"outlined",disabled:!firmwares,onClick:handleClear,startIcon:/*#__PURE__*/react.createElement(DeleteForever/* default */.Z,null)},"clear cache"),/*#__PURE__*/react.createElement(Box/* default */.Z,{mr:1},/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"caption"},"Delete all firmware cached in the browser. The firmware will have to be deleted again from this interface."))));}
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(33797);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(70970);
;// CONCATENATED MODULE: ./src/components/select/SelectDevice.tsx
function SelectDevice(props){var{bus}=(0,react.useContext)(Context/* default */.Z);var{devices,deviceId,onChange}=props;var handleDeviceChange=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(ev){var id=ev.target.value;onChange(id);var device=bus.node(id);yield device===null||device===void 0?void 0:device.identify();});return function handleDeviceChange(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z,{helperText:"choose a device",value:deviceId,onChange:handleDeviceChange,disabled:!(devices!==null&&devices!==void 0&&devices.length)},devices===null||devices===void 0?void 0:devices.map(dev=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:dev.id,value:dev.id},dev.describe())));}
;// CONCATENATED MODULE: ./src/components/firmware/ManualFirmwareAlert.tsx
// tslint:disable-next-line: no-submodule-imports
var fwid=fw=>fw?fw.store+","+fw.productIdentifier+","+fw.version:"";function ManualFirmware(){var _devices$;var{bus}=(0,react.useContext)(Context/* default */.Z);var devices=(0,useDevices/* default */.Z)({announced:true,ignoreInfrastructure:true,ignoreSimulators:true});var firmwares=(0,useChange/* default */.Z)(bus,_=>_===null||_===void 0?void 0:_.firmwareBlobs);var stores=(0,utils/* unique */.Tw)(firmwares.map(fw=>fw.store));var{0:deviceId,1:setDeviceId}=(0,react.useState)(devices===null||devices===void 0?void 0:(_devices$=devices[0])===null||_devices$===void 0?void 0:_devices$.id);var{0:firmwareId,1:setFirmwareId}=(0,react.useState)(fwid(firmwares===null||firmwares===void 0?void 0:firmwares[0]));var{0:store,1:setStore}=(0,react.useState)((stores===null||stores===void 0?void 0:stores[0])||"");var handleDeviceChange=newId=>setDeviceId(newId);var handleStoreChange=ev=>{var store=ev.target.value;setStore(store);};var handleFirmwareChange=ev=>{var id=ev.target.value;setFirmwareId(id);};var device=bus.node(deviceId);var blob=firmwares.find(fw=>fwid(fw)===firmwareId);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(SelectDevice,{devices:devices,deviceId:deviceId,onChange:handleDeviceChange})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"row",spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z,{helperText:"choose a firmware",value:store,onChange:handleStoreChange},stores===null||stores===void 0?void 0:stores.map(store=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:store,value:store},store)))),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z,{helperText:"choose a module",value:firmwareId,onChange:handleFirmwareChange},firmwares===null||firmwares===void 0?void 0:firmwares.filter(fw=>fw.store===store).map(fw=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:fwid(fw),value:fwid(fw)},fw.name," \xA0",/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},fw.version,", \xA0","0x"+fw.productIdentifier.toString(16)))))))),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(FlashDeviceButton/* FlashDeviceButton */.X,{device:device,blob:blob,ignoreFirmwareCheck:true})));}function ManualFirmwareAlert(){var bus=(0,useBus/* default */.Z)();var safeBoot=(0,useChange/* default */.Z)(bus,_=>_.safeBoot);var{0:enabled,1:setEnabled}=(0,react.useState)(false);var handleToggle=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){var v=!enabled;setEnabled(v);});return function handleToggle(){return _ref.apply(this,arguments);};}();if(!safeBoot)return null;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(AlertSwitch/* default */.Z,{severity:"info",checked:enabled,onChecked:handleToggle,title:"manual mode"},"Manually select which firmware to upload on your device."),enabled&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"warning"},/*#__PURE__*/react.createElement(ManualFirmware,null)));}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(99834);
// EXTERNAL MODULE: ./node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(93155);
// EXTERNAL MODULE: ./src/components/firmware/FirmwareLoader.tsx
var FirmwareLoader = __webpack_require__(13672);
;// CONCATENATED MODULE: ./src/components/tools/Flash.tsx
// tslint:disable-next-line: no-submodule-imports
function FlashDiagnostics(){var{bus}=(0,react.useContext)(Context/* default */.Z);var blobs=(0,useChange/* default */.Z)(bus,_=>_===null||_===void 0?void 0:_.firmwareBlobs);var stores=(0,utils/* groupBy */.vM)(blobs,blob=>blob.store);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},Object.entries(stores).map(_ref=>{var[store,blobs]=_ref;return/*#__PURE__*/react.createElement(react.Fragment,{key:store},/*#__PURE__*/react.createElement(GridHeader/* default */.Z,{title:store}),blobs===null||blobs===void 0?void 0:blobs.map(blob=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:blob.store+blob.productIdentifier},/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:blob.name,subheader:blob.version}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,"pid: 0x",blob.productIdentifier.toString(16),", ",blob.pages.length," pages")))));}));}function Flash(){var _devices$filter;var{bus}=(0,react.useContext)(Context/* default */.Z);var{0:tab,1:setTab}=(0,react.useState)(0);var{throttled}=(0,useFirmwareBlobs/* default */.Z)();var devices=(0,useChange/* default */.Z)(bus,_=>_.devices({physical:true}));var handleTabChange=(event,newValue)=>{setTab(newValue);};return/*#__PURE__*/react.createElement(Box/* default */.Z,{mb:2},throttled&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"Try again later..."),"Oops, it looks like we have been polling firmware too much from GitHub. Please try again later."),(devices===null||devices===void 0?void 0:(_devices$filter=devices.filter(d=>!d.bootloader))===null||_devices$filter===void 0?void 0:_devices$filter.length)>constants/* FLASH_MAX_DEVICES */.XpI&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},/*#__PURE__*/react.createElement(AlertTitle/* default */.Z,null,"Too many connected devices"),"Please unplug some of your devices before updating."),/*#__PURE__*/react.createElement(ConnectAlert/* default */.Z,null),/*#__PURE__*/react.createElement(Tabs/* default */.Z,{value:tab,onChange:handleTabChange,"aria-label":"Update firmware of modules"},/*#__PURE__*/react.createElement(Tab/* default */.Z,{label:"Updates"}),/*#__PURE__*/react.createElement(Tab/* default */.Z,{label:"Firmwares"})),/*#__PURE__*/react.createElement(TabPanel/* default */.Z,{value:tab,index:0},/*#__PURE__*/react.createElement(UpdateDeviceList,null)),/*#__PURE__*/react.createElement(TabPanel/* default */.Z,{value:tab,index:1},/*#__PURE__*/react.createElement(FirmwareCardGrid,null)),/*#__PURE__*/react.createElement(SafeBootAlert,null),/*#__PURE__*/react.createElement(ManualFirmwareAlert,null),flags/* Flags.diagnostics */.v.diagnostics&&/*#__PURE__*/react.createElement(FlashDiagnostics,null),/*#__PURE__*/react.createElement(FirmwareLoader/* default */.Z,null));}
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/pages/tools/updater.tsx


var frontmatter = {
  title: "Firmware Updater",
  description: "Upgrade devices to the latest firmware version."
};

var updater_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, Object.assign({}, props, frontmatter));
function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Firmware Updater"), /*#__PURE__*/react.createElement("p", null, "This page allows you to update your Jacdac module with new firmware. Find the latest UF2 firmware file from your manufacturer and import it with the button below."), /*#__PURE__*/react.createElement(Flash, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-updater-tsx-fa894e3b1d7183d0b66c.js.map