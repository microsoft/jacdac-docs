"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9444],{

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

/***/ 82910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ semverCmp; }
/* harmony export */ });
/* unused harmony export versionTryParse */
function cmp(a,b){if(!a){if(!b)return 0;else return 1;}else if(!b)return-1;else{var d=a.major-b.major||a.minor-b.minor||a.patch-b.patch;if(d)return d;if(a.pre.length==0&&b.pre.length>0)return 1;if(a.pre.length>0&&b.pre.length==0)return-1;for(var i=0;i<a.pre.length+1;++i){var aa=a.pre[i];var bb=b.pre[i];if(!aa){if(!bb)return 0;else return-1;}else if(!bb)return 1;else if(/^\d+$/.test(aa)){if(/^\d+$/.test(bb)){d=parseInt(aa)-parseInt(bb);if(d)return d;}else return-1;}else if(/^\d+$/.test(bb))return 1;else{d=strcmp(aa,bb);if(d)return d;}}return 0;}}function versionTryParse(v){if(!v)return null;if("*"===v){return{major:Number.MAX_SAFE_INTEGER,minor:Number.MAX_SAFE_INTEGER,patch:Number.MAX_SAFE_INTEGER,pre:[],build:[]};}if(/^v\d/i.test(v))v=v.slice(1);var m=/^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);if(m)return{major:parseInt(m[1]),minor:parseInt(m[2]),patch:parseInt(m[3]),pre:m[5]?m[5].split("."):[],build:m[7]?m[7].split("."):[]};return null;}function strcmp(a,b){if(a===b)return 0;if(a<b)return-1;else return 1;}function semverCmp(a,b){var aa=versionTryParse(a);var bb=versionTryParse(b);if(!aa&&!bb)return strcmp(a,b);else return cmp(aa,bb);}

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

