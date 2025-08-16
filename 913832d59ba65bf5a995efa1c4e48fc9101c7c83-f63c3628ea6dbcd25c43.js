"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5092],{

/***/ 23508:
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
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');
exports.Z = _default;

/***/ }),

/***/ 1820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Accordion_Accordion; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(59864);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(12981);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(64680);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(64861);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(49299);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Accordion/accordionClasses.js


function getAccordionUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordion', slot);
}
const accordionClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
/* harmony default export */ var Accordion_accordionClasses = (accordionClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Accordion/Accordion.js


const _excluded = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"];















const useUtilityClasses = ownerState => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', !square && 'rounded', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    region: ['region']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = (0,styled/* default */.ZP)(Paper/* default */.Z, {
  name: 'MuiAccordion',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${Accordion_accordionClasses.region}`]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: 'relative',
    transition: theme.transitions.create(['margin'], transition),
    overflowAnchor: 'none',
    // Keep the same scrolling position
    '&:before': {
      position: 'absolute',
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(['opacity', 'background-color'], transition)
    },
    '&:first-of-type': {
      '&:before': {
        display: 'none'
      }
    },
    [`&.${Accordion_accordionClasses.expanded}`]: {
      '&:before': {
        opacity: 0
      },
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-of-type': {
        marginBottom: 0
      },
      '& + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    [`&.${Accordion_accordionClasses.disabled}`]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}, ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, !ownerState.square && {
  borderRadius: 0,
  '&:first-of-type': {
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius
  },
  '&:last-of-type': {
    borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    // Fix a rendering issue on Edge
    '@supports (-ms-ime-align: auto)': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !ownerState.disableGutters && {
  [`&.${Accordion_accordionClasses.expanded}`]: {
    margin: '16px 0'
  }
}));
const Accordion = /*#__PURE__*/react.forwardRef(function Accordion(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordion'
  });
  const {
      children: childrenProp,
      className,
      defaultExpanded = false,
      disabled = false,
      disableGutters = false,
      expanded: expandedProp,
      onChange,
      square = false,
      TransitionComponent = Collapse/* default */.Z,
      TransitionProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [expanded, setExpandedState] = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  });
  const handleChange = react.useCallback(event => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = react.Children.toArray(childrenProp);
  const contextValue = react.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    square,
    disabled,
    disableGutters,
    expanded
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    square: square
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionContext/* default.Provider */.Z.Provider, {
      value: contextValue,
      children: summary
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.Z)({
      in: expanded,
      timeout: "auto"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        "aria-labelledby": summary.props.id,
        id: summary.props['aria-controls'],
        role: "region",
        className: classes.region,
        children: children
      })
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Accordion_Accordion = (Accordion);

/***/ }),

/***/ 64861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */
const AccordionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 85092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AccordionDetails_AccordionDetails; }
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
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js


function getAccordionDetailsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordionDetails', ['root']);
/* harmony default export */ var AccordionDetails_accordionDetailsClasses = ((/* unused pure expression or super */ null && (accordionDetailsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js


const _excluded = ["className"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
const AccordionDetails = /*#__PURE__*/react.forwardRef(function AccordionDetails(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordionDetails'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionDetailsRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionDetails_AccordionDetails = (AccordionDetails);

/***/ }),

/***/ 47425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AccordionSummary_AccordionSummary; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(64861);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js


function getAccordionSummaryUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = (0,generateUtilityClasses/* default */.Z)('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);
/* harmony default export */ var AccordionSummary_accordionSummaryClasses = (accordionSummaryClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js


const _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    focusVisible: ['focusVisible'],
    content: ['content', expanded && 'expanded', !disableGutters && 'contentGutters'],
    expandIconWrapper: ['expandIconWrapper', expanded && 'expanded']
  };
  return (0,composeClasses/* default */.Z)(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  name: 'MuiAccordionSummary',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return (0,esm_extends/* default */.Z)({
    display: 'flex',
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(['min-height', 'background-color'], transition),
    [`&.${AccordionSummary_accordionSummaryClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${AccordionSummary_accordionSummaryClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${AccordionSummary_accordionSummaryClasses.disabled})`]: {
      cursor: 'pointer'
    }
  }, !ownerState.disableGutters && {
    [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
      minHeight: 64
    }
  });
});
const AccordionSummaryContent = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionSummary',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  flexGrow: 1,
  margin: '12px 0'
}, !ownerState.disableGutters && {
  transition: theme.transitions.create(['margin'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
    margin: '20px 0'
  }
}));
const AccordionSummaryExpandIconWrapper = (0,styled/* default */.ZP)('div', {
  name: 'MuiAccordionSummary',
  slot: 'ExpandIconWrapper',
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(({
  theme
}) => ({
  display: 'flex',
  color: (theme.vars || theme).palette.action.active,
  transform: 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(180deg)'
  }
}));
const AccordionSummary = /*#__PURE__*/react.forwardRef(function AccordionSummary(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiAccordionSummary'
  });
  const {
      children,
      className,
      expandIcon,
      focusVisibleClassName,
      onClick
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = react.useContext(AccordionContext/* default */.Z);
  const handleChange = event => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    expanded,
    disabled,
    disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AccordionSummaryRoot, (0,esm_extends/* default */.Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    focusVisibleClassName: (0,clsx_m/* default */.Z)(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryContent, {
      className: classes.content,
      ownerState: ownerState,
      children: children
    }), expandIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState: ownerState,
      children: expandIcon
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionSummary_AccordionSummary = (AccordionSummary);

/***/ }),

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

/***/ 56225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceSpecifications; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77682);
function useDeviceSpecifications(options){var catalog=(0,_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();var specifications=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(catalog,_=>_===null||_===void 0?void 0:_.specifications(options),[JSON.stringify(options)],(a,b)=>(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayEq */ .vm)(a,b,(l,r)=>l.id===r.id));return specifications;}

/***/ }),

/***/ 81407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareCard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1820);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47425);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85092);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42440);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70576);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59334);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33797);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49161);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76914);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6603);
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99360);
/* harmony import */ var _github_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6885);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46259);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16821);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70970);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23508);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2976);
function FirmwareCard(props){var{slug}=props;var{response:releases}=(0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useLatestFirmwareReleases */ .ET)(slug);var{0:downloading,1:setDownloading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var{0:release,1:setRelease}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:firmwaresExpanded,1:setFirmwaresExpanded}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{setFirmwareFile,firmwareBlobs}=(0,_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_2__/* .useFirmwareBlob */ .x)(slug);var tag=(release===null||release===void 0?void 0:release.version)||"";var disabled=downloading;var version=firmwareBlobs===null||firmwareBlobs===void 0?void 0:firmwareBlobs[0].version;// version starts with v
var updateAvailable=!!tag&&!!version&&tag!==version.replace(/^v/,"").substring(0,tag.length);var downloadColor=updateAvailable?"primary":"inherit";var downloadVariant=updateAvailable?"contained":"text";// initialize with latest release
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(releases!==null&&releases!==void 0&&releases.length&&!release)setRelease(releases[0]);},[releases,release]);var handleReleaseChange=ev=>{var v=ev.target.value;var rel=releases===null||releases===void 0?void 0:releases.find(r=>r.version===v);setRelease(rel);};var handleGitHubReleaseDownload=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(){try{setError("");setDownloading(true);var firmware=yield (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .fetchFirmwareReleaseBinary */ .e0)(slug,tag);if(firmware)setFirmwareFile(tag,firmware);}finally{setDownloading(false);}});return function handleGitHubReleaseDownload(){return _ref.apply(this,arguments);};}();var handleClear=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(){try{setError("");setDownloading(true);setFirmwareFile(tag,undefined);}finally{setDownloading(false);}});return function handleClear(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_github_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{slug:slug}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null,error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"error"},error),!(firmwareBlobs!==null&&firmwareBlobs!==void 0&&firmwareBlobs.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"info"},"No firmware binary found in repository."),!!(firmwareBlobs!==null&&firmwareBlobs!==void 0&&firmwareBlobs.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{mb:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{expanded:firmwaresExpanded,onChange:()=>setFirmwaresExpanded(!firmwaresExpanded)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{expandIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,null)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{variant:"body2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,version),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null," ","(",firmwareBlobs.length," firmwares)"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,{dense:true},firmwareBlobs.map(blob=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .ZP,{key:blob.productIdentifier},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,{primary:blob.name,secondary:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__/* .Link */ .rU,{to:"/firmwares/0x"+blob.productIdentifier.toString(16)},"0x"+blob.productIdentifier.toString(16))}))))))),(releases===null||releases===void 0?void 0:releases.length)===0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{severity:"warning"},"No releases found."),!!(releases!==null&&releases!==void 0&&releases.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{fullWidth:true,helperText:"choose a version",value:tag,onChange:handleReleaseChange},releases===null||releases===void 0?void 0:releases.map(rel=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,{key:rel.version,value:rel.version},rel.version)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,null,!downloading&&release&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,{disabled:downloading,color:downloadColor,variant:downloadVariant,"aria-label":"Download last release from "+slug,onClick:handleGitHubReleaseDownload},"Download"),!downloading&&(firmwareBlobs===null||firmwareBlobs===void 0?void 0:firmwareBlobs.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,{disabled:disabled,variant:"text","arial-label":"Clear",onClick:handleClear},"Clear"),downloading&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null)));}

/***/ }),

/***/ 37796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareFlashInstructions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function FirmwareFlashInstructions(props){var{specification}=props;var{bootloader}=specification||{};var{driveName,sequence,ledAnimation,firmwareUploader}=bootloader||{};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,sequence==="reset"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Reset (RST)"),"\xA0 button."),sequence==="reset-boot"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Reset (RST)"),"\xA0 then \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Bootloader (BOOT)"),"\xA0 button."),sequence==="boot-power"&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Unplug the device, press the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Bootloader (BOOT)"),"\xA0 button, plug the device."),ledAnimation==="blue-glow"&&driveName&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"You should see the status LED glow in Blue and the\xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,driveName),"\xA0 drive should appear."),driveName&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Drag and drop the file into the\xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,driveName),"\xA0 drive."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Once the file is copied, the device will automatically restart with the new firmware.")),firmwareUploader&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Open the \xA0",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:firmwareUploader,rel:"noreferrer",target:"_blank"},"Firmware Uploader"),"\xA0 and follow the instruction to upload the firmware."));}

/***/ }),

/***/ 99360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFirmwareBlobs; },
  "x": function() { return /* binding */ useFirmwareBlob; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var flashing = __webpack_require__(98307);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(24973);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./src/components/github.ts
var github = __webpack_require__(6603);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(15785);
;// CONCATENATED MODULE: ./src/components/hooks/useIdleCallback.ts
function useIdleCallback(cb,timeout,deps){(0,react.useEffect)(()=>{if(typeof window==="undefined"||!cb)return;if("requestIdleCallback"in window){var id=window.requestIdleCallback(cb,{timeout});return()=>window.cancelIdleCallback(id);}else{var _id=setTimeout(cb,timeout);return()=>clearTimeout(_id);}},[cb,timeout].concat((0,toConsumableArray/* default */.Z)(deps||[])));}
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(96173);
// EXTERNAL MODULE: ./src/components/hooks/useAnalytics.tsx + 88 modules
var useAnalytics = __webpack_require__(92513);
// EXTERNAL MODULE: ./src/components/devices/useDeviceSpecifications.ts
var useDeviceSpecifications = __webpack_require__(56225);
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareBlobs.ts
function useFirmwareBlobs(){var{bus}=(0,react.useContext)(Context/* default */.Z);var{db}=(0,react.useContext)(DbContext/* default */.ZP);var{trackEvent}=(0,useAnalytics/* default */.ZP)();var{0:throttled,1:setThrottled}=(0,react.useState)(false);var mounted=(0,useMounted/* default */.Z)();var firmwares=db===null||db===void 0?void 0:db.firmwares;var specifications=(0,useDeviceSpecifications/* default */.Z)();var loadFirmwares=(0,react.useCallback)(/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function*(){var names=yield firmwares===null||firmwares===void 0?void 0:firmwares.list();if(!names)return;var slugs=(0,utils/* unique */.Tw)(specifications.filter(spec=>{var _spec$productIdentifi;return!!(spec!==null&&spec!==void 0&&(_spec$productIdentifi=spec.productIdentifiers)!==null&&_spec$productIdentifi!==void 0&&_spec$productIdentifi.length);})// needs some product identifiers
.map(spec=>spec.repo).filter(repo=>/^https:\/\/github.com\//.test(repo)).map(repo=>repo.substring("https://github.com/".length)));//console.debug(`firmware: found ${slugs.join(", ")}`)
for(var slug of slugs){var fw=yield firmwares.get(slug);if(fw){var{time}=fw;var age=Date.now()-time;//console.debug(`firmware: ${slug} age ${prettyDuration(age)}`)
if(age<3600000){// console.debug(`firmware: skipping fresh firmware ${slug}`)
continue;}}console.debug("firmware: fetch latest release of "+slug);var{status,release}=yield (0,github/* fetchLatestFirmwareRelease */.wA)(slug,{ignoreThrottled:true});trackEvent("github.fetch",{status,slug});if(status===403){trackEvent("github.fetch.throttled",{repo:slug});if(mounted())setThrottled(true);}if(!(release!==null&&release!==void 0&&release.version)){trackEvent("github.fetch.notfound",{repo:slug});console.warn("firmware: release not found");return;}setThrottled(false);//console.debug(
//    `firmware: fetch binary release ${slug} ${release.version}`
//)
var firmware=yield (0,github/* fetchFirmwareReleaseBinary */.e0)(slug,release.version);if(firmware){console.debug("firmware: binary release "+slug+" "+release.version+" downloaded");firmwares.set(slug,{time:Date.now(),firmware});}// throttle github queries
yield bus.delay(5000);}}),[db,firmwares,throttled]);// reload firmwares
useIdleCallback(()=>{try{loadFirmwares();}catch(e){console.debug(e);}},5000,[db,firmwares]);// update bus with info on changes
(0,useChange/* useChangeAsync */.R)(firmwares,/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(function*(fw){var names=yield fw===null||fw===void 0?void 0:fw.list();var uf2s=[];if(names!==null&&names!==void 0&&names.length){for(var name of names){var{firmware}=(yield fw.get(name))||{};if(firmware){var uf2Blobs=yield (0,flashing/* parseFirmwareFile */.Ub)(firmware,name);uf2Blobs===null||uf2Blobs===void 0?void 0:uf2Blobs.forEach(uf2Blob=>{uf2s.push(uf2Blob);});}}}bus.firmwareBlobs=uf2s;});return function(_x){return _ref2.apply(this,arguments);};}(),[]);return{throttled};}function useFirmwareBlob(repoSlug){var _repoSlug;repoSlug=(_repoSlug=repoSlug)===null||_repoSlug===void 0?void 0:_repoSlug.replace(/^https:\/\/github\.com\//i,"");var{db}=(0,react.useContext)(DbContext/* default */.ZP);var firmwares=db===null||db===void 0?void 0:db.firmwares;var blobs=(0,useChange/* useChangeAsync */.R)(firmwares,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function*(){if(!repoSlug)return undefined;var{firmware}=(yield firmwares===null||firmwares===void 0?void 0:firmwares.get(repoSlug))||{};if(!firmware){return undefined;}else{var uf2Blobs=yield (0,flashing/* parseFirmwareFile */.Ub)(firmware,repoSlug);return uf2Blobs;}}),[repoSlug]);var setFirmwareFile=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(function*(tag,f){if(!f)yield firmwares===null||firmwares===void 0?void 0:firmwares.set(repoSlug,undefined);else yield firmwares===null||firmwares===void 0?void 0:firmwares.set(repoSlug,{time:Date.now(),firmware:f});});return function setFirmwareFile(_x2,_x3){return _ref4.apply(this,arguments);};}();return{firmwareBlobs:blobs,setFirmwareFile};}

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

/***/ 2976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ LoadingProgress; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function LoadingProgress(props){var{size}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{disableShrink:true,variant:"indeterminate",size:size||"1em","aria-label":"loading"});}

/***/ }),

/***/ 70970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76446);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56036);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33797);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function SelectWithLabel(props){var{sx,label,fullWidth,required,disabled,value,error,placeholder,onChange,onClose,children,helperText,type,none,size}=props;var id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var labelId=id+"-label";var descrId=id+"-descr";var hasDescr=!!helperText||!!error;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{fullWidth:fullWidth,variant:"outlined"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{id:labelId,key:"label"},required?label+" *":label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{id:id,sx:sx,disabled:disabled,label:label,value:value,error:!!error,fullWidth:true,placeholder:placeholder,type:type,labelId:labelId,"aria-describedby":hasDescr?descrId:undefined,onChange:onChange,onClose:onClose,size:size},none!==undefined&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{key:"none",value:""},none),children),hasDescr&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{id:descrId},error||helperText));}

/***/ })

}]);
//# sourceMappingURL=913832d59ba65bf5a995efa1c4e48fc9101c7c83-f63c3628ea6dbcd25c43.js.map