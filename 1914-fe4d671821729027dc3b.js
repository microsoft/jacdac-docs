"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1914],{

/***/ 81914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardSoilMoisture; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetSize.ts
var useWidgetSize = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 4 modules
var Slider = __webpack_require__(92486);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
;// CONCATENATED MODULE: ./src/components/widgets/SoilMoistureWidget.tsx
function SoilMoistureWidget(props){var{value,color,size}=props;var{active,background,controlBackground,textProps}=(0,useWidgetTheme/* default */.Z)(color);var clipId=(0,react.useId)();var hasValue=!isNaN(value);var tvalue=hasValue?Math.round(value*100)+"%":"--";var w=5;var h=9.488;var cm=3.3;var ch=(h-cm)*((0.12+value)/1.12);return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h,size:size},hasValue&&/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("clipPath",{id:clipId},/*#__PURE__*/react.createElement("rect",{x:0,y:h-ch,width:w,height:ch}))),/*#__PURE__*/react.createElement("path",{fill:background,d:"M4.812 7.997V.5a.5.5 0 00-.5-.5H.689a.5.5 0 00-.5.5v7.497l.503 1.491h.466l.503-1.491V3.373a.792.792 0 01.84-.791.792.792 0 01.838.79v4.625l.503 1.491h.466z"}),/*#__PURE__*/react.createElement("path",{fill:active,d:"M4.812 7.997V.5a.5.5 0 00-.5-.5H.689a.5.5 0 00-.5.5v7.497l.503 1.491h.466l.503-1.491V3.373a.792.792 0 01.84-.791.792.792 0 01.838.79v4.625l.503 1.491h.466z",clipPath:"url(#"+clipId+")"}),/*#__PURE__*/react.createElement("path",{fill:controlBackground,d:"M4.075 8.548a.075.075 0 100-.15.075.075 0 100 .15zM4.425 7.281a.075.075 0 100-.15.075.075 0 100 .15zM4.425 5.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 4.614a.075.075 0 100-.15.075.075 0 100 .15zM3.725 3.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 5.281a.075.075 0 100-.15.075.075 0 100 .15zM4.425 6.614a.075.075 0 100-.15.075.075 0 100 .15zM4.425 7.948a.075.075 0 100-.15.075.075 0 100 .15zM3.725 7.281a.075.075 0 100-.15.075.075 0 100 .15zM3.725 5.948a.075.075 0 100-.15.075.075 0 100 .15zM4.425 4.614a.075.075 0 100-.15.075.075 0 100 .15zM4.425 3.948a.075.075 0 100-.15.075.075 0 100 .15zM4.425 5.281a.075.075 0 100-.15.075.075 0 100 .15zM3.725 6.614a.075.075 0 100-.15.075.075 0 100 .15zM3.725 7.948a.075.075 0 100-.15.075.075 0 100 .15zM.925 8.548a.075.075 0 100-.15.075.075 0 100 .15zM.575 7.281a.075.075 0 100-.15.075.075 0 100 .15zM.575 5.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 4.614a.075.075 0 100-.15.075.075 0 100 .15zM1.275 3.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 5.281a.075.075 0 100-.15.075.075 0 100 .15zM.575 6.614a.075.075 0 100-.15.075.075 0 100 .15zM.575 7.948a.075.075 0 100-.15.075.075 0 100 .15zM1.275 7.281a.075.075 0 100-.15.075.075 0 100 .15zM1.275 5.948a.075.075 0 100-.15.075.075 0 100 .15zM.575 4.614a.075.075 0 100-.15.075.075 0 100 .15zM.575 3.948a.075.075 0 100-.15.075.075 0 100 .15zM.575 5.281a.075.075 0 100-.15.075.075 0 100 .15zM1.275 6.614a.075.075 0 100-.15.075.075 0 100 .15zM1.275 7.948a.075.075 0 100-.15.075.075 0 100 .15z"}),/*#__PURE__*/react.createElement("text",Object.assign({x:w/2,y:"1.4",fontSize:"1",strokeWidth:".026"},textProps,{fill:"#fff"}),tvalue));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoilMoisture.tsx
function DashboardSoilMoisture(props){var{service,services,variant,controlled}=props;var moistureReg=(0,useRegister/* default */.Z)(service,constants/* SoilMoistureReg.Moisture */.Qrk.Moisture);var[value]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(moistureReg,props);var widgetSize=(0,useWidgetSize/* default */.Z)(variant,services===null||services===void 0?void 0:services.length);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var sliderId=(0,react.useId)();var hasValue=!isNaN(value);var onChange=(event,newValue)=>{var svalue=newValue;server===null||server===void 0?void 0:server.reading.setValues([svalue]);moistureReg.refresh();};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(SoilMoistureWidget,{value:value,color:color,size:widgetSize})),(server||!controlled)&&hasValue&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:true},/*#__PURE__*/react.createElement(Slider/* default */.ZP,{id:sliderId,"aria-label":"moisture",valueLabelDisplay:"off",min:0,max:1,step:0.05,value:value,onChange:onChange,color:color})));}

/***/ })

}]);
//# sourceMappingURL=1914-fe4d671821729027dc3b.js.map