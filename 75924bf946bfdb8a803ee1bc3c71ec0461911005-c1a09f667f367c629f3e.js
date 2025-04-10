"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1221],{

/***/ 70486:
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
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"
}), 'HourglassEmpty');
exports.Z = _default;

/***/ }),

/***/ 89726:
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
  d: "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
}), 'PanTool');
exports.Z = _default;

/***/ }),

/***/ 63094:
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
  d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
}), 'QuestionMark');
exports.Z = _default;

/***/ }),

/***/ 54567:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Backdrop_Backdrop; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(16628);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.Z)('MuiBackdrop', ['root', 'invisible']);
/* harmony default export */ var Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js


const _excluded = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "slotProps", "slots", "transitionDuration", "TransitionComponent"];









const useUtilityClasses = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return (0,composeClasses/* default */.Z)(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/react.forwardRef(function Backdrop(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiBackdrop'
  });
  const {
      children,
      component = 'div',
      components = {},
      componentsProps = {},
      className,
      invisible = false,
      open,
      slotProps = {},
      slots = {},
      transitionDuration,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Fade/* default */.Z
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropRoot, (0,esm_extends/* default */.Z)({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: (0,clsx_m/* default */.Z)(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: (0,esm_extends/* default */.Z)({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes: classes,
      ref: ref,
      children: children
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Backdrop_Backdrop = (Backdrop);

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

/***/ 16628:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58052);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2734);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30577);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51705);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];








const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Fade(props, ref) {
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, _excluded);
  const enableStrictModeCompat = true;
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .reflow */ .n)(node); // So the animation always start from the start.

    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .C)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .C)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
    appear: appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = (Fade);

/***/ }),

/***/ 42440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ List_List; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/List/listClasses.js


function getListUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiList', slot);
}
const listClasses = (0,generateUtilityClasses/* default */.Z)('MuiList', ['root', 'padding', 'dense', 'subheader']);
/* harmony default export */ var List_listClasses = ((/* unused pure expression or super */ null && (listClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/List/List.js


const _excluded = ["children", "className", "component", "dense", "disablePadding", "subheader"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
  };
  return (0,composeClasses/* default */.Z)(slots, getListUtilityClass, classes);
};
const ListRoot = (0,styled/* default */.ZP)('ul', {
  name: 'MuiList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.Z)({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative'
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /*#__PURE__*/react.forwardRef(function List(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiList'
  });
  const {
      children,
      className,
      component = 'ul',
      dense = false,
      disablePadding = false,
      subheader
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListRoot, (0,esm_extends/* default */.Z)({
      as: component,
      className: (0,clsx_m/* default */.Z)(classes.root, className),
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var List_List = (List);

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

/***/ 74261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Modal_Modal; }
});

// UNUSED EXPORTS: modalClasses

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef.js
var useForkRef = __webpack_require__(30067);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument.js
var ownerDocument = __webpack_require__(57094);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback.js
var useEventCallback = __webpack_require__(73633);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/createChainedFunction.js
var createChainedFunction = __webpack_require__(49064);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/base/Portal/Portal.js
var Portal = __webpack_require__(78385);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerWindow.js
var ownerWindow = __webpack_require__(58290);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(95806);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/ModalManager.js

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0,ownerDocument/* default */.Z)(container);
  if (doc.body === container) {
    return (0,ownerWindow/* default */.Z)(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt((0,ownerWindow/* default */.Z)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0,getScrollbarSize/* default */.Z)((0,ownerDocument/* default */.Z)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = (0,ownerDocument/* default */.Z)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = (0,ownerDocument/* default */.Z)(container).body;
    } else {
      // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = (0,ownerWindow/* default */.Z)(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/base/FocusTrap/FocusTrap.js
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */





// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * Utility component that locks focus inside the component.
 *
 * Demos:
 *
 * - [Focus Trap](https://mui.com/base/react-focus-trap/)
 *
 * API:
 *
 * - [FocusTrap API](https://mui.com/base/api/focus-trap/)
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react.useRef(false);
  const sentinelStart = react.useRef(null);
  const sentinelEnd = react.useRef(null);
  const nodeToRestore = react.useRef(null);
  const reactFocusEventTarget = react.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = react.useRef(false);
  const rootRef = react.useRef(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = (0,useForkRef/* default */.Z)(children.ref, rootRef);
  const lastKeydown = react.useRef(null);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,ownerDocument/* default */.Z)(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,ownerDocument/* default */.Z)(rootRef.current);
    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain(null);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/react.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ var FocusTrap_FocusTrap = (FocusTrap);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js


function getModalUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiModal', slot);
}
const modalUnstyledClasses_modalUnstyledClasses = (0,generateUtilityClasses/* default */.Z)('MuiModal', ['root', 'hidden']);
/* harmony default export */ var ModalUnstyled_modalUnstyledClasses = ((/* unused pure expression or super */ null && (modalUnstyledClasses_modalUnstyledClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/useSlotProps.js + 3 modules
var useSlotProps = __webpack_require__(34261);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js


const _excluded = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];











const useUtilityClasses = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return (0,composeClasses/* default */.Z)(slots, getModalUtilityClass, classes);
};
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/material-ui/api/dialog/)
 * *   [Drawer](https://mui.com/material-ui/api/drawer/)
 * *   [Menu](https://mui.com/material-ui/api/menu/)
 * *   [Popover](https://mui.com/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Unstyled Modal](https://mui.com/base/react-modal/)
 *
 * API:
 *
 * - [ModalUnstyled API](https://mui.com/base/api/modal-unstyled/)
 */
const ModalUnstyled = /*#__PURE__*/react.forwardRef(function ModalUnstyled(props, forwardedRef) {
  var _props$ariaHidden, _ref;
  const {
      children,
      classes: classesProp,
      closeAfterTransition = false,
      component,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      // private
      manager = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      open,
      onTransitionEnter,
      onTransitionExited,
      slotProps = {},
      slots = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [exited, setExited] = react.useState(!open);
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.Z)(modalRef, forwardedRef);
  const hasTransition = getHasTransition(children);
  const ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;
  const getDoc = () => (0,ownerDocument/* default */.Z)(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = (0,useEventCallback/* default */.Z)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0,useEventCallback/* default */.Z)(node => {
    mountNodeRef.current = node;
    if (!node || !modalRef.current) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses(ownerState);
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    childProps.onEnter = (0,createChainedFunction/* default */.Z)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,createChainedFunction/* default */.Z)(handleExited, children.props.onExited);
  }
  const Root = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
  const rootProps = (0,useSlotProps/* default */.Z)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: 'presentation',
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = (0,useSlotProps/* default */.Z)({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    additionalProps: {
      'aria-hidden': true,
      onClick: handleBackdropClick,
      open
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal/* default */.Z
  // @ts-expect-error TODO: include ref to MUI Base Portal props
  , {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends/* default */.Z)({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropComponent, (0,esm_extends/* default */.Z)({}, backdropProps)) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(FocusTrap_FocusTrap, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react.cloneElement(children, childProps)
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var ModalUnstyled_ModalUnstyled = (ModalUnstyled);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/resolveComponentProps.js
var resolveComponentProps = __webpack_require__(71276);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(28442);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(54567);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Modal/Modal.js


const Modal_excluded = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"];









const modalClasses = (/* unused pure expression or super */ null && (modalUnstyledClasses));
const extendUtilityClasses = ownerState => {
  return ownerState.classes;
};
const ModalRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'fixed',
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = (0,styled/* default */.ZP)(Backdrop/* default */.Z, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = (0,useThemeProps/* default */.Z)({
    name: 'MuiModal',
    props: inProps
  });
  const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      closeAfterTransition = false,
      children,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      slotProps,
      slots,
      // eslint-disable-next-line react/prop-types
      theme
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, Modal_excluded);
  const [exited, setExited] = react.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const ownerState = (0,esm_extends/* default */.Z)({}, props, commonProps, {
    exited
  });
  const classes = extendUtilityClasses(ownerState);
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalUnstyled_ModalUnstyled, (0,esm_extends/* default */.Z)({
    slots: {
      root: RootSlot,
      backdrop: BackdropSlot
    },
    slotProps: {
      root: () => (0,esm_extends/* default */.Z)({}, (0,resolveComponentProps/* default */.Z)(rootSlotProps, ownerState), !(0,isHostComponent/* default */.Z)(RootSlot) && {
        as: component,
        theme
      }),
      backdrop: () => (0,esm_extends/* default */.Z)({}, BackdropProps, (0,resolveComponentProps/* default */.Z)(backdropSlotProps, ownerState))
    },
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref: ref
  }, other, {
    classes: classes
  }, commonProps, {
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Modal_Modal = (Modal);

/***/ }),

/***/ 95806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ }),

/***/ 63485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JC": function() { return /* binding */ tryParsePanelTestSpec; },
/* harmony export */   "ux": function() { return /* binding */ createDeviceTest; },
/* harmony export */   "Uo": function() { return /* binding */ createPanelTest; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15785);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var _jdom_pretty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34743);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32098);
/* harmony import */ var _spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40914);
/* harmony import */ var _testrules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45665);
function createSetIntensityAndValueRule(rule){var{name:ruleName,steps}=rule;var name=ruleName||"set intensity, value to "+steps.map(_ref=>{var{duration,intensity,value}=_ref;return (0,_jdom_pretty__WEBPACK_IMPORTED_MODULE_1__/* .prettyDuration */ .Xh)(duration)+": "+(intensity!==undefined?"i:"+intensity+", ":"")+(value!==undefined?"v:"+value+"}":"");}).join(", ");return new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .ServiceCommandTest */ .GT({name,start:test=>{var mounted=true;var work=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){var service=test.service;var intensityRegister=service.intensityRegister;var valueRegister=service.valueRegister;var k=0;while(mounted){var step=steps[k++%steps.length];var{duration,intensity,value}=step;if(intensity!==undefined)yield intensityRegister.sendSetPackedAsync([intensity],true);if(value!==undefined)yield valueRegister.sendSetPackedAsync([value],true);yield (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .delay */ .gw)(duration);if(k>steps.length)test.state=_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;}});return function work(){return _ref2.apply(this,arguments);};}();work();return()=>{mounted=false;};}});}function createReadingRule(rule){var{value,tolerance,samples=1,type,op}=rule;var tol=isNaN(tolerance)||tolerance<=0?0:tolerance;var opf={"==":(a,b,tol)=>Math.abs(a-b)<=tol,"<":(a,b,tol)=>a<b+tol,">":(a,b,tol)=>a>b-tol}[op||"=="];var count=0;var seen=count>=samples;var incorrect=undefined;return(node,logger)=>{if(!seen){var{register}=node;var[current]=register.unpackedValue;var active=current!==undefined&&opf(current,value,tol);if(active){count++;incorrect=undefined;}else{count=0;incorrect=current;}// recompute
seen=count>=samples;}if(incorrect)logger("incorrect "+type+" value ("+incorrect+")");else if(count===0)logger("missing "+type+" value");else if(!seen)logger("waiting for more "+type+" values ("+count+" < "+seen+")");else logger(type+" value seen");return seen?_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass:_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;};}// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createEventRule(rule){return(node,logger)=>{var{event}=node;var seen=(event===null||event===void 0?void 0:event.count)>0;if(!seen)logger("event not observed");return(event===null||event===void 0?void 0:event.count)>0?_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass:_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;};}function createOracleRule(oracle){var samples=0;var threshold=5;var{tolerance=0}=oracle;return(node,logger)=>{var _node$resolveOracle;var{register}=node;// find oracle register
var oracleRegister=(_node$resolveOracle=node.resolveOracle(register))===null||_node$resolveOracle===void 0?void 0:_node$resolveOracle.register;if(!oracleRegister){logger("oracle not found");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Fail */ .t.Fail;}var[oracleValue]=oracleRegister.unpackedValue||[];var[value]=register.unpackedValue||[];//console.log("oracle", { oracleValue, value })
if(tolerance<=0?value===oracleValue:Math.abs(value-oracleValue)<=tolerance){samples++;}else{samples=0;}if(samples==0){logger(tolerance<=0?value+" != "+oracleValue:"error "+Math.abs(value-oracleValue)+" > "+tolerance);return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Fail */ .t.Fail;}if(samples<threshold){logger("sampling register values...");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;}else{logger(tolerance<=0?value+" == "+oracleValue:"error "+Math.abs(value-oracleValue)+" <= "+tolerance);return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;}};}function createReadingTest(specification,readingRule){var{type,name,value,tolerance,manualSteps,op="=="}=readingRule;var registerId=type==="reading"?_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Reading */ .ZJq.Reading:type==="intensity"?_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Intensity */ .ZJq.Intensity:_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Value */ .ZJq.Value;var registerSpec=specification.packets.find(pkt=>(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isRegister */ .x5)(pkt)&&pkt.identifier===registerId);return new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7(name||"observe "+registerSpec.name+" "+op+" "+value+(tolerance?" +/-"+tolerance:""),manualSteps,registerId,createReadingRule(readingRule));}function createEventTest(specification,eventRule){var{name,eventName,manualSteps}=eventRule;var pkt=specification.packets.find(pkt=>(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isEvent */ .cO)(pkt)&&pkt.name===eventName);return new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .EventTest */ .CK(name||"raise event "+eventName,manualSteps,pkt.identifier,createEventRule(eventRule));}function compileTestRule(specification,rule){var{type}=rule;switch(type){case"setIntensityAndValue":return createSetIntensityAndValueRule(rule);case"value":case"intensity":case"reading":return createReadingTest(specification,rule);case"event":return createEventTest(specification,rule);default:return undefined;}}function tryParsePanelTestSpec(source){var json=(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .JSONTryParse */ .ZZ)(source);if(json.devices&&Array.isArray(json.devices)&&json.devices.every(d=>!!d.productIdentifier&&d.count>0)&&(!json.oracles||Array.isArray(json.oracles)&&json.oracles.every(o=>!!(o!==null&&o!==void 0&&o.serviceClass)&&!!(o!==null&&o!==void 0&&o.deviceId)))){for(var oracle of json.oracles||[]){oracle.serviceClass=(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .parseIdentifier */ .ti)(oracle.serviceClass);}// normalize json
for(var device of json.devices){device.productIdentifier=(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .parseIdentifier */ .ti)(device.productIdentifier);if(device.services){for(var service of device.services){if(service.name){var spec=(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromName */ .kB)(service.name);if(!spec){console.log("unknown service "+service.name);return undefined;}service.serviceClass=spec.classIdentifier;}service.serviceClass=(0,_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .parseIdentifier */ .ti)(service.serviceClass);if(!service.serviceClass)return undefined;}}}return json;}return undefined;}function createStatusCodeTest(){return new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7("status code should be ready, sleeping or not implemented",undefined,_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .BaseReg.StatusCode */ .vCn.StatusCode,(node,logger)=>{var{register}=node;var{unpackedValue=[]}=register;if(register.notImplemented||!unpackedValue.length){logger("not implemented");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;}var[code,vendorCode]=unpackedValue;if(vendorCode!==0){logger("vendor code in error mode");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Fail */ .t.Fail;}if(code===_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemStatusCodes.Initializing */ ._kj.Initializing){logger("initializing...");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;}else if(code===_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemStatusCodes.Calibrating */ ._kj.Calibrating){logger("calibrating...");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;}var ok=code===_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemStatusCodes.Ready */ ._kj.Ready||code===_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemStatusCodes.Sleeping */ ._kj.Sleeping;if(ok)return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;logger("expected status code equals to 0x0,0x0 or 0x3,0x0");return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Fail */ .t.Fail;});}function createDeviceTest(bus,device,oracles){var{deviceCatalog}=bus;var{productIdentifier,firmwareVersion,factory}=device;var specification=deviceCatalog.specificationFromProductIdentifier(productIdentifier);var deviceTest=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .DeviceTest */ .fn(productIdentifier,specification,device);// add status light
deviceTest.appendChild(new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .DeviceStatsTest */ .RG());deviceTest.appendChild(new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .StatusLightTest */ .Pv());// add test for control
var controlTest=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .ServiceTest */ .i1("control",_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_CONTROL */ .gm9);controlTest.appendChild(createStatusCodeTest());if(firmwareVersion){controlTest.appendChild(new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7("firmware version is "+firmwareVersion,undefined,_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .ControlReg.FirmwareVersion */ .toU.FirmwareVersion,(node,logger)=>{var{register}=node;var value=register===null||register===void 0?void 0:register.stringValue;var ok=value===firmwareVersion;if(value&&!ok)logger("incorrect firmware version, expected "+firmwareVersion);return ok?_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass:value?_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Fail */ .t.Fail:_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;}));}deviceTest.appendChild(controlTest);var services=device.services||specification.services.map(srv=>({serviceClass:srv}));var _loop=function _loop(service){var{serviceClass,count=1,disableBuiltinRules}=service;var serviceOracle=oracles===null||oracles===void 0?void 0:oracles.find(oracle=>oracle.serviceClass===serviceClass);var specification=(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);var _loop2=function _loop2(i){var serviceTest=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .ServiceTest */ .i1((specification===null||specification===void 0?void 0:specification.shortName.toLowerCase())||"0x"+serviceClass.toString(16),serviceClass);{var _packets$filter,_packets$filter$map;// add status code
serviceTest.appendChild(createStatusCodeTest());var packets=specification===null||specification===void 0?void 0:specification.packets;// reading value rule if any
var readingSpec=packets===null||packets===void 0?void 0:packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz);if(readingSpec){var readingOptional=readingSpec.optional;serviceTest.appendChild(new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7(readingSpec.name+" data should stream",undefined,readingSpec.identifier,node=>{var{register}=node;var{unpackedValue=[],notImplemented}=register;if(readingOptional&&notImplemented){node.output="optional register not implemented";return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;}return(unpackedValue===null||unpackedValue===void 0?void 0:unpackedValue.length)>0?_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass:_spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;}));}// add oracle
if(readingSpec&&serviceOracle){var rt=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7(readingSpec.name+" near oracle",undefined,_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.Reading */ .ZJq.Reading,createOracleRule(serviceOracle));var oracleNode=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterOracle */ .j0("oracle reading",serviceOracle.deviceId,serviceOracle.serviceIndex,serviceClass,serviceOracle.tolerance);rt.appendChild(oracleNode);serviceTest.appendChild(rt);}// read values of all mandatory registers
packets===null||packets===void 0?void 0:(_packets$filter=packets.filter(p=>!p.optional&&!p.client&&(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isRegister */ .x5)(p)&&!(0,_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz)(p)&&p.identifier!==_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.StreamingInterval */ .ZJq.StreamingInterval&&p.identifier!==_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SystemReg.StreamingSamples */ .ZJq.StreamingSamples))===null||_packets$filter===void 0?void 0:(_packets$filter$map=_packets$filter.map(p=>new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterTest */ .O7(p.name+" has value",undefined,p.identifier,node=>{var{register}=node;var{unpackedValue=[]}=register;if((unpackedValue===null||unpackedValue===void 0?void 0:unpackedValue.length)>0)return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Pass */ .t.Pass;register.scheduleRefresh();return _spec__WEBPACK_IMPORTED_MODULE_5__/* .TestState.Running */ .t.Running;})))===null||_packets$filter$map===void 0?void 0:_packets$filter$map.forEach(node=>serviceTest.appendChild(node));// import additional test nodes
var testNodes=[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(!disableBuiltinRules&&(0,_testrules__WEBPACK_IMPORTED_MODULE_6__/* .resolveTestRules */ .f2)(serviceClass)||[]),(0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(service.rules||[])).filter(rule=>!factory||rule.factory).map(rule=>compileTestRule(specification,rule)).filter(r=>!!r);testNodes===null||testNodes===void 0?void 0:testNodes.forEach(testRule=>serviceTest.appendChild(testRule));// import member tests
var testCommand=(0,_testrules__WEBPACK_IMPORTED_MODULE_6__/* .resolveServiceCommandTest */ .c8)(serviceClass);if(testCommand)serviceTest.appendChild(new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .ServiceCommandTest */ .GT(testCommand));}deviceTest.appendChild(serviceTest);};for(var i=0;i<count;++i){_loop2(i);}};for(var service of services){_loop(service);}return deviceTest;}function createPanelTest(bus,panel){var{id,devices=[],oracles=[]}=panel;var panelTest=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .PanelTest */ .kB(id,panel);// add oracles
for(var oracle of oracles){var{serviceClass,deviceId,serviceIndex,tolerance}=oracle;var oracleNode=new _nodes__WEBPACK_IMPORTED_MODULE_4__/* .RegisterOracle */ .j0("oracle for "+(0,_jdom_pretty__WEBPACK_IMPORTED_MODULE_1__/* .serviceName */ .HV)(serviceClass),deviceId,serviceIndex,serviceClass,tolerance);panelTest.appendChild(oracleNode);}// add devices
for(var device of devices){var{count=1}=device;for(var i=0;i<count;++i){var deviceTest=createDeviceTest(bus,device,panel===null||panel===void 0?void 0:panel.oracles);panelTest.appendChild(deviceTest);}}return panelTest;}

/***/ }),

/***/ 77303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ useDeviceTestExporter; },
/* harmony export */   "Z": function() { return /* binding */ DeviceTestExporter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94659);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2658);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10431);
/* harmony import */ var _jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32098);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40914);
/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13265);
/* harmony import */ var _ui_HighlightTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40830);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46196);
var PANEL_UPLOAD_URL="device-tester-post-url";var PANEL_UPLOAD_AUTH="device-tester-post-auth";var PANEL_UPLOAD_CUSTOM="device-tester-post-custom";function useDeviceTestExporter(test){var serialize=node=>{var _window$location;var repo="microsoft/jacdac-docs";var sha="1cabe23e1c18afdf2742801f1983331d307d2246";var r=node.export();if(repo&&sha)r.jacdac={host:(_window$location=window.location)===null||_window$location===void 0?void 0:_window$location.host,repo,sha};return r;};var handlePost=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(function*(node){var url=(0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .getStorageItem */ .q)(window.localStorage,PANEL_UPLOAD_URL);var token=(0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .getStorageItem */ .q)(window.localStorage,PANEL_UPLOAD_AUTH);var custom=(0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .getStorageItem */ .q)(window.localStorage,PANEL_UPLOAD_CUSTOM);if(!url)return;try{node.uploadState=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestUploadState.Uploading */ .k.Uploading;var body=serialize(node);if(custom)body.custom=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_7__/* .JSONTryParse */ .ZZ)(custom);console.debug("test upload: post result of "+node.id+" to "+url,body,url);var init={headers:{"content-type":"application/json",authorization:token},method:"post",body:JSON.stringify(body)};var res=yield fetch(url,init);console.debug("test upload: "+res.status,res);if(res.status===200)node.uploadState=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestUploadState.Uploaded */ .k.Uploaded;else node.uploadState=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestUploadState.UploadError */ .k.UploadError;}catch(e){node.uploadState=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestUploadState.UploadError */ .k.UploadError;}});return function handlePost(_x){return _ref.apply(this,arguments);};}();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!test||!test.factory)return;var unsubs=[];var visit=n=>{var _n$children;if(n.nodeKind===_jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_2__/* .DEVICE_TEST_KIND */ .Di)unsubs.push(n.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_CHANGE */ .HXD,()=>{if(n.uploadState==_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestUploadState.Local */ .k.Local&&(n.state===_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestState.Fail */ .t.Fail||n.state===_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .TestState.Pass */ .t.Pass))handlePost(n);}));(_n$children=n.children)===null||_n$children===void 0?void 0:_n$children.forEach(visit);};visit(test);return()=>unsubs.forEach(u=>u());},[test,test===null||test===void 0?void 0:test.factory]);}function DeviceTestExporter(){var urlId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var tokenId=urlId+"-token";var[url,setUrl]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(PANEL_UPLOAD_URL,"");var[token,setToken]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(PANEL_UPLOAD_AUTH,"");var[custom,setCustom]=(0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(PANEL_UPLOAD_CUSTOM,"");var urlError=!!url&&!/https?:\/\//i.test(url)?"URL must start with https://":undefined;var handleUrlChange=ev=>{var _ev$target$value;setUrl(((_ev$target$value=ev.target.value)===null||_ev$target$value===void 0?void 0:_ev$target$value.trim())||"");};var handleTokenChange=ev=>{setToken(ev.target.value);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{sx:{mt:0.5},container:true,spacing:1},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{id:urlId,label:"Upload url",value:url,size:"small",onChange:handleUrlChange,fullWidth:true,helperText:urlError||"URL to POST test result as JSON once failed or passed.",error:!!urlError})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{id:tokenId,label:"Authorization header",value:token,size:"small",onChange:handleTokenChange,helperText:"Optional Authorization header content (i.e. token)"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_HighlightTextField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{code:custom,language:"json",onChange:setCustom,minHeight:"5em"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{variant:"caption"},"Custom JSON to be added to the result upload.")));}

/***/ }),

