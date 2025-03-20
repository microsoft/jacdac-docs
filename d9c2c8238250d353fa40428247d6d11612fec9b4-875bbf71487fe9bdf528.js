(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1515],{

/***/ 91535:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
}), 'Circle');
exports.Z = _default;

/***/ }),

/***/ 51223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(70030);
var defineProperty = (__webpack_require__(3070).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 77475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(43157);
var isConstructor = __webpack_require__(4411);
var isObject = __webpack_require__(70111);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 65417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(77475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 7207:
/***/ (function(module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(43157);
var lengthOfArrayLike = __webpack_require__(26244);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var bind = __webpack_require__(49974);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 49974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(19662);
var NATIVE_BIND = __webpack_require__(34374);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 60490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(35005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 43157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(84326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 70030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(19670);
var definePropertiesModule = __webpack_require__(36048);
var enumBugKeys = __webpack_require__(80748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(60490);
var documentCreateElement = __webpack_require__(80317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 36048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(19781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(19670);
var toIndexedObject = __webpack_require__(45656);
var objectKeys = __webpack_require__(81956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 81956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(16324);
var enumBugKeys = __webpack_require__(80748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 86535:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(82109);
var flattenIntoArray = __webpack_require__(6790);
var aCallable = __webpack_require__(19662);
var toObject = __webpack_require__(47908);
var lengthOfArrayLike = __webpack_require__(26244);
var arraySpeciesCreate = __webpack_require__(65417);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 99244:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(51223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 47644:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardRegisterValueFallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18763);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75938);
/* harmony import */ var _ui_IconButtonWithProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14955);
function DashboardRegisterValueFallback(props){var{register}=props;var service=register.service;var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service);var color=server?"secondary":"primary";var handleRefresh=()=>register===null||register===void 0?void 0:register.sendGetAsync();var registerName=(0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_1__/* .humanify */ .lW)(register.name);// try forcing a refresh
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{register===null||register===void 0?void 0:register.sendGetAsync();},[register]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{color:color,title:"refresh "+registerName,indeterminate:true,onClick:handleRefresh});}

/***/ }),

/***/ 61213:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I7": function() { return /* binding */ dashboardServiceIcon; },
  "o2": function() { return /* binding */ dashboardServiceWeight; },
  "ZP": function() { return /* binding */ DashboardServiceWidget; },
  "iW": function() { return /* binding */ hasServiceView; },
  "sO": function() { return /* binding */ isExpandableView; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(59062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
// EXTERNAL MODULE: ./src/jacdac/useDeviceProductIdentifier.ts
var useDeviceProductIdentifier = __webpack_require__(31246);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(56225);
// EXTERNAL MODULE: ./jacdac-ts/src/jacdac.ts
var jacdac = __webpack_require__(21149);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(48831);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceDefaultWidget.tsx
var _excluded=["valueRegister","intensityRegister","controlled"],_excluded2=["intensityRegister","controlled"],_excluded3=["register","controlled"];var collapsedRegisters=[constants/* SystemReg.Reading */.ZJq.Reading,constants/* SystemReg.Value */.ZJq.Value,constants/* SystemReg.Intensity */.ZJq.Intensity];function ValueWidget(props){var _intensityRegister$sp,_intensityRegister$sp2;var{valueRegister,intensityRegister,controlled}=props,others=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var{visible}=others;var hasIntensityBool=(intensityRegister===null||intensityRegister===void 0?void 0:(_intensityRegister$sp=intensityRegister.specification)===null||_intensityRegister$sp===void 0?void 0:(_intensityRegister$sp2=_intensityRegister$sp.fields[0])===null||_intensityRegister$sp2===void 0?void 0:_intensityRegister$sp2.type)==="bool";var intensity=(0,useRegisterValue/* useRegisterBoolValue */.I8)(hasIntensityBool&&intensityRegister,others);var off=hasIntensityBool?!intensity:undefined;var toggleOff=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){yield intensityRegister.sendSetBoolAsync(off,true);});return function toggleOff(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{register:valueRegister,variant:"widget",showServiceName:false,showRegisterName:false,hideMissingValues:true,off:off,toggleOff:hasIntensityBool?toggleOff:undefined,visible:visible,controlled:controlled});}function IntensityWidget(props){var _intensityRegister$sp3,_intensityRegister$sp4;var{intensityRegister,controlled}=props,others=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded2);var{visible}=others;var hasIntensityBool=(intensityRegister===null||intensityRegister===void 0?void 0:(_intensityRegister$sp3=intensityRegister.specification)===null||_intensityRegister$sp3===void 0?void 0:(_intensityRegister$sp4=_intensityRegister$sp3.fields[0])===null||_intensityRegister$sp4===void 0?void 0:_intensityRegister$sp4.type)==="bool";var[intensity]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(intensityRegister,others);var off=hasIntensityBool?!intensity:undefined;return/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{register:intensityRegister,variant:"widget",showServiceName:false,showRegisterName:false,hideMissingValues:true,off:off,visible:visible,controlled:controlled});}function DefaultRegisterWidget(props){var{register,controlled}=props,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded3);if(register.specification.identifier==constants/* SystemReg.Value */.ZJq.Value){var intensityRegister=props.service.register(constants/* SystemReg.Intensity */.ZJq.Intensity);return/*#__PURE__*/react.createElement(ValueWidget,Object.assign({valueRegister:register,intensityRegister:intensityRegister,controlled:controlled},rest));}else if(register.specification.identifier===constants/* SystemReg.Intensity */.ZJq.Intensity)return/*#__PURE__*/react.createElement(IntensityWidget,Object.assign({intensityRegister:register,controlled:controlled},rest));else return/*#__PURE__*/react.createElement(RegisterInput/* default */.Z,{register:register,variant:"widget",showServiceName:false,showRegisterName:false,hideMissingValues:true,visible:props.visible,controlled:controlled});}function DashboardServiceDefaultWidget(props){var{service}=props;var{specification}=service;var registers=(0,react.useMemo)(()=>specification===null||specification===void 0?void 0:specification.packets.filter(pkt=>(0,spec/* isRegister */.x5)(pkt)&&collapsedRegisters.indexOf(pkt.identifier)>-1)// if value, skip bool intensity
.filter((pkt,i,pkts)=>!(pkt.identifier===constants/* SystemReg.Intensity */.ZJq.Intensity&&pkt.fields.length==1&&pkt.fields[0].type==="bool")||!pkts.some(pk=>pk.identifier===constants/* SystemReg.Value */.ZJq.Value))// map
.map(rspec=>service.register(rspec.identifier)),[service]);if(!(registers!==null&&registers!==void 0&&registers.length))// nothing to see here
return null;return/*#__PURE__*/react.createElement(react.Fragment,null,registers.map(register=>/*#__PURE__*/react.createElement(DefaultRegisterWidget,Object.assign({key:register.id,register:register},props))));}
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__(22907);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(50542);
// EXTERNAL MODULE: ./node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(89149);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 4 modules
var Slider = __webpack_require__(92486);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(98816);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(38846);
;// CONCATENATED MODULE: ./src/components/widgets/FwdLEDWidget.tsx
var MIN_VISIBLE_OPACITY=0.5;function rgbToHsl(r,g,b){var[r$,g$,b$]=[r/255,g/255,b/255];var cMin=Math.min(r$,g$,b$);var cMax=Math.max(r$,g$,b$);var cDelta=cMax-cMin;var h;var s;var l;var maxAndMin=cMax+cMin;//lum
l=maxAndMin/2*100;if(cDelta===0)s=h=0;else{//hue
if(cMax===r$)h=60*((g$-b$)/cDelta%6);else if(cMax===g$)h=60*((b$-r$)/cDelta+2);else if(cMax===b$)h=60*((r$-g$)/cDelta+4);//sat
if(l>50)s=100*(cDelta/(2-maxAndMin));else s=100*(cDelta/maxAndMin);}// at least 30% luminosity
l=Math.max(l,40);return[Math.floor(h),Math.floor(s),Math.floor(l)];}function setRgba(el,r,g,b,a,radius){var hsl=rgbToHsl(r,g,b);var[h,s,l]=hsl;var fill="hsla("+h+", "+s+"%, "+l+"%, "+a+")";el.setAttribute("fill",fill);if(radius!==undefined){var nr=radius*(1+(l-60)/200);el.setAttribute("r",""+nr);}}function setRgbaLeds(pixelsContainer,colors,alpha,radius){var pixels=pixelsContainer===null||pixelsContainer===void 0?void 0:pixelsContainer.children;if(!colors||!pixels)return;var pn=Math.min(pixels.length,colors.length/3);var ci=0;for(var i=0;i<pn;++i){var pixel=pixels.item(i);setRgba(pixel,colors[ci],colors[ci+1],colors[ci+2],alpha,radius);ci+=3;}}function brightnessToOpacity(actualBrightness){// tune opacity to account for global opacity
var alpha=MIN_VISIBLE_OPACITY;var opacity=actualBrightness<=0?0:alpha+(1-alpha)*(actualBrightness||0);return opacity;}function FwdLEDWidget(props){var{lightVariant,numPixels,actualBrightness,subscribeColors,widgetSize,onLedClick,colors}=props;var{background,controlBackground}=(0,useWidgetTheme/* default */.Z)();var pathRef=(0,react.useRef)(undefined);var pixelsRef=(0,react.useRef)(undefined);var neoradius=6;var neocircleradius=neoradius+1;var isJewel=lightVariant===constants/* LedStripVariant.Jewel */.t1x.Jewel;var isRing=lightVariant===constants/* LedStripVariant.Ring */.t1x.Ring;var opacity=brightnessToOpacity(actualBrightness);// paint svg via dom
var paint=(0,react.useCallback)(()=>{setRgbaLeds(pixelsRef.current,colors(),opacity,neocircleradius);},[colors,opacity,neocircleradius]);// reposition pixels along the path
(0,react.useEffect)(()=>{var _pixelsRef$current;var p=pathRef.current;var pixelGroup=Object.values((_pixelsRef$current=pixelsRef.current)===null||_pixelsRef$current===void 0?void 0:_pixelsRef$current.children).map(g=>g.children);var pixels=pixelGroup.map(g=>g[1]);var pixelBoxes=pixelGroup.map(g=>g[0]);if(!p||!pixels)return;var offset=isJewel?1:0;var pn=pixels.length;var length=p.getTotalLength();var extra=isRing||isJewel?0:1;var step=length/(pn-offset);var MAGIC_NUMBER=length*(1/16+0.25);for(var i=offset;i<pn;++i){var pixel=pixels[i];var box=pixelBoxes[i];var boxSize=1.3*pixel.r.baseVal.value;var rotation=360*(i/pn+9/16);var pos=i-offset;var point=p.getPointAtLength((MAGIC_NUMBER+step*(pos+extra/2.0))%length);pixel.setAttribute("cx",""+point.x);pixel.setAttribute("cy",""+point.y);box.setAttribute("x",""+(point.x-boxSize));box.setAttribute("y",""+(point.y-boxSize));box.setAttribute("width",""+2*boxSize);box.setAttribute("height",""+2*boxSize);box.setAttribute("transform","rotate("+rotation+", "+point.x+", "+point.y+")");}paint();},[lightVariant,numPixels,paint,pathRef.current,pixelsRef.current]);// render when new colors are in
(0,react.useEffect)(()=>subscribeColors===null||subscribeColors===void 0?void 0:subscribeColors(paint),[paint,subscribeColors]);var d="";var n=numPixels-(isJewel?1:0);var neoperimeter=n*(2.7*neoradius);var margin=1.8*neoradius;var ringradius=2.2*neoperimeter/(2*Math.PI);var width=2*(margin+ringradius);var height=width;var hm=height-2*margin;d="M "+(width>>1)+","+margin+" a "+ringradius+","+ringradius+" 0 0,1 0,"+hm+" a "+ringradius+","+ringradius+" 0 0,1 0, -"+hm;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:width,height:height,size:widgetSize},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},/*#__PURE__*/react.createElement("g",{transform:"scale("+width/(1+117+2*15.5-2*9.5+2*3.25+2*(8-3.25))+")"},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"jacdac-connector"},/*#__PURE__*/react.createElement("path",{fill:"#AAA",d:"M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{id:"outline",fill:"white",stroke:"black",strokeWidth:"1",d:" M 0.5, 0.5 m 5.25, 8 a 8,8 0 0 1 8,-8 h 117 a 8,8 0 0 1 8,8 v 32 a 4.25,4.25 0 0 1 -4.25,4.25 h -9.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 15.5 a 3.5,3.5 0 0 1 3.5,3.5 v 19 a 3.5,3.5 0 0 1 -3.5,3.5 h -15.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 9.5 a 4.25,4.25 0 0 1 4.25,4.25 v 32 a 8,8 0 0 1 -8,8 h -117 a 8,8 0 0 1 -8,-8 v -32 a 4.25,4.25 0 0 1 4.25,-4.25 h 9.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -15.5 a 3.5,3.5 0 0 1 -3.5,-3.5 v -19 a 3.5,3.5 0 0 1 3.5,-3.5 h 15.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -9.5 a 4.25,4.25 0 0 1 -4.25,-4.25 v -16.5 a 4.25,4.25 0 0 0 0,-8.5 z "})),/*#__PURE__*/react.createElement("g",{transform:"translate(125,12)"},/*#__PURE__*/react.createElement("circle",{fill:"black",r:"1.75"}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:"1.5",fill:"none",d:" m -2.5 -3 a 4 4 0 0 0 0 6 M -4 -4.5 a 6.25 6.25 0 0 0 0 9 M 2.5 -3 a 4 4 0 0 1 0 6 M 4 -4.5 a 6.25 6.25 0 0 1 0 9 "})),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(120 60) scale(0.8)"}),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) "}),/*#__PURE__*/react.createElement("text",{x:16,y:15,fontSize:10},"LED")),/*#__PURE__*/react.createElement("path",{ref:pathRef,d:d,fill:"transparent"}),/*#__PURE__*/react.createElement("g",{ref:pixelsRef,transform:"translate("+width/2+" "+height/2+") scale(0.65) translate("+-width/2+" "+-height/2+")"},Array(numPixels).fill(0).map((_,i)=>{var handleClick=onLedClick?()=>onLedClick(i):undefined;var fireClick=(0,useFireKey/* default */.Z)(handleClick);return/*#__PURE__*/react.createElement("g",{className:(fireClick?"clickeable":"")+" pixel",key:"pixel"+i,onPointerDown:handleClick,onKeyDown:fireClick},/*#__PURE__*/react.createElement("rect",{x:(width>>1)-(neocircleradius>>1),y:(height>>1)-(neocircleradius>>1),rx:2,fill:"#fffde0",stroke:"#5b5b5b",strokeWidth:1}),/*#__PURE__*/react.createElement("circle",{r:neocircleradius,cx:width>>1,cy:height>>1,stroke:controlBackground,strokeWidth:1+(i==0?0.5:0),"aria-label":"pixel "+i},/*#__PURE__*/react.createElement("title",null,"pixel ",i)));}))));}
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__(68455);
;// CONCATENATED MODULE: ./src/components/widgets/FwdPumpWidget.tsx
function FwdPumpWidget(props){var{size,active}=props;var svgDiameter=110;var impellerRef=(0,react.useRef)();var impellerRotationRef=(0,react.useRef)(0);var impellerRotationRate=190;(0,useAnimationFrame/* default */.Z)(active?timeDelta=>{var impeller=impellerRef.current;impellerRotationRef.current=(impellerRotationRef.current+impellerRotationRate/timeDelta)%360;impeller.setAttribute("transform","rotate("+impellerRotationRef.current+")");return true;}:undefined,[active]);return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{size:size,width:1,viewBox:svgDiameter/-2+" "+svgDiameter/-2+" "+svgDiameter+" "+svgDiameter},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"fwd-pump-strut"},/*#__PURE__*/react.createElement("rect",{x:-2,y:7,width:4,height:4}))),/*#__PURE__*/react.createElement("g",{ref:impellerRef},/*#__PURE__*/react.createElement("circle",{r:6,fill:"transparent",stroke:"black",strokeWidth:3}),/*#__PURE__*/react.createElement("circle",{r:12,fill:"transparent",stroke:"black",strokeWidth:5}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-strut",x:0,y:0,transform:"rotate(10)"}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-strut",x:0,y:0,transform:"rotate(-110)"}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-strut",x:0,y:0,transform:"rotate(130)"}),/*#__PURE__*/react.createElement("circle",{r:10,fill:"transparent",stroke:"white",strokeWidth:0.5}),/*#__PURE__*/react.createElement("path",{id:"fwd-pump-prop",fill:"black",stroke:"#a2a2a2",strokeWidth:0.5,d:" M 14,-1 q 0,2 3,2 t 12,-0.5 t 14,3.6 t -1,11 t -16,9.5 t -18,-4 Q 4,16 3.5,13.5 z "}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-prop",x:"0",y:"0",transform:"rotate(90)"}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-prop",x:"0",y:"0",transform:"rotate(180)"}),/*#__PURE__*/react.createElement("use",{href:"#fwd-pump-prop",x:"0",y:"0",transform:"rotate(270)"}),/*#__PURE__*/react.createElement("circle",{r:14,fill:"transparent",stroke:"white",strokeWidth:1})),/*#__PURE__*/react.createElement("circle",{r:45,stroke:"#a2a2a2",strokeOpacity:"60%",strokeWidth:12,fill:"transparent"}));}
// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__(15073);
// EXTERNAL MODULE: ./src/components/widgets/svgutils.ts
var svgutils = __webpack_require__(65885);
;// CONCATENATED MODULE: ./src/components/widgets/FwdServoWidget.tsx
function FwdServoWidget(props){var{widgetSize,toggleOff,angle,offset,color,enabled,rotationRate,visible}=props;var{background,active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var continuous=rotationRate!==undefined;var offsetRef=(0,react.useRef)(0);var armRef=(0,react.useRef)();var textRef=(0,react.useRef)();var cx=78;var cy=55;var a=enabled?angle+(offset||0):90;var transform="rotate("+(-a+90)+", "+cx+", "+cy+")";var h=111.406;var w=158.50195;var pr=14;var pri=6;var text=enabled?Math.round(a)+"\xB0":"off";(0,useAnimationFrame/* default */.Z)(continuous&&enabled&&visible&&rotationRate!==undefined?time=>{var arm=armRef.current;if(!arm)return;var text=textRef.current;var offset=offsetRef.current;offset=(offset+time/1000*rotationRate)%360;offsetRef.current=offset;var transform="rotate("+offset+", "+cx+", "+cy+")";arm.setAttribute("transform",transform);text.childNodes[0].nodeValue=Math.round(rotationRate/360*60)+" rpm";return true;}:undefined,[continuous,visible,enabled,rotationRate]);function generateGearPath(cx,cy,id,od,teeth){function*pathDiameter(){while(true){yield id/2;yield od/2;}}var drawDiameter=pathDiameter();var makePoint=(dia,offset)=>(0,svgutils/* polarToCartesian */.op)(cx,cy,dia,offset);var segmentOffset=180/(2*teeth);var dia=0;var updateDia=()=>{dia=drawDiameter.next().value;return true;};updateDia();var drawPoint=(dia,offset)=>{var{x,y}=makePoint(dia,offset);return x+","+y;};var gearPath="M "+drawPoint(dia,0);gearPath+="C "+drawPoint(dia,segmentOffset)+" "+(updateDia()&&drawPoint(dia,segmentOffset))+" "+drawPoint(dia,2*segmentOffset);for(var i=3;i<4*teeth;i+=2){updateDia();gearPath+="S "+drawPoint(dia,i*segmentOffset)+" "+drawPoint(dia,(i+1)*segmentOffset);}return gearPath;}var fwdGearPaths={small:generateGearPath(cx,cy,18,27,10),large:generateGearPath(cx,cy,66,80,30)};return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{title:"servo at angle "+angle,width:w,height:h,size:widgetSize},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},/*#__PURE__*/react.createElement("rect",{fill:continuous?"#333":"#666",x:0,y:10.687,width:158.62,height:89.75,rx:4,ry:4}),!continuous&&/*#__PURE__*/react.createElement("path",{transform:transform,fill:"white",d:fwdGearPaths.large}),!continuous&&/*#__PURE__*/react.createElement("g",{transform:"translate(-51 0)"},/*#__PURE__*/react.createElement("path",{transform:"rotate("+3*a+", "+cx+", "+cy+")",fill:"white",d:fwdGearPaths.small})),/*#__PURE__*/react.createElement("path",{fill:continuous?"#555":"#999",fillOpacity:continuous?"100%":"70%",d:"M123.8 55.641 c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"}),/*#__PURE__*/react.createElement("path",{ref:armRef,fill:enabled?"#deddd8":background,stroke:active,transform:transform,d:"M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"}),/*#__PURE__*/react.createElement("text",Object.assign({ref:textRef},textProps,{x:w/2,y:30,textAnchor:"middle",fontSize:"1em",fontWeight:"bold",lengthAdjust:"0.3em",fill:"#fff",stroke:"#000",strokeWidth:"0.05em",shapeRendering:"crispEdges"}),text),toggleOff&&/*#__PURE__*/react.createElement(PowerButton/* default */.Z,{r:pr,ri:pri,cx:w-pr-4,cy:pr+14,color:color,strokeWidth:1.8,off:!enabled,onClick:toggleOff})));}
// EXTERNAL MODULE: ./src/components/dashboard/DashboardRegisterValueFallback.tsx
var DashboardRegisterValueFallback = __webpack_require__(47644);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(68320);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/components/widgets/ColorButtons.tsx
var ColorButtons = __webpack_require__(27362);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardFwdUniqueComponents.tsx
function createPumpWidget(props){var{service}=props;var activeRegister=(0,useRegister/* default */.Z)(service,jacdac.RelayReg.Active);var active=(0,useRegisterValue/* useRegisterBoolValue */.I8)(activeRegister,props);var handleClose=(_,checked)=>activeRegister===null||activeRegister===void 0?void 0:activeRegister.sendSetBoolAsync(checked,true);if(active===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:activeRegister});return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(FwdPumpWidget,{active:active,size:"clamp(7em, 13vw, 14vh)"}),/*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z,{label:active?"Running":"Stopped",checked:active,onChange:handleClose}));}function createServoWidget(props){var{service,visible}=props;var enabledRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.Enabled);var enabled=(0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister,props);var angleRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.Angle);var[reportedAngle=90]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(angleRegister,{visible});// sec/60deg
var responseSpeedRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.ResponseSpeed);var[responseSpeed=jacdac.SG90_RESPONSE_SPEED]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(responseSpeedRegister,{visible});var rotationalSpeed=60/responseSpeed;var angle=(0,useThrottledValue/* default */.Z)(reportedAngle,rotationalSpeed);var offsetRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.Offset);var[offset]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(offsetRegister,props);var clientVariantRegister=(0,useRegister/* default */.Z)(service,jacdac.BaseReg.ClientVariant);var[clientVariant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(clientVariantRegister,props);var minAngleRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.MinAngle);var[minAngle=0]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minAngleRegister,props);var maxAngleRegister=(0,useRegister/* default */.Z)(service,jacdac.ServoReg.MaxAngle);var[maxAngle=270]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxAngleRegister,props);var{0:continuous,1:setContinuous}=(0,react.useState)(/cont=1/.test(clientVariant)||false);var throttle=(angle-minAngle)/(maxAngle-minAngle)*200-100;var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var toggleOff=()=>enabledRegister.sendSetBoolAsync(!enabled,true);var widgetSize="clamp(7rem, 16vw, 16vh)";var readOnly=false;var label=continuous?"Throttle (%)":"Angle";var angleFormat=a=>""+Math.round(a);var continuousFormat=throttle=>{return Math.round(throttle)+"%";};var handleContinuousChange=(ev,newValue)=>{var newAngle=(0.5+newValue/200)*(maxAngle-minAngle)+minAngle;angleRegister.sendSetPackedAsync([newAngle],true);};var handleAngleChange=(ev,newValue)=>angleRegister.sendSetPackedAsync([newValue],true);var handleVariantChange=event=>{var isContinuous=event.target.checked;if(clientVariant!==undefined){clientVariantRegister.sendSetStringAsync("cont="+(isContinuous?'1':'0'),true);}setContinuous(isContinuous);if(!isContinuous)handleAngleChange(undefined,(maxAngle-minAngle)/2+minAngle);};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,alignContent:"center"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(FormControlLabel/* default */.Z,{value:"servo-mode",control:/*#__PURE__*/react.createElement(Switch/* default */.Z,{checked:continuous,onChange:handleVariantChange}),label:continuous?"Continuous":"Positional",labelPlacement:"end"}),/*#__PURE__*/react.createElement(FwdServoWidget,{angle:angle,offset:offset,color:color,enabled:enabled,toggleOff:toggleOff,widgetSize:widgetSize,rotationRate:continuous?throttle*rotationalSpeed/100:undefined,visible:visible})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},continuous?/*#__PURE__*/react.createElement(Slider/* default */.ZP,{"aria-label":label,color:color,value:throttle,valueLabelFormat:continuousFormat,onChange:readOnly?undefined:handleContinuousChange,min:-100,max:100,step:10,valueLabelDisplay:"auto"}):/*#__PURE__*/react.createElement(Slider/* default */.ZP,{"aria-label":label,color:color,value:angle,valueLabelFormat:angleFormat,onChange:readOnly?undefined:handleAngleChange,min:minAngle,max:maxAngle,step:5,valueLabelDisplay:"auto"})));}function createLEDWidget(props){var{service}=props;var pixelsRegister=(0,useRegister/* default */.Z)(service,jacdac.LedReg.Pixels);var hasData=(0,useChange/* default */.Z)(pixelsRegister,_=>!!(_!==null&&_!==void 0&&_.data));var{0:penColor,1:setPenColor}=(0,react.useState)(0x0000ff);var colorsRef=(0,react.useRef)(new Uint8Array(0));var clientRef=(0,react.useRef)(new jacdac.JDEventSource());var{0:ledControls,1:setLedControls}=(0,react.useState)(false);var handleColorChange=newColor=>setPenColor(current=>newColor===current?undefined:newColor);var handleLedClick=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(index){var pixels=colorsRef.current;if(index>=pixels.length*3)return;var newPixels=pixels.slice(0);var k=index*3;var r=penColor>>16&0xff;var g=penColor>>8&0xff;var b=penColor&0xff;if(newPixels[k]==r&&newPixels[k+1]==g&&newPixels[k+2]==b){r=0;g=0;b=0;}newPixels[k]=r;newPixels[k+1]=g;newPixels[k+2]=b;yield pixelsRegister.sendSetPackedAsync([newPixels],true);colorsRef.current=newPixels;clientRef.current.emit(jacdac.RENDER);});return function handleLedClick(_x){return _ref.apply(this,arguments);};}();(0,react.useEffect)(()=>{if(!pixelsRegister)return undefined;var updatePixels=()=>{var[pixels]=pixelsRegister.unpackedValue||[];if(pixels&&!(0,jacdac.bufferEq)(colorsRef.current,pixels)){colorsRef.current=pixels.slice(0);clientRef.current.emit(jacdac.RENDER);}};updatePixels();return pixelsRegister.subscribe(jacdac.REPORT_UPDATE,updatePixels);},[pixelsRegister]);var colors=(0,react.useCallback)(()=>colorsRef.current,[]);var numPixelsRegister=(0,useRegister/* default */.Z)(service,jacdac.LedReg.NumPixels);var[numPixels]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(numPixelsRegister,props);var actualBrightnessRegister=(0,useRegister/* default */.Z)(service,jacdac.LedReg.ActualBrightness);var[actualBrightness=0.5]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(actualBrightnessRegister,props);var subscribeColors=(0,react.useCallback)(handler=>clientRef.current.subscribe(jacdac.RENDER,handler),[]);var colourPalette=[{name:"red",value:0xff0000},{name:"orange",value:0xff7f00},{name:"yellow",value:0xffff00},{name:"green",value:0x00ff00},{name:"blue",value:0x0000ff},{name:"purple",value:0xa033e5},{name:"pink",value:0xff007f},{name:"white",value:0xffffff},{name:"black",value:0x000000}];var handlePanelToggle=event=>{setLedControls(event.target.checked);};var ready=numPixels!==undefined&&hasData;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,flexWrap:"nowrap"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},ready&&/*#__PURE__*/react.createElement(FwdLEDWidget,{widgetSize:ledControls?'clamp(8rem, 12vw, 15vh)':'clamp(6rem, 12vw, 15vh)',colors:colors,subscribeColors:subscribeColors,numPixels:numPixels,lightVariant:jacdac.LedStripVariant.Ring,actualBrightness:actualBrightness,onLedClick:handleLedClick}),/*#__PURE__*/react.createElement(FormControlLabel/* default */.Z,{value:"led-control",control:/*#__PURE__*/react.createElement(Switch/* default */.Z,{checked:ledControls,onChange:handlePanelToggle}),label:"Palette",labelPlacement:"end"})),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},ledControls&&/*#__PURE__*/react.createElement(ColorButtons/* default */.Z,{color:penColor,onColorChange:handleColorChange,colors:colourPalette})));}
// EXTERNAL MODULE: ./src/components/hooks/useSvgButtonProps.ts
var useSvgButtonProps = __webpack_require__(56212);
;// CONCATENATED MODULE: ./src/components/widgets/FwdDialButtonWidget.tsx
function FwdDialButtonWidget(props){var{checked,label,color,size,onDown,onUp}=props;var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var buttonProps=(0,useSvgButtonProps/* default */.Z)(label,onDown,onUp);var w=64;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,size:size},/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.06,y:w*0.70,height:w*0.14,width:w*0.12,fill:"#a2a2a2",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.14,y:w*0.82,height:w*0.08,width:w*0.06,fill:"#0f5a96"}),/*#__PURE__*/react.createElement("rect",{x:w/2+w*0.08,y:w*0.82,height:w*0.08,width:w*0.06,fill:"#0f5a96"}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.14,y:w*0.79,height:w*0.03,width:w*0.28,fill:"#1ad672"}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.14,y:w*0.77,height:w*0.02,width:w*0.28,fill:"#a2a2a2"}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.08,y:w*0.77,height:w*0.08,width:w*0.16,fill:"#a2a2a2"}),/*#__PURE__*/react.createElement("rect",{x:1,y:w-w/10,rx:1,width:w-2,height:w/12,fill:"white",stroke:"black",strokeWidth:0.4}),/*#__PURE__*/react.createElement("g",{transform:"translate(0 "+(checked?w*0.05:0)+")"},/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.15,y:w*0.25,height:w*0.45,width:w*0.3,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.108,y:w*0.30,height:w*.28,width:w*0.06,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2+w*0.045,y:w*0.30,height:w*.28,width:w*0.06,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2+w*0.110,y:w*0.30,height:w*.28,width:w*0.05,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.160,y:w*0.30,height:w*.28,width:w*0.05,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5}),/*#__PURE__*/react.createElement("rect",{x:w/2-w*0.040,y:w*0.30,height:w*.28,width:w*0.08,fill:"#deddd8",stroke:"#5b5b5b",strokeWidth:0.5})),/*#__PURE__*/react.createElement("rect",Object.assign({x:w*0.15,width:w*0.70,y:0,height:w*0.9,fillOpacity:0,fill:background},buttonProps,{strokeOpacity:0})));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdDialWidget.tsx
function FwdDialWidget(props){var{size,color,position,angle}=props;var{background,controlBackground,active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var label=""+position;var w=10;var r=0.06;var fs=Math.max(0.2,0.4-label.length*0.1);return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{title:"rotary encoder at position "+position,size:size,width:w,height:w,viewBox:"0 0 1 1"},/*#__PURE__*/react.createElement("g",{transform:"scale("+1/(1+117+2*15.5-2*9.5+2*3.25+2*(8-3.25))+")"},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"jacdac-connector"},/*#__PURE__*/react.createElement("path",{fill:"#AAA",d:"M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{fill:"white",stroke:"black",strokeWidth:"1",d:" M 0.5, 0.5 m 5.25, 8 a 8,8 0 0 1 8,-8 h 117 a 8,8 0 0 1 8,8 v 32 a 4.25,4.25 0 0 1 -4.25,4.25 h -9.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 15.5 a 3.5,3.5 0 0 1 3.5,3.5 v 19 a 3.5,3.5 0 0 1 -3.5,3.5 h -15.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 9.5 a 4.25,4.25 0 0 1 4.25,4.25 v 32 a 8,8 0 0 1 -8,8 h -117 a 8,8 0 0 1 -8,-8 v -32 a 4.25,4.25 0 0 1 4.25,-4.25 h 9.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -15.5 a 3.5,3.5 0 0 1 -3.5,-3.5 v -19 a 3.5,3.5 0 0 1 3.5,-3.5 h 15.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -9.5 a 4.25,4.25 0 0 1 -4.25,-4.25 v -16.5 a 4.25,4.25 0 0 0 0,-8.5 z "})),/*#__PURE__*/react.createElement("g",{transform:"translate(125,12)"},/*#__PURE__*/react.createElement("circle",{fill:"black",r:"1.75"}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:"1.5",fill:"none",d:" m -2.5 -3 a 4 4 0 0 0 0 6 M -4 -4.5 a 6.25 6.25 0 0 0 0 9 M 2.5 -3 a 4 4 0 0 1 0 6 M 4 -4.5 a 6.25 6.25 0 0 1 0 9 "})),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(120 60) scale(0.8)"}),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) "}),/*#__PURE__*/react.createElement("text",{fontFamily:"Galano Grotesque Bold",x:16,y:15,fontSize:10},"Dial")),/*#__PURE__*/react.createElement("g",{transform:"translate(0.5 0.5) scale(0.5) rotate("+angle+") translate(-0.5 -0.5)"},/*#__PURE__*/react.createElement("path",{fill:background,d:"M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"}),/*#__PURE__*/react.createElement("path",{fill:controlBackground,d:"M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"}),/*#__PURE__*/react.createElement("circle",{cx:0.5,cy:0.19,r:r,fill:active})),/*#__PURE__*/react.createElement("text",Object.assign({x:0.5,y:0.5,fontFamily:"Galano Grotesque Bold",fontSize:fs},textProps),label));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdLineWidget.tsx
function FwdLineWidget(props){var{size,color,value,buttonProps}=props;var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var w=48;var h=48;var m=4;var sw=20;var dx=w>>1;var x=(w-sw-dx)/2;var sh=32;var dark="#000";var bright=active;var isLit=value>0.5;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h,size:size},/*#__PURE__*/react.createElement("g",{transform:"translate("+x+", "+(h-m-sh)+")"},/*#__PURE__*/react.createElement("rect",{x:0,y:5.5*sh/8,width:2*sw,height:sh/5,fill:"#a4a4a4"}),/*#__PURE__*/react.createElement("rect",{x:0,y:sh/8,width:2*sw,height:sh/5,fill:"#a4a4a4"}),/*#__PURE__*/react.createElement("rect",Object.assign({x:sw/2,y:0,rx:1,width:sw,height:sh,fill:background},buttonProps)),/*#__PURE__*/react.createElement("rect",{x:sw*0.6,y:sh*0.10,height:sh/3,width:sw*0.8,fill:isLit?bright:dark,stroke:controlBackground,strokeWidth:1,style:{userSelect:"none",pointerEvents:"none"}}),/*#__PURE__*/react.createElement("rect",{x:sw*0.6,y:sh*0.60,height:sh/3,width:sw*0.8,fill:isLit?bright:dark,stroke:controlBackground,strokeWidth:1,style:{userSelect:"none",pointerEvents:"none"}})));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdSoilMoistureWidget.tsx
function FwdSoilMoistureWidget(props){var{value,color,size}=props;var{active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var clipId=(0,react.useId)();var hasValue=!isNaN(value);var tvalue=hasValue?Math.round(value*100)+"%":"--";var w=3;var h=6;var ch=5.4*value;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h,size:size},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},hasValue&&/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("clipPath",{id:clipId},/*#__PURE__*/react.createElement("rect",{x:0,y:h-ch,width:w,height:ch}))),/*#__PURE__*/react.createElement("path",{fill:"white",stroke:"black",strokeWidth:0.02,d:" M 0.05 -.05 v 0.05 a .2 .2 0 00 .1 .2 h .35 v 4.4 l .9 1 l .9 -1 v -4.4 h .35 a .2 -.2 0 00 .1 -.2 v -0.05 Z "}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:0.02,fill:active,d:" M 0.05 -.05 v 0.05 a .2 .2 0 00 .1 .2 h .35 v 4.4 l .9 1 l .9 -1 v -4.4 h .35 a .2 -.2 0 00 .1 -.2 v -0.05 Z ",clipPath:"url(#"+clipId+")"}),/*#__PURE__*/react.createElement("path",{stroke:"#000000",strokeLinecap:"butt",strokeWidth:".02",shapeRendering:"crispEdges",d:" M .6 .5 h 1.6 "}),/*#__PURE__*/react.createElement("text",{className:"galanoAltA",fill:"black",x:"1.4",y:".5",fontSize:".25",letterSpacing:"-.01em",textAnchor:"middle",dominantBaseline:"ideographic",shapeRendering:"crispEdges"},"max"),/*#__PURE__*/react.createElement("text",Object.assign({x:w/2,y:h*0.5,fontSize:"0.6",strokeWidth:".02",stroke:value>.5?"#000":"#fff"},textProps,{fill:value>.5?"#fff":"#000"}),tvalue)));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdSolarWidget.tsx
function FwdSolarWidget(props){var{value,color,size}=props;var{active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var clipId=(0,react.useId)();var hasValue=!isNaN(value);var tvalue=hasValue?Math.round(value*100)+"%":"--";var w=64;var widgetScale=0.45;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:w,size:size},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},/*#__PURE__*/react.createElement("g",{transform:"scale("+w/(1+117+2*15.5-2*9.5+2*3.25+2*(8-3.25))+")"},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"jacdac-connector"},/*#__PURE__*/react.createElement("path",{fill:"#AAA",d:"M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{id:"outline",fill:"white",stroke:"black",strokeWidth:"1",d:" M 0.5, 0.5 m 5.25, 8 a 8,8 0 0 1 8,-8 h 117 a 8,8 0 0 1 8,8 v 32 a 4.25,4.25 0 0 1 -4.25,4.25 h -9.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 15.5 a 3.5,3.5 0 0 1 3.5,3.5 v 19 a 3.5,3.5 0 0 1 -3.5,3.5 h -15.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 9.5 a 4.25,4.25 0 0 1 4.25,4.25 v 32 a 8,8 0 0 1 -8,8 h -117 a 8,8 0 0 1 -8,-8 v -32 a 4.25,4.25 0 0 1 4.25,-4.25 h 9.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -15.5 a 3.5,3.5 0 0 1 -3.5,-3.5 v -19 a 3.5,3.5 0 0 1 3.5,-3.5 h 15.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -9.5 a 4.25,4.25 0 0 1 -4.25,-4.25 v -16.5 a 4.25,4.25 0 0 0 0,-8.5 z "})),/*#__PURE__*/react.createElement("g",{transform:"translate(125,12)"},/*#__PURE__*/react.createElement("circle",{fill:"black",r:"1.75"}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:"1.5",fill:"none",d:" m -2.5 -3 a 4 4 0 0 0 0 6 M -4 -4.5 a 6.25 6.25 0 0 0 0 9 M 2.5 -3 a 4 4 0 0 1 0 6 M 4 -4.5 a 6.25 6.25 0 0 1 0 9 "})),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(120 60) scale(0.8)"}),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) "}),/*#__PURE__*/react.createElement("text",{fontFamily:"Galano Grotesque Bold",x:16,y:15,fontSize:10},"Solar")),/*#__PURE__*/react.createElement("g",{transform:"scale("+widgetScale+") translate("+w/(2*widgetScale)+" "+w/(2*widgetScale)+")",x:w/(2*widgetScale),y:w/(2*widgetScale)},/*#__PURE__*/react.createElement("path",{stroke:"black",fill:active,fillOpacity:value,strokeWidth:1,x:0,y:0,d:"\n              m -9.25 -11.5\n              h 18.5\n              a 15 15 0 0 1 0 20\n              h -18.5\n              a 15 15 0 0 1 0 -20\n              z\n              "}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:0.5,fill:"none",x:0,y:0,d:"\n              m -11.5 -9\n              h 15\n              a 1.25 1.25 0 0 1 0 2.5\n              h -7.5\n              a 1.25 1.25 0 0 0 0 2.5\n              h 7.5\n              a 1.25 1.25 0 0 1 0 2.5\n              h -7.5\n              a 1.25 1.25 0 0 0 0 2.5\n              h 7.5\n              a 1.25 1.25 0 0 1 0 2.5\n              h -7.5\n              a 1.25 1.25 0 0 0 0 2.5\n              h 15\n              "})),/*#__PURE__*/react.createElement("text",Object.assign({className:"galanoAltA",x:w/2,y:w*0.7,fontSize:"8",lengthAdjust:".5em"},textProps,{fill:"#000"}),tvalue)));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdSonarWidget.tsx
function FwdSonarWidget(props){var{value,color,size}=props;var{active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var clipId=(0,react.useId)();var hasValue=!isNaN(value);var tvalue=hasValue?(value/100).toFixed(2)+" m":"--";var w=60;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:w*1.2,size:size},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},/*#__PURE__*/react.createElement("g",{transform:"scale("+w/(1+141+2*15.5-2*9.5+2*3.25+2*(8-3.25))+")"},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"jacdac-connector"},/*#__PURE__*/react.createElement("path",{fill:"#AAA",d:"M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{fill:"white",stroke:"black",strokeWidth:"1",transform:"rotate(180 72.5 69.5) translate(-12 -60)",d:" M 0.5, 0.5 m 5.25, 8 a 8,8 0 0 1 8,-8 h 117 a 8,8 0 0 1 8,8 v 32 a 4.25,4.25 0 0 1 -4.25,4.25 h -9.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 15.5 a 3.5,3.5 0 0 1 3.5,3.5 v 19 a 3.5,3.5 0 0 1 -3.5,3.5 h -15.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 21.5 a 4.25,4.25 0 0 1 4.25,4.25 v 66.75 a 8,8 0 0 1 -8,8 h -141 a 8,8 0 0 1 -8,-8 v -66.75 a 4.25,4.25 0 0 1 4.25,-4.25 h 21.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -15.5 a 3.5,3.5 0 0 1 -3.5,-3.5 v -19 a 3.5,3.5 0 0 1 3.5,-3.5 h 15.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -9.5 a 4.25,4.25 0 0 1 -4.25,-4.25 v -16.5 a 4.25,4.25 0 0 0 0,-8.5 z "})),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("circle",{fill:"#deddd8",r:"28",stroke:"black",strokeWidth:"1",transform:"translate(33 38)"}),/*#__PURE__*/react.createElement("circle",{fill:"white",r:"22",stroke:"black",strokeWidth:"1",transform:"translate(33 38)"})),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("circle",{fill:"#deddd8",r:"28",stroke:"black",strokeWidth:"1",transform:"translate(137 38)"}),/*#__PURE__*/react.createElement("circle",{fill:"white",r:"22",stroke:"black",strokeWidth:"1",transform:"translate(137 38)"})),/*#__PURE__*/react.createElement("g",{transform:"translate(132,185)"},/*#__PURE__*/react.createElement("circle",{fill:"black",r:"1.75",transform:"scale(1.2)"}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:"1.5",fill:"none",transform:"scale(1.2)",d:" m -2.5 -3 a 4 4 0 0 0 0 6 M -4 -4.5 a 6.25 6.25 0 0 0 0 9 M 2.5 -3 a 4 4 0 0 1 0 6 M 4 -4.5 a 6.25 6.25 0 0 1 0 9 "})),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(132 120) scale(0.8)"}),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(38 120) translate(0 11) rotate(180) scale(0.8) translate(0 -11) "}),/*#__PURE__*/react.createElement("text",{className:"galanoAltA",x:26,y:190,fontSize:11},"Sonar")),/*#__PURE__*/react.createElement("text",Object.assign({x:w/2,y:w/2,fontSize:"8"},textProps,{fill:"#000"}),tvalue)));}
;// CONCATENATED MODULE: ./src/components/widgets/FwdTouchWidget.tsx
function FwdTouchWidget(props){var{checked,label,color,size,onDown,onUp}=props;var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var buttonProps=(0,useSvgButtonProps/* default */.Z)(label,onDown,onUp);var w=90;var mo=checked?3:5;var r=w/2;var cx=r;var cy=r;var ri=r-mo;var rn=8;return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:w,size:size},/*#__PURE__*/react.createElement("g",{className:"fwdEduWidget"},/*#__PURE__*/react.createElement("g",{transform:"scale("+w/(1+117+2*15.5-2*9.5+2*3.25+2*(8-3.25))+")"},/*#__PURE__*/react.createElement("defs",null,/*#__PURE__*/react.createElement("g",{id:"jacdac-connector"},/*#__PURE__*/react.createElement("path",{fill:"#AAA",d:"M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"}))),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{id:"outline",fill:"white",stroke:"black",strokeWidth:"1",d:" M 0.5, 0.5 m 5.25, 8 a 8,8 0 0 1 8,-8 h 117 a 8,8 0 0 1 8,8 v 32 a 4.25,4.25 0 0 1 -4.25,4.25 h -9.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 15.5 a 3.5,3.5 0 0 1 3.5,3.5 v 19 a 3.5,3.5 0 0 1 -3.5,3.5 h -15.5 a 4.25,4.25 0 0 0 -4.25,4.25 v 3 a 4.25,4.25 0 0 0 4.25,4.25 h 9.5 a 4.25,4.25 0 0 1 4.25,4.25 v 32 a 8,8 0 0 1 -8,8 h -117 a 8,8 0 0 1 -8,-8 v -32 a 4.25,4.25 0 0 1 4.25,-4.25 h 9.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -15.5 a 3.5,3.5 0 0 1 -3.5,-3.5 v -19 a 3.5,3.5 0 0 1 3.5,-3.5 h 15.5 a 4.25,4.25 0 0 0 4.25,-4.25 v -3 a 4.25,4.25 0 0 0 -4.25,-4.25 h -9.5 a 4.25,4.25 0 0 1 -4.25,-4.25 v -16.5 a 4.25,4.25 0 0 0 0,-8.5 z "})),/*#__PURE__*/react.createElement("g",{transform:"translate(125,12)"},/*#__PURE__*/react.createElement("circle",{fill:"black",r:"1.75"}),/*#__PURE__*/react.createElement("path",{stroke:"black",strokeWidth:"1.5",fill:"none",d:" m -2.5 -3 a 4 4 0 0 0 0 6 M -4 -4.5 a 6.25 6.25 0 0 0 0 9 M 2.5 -3 a 4 4 0 0 1 0 6 M 4 -4.5 a 6.25 6.25 0 0 1 0 9 "})),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(120 60) scale(0.8)"}),/*#__PURE__*/react.createElement("use",{href:"#jacdac-connector",transform:"translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) "}),/*#__PURE__*/react.createElement("text",{x:16,y:15,fontSize:10},"Touch")),/*#__PURE__*/react.createElement("g",Object.assign({transform:"translate("+w/2+" "+(w/2+w*0.125)+") scale(0.45)"},buttonProps),/*#__PURE__*/react.createElement("rect",{x:-w/2,y:-2*w/3,rx:"10",width:w,height:4*w/3,fill:"white",fillOpacity:"0",stroke:"#CCC",strokeWidth:"1.2"}),/*#__PURE__*/react.createElement("circle",{x:"0",y:"0",r:3*w/8,fill:checked?active:"white",stroke:"black",strokeWidth:"2"}),/*#__PURE__*/react.createElement("circle",{x:"0",y:"0",r:2*w/8,fill:"none",stroke:"black",strokeWidth:"2"}),/*#__PURE__*/react.createElement("circle",{x:"0",y:"0",r:w/8,fill:"none",stroke:"black",strokeWidth:"2"}))));}
// EXTERNAL MODULE: ./src/components/hooks/useEvent.ts
var useEvent = __webpack_require__(34452);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardFwdEduWidgets.tsx
function isFwdEdu(device){var FwdEduDevices=(0,useDeviceSpecifications/* default */.Z)().filter(device=>(device===null||device===void 0?void 0:device.productIdentifiers)&&device.company.match(/(fwd|forward) ?edu(cation)?/i)).flatMap(device=>device.productIdentifiers);var deviceId=(0,useDeviceProductIdentifier/* default */.Z)(device);return FwdEduDevices.includes(deviceId);}function isRotaryVariant(service){return service.serviceIndex>1&&service.device.serviceClassAt(service.serviceIndex-1)==jacdac.SRV_ROTARY_ENCODER;}function buttonWidgetProps(service,server){var{0:pressed,1:setPressed}=(0,react.useState)(false);var downEvent=(0,useEvent/* default */.Z)(service,jacdac.ButtonEvent.Down);var upEvent=(0,useEvent/* default */.Z)(service,jacdac.ButtonEvent.Up);(0,react.useEffect)(()=>downEvent.subscribe(jacdac.EVENT,()=>setPressed(true)),[downEvent]);(0,react.useEffect)(()=>upEvent.subscribe(jacdac.EVENT,()=>setPressed(false)),[upEvent]);return{onDown:()=>server===null||server===void 0?void 0:server.down(),onUp:()=>server===null||server===void 0?void 0:server.up(),checked:pressed,label:"button "+(pressed?"down":"up")};}function lineWidgetProps(value,register,server){var handleDown=()=>{server.reading.setValues([value>0?0:1.0]);register.refresh();};return{buttonProps:(0,useSvgButtonProps/* default */.Z)("line detector",server&&handleDown)};}function dialWidgetProps(value,service){var clicksPerTurnRegister=(0,useRegister/* default */.Z)(service,jacdac.RotaryEncoderReg.ClicksPerTurn);var[clicksPerTurn=20]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(clicksPerTurnRegister);return{position:value,angle:value/clicksPerTurn*360};}function lazifyWidget(widget,widgetProps){return/*#__PURE__*/react.createElement(Suspense/* default */.Z,{fallback:/*#__PURE__*/react.createElement(CircularProgress/* default */.Z,{"aria-label":"loading...",color:widgetProps.color,disableShrink:true,variant:"indeterminate",size:"1rem"})},/*#__PURE__*/(0,react.createElement)(widget,widgetProps));}function FwdEduSubstituteWidget(dashboardProps){var{service}=dashboardProps;switch(service.serviceClass){case jacdac.SRV_RELAY:return createPumpWidget(dashboardProps);case jacdac.SRV_SERVO:return createServoWidget(dashboardProps);case jacdac.SRV_LED:return createLEDWidget(dashboardProps);default:break;}var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var size='clamp(6rem, 12vw, 14vh)';// semi-generics
var registerNumber=service.readingRegister.specification.identifier||257;var valueReg=(0,useRegister/* default */.Z)(service,registerNumber);var[value]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(valueReg,dashboardProps);var widgetProps={color:color,size:size,value:value};switch(service.serviceClass){case jacdac.SRV_DISTANCE:return lazifyWidget(FwdSonarWidget,{color:widgetProps.color,value:widgetProps.value*100,size:'clamp(6rem, 15vw, 20vh'});case jacdac.SRV_LIGHT_LEVEL:return lazifyWidget(FwdSolarWidget,widgetProps);case jacdac.SRV_SOIL_MOISTURE:return lazifyWidget(FwdSoilMoistureWidget,Object.assign({},widgetProps,{size:'clamp(14rem, 12vw, 16vh)'}));case jacdac.SRV_BUTTON:return lazifyWidget(isRotaryVariant(service)?FwdDialButtonWidget:FwdTouchWidget,Object.assign({},widgetProps,buttonWidgetProps(service,server)));case jacdac.SRV_REFLECTED_LIGHT:return lazifyWidget(FwdLineWidget,Object.assign({},widgetProps,{size:'clamp(4rem, 8vw, 12vh)'},lineWidgetProps(value,valueReg,server)));case jacdac.SRV_ROTARY_ENCODER:return lazifyWidget(FwdDialWidget,Object.assign({},widgetProps,dialWidgetProps(value,service)));// case SRV_RELAY:
// case SRV_SERVO:
// case SRV_LED:
default:return DashboardServiceDefaultWidget(dashboardProps);}}
// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__(79211);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/widgets/OptionalTooltip.tsx
var OptionalTooltip = __webpack_require__(86992);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardButton.tsx
function DashboardButton(props){var{service}=props;var{0:pressed,1:setPressed}=(0,react.useState)(false);var analogRegister=(0,useRegister/* default */.Z)(service,constants/* ButtonReg.Analog */.CP7.Analog);var analog=(0,useRegisterValue/* useRegisterBoolValue */.I8)(analogRegister);// don't track reading, use events only
var downEvent=(0,useEvent/* default */.Z)(service,constants/* ButtonEvent.Down */.XKP.Down);var upEvent=(0,useEvent/* default */.Z)(service,constants/* ButtonEvent.Up */.XKP.Up);(0,react.useEffect)(()=>downEvent.subscribe(constants/* EVENT */.Ks0,()=>setPressed(true)),[downEvent]);(0,react.useEffect)(()=>upEvent.subscribe(constants/* EVENT */.Ks0,()=>setPressed(false)),[upEvent]);if(!analog)return/*#__PURE__*/react.createElement(BinaryButton,Object.assign({},props,{pressed:pressed}));else return/*#__PURE__*/react.createElement(AnalogButton,Object.assign({},props,{pressed:pressed}));}function BinaryButton(props){var{service,pressed}=props;var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var label="button "+(pressed?"down":"up");var handleDown=()=>server===null||server===void 0?void 0:server.down();var handleUp=()=>server===null||server===void 0?void 0:server.up();var widgetSize="clamp(3rem, 10vw, 10vh)";return/*#__PURE__*/react.createElement(OptionalTooltip/* default */.Z,{title:!server?"Use the physical button!":undefined},/*#__PURE__*/react.createElement(ButtonWidget/* default */.Z,{checked:!!pressed,color:color,onDown:server?handleDown:undefined,onUp:server?handleUp:undefined,label:label,size:widgetSize}));}var ACTIVE_SPEED=0.05;var INACTIVE_SPEED=0.1;var LABEL_PRECISION=2;function AnalogButton(props){var{service,pressed,visible}=props;var{mixins}=service;var pressureRegister=(0,useRegister/* default */.Z)(service,constants/* ButtonReg.Pressure */.CP7.Pressure);var[pressure]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(pressureRegister,{visible});// find threshold if any
var thresholdRegister=(0,react.useMemo)(()=>{var _mixins$find;return(_mixins$find=mixins.find(cfg=>!!cfg.register(constants/* SystemReg.ActiveThreshold */.ZJq.ActiveThreshold)))===null||_mixins$find===void 0?void 0:_mixins$find.register(constants/* SystemReg.ActiveThreshold */.ZJq.ActiveThreshold);},[service]);var[threshold]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(thresholdRegister,{visible});var widgetSize="clamp(3rem, 10vw, 10vh)";var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var label="button pressure "+(0,utils/* roundWithPrecision */.JI)(pressure,LABEL_PRECISION);var{background,controlBackground,active}=(0,useWidgetTheme/* default */.Z)(color);var{0:down,1:setDown}=(0,react.useState)(false);var handleDown=()=>{setDown(true);};var handleUp=()=>{setDown(false);};var buttonProps=(0,useSvgButtonProps/* default */.Z)(label,server&&handleDown,server&&handleUp);(0,useAnimationFrame/* default */.Z)(()=>{if(!server)return false;var[p]=server.reading.values();var keepAnimating=true;if(down){if(p>1-ACTIVE_SPEED){server.reading.setValues([1]);keepAnimating=false;}else server.reading.setValues([p+ACTIVE_SPEED]);}else{if(p<INACTIVE_SPEED){server.reading.setValues([0]);keepAnimating=false;}else server.reading.setValues([p-INACTIVE_SPEED]);}server.reading.sendGetAsync();// refresh ui
return keepAnimating;},[down]);var w=64;var mo=pressed?3:5;var r=w/2;var cx=r;var cy=r;var rp=r-mo;var ri=rp-mo;var ps=mo;var range=360;/*
        {buttonVariant === AnalogButtonVariant.Capacitive && <path transform={`translate(20,20)`} aria-hidden={true}
            pointerEvents="none"
            style={{ userSelect: "none" }}
            fill={background}
            d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path>}
            */return/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,size:widgetSize},/*#__PURE__*/react.createElement("rect",{x:0,y:0,rx:2,ry:2,width:w,height:w,fill:background}),pressure&&/*#__PURE__*/react.createElement("path",{d:(0,svgutils/* describeArc */.x8)(cx,cy,rp,0,pressure*range),stroke:active,strokeLinecap:"round",strokeWidth:ps}),threshold!==undefined&&/*#__PURE__*/react.createElement("circle",{cx:cx,cy:mo,r:mo/3,"aria-label":"active threshold "+(0,utils/* roundWithPrecision */.JI)(threshold,LABEL_PRECISION),fill:controlBackground,transform:"rotate("+range*threshold+", "+cx+", "+cy+")"}),/*#__PURE__*/react.createElement("circle",Object.assign({cx:cx,cy:cy,r:ri,fill:pressed?active:controlBackground},buttonProps)));}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardRotaryEncoder.tsx
