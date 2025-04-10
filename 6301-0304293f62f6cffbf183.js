"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6301],{

/***/ 36301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardServo; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__(22907);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 4 modules
var servers = __webpack_require__(43850);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 4 modules
var Slider = __webpack_require__(92486);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__(15073);
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__(68455);
;// CONCATENATED MODULE: ./src/components/widgets/ServoWidget.tsx
function ServoWidget(props){var{widgetSize,toggleOff,angle,offset,color,enabled,rotationRate,visible}=props;var{background,controlBackground,active,textPrimary,textProps}=(0,useWidgetTheme/* default */.Z)(color);var continuous=rotationRate!==undefined;var offsetRef=(0,react.useRef)(0);var armRef=(0,react.useRef)();var textRef=(0,react.useRef)();var cx=78;var cy=55;var a=enabled?angle+(offset||0):90;var transform="rotate("+(-a+90)+", "+cx+", "+cy+")";var h=111.406;var w=158.50195;var pr=14;var pri=6;var text=enabled?Math.round(a)+"\xB0":"off";(0,useAnimationFrame/* default */.Z)(continuous&&enabled&&visible&&rotationRate!==undefined?time=>{var arm=armRef.current;if(!arm)return;var text=textRef.current;var offset=offsetRef.current;offset=(offset+time/1000*rotationRate)%360;offsetRef.current=offset;var transform="rotate("+offset+", "+cx+", "+cy+")";arm.setAttribute("transform",transform);text.childNodes[0].nodeValue=Math.round(rotationRate/360*60)+"rpm";return true;}:undefined,[continuous,visible,enabled,rotationRate]);return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{title:"servo at angle "+angle,width:w,height:h,size:widgetSize},/*#__PURE__*/react.createElement("rect",{fill:background,x:0,y:10.687,width:158.62,height:89.75,rx:4,ry:4}),/*#__PURE__*/react.createElement("path",{fill:controlBackground,d:"M125.545 55.641c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"}),/*#__PURE__*/react.createElement("path",{ref:armRef,fill:enabled?active:background,stroke:active,transform:transform,d:"M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"}),/*#__PURE__*/react.createElement("text",Object.assign({ref:textRef},textProps,{x:w/2,y:30,textAnchor:"middle",fill:textPrimary}),text),toggleOff&&/*#__PURE__*/react.createElement(PowerButton/* default */.Z,{r:pr,ri:pri,cx:w-pr-4,cy:pr+14,color:color,strokeWidth:1.5,off:!enabled,onClick:toggleOff}));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardRegisterValueFallback.tsx
var DashboardRegisterValueFallback = __webpack_require__(47644);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServo.tsx
function useActualAngle(service,visible){var angleRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.Angle */.pmu.Angle);var[angle]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(angleRegister,{visible});var actualAngleRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.ActualAngle */.pmu.ActualAngle);var[actualAngle]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(actualAngleRegister,{visible});// sec/60deg
var responseSpeedRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.ResponseSpeed */.pmu.ResponseSpeed);var[responseSpeed=servers/* SG90_RESPONSE_SPEED */.$]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(responseSpeedRegister,{visible});var rotationalSpeed=60/responseSpeed;var computedAngle=(0,useThrottledValue/* default */.Z)(angle,rotationalSpeed);return actualAngle!==undefined?actualAngle:computedAngle;}function DashboardServo(props){var{service,visible}=props;var enabledRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.Enabled */.pmu.Enabled);var enabled=(0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister,props);var angleRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.Angle */.pmu.Angle);var angle=useActualAngle(service,visible);var offsetRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.Offset */.pmu.Offset);var[offset]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(offsetRegister,props);var clientVariantRegister=(0,useRegister/* default */.Z)(service,constants/* BaseReg.ClientVariant */.vCn.ClientVariant);var[clientVariant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(clientVariantRegister,props);var minAngleRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.MinAngle */.pmu.MinAngle);var[minAngle]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minAngleRegister,props);var maxAngleRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.MaxAngle */.pmu.MaxAngle);var[maxAngle]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxAngleRegister,props);var responseSpeedRegister=(0,useRegister/* default */.Z)(service,constants/* ServoReg.ResponseSpeed */.pmu.ResponseSpeed);var[responseSpeed=servers/* SG90_RESPONSE_SPEED */.$]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(responseSpeedRegister,{visible});var server=(0,useServiceServer/* default */.Z)(service);if(angle===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:angleRegister});if(minAngle===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:minAngleRegister});if(maxAngle===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:maxAngleRegister});var rotationalSpeed=60/responseSpeed;var continuous=/cont=1/.test(clientVariant);var throttle=(angle-minAngle)/(maxAngle-minAngle)*200-100;var color=server?"secondary":"primary";var toggleOff=()=>enabledRegister.sendSetBoolAsync(!enabled,true);var widgetSize="clamp(6rem, 16vw, 16vh)";var readOnly=false;var label=continuous?"Throttle (%)":"Angle";var angleFormat=a=>""+Math.round(a);var continuousFormat=throttle=>{return Math.round(throttle)+"%";};var handleContinuousChange=(ev,newValue)=>{var newAngle=(0.5+newValue/200)*(maxAngle-minAngle)+minAngle;angleRegister.sendSetPackedAsync([newAngle],true);};var handleAngleChange=(ev,newValue)=>angleRegister.sendSetPackedAsync([newValue],true);return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,alignContent:"center"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(ServoWidget,{angle:angle,offset:offset,color:color,enabled:enabled,toggleOff:toggleOff,widgetSize:widgetSize,rotationRate:continuous?throttle*rotationalSpeed/100:undefined,visible:visible})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},continuous?/*#__PURE__*/react.createElement(Slider/* default */.ZP,{"aria-label":label,color:color,value:throttle,valueLabelFormat:continuousFormat,onChange:readOnly?undefined:handleContinuousChange,min:-100,max:100,step:10,valueLabelDisplay:"auto"}):/*#__PURE__*/react.createElement(Slider/* default */.ZP,{"aria-label":label,color:color,value:angle,valueLabelFormat:angleFormat,onChange:readOnly?undefined:handleAngleChange,min:minAngle,max:maxAngle,step:5,valueLabelDisplay:"auto"})));}

/***/ })

}]);
//# sourceMappingURL=6301-0304293f62f6cffbf183.js.map