/***/ 54711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TestStateIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_HourglassEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70486);
/* harmony import */ var _mui_icons_material_QuestionMark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63094);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89572);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60888);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63339);
/* harmony import */ var _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40914);
function TestStateIcon(props){var{node}=props;var state=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.state);switch(state){case _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .TestState.Running */ .t.Running:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_HourglassEmpty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{"aria-label":"test running",color:"action"});case _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .TestState.Fail */ .t.Fail:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{"aria-label":"test fail",color:"error"});case _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .TestState.Pass */ .t.Pass:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{"aria-label":"test pass",color:"success"});default:return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_QuestionMark__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{"aria-label":"test indeterminate",color:"warning"});}}

/***/ }),

/***/ 12368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TestTreeView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32098);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90948);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86010);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89757);
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45111);
/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21596);
/* harmony import */ var _ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25981);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63339);
/* harmony import */ var _devices_AnnounceFlagsTreeItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55329);
/* harmony import */ var _tools_JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25241);
/* harmony import */ var _dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61213);
/* harmony import */ var _TestStateIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54711);
/* harmony import */ var _mui_icons_material_PanTool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89726);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16821);
/* harmony import */ var _jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40914);
var _excluded=["node","showTwins"],_excluded2=["node"],_excluded3=["node"],_excluded4=["test","skipPanel","defaultExpanded","showTwins"];var PREFIX="TestTreeView";var classes={root:PREFIX+"root",margins:PREFIX+"margins"};var StyledTreeView=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(_mui_lab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(_ref=>{var{theme}=_ref;return{["&."+classes.root]:{flexGrow:1},["&."+classes.margins]:{marginLeft:theme.spacing(0.5),marginRight:theme.spacing(0.5)}};});var testComponents={[_jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TEST_KIND */ .Di]:DeviceTestTreeItemExtra,[_jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_1__/* .SERVICE_TEST_KIND */ .bY]:ServiceTestTreeItemExtra,[_jacdac_ts_src_testdom_nodes__WEBPACK_IMPORTED_MODULE_1__/* .REGISTER_ORACLE_KIND */ .U]:RegisterOracleTestTreeItemExtra};function TestTreeItem(props){var{node,showTwins}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(props,_excluded);var{id,nodeKind,children:nodeChildren}=node;var label=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.label);var info=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.info);var output=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.output);var factory=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.factory);var description=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.description);var manualSteps=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.manualSteps);var state=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(node,_=>_===null||_===void 0?void 0:_.state);var{prepare:prepareStep,validate:validateStep}=manualSteps||{};var testComponent=testComponents[nodeKind];var testNode=testComponent?/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(testComponent,props):null;var handlePrepared=()=>node.prepared();var handlePass=()=>node.state=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .TestState.Pass */ .t.Pass;var handleFail=()=>node.state=_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .TestState.Fail */ .t.Fail;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({nodeId:id,labelText:label,labelInfo:info,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TestStateIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{node:node})},rest),testNode,description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{nodeId:id+":descr",labelText:description,labelTextVariant:"caption"}),prepareStep&&(state===_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .TestState.Indeterminate */ .t.Indeterminate||state===_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .TestState.Fail */ .t.Fail)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{nodeId:id+":manual:prepare",labelText:prepareStep,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PanTool__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{fontSize:"small",color:"warning"}),actions:!factory?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx,{variant:"contained",color:"warning",onClick:handlePrepared},"Test"):undefined}),validateStep&&state===_jacdac_ts_src_testdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .TestState.Running */ .t.Running&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{nodeId:id+":manual:validate",labelText:validateStep,icon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PanTool__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{fontSize:"small",color:"warning"}),actions:!factory?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx,{sx:{marginRight:0.5},variant:"contained",color:"success",onClick:handlePass},"Pass"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx,{variant:"contained",color:"error",onClick:handleFail},"Fail")," "):undefined}),output&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_StyledTreeItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{nodeId:id+":output",labelText:output}),nodeChildren===null||nodeChildren===void 0?void 0:nodeChildren.map(child=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TestTreeItem,Object.assign({key:child.id,node:child,showTwins:showTwins},rest))));}function DeviceTestTreeItemExtra(props){var{node}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(props,_excluded2);var{device}=node;if(!device)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_devices_AnnounceFlagsTreeItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,Object.assign({device:device,showIdentify:true},rest));}function ServiceTestTreeItemExtra(props){var{node,showTwins}=props;var{service}=node;if(!service||!showTwins)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,{service:service,expanded:false,visible:true});}function RegisterOracleTestTreeItemExtra(props){var{node}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(props,_excluded3);var{register}=node;if(!register)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tools_JDomTreeViewItems__WEBPACK_IMPORTED_MODULE_5__/* .RegisterTreeItem */ .qX,Object.assign({register:register},rest));}function TestTreeView(props){var{test:panel,skipPanel,defaultExpanded,showTwins}=props,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(props,_excluded4);var{0:expanded,1:setExpanded}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultExpanded?panel.children.map(d=>d.id):[]);var{0:selected,1:setSelected}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);var handleToggle=(event,nodeIds)=>{setExpanded(nodeIds);};var handleSelect=(event,nodeIds)=>{setSelected(nodeIds);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTreeView,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(classes.root,classes.margins),defaultCollapseIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,null),defaultExpandIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,null),defaultEndIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:12}}),expanded:expanded,selected:selected,onNodeToggle:handleToggle,onNodeSelect:handleSelect},skipPanel?panel.children.map(child=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TestTreeItem,Object.assign({key:child.id,node:child,showTwins:showTwins},rest))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TestTreeItem,Object.assign({node:panel,showTwins:showTwins},rest)));}

