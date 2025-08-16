"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9729],{

/***/ 68264:
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"
}), 'CloudDone');
exports.Z = _default;

/***/ }),

/***/ 96413:
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"
}), 'CloudOff');
exports.Z = _default;

/***/ }),

/***/ 54970:
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), 'CloudUpload');
exports.Z = _default;

/***/ }),

/***/ 37796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareFlashInstructions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function FirmwareFlashInstructions(props){var{specification}=props;var{bootloader}=specification||{};var{driveName,sequence,ledAnimation,firmwareUploader}=bootloader||{};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,sequence==="reset"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Reset (RST)"),"\xA0 button."),sequence==="reset-boot"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Reset (RST)"),"\xA0 then \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Bootloader (BOOT)"),"\xA0 button."),sequence==="boot-power"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Unplug the device, press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Bootloader (BOOT)"),"\xA0 button, plug the device."),ledAnimation==="blue-glow"&&driveName&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"You should see the status LED glow in Blue and the\xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,driveName),"\xA0 drive should appear."),driveName&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Drag and drop the file into the\xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,driveName),"\xA0 drive."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Once the file is copied, the device will automatically restart with the new firmware.")),firmwareUploader&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Open the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:firmwareUploader,rel:"noreferrer",target:"_blank"},"Firmware Uploader"),"\xA0 and follow the instruction to upload the firmware."));}

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

/***/ 64776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Head": function() { return /* binding */ device_tester_Head; },
  "default": function() { return /* binding */ Page; },
  "frontmatter": function() { return /* binding */ frontmatter; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 8 modules
var Tabs = __webpack_require__(44656);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(62640);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(18891);
// EXTERNAL MODULE: ./src/jacdac/useDeviceProductIdentifier.ts
var useDeviceProductIdentifier = __webpack_require__(31246);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/components/testdom/filters.ts
var filters = __webpack_require__(81140);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(73598);
// EXTERNAL MODULE: ./src/components/testdom/TestTreeView.tsx
var TestTreeView = __webpack_require__(12368);
// EXTERNAL MODULE: ./src/components/firmware/FlashDeviceButton.tsx
var FlashDeviceButton = __webpack_require__(31038);
// EXTERNAL MODULE: ./src/components/firmware/useDeviceFirmwareBlob.ts
var useDeviceFirmwareBlob = __webpack_require__(34312);
// EXTERNAL MODULE: ./src/components/testdom/DeviceTestExporter.tsx
var DeviceTestExporter = __webpack_require__(77303);
// EXTERNAL MODULE: ./jacdac-ts/src/testdom/spec.ts
var spec = __webpack_require__(40914);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CloudUpload.js
var CloudUpload = __webpack_require__(54970);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CloudDone.js
var CloudDone = __webpack_require__(68264);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CloudOff.js
var CloudOff = __webpack_require__(96413);
;// CONCATENATED MODULE: ./src/components/testdom/TestUploadStateIcon.tsx
function TestUploadStateIcon(props){var{node}=props;var state=(0,useChange/* default */.Z)(node,_=>_===null||_===void 0?void 0:_.uploadState);switch(state){case spec/* TestUploadState.Uploading */.k.Uploading:return/*#__PURE__*/react.createElement(CloudUpload/* default */.Z,{"aria-label":"uploading",color:"disabled"});case spec/* TestUploadState.Uploaded */.k.Uploaded:return/*#__PURE__*/react.createElement(CloudDone/* default */.Z,{"aria-label":"uploaded",color:"success"});case spec/* TestUploadState.UploadError */.k.UploadError:return/*#__PURE__*/react.createElement(CloudOff/* default */.Z,{"aria-label":"upload error",color:"error"});default:return null;}}
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
;// CONCATENATED MODULE: ./src/components/testdom/TestUploadStateMessage.tsx
function TestUploadStateMessage(props){var{node}=props;var state=(0,useChange/* default */.Z)(node,_=>_===null||_===void 0?void 0:_.uploadState);var msg={[spec/* TestUploadState.Uploaded */.k.Uploaded]:"uploaded",[spec/* TestUploadState.UploadError */.k.UploadError]:"upload error",[spec/* TestUploadState.Uploading */.k.Uploading]:"uploading..."}[state];if(!msg)return null;return/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"subtitle2"},msg);}
;// CONCATENATED MODULE: ./src/components/testdom/DeviceTestItem.tsx
function DeviceTestItem(props){var{device,test}=props;var blob=(0,useDeviceFirmwareBlob/* default */.Z)(device);var uploadState=(0,useChange/* default */.Z)(test,_=>_===null||_===void 0?void 0:_.uploadState);(0,DeviceTestExporter/* useDeviceTestExporter */.u)(test);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z,{key:device.id,device:device,showAvatar:true,showHeader:true,showReset:true}),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"column",spacing:1},blob&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(FlashDeviceButton/* FlashDeviceButton */.X,{device:device,blob:blob,hideUpToDate:true})),test&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(TestTreeView/* default */.Z,{test:test,skipPanel:true,defaultExpanded:true})),uploadState!==spec/* TestUploadState.Local */.k.Local&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(TestUploadStateIcon,{node:test})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(TestUploadStateMessage,{node:test})))))));}
// EXTERNAL MODULE: ./jacdac-ts/src/testdom/compiler.ts
var compiler = __webpack_require__(63485);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
;// CONCATENATED MODULE: ./src/components/testdom/useDeviceTest.ts
function useDeviceTest(device,deviceSpec,oracles){var bus=(0,useBus/* default */.Z)();var{0:test,1:setTest}=(0,react.useState)(undefined);(0,react.useEffect)(()=>{if(deviceSpec){try{var p=(0,compiler/* createDeviceTest */.ux)(bus,deviceSpec,oracles);if(p)p.device=device;setTest(p);return()=>p.device=undefined;}catch(e){console.debug(e);}}setTest(undefined);return undefined;},[deviceSpec,oracles]);return test;}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var jdom_spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 7 modules
var DashboardDevice = __webpack_require__(77775);
;// CONCATENATED MODULE: ./src/components/testdom/PowerSupplySection.tsx
function powerSupplyServiceFilter(service){return[constants/* SRV_POWER_SUPPLY */.MUc,constants/* SRV_DC_VOLTAGE_MEASUREMENT */.ULo,constants/* SRV_DC_CURRENT_MEASUREMENT */.ldi,constants/* SRV_RELAY */.E4D].indexOf(service.serviceClass)>-1;}function PowerSupplySection(){var sectionId=(0,react.useId)();var devices=(0,useDevices/* default */.Z)({serviceClass:constants/* SRV_POWER_SUPPLY */.MUc,announced:true}).filter(filters/* isModuleTester */.Zx);if(!(devices!==null&&devices!==void 0&&devices.length))return null;return/*#__PURE__*/react.createElement("section",{id:sectionId},/*#__PURE__*/react.createElement("h2",null,"Power Supply"),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},devices.map(device=>/*#__PURE__*/react.createElement(DashboardDevice/* default */.Z,{key:device.nodeId,device:device,serviceFilter:powerSupplyServiceFilter}))));}
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(8760);
// EXTERNAL MODULE: ./src/components/ui/AlertSwitch.tsx
var AlertSwitch = __webpack_require__(89086);
// EXTERNAL MODULE: ./src/jacdac/useProxy.ts
var useProxy = __webpack_require__(38665);
// EXTERNAL MODULE: ./src/jacdac/useBusWithMode.ts
var useBusWithMode = __webpack_require__(96290);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(10431);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(86160);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(68320);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./jacdac-ts/src/testdom/testrules.ts
var testrules = __webpack_require__(45665);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(99834);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/shell/Head.tsx
var Head = __webpack_require__(94597);
;// CONCATENATED MODULE: ./src/pages/tools/device-tester.tsx























