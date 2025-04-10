"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2269],{

/***/ 30061:
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
  d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"
}), 'AccountTree');
exports.Z = _default;

/***/ }),

/***/ 19572:
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
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'ChevronLeft');
exports.Z = _default;

/***/ }),

/***/ 84940:
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
  d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
}), 'FormatAlignLeft');
exports.Z = _default;

/***/ }),

/***/ 32457:
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
  d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
}), 'History');
exports.Z = _default;

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

/***/ 52269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AppDrawer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(87049);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(67720);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx + 2 modules
var Suspense = __webpack_require__(19811);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/layout.tsx + 16 modules
var layout = __webpack_require__(4335);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(19572);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(5355);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/components/PacketsContext.tsx
var PacketsContext = __webpack_require__(12457);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/logparser.ts
var logparser = __webpack_require__(20399);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/trace/trace.ts
var trace_trace = __webpack_require__(54709);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
;// CONCATENATED MODULE: ./src/components/trace/TraceImportButton.tsx
var ImportButton=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7933).then(__webpack_require__.bind(__webpack_require__, 97933)));function TraceImportButton(props){var{icon,disabled}=props;var{recording,setReplayTrace}=(0,react.useContext)(PacketsContext/* default */.Z);var{setError}=(0,useSnackbar/* default */.Z)();var{0:importing,1:setImporting}=(0,react.useState)(false);var handleFiles=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(files){var file=files[0];if(file){try{setImporting(true);var txt=yield file.text();var trace;// let's try a few format and see if we're lucky
try{trace=(0,logparser/* parseTrace */.k9)(txt);}catch(e){console.log("trace parse error",e);}// try logic format
if(!trace){try{var frames=(0,logparser/* parseLogicLog */.Rx)(txt);// ensure format is ok
if(frames!==null&&frames!==void 0&&frames.length)trace=new trace_trace/* Trace */.fM(frames);}catch(e){console.log("logic parse error",e);}}// found anything?
if(trace){console.log("importing "+trace.frames.length+" frames");setReplayTrace(trace);}else setError("could not parse file");}finally{setImporting(false);}}});return function handleFiles(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(ImportButton,{icon:icon,disabled:importing||recording||disabled,text:"Import Trace File",onFilesUploaded:handleFiles}));}
// EXTERNAL MODULE: ./src/components/trace/TraceSaveButton.tsx
var TraceSaveButton = __webpack_require__(14946);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(82066);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/FiberManualRecord.js