/***/ }),

/***/ 81140:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zx": function() { return /* binding */ isModuleTester; },
/* harmony export */   "zm": function() { return /* binding */ filterTestDevice; },
/* harmony export */   "re": function() { return /* binding */ filterTestService; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
var ignoredDevices=[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_UNIQUE_BRAIN */ .U9t,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_DASHBOARD */ .UPj,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_BRIDGE */ ._5G,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_INFRASTRUCTURE */ .QWn,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_PROXY */ .Ahc];var ignoredServices=[_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_CONTROL */ .gm9,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_ROLE_MANAGER */ .igi,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_LOGGER */ .w9j,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_SETTINGS */ .B9b,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_BOOTLOADER */ .PWm,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_PROTO_TEST */ .$Bn,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_INFRASTRUCTURE */ .QWn,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_PROXY */ .Ahc,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_UNIQUE_BRAIN */ .U9t,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_DASHBOARD */ .UPj,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_BRIDGE */ ._5G,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_DEVICE_SCRIPT_CONDITION */ .YMG];function isModuleTester(device){return device.announced&&device.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_POWER_SUPPLY */ .MUc)&&device.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_DC_CURRENT_MEASUREMENT */ .ldi)&&device.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_DC_VOLTAGE_MEASUREMENT */ .ULo)&&device.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_RELAY */ .E4D);}function filterTestDevice(device){// module tester
if(isModuleTester(device))return false;return!ignoredDevices.some(sc=>device.hasService(sc));}function filterTestService(serviceClass){return ignoredServices.indexOf(serviceClass)<0;}

