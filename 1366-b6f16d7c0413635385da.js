"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1366],{

/***/ 46926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TableCell_TableCell; }
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/TableContext.js
var TableContext = __webpack_require__(31618);
// EXTERNAL MODULE: ./node_modules/@mui/material/Table/Tablelvl2Context.js
var Tablelvl2Context = __webpack_require__(44063);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableCell/tableCellClasses.js


function getTableCellUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTableCell', slot);
}
const tableCellClasses = (0,generateUtilityClasses/* default */.Z)('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
/* harmony default export */ var TableCell_tableCellClasses = (tableCellClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TableCell/TableCell.js


const _excluded = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${(0,capitalize/* default */.Z)(align)}`, padding !== 'normal' && `padding${(0,capitalize/* default */.Z)(padding)}`, `size${(0,capitalize/* default */.Z)(size)}`]
  };
  return (0,composeClasses/* default */.Z)(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = (0,styled/* default */.ZP)('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${(0,capitalize/* default */.Z)(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${(0,capitalize/* default */.Z)(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${(0,capitalize/* default */.Z)(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, theme.typography.body2, {
  display: 'table-cell',
  verticalAlign: 'inherit',
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.$n)((0,colorManipulator/* alpha */.Fq)(theme.palette.divider, 1), 0.88) : (0,colorManipulator/* darken */._j)((0,colorManipulator/* alpha */.Fq)(theme.palette.divider, 1), 0.68)}`,
  textAlign: 'left',
  padding: 16
}, ownerState.variant === 'head' && {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.variant === 'body' && {
  color: (theme.vars || theme).palette.text.primary
}, ownerState.variant === 'footer' && {
  color: (theme.vars || theme).palette.text.secondary,
  lineHeight: theme.typography.pxToRem(21),
  fontSize: theme.typography.pxToRem(12)
}, ownerState.size === 'small' && {
  padding: '6px 16px',
  [`&.${TableCell_tableCellClasses.paddingCheckbox}`]: {
    width: 24,
    // prevent the checkbox column from growing
    padding: '0 12px 0 16px',
    '& > *': {
      padding: 0
    }
  }
}, ownerState.padding === 'checkbox' && {
  width: 48,
  // prevent the checkbox column from growing
  padding: '0 0 0 4px'
}, ownerState.padding === 'none' && {
  padding: 0
}, ownerState.align === 'left' && {
  textAlign: 'left'
}, ownerState.align === 'center' && {
  textAlign: 'center'
}, ownerState.align === 'right' && {
  textAlign: 'right',
  flexDirection: 'row-reverse'
}, ownerState.align === 'justify' && {
  textAlign: 'justify'
}, ownerState.stickyHeader && {
  position: 'sticky',
  top: 0,
  zIndex: 2,
  backgroundColor: (theme.vars || theme).palette.background.default
}));

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */
const TableCell = /*#__PURE__*/react.forwardRef(function TableCell(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTableCell'
  });
  const {
      align = 'inherit',
      className,
      component: componentProp,
      padding: paddingProp,
      scope: scopeProp,
      size: sizeProp,
      sortDirection,
      variant: variantProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const table = react.useContext(TableContext/* default */.Z);
  const tablelvl2 = react.useContext(Tablelvl2Context/* default */.Z);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }
  let scope = scopeProp;
  // scope is not a valid attribute for <td/> elements.
  // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
  if (component === 'td') {
    scope = undefined;
  } else if (!scope && isHeadCell) {
    scope = 'col';
  }
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TableCellRoot, (0,esm_extends/* default */.Z)({
    as: component,
    ref: ref,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var TableCell_TableCell = (TableCell);

/***/ }),

/***/ 51366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardGPIO; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36807);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9680);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22878);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47644);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3694);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46926);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9573);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60763);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71670);
/* harmony import */ var _jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80662);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21149);
/* harmony import */ var _jacdac_useServiceSpecification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75706);
function PinItem(props){var{service,pin,state}=props;var{0:changeId,1:setChangeId}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);var{0:info,1:setInfo}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{label="",mode,capabilities,hwPin}=info||{};var spec=(0,_jacdac_useServiceSpecification__WEBPACK_IMPORTED_MODULE_8__/* .useServiceSpecificationFromServiceClass */ .V)(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.SRV_GPIO);var modeSpec=spec.enums["Mode"];var capSpec=spec.enums["Capabilities"];(0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(function*(){var pkt=_jacdac_ts_src_jdom_packet__WEBPACK_IMPORTED_MODULE_6__/* .Packet.from */ .W.from(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmd.PinInfo */ .Gpo.PinInfo,(0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmdPack.PinInfo */ .hSp.PinInfo,[pin]));var resp=yield service.sendCmdAwaitResponseAsync(pkt);var[,hwPin,capabilities,mode,label]=resp.jdunpack(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmdPack.PinInfoReport */ .hSp.PinInfoReport);setInfo({hwPin,capabilities,mode,label});}),[service,changeId]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>service===null||service===void 0?void 0:service.subscribe(_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.COMMAND_RECEIVE,pkt=>{var cmd=pkt.serviceCommand;if(cmd===_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOCmd.Configure */ .Gpo.Configure){setChangeId(id=>id+1);}}),[service]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{title:"pin "+(label||pin+"")+", hardware id "+hwPin},label||pin+""," ","(#"+hwPin+")"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,state!==undefined?state:""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,mode!==undefined?(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.prettyEnum)(modeSpec,mode).toLowerCase():""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,null,capabilities!==undefined?(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_7__.prettyEnum)(capSpec,capabilities).toLowerCase():""));}function DashboardGPIO(props){var{service,visible}=props;var stateRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(service,_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .GPIOReg.State */ .Znm.State);var[state]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(stateRegister,props);if(state===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{register:stateRegister});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{size:"small"},Array(state.length).fill(0).map((v,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PinItem,{service:service,pin:i,key:i,state:state[i],visible:visible})));}

/***/ }),

/***/ 75706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useServiceSpecificationFromServiceClass; },
/* harmony export */   "a": function() { return /* binding */ useServiceSpecification; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62070);
function useServiceSpecificationFromServiceClass(serviceClass){var specification=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass),[serviceClass]);return specification;}function useServiceSpecification(service){var serviceClass=service===null||service===void 0?void 0:service.serviceClass;var specification=useServiceSpecificationFromServiceClass(serviceClass);return specification;}

/***/ })

}]);
//# sourceMappingURL=1366-b6f16d7c0413635385da.js.map