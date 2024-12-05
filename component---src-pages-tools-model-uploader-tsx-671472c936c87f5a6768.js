"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8952,4300],{

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

/***/ 35097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ getDividerUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getDividerUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ __webpack_exports__["Z"] = (dividerClasses);

/***/ }),

/***/ 50542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FormControlLabel_FormControlLabel; }
});

// UNUSED EXPORTS: FormControlLabelRoot

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
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js


function getFormControlLabelUtilityClasses(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiFormControlLabel', slot);
}
const formControlLabelClasses = (0,generateUtilityClasses/* default */.Z)('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label', 'error']);
/* harmony default export */ var FormControlLabel_formControlLabelClasses = (formControlLabelClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(15704);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js


const _excluded = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"];














const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', `labelPlacement${(0,capitalize/* default */.Z)(labelPlacement)}`, error && 'error'],
    label: ['label', disabled && 'disabled']
  };
  return (0,composeClasses/* default */.Z)(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = (0,styled/* default */.ZP)('label', {
  name: 'MuiFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${FormControlLabel_formControlLabelClasses.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${(0,capitalize/* default */.Z)(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${FormControlLabel_formControlLabelClasses.disabled}`]: {
    cursor: 'default'
  }
}, ownerState.labelPlacement === 'start' && {
  flexDirection: 'row-reverse',
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === 'top' && {
  flexDirection: 'column-reverse',
  marginLeft: 16
}, ownerState.labelPlacement === 'bottom' && {
  flexDirection: 'column',
  marginLeft: 16
}, {
  [`& .${FormControlLabel_formControlLabelClasses.label}`]: {
    [`&.${FormControlLabel_formControlLabelClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));

/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
const FormControlLabel = /*#__PURE__*/react.forwardRef(function FormControlLabel(inProps, ref) {
  var _slotProps$typography;
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiFormControlLabel'
  });
  const {
      className,
      componentsProps = {},
      control,
      disabled: disabledProp,
      disableTypography,
      label: labelProp,
      labelPlacement = 'end',
      slotProps = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const muiFormControl = (0,useFormControl/* default */.Z)();
  let disabled = disabledProp;
  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }
  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  const fcs = (0,formControlState/* default */.Z)({
    props,
    muiFormControl,
    states: ['error']
  });
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label = labelProp;
  if (label != null && label.type !== Typography/* default */.Z && !disableTypography) {
    label = /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, (0,esm_extends/* default */.Z)({
      component: "span"
    }, typographySlotProps, {
      className: (0,clsx_m/* default */.Z)(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label
    }));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FormControlLabelRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/react.cloneElement(control, controlProps), label]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var FormControlLabel_FormControlLabel = (FormControlLabel);

/***/ }),

/***/ 70576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ ListItem_ListItem; }
});

// UNUSED EXPORTS: ListItemRoot, overridesResolver

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
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/isMuiElement.js + 1 modules
var isMuiElement = __webpack_require__(48502);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(58974);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItem/listItemClasses.js


function getListItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiListItem', slot);
}
const listItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);
/* harmony default export */ var ListItem_listItemClasses = (listItemClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemButton/listItemButtonClasses.js
var listItemButtonClasses = __webpack_require__(68686);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js


function getListItemSecondaryActionClassesUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = (0,generateUtilityClasses/* default */.Z)('MuiListItemSecondaryAction', ['root', 'disableGutters']);
/* harmony default export */ var ListItemSecondaryAction_listItemSecondaryActionClasses = ((/* unused pure expression or super */ null && (listItemSecondaryActionClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js


const _excluded = ["className"];









const useUtilityClasses = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.Z)(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.disableGutters && {
  right: 0
}));

/**
 * Must be used as the last child of ListItem to function properly.
 */
const ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useContext(ListContext/* default */.Z);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disableGutters: context.disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryActionRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ var ListItemSecondaryAction_ListItemSecondaryAction = (ListItemSecondaryAction);
;// CONCATENATED MODULE: ./node_modules/@mui/material/ListItem/ListItem.js


const ListItem_excluded = ["className"],
  _excluded2 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"];


















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.button && styles.button, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const ListItem_useUtilityClasses = ownerState => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', !disablePadding && 'padding', divider && 'divider', disabled && 'disabled', button && 'button', alignItems === 'flex-start' && 'alignItemsFlexStart', hasSecondaryAction && 'secondaryAction', selected && 'selected'],
    container: ['container']
  };
  return (0,composeClasses/* default */.Z)(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiListItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left'
}, !ownerState.disablePadding && (0,esm_extends/* default */.Z)({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses/* default.root */.Z.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${ListItem_listItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${ListItem_listItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${ListItem_listItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${ListItem_listItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.button && {
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${ListItem_listItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
const ListItemContainer = (0,styled/* default */.ZP)('li', {
  name: 'MuiListItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})({
  position: 'relative'
});

/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */
const ListItem = /*#__PURE__*/react.forwardRef(function ListItem(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiListItem'
  });
  const {
      alignItems = 'center',
      autoFocus = false,
      button = false,
      children: childrenProp,
      className,
      component: componentProp,
      components = {},
      componentsProps = {},
      ContainerComponent = 'li',
      ContainerProps: {
        className: ContainerClassName
      } = {},
      dense = false,
      disabled = false,
      disableGutters = false,
      disablePadding = false,
      divider = false,
      focusVisibleClassName,
      secondaryAction,
      selected = false,
      slotProps = {},
      slots = {}
    } = props,
    ContainerProps = (0,objectWithoutPropertiesLoose/* default */.Z)(props.ContainerProps, ListItem_excluded),
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded2);
  const context = react.useContext(ListContext/* default */.Z);
  const childContext = react.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = react.useRef(null);
  (0,useEnhancedEffect/* default */.Z)(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const children = react.Children.toArray(childrenProp);

  // v4 implementation, deprecated in v5, will be removed in v6
  const hasSecondaryAction = children.length && (0,isMuiElement/* default */.Z)(children[children.length - 1], ['ListItemSecondaryAction']);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });
  const classes = ListItem_useUtilityClasses(ownerState);
  const handleRef = (0,useForkRef/* default */.Z)(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, rootProps.className, className),
    disabled
  }, other);
  let Component = componentProp || 'li';
  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx_m/* default */.Z)(ListItem_listItemClasses.focusVisible, focusVisibleClassName);
    Component = ButtonBase/* default */.Z;
  }

  // v4 implementation, deprecated in v5, will be removed in v6
  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component;

    // Avoid nesting of li > li.
    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
      value: childContext,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItemContainer, (0,esm_extends/* default */.Z)({
        as: ContainerComponent,
        className: (0,clsx_m/* default */.Z)(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState: ownerState
      }, ContainerProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.Z)({}, rootProps, !(0,isHostComponent/* default */.Z)(Root) && {
          as: Component,
          ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children: children
        })), children.pop()]
      }))
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends/* default */.Z)({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !(0,isHostComponent/* default */.Z)(Root) && {
      ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryAction_ListItemSecondaryAction, {
        children: secondaryAction
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var ListItem_ListItem = (ListItem);

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

/***/ 26336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ getListItemTextUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getListItemTextUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
/* harmony default export */ __webpack_exports__["Z"] = (listItemTextClasses);

/***/ }),

/***/ 89149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Switch_Switch; }
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
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(32207);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.Z)('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
/* harmony default export */ var Switch_switchClasses = (switchClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Switch/Switch.js


const _excluded = ["className", "color", "edge", "size", "sx"];
// @inheritedComponent IconButton













const useUtilityClasses = ownerState => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', edge && `edge${(0,capitalize/* default */.Z)(edge)}`, `size${(0,capitalize/* default */.Z)(size)}`],
    switchBase: ['switchBase', `color${(0,capitalize/* default */.Z)(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getSwitchUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const SwitchRoot = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${(0,capitalize/* default */.Z)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.Z)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: 'middle',
  // For correct alignment with the text.
  '@media print': {
    colorAdjust: 'exact'
  }
}, ownerState.edge === 'start' && {
  marginLeft: -8
}, ownerState.edge === 'end' && {
  marginRight: -8
}, ownerState.size === 'small' && {
  width: 40,
  height: 24,
  padding: 7,
  [`& .${Switch_switchClasses.thumb}`]: {
    width: 16,
    height: 16
  },
  [`& .${Switch_switchClasses.switchBase}`]: {
    padding: 4,
    [`&.${Switch_switchClasses.checked}`]: {
      transform: 'translateX(16px)'
    }
  }
}));
const SwitchSwitchBase = (0,styled/* default */.ZP)(SwitchBase/* default */.Z, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${Switch_switchClasses.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.Z)(ownerState.color)}`]];
  }
})(({
  theme
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(['left', 'transform'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${Switch_switchClasses.checked}`]: {
    transform: 'translateX(20px)'
  },
  [`&.${Switch_switchClasses.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
    opacity: 0.5
  },
  [`&.${Switch_switchClasses.disabled} + .${Switch_switchClasses.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === 'light' ? 0.12 : 0.2}`
  },
  [`& .${Switch_switchClasses.input}`]: {
    left: '-100%',
    width: '300%'
  }
}), ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${Switch_switchClasses.checked}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${Switch_switchClasses.disabled}`]: {
      color: theme.vars ? theme.vars.palette.Switch[`${ownerState.color}DisabledColor`] : `${theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)(theme.palette[ownerState.color].main, 0.62) : (0,colorManipulator/* darken */._j)(theme.palette[ownerState.color].main, 0.55)}`
    }
  },
  [`&.${Switch_switchClasses.checked} + .${Switch_switchClasses.track}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }
}));
const SwitchTrack = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme
}) => ({
  height: '100%',
  width: '100%',
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(['opacity', 'background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === 'light' ? 0.38 : 0.3}`
}));
const SwitchThumb = (0,styled/* default */.ZP)('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
}));
const Switch = /*#__PURE__*/react.forwardRef(function Switch(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiSwitch'
  });
  const {
      className,
      color = 'primary',
      edge = false,
      size = 'medium',
      sx
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    color,
    edge,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const icon = /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchThumb, {
    className: classes.thumb,
    ownerState: ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchRoot, {
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    sx: sx,
    ownerState: ownerState,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchSwitchBase, (0,esm_extends/* default */.Z)({
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      ref: ref,
      ownerState: ownerState
    }, other, {
      classes: (0,esm_extends/* default */.Z)({}, classes, {
        root: classes.switchBase
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchTrack, {
      className: classes.track,
      ownerState: ownerState
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ var Switch_Switch = (Switch);

/***/ }),

/***/ 32207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ internal_SwitchBase; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(98216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(49299);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.Z)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ var internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/SwitchBase.js


const _excluded = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];













const useUtilityClasses = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${(0,capitalize/* default */.Z)(edge)}`],
    input: ['input']
  };
  return (0,composeClasses/* default */.Z)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z)(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  padding: 9,
  borderRadius: '50%'
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}));
const SwitchBaseInput = (0,styled/* default */.ZP)('input')({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      className,
      defaultChecked,
      disabled: disabledProp,
      disableFocusRipple = false,
      edge = false,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required = false,
      tabIndex,
      type,
      value
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [checked, setCheckedState] = (0,useControlled/* default */.Z)({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = (0,useFormControl/* default */.Z)();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchBaseRoot, (0,esm_extends/* default */.Z)({
    component: "span",
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchBaseInput, (0,esm_extends/* default */.Z)({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type
    }, type === 'checkbox' && value === undefined ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ var internal_SwitchBase = (SwitchBase);

/***/ }),

/***/ 67489:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ SensorAggregatorClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94578);
/* harmony import */ var _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36807);
/* harmony import */ var _jdom_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98172);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71670);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52102);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62070);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46196);
/**
 * A client for the sensor aggregator service
 * @category Clients
 */var SensorAggregatorClient=/*#__PURE__*/function(_JDServiceClient){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(SensorAggregatorClient,_JDServiceClient);function SensorAggregatorClient(service){var _this;_this=_JDServiceClient.call(this,service)||this;(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .assert */ .hu)(service.serviceClass===_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_SENSOR_AGGREGATOR */ .x12);_this.service.registersUseAcks=true;return _this;}var _proto=SensorAggregatorClient.prototype;_proto.setInputs=/*#__PURE__*/function(){var _setInputs=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(cfg){var _cfg$inputs;function error(msg){throw new Error("Aggregator inputs: "+msg);}function mapType(tp){switch(tp){case 1:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U8 */ .HEd.U8;case 2:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U16 */ .HEd.U16;case 4:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U32 */ .HEd.U32;case-1:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I8 */ .HEd.I8;case-2:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I16 */ .HEd.I16;case-4:return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I32 */ .HEd.I32;default:error("unknown storage type");}}if(!cfg||!cfg.inputs)error("invalid input format");var totalSampleSize=0;var inputs=(_cfg$inputs=cfg.inputs)===null||_cfg$inputs===void 0?void 0:_cfg$inputs.map(input=>{var{deviceId,serviceIndex,serviceClass}=input;if(!!deviceId!==!!serviceIndex)error("deviceId and serviceIndex must be specified together");var specification=(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);if(!specification)error("missing specification from service 0x"+serviceClass.toString(16));var freeze=!!deviceId;var readingReg=specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .isReading */ .vz);if(!readingReg)error("service 0x"+serviceClass.toString(16)+" does not have a reading register");var sampleType=undefined;var sampleSize=0;var sampleShift=0;for(var field of readingReg.fields){sampleSize+=Math.abs(field.storage);if(sampleType===undefined){sampleType=mapType(field.storage);sampleShift=field.shift||0;}if(sampleType!=mapType(field.storage)||sampleShift!=(field.shift||0))error("heterogenous field types");}totalSampleSize+=sampleSize;return (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcat */ .gX)(freeze?(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .fromHex */ .H_)(deviceId):new Uint8Array(8),(0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u32 u8 u8 u8 i8",[serviceClass,freeze?serviceIndex:0,sampleSize,sampleType,sampleShift]));});if(totalSampleSize>_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .JD_SERIAL_MAX_PAYLOAD_SIZE */ .MdP)error("samples won't fit in packet");// u32 is x[4]
inputs.unshift((0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u16 u32",[cfg.samplingInterval,cfg.samplesInWindow,0]));yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.Inputs */ .HUt.Inputs).sendSetAsync((0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcatMany */ .Gb)(inputs));});function setInputs(_x){return _setInputs.apply(this,arguments);}return setInputs;}();_proto.collect=/*#__PURE__*/function(){var _collect=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(numSamples){yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.StreamingSamples */ .HUt.StreamingSamples).sendSetPackedAsync([numSamples]);});function collect(_x2){return _collect.apply(this,arguments);}return collect;}();_proto.subscribeSample=function subscribeSample(handler){var reg=this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.CurrentSample */ .HUt.CurrentSample);return this.mount(reg.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_RECEIVE */ .Gb8,()=>handler((0,_jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .bufferToArray */ ._W)(reg.data,_jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .NumberFormat.Float32LE */ .y4.Float32LE))));};_proto.getReg=/*#__PURE__*/function(){var _getReg=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(id,f){var reg=this.service.register(id);yield reg.refresh();return f(reg);});function getReg(_x3,_x4){return _getReg.apply(this,arguments);}return getReg;}();_proto.stats=/*#__PURE__*/function(){var _stats=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
var info={numSamples:this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.NumSamples */ .HUt.NumSamples,r=>r.intValue),sampleSize:this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.SampleSize */ .HUt.SampleSize,r=>r.intValue)};for(var id of Object.keys(info)){info[id]=yield info[id];}return info;});function stats(){return _stats.apply(this,arguments);}return stats;}();return SensorAggregatorClient;}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__/* .JDServiceClient */ .P);

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

/***/ 32589:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ DeviceLostAlert; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88286);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46259);
function DeviceLostAlert(props){var{device}=props;var lost=(0,_jacdac_useEventRaised__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOST */ .XWw,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .FOUND */ .a6y],device,dev=>!!(dev!==null&&dev!==void 0&&dev.lost));var flashing=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(device,_=>(_===null||_===void 0?void 0:_.bootloader)||!!(_!==null&&_!==void 0&&_.firmwareUpdater));if(!lost||flashing)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"info"},"Device lost...");}

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

/***/ 44300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5355);
function useGridBreakpoints(itemCount){var{drawerType}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP);var hasDrawer=drawerType!==_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None;if(!drawerType&&itemCount!==undefined){switch(itemCount){case 1:case 2:case 3:return{xs:12,sm:6,md:6,lg:4,xl:4};}}if(hasDrawer)return{xs:12,md:6,sm:6,lg:6,xl:4};else return{xs:12,sm:6,md:4,lg:4,xl:3};}

/***/ }),

/***/ 7286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ModelActions": function() { return /* binding */ ModelActions; },
  "ModelContent": function() { return /* binding */ ModelContent; },
  "default": function() { return /* binding */ ModelUploader; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(70576);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(59334);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(3964);
// EXTERNAL MODULE: ./node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(42643);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49161);
// EXTERNAL MODULE: ./node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(89149);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(44300);
// EXTERNAL MODULE: ./src/components/devices/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(21979);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(32589);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(46259);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(73131);
;// CONCATENATED MODULE: ./src/components/ServiceList.tsx
function ServiceListItem(props){var{service,content,checked,checkedDisabled,toggleChecked,actions}=props;var{device}=service;var handleCheck=()=>toggleChecked();return/*#__PURE__*/react.createElement(Card/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z,{device:device,showMedia:true}),/*#__PURE__*/react.createElement(CardContent/* default */.Z,null,/*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M,{device:device}),content),/*#__PURE__*/react.createElement(CardActions/* default */.Z,null,checked!==undefined&&/*#__PURE__*/react.createElement(Switch/* default */.Z,{disabled:checkedDisabled,onChange:handleCheck,checked:checked}),actions));}function ServiceList(props){var{serviceClass,selected,toggleSelected,content,actions,alertMissing}=props;var services=(0,useServices/* default */.Z)({serviceClass});var gridBreakpoints=(0,useGridBreakpoints/* default */.Z)(services===null||services===void 0?void 0:services.length);var handleSelected=service=>selected&&selected(service);var handleChecked=service=>()=>toggleSelected&&toggleSelected(service);var serviceContent=service=>content&&content(service);var serviceActions=service=>actions&&actions(service);if(alertMissing&&!(services!==null&&services!==void 0&&services.length))return/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"info"},alertMissing);return/*#__PURE__*/react.createElement(Box/* default */.Z,{mb:1},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:2},services===null||services===void 0?void 0:services.map(service=>/*#__PURE__*/react.createElement(Grid/* default */.ZP,Object.assign({key:service.nodeId,item:true},gridBreakpoints),/*#__PURE__*/react.createElement(ServiceListItem,{service:service,checked:handleSelected(service),toggleChecked:handleChecked(service),content:serviceContent(service),actions:serviceActions(service)})))));}
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(78055);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(24973);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(60763);
;// CONCATENATED MODULE: ./src/components/useDb.ts
function useDbBlob(id){var{db}=(0,react.useContext)(DbContext/* default */.ZP);var{0:_value,1:_setValue}=(0,react.useState)(undefined);var values=db===null||db===void 0?void 0:db.blobs;// listen to change
(0,react.useEffect)(()=>{var _mounted=true;return values===null||values===void 0?void 0:values.subscribe(DbContext/* DB_VALUE_CHANGE */.TB,/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(changed){if(changed===id){try{var v=yield values.get(id);if(_mounted){_setValue(v);}}catch(e){console.log(e);yield values===null||values===void 0?void 0:values.set(id,undefined);}}return()=>{_mounted=false;};});return function(_x){return _ref.apply(this,arguments);};}());},[values]);// load intial value
(0,useEffectAsync/* default */.Z)(/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(mounted){try{var v=yield values===null||values===void 0?void 0:values.get(id);if(mounted())_setValue(v);}catch(e){console.log(e);// trash data
yield values===null||values===void 0?void 0:values.set(id,undefined);}});return function(_x2){return _ref2.apply(this,arguments);};}(),[values]);return{blob:_value,setBlob:function(){var _setBlob=(0,asyncToGenerator/* default */.Z)(function*(blob){yield values===null||values===void 0?void 0:values.set(id,blob);});function setBlob(_x3){return _setBlob.apply(this,arguments);}return setBlob;}()};}function useDbUint8Array(blobName){var{blob,setBlob}=useDbBlob(blobName);var{0:model,1:setModel}=(0,react.useState)(undefined);(0,useEffectAsync/* default */.Z)(/*#__PURE__*/function(){var _ref3=(0,asyncToGenerator/* default */.Z)(function*(mounted){if(!blob){setModel(undefined);}else{var buf=yield (0,utils/* readBlobToUint8Array */.Lg)(blob);if(mounted())setModel(buf);}});return function(_x4){return _ref3.apply(this,arguments);};}(),[blob]);return{data:model,setBlob};}function useDbString(blobName){var{blob,setBlob}=useDbBlob(blobName);var{0:model,1:setModel}=(0,react.useState)(undefined);(0,useEffectAsync/* default */.Z)(/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function*(){if(!blob){setModel(undefined);}else{var t=yield (0,utils/* readBlobToText */.i1)(blob);setModel(t);}}),[blob]);return{data:model,setBlob};}function useDbJSON(blobName){var{data,setBlob:_setBlob2}=useDbString(blobName);var value=(0,utils/* JSONTryParse */.ZZ)(data);return{value,setBlob:function(){var _setBlob3=(0,asyncToGenerator/* default */.Z)(function*(blob){yield _setBlob2(blob);});function setBlob(_x5){return _setBlob3.apply(this,arguments);}return setBlob;}()};}
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__(98172);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__(39727);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(52102);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 1 modules
var spec = __webpack_require__(62070);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/modelrunnerclient.ts
/*
    enum SampleType : u8 {
        U8 = 0x08
        I8 = 0x88
        U16 = 0x10
        I16 = 0x90
        U32 = 0x20
        I32 = 0xA0
    }
    rw inputs @ 0x80 {
        sampling_interval: u16 ms
        samples_in_window: u16
        reserved: u32
    repeats:
        device_id: devid
        service_class: u32
        service_num: u8
        sample_size: u8 B
        sample_type: SampleType
        sample_shift: i8
    }
*/function isMLModelSupported(model,formatRegValue){return (0,utils/* read32 */.Zy)(model,0)==formatRegValue||(0,utils/* read32 */.Zy)(model,4)==formatRegValue;}function getMLModelFormatName(model){var map=serviceSpecificationFromClassIdentifier(SRV_MODEL_RUNNER).enums["ModelFormat"].members;var m0=read32(model,0);var m1=read32(model,4);for(var _v of Object.keys(map)){if(map[_v]==m0||map[_v]==m1)return _v;}return"0x"+toHex(model.slice(0,8));}/**
 * A client for the model runner service
 * @category Clients
 */var ModelRunnerClient=/*#__PURE__*/function(_JDServiceClient){(0,inheritsLoose/* default */.Z)(ModelRunnerClient,_JDServiceClient);function ModelRunnerClient(service){var _this;_this=_JDServiceClient.call(this,service)||this;(0,utils/* assert */.hu)(service.serviceClass==constants/* SRV_MODEL_RUNNER */.kVm);_this.service.registersUseAcks=true;return _this;}// TODO this should use some caching?
var _proto=ModelRunnerClient.prototype;_proto.isModelSupported=/*#__PURE__*/function(){var _isModelSupported=(0,asyncToGenerator/* default */.Z)(function*(model){var reg=this.service.register(constants/* ModelRunnerReg.Format */.FEd.Format);yield reg.refresh();return reg.data==null||isMLModelSupported(model,reg.intValue>>>0);});function isModelSupported(_x){return _isModelSupported.apply(this,arguments);}return isModelSupported;}();_proto.subscribeResults=function subscribeResults(handler){var reg=this.service.register(constants/* ModelRunnerReg.Outputs */.FEd.Outputs);return reg.subscribe(constants/* REPORT_RECEIVE */.Gb8,()=>{handler((0,buffer/* bufferToArray */._W)(reg.data,buffer/* NumberFormat.Float32LE */.y4.Float32LE));});};_proto.deployModel=/*#__PURE__*/function(){var _deployModel=(0,asyncToGenerator/* default */.Z)(function*(model,onProgress){return pipes/* OutPipe.sendBytes */.Ah.sendBytes(this.service,constants/* ModelRunnerCmd.SetModel */.cdg.SetModel,model,onProgress);});function deployModel(_x2,_x3){return _deployModel.apply(this,arguments);}return deployModel;}();_proto.autoInvoke=/*#__PURE__*/function(){var _autoInvoke=(0,asyncToGenerator/* default */.Z)(function*(everySamples){if(everySamples===void 0){everySamples=1;}yield this.service.register(constants/* ModelRunnerReg.AutoInvokeEvery */.FEd.AutoInvokeEvery).sendSetPackedAsync([everySamples]);});function autoInvoke(_x4){return _autoInvoke.apply(this,arguments);}return autoInvoke;}();_proto.getReg=/*#__PURE__*/function(){var _getReg=(0,asyncToGenerator/* default */.Z)(function*(id,f){var reg=this.service.register(id);yield reg.refresh();return f(reg);});function getReg(_x5,_x6){return _getReg.apply(this,arguments);}return getReg;}();_proto.modelStats=/*#__PURE__*/function(){var _modelStats=(0,asyncToGenerator/* default */.Z)(function*(){var info={modelSize:this.getReg(constants/* ModelRunnerReg.ModelSize */.FEd.ModelSize,r=>r.intValue),arenaSize:this.getReg(constants/* ModelRunnerReg.AllocatedArenaSize */.FEd.AllocatedArenaSize,r=>r.intValue),inputShape:this.getReg(constants/* ModelRunnerReg.InputShape */.FEd.InputShape,r=>(0,buffer/* bufferToArray */._W)(r.data,buffer/* NumberFormat.UInt16LE */.y4.UInt16LE)),outputShape:this.getReg(constants/* ModelRunnerReg.OutputShape */.FEd.OutputShape,r=>(0,buffer/* bufferToArray */._W)(r.data,buffer/* NumberFormat.UInt16LE */.y4.UInt16LE)),lastError:this.getReg(constants/* ModelRunnerReg.LastError */.FEd.LastError,r=>(0,utils/* uint8ArrayToString */.DA)(r.data))};for(var id of Object.keys(info)){info[id]=yield info[id];}return info;});function modelStats(){return _modelStats.apply(this,arguments);}return modelStats;}();return ModelRunnerClient;}(serviceclient/* JDServiceClient */.P);/*
export async function testAGG(bus: JDBus) {
    const aggService = bus.services({ serviceClass: SRV_SENSOR_AGGREGATOR })[0]
    if (!aggService) {
        console.log("no agg service")
        return
    }
    const agg = new SensorAggregatorClient(aggService)

    let acc = bus.services({ serviceClass: SRV_ACCELEROMETER })
    if (acc.length == 0) {
        console.log("no acc service")
        return
    }

    await agg.setInputs({
        samplesInWindow: 50,
        samplingInterval: 20,
        inputs: acc
    })

    agg.subscribeSample(sample => {
        console.log("SAMPLE", sample)
    })

}

export async function testTF(bus: JDBus, model: Uint8Array) {
    const tfService = bus.services({ serviceClass: SRV_MODEL_RUNNER })[0]
    if (!tfService) {
        console.log("no tflite service")
        return
    }
    const tf = new TFLiteClient(tfService)

    if (model)
        await tf.deployModel(model, p => console.log("deploy", p.toFixed(3)))

    const st = await tf.modelStats()
    console.log(st)

    const classNames = ['noise', 'punch', 'left', 'right'];
    tf.subscribeResults(outp => {
        for (let i = 0; i < outp.length; ++i) {
            if (outp[i] > 0.7) {
                console.log(outp[i].toFixed(3) + " " + classNames[i])
            }
        }
         console.log("OUT", outp)
    })

    await tf.autoInvoke(8)

    console.log("autoinvoked")

}
*/
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(48831);
// EXTERNAL MODULE: ./src/components/ui/CircularProgressWithLabel.tsx
var CircularProgressWithLabel = __webpack_require__(26072);
// EXTERNAL MODULE: ./jacdac-ts/src/clients/sensoraggregatorclient.ts
var sensoraggregatorclient = __webpack_require__(67489);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(64680);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(34743);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(9400);
;// CONCATENATED MODULE: ./src/components/SensorAggregatorConfigView.tsx
function SensorAggregatorInputConfigView(props){var{bus}=(0,react.useContext)(Context/* default */.Z);var{input}=props;var{serviceClass,deviceId,serviceIndex}=input;var device=deviceId&&bus.device(deviceId);return/*#__PURE__*/react.createElement(react.Fragment,null,(0,pretty/* serviceName */.HV)(serviceClass),device&&/*#__PURE__*/react.createElement(DeviceName/* default */.Z,{device:device,serviceIndex:serviceIndex}),!device&&deviceId&&/*#__PURE__*/react.createElement("span",null,deviceId,"[",serviceIndex,"]"),!deviceId&&/*#__PURE__*/react.createElement("span",null,"/ any device"));}function SensorAggregatorConfigView(props){var{config}=props;if(!(config!==null&&config!==void 0&&config.inputs))return/*#__PURE__*/react.createElement(react.Fragment,null);return/*#__PURE__*/react.createElement(Paper/* default */.Z,null,/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,"samples interval (ms):"," ",/*#__PURE__*/react.createElement("code",null,config.samplingInterval)),/*#__PURE__*/react.createElement("li",null,"samples window (# samples):"," ",/*#__PURE__*/react.createElement("code",null,config.samplesInWindow)),/*#__PURE__*/react.createElement("li",null,"inputs (",config.inputs.length,")",/*#__PURE__*/react.createElement("ul",null,config.inputs.map((input,i)=>/*#__PURE__*/react.createElement("li",{key:"input"+i},/*#__PURE__*/react.createElement(SensorAggregatorInputConfigView,{input:input})))))));}
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 2 modules
var ServiceManagerContext = __webpack_require__(51188);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./src/components/RegisterTrend.tsx
var RegisterTrend = __webpack_require__(34431);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
;// CONCATENATED MODULE: ./src/components/useCall.tsx
function useCall(){var{setError:setAppError}=(0,useSnackbar/* default */.Z)();var{0:error,1:setError}=(0,react.useState)();var{0:running,1:setRunning}=(0,react.useState)(false);var{0:progress,1:setProgress}=(0,react.useState)(0);var handleProgress=p=>setProgress(p);var call=handler=>{try{setRunning(true);setError(undefined);handler(handleProgress);}catch(e){setError(e);setAppError(e);}finally{setRunning(false);}};var callAsync=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(handler){try{setRunning(true);setError(undefined);yield handler(handleProgress);}catch(e){setError(e);setAppError(e);}finally{setRunning(false);}});return function callAsync(_x){return _ref.apply(this,arguments);};}();var alert=error&&/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},error);return{running,error,progress,alert,call,callAsync};}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(82066);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/Link.js


/* harmony default export */ var Link = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
}), 'Link'));
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(22878);
;// CONCATENATED MODULE: ./src/pages/tools/model-uploader.tsx























var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 7933).then(__webpack_require__.bind(__webpack_require__, 97933)));
function ModelContent(props) {
  var {
    service
  } = props;
  var modelSizeRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.ModelSize */.FEd.ModelSize);
  var lastErrorRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.LastError */.FEd.LastError);
  var autoInvokeEveryRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.AutoInvokeEvery */.FEd.AutoInvokeEvery);
  var outputsRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.Outputs */.FEd.Outputs);
  var [modelSize] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(modelSizeRegister);
  var [lastError] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(lastErrorRegister);
  return /*#__PURE__*/react.createElement(react.Fragment, null, lastError && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, lastError), /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "model size:", " ", modelSize === undefined ? "..." : (0,pretty/* prettySize */.or)(modelSize)), /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: autoInvokeEveryRegister,
    visible: true
  }), /*#__PURE__*/react.createElement(RegisterTrend/* default */.Z, {
    showName: true,
    register: outputsRegister,
    mini: true
  }));
}
function ModelActions(props) {
  var {
    service,
    model,
    sensorAggregatorService,
    sensorInput
  } = props;
  var {
    running,
    progress,
    alert,
    callAsync
  } = useCall();
  var modelDisabled = !service || !model || running;

  var handleDeployModel = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield callAsync( /*#__PURE__*/function () {
        var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (setProgress) {
          if (sensorAggregatorService && sensorInput) {
            var aggregator = new sensoraggregatorclient/* SensorAggregatorClient */.F(sensorAggregatorService);
            yield aggregator.setInputs(sensorInput);
          }

          if (service && model) {
            var runner = new ModelRunnerClient(service);
            yield runner.deployModel(model, setProgress);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    });

    return function handleDeployModel() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, !running && /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx, {
    disabled: modelDisabled,
    variant: "contained",
    color: "primary",
    onClick: handleDeployModel
  }, sensorInput ? "Deploy model and configuration" : "Deploy model"), running && /*#__PURE__*/react.createElement(CircularProgressWithLabel/* default */.Z, {
    value: progress * 100
  }), alert);
}
function ModelUploader() {
  var {
    0: importing,
    1: setImporting
  } = (0,react.useState)(false);
  var {
    data: model,
    setBlob: setModel
  } = useDbUint8Array("model.tflite");
  var {
    value: sensorConfig,
    setBlob: setSensorConfig
  } = useDbJSON("sensor-input.json");
  var {
    modelStore
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);

  var handleTfmodelFiles = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setImporting(true);
          yield setModel(file);
        } finally {
          setImporting(false);
        }
      }
    });

    return function handleTfmodelFiles(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleClearModel = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setImporting(true);
        yield setModel(undefined);
      } finally {
        setImporting(false);
      }
    });

    return function handleClearModel() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSensorConfigFiles = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setImporting(true);
          yield setSensorConfig(file);
        } finally {
          setImporting(false);
        }
      }
    });

    return function handleSensorConfigFiles(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleClearConfiguration = /*#__PURE__*/function () {
    var _ref6 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setImporting(true);
        yield setSensorConfig(undefined);
      } finally {
        setImporting(false);
      }
    });

    return function handleClearConfiguration() {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleLoadModel = model => /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    try {
      setImporting(true);
      console.log("loading model", model);
      var blob = yield modelStore.loadFile(model);
      console.log("loaded content", blob);

      if (blob) {
        setModel(blob);
      }
    } finally {
      setImporting(false);
    }
  });

  var handleLoadInputConfiguration = model => /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    try {
      setImporting(true);
      console.log("loading model", model);
      var blob = yield modelStore.loadFile(model);
      console.log("loaded content", blob);

      if (blob) {
        setSensorConfig(blob);
      }
    } finally {
      setImporting(false);
    }
  });

  var models = (0,useChange/* default */.Z)(modelStore, _ => _ === null || _ === void 0 ? void 0 : _.models());
  var inputConfigurations = (0,useChange/* default */.Z)(modelStore, _ => _ === null || _ === void 0 ? void 0 : _.inputConfigurations());
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Model uploader"), /*#__PURE__*/react.createElement("p", null, "Upload Machine Learning Models (like TensorFlow Lite) into your", " ", /*#__PURE__*/react.createElement(Link, {
    to: "/services/model-runner/"
  }, "ML module runners"), "."), /*#__PURE__*/react.createElement("h3", null, "Load a machine learning model"), /*#__PURE__*/react.createElement("p", null, "Machine learning models are typically stored in a", " ", /*#__PURE__*/react.createElement("code", null, ".tflite"), " file."), model && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Model loaded (", (0,pretty/* prettySize */.or)(model.byteLength), ")"), model && /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    disabled: importing,
    text: "Import model",
    onFilesUploaded: handleTfmodelFiles
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx, {
    "aria-label": "clear model",
    disabled: importing,
    onClick: handleClearModel
  }, "clear model"), (models === null || models === void 0 ? void 0 : models.length) && /*#__PURE__*/react.createElement(List/* default */.Z, null, models.map(model => /*#__PURE__*/react.createElement(ListItem/* default */.ZP, {
    key: model.path,
    button: true,
    onClick: handleLoadModel(model)
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: model.name,
    secondary: model.path + " " + (0,pretty/* prettySize */.or)(model.size)
  })))), /*#__PURE__*/react.createElement("h3", null, "Configure sensors"), /*#__PURE__*/react.createElement("p", null, "Sensor configuration files are stored in a ", /*#__PURE__*/react.createElement("code", null, ".jd.json"), " ", "file."), sensorConfig && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Sensor configuration loaded"), sensorConfig && /*#__PURE__*/react.createElement(SensorAggregatorConfigView, {
    config: sensorConfig
  }), sensorConfig && /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    disabled: importing,
    text: "Import configuration",
    onFilesUploaded: handleSensorConfigFiles
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Button */.zx, {
    "aria-label": "clear configuration",
    disabled: importing,
    onClick: handleClearConfiguration
  }, "clear configuration"), (inputConfigurations === null || inputConfigurations === void 0 ? void 0 : inputConfigurations.length) && /*#__PURE__*/react.createElement(List/* default */.Z, null, inputConfigurations.map(iconfig => /*#__PURE__*/react.createElement(ListItem/* default */.ZP, {
    key: iconfig.path,
    button: true,
    onClick: handleLoadInputConfiguration(iconfig)
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: iconfig.name,
    secondary: iconfig.path + " " + (0,pretty/* prettySize */.or)(iconfig.size)
  })))), /*#__PURE__*/react.createElement("h3", null, "Deploy model to machine learning services"), /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_MODEL_RUNNER */.kVm
  }), /*#__PURE__*/react.createElement(ServiceList, {
    serviceClass: constants/* SRV_MODEL_RUNNER */.kVm,
    content: service => /*#__PURE__*/react.createElement(ModelContent, {
      service: service
    }),
    actions: service => {
      var _service$device$servi;

      return /*#__PURE__*/react.createElement(ModelActions, {
        service: service,
        model: model,
        sensorAggregatorService: service === null || service === void 0 ? void 0 : (_service$device$servi = service.device.services({
          serviceClass: constants/* SRV_SENSOR_AGGREGATOR */.x12
        })) === null || _service$device$servi === void 0 ? void 0 : _service$device$servi[0],
        sensorInput: sensorConfig
      });
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-model-uploader-tsx-671472c936c87f5a6768.js.map