/* harmony default export */ var FiberManualRecord = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord'));
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(14955);
;// CONCATENATED MODULE: ./src/components/trace/TraceRecordButton.tsx
var _excluded=["disabled"];function TraceRecordButton(props){var{disabled}=props,others=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var{recording,tracing,toggleRecording}=(0,react.useContext)(PacketsContext/* default */.Z);var title=recording?"Stop recording":"Record trace";return/*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z,Object.assign({},others,{"aria-label":title,title:title,indeterminate:recording,disabled:disabled||tracing,onClick:toggleRecording,progressStyle:{color:"#f66"}}),!recording&&/*#__PURE__*/react.createElement(FiberManualRecord,null),recording&&/*#__PURE__*/react.createElement(FiberManualRecord,{style:{color:"#f00"}}));}
// EXTERNAL MODULE: ./src/components/trace/TracePlayButton.tsx + 1 modules
var TracePlayButton = __webpack_require__(22555);
// EXTERNAL MODULE: ./src/components/trace/TraceClearButton.tsx
var TraceClearButton = __webpack_require__(78866);
;// CONCATENATED MODULE: ./src/components/PacketRecorder.tsx
function PacketRecorder(){var{replayTrace,recording,tracing}=(0,react.useContext)(PacketsContext/* default */.Z);return/*#__PURE__*/react.createElement(react.Fragment,null,!recording&&replayTrace&&/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},replayTrace.frames.length," packets"),/*#__PURE__*/react.createElement(TraceImportButton,{icon:true,disabled:tracing||recording}),/*#__PURE__*/react.createElement(TraceSaveButton/* default */.Z,null),"|",/*#__PURE__*/react.createElement(TraceRecordButton,{size:"small"}),/*#__PURE__*/react.createElement(TracePlayButton/* default */.Z,{size:"small"}),/*#__PURE__*/react.createElement(TraceClearButton/* default */.Z,{size:"small"}));}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/History.js
var History = __webpack_require__(32457);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccountTree.js
var AccountTree = __webpack_require__(30061);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/FormatAlignLeft.js
var FormatAlignLeft = __webpack_require__(84940);
// EXTERNAL MODULE: ./src/components/icons/JacdacIcon.tsx
var JacdacIcon = __webpack_require__(81380);
;// CONCATENATED MODULE: ./src/components/shell/DrawerToolsButtonGroup.tsx
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function DrawerToolsButtonGroup(props){var{className}=props;var{drawerType,setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var handleDrawer=drawer=>()=>setDrawerType(drawer);var drawers=[{drawer:AppContext/* DrawerType.Dom */.jw.Dom,label:"open device tree",icon:/*#__PURE__*/react.createElement(AccountTree/* default */.Z,null)},{drawer:AppContext/* DrawerType.Dashboard */.jw.Dashboard,label:"open dashboard",icon:/*#__PURE__*/react.createElement(JacdacIcon/* default */.Z,null)},{drawer:AppContext/* DrawerType.Console */.jw.Console,label:"open console",icon:/*#__PURE__*/react.createElement(FormatAlignLeft/* default */.Z,null)},{drawer:AppContext/* DrawerType.Packets */.jw.Packets,label:"open packet trace",icon:/*#__PURE__*/react.createElement(History/* default */.Z,null)}];return/*#__PURE__*/react.createElement(react.Fragment,null,drawers.map(drawer=>/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{key:drawer.label,title:drawer.label,className:className,trackName:"menu.drawer."+drawer.drawer,trackProperties:{drawer:drawer.drawer},color:drawerType===drawer.drawer?"primary":"inherit",onClick:handleDrawer(drawer.drawer),edge:"start"},drawer.icon)));}
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(78055);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(42440);
// EXTERNAL MODULE: ./node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(12981);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(59334);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(24503);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(23508);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronRight.js
var ChevronRight = __webpack_require__(26215);
;// CONCATENATED MODULE: ./src/components/shell/Toc.tsx
// tslint:disable-next-line: no-submodule-imports
var PREFIX="Toc";var classes={root:PREFIX+"root"};var StyledList=(0,styled/* default */.ZP)(List/* default */.Z)(_ref=>{var{theme}=_ref;return{["&."+classes.root]:{width:"100%",backgroundColor:theme.palette.background.paper}};});function treeifyToc(toc){var tree=toc.slice(0);// reconstruct tree
var tocNodes={};tree.forEach((node,index)=>{var k=node.path.replace(/\/$/,"");if(tocNodes[k]){tree[index]=undefined;}else tocNodes[k]=node;});tree=tree.filter(node=>!!node);tree.forEach((node,index)=>{var parts=node.path.replace(/\/$/,"").split("/");parts.pop();while(parts.length){var parentPath=""+parts.join("/");var parent=tocNodes[parentPath];if(parent){if(!parent.children)parent.children=[];parent.children.push(node);tree[index]=undefined;break;}parts.pop();}});var r={tree:tree.filter(node=>!!node),nodes:tocNodes};function sortNodes(nodes){nodes.sort((l,r)=>l.order-r.order||l.name.localeCompare(r.name));nodes.forEach(node=>node.children&&sortNodes(node.children));}sortNodes(r.tree);return r;}function TocListItem(props){var{pagePath,entry,level}=props;var{path,children,name}=entry;var selected=pagePath===path;var{setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var{0:expanded,1:setExpanded}=(0,react.useState)(pagePath.startsWith(path));var hasChildren=!!(children!==null&&children!==void 0&&children.length);var sub=level===1||hasChildren;var showSub=expanded&&sub&&hasChildren&&pagePath.startsWith(path);var handleClick=()=>{if(selected)setExpanded(v=>!v);if(!hasChildren&&level===1)setDrawerType(AppContext/* DrawerType.None */.jw.None);};(0,react.useEffect)(()=>{if(selected)setExpanded(true);},[selected]);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* ListItemButton */.nZ,{to:path,onClick:handleClick,selected:selected,sx:{width:"100%",pl:Math.max(1,level)}},/*#__PURE__*/react.createElement(ListItemText/* default */.Z,{primary:selected?/*#__PURE__*/react.createElement("b",null,name):name,color:selected?"primary":undefined}),hasChildren&&(showSub?/*#__PURE__*/react.createElement(ExpandMore/* default */.Z,null):/*#__PURE__*/react.createElement(ChevronRight/* default */.Z,null))),/*#__PURE__*/react.createElement(Collapse/* default */.Z,{in:showSub,timeout:"auto",unmountOnExit:true},/*#__PURE__*/react.createElement(List/* default */.Z,{dense:true,className:classes.root},children===null||children===void 0?void 0:children.map(child=>/*#__PURE__*/react.createElement(TocListItem,{key:child.path,entry:child,level:level+1,pagePath:pagePath})))));}function Toc(props){var{pagePath}=props;var data=(0,gatsby_browser_entry.useStaticQuery)("3360859391");var tree=(0,react.useMemo)(()=>{// convert pages into tree
var toc=[{name:"Getting Started",path:"/start/",order:0.05},{name:"Device Dashboard",path:"/dashboard/",order:0.1},{name:"Device Catalog",path:"/devices/",order:0.2},{name:"Client Programming",path:"/clients/",order:0.4},{name:"Service Catalog",path:"/services/",order:0.5},{name:"Web Tools",path:"/tools/",order:0.6},{name:"Device Development",path:"/ddk/",order:0.8},{name:"Specifications",path:"/reference/",order:0.81},{name:"FAQ",path:"/faq/",order:0.85},{name:"Blog",path:"/blog/",order:0.88}];data.allMdx.edges.map(node=>node.node).filter(node=>{var _node$frontmatter;return!!((_node$frontmatter=node.frontmatter)!==null&&_node$frontmatter!==void 0&&_node$frontmatter.title)&&node.fields.slug!=="/";}).filter(node=>{var _node$frontmatter2;return!node.frontmatter||!((_node$frontmatter2=node.frontmatter)!==null&&_node$frontmatter2!==void 0&&_node$frontmatter2.hideToc);}).map(node=>{var _node$frontmatter3,_node$frontmatter4,_node$frontmatter5;var r={name:(_node$frontmatter3=node.frontmatter)===null||_node$frontmatter3===void 0?void 0:_node$frontmatter3.title,path:node.fields.slug,order:((_node$frontmatter4=node.frontmatter)===null||_node$frontmatter4===void 0?void 0:_node$frontmatter4.order)!==undefined?(_node$frontmatter5=node.frontmatter)===null||_node$frontmatter5===void 0?void 0:_node$frontmatter5.order:50};return r;}).forEach(node=>toc.push(node));var{tree}=treeifyToc(toc);return tree;},[]);return/*#__PURE__*/react.createElement(StyledList,{dense:true,className:classes.root},tree.map(entry=>/*#__PURE__*/ // eslint-disable-next-line react/prop-types
react.createElement(TocListItem,{key:entry.path,entry:entry,level:1,pagePath:pagePath})));}
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
;// CONCATENATED MODULE: ./src/components/shell/AppDrawer.tsx
// tslint:disable-next-line: no-submodule-imports
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var PacketView=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(317), __webpack_require__.e(6016), __webpack_require__.e(9294)]).then(__webpack_require__.bind(__webpack_require__, 89294)));var JDomTreeView=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(449), __webpack_require__.e(3876), __webpack_require__.e(1674), __webpack_require__.e(9885), __webpack_require__.e(1084)]).then(__webpack_require__.bind(__webpack_require__, 18847)));var DrawerSearchResults=/*#__PURE__*/(0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7109).then(__webpack_require__.bind(__webpack_require__, 27109)));var DrawerSearchInput=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(774), __webpack_require__.e(6069), __webpack_require__.e(470)]).then(__webpack_require__.bind(__webpack_require__, 60470)));var Console=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(449), __webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(774), __webpack_require__.e(6069), __webpack_require__.e(580)]).then(__webpack_require__.bind(__webpack_require__, 74391)));var Dashboard=/*#__PURE__*/(0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(449), __webpack_require__.e(8857), __webpack_require__.e(6977), __webpack_require__.e(3537), __webpack_require__.e(774), __webpack_require__.e(6069), __webpack_require__.e(3876), __webpack_require__.e(1674), __webpack_require__.e(6016), __webpack_require__.e(2769), __webpack_require__.e(7286), __webpack_require__.e(1515), __webpack_require__.e(2774), __webpack_require__.e(7687)]).then(__webpack_require__.bind(__webpack_require__, 7687)));var AppDrawer_PREFIX="AppDrawer";var AppDrawer_classes={drawer:AppDrawer_PREFIX+"drawer",drawerPaper:AppDrawer_PREFIX+"drawerPaper",tocDrawer:AppDrawer_PREFIX+"tocDrawer",tocDrawerPaper:AppDrawer_PREFIX+"tocDrawerPaper",drawerHeader:AppDrawer_PREFIX+"drawerHeader",alertButton:AppDrawer_PREFIX+"alertButton",mdx:AppDrawer_PREFIX+"mdx",fluid:AppDrawer_PREFIX+"fluid"};var StyledDrawer=(0,styled/* default */.ZP)(Drawer/* default */.ZP)(_ref=>{var{theme}=_ref;return{["& ."+AppDrawer_classes.drawer]:{width:layout/* DRAWER_WIDTH */.pG+"rem",flexShrink:0,[theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]:{width:"100%"}},["& ."+AppDrawer_classes.drawerPaper]:{width:layout/* DRAWER_WIDTH */.pG+"rem",[theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]:{width:"100%"}},["& ."+AppDrawer_classes.tocDrawer]:{width:layout/* TOC_DRAWER_WIDTH */.a2+"rem",flexShrink:0},["& ."+AppDrawer_classes.tocDrawerPaper]:{width:layout/* TOC_DRAWER_WIDTH */.a2+"rem"},["& ."+AppDrawer_classes.drawerHeader]:Object.assign({display:"flex",alignItems:"center",padding:theme.spacing(0,1)},theme.mixins.toolbar,{justifyContent:"flex-start"}),["& ."+AppDrawer_classes.alertButton]:{marginLeft:theme.spacing(2)},["& ."+AppDrawer_classes.mdx]:{margin:theme.spacing(2)},["& ."+AppDrawer_classes.fluid]:{flex:1}};});function AppDrawer(props){var{pagePath}=props;var{0:searchQuery,1:setSearchQuery}=(0,react.useState)("");var{drawerType,setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var open=drawerType!==AppContext/* DrawerType.None */.jw.None;var showSearchResults=drawerType===AppContext/* DrawerType.Toc */.jw.Toc&&!!searchQuery;var handleDrawerClose=()=>{setDrawerType(AppContext/* DrawerType.None */.jw.None);};if(drawerType===AppContext/* DrawerType.None */.jw.None)return null;var toc=drawerType===AppContext/* DrawerType.Toc */.jw.Toc;return/*#__PURE__*/react.createElement(StyledDrawer,{className:toc?AppDrawer_classes.tocDrawer:AppDrawer_classes.drawer,variant:"persistent",anchor:"left",open:open,classes:{paper:toc?AppDrawer_classes.tocDrawerPaper:AppDrawer_classes.drawerPaper}},/*#__PURE__*/react.createElement("div",{className:AppDrawer_classes.drawerHeader},toc&&/*#__PURE__*/react.createElement("div",{className:AppDrawer_classes.fluid},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DrawerSearchInput,{searchQuery:searchQuery,setSearchQuery:setSearchQuery}))),!toc&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(PacketRecorder,null),/*#__PURE__*/react.createElement("span",{className:AppDrawer_classes.fluid}),/*#__PURE__*/react.createElement(DrawerToolsButtonGroup,null)),/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* IconButton */.hU,{"aria-label":"Collapse",onClick:handleDrawerClose,size:"large"},/*#__PURE__*/react.createElement(ChevronLeft/* default */.Z,null))),/*#__PURE__*/react.createElement(Divider/* default */.Z,null),showSearchResults&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(DrawerSearchResults,{searchQuery:searchQuery})),!showSearchResults&&drawerType===AppContext/* DrawerType.Toc */.jw.Toc&&/*#__PURE__*/react.createElement(Toc,{pagePath:pagePath}),!showSearchResults&&drawerType===AppContext/* DrawerType.Packets */.jw.Packets&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(PacketView,{showTime:true})),!showSearchResults&&drawerType===AppContext/* DrawerType.Dom */.jw.Dom&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(ConnectAlert/* default */.Z,{closeable:true}),/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(JDomTreeView,null))),!showSearchResults&&drawerType===AppContext/* DrawerType.Dashboard */.jw.Dashboard&&/*#__PURE__*/react.createElement(Box/* default */.Z,{sx:{ml:0.5,mr:0.5,mb:0.5}},/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(Dashboard,{showAvatar:true,showHeader:true,showConnect:false,showStartSimulators:true,showStartRoleSimulators:true,showDeviceProxyAlert:true}))),!showSearchResults&&drawerType===AppContext/* DrawerType.Console */.jw.Console&&/*#__PURE__*/react.createElement(Suspense/* default */.Z,null,/*#__PURE__*/react.createElement(Console,{showToolbar:true,showFiles:true,showSerial:true,showPopout:true,showFilter:true,showLevel:true,height:"calc(100vh - 7rem)"})));}

/***/ })

}]);
//# sourceMappingURL=2269-36e89dff817b4306c5f1.js.map