/***/ 6603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E1": function() { return /* binding */ normalizeSlug; },
/* harmony export */   "Jo": function() { return /* binding */ parseRepoUrl; },
/* harmony export */   "wA": function() { return /* binding */ fetchLatestFirmwareRelease; },
/* harmony export */   "ck": function() { return /* binding */ rawUrl; },
/* harmony export */   "e0": function() { return /* binding */ fetchFirmwareReleaseBinary; },
/* harmony export */   "Ux": function() { return /* binding */ useRepository; },
/* harmony export */   "Vv": function() { return /* binding */ useLatestReleaseAsset; },
/* harmony export */   "B5": function() { return /* binding */ useLatestFirmwareRelease; },
/* harmony export */   "ET": function() { return /* binding */ useLatestFirmwareReleases; }
/* harmony export */ });
/* unused harmony exports GITHUB_API_KEY, fetchText, useFetchJSON, useLatestRelease */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var _jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82910);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34284);
var ROOT="https://api.github.com/";var GITHUB_API_KEY="githubtoken";function contentToFirmwareRelease(content){var _$exec;// filter out non-file, non-uf2
var version=(content===null||content===void 0?void 0:content.type)==="file"&&((_$exec=/^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name))===null||_$exec===void 0?void 0:_$exec[1]);if(!version)return undefined;return{version,sha:content.sha,size:content.size,html_url:content.html_url,download_url:content.download_url};}function contentsToFirmwareReleases(contents){return contents===null||contents===void 0?void 0:contents.map(contentToFirmwareRelease).filter(r=>!!r).sort((l,r)=>-(0,_jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_1__/* .semverCmp */ .k)(l.version,r.version));}function normalizeSlug(slug){if(!slug)return{};var cleaned=slug.replace(/^https:\/\/github.com\//,"").replace(/\/tree\/master/,"");var parts=cleaned.split("/");return{repoPath:parts[0]+"/"+parts[1],owner:parts[0],name:parts[1],folder:parts.slice(2).join("/")};}function parseRepoUrl(url){var u=(url||"").replace(/\/tree\/master/,"");var m=/^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(u);if(m)return{owner:m[1],name:m[2]};return undefined;}function fetchLatestFirmwareRelease(_x,_x2){return _fetchLatestFirmwareRelease.apply(this,arguments);}function _fetchLatestFirmwareRelease(){_fetchLatestFirmwareRelease=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(slug,options){// https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
var{repoPath}=normalizeSlug(slug);var uri=ROOT+"repos/"+repoPath+"/contents/dist";var resp=yield fetch(uri);//    console.log(resp)
var{status}=resp;switch(status){case 200:case 204:{var contents=yield resp.json();var releases=contentsToFirmwareReleases(contents);return{release:releases[0],status};}case 404:// unknow repo or no access
return{status};case 403:// throttled
if(options!==null&&options!==void 0&&options.ignoreThrottled)return{status};throw new Error("Too many calls to GitHub, try again later");}throw new Error("unknown status code "+resp.status);});return _fetchLatestFirmwareRelease.apply(this,arguments);}function rawUrl(slug,branch,path){var{repoPath,folder}=normalizeSlug(slug);var url="https://raw.githubusercontent.com/"+[repoPath,branch,folder,path].filter(p=>!!p).join("/");return url;}function fetchFirmwareReleaseBinary(_x3,_x4){return _fetchFirmwareReleaseBinary.apply(this,arguments);}function _fetchFirmwareReleaseBinary(){_fetchFirmwareReleaseBinary=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(slug,version){// we are not using the release api because of CORS.
var{repoPath}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/main/dist/fw-"+version+".uf2";var req=yield fetch(downloadUrl,{headers:{Accept:"application/octet-stream"}});if(req.status==200){var firmware=yield req.blob();return firmware;}return undefined;});return _fetchFirmwareReleaseBinary.apply(this,arguments);}function fetchText(_x5,_x6,_x7,_x8){return _fetchText.apply(this,arguments);}function _fetchText(){_fetchText=_asyncToGenerator(function*(slug,tag,path,mimeType){var{repoPath,folder}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/"+tag+"/"+(folder?folder+"/":"")+path;var req=yield fetch(downloadUrl,{headers:{Accept:mimeType}});if(req.status==200){var src=yield req.text();return src;}return undefined;});return _fetchText.apply(this,arguments);}function useFetchApi(path,options){var res=(0,_useFetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(path?""+ROOT+path:undefined);if(res.status!==undefined)switch(res.status){case 200:case 201:case 202:case 203:case 204:break;case 404:// unknow repo or no access
res.response=undefined;break;case 403:// throttled
if(options!==null&&options!==void 0&&options.ignoreThrottled){res.response=undefined;return res;}else throw new Error("Too many calls to GitHub, try again later");default:console.log("unknown status",res);throw new Error("Unknown response from GitHub "+res.status);}return res;}function useFetchJSON(slug,tag,path,mimeType){var{repoPath,folder}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/"+tag+"/"+(folder?folder+"/":"")+path;return useFetch(downloadUrl,{headers:{Accept:mimeType}});}function useRepository(slug){var{repoPath}=normalizeSlug(slug);var path=repoPath?"repos/"+repoPath:undefined;var res=useFetchApi(path,{ignoreThrottled:true});return res;}function useLatestRelease(slug){var{repoPath}=normalizeSlug(slug);var path="repos/"+repoPath+"/releases/latest";var res=useFetchApi(path);return res;}function useLatestReleaseAsset(url){var[,slug,filename]=/^https:\/\/github.com\/(.+)\/releases\/latest\/download\/(.+)$/i.exec(url)||[];//console.log(`asset slug`, { url, slug })
if(!slug)return{status:404};var{status,response}=useLatestRelease(slug);if(status===200&&response){var{tag_name,name}=response;return{name,version:tag_name,assertUrl:"https://github.com/"+slug+"/releases/download/"+tag_name+"/"+filename};}else return{};}function useLatestFirmwareRelease(slug,options){var _resp$response;var resp=useLatestFirmwareReleases(slug,options);return Object.assign({},resp,{response:(_resp$response=resp.response)===null||_resp$response===void 0?void 0:_resp$response[0]});}function useLatestFirmwareReleases(slug,options){if(!slug)return{response:undefined,loading:false,error:undefined,status:undefined};var{repoPath}=normalizeSlug(slug);var uri="repos/"+repoPath+"/contents/dist";var res=useFetchApi(uri,Object.assign({},options||{},{ignoreThrottled:true}));return Object.assign({},res,{response:contentsToFirmwareReleases(res.response)});}

/***/ }),

/***/ 28709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useInstanceName; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22878);
function useInstanceName(service,options){var instanceNameRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.InstanceName */ .ZJq.InstanceName);var[instanceName]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_1__/* .useRegisterUnpackedValue */ .Pf)(instanceNameRegister,options);return instanceName;}

/***/ }),

/***/ 1103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ChipList; }
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var PREFIX="ChipList";var classes={root:PREFIX+"root"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)("span")(_ref=>{var{theme}=_ref;return{["&."+classes.root]:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap","& > *":{margin:theme.spacing(0.5)}}};});function ChipList(props){var{children}=props;if(!children)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root,{className:classes.root},children);}

/***/ }),

/***/ 22129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Markdown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Suspense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19811);
var SuspensedMarkdown=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 5414).then(__webpack_require__.bind(__webpack_require__, 15414)));function Markdown(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suspense__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuspensedMarkdown,props));}

/***/ }),

