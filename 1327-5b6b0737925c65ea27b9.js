"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1327,9927],{

/***/ 27036:
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
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');
exports.Z = _default;

/***/ }),

/***/ 49161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardActions_CardActions; }
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/cardActionsClasses.js


function getCardActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardActions', slot);
}
const cardActionsClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardActions', ['root', 'spacing']);
/* harmony default export */ var CardActions_cardActionsClasses = ((/* unused pure expression or super */ null && (cardActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardActions/CardActions.js


const _excluded = ["disableSpacing", "className"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardActionsUtilityClass, classes);
};
const CardActionsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardActions',
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
  padding: 8
}, !ownerState.disableSpacing && {
  '& > :not(:first-of-type)': {
    marginLeft: 8
  }
}));
const CardActions = /*#__PURE__*/react.forwardRef(function CardActions(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardActions'
  });
  const {
      disableSpacing = false,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardActionsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardActions_CardActions = (CardActions);

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

/***/ 79332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94780);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59766);
/* harmony import */ var _InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74921);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90948);
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71657);
/* harmony import */ var _inputClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7021);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const _excluded = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(slots, _inputClasses__WEBPACK_IMPORTED_MODULE_3__/* .getInputUtilityClass */ .l, classes);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, classes, composedClasses);
};
const InputRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__/* .InputBaseRoot */ .Ej, {
  shouldForwardProp: prop => (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__/* .rootShouldForwardProp */ .FO)(prop) || prop === 'classes',
  name: 'MuiInput',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...(0,_InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__/* .rootOverridesResolver */ .Gx)(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    position: 'relative'
  }, ownerState.formControl && {
    'label + &': {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    '&:after': {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },

    [`&.${_inputClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].focused */ .Z.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: 'scaleX(1) translateX(0)'
    },
    [`&.${_inputClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error}`]: {
      '&:before, &:after': {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    '&:before': {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: 'absolute',
      right: 0,
      transition: theme.transitions.create('border-bottom-color', {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },

    [`&:hover:not(.${_inputClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disabled */ .Z.disabled}, .${_inputClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${_inputClasses__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disabled */ .Z.disabled}:before`]: {
      borderBottomStyle: 'dotted'
    }
  });
});
const InputInput = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__/* .InputBaseComponent */ .rA, {
  name: 'MuiInput',
  slot: 'Input',
  overridesResolver: _InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__/* .inputOverridesResolver */ ._o
})({});
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Input(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    props: inProps,
    name: 'MuiInput'
  });
  const {
      disableUnderline,
      components = {},
      componentsProps: componentsPropsProp,
      fullWidth = false,
      inputComponent = 'input',
      multiline = false,
      slotProps,
      slots = {},
      type = 'text'
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(props, _excluded);
  const classes = useUtilityClasses(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? (0,_mui_utils__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InputBase_InputBase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["Z"] = (Input);

/***/ }),

/***/ 7021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ getInputUtilityClass; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87462);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55827);




function getInputUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiInput', slot);
}
const inputClasses = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, _InputBase__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('MuiInput', ['root', 'underline', 'input']));
/* harmony default export */ __webpack_exports__["Z"] = (inputClasses);

/***/ }),

/***/ 21327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18515);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79332);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49161);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27036);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46259);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16821);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79104);
/* harmony import */ var _devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77682);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68320);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports
function RandomGenerator(props){var{device,firmware}=props;var{0:hex,1:setHex}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);var fieldId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var deviceCatalog=(0,_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();var compute=()=>device?deviceCatalog.uniqueDeviceId():firmware?deviceCatalog.uniqueFirmwareId(!hex):deviceCatalog.uniqueServiceId();var{0:value,1:setValue}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(compute());var{0:copySuccess,1:setCopySuccess}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var handleRegenerate=()=>{var v=compute();setValue(v);setCopySuccess(false);};var handleCopy=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){try{yield navigator.clipboard.writeText(value);setCopySuccess(true);}catch(err){setCopySuccess(false);}});return function handleCopy(){return _ref.apply(this,arguments);};}();var handleHex=(ev,checked)=>{setHex(checked);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(handleRegenerate,[hex]);var title=device?"Random Device Identifier":firmware?"Random Product Identifier":"Random Service Identifier";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null,value!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{variant:"h5",component:"h2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{id:fieldId,value:value,readOnly:true,inputProps:{"aria-label":"generated identifier"}}),copySuccess&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null)),value===undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{severity:"error"},"Oops, unable to generate a strong random number.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,null,firmware&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{label:"hex",checked:hex,onChange:handleHex}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{"aria-label":"copy random number to clipboard",size:"small",variant:"contained",onClick:handleCopy},"Copy"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx,{"aria-label":"regenerate random number",size:"small",variant:"contained",color:"primary",onClick:handleRegenerate},"Regenerate"))));}

/***/ }),

/***/ 77682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceCatalog; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/**
 * Gets the device catalog from the current bus
 * @returns
 */function useDeviceCatalog(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();return bus.deviceCatalog;}

/***/ })

}]);
//# sourceMappingURL=1327-5b6b0737925c65ea27b9.js.map