function DashboardRotaryEncoder(props){var{service}=props;var positionRegister=(0,useRegister/* default */.Z)(service,constants/* RotaryEncoderReg.Position */.$v5.Position);var[position=0]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(positionRegister,props);var clicksPerTurnRegister=(0,useRegister/* default */.Z)(service,constants/* RotaryEncoderReg.ClicksPerTurn */.$v5.ClicksPerTurn);var[clicksPerTurn=12]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(clicksPerTurnRegister,props);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var{background,controlBackground,active,textProps}=(0,useWidgetTheme/* default */.Z)(color);var label=""+position;var widgetSize="clamp(6rem, 15vw, 15vh)";var w=37.794;var r=0.06;var fs=Math.max(0.2,0.5-label.length*0.1);var handleChange=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(ev,newValue){server===null||server===void 0?void 0:server.reading.setValues([newValue]);positionRegister.refresh();clicksPerTurnRegister.refresh();});return function handleChange(_x,_x2){return _ref.apply(this,arguments);};}();var throttled=(0,useThrottledValue/* default */.Z)(position,clicksPerTurn,1.5);var angle=throttled/clicksPerTurn*360;var range=Math.abs(Math.round(position/clicksPerTurn));var min=(-range-1)*clicksPerTurn;var max=(range+1)*clicksPerTurn;var marks=[{value:0}];return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"column"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{title:"rotary encoder at position "+position,size:widgetSize,width:w,height:w,viewBox:"0 0 1 1"},/*#__PURE__*/react.createElement("g",{transform:"rotate("+angle+", 0.5, 0.5)"},/*#__PURE__*/react.createElement("path",{fill:background,d:"M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"}),/*#__PURE__*/react.createElement("path",{fill:controlBackground,d:"M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"}),/*#__PURE__*/react.createElement("circle",{cx:0.5,cy:0.19,r:r,fill:active})),/*#__PURE__*/react.createElement("text",Object.assign({x:0.5,y:0.5,fontSize:fs},textProps),label))),server&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Slider/* default */.ZP,{color:color,min:min,max:max,step:1,value:position,valueLabelDisplay:"off",onChange:handleChange,marks:marks})));}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSwitch.tsx
function DashboardSwitch(props){var{service}=props;var labelId=(0,react.useId)();var activeRegister=(0,useRegister/* default */.Z)(service,constants/* SwitchReg.Active */.FNv.Active);var variantRegister=(0,useRegister/* default */.Z)(service,constants/* SwitchReg.Variant */.FNv.Variant);var on=(0,useRegisterValue/* useRegisterBoolValue */.I8)(activeRegister,props);var[switchVariant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(variantRegister,props);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var widgetSize="clamp(5em, 25vw, 100%)";var title=!server?"Use the physical switch!":undefined;var handleToggle=()=>{var _server$toggle;return server===null||server===void 0?void 0:(_server$toggle=server.toggle)===null||_server$toggle===void 0?void 0:_server$toggle.call(server);};if(on===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:activeRegister});switch(switchVariant){case constants/* SwitchVariant.PushButton */.fhu.PushButton:return/*#__PURE__*/react.createElement(OptionalTooltip/* default */.Z,{title:title},/*#__PURE__*/react.createElement(ButtonWidget/* default */.Z,{checked:on,color:color,label:on?"active":"inactive",onDown:server&&handleToggle,size:widgetSize}));default:return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(OptionalTooltip/* default */.Z,{title:title},/*#__PURE__*/react.createElement(Switch/* default */.Z,{"aria-labelledby":labelId,color:color,checked:on,onChange:server&&handleToggle})),/*#__PURE__*/react.createElement("label",{id:labelId},on?"on":"off"));}}
// EXTERNAL MODULE: ./jacdac-ts/src/servers/gamepadserver.ts
var gamepadserver = __webpack_require__(97684);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardGamepad.tsx
var buttonLabels={[constants/* GamepadButtons.Left */.p69.Left]:"\u25C4",[constants/* GamepadButtons.Up */.p69.Up]:"\u25B2",[constants/* GamepadButtons.Down */.p69.Down]:"\u25BC",[constants/* GamepadButtons.Right */.p69.Right]:"\u25BA"};function decay(value,rate,precision){var nv=value*rate;if(Math.abs(nv)<precision)nv=0;return nv;}function GamepadWidget(props){var{service}=props;var register=(0,useRegister/* default */.Z)(service,constants/* GamepadReg.Direction */.XTX.Direction);var[buttons,x,y]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register,props);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var hostValues=()=>{var[,x,y]=server.reading.values();return[x,y];};var onUpdate=(newx,newy)=>{server.updateDirection(newx,newy);register.refresh();};var{active,background,controlBackground}=(0,useWidgetTheme/* default */.Z)(color);var dragSurfaceRef=(0,react.useRef)();var{0:grabbing,1:setGrabbing}=(0,react.useState)(false);var w=40;var w2=w>>1;var cx=w2;var cy=w2;var rp=2;var rc=6;var rj=10;var pw=12;var ph=8;var jx=cx+(x||0)*rj;var jy=cy+(y||0)*rj;var jw=1;var updateGamepadDrag=(x,y)=>{var bounds=dragSurfaceRef.current.getBoundingClientRect();var dx=(x-bounds.left)*(w/bounds.width)-w2;var dy=(y-bounds.top)*(w/bounds.height)-w2;var angle=Math.atan2(dy,dx);var distance=Math.min(Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2)),rj)/rj;var newx=distance*Math.cos(angle);var newy=distance*Math.sin(angle);onUpdate(newx,newy);};var handlePointerDown=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(ev){ev.preventDefault();var circle=ev.target;circle.setPointerCapture(ev.pointerId);setGrabbing(true);updateGamepadDrag(ev.clientX,ev.clientY);});return function handlePointerDown(_x){return _ref.apply(this,arguments);};}();var handlePointerUp=ev=>{ev.preventDefault();var circle=ev.target;circle.releasePointerCapture(ev.pointerId);setGrabbing(false);};var handlePointerMove=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(ev){ev.preventDefault();if(grabbing)updateGamepadDrag(ev.clientX,ev.clientY);});return function handlePointerMove(_x2){return _ref2.apply(this,arguments);};}();(0,useAnimationFrame/* default */.Z)(()=>{if(!server||grabbing)return false;// let use do its thing
var[ax,ay]=hostValues();var nx=decay(ax,0.95,16);var ny=decay(ay,0.95,16);// async
onUpdate(nx,ny);return nx!==0||ny!==0;},[server,grabbing]);var handleStyle={cursor:grabbing?"grabbing":"grab"};return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("circle",{ref:dragSurfaceRef,className:"Gamepad-background",cx:cx,cy:cy,r:"16",fill:background}),/*#__PURE__*/react.createElement("rect",{className:"dpad-up",x:"16",y:"6",width:ph,height:pw,rx:rp,fill:buttons&constants/* GamepadButtons.Up */.p69.Up?active:controlBackground}),/*#__PURE__*/react.createElement("rect",{className:"dpad-down",x:"16",y:"22",width:ph,height:pw,rx:rp,fill:buttons&constants/* GamepadButtons.Down */.p69.Down?active:controlBackground}),/*#__PURE__*/react.createElement("rect",{className:"dpad-right",x:"22",y:"16",width:pw,height:ph,ry:rp,fill:buttons&constants/* GamepadButtons.Right */.p69.Right?active:controlBackground}),/*#__PURE__*/react.createElement("rect",{className:"dpad-left",x:"6",y:"16",width:pw,height:ph,ry:rp,fill:buttons&constants/* GamepadButtons.Left */.p69.Left?active:controlBackground}),/*#__PURE__*/react.createElement("circle",{className:"dpad-center",cx:cx,cy:cy,r:rc,fill:controlBackground}),server?/*#__PURE__*/react.createElement("circle",{className:"Gamepad-handle",cx:jx,cy:jy,r:rc,fill:background,stroke:active,strokeWidth:jw,tabIndex:0,role:"button","aria-label":"Gamepad handle","arial-live":"polite",onPointerMove:handlePointerMove,onPointerDown:handlePointerDown,onPointerUp:handlePointerUp,style:handleStyle}):/*#__PURE__*/react.createElement("circle",{className:"Gamepad-handle",cx:jx,cy:jy,r:rc,fill:background,stroke:active,strokeWidth:jw,role:"button","aria-label":"Gamepad handle","arial-live":"polite"}));}function ArcadeButton(props){var{cx,cy,ro,color,pressure,ri,button,server,onRefresh}=props;var{textProps,active,background,controlBackground}=(0,useWidgetTheme/* default */.Z)(color);var checked=(pressure||0)>0;var title=constants/* GamepadButtons */.p69[button];var label=buttonLabels[button]||title[0];var handleDown=server?()=>{server.down(button);//, 0.7)
onRefresh();}:undefined;var handleUp=server?()=>{server.up(button);onRefresh();}:undefined;var buttonProps=(0,useSvgButtonProps/* default */.Z)(title,handleDown,handleUp);return/*#__PURE__*/react.createElement("g",{transform:"translate("+cx+","+cy+")",role:"button","aria-live":"polite","aria-label":"button "+title+" "+(checked?"down":"up")},/*#__PURE__*/react.createElement("circle",{cx:0,cy:0,r:ro,fill:background}),/*#__PURE__*/react.createElement("circle",Object.assign({cx:0,cy:0,r:ri,fill:checked?active:controlBackground},buttonProps),/*#__PURE__*/react.createElement("title",null,title)),/*#__PURE__*/react.createElement("text",Object.assign({cx:0,cy:0,fontSize:ri},textProps),label));}function DashboardGamepad(props){var{service}=props;var variantRegister=(0,useRegister/* default */.Z)(service,constants/* GamepadReg.Variant */.XTX.Variant);var[variant]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(variantRegister,props);var buttonsAvailableRegister=(0,useRegister/* default */.Z)(service,constants/* GamepadReg.ButtonsAvailable */.XTX.ButtonsAvailable);var[buttonsAvailable]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(buttonsAvailableRegister,props);// if variant is not specific, infer from buttons
if(variant===undefined){if(buttonsAvailable&gamepadserver/* GAMEPAD_GAMEPAD_EXTRA_BUTTONS */.su)variant=constants/* GamepadVariant.Gamepad */.OIc.Gamepad;else if(!buttonsAvailable||buttonsAvailable===constants/* GamepadButtons.A */.p69.A)variant=constants/* GamepadVariant.Thumb */.OIc.Thumb;}var directionRegister=(0,useRegister/* default */.Z)(service,constants/* GamepadReg.Direction */.XTX.Direction);var[buttons]=(0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(directionRegister,props);var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var{background}=(0,useWidgetTheme/* default */.Z)(color);// buttonsAvailable should be defined by now
var analog=!(buttonsAvailable&gamepadserver/* GAMEPAD_DPAD_BUTTONS */._i);var hasABButtons=!!(buttonsAvailable&(constants/* GamepadButtons.A */.p69.A|constants/* GamepadButtons.B */.p69.B));var w=256;var h=128;var cw=w/12;var ch=h/4;var ro=cw-2;var ri=ro-4;var sro=ro-10;var sri=sro-2;var scy=sro;var pos=(0,react.useMemo)(()=>[{id:constants/* GamepadButtons.Left */.p69.Left,cx:cw*1.5,cy:2*ch,small:false},{id:constants/* GamepadButtons.Up */.p69.Up,cx:cw*3,cy:ch,small:false},{id:constants/* GamepadButtons.Right */.p69.Right,cx:cw*4.5,cy:2*ch,small:false},{id:constants/* GamepadButtons.Down */.p69.Down,cx:cw*3,cy:3*ch,small:false},{id:constants/* GamepadButtons.A */.p69.A,cx:cw*10.5,cy:ch*1.25,small:false},{id:constants/* GamepadButtons.B */.p69.B,cx:cw*9.5,cy:ch*2.75,small:false},{id:constants/* GamepadButtons.X */.p69.X,cx:cw*8.5,cy:ch*0.75,small:false},{id:constants/* GamepadButtons.Y */.p69.Y,cx:cw*7.5,cy:ch*2.25,small:false},{id:constants/* GamepadButtons.Menu */.p69.Menu,cx:cw*6,cy:scy,small:true},{id:constants/* GamepadButtons.Select */.p69.Select,cx:cw*5,cy:scy,small:true},{id:constants/* GamepadButtons.Exit */.p69.Exit,cx:cw*7,cy:scy,small:true},{id:constants/* GamepadButtons.Reset */.p69.Reset,cx:cw*8,cy:scy,small:true}].filter(p=>!!(p.id&buttonsAvailable)),[buttonsAvailable]);var handleRefresh=/*#__PURE__*/function(){var _ref3=(0,asyncToGenerator/* default */.Z)(function*(){return yield directionRegister.refresh();});return function handleRefresh(){return _ref3.apply(this,arguments);};}();var abx=cw*8+1;var aby=ch*3+4;var abr=cw/2;var abw=cw*5-6;var padcx=3*cw;var padcy=2*ch;var padr=2.6*cw;// need button info
if(buttonsAvailable===undefined)return/*#__PURE__*/react.createElement(DashboardRegisterValueFallback/* default */.Z,{register:buttonsAvailableRegister});return/*#__PURE__*/react.createElement(OptionalTooltip/* default */.Z,{title:!server?"Use the physical Gamepad!":undefined},/*#__PURE__*/react.createElement(SvgWidget/* default */.Z,{width:w,height:h},!analog&&/*#__PURE__*/react.createElement("circle",{cx:padcx,cy:padcy,r:padr,fill:"none",stroke:background,strokeWidth:4}),analog&&/*#__PURE__*/react.createElement("g",{transform:"scale("+padr/16+") translate("+-1.8+","+-1.8+")"},/*#__PURE__*/react.createElement(GamepadWidget,props)),hasABButtons&&/*#__PURE__*/react.createElement("rect",{transform:"rotate(-66, "+abx+", "+aby+")",x:abx,y:aby,rx:abr,ry:abr,width:abw,height:cw*2.2,fill:"none",stroke:background,strokeWidth:4}),pos.map(_ref4=>{var{id,cx,cy,small}=_ref4;return/*#__PURE__*/react.createElement(ArcadeButton,{key:id,cx:cx,cy:cy,ro:small?sro:ro,ri:small?sri:ri,button:id,server:server,onRefresh:handleRefresh,pressure:buttons&id?1:0,color:color});})));}
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx
// bundled
// lazy devices
var DashboardServo=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6301).then(__webpack_require__.bind(__webpack_require__, 36301)));var DashboardAccelerometer=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(7327)]).then(__webpack_require__.bind(__webpack_require__, 97327)));var DashboardBuzzer=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(9797)]).then(__webpack_require__.bind(__webpack_require__, 99797)));var DashboardLED=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(3818)]).then(__webpack_require__.bind(__webpack_require__, 13818)));var DashboardLEDStrip=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5913)]).then(__webpack_require__.bind(__webpack_require__, 95913)));var DashboardLEDSingle=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 815).then(__webpack_require__.bind(__webpack_require__, 70815)));var DashboardRoleManager=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(195)]).then(__webpack_require__.bind(__webpack_require__, 40195)));var DashboardTrafficLight=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 988).then(__webpack_require__.bind(__webpack_require__, 10988)));var DashboardCharacterScreen=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5959)]).then(__webpack_require__.bind(__webpack_require__, 85959)));var DashboardBrailleDisplay=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(7953)]).then(__webpack_require__.bind(__webpack_require__, 77953)));var DashboardRainGauge=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6329).then(__webpack_require__.bind(__webpack_require__, 16329)));var DashboardDotMatrix=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5937).then(__webpack_require__.bind(__webpack_require__, 15937)));var DashboardWindDirection=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8685).then(__webpack_require__.bind(__webpack_require__, 68685)));var DashboardMatrixKeypad=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6760).then(__webpack_require__.bind(__webpack_require__, 36760)));var DashboardReflectedLight=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1560).then(__webpack_require__.bind(__webpack_require__, 1560)));var DashboardPower=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4225).then(__webpack_require__.bind(__webpack_require__, 94225)));var DashboardSpeechSynthesis=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 579).then(__webpack_require__.bind(__webpack_require__, 20579)));var DashboardSoilMoisture=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1914).then(__webpack_require__.bind(__webpack_require__, 81914)));var DashboardRealTimeClock=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5457).then(__webpack_require__.bind(__webpack_require__, 15457)));var DashboardSatNav=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 248).then(__webpack_require__.bind(__webpack_require__, 40248)));var DashboardSevenSegmentDisplay=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9253).then(__webpack_require__.bind(__webpack_require__, 69253)));var DashboardMotion=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4177).then(__webpack_require__.bind(__webpack_require__, 44177)));var DashboardWaterLevel=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3656).then(__webpack_require__.bind(__webpack_require__, 53656)));var DashboardColor=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8827).then(__webpack_require__.bind(__webpack_require__, 28827)));var DashboardSoundPlayer=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5137)]).then(__webpack_require__.bind(__webpack_require__, 65137)));var DashboardSoundLevel=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(2866)]).then(__webpack_require__.bind(__webpack_require__, 93111)));var DashboardSoundSpectrum=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(4556)]).then(__webpack_require__.bind(__webpack_require__, 54556)));var DashboardRandomNumberGenerator=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6192).then(__webpack_require__.bind(__webpack_require__, 86192)));var DashboardCompass=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3389).then(__webpack_require__.bind(__webpack_require__, 33389)));var DashboardGyroscope=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(317), __webpack_require__.e(2532)]).then(__webpack_require__.bind(__webpack_require__, 32532)));var DashboardSolenoid=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6076).then(__webpack_require__.bind(__webpack_require__, 16076)));var DashboardBitRadio=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2125).then(__webpack_require__.bind(__webpack_require__, 22125)));var DashboardHIDKeyboard=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8519).then(__webpack_require__.bind(__webpack_require__, 88519)));var DashboardHIDMouse=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6370).then(__webpack_require__.bind(__webpack_require__, 76370)));var DashboardHIDJoystick=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9161).then(__webpack_require__.bind(__webpack_require__, 84990)));var DashboardCloudConfiguration=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(8857), __webpack_require__.e(3876), __webpack_require__.e(4157)]).then(__webpack_require__.bind(__webpack_require__, 34157)));var DashboardWifi=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(8857), __webpack_require__.e(3876), __webpack_require__.e(8253)]).then(__webpack_require__.bind(__webpack_require__, 88253)));var DashboardVibrationMotor=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2209).then(__webpack_require__.bind(__webpack_require__, 12209)));var DashboardCODALMessageBus=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8821).then(__webpack_require__.bind(__webpack_require__, 8821)));var DashboardRelay=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3111).then(__webpack_require__.bind(__webpack_require__, 73111)));var DashboardGPIO=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1366).then(__webpack_require__.bind(__webpack_require__, 51366)));var DashboardLightBulb=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9800).then(__webpack_require__.bind(__webpack_require__, 89800)));var DashboardDeviceScriptManager=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6775).then(__webpack_require__.bind(__webpack_require__, 56775)));var DashboardCloudAdapter=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2195), __webpack_require__.e(743)]).then(__webpack_require__.bind(__webpack_require__, 20743)));var DashboardPlanarPosition=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1583).then(__webpack_require__.bind(__webpack_require__, 6812)));var DashboardSerial=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1056).then(__webpack_require__.bind(__webpack_require__, 61056)));var DashboardRos=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3664).then(__webpack_require__.bind(__webpack_require__, 23664)));var DashboardIndexedScreen=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8794).then(__webpack_require__.bind(__webpack_require__, 18794)));// icons
var PowerSettingsNewIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9858).then(__webpack_require__.bind(__webpack_require__, 39858)));var MusicNoteIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4362).then(__webpack_require__.bind(__webpack_require__, 64362)));var AppsIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4492).then(__webpack_require__.bind(__webpack_require__, 94492)));var SensorsIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1671).then(__webpack_require__.bind(__webpack_require__, 71671)));var MemoryIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6895).then(__webpack_require__.bind(__webpack_require__, 6895)));var CloudQueueIcon=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9418).then(__webpack_require__.bind(__webpack_require__, 39418)));var SerialIcon=/*#__PURE__*/(0,react.lazy)(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 67752)));var serviceViews={[constants/* SRV_ROLE_MANAGER */.igi]:{component:DashboardRoleManager,weight:()=>2},[constants/* SRV_BUZZER */.J1$]:{component:DashboardBuzzer,weight:()=>4,expandable:true,icon:MusicNoteIcon},[constants/* SRV_LED_STRIP */.w1B]:{component:DashboardLEDStrip,weight:()=>3,expandable:true},[constants/* SRV_INDEXED_SCREEN */.BEb]:{component:DashboardIndexedScreen,weight:()=>3,expandable:true},[constants/* SRV_LED */.i04]:{component:DashboardLED,weight:()=>3,expandable:true},[constants/* SRV_ACCELEROMETER */.QF7]:{component:DashboardAccelerometer,weight:()=>3,expandable:true},[constants/* SRV_ROTARY_ENCODER */.lNp]:{component:DashboardRotaryEncoder,bundled:true,weight:()=>2},[constants/* SRV_BUTTON */.XJR]:{component:DashboardButton,bundled:true},[constants/* SRV_SERVO */.$X_]:{component:DashboardServo},[constants/* SRV_SWITCH */.Crg]:{component:DashboardSwitch,bundled:true},[constants/* SRV_TRAFFIC_LIGHT */.jHN]:{component:DashboardTrafficLight},[constants/* SRV_CHARACTER_SCREEN */.IB4]:{component:DashboardCharacterScreen,weight:()=>3,expandable:true},[constants/* SRV_BRAILLE_DISPLAY */.IvW]:{component:DashboardBrailleDisplay,weight:()=>2,expandable:true},[constants/* SRV_RAIN_GAUGE */.NnQ]:{component:DashboardRainGauge},[constants/* SRV_DOT_MATRIX */.GDq]:{component:DashboardDotMatrix,weight:()=>3,expandable:true,icon:AppsIcon},[constants/* SRV_WIND_DIRECTION */.M$m]:{component:DashboardWindDirection},[constants/* SRV_MATRIX_KEYPAD */.UB9]:{component:DashboardMatrixKeypad},[constants/* SRV_REFLECTED_LIGHT */.tky]:{component:DashboardReflectedLight},[constants/* SRV_POWER */.mQG]:{component:DashboardPower,expandable:true,icon:PowerSettingsNewIcon},[constants/* SRV_SPEECH_SYNTHESIS */.ydR]:{component:DashboardSpeechSynthesis},[constants/* SRV_SOIL_MOISTURE */.Bj3]:{component:DashboardSoilMoisture},[constants/* SRV_REAL_TIME_CLOCK */.XXX]:{component:DashboardRealTimeClock,expandable:true},[constants/* SRV_SAT_NAV */.kd3]:{component:DashboardSatNav},[constants/* SRV_LED_SINGLE */.k$K]:{component:DashboardLEDSingle},[constants/* SRV_GAMEPAD */.fNW]:{component:DashboardGamepad,bundled:true,weight:()=>3},[constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg]:{component:DashboardSevenSegmentDisplay,expandable:true},[constants/* SRV_MOTION */.yRl]:{component:DashboardMotion},[constants/* SRV_WATER_LEVEL */.Szz]:{component:DashboardWaterLevel},[constants/* SRV_COLOR */.Coy]:{component:DashboardColor,weight:()=>1},[constants/* SRV_SOUND_PLAYER */.OrM]:{component:DashboardSoundPlayer,weight:()=>1,expandable:true,icon:MusicNoteIcon},[constants/* SRV_SOUND_LEVEL */.GvX]:{component:DashboardSoundLevel,expandable:true},[constants/* SRV_RNG */.NMZ]:{component:DashboardRandomNumberGenerator},[constants/* SRV_COMPASS */.JTB]:{component:DashboardCompass},[constants/* SRV_GYROSCOPE */.R0$]:{component:DashboardGyroscope,weight:()=>3,expandable:true},[constants/* SRV_SOUND_SPECTRUM */.vsp]:{component:DashboardSoundSpectrum,weight:()=>2},[constants/* SRV_SOLENOID */.b68]:{component:DashboardSolenoid},[constants/* SRV_BIT_RADIO */.BYF]:{component:DashboardBitRadio,weight:()=>4,expandable:true,icon:SensorsIcon},[constants/* SRV_SERIAL */.DEy]:{component:DashboardSerial,weight:()=>2,icon:SerialIcon},[constants/* SRV_ROS */.YLZ]:{component:DashboardRos,expandable:true,weight:()=>4},[constants/* SRV_HID_KEYBOARD */.Hg9]:{component:DashboardHIDKeyboard,weight:()=>4,expandable:true},[constants/* SRV_HID_MOUSE */.Eef]:{component:DashboardHIDMouse,weight:()=>2},[constants/* SRV_HID_JOYSTICK */.vyo]:{component:DashboardHIDJoystick,weight:()=>2},[constants/* SRV_CLOUD_CONFIGURATION */.MW3]:{component:DashboardCloudConfiguration,weight:()=>2},[constants/* SRV_WIFI */.zti]:{component:DashboardWifi,weight:()=>4},[constants/* SRV_VIBRATION_MOTOR */.X8d]:{component:DashboardVibrationMotor,weight:()=>3},[constants/* SRV_CODAL_MESSAGE_BUS */.$6j]:{component:DashboardCODALMessageBus,weight:()=>2},[constants/* SRV_RELAY */.E4D]:{component:DashboardRelay},[constants/* SRV_GPIO */.xXh]:{component:DashboardGPIO,weight:()=>4},[constants/* SRV_LIGHT_BULB */.yWt]:{component:DashboardLightBulb},[constants/* SRV_PLANAR_POSITION */.T4d]:{component:DashboardPlanarPosition,weight:()=>1},[constants/* SRV_DEVICE_SCRIPT_MANAGER */.I5]:{component:DashboardDeviceScriptManager,expandable:true,icon:MemoryIcon},[constants/* SRV_CLOUD_ADAPTER */.Iin]:{component:DashboardCloudAdapter,weight:()=>4,expandable:true,icon:CloudQueueIcon}};function isExpandableView(serviceClass){var _serviceViews$service;return!!((_serviceViews$service=serviceViews[serviceClass])!==null&&_serviceViews$service!==void 0&&_serviceViews$service.expandable);}function hasServiceView(serviceClass){return!!serviceViews[serviceClass];}function DashboardServiceWidget(props){var{service}=props;var{specification}=service;var{component,bundled}=serviceViews[specification.classIdentifier]||{};var server=(0,useServiceServer/* default */.Z)(service);var color=server?"secondary":"primary";var useFwdWidget=isFwdEdu(service.device);// for FwdEdu widgets that replace Default widgets
if(useFwdWidget)return/*#__PURE__*/(0,react.createElement)(FwdEduSubstituteWidget,props);// no special support
if(!component)return/*#__PURE__*/(0,react.createElement)(DashboardServiceDefaultWidget,props);// precompiled
if(bundled)return/*#__PURE__*/(0,react.createElement)(component,props);// lazy loading
return/*#__PURE__*/react.createElement(Suspense/* default */.Z,{fallback:/*#__PURE__*/react.createElement(CircularProgress/* default */.Z,{"aria-label":"loading...",color:color,disableShrink:true,variant:"indeterminate",size:"1rem"})},/*#__PURE__*/(0,react.createElement)(component,props));}function dashboardServiceWeight(service){var _view$weight;var view=serviceViews[service.serviceClass];return view===null||view===void 0?void 0:(_view$weight=view.weight)===null||_view$weight===void 0?void 0:_view$weight.call(view,service);}function dashboardServiceIcon(serviceClass){var _serviceViews$service2;return(_serviceViews$service2=serviceViews[serviceClass])===null||_serviceViews$service2===void 0?void 0:_serviceViews$service2.icon;}

