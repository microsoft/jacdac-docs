"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7286,4659],{

/***/ 84592:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ getListItemIconUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getListItemIconUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
/* harmony default export */ __webpack_exports__["Z"] = (listItemIconClasses);

/***/ }),

/***/ 33797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MenuItem_MenuItem; }
});

// UNUSED EXPORTS: overridesResolver

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
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(58974);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/dividerClasses.js
var dividerClasses = __webpack_require__(35097);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
var listItemIconClasses = __webpack_require__(84592);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(26336);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ var MenuItem_menuItemClasses = (menuItemClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js


const _excluded = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses = ownerState => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getMenuItemUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const MenuItemRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  shouldForwardProp: prop => (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes',
  name: 'MuiMenuItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, theme.typography.body1, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, {
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${MenuItem_menuItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${dividerClasses/* default.root */.Z.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses/* default.inset */.Z.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses/* default.root */.Z.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses/* default.inset */.Z.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses/* default.root */.Z.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up('sm')]: {
    minHeight: 'auto'
  }
}, ownerState.dense && (0,esm_extends/* default */.Z)({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${listItemIconClasses/* default.root */.Z.root} svg`]: {
    fontSize: '1.25rem'
  }
})));
const MenuItem = /*#__PURE__*/react.forwardRef(function MenuItem(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiMenuItem'
  });
  const {
      autoFocus = false,
      component = 'li',
      dense = false,
      divider = false,
      disableGutters = false,
      focusVisibleClassName,
      role = 'menuitem',
      tabIndex: tabIndexProp,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useContext(ListContext/* default */.Z);
  const childContext = react.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = react.useRef(null);
  (0,useEnhancedEffect/* default */.Z)(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });
  const classes = useUtilityClasses(props);
  const handleRef = (0,useForkRef/* default */.Z)(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemRoot, (0,esm_extends/* default */.Z)({
      ref: handleRef,
      role: role,
      tabIndex: tabIndex,
      component: component,
      focusVisibleClassName: (0,clsx_m/* default */.Z)(classes.focusVisible, focusVisibleClassName),
      className: (0,clsx_m/* default */.Z)(classes.root, className)
    }, other, {
      ownerState: ownerState,
      classes: classes
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var MenuItem_MenuItem = (MenuItem);

/***/ }),

/***/ 94659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TextField_TextField; }
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(57579);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js
var Input = __webpack_require__(79332);
// EXTERNAL MODULE: ./node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(6135);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(32580);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(27666);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(76446);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(56036);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/textFieldClasses.js


function getTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTextField', slot);
}
const textFieldClasses = (0,generateUtilityClasses/* default */.Z)('MuiTextField', ['root']);
/* harmony default export */ var TextField_textFieldClasses = ((/* unused pure expression or super */ null && (textFieldClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/TextField.js


const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];

















const variantComponent = {
  standard: Input/* default */.Z,
  filled: FilledInput/* default */.Z,
  outlined: OutlinedInput/* default */.Z
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = (0,styled/* default */.ZP)(FormControl/* default */.Z, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/react.forwardRef(function TextField(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  const InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }
  const id = (0,useId/* default */.Z)(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/(0,jsx_runtime.jsx)(InputComponent, (0,esm_extends/* default */.Z)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextFieldRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label != null && label !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.Z, (0,esm_extends/* default */.Z)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, (0,esm_extends/* default */.Z)({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.Z, (0,esm_extends/* default */.Z)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TextField_TextField = (TextField);

/***/ }),

/***/ 47240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ FielddataSet; }
/* harmony export */ });
/* unused harmony exports Example, Recording */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15785);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94578);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53304);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46196);
var Example=/*#__PURE__*/function(){function Example(timestamp,data){this.timestamp=timestamp;this.data=data;}var _proto=Example.prototype;_proto.toVector=function toVector(startTimestamp){var t=this.timestamp-(startTimestamp||0);var s=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .roundWithPrecision */ .JI)(t/1000,3);return[s].concat(this.data);};return Example;}();var Recording=function Recording(name,colors,headers,rows,units){this.name=name;this.colors=colors;this.headers=headers;this.rows=rows;this.units=units;};var FielddataSet=/*#__PURE__*/function(_JDEventSource){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(FielddataSet,_JDEventSource);// sd is the standard deviation of the sample, a measure of volatility
FielddataSet.create=function create(bus,registers,name,palette,maxRows){var fields=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .arrayConcatMany */ .ue)(registers.map(reg=>reg.fields));var colors=fields.map((f,i)=>palette[i%palette.length]);var set=new FielddataSet(bus,name,fields,colors);if(maxRows!==undefined)set.maxRows=maxRows;return set;};FielddataSet.createFromFile=function createFromFile(dataSet){var set=new FielddataSet(null,dataSet.name,null,dataSet.colors);dataSet.rows.forEach(row=>{var{timestamp,data}=row;set.addExample(timestamp,data);});set.units=dataSet.units;set.headers=dataSet.headers;set.colors=dataSet.colors;return set;};function FielddataSet(bus,name,fields,colors){var _this;if(colors===void 0){colors=["#000"];}_this=_JDEventSource.call(this)||this;_this.id=Math.random().toString();_this.maxRows=-1;_this.bus=bus;_this.name=name;_this.fields=fields;_this.colors=colors;_this.rows=[];if(fields!==undefined&&fields!==null){_this.headers=fields.map(field=>field.name);_this.units=fields.map(field=>field.unit);}return _this;}var _proto2=FielddataSet.prototype;_proto2.data=function data(flatten){if(flatten&&this.headers.length==1)return this.rows.map(row=>row.data[0]);else return this.rows.map(row=>row.data);};_proto2.indexOf=function indexOf(field){return this.fields.indexOf(field);};_proto2.colorOf=function colorOf(field,header){if(field)return this.colors[this.indexOf(field)];if(header)return this.colors[this.headers.indexOf(header)];return["#000"];};_proto2.addRow=function addRow(data){var timestamp=this.bus.timestamp;if(!data)data=this.fields.map(f=>f.value);this.addExample(timestamp,data);};_proto2.addData=function addData(data){this.addExample(Date.now(),data);};_proto2.addExample=function addExample(timestamp,data){this.rows.push(new Example(timestamp,data));// drop rows if needed
var refreshminmax=false;while(this.maxRows>0&&this.rows.length>this.maxRows*1.1){this.rows.shift();refreshminmax=true;}if(refreshminmax){// refresh entire mins/max
for(var r=0;r<this.rows.length;++r){var row=this.rows[r];if(r==0){this.mins=row.data.slice(0);this.maxs=row.data.slice(0);this.rms=row.data.slice(0);this.sd=new Array(row.data.length).fill(0);}else{var n=r;for(var i=0;i<row.data.length;++i){this.mins[i]=Math.min(this.mins[i],row.data[i]);this.maxs[i]=Math.max(this.maxs[i],row.data[i]);this.rms[i]=Math.sqrt((Math.pow(this.rms[i],2)*(n-1)+Math.pow(row.data[i],2))/n);this.sd[i]=Math.sqrt((Math.pow(this.sd[i],2)*(n-1)+Math.pow(this.rms[i]-row.data[i],2))/n);}}}}else{// incremental update
if(!this.mins){this.mins=data.slice(0);this.maxs=data.slice(0);this.rms=data.slice(0);this.sd=new Array(data.length).fill(0);}else{var _n=this.rows.length;for(var _i=0;_i<data.length;++_i){this.mins[_i]=Math.min(this.mins[_i],data[_i]);this.maxs[_i]=Math.max(this.maxs[_i],data[_i]);this.rms[_i]=Math.sqrt((Math.pow(this.rms[_i],2)*(_n-1)+Math.pow(data[_i],2))/_n);this.sd[_i]=Math.sqrt((Math.pow(this.sd[_i],2)*(_n-1)+Math.pow(this.rms[_i]-data[_i],2))/_n);}}}this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);};_proto2.toCSV=function toCSV(sep,options){if(sep===void 0){sep=",";}var allheaders=["time"].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this.headers)).join(sep);var start=this.startTimestamp;var csv=[allheaders];if(options!==null&&options!==void 0&&options.units)csv.push(["s"].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this.units)).join(sep));this.rows.forEach(row=>csv.push(row.toVector(start).map(cell=>cell!==undefined?cell.toString():"").join(sep)));return csv.join("\n");};_proto2.toJSON=function toJSON(){return{name:this.name,rows:this.rows,headers:this.headers,units:this.units,colors:this.colors};};(0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(FielddataSet,[{key:"startTimestamp",get:function get(){var row=this.rows[0];return row===null||row===void 0?void 0:row.timestamp;}},{key:"duration",get:function get(){var first=this.rows[0];var last=this.rows[this.rows.length-1];return first&&last&&last.timestamp-first.timestamp||0;}},{key:"length",get:function get(){return this.rows.length;}},{key:"width",get:function get(){return this.headers.length;}}]);return FielddataSet;}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__/* .JDEventSource */ .aE);

/***/ }),

/***/ 48831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ RegisterInput; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 3 modules
var MembersInput = __webpack_require__(43039);
// EXTERNAL MODULE: ./src/components/RegisterTrend.tsx
var RegisterTrend = __webpack_require__(34431);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(14955);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(75938);
;// CONCATENATED MODULE: ./src/components/hooks/useRegisterServer.ts
function useRegisterServer(register){var server=(0,useServiceServer/* default */.Z)(register===null||register===void 0?void 0:register.service);return server===null||server===void 0?void 0:server.register(register===null||register===void 0?void 0:register.code);}
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
;// CONCATENATED MODULE: ./src/components/hooks/useReadingAuxilliaryValue.ts
function useReadingAuxilliaryValue(register,identifier,options){if(identifier===void 0){identifier=constants/* SystemReg.ReadingError */.ZJq.ReadingError|constants/* SystemReg.ReadingResolution */.ZJq.ReadingResolution|constants/* SystemReg.MaxReading */.ZJq.MaxReading|constants/* SystemReg.MinReading */.ZJq.MinReading|constants/* SystemReg.MinValue */.ZJq.MinValue|constants/* SystemReg.MaxValue */.ZJq.MaxValue|constants/* SystemReg.StreamingInterval */.ZJq.StreamingInterval|constants/* SystemReg.StreamingPreferredInterval */.ZJq.StreamingPreferredInterval;}var{service,code}=register||{};var{visible}=options||{visible:true};var reading=code===constants/* SystemReg.Reading */.ZJq.Reading||code===constants/* SystemReg.Value */.ZJq.Value;var auxilliaryRegister=(0,useRegister/* default */.Z)(reading?service:undefined,identifier);return (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(auxilliaryRegister,{visible});}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
;// CONCATENATED MODULE: ./src/components/RegisterInput.tsx
// tslint:disable-next-line: no-submodule-imports
function RegisterInput(props){var{register,showRegisterName,showDeviceName,showServiceName,hideMissingValues,showTrend,showDataType,variant,off,toggleOff,visible,controlled}=props;var{service,specification}=register;var{device}=service;var{fields,code}=register;var{setError:setAppError}=(0,useSnackbar/* default */.Z)();var{0:working,1:setWorking}=(0,react.useState)(false);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var{0:args,1:setArgs}=(0,react.useState)(register.unpackedValue||[]);var server=useRegisterServer(register);var hasSet=specification.kind==="rw"||server&&specification.kind!=="const";var hasData=(0,useChange/* default */.Z)(register,_=>!!_.data);var color=hasSet?"secondary":"primary";var regProps=visible!==undefined?{visible}:undefined;var isReading=code===constants/* SystemReg.Reading */.ZJq.Reading;var isValue=!isReading&&code===constants/* SystemReg.Value */.ZJq.Value;var min=useReadingAuxilliaryValue(register,isReading?constants/* SystemReg.MinReading */.ZJq.MinReading:isValue?constants/* SystemReg.MinValue */.ZJq.MinValue:undefined,regProps);var max=useReadingAuxilliaryValue(register,isReading?constants/* SystemReg.MaxReading */.ZJq.MaxReading:isValue?constants/* SystemReg.MaxValue */.ZJq.MaxValue:undefined,regProps);var readingError=useReadingAuxilliaryValue(register,constants/* SystemReg.ReadingError */.ZJq.ReadingError,regProps);var resolution=useReadingAuxilliaryValue(register,constants/* SystemReg.ReadingResolution */.ZJq.ReadingResolution,regProps);(0,react.useEffect)(()=>{var vs=register.unpackedValue;if(vs!==undefined)setArgs(vs);return visible?register.subscribe(constants/* REPORT_UPDATE */.rGZ,()=>{var vs=register.unpackedValue;if(vs!==undefined)setArgs(vs);}):undefined;},[register,visible]);var handleRefresh=()=>{register.refresh(true);};// eslint-disable-next-line @typescript-eslint/no-explicit-any
var sendArgs=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(values){if(working)return;try{setWorking(true);if(server)server.setValues(values);// don't send set commands to rw registers
if(!(0,spec/* isReadOnlyRegister */._F)(register.specification))yield register.sendSetPackedAsync(values,true);// force refresh in any case
register.scheduleRefresh();}catch(e){setAppError(e);}finally{setWorking(false);}});return function sendArgs(_x){return _ref.apply(this,arguments);};}();if(!specification)return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},"Unknown member "+register.service+":"+register.code);if(!fields.length)return null;// nothing to see here
if(hideMissingValues&&!hasData)return null;var serviceName=register.service.name.toLocaleLowerCase().replace(/_/g," ");var registerName=(0,jdspec/* humanify */.lW)(specification.name);return/*#__PURE__*/react.createElement(react.Fragment,null,showDeviceName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",key:"devicenamename"},/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:device}),"/"),showServiceName&&specification&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",key:"servicename","aria-label":serviceName},serviceName),showRegisterName&&specification&&serviceName!==registerName&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption",key:"registername","aria-label":registerName}," "+registerName),!hasData&&/*#__PURE__*/react.createElement(Box/* default */.Z,null,/*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z,{title:"refresh "+registerName,indeterminate:true,onClick:handleRefresh})),showTrend&&hasData&&/*#__PURE__*/react.createElement(RegisterTrend/* default */.Z,{register:register,mini:false,horizon:24}),hasData&&/*#__PURE__*/react.createElement(MembersInput/* default */.Z,{color:color,serviceSpecification:service.specification,serviceMemberSpecification:specification,specifications:fields.map(f=>f.specification),values:args,setValues:hasSet&&sendArgs,showDataType:showDataType,variant:variant,min:min,max:max,resolution:resolution,error:readingError,off:off,toggleOff:toggleOff,controlled:controlled}));}

/***/ }),

/***/ 34431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ RegisterTrend; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20528);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47240);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12145);
/* harmony import */ var _useChartPalette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32900);
/* harmony import */ var _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52302);
var DEFAULT_HORIZON=255;var DEFAULT_HEIGHT=12;function RegisterTrend(props){var{register,mini,horizon=DEFAULT_HORIZON,height,interval}=props;var{bus}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);var palette=(0,_useChartPalette__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var dataSet=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_FieldDataSet__WEBPACK_IMPORTED_MODULE_3__/* ["default"].create */ .ZP.create(bus,[register],"output",palette,horizon*1.2),[register,palette]);var addRow=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>dataSet.addRow(),[dataSet]);// register on change if no intervals
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>interval?undefined:register===null||register===void 0?void 0:register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_RECEIVE */ .Gb8,addRow),[interval,register,addRow]);(0,_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(!!interval,addRow,interval);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{dataSet:dataSet,horizon:horizon,gradient:true,height:height||DEFAULT_HEIGHT,mini:mini,yAxis:true});}

/***/ }),

/***/ 12145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Trend; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90948);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64680);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2874);
/* harmony import */ var _ui_useUnitConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63634);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63339);
var PREFIX="Trend";var classes={graph:PREFIX+"graph",mini:PREFIX+"mini"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)("div")(_ref=>{var{theme}=_ref;return{["& ."+classes.graph]:{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)},["& ."+classes.mini]:{display:"inline-block",width:"10rem"}};});function UnitTrendChart(props){var{dataSet,useGradient,data,unit,vpw,vph,dot,yAxis}=props;var{name:unitName,converter:unitConverter}=(0,_ui_useUnitConverter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(unit);var{textPrimary}=(0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("primary");var shape=unit=="#"?"step":"line";var symmetric=unit=="g"?true:false;(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(dataSet);var indexes=dataSet.units.map((u,index)=>(u||"/")===unit?index:undefined).filter(index=>index!==undefined);var colors=indexes.map(i=>dataSet.colors[i]);var times=data.map(ex=>ex.timestamp);var maxt=Math.max.apply(null,times);var mint=Math.min.apply(null,times);var minv=unitConverter(unit=="/"?0:Math.min.apply(null,indexes.map(i=>dataSet.mins[i])));var maxv=unitConverter(unit=="/"?1:Math.max.apply(null,indexes.map(i=>dataSet.maxs[i])));var opposite=unit!="/"&&Math.sign(minv)!=Math.sign(maxv);if(isNaN(minv)&&isNaN(maxv)){minv=0;maxv=1;}if(symmetric){maxv=Math.max(Math.abs(minv),Math.abs(maxv));minv=-maxv;}var step=undefined;var precision=step===undefined?1:step<1?Math.ceil(-Math.log10(step)):0;minv=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .roundWithPrecision */ .JI)(minv,precision,Math.floor);maxv=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .roundWithPrecision */ .JI)(maxv,precision,Math.ceil);var rv=maxv-minv;var margin=2;var h=maxv-minv||10;var w=maxt-mint||10;var strokeWidth=0.25;var axisWidth=0.2;var axisColor="#ccc";var pointRadius=strokeWidth*1.5;var toffset=-pointRadius*3;var fontSize="0.3rem";var x=t=>{return(t-mint)/w*vpw;};var y=v=>{if(v===undefined||isNaN(v))v=minv;// adding random for lineragradient bug workaround
// which does not render perfectly
// horizontal lines
return(Math.random()*0.0001*rv-(unitConverter(v)-minv))/h*(vph-2*margin);};var lastRow=data[data.length-1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,useGradient&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{key:"gradaxis",id:"gradientaxis",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0%",stopOpacity:"0",stopColor:axisColor}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"5%",stopOpacity:"0",stopColor:axisColor}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"40%",stopOpacity:"1",stopColor:axisColor}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"100%",stopOpacity:"1",stopColor:axisColor})),indexes.map((index,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{key:"grad"+i,id:"gradient"+index,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0%",stopOpacity:"0",stopColor:colors[i]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"5%",stopOpacity:"0",stopColor:colors[i]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"40%",stopOpacity:"1",stopColor:colors[i]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"100%",stopOpacity:"1",stopColor:colors[i]})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate("+toffset+", "+(vph-margin)+")"},yAxis&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",{x:margin,y:-vph+margin+margin/2,dominantBaseline:"hanging",fontSize:fontSize,fill:textPrimary},maxv,unitName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",{x:margin,y:margin-margin/2,fontSize:fontSize,fill:textPrimary},minv,unitName)),opposite&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line",{x1:x(mint),x2:x(maxt),y1:y(0),y2:y(0),strokeWidth:axisWidth,stroke:useGradient?"url(#gradientaxis)":axisColor}),indexes.map((index,i)=>{var color=colors[i];var path=shape=="step"?data.map((row,ri)=>ri==0?"M "+x(row.timestamp)+" "+y(row.data[index]):"H "+x(row.timestamp)+" V "+y(row.data[index])).join(" "):data.map((row,ri)=>(ri==0?"M":"L")+" "+x(row.timestamp)+" "+y(row.data[index])).join(" ");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{key:"line"+index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:path,fill:"none",stroke:useGradient?"url(#gradient"+index+")":color,strokeWidth:strokeWidth,strokeLinejoin:"round"}),dot&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:x(lastRow.timestamp),cy:y(lastRow.data[index]),r:pointRadius,fill:color}));})));}function UnitTrend(props){var{dataSet,horizon,width,height,mini,gradient,yAxis}=props;var rows=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(dataSet,_=>_===null||_===void 0?void 0:_.rows);var vpw=width||80;var vph=height||15;var data=rows.slice(-horizon);var useGradient=gradient||data.length<rows.length;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{className:classes.graph,variant:"outlined",elevation:0,square:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 "+vpw+" "+vph,style:{maxHeight:mini?"5vh":"10vh",maxWidth:"100%"}},data.length>1&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnitTrendChart,Object.assign({data:data,useGradient:useGradient,vpw:vpw,vph:vph,dot:true,yAxis:yAxis},props))));}function Trend(props){var{dataSet,mini,yAxis}=props;var units=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(dataSet,_=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .unique */ .Tw)(_===null||_===void 0?void 0:_.units.filter(u=>!!u)));return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root,{className:mini?classes.mini:undefined},units.map(unit=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnitTrend,Object.assign({key:"graph"+unit,mini:mini,yAxis:yAxis,unit:unit},props))));}

/***/ }),

/***/ 43039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MembersInput; }
});

// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(50542);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 4 modules
var Slider = __webpack_require__(92486);
// EXTERNAL MODULE: ./node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(89149);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(56036);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(33797);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__(79211);
// EXTERNAL MODULE: ./src/components/widgets/GaugeWidget.tsx
var GaugeWidget = __webpack_require__(13070);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetSize.ts
var useWidgetSize = __webpack_require__(89196);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(2874);
// EXTERNAL MODULE: ./src/components/ui/useUnitConverter.ts
var useUnitConverter = __webpack_require__(63634);
;// CONCATENATED MODULE: ./src/components/widgets/ValueWithUnitWidget.tsx
/// <reference path="../../../jacdac-ts/jacdac-spec/spectool/jdspec.d.ts" />
function useDebouncedValueTextLength(valueText){var valueTextLength=valueText.length;var debouncedRef=(0,react.useRef)(valueTextLength);var alpha=0.05;if(debouncedRef.current<valueTextLength)debouncedRef.current=valueTextLength;else debouncedRef.current=debouncedRef.current*(1-alpha)+valueTextLength*alpha;return Math.ceil(debouncedRef.current);}function ValueWithUnitWidget(props){var{step,secondaryLabel,icon,unit,tabIndex,color,onChange}=props;var{name:unitName,converter:unitConverter,inverter:unitInverter}=(0,useUnitConverter/* default */.Z)(unit);// map all values with unit converters
var{value,min,max}={value:unitConverter(props.value),min:unitConverter(props.min),max:unitConverter(props.max)};var precision=step===undefined?1:step<1?Math.ceil(-Math.log10(step)):0;var hasValue=!isNaN(value);var valueText=hasValue?(0,utils/* renderWithPrecision */.Y_)(value,precision):"--";var valueTextLength=useDebouncedValueTextLength(valueText);var{textPrimary}=(0,useWidgetTheme/* default */.Z)(color);var valueVariant=valueTextLength<7?"h2":valueTextLength<9?"h3":valueTextLength<12?"h4":"h6";var valueStyle={color:textPrimary,minWidth:valueTextLength/2+"em",fontVariantNumeric:"tabular-nums"};var unitStyle={color:textPrimary};var captionStyle={color:textPrimary};var handleChange=(event,newValue)=>{var v=newValue;var iv=unitInverter(v);onChange(iv);};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"column",tabIndex:tabIndex,"aria-label":valueText+" "+(unitName||"")},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"row",alignContent:"flex-end"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{role:"timer",align:"right",variant:valueVariant,style:valueStyle},icon,valueText)),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,direction:"column",alignContent:"space-between"},unitName&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{style:unitStyle,variant:"caption"},unitName)),secondaryLabel&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Typography/* default */.Z,{style:captionStyle,variant:"caption"},secondaryLabel)))))),onChange&&value!==undefined&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Slider/* default */.ZP,{valueLabelDisplay:"off",color:"secondary",min:min,max:max,step:step,value:value,onChange:handleChange,"aria-label":unitName||secondaryLabel})));}
// EXTERNAL MODULE: ./src/components/icons/HumidityIcon.tsx
var HumidityIcon = __webpack_require__(11818);
// EXTERNAL MODULE: ./src/components/icons/TemperatureIcon.tsx
var TemperatureIcon = __webpack_require__(90089);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(18763);
;// CONCATENATED MODULE: ./src/components/hooks/useUnitIcon.tsx
/* harmony default export */ var useUnitIcon = ((unit,props)=>{var{unit:runit}=(0,jdspec/* resolveUnit */.bM)(unit)||{};switch(runit){case"%RH":return/*#__PURE__*/react.createElement(HumidityIcon/* default */.Z,props);case"°C":case"K":return/*#__PURE__*/react.createElement(TemperatureIcon/* default */.Z,props);default:return null;}});
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2976);
;// CONCATENATED MODULE: ./src/components/fields/MemberInput.tsx
// tslint:disable-next-line: no-submodule-imports
function MemberInput(props){var _serviceSpecification;var{specification,serviceSpecification,serviceMemberSpecification,value,setValue,showDataType,color,variant,min,max,resolution,error,showLoading,off,toggleOff,controlled}=props;var{typicalMin,typicalMax,absoluteMin,absoluteMax,type}=specification;var{kind}=serviceMemberSpecification;var enumInfo=(_serviceSpecification=serviceSpecification.enums)===null||_serviceSpecification===void 0?void 0:_serviceSpecification[specification.type];var disabled=!setValue;var readOnly=disabled||controlled&&kind!=="ro";var{0:errorText,1:setErrorText}=(0,react.useState)("");var{0:textValue,1:setTextValue}=(0,react.useState)("");var valueString=(0,spec/* memberValueToString */.Mn)(value,specification);var name=specification.name==="_"?serviceMemberSpecification.name:specification.name;var label=name;var isWidget=variant==="widget";var widgetSize=(0,useWidgetSize/* default */.Z)();var unitIcon=useUnitIcon(specification.unit,{"aria-label":label});var{textPrimary}=(0,useWidgetTheme/* default */.Z)(color);var minValue=(0,utils/* pick */.ei)(min,typicalMin,absoluteMin,/^u/.test(type)?0:undefined);var maxValue=(0,utils/* pick */.ei)(max,typicalMax,absoluteMax);var errorValue=error?"±"+(0,utils/* roundWithPrecision */.JI)(error,1-Math.floor(Math.log10(error))).toLocaleString():undefined;var unit=(0,pretty/* prettyUnit */.QP)(specification.unit);var helperText=errorText||[(0,pretty/* prettyMemberUnit */.Zn)(specification,showDataType),errorValue].filter(v=>v!==undefined).join(", ");var inputId=(0,react.useId)();var inputType=specification.type==="string"||specification.type==="string0"?"string":specification.isSimpleType||(0,spec/* isIntegerType */.YF)(specification.type)?"number":"";// update coming from device
(0,react.useEffect)(()=>{setTextValue(valueString);},[valueString]);var handleChecked=(ev,checked)=>{setValue(checked);};var handleChange=ev=>{var newValue=ev.target.value;setTextValue(newValue);var r=(0,spec/* tryParseMemberValue */.Xg)(newValue,specification);if(r.value!==undefined)setValue(r.value);setErrorText(r.error);};// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleEnumChange=event=>{var v=enumInfo.isFlags?(0,pretty/* flagsToValue */.zi)(event.target.value):event.target.value;setValue(v);};var handleSliderChange=(ev,newValue)=>setValue(newValue);var handleSliderWidgetChange=newValue=>setValue(newValue);var percentValueFormat=value=>{// avoid super long floats
return(value*100>>0)+"%";};var valueLabelFormat=value=>{// avoid super long floats
return (0,utils/* roundWithPrecision */.JI)(value,1)+(unit||"");};var percentValueLabelFormat=v=>{return Math.round(v*100)+"%";};var offFormat=()=>"off";// value hasn't been loaded yet
if(serviceMemberSpecification.kind!=="command"&&value===undefined){if(showLoading)return/*#__PURE__*/react.createElement(LoadingProgress/* default */.Z,null);else return null;}//
if(specification.type==="pipe"){return/*#__PURE__*/react.createElement(react.Fragment,null,"pipe ",/*#__PURE__*/react.createElement("code",null,specification.name));}else if(specification.type==="bool"){if(isWidget&&!(0,spec/* isValueOrIntensity */.sX)(serviceMemberSpecification)){return/*#__PURE__*/react.createElement(ButtonWidget/* default */.Z,{label:!isWidget&&label,checked:!!value,color:color,size:widgetSize});}return/*#__PURE__*/react.createElement(FormControlLabel/* default */.Z,{control:/*#__PURE__*/react.createElement(Switch/* default */.Z,{checked:!!value,onChange:readOnly?undefined:handleChecked,color:color}),label:/*#__PURE__*/react.createElement("span",{style:{color:textPrimary}},label)});}else if(enumInfo!==undefined){return/*#__PURE__*/react.createElement(Select/* default */.Z,{"aria-label":label,disabled:disabled,multiple:enumInfo.isFlags,value:enumInfo.isFlags?(0,pretty/* valueToFlags */.Cg)(enumInfo,value):value,onChange:!controlled?handleEnumChange:undefined},Object.keys(enumInfo.members).map(n=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:n,value:enumInfo.members[n]},n)));}else if(specification.unit==="/"){var signed=specification.storage<0;var _min=signed?-1:0;var _max=1;var step=resolution!==undefined?resolution:0.01;var digits=Math.ceil(-Math.log10(step));var nvalue=(0,utils/* roundWithPrecision */.JI)(value,digits);if(isWidget){var size="clamp(6rem, 12vw, 12vh)";return/*#__PURE__*/react.createElement(GaugeWidget/* default */.Z,{tabIndex:0,label:label,size:size,value:nvalue,color:color,variant:signed?"fountain":undefined,min:_min,max:_max,step:step,valueLabel:percentValueLabelFormat,onChange:readOnly?undefined:handleSliderWidgetChange,off:off,toggleOff:readOnly?undefined:toggleOff});}return/*#__PURE__*/react.createElement(Slider/* default */.ZP,{"aria-label":label,color:color,value:nvalue,valueLabelFormat:percentValueFormat,onChange:readOnly?undefined:handleSliderChange,min:_min,max:_max,step:step,valueLabelDisplay:"auto"});}else if((0,utils/* isSet */.DM)(minValue)&&(0,utils/* isSet */.DM)(maxValue)){var hasTypicalRange=(0,utils/* isSet */.DM)(typicalMin)&&(0,utils/* isSet */.DM)(typicalMax);var _step=resolution!==undefined?resolution:hasTypicalRange?(specification.typicalMax-specification.typicalMin)/100:(maxValue-minValue)/100;if(_step===0||isNaN(_step))// edge case
_step=undefined;var marks=hasTypicalRange&&(typicalMin!==minValue||typicalMax!==maxValue)?[{value:typicalMin},{value:typicalMax}]:undefined;if(isWidget)return/*#__PURE__*/react.createElement(ValueWithUnitWidget,{tabIndex:0,unit:specification.unit,value:value,min:minValue,max:maxValue,icon:unitIcon,step:_step,secondaryLabel:errorValue,color:color,onChange:readOnly?undefined:handleSliderWidgetChange});return/*#__PURE__*/react.createElement(Slider/* default */.ZP,{value:value,color:color,valueLabelFormat:off?offFormat:valueLabelFormat,onChange:readOnly?undefined:handleSliderChange,min:minValue,max:maxValue,step:_step,marks:marks,valueLabelDisplay:"auto"});}else if(specification.type==="bytes"){return/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:inputId,spellCheck:false,value:textValue,label:label,inputProps:{["aria-label"]:label,["aria-readonly"]:disabled,readOnly:disabled},helperText:helperText,onChange:readOnly?undefined:handleChange,required:value===undefined,error:!!errorText,type:"text"});}else{// numbers or string or uintarrays
if(isWidget)// we need min/max to support a slider
return/*#__PURE__*/react.createElement(ValueWithUnitWidget,{tabIndex:0,value:(0,utils/* roundWithPrecision */.JI)(value,1),unit:specification.unit,color:color,size:widgetSize});return/*#__PURE__*/react.createElement(TextField/* default */.Z,{id:inputId,spellCheck:false,value:textValue,label:label,inputProps:{"aria-label":label,"aria-readonly":disabled,readOnly:disabled},helperText:helperText,onChange:readOnly?undefined:handleChange,required:value===undefined,error:!!errorText,type:inputType});}}
;// CONCATENATED MODULE: ./src/components/fields/MembersInput.tsx
function MembersInput(props){var{serviceSpecification,serviceMemberSpecification,specifications,values,setValues,showDataType,color,variant,min,max,resolution,error,off,toggleOff,controlled}=props;var setValue=index=>value=>{var c=values.slice(0);c[index]=value;setValues(c);};return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"column"},specifications.map((field,fieldi)=>{var value=values===null||values===void 0?void 0:values[fieldi];return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,key:fieldi,xs:12},/*#__PURE__*/react.createElement(MemberInput,{serviceSpecification:serviceSpecification,serviceMemberSpecification:serviceMemberSpecification,specification:field,showDataType:showDataType,value:value,color:color,setValue:values&&setValues&&setValue(fieldi),variant:variant,min:min===null||min===void 0?void 0:min[fieldi],max:max===null||max===void 0?void 0:max[fieldi],resolution:resolution===null||resolution===void 0?void 0:resolution[fieldi],error:error===null||error===void 0?void 0:error[fieldi],off:off,toggleOff:toggleOff,controlled:controlled}));}));}

/***/ }),

/***/ 38846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ keyCodeFromEvent; },
/* harmony export */   "Z": function() { return /* binding */ useFireKey; }
/* harmony export */ });
var ENTER_KEY=13;var SPACE_KEY=32;function keyCodeFromEvent(e){return typeof e.which=="number"?e.which:e.keyCode;}function useFireKey(handler){if(!handler)return undefined;return e=>{var charCode=keyCodeFromEvent(e);if(charCode===ENTER_KEY||charCode===SPACE_KEY){e.preventDefault();handler();}};}

/***/ }),

/***/ 75938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceServer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useServiceProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23662);
function useServiceServer(service,createTwin,deps){var device=service===null||service===void 0?void 0:service.device;var provider=(0,_useServiceProvider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(device);var twin=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(provider)return undefined;var twin=service===null||service===void 0?void 0:service.twin;if(!twin&&service&&createTwin){twin=createTwin();if(twin)service.twin=twin;}return twin;},[device,provider,service===null||service===void 0?void 0:service.changeId].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(deps||[])));return(provider===null||provider===void 0?void 0:provider.service(service===null||service===void 0?void 0:service.serviceIndex))||twin;}

/***/ }),

/***/ 56212:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSvgButtonProps; }
/* harmony export */ });
/* harmony import */ var _useFireKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38846);
function useSvgButtonProps(label,onDown,onUp){var disabled=!onDown&&!onUp;var fireDownOnEnter=(0,_useFireKey__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(onDown);var fireUpOnEnter=(0,_useFireKey__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(onUp);var preventify=handler=>{if(handler)return event=>{event.preventDefault();handler(event);};else return undefined;};return{className:disabled?undefined:"clickeable",role:disabled?undefined:"button",tabIndex:disabled?undefined:0,["aria-label"]:label,onPointerDown:preventify(onDown),onPointerUp:preventify(onUp),onPointerLeave:preventify(onUp),onKeyDown:fireDownOnEnter,onKeyUp:fireUpOnEnter};}

/***/ }),

/***/ 11818:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony default export */ __webpack_exports__["Z"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({titleAccess:"humidity logo"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.8-.03A49.327 49.327 0 00.956 11.112a8.824 8.824 0 1015.693 0A49.327 49.327 0 008.801-.029zm0 3.132a47.244 47.244 0 015.995 8.962 6.74 6.74 0 11-11.986 0A47.243 47.243 0 018.8 3.102z"})));

/***/ }),

/***/ 90089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony default export */ __webpack_exports__["Z"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({titleAccess:"Temperature icon"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.365 14.761a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 12.062a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 9.363a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 6.663a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM11.365 3.964a.635.635 0 000-1.27h-1.35a.635.635 0 000 1.27zM4.04 3.26v14.207a1.979 1.978 0 101.284-.004V3.26a.642.642 0 00-1.285 0z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4.699 0a3.302 3.301 0 00-3.323 3.3v12.726a4.668 4.666 0 106.605.022V3.3A3.302 3.301 0 004.7 0zm-.047 1.303a2.01 2.008 0 012.041 2.009v13.37a3.354 3.352 0 11-4.017-.027V3.312a2.01 2.008 0 011.976-2.01z"})));

/***/ }),

/***/ 2976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoadingProgress; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function LoadingProgress(props){var{size}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{disableShrink:true,variant:"indeterminate",size:size||"1em","aria-label":"loading"});}

/***/ }),

/***/ 63634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ useUnitConverters; },
/* harmony export */   "Z": function() { return /* binding */ useUnitConverter; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34743);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10431);
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../jacdac-ts/jacdac-spec/spectool/jdspec.d.ts" />
var adapters={"°C":{"°C":v=>v,"°F":v=>9/5*v+32},"/":{"/":v=>v,"%":v=>v*100},A:{A:v=>v,mA:v=>1000*v}};var inverters={"°F":{"°C":v=>(v-32)*5/9},"%":{"/":v=>v/100},mA:{A:v=>v/1000}};function useUnitConverters(){var[settings,setSettings]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("jacdac:unitconverters",{});return{converters:Object.keys(adapters).map(unit=>({unit,name:settings[unit]||unit,names:Object.keys(adapters[unit])})),setConverter:(unit,name)=>{var newSettings=Object.assign({},settings);newSettings[unit]=name;setSettings(newSettings);}};}var identity=v=>v;function useUnitConverter(unit){var _inverters$name;if(!unit)return{converter:v=>v,inverter:v=>v};var[settings]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("jacdac:unitconverters",{"/":"%",A:"mA"});var adapter=adapters[unit];if(!adapter)return{name:(0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_0__/* .prettyUnit */ .QP)(unit),converter:v=>v,inverter:v=>v};var names=Object.keys(adapter);var name=settings[unit]||names[0];var converter=adapter[name]||identity;var inverter=((_inverters$name=inverters[name])===null||_inverters$name===void 0?void 0:_inverters$name[unit])||identity;return{name,converter,inverter,names};}

/***/ }),

/***/ 32900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useChartPalette; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50553);
function useChartPalette(){var{darkMode}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);var palette=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{if(darkMode=="light")return["#003f5c","#ffa600","#665191","#a05195","#ff7c43","#d45087","#f95d6a","#2f4b7c"];else return["#60ccfe","#ffdd9e","#c3b9d8","#dcbbd7","#fecdb7","#eebcd1","#fcc1c6","#a1b6db"];},[darkMode]);return palette;}

/***/ }),

/***/ 79211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ButtonWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _SvgWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98816);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2874);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56212);
function ButtonWidget(props){var{checked,label,color,size,onDown,onUp}=props;var{background,controlBackground,active}=(0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(color);var buttonProps=(0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(label,onDown,onUp);var w=64;var mo=checked?3:5;var r=w/2;var cx=r;var cy=r;var ri=r-mo;var rn=8;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SvgWidget__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{width:w,size:size},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,rx:2,ry:2,width:w,height:w,fill:background}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:rn,cy:rn,r:rn>>1,fill:controlBackground}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:w-rn,cy:rn,r:rn>>1,fill:controlBackground}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:w-rn,cy:w-rn,r:rn>>1,fill:controlBackground}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:rn,cy:w-rn,r:rn>>1,fill:controlBackground}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",Object.assign({cx:cx,cy:cy,r:ri,fill:checked?active:controlBackground},buttonProps)));}

/***/ }),

/***/ 13070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GaugeWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2874);
/* harmony import */ var _SvgWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98816);
/* harmony import */ var _svgutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65885);
/* harmony import */ var _PowerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92486);
function GaugeWidget(props){var{value,color,size,min,max,step,variant,valueLabel,off,toggleOff,onChange,tabIndex,label}=props;var{active,textProps,controlBackground}=(0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(color);var sliderPathRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var w=120;var h=120;var m=8;var roff=20;var riff=10;var sw=m<<1;var cx=w>>1;var cy=h>>1;var r=(w>>1)-m;var sa=-135;var ea=135;var _step=step||(max-min)/10;var displayValue=value;//useThrottledValue(value, (max - min) * 10)
var computeArc=v=>{if(variant==="fountain"){var mid=(ea+sa)/2;var fraction=v/(max-min)*(ea-sa);if(fraction<0)return (0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .describeArc */ .x8)(cx,cy,r,mid+fraction,mid);else return (0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .describeArc */ .x8)(cx,cy,r,mid,mid+fraction);}else{var _fraction=(v-min)/(max-min);var va=sa+_fraction*(ea-sa);return (0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .describeArc */ .x8)(cx,cy,r,sa,va);}};var db=(0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .describeArc */ .x8)(cx,cy,r,sa,ea);var dvalue=computeArc(value);var dactual=computeArc(displayValue);var lineCap="round";var tvalue=valueLabel!==undefined?valueLabel(value):value===undefined?"":value+"";var clickeable=!!onChange;var handlePointerDown=ev=>{ev.preventDefault();if(!ev.buttons)return;var svg=sliderPathRef.current.ownerSVGElement;var pos=(0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .svgPointerPoint */ .PW)(svg,ev);var closest=(0,_svgutils__WEBPACK_IMPORTED_MODULE_4__/* .closestPoint */ .JI)(sliderPathRef.current,_step,pos);onChange(min+(1-closest)*(max-min));};var pointerStyle=clickeable&&{cursor:"pointer"};var pathProps={onPointerDown:clickeable?handlePointerDown:undefined,onPointerMove:clickeable?handlePointerDown:undefined,style:clickeable?pointerStyle:undefined};var handleSliderChange=(ev,newValue)=>onChange(newValue);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,{container:true,direction:"column"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SvgWidget__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{tabIndex:tabIndex,width:w,height:h,size:size},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",Object.assign({ref:sliderPathRef,strokeWidth:sw,stroke:controlBackground,d:db,strokeLinecap:lineCap,fill:"transparent"},pathProps)),!off&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",Object.assign({strokeWidth:sw,stroke:active,strokeLinecap:lineCap,d:dvalue,opacity:0.2,fill:"transparent"},pathProps)),!off&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",Object.assign({strokeWidth:sw,stroke:active,strokeLinecap:lineCap,d:dactual,fill:"transparent"},pathProps)),off!==undefined?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PowerButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{off:off,label:tvalue,cx:cx,cy:cy,r:roff,ri:riff,color:color,onClick:toggleOff}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({},textProps,{x:cx,y:cy,"aria-label":tvalue}),tvalue))),clickeable&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{"aria-label":label,disabled:off,color:color,min:min,max:max,step:_step,valueLabelDisplay:"off",value:value,onChange:onChange?handleSliderChange:undefined})));}

/***/ }),

/***/ 15073:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PowerButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56212);
/* harmony import */ var _svgutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65885);
/* harmony import */ var _useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2874);
function PowerButton(props){var{cx,cy,r,ri,onClick,off,color,label,strokeWidth,borderStroke}=props;var{background,active,controlBackground,textProps}=(0,_useWidgetTheme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(color);var a=135;var d=(0,_svgutils__WEBPACK_IMPORTED_MODULE_2__/* .describeArc */ .x8)(cx,cy,ri,-a,a,true);var btnlabel=off?"turn on":"turn off";var buttonProps=(0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(btnlabel,onClick);var sw=strokeWidth||3;var iconStroke=off?background:active;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{"aria-label":label},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,btnlabel),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",Object.assign({cx:cx,cy:cy,r:r,fill:controlBackground,strokeWidth:sw,stroke:borderStroke||background},buttonProps)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"rotate(180, "+cx+", "+cy+")"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:d,strokeLinecap:"round",fill:"none",strokeWidth:sw,stroke:iconStroke,style:{userSelect:"none",pointerEvents:"none"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line",{strokeLinecap:"round",x1:cx,y1:cy+ri/4,x2:cx,y2:cy+ri,stroke:iconStroke,strokeWidth:sw,style:{userSelect:"none",pointerEvents:"none"}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text",Object.assign({"aria-label":label,x:cx,y:cy+r+8},textProps,{fontSize:"80%"}),label));}

/***/ }),

/***/ 98816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SvgWidget; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function SvgWidget(props){var{width,height,size="100%",background,children,role,title,viewBox,tabIndex,svgRef}=props;var h=height||width;var aspectRatio=width/height;var vertical=aspectRatio<1;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",height:vertical?size:undefined,width:vertical?undefined:size}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{ref:svgRef,xmlns:"http://www.w3.org/2000/svg",tabIndex:tabIndex,viewBox:viewBox||"0 0 "+width+" "+h,"aria-label":title,style:{height:vertical?"100%":undefined,width:vertical?undefined:"100%"},role:role||"group"},background&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect",{x:0,y:0,width:width,height:height,fill:background,rx:1,ry:1}),children));}

/***/ }),

/***/ 65885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PW": function() { return /* binding */ svgPointerPoint; },
/* harmony export */   "JI": function() { return /* binding */ closestPoint; },
/* harmony export */   "op": function() { return /* binding */ polarToCartesian; },
/* harmony export */   "x8": function() { return /* binding */ describeArc; }
/* harmony export */ });
function svgPointerPoint(svg,event){var point=svg.createSVGPoint();point.x=event.clientX;point.y=event.clientY;var res=point.matrixTransform(svg.getScreenCTM().inverse());return res;}function closestPoint(pathNode,step,point){var pathLength=pathNode.getTotalLength();var distance2=p=>{var dx=p.x-point.x;var dy=p.y-point.y;return dx*dx+dy*dy;};var bestLength=0;var bestDistance=Infinity;for(var scanLength=0;scanLength<=pathLength;scanLength+=step){var scan=pathNode.getPointAtLength(scanLength);var scanDistance=distance2(scan);if(scanDistance<bestDistance){bestLength=scanLength;bestDistance=scanDistance;}}return bestLength/pathLength;}function polarToCartesian(centerX,centerY,radius,angleInDegrees){var angleInRadians=(angleInDegrees-90)*Math.PI/180.0;return{x:centerX+radius*Math.cos(angleInRadians),y:centerY+radius*Math.sin(angleInRadians)};}function describeArc(x,y,radius,startAngle,endAngle,large){var start=polarToCartesian(x,y,radius,endAngle);var end=polarToCartesian(x,y,radius,startAngle);var largeArcFlag=large!==true&&endAngle-startAngle<=180?"0":"1";var d=["M",start.x,start.y,"A",radius,radius,0,largeArcFlag,0,end.x,end.y].join(" ");return d;}

/***/ }),

/***/ 89196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useWidgetSize; }
/* harmony export */ });
function useWidgetSize(variant,widgetCount){var icon=variant==="icon";var mini=icon;var widgetSize;switch(widgetCount||1){case 1:case 2:widgetSize=mini?"12em":"16em";break;case 3:case 4:case 5:case 6:widgetSize=mini?"10em":"14em";break;default:widgetSize=mini?"4em":"5em";break;}return widgetSize;}

/***/ }),

/***/ 2874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useWidgetTheme; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2734);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50553);
function useWidgetTheme(color){var theme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var{palette}=theme;var{background}=palette;var{darkMode}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ui_DarkModeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);var active=color==="primary"?palette.primary.main:color==="secondary"?palette.secondary.main:palette.info.main;var backgroundColor=darkMode==="dark"?background.default:palette.grey[800];var controlBackground=darkMode==="dark"?palette.grey[800]:palette.grey[400];var textPrimary=palette.text.primary;var textProps={fill:textPrimary,alignmentBaseline:"central",dominantBaseline:"middle",textAnchor:"middle",pointerEvents:"none",letterSpacing:0,style:{userSelect:"none",pointerEvents:"none"}};return{background:backgroundColor,controlBackground,active,textPrimary,textProps};}

/***/ })

}]);
//# sourceMappingURL=9cabf54c0bdef74023b71583abadb2b143973960-38a9cfce0e919f7dfb3b.js.map