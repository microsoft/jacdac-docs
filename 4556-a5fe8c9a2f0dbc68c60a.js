"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4556],{

/***/ 54556:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardSoundSpectrum; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Mic.js
var Mic = __webpack_require__(30642);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/components/hooks/useAudioAnalyzer.ts
var useAudioAnalyzer = __webpack_require__(64902);
;// CONCATENATED MODULE: ./src/components/hooks/useMicrophoneSpectrum.ts
function useMicrophoneSpectrum(enabled,options){var{analyser,onClickActivateMicrophone,closeMicrophone}=(0,useAudioAnalyzer/* useMicrophoneAnalyzer */.K)(options);var frequencies=(0,react.useRef)(new Uint8Array(0));(0,react.useEffect)(()=>{if(!enabled)closeMicrophone();},[enabled]);return{onClickActivateMicrophone,spectrum:()=>{var a=analyser();if(!a)return frequencies.current;if(frequencies.current.length!==a.frequencyBinCount)frequencies.current=new Uint8Array(a.frequencyBinCount);a===null||a===void 0?void 0:a.getByteFrequencyData(frequencies.current);return frequencies.current;}};}
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(14955);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
;// CONCATENATED MODULE: ./src/components/widgets/BytesBarGraphWidget.tsx
function BytesBarGraphWidget(props){var{register,size,visible}=props;var server=(0,useServiceServer/* default */.Z)(register.service);var color=server?"secondary":"primary";var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var pathRef=(0,react.useRef)();var w=128;var h=w/1.612;var m=2;var dy=(h-2*m)/0xff;(0,react.useEffect)(()=>visible?register===null||register===void 0?void 0:register.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>{// render outside of react loop
var{current}=pathRef;var bins=register.data;if(!current||!bins)return;var dx=(w-2*m)/bins.length;var dw=(w-2*m)/(bins.length*6);var d="M "+m+" "+(h-m)+" ";for(var i=0;i<bins.length;++i){var bin=bins[i];d+=" v "+-dy*bin+" h "+(dx-dw)+" v "+dy*bin+" h "+dw;}d+=" z";current.setAttribute("d",d);}):undefined,[register,visible,pathRef.current]);return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h,size:size,background:background},/*#__PURE__*/react.createElement("path",{fill:active,stroke:controlBackground,strokeWidth:m/2,ref:pathRef}));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
// EXTERNAL MODULE: ./src/components/ui/MicrophoneSettingsButton.tsx
var MicrophoneSettingsButton = __webpack_require__(87197);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoundSpectrum.tsx
function HostMicrophoneButton(props){var{server,service,visible}=props;var enabledRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.Enabled */.w4N.Enabled);var minDecibelsRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.MinDecibels */.w4N.MinDecibels);var maxDecibelsRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.MaxDecibels */.w4N.MaxDecibels);var fftPow2SizeRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.FftPow2Size */.w4N.FftPow2Size);var smoothingTimeConstantRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.SmoothingTimeConstant */.w4N.SmoothingTimeConstant);var enabled=(0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister,props);var[minDecibels]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minDecibelsRegister,props);var[maxDecibels]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxDecibelsRegister,props);var[fftPow2Size]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(fftPow2SizeRegister,props);var fftSize=1<<(fftPow2Size||5);var[smoothingTimeConstant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(smoothingTimeConstantRegister,props);var{spectrum,onClickActivateMicrophone}=useMicrophoneSpectrum(enabled&&!!server,{fftSize,smoothingTimeConstant,minDecibels,maxDecibels});var title=enabled?"Stop microphone":"Start microphone";var handleClick=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){if(!enabled&&server)yield onClickActivateMicrophone();yield enabledRegister.sendSetBoolAsync(!enabled,true);});return function handleClick(){return _ref.apply(this,arguments);};}();// update volume on demand
(0,react.useEffect)(()=>visible&&enabled?server===null||server===void 0?void 0:server.subscribe(constants/* REFRESH */.RGM,()=>{var v=spectrum===null||spectrum===void 0?void 0:spectrum();if(v!==undefined){server.reading.setValues([v],true);}}):undefined,[server,spectrum,visible]);return/*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z,{"aria-label":title,title:title,indeterminate:enabled,onClick:handleClick},/*#__PURE__*/react.createElement(Mic/* default */.Z,null));}function DashboardSoundSpectrum(props){var{service,visible}=props;var frequencyBinsRegister=(0,useRegister/* default */.Z)(service,constants/* SoundSpectrumReg.FrequencyBins */.w4N.FrequencyBins);var server=(0,useServiceServer/* default */.Z)(service);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"column"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(BytesBarGraphWidget,{visible:visible,register:frequencyBinsRegister})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(HostMicrophoneButton,{service:service,server:server,visible:visible})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(MicrophoneSettingsButton/* default */.Z,null)))));}

/***/ })

}]);
//# sourceMappingURL=4556-a5fe8c9a2f0dbc68c60a.js.map