/***/ }),

/***/ 40830:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(24544);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsLight/index.js
var vsLight = __webpack_require__(62894);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(71418);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(50553);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js


var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [ c.firstChild ];
  for (var b, a = ""; b = c.pop(); ) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), 
    b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }
  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0), b = a.collapsed ? 0 : a.toString().length, f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);
  if (!b || 0 > b) {
    b = a;
  }
  var f = document.createRange();
  c = [ c.firstChild ];
  for (var d, l = 0, g = a; d = c[c.length - 1]; ) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;
        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }
      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }
      l++;
    }
    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }
  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;
    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }
  function l(k, b) {
    var e = c.current;
    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }
  function d(b) {
    var a = c.current;
    if (a) {
      a.focus();
      var e = 0;
      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }
      p(C(a, e));
    }
  }
  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }
  function h() {
    e.observer.disconnect();
  }
  b || (b = {});
  var D = (0,react.useState)([])[1], e = (0,react.useState)((function() {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver((function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    })));
    return e;
  }))[0], n = (0,react.useMemo)((function() {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }), []);
  if ("object" != typeof navigator) {
    return n;
  }
  (0,react.useLayoutEffect)((function() {
    e.onChange = a;
    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);
      if (e.position) {
        var k = e.position, d = k.position;
        p(C(c.current, d, d + k.extent));
      }
      return h;
    }
  }));
  (0,react.useLayoutEffect)((function() {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;
      if (e.position) {
        a.focus();
        var d = e.position, f = d.position;
        p(C(a, f, f + d.extent));
      }
      var g = a.style.whiteSpace, h = a.contentEditable, l = !0;
      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }
      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);
      var x, E = new RegExp("^(?:" + d + ")"), F = new RegExp("^(?:" + d + ")*(" + d + ")$"), t = function(b) {
        if (c.current && e.position) {
          var u = r(a), d = w(a), f = (new Date).valueOf(), g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [ d, u ], 
          e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      }, v = function() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);
        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;
          for (var c, f; c = e.queue.pop(); ) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);
            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }
            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }
          e.onChange(d, b);
        }
      }, y = function(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }
          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, 
            (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, 
            e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();
            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a), f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), 
              n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }
            c.repeat && v();
          }
        }
      }, z = function(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      }, A = function(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      }, B = function(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };
      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function() {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }), [ c.current, b.disabled, b.indentation ]);
  return n;
}
//# sourceMappingURL=use-editable.es.js.map