/***/ }),

/***/ 56225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceSpecifications; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecifications(options){var catalog=(0,_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specifications=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(catalog,_=>_===null||_===void 0?void 0:_.specifications(options),[JSON.stringify(options)],(a,b)=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayEq */ .vm)(a,b,(l,r)=>l.id===r.id));return specifications;}

/***/ }),

/***/ 68455:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useAnimationFrame; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useAnimationFrame(callback,deps){var requestRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var previousTimeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var animate=time=>{var active=true;if(previousTimeRef.current!=undefined){var deltaTime=time-previousTimeRef.current;active=callback(deltaTime);}previousTimeRef.current=time;if(active)requestRef.current=requestAnimationFrame(animate);// we're done
else requestRef.current=undefined;};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(callback){previousTimeRef.current=undefined;requestRef.current=requestAnimationFrame(animate);}return()=>requestRef.current!==undefined&&cancelAnimationFrame(requestRef.current);},deps||[]);}

/***/ }),

/***/ 34452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useEvent(service,identifier){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>service===null||service===void 0?void 0:service.event(identifier),[service,identifier]);}

/***/ }),

/***/ 22907:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useThrottledValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68455);
function useThrottledValue(value,maxRate,maxCycles){if(maxCycles===void 0){maxCycles=2;}var{0:actual,1:setActual}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);var animated=actual;(0,_useAnimationFrame__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(time=>{// no valid rate
if(isNaN(maxRate)||isNaN(animated)){setActual(value);return false;}// not a value yet
if(isNaN(value)){return false;}// increment towards value
var dt=time/1000;// s
var error=value-animated;var maxError=maxRate*dt;// deg
var active=true;animated+=Math.sign(error)*Math.min(Math.abs(error),maxError);// close to goal, finish animation
if(Math.abs(value-animated)/maxRate<0.01){animated=value;active=false;}// very far from goal, get closer immediately
if(!isNaN(maxCycles)){var maxErrorRange=maxRate*maxCycles;animated=Math.max(value-maxErrorRange,Math.min(value+maxErrorRange,animated));}// store and update ui
setActual(animated);return active;},[value,maxRate,maxCycles]);return actual;}

/***/ }),

/***/ 27362:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": function() { return /* binding */ DEFAULT_COLORS; },
/* harmony export */   "Z": function() { return /* binding */ ColorButtons; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2734);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6867);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91535);
var DEFAULT_COLORS=[{name:"red",value:0xff0000},{name:"blue",value:0x0000ff},{name:"green",value:0x00ff00},{name:"black",value:0x010101}];function ColorButtons(props){var theme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var{children,colors=DEFAULT_COLORS,color,onColorChange}=props;var handleSetColor=col=>()=>onColorChange(col);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,{container:true,spacing:1},colors.map(_ref=>{var{name,value}=_ref;var selected=value===color;var c=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .rgbToHtmlColor */ .b)(value);var title=value===color?name+" (selected)":name;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,{key:name,item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{style:{color:c},onClick:handleSetColor(value),"aria-label":title,title:title,sx:{backgroundColor:selected?c:theme.palette.grey[300]}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null)));}),children);}

/***/ })

}]);
//# sourceMappingURL=d9c2c8238250d353fa40428247d6d11612fec9b4-875bbf71487fe9bdf528.js.map