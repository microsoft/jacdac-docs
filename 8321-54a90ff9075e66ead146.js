"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8321,9864,251],{

/***/ 58321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ui_Breadcrumbs_Breadcrumbs; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(82066);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/internal/svg-icons/MoreHoriz.js



/**
 * @ignore - internal component.
 */

/* harmony default export */ var MoreHoriz = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Breadcrumbs/BreadcrumbCollapsed.js








const BreadcrumbCollapsedButton = (0,styled/* default */.ZP)(ButtonBase/* default */.Z)(({
  theme
}) => (0,esm_extends/* default */.Z)({
  display: 'flex',
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === 'light' ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  '&:hover, &:focus': (0,esm_extends/* default */.Z)({}, theme.palette.mode === 'light' ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  '&:active': (0,esm_extends/* default */.Z)({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === 'light' ? {
    backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.grey[600], 0.12)
  })
}));
const BreadcrumbCollapsedIcon = (0,styled/* default */.ZP)(MoreHoriz)({
  width: 24,
  height: 16
});

/**
 * @ignore - internal component.
 */
function BreadcrumbCollapsed(props) {
  const ownerState = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbCollapsedButton, (0,esm_extends/* default */.Z)({
      focusRipple: true
    }, props, {
      ownerState: ownerState,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbCollapsedIcon, {
        ownerState: ownerState
      })
    }))
  });
}
 false ? 0 : void 0;
/* harmony default export */ var Breadcrumbs_BreadcrumbCollapsed = (BreadcrumbCollapsed);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Breadcrumbs/breadcrumbsClasses.js


function getBreadcrumbsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiBreadcrumbs', slot);
}
const breadcrumbsClasses = (0,generateUtilityClasses/* default */.Z)('MuiBreadcrumbs', ['root', 'ol', 'li', 'separator']);
/* harmony default export */ var Breadcrumbs_breadcrumbsClasses = (breadcrumbsClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Breadcrumbs/Breadcrumbs.js


const _excluded = ["children", "className", "component", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"];












const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    li: ['li'],
    ol: ['ol'],
    separator: ['separator']
  };
  return (0,composeClasses/* default */.Z)(slots, getBreadcrumbsUtilityClass, classes);
};
const BreadcrumbsRoot = (0,styled/* default */.ZP)(Typography/* default */.Z, {
  name: 'MuiBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [{
      [`& .${Breadcrumbs_breadcrumbsClasses.li}`]: styles.li
    }, styles.root];
  }
})({});
const BreadcrumbsOl = (0,styled/* default */.ZP)('ol', {
  name: 'MuiBreadcrumbs',
  slot: 'Ol',
  overridesResolver: (props, styles) => styles.ol
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
const BreadcrumbsSeparator = (0,styled/* default */.ZP)('li', {
  name: 'MuiBreadcrumbs',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})({
  display: 'flex',
  userSelect: 'none',
  marginLeft: 8,
  marginRight: 8
});
function insertSeparators(items, className, separator, ownerState) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsSeparator, {
        "aria-hidden": true,
        className: className,
        ownerState: ownerState,
        children: separator
      }, `separator-${index}`));
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
}
const Breadcrumbs = /*#__PURE__*/react.forwardRef(function Breadcrumbs(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiBreadcrumbs'
  });
  const {
      children,
      className,
      component = 'nav',
      expandText = 'Show path',
      itemsAfterCollapse = 1,
      itemsBeforeCollapse = 1,
      maxItems = 8,
      separator = '/'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const [expanded, setExpanded] = react.useState(false);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component,
    expanded,
    expandText,
    itemsAfterCollapse,
    itemsBeforeCollapse,
    maxItems,
    separator
  });
  const classes = useUtilityClasses(ownerState);
  const listRef = react.useRef(null);
  const renderItemsBeforeAndAfter = allItems => {
    const handleClickExpand = () => {
      setExpanded(true);

      // The clicked element received the focus but gets removed from the DOM.
      // Let's keep the focus in the component after expanding.
      // Moving it to the <ol> or <nav> does not cause any announcement in NVDA.
      // By moving it to some link/button at least we have some announcement.
      const focusable = listRef.current.querySelector('a[href],button,[tabindex]');
      if (focusable) {
        focusable.focus();
      }
    };

    // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem
    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (false) {}
      return allItems;
    }
    return [...allItems.slice(0, itemsBeforeCollapse), /*#__PURE__*/(0,jsx_runtime.jsx)(Breadcrumbs_BreadcrumbCollapsed, {
      "aria-label": expandText,
      onClick: handleClickExpand
    }, "ellipsis"), ...allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)];
  };
  const allItems = react.Children.toArray(children).filter(child => {
    if (false) {}
    return /*#__PURE__*/react.isValidElement(child);
  }).map((child, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
    className: classes.li,
    children: child
  }, `child-${index}`));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsRoot, (0,esm_extends/* default */.Z)({
    ref: ref,
    component: component,
    color: "text.secondary",
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BreadcrumbsOl, {
      className: classes.ol,
      ref: listRef,
      ownerState: ownerState,
      children: insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator, ownerState)
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var Breadcrumbs_Breadcrumbs = (Breadcrumbs);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
;// CONCATENATED MODULE: ./src/components/ui/Breadcrumbs.tsx
function ui_Breadcrumbs_Breadcrumbs(props){var{location}=props;var{pathname}=location;var parts=(0,react.useMemo)(()=>pathname.split(/\//g).filter(p=>!!p&&p!=="jacdac-docs"),[pathname]);if(!parts.length)return null;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Breadcrumbs_Breadcrumbs,{"aria-label":"breadcrumb"},/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{to:"/",underline:"hover"},"Home"),parts.map((part,i)=>/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{key:i,color:i===parts.length-1?"textPrimary":undefined,"aria-current":i===parts.length-1?"page":undefined,to:"/"+parts.slice(0,i+1).join("/"),underline:"hover"},part))));}

/***/ }),

/***/ 69921:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;__webpack_unused_export__=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};__webpack_unused_export__=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};__webpack_unused_export__=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ }),

/***/ 59864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  /* unused reexport */ __webpack_require__(69921);
} else {}


/***/ })

}]);
//# sourceMappingURL=8321-54a90ff9075e66ead146.js.map