// EXTERNAL MODULE: ./node_modules/@mui/material/Alert/Alert.js + 5 modules
var Alert = __webpack_require__(52288);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(14563);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable react/jsx-key */// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var GithubPullRequestButton=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(317), __webpack_require__.e(774), __webpack_require__.e(6069), __webpack_require__.e(4659)]).then(__webpack_require__.bind(__webpack_require__, 97611)));var AnnotationTooltip=(0,styled/* default */.ZP)(Tooltip/* default */.Z)(_ref=>{var{theme}=_ref;return{["& .arrow"]:{color:theme.palette.error.main},["& .tooltip"]:{backgroundColor:theme.palette.error.main,color:theme.palette.common.white,boxShadow:theme.shadows[1],fontSize:theme.typography.body2.fontSize}};});function HighlightTextField(props){var{code,onChange,language,annotations,pullRequestTitle,pullRequestPath,pullRequestDescription,minHeight="12rem",maxHeight,disabled}=props;var{darkMode}=(0,react.useContext)(DarkModeContext/* default */.ZP);var theme=darkMode==="dark"?vsDark/* default */.Z:vsLight/* default */.Z;var editorRef=(0,react.useRef)(null);useEditable(editorRef,onChange,{disabled:!!disabled,indentation:4});return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(dist/* default */.ZP,Object.assign({},dist/* defaultProps */.lG,{code:code,language:language,theme:theme}),_ref2=>{var{className,style,tokens,getTokenProps}=_ref2;return/*#__PURE__*/react.createElement("pre",{ref:editorRef,className:className,spellCheck:false,style:Object.assign({},style,{padding:"0.5rem",minHeight,maxHeight,whiteSpace:"pre-wrap",overflowWrap:"break-word"})},tokens.map((line,i)=>{var annotation=annotations===null||annotations===void 0?void 0:annotations.find(a=>a.line===i+1);var title=annotation===null||annotation===void 0?void 0:annotation.message;var el=/*#__PURE__*/react.createElement("span",{key:i,style:annotation&&{borderBottom:"dashed 1px red"}},line.filter(token=>!token.empty).map((token,key)=>/*#__PURE__*/react.createElement("span",getTokenProps({token,key}))),i<tokens.length-1?"\n":null);return title?/*#__PURE__*/react.createElement(AnnotationTooltip,{title:title,arrow:true,key:i},el):el;}));})),!!(annotations!==null&&annotations!==void 0&&annotations.length)&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true,xs:12},/*#__PURE__*/react.createElement(Alert/* default */.Z,{severity:"error"},annotations.length===1?/*#__PURE__*/react.createElement(react.Fragment,null,"line ",annotations[0].line,":"," ",annotations[0].message):/*#__PURE__*/react.createElement("ul",null,annotations.map((a,i)=>/*#__PURE__*/react.createElement("li",{key:i},"line ",a.line,": ",a.message))))),pullRequestTitle&&pullRequestPath&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(GithubPullRequestButton,{title:pullRequestTitle,head:pullRequestPath,description:pullRequestDescription,files:{[pullRequestPath+".md"]:code}}))));}

/***/ })

}]);
//# sourceMappingURL=75924bf946bfdb8a803ee1bc3c71ec0461911005-c1a09f667f367c629f3e.js.map