var FACTORY_MODE_STORAGE_KEY = "device_tester_factory";
var EXPORT_MODE_STORAGE_KEY = "device_tester_export";
var ORACLE_DEVICES_STORAGE_KEY = "device_tester_oracles";

function DeviceItem(props) {
  var {
    device,
    factory,
    oracles
  } = props;
  var productIdentifier = (0,useDeviceProductIdentifier/* default */.Z)(device);
  var testSpec = (0,useChange/* default */.Z)(device, _ => _ && !_.firmwareUpdater && {
    productIdentifier,
    factory,
    services: device.serviceClasses.filter(filters/* filterTestService */.re).map(sc => ({
      serviceClass: sc
    }))
  }, [productIdentifier, factory], (a, b) => JSON.stringify(a) === JSON.stringify(b));
  var test = useDeviceTest(device, testSpec, oracles);
  if (!device) return null;
  return /*#__PURE__*/react.createElement(DeviceTestItem, {
    test: test,
    device: device
  });
}

var frontmatter = {
  title: "Device Tester",
  description: "Validating services in devices. Designed for manual or factory floor testing."
};

var device_tester_Head = props => /*#__PURE__*/react.createElement(Head/* default */.Z, Object.assign({}, props, frontmatter));
function Page() {
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var {
    0: proxy,
    1: setProxy
  } = (0,react.useState)(false);
  var [factory, setFactory] = (0,useLocalStorage/* default */.Z)(FACTORY_MODE_STORAGE_KEY, false);
  var [exporter, setExporter] = (0,useLocalStorage/* default */.Z)(EXPORT_MODE_STORAGE_KEY, false);
  var [oracleDeviceIds, setOracleDeviceIds] = (0,useLocalStorage/* default */.Z)(ORACLE_DEVICES_STORAGE_KEY, []); // don't let a brain interfere

  (0,useProxy/* default */.Z)(proxy); // auto-connect

  (0,useBusWithMode/* default */.Z)({
    autoConnect: true
  });

  var handleSetFactory = checked => setFactory(checked);

  var handleSetExporter = checked => setExporter(checked);

  var handleSetProxy = checked => setProxy(checked);

  var devices = (0,useDevices/* default */.Z)({
    physical: !flags/* Flags.diagnostics */.v.diagnostics,
    announced: true,
    ignoreInfrastructure: true
  }).filter((dev, _, devs) => !dev.bootloader || // show non-bootloader devices
  !devs.some(d => (0,jdom_spec/* isDualDeviceId */.Fw)(d.deviceId, dev.deviceId)) // show bootloaders which don't have the application device listed
  ).filter(filters/* filterTestDevice */.zm).sort((l, r) => -(l.created - r.created));
  var [deviceOracles, devicesNoOracles] = (0,utils/* splitFilter */.ap)(devices, d => oracleDeviceIds.includes(d.deviceId));
  var oracles = (0,react.useMemo)(() => (0,utils/* arrayConcatMany */.ue)(devices === null || devices === void 0 ? void 0 : devices.filter(d => oracleDeviceIds.includes(d.deviceId)).map(d => d.services({
    sensor: true
  }).map(_ref => {
    var {
      device,
      serviceClass,
      serviceIndex
    } = _ref;
    return {
      deviceId: device.deviceId,
      serviceClass,
      serviceIndex,
      tolerance: (0,testrules/* resolveReadingTolerage */.Uo)(serviceClass)
    };
  }))), [devices, oracleDeviceIds]);

  var handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  var handleCheckOracle = device => () => {
    var newOracles = oracleDeviceIds.slice(0);
    var i = newOracles.indexOf(device.deviceId);
    if (i > -1) newOracles.splice(i, 1);else newOracles.push(device.deviceId);
    setOracleDeviceIds(newOracles);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Device Tester"), /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Testing services in devices"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Devices"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Oracles"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement(PowerSupplySection, null), devicesNoOracles !== null && devicesNoOracles !== void 0 && devicesNoOracles.length ? /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, devicesNoOracles === null || devicesNoOracles === void 0 ? void 0 : devicesNoOracles.map(device => /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    key: device.id,
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(DeviceItem, {
    device: device,
    factory: factory,
    oracles: oracles
  })))) : /*#__PURE__*/react.createElement("p", null, "Connect your device and follow the instructions to run a compliance test."), !!(deviceOracles !== null && deviceOracles !== void 0 && deviceOracles.length) && /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: "Oracles"
  }), deviceOracles.map(d => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    device: d,
    key: d.id,
    showAvatar: true,
    showHeader: true,
    showReset: true
  }))), /*#__PURE__*/react.createElement(AlertSwitch/* default */.Z, {
    severity: "success",
    title: "factory mode",
    checked: factory,
    onChecked: handleSetFactory
  }, "Tests should be fast and automated in factory mode. Manual tests are ", /*#__PURE__*/react.createElement("b", null, "disabled"), "."), /*#__PURE__*/react.createElement(AlertSwitch/* default */.Z, {
    severity: "info",
    title: "upload test results",
    checked: exporter,
    onChecked: handleSetExporter
  }, "Automatically upload test results to a web service.", exporter && /*#__PURE__*/react.createElement(DeviceTestExporter/* default */.Z, null)), /*#__PURE__*/react.createElement(AlertSwitch/* default */.Z, {
    severity: "info",
    title: "automatic dongle mode",
    checked: proxy,
    onChecked: handleSetProxy
  }, "Force brains to enter dongle mode, to avoid application interfere with testing.")), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: 12
  }, "Use known device readings as oracles for the device under tests (within tolerance)."), devices === null || devices === void 0 ? void 0 : devices.map(device => /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    key: device.id,
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    key: device.id,
    device: device,
    showAvatar: true,
    showHeader: true,
    showReset: true
  }), /*#__PURE__*/react.createElement(Grid/* default */.ZP, {
    item: true,
    xs: true
  }, /*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z, {
    label: "reading oracle",
    checked: oracleDeviceIds.includes(device.deviceId),
    onChange: handleCheckOracle(device)
  }))))))), /*#__PURE__*/react.createElement("p", null, "Read the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU, {
    to: "/ddk/design/manufacturing/"
  }, "Device Tester documentation"), "."));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-device-tester-tsx-27753a24872a3b24c397.js.map