/***/ 34284:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useFetch; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60763);
function useFetch(url,options){var{0:response,1:setResponse}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:status,1:setStatus}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);// start in loading mode
(0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(mounted){setLoading(true);try{if(!url){setStatus(404);setResponse(undefined);}else{var res=yield fetch(url,options);if(!mounted())return;var _status=res.status;setStatus(_status);if(_status>=200&&_status<=204){var json=yield res.json();if(!mounted())return;setResponse(json);}}}catch(error){if(!mounted())return;setError(error);}finally{if(mounted())setLoading(false);}});return function(_x){return _ref.apply(this,arguments);};}(),[url]);return{response,error,status,loading};}

/***/ }),

/***/ 87518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PanelTester; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(95408);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(62605);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(39707);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__(59766);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Stack/Stack.js


const _excluded = ["component", "direction", "spacing", "divider", "children"];







/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */

function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,esm_extends/* default */.Z)({
    display: 'flex',
    flexDirection: 'column'
  }, (0,breakpoints/* handleBreakpoints */.k9)({
    theme
  }, (0,breakpoints/* resolveBreakpointValues */.P$)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.hB)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.P$)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */.NA)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.Z)(styles, (0,breakpoints/* handleBreakpoints */.k9)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.dt)(theme.breakpoints, styles);
  return styles;
};
const StackRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,extendSxProp/* default */.Z)(themeProps);
  const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Stack_Stack = (Stack);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(1820);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(47425);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(85092);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(10431);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(23508);
// EXTERNAL MODULE: ./jacdac-ts/src/testdom/compiler.ts
var compiler = __webpack_require__(63485);
// EXTERNAL MODULE: ./src/jacdac/useBus.ts
var useBus = __webpack_require__(26040);
;// CONCATENATED MODULE: ./src/components/testdom/usePanelTest.ts
function usePanelTest(panelSpec){var bus=(0,useBus/* default */.Z)();var{0:panel,1:setPanel}=(0,react.useState)(undefined);(0,react.useEffect)(()=>{if(panelSpec){try{var p=(0,compiler/* createPanelTest */.Uo)(bus,panelSpec);if(p)p.bus=bus;setPanel(p);return()=>p.bus=undefined;}catch(e){console.debug(e);}}setPanel(undefined);return undefined;},[panelSpec]);return panel;}
// EXTERNAL MODULE: ./src/components/testdom/TestStateIcon.tsx
var TestStateIcon = __webpack_require__(54711);
// EXTERNAL MODULE: ./src/components/testdom/TestTreeView.tsx
var TestTreeView = __webpack_require__(12368);
// EXTERNAL MODULE: ./src/components/testdom/DeviceTestExporter.tsx
var DeviceTestExporter = __webpack_require__(77303);
// EXTERNAL MODULE: ./src/components/firmware/FirmwareLoader.tsx
var FirmwareLoader = __webpack_require__(13672);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(76914);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(40830);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(22129);
// EXTERNAL MODULE: ./src/components/ui/ChipList.tsx
var ChipList = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/testdom/filters.ts
var filters = __webpack_require__(81140);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(46196);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(90461);
// EXTERNAL MODULE: ./src/components/devices/useDeviceImage.ts
var useDeviceImage = __webpack_require__(36141);
// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__(11352);
// EXTERNAL MODULE: ./src/components/tools/ImageAvatar.tsx + 3 modules
var ImageAvatar = __webpack_require__(24840);
;// CONCATENATED MODULE: ./src/components/testdom/PanelDeviceChip.tsx
function PanelDeviceChip(props){var{device}=props;var{productIdentifier,count}=device;var specification=(0,useDeviceSpecification/* useDeviceSpecificationFromProductIdentifier */.Oi)(productIdentifier);var imageUrl=(0,useDeviceImage/* default */.Z)(specification,"avatar");var name=(specification===null||specification===void 0?void 0:specification.name)||"?";return/*#__PURE__*/react.createElement(Chip/* default */.Z,{icon:/*#__PURE__*/react.createElement(ImageAvatar/* default */.Z,{src:imageUrl,alt:name,avatar:true}),label:name+" x "+count,size:"small"});}
;// CONCATENATED MODULE: ./src/components/testdom/PanelSpecEditor.tsx
function PanelSpecEditor(props){var{source,setSource,panel}=props;var{0:expanded,1:setExpanded}=(0,react.useState)(!source);var handleExpanded=()=>setExpanded(v=>!v);var bus=(0,useBus/* default */.Z)();var handleCapture=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(){var devices=bus.devices({physical:true,announced:true,ignoreInfrastructure:true}).filter(filters/* filterTestDevice */.zm);var dids={};for(var device of devices){var pid=yield device.resolveProductIdentifier();if(!pid)continue;var services=device.services().filter(srv=>(0,filters/* filterTestService */.re)(srv.serviceClass));if(!services.length)continue;var did=dids[pid]||(dids[pid]={productIdentifier:pid,services:(0,utils/* uniqueMap */.EM)(services,srv=>srv.serviceClass.toString(16),srv=>srv).map(srv=>{var _srv$specification;return{name:(_srv$specification=srv.specification)===null||_srv$specification===void 0?void 0:_srv$specification.shortId,serviceClass:srv.serviceClass,count:0};}),count:0});did.count++;var _loop=function _loop(service){did.services.find(srv=>srv.serviceClass===service.serviceClass).count++;};for(var service of services){_loop(service);}var _panel={id:"",devices:Object.values(dids),oracles:[]};setSource(JSON.stringify(_panel,null,2));}});return function handleCapture(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Accordion/* default */.Z,{expanded:expanded,onChange:handleExpanded},/*#__PURE__*/react.createElement(AccordionSummary/* default */.Z,{expandIcon:/*#__PURE__*/react.createElement(ExpandMore/* default */.Z,null)},panel?/*#__PURE__*/react.createElement(ChipList/* default */.Z,null,panel===null||panel===void 0?void 0:panel.devices.map(device=>/*#__PURE__*/react.createElement(PanelDeviceChip,{key:device.productIdentifier,device:device}))):/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"body1"},"Invalid configuration")),/*#__PURE__*/react.createElement(AccordionDetails/* default */.Z,{style:{display:"block"}},/*#__PURE__*/react.createElement(Stack_Stack,{spacing:1},/*#__PURE__*/react.createElement("h2",null,"Configuration",/*#__PURE__*/react.createElement(Button/* default */.Z,{title:"Generate manifest for current connected devices",variant:"outlined",onClick:handleCapture},"Capture current")),/*#__PURE__*/react.createElement(HighlightTextField/* default */.Z,{code:source,language:"json",onChange:setSource}),/*#__PURE__*/react.createElement(Markdown/* default */.Z,{source:"\n#### Manifest Format                        \n\nA JSON formatted manifest containing an array of device specification reference and their expected item count:\n```typescript\nexport interface PanelTestSpec {\n    id: string\n    devices: {\n        // decimal or hex as string\n        productIdentifier: number | string\n        count: number\n        firmwareVersion?: string\n        // optional if device in catalog\n        services?: {\n            name?: string\n            // decimal or hex as string\n            serviceClass?: number | string\n            count?: number\n        }[]\n    }[]\n    oracles?: {\n        serviceClass: number | string\n        deviceId: string\n        tolerance?: number\n    }[]\n}\n```\n\nFor example, a panel with 20 modules with a humidity and temperature services, using an additional device `38ce43597a4f9e69`\nas oracle would be defined as\n```json\n{\n    \"id\": \"example\",\n    \"devices\": [{\n        \"productIdentifier\": \"0x3156cfd7\",\n        \"count\": 20,\n        \"services\": [{\n            \"name\": \"humidity\"\n        }, {\n            \"name\": \"temperature\"\n        }]\n    }],\n    \"oracles\": [{\n        \"serviceClass\": \"humidity\",\n        \"deviceId\": \"38ce43597a4f9e69\",\n        \"tolerance\": 1\n    }, {\n        \"serviceClass\": \"temperature\",\n        \"deviceId\": \"38ce43597a4f9e69\",\n        \"tolerance\": 1\n    }]\n}\n```\n"}))));}
;// CONCATENATED MODULE: ./src/pages/tools/panel-tester.tsx











var PANEL_MANIFEST_KEY = "panel-test-manifest";

function Results(props) {
  var {
    panel
  } = props;
  var {
    0: expanded,
    1: setExpanded
  } = (0,react.useState)(true);

  var handleExpanded = () => setExpanded(v => !v);

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement("h2", null, "Test Result: ", /*#__PURE__*/react.createElement(TestStateIcon/* default */.Z, {
    node: panel
  }))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/react.createElement(TestTreeView/* default */.Z, {
    test: panel,
    showTwins: true,
    defaultExpanded: true
  })));
}

function PanelTester() {
  var [manifestSource, setManifestSource] = (0,useLocalStorage/* default */.Z)(PANEL_MANIFEST_KEY, "");
  var panelSpec = (0,react.useMemo)(() => (0,compiler/* tryParsePanelTestSpec */.JC)(manifestSource), [manifestSource]);
  var panel = usePanelTest(panelSpec);
  return /*#__PURE__*/react.createElement(Stack_Stack, {
    spacing: 3
  }, /*#__PURE__*/react.createElement(FirmwareLoader/* default */.Z, null), /*#__PURE__*/react.createElement("h1", null, "Panel Tester"), /*#__PURE__*/react.createElement(PanelSpecEditor, {
    source: manifestSource,
    setSource: setManifestSource,
    panel: panelSpec
  }), panel && /*#__PURE__*/react.createElement(Results, {
    panel: panel
  }), panel && /*#__PURE__*/react.createElement(DeviceTestExporter/* default */.Z, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-panel-tester-tsx-604842ccc14e7b516570.js.map