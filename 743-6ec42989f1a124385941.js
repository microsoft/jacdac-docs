"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[743],{

/***/ 10662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CmdButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63366);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41796);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90948);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16821);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89572);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92513);
/* harmony import */ var _hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96173);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86010);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37862);
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26040);
/* harmony import */ var _widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86992);
var _excluded=["onClick","className","style","children","icon","title","disabled","disableReset","autoRun","trackName","trackProperties","ackResetDelay","color"];// tslint:disable-next-line: match-default-export-name no-submodule-imports
var PREFIX="CmdButton";var classes={ack:PREFIX+"Ack",error:PREFIX+"Error"};var Root=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)("span")(_ref=>{var{theme}=_ref;return{["& ."+classes.ack]:{color:"#fff",fontWeight:theme.typography.fontWeightMedium,backgroundColor:theme.palette.success.main},["& ."+classes.error]:{color:"#fff",backgroundColor:(theme.palette.mode==="light"?_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .lighten */ .$n:_mui_material__WEBPACK_IMPORTED_MODULE_9__/* .darken */ ._j)(theme.palette.error.main,0.6)}};});var ACK_RESET_DELAY=500;var ERROR_RESET_DELAY=2000;function CmdButton(props){var{onClick,className,style,children,icon,title,disabled,disableReset,autoRun,trackName,trackProperties,ackResetDelay,color}=props,others=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(props,_excluded);var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();var{setError:setAppError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var{0:working,1:setWorking}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:ack,1:setAck}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();var mounted=(0,_hooks_useMounted__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var _disabled=disabled||working;var run=/*#__PURE__*/function(){var _ref2=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(){if(working)return;// already working
if(trackName)trackEvent("cmd."+trackName,trackProperties);try{setError(undefined);setAck(false);setWorking(true);yield onClick(mounted);if(!mounted())return;setAck(true);if(!disableReset){yield bus.delay(ackResetDelay||ACK_RESET_DELAY);if(!mounted())return;setAck(false);}}catch(e){if(!mounted())return;setAppError(e);setError(e);if(!disableReset){yield bus.delay(ERROR_RESET_DELAY);if(!mounted())return;setError(undefined);}}finally{if(mounted())setWorking(false);}});return function run(){return _ref2.apply(this,arguments);};}();var handleClick=/*#__PURE__*/function(){var _ref3=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(function*(ev){ev.stopPropagation();ev.preventDefault();run();});return function handleClick(_x){return _ref3.apply(this,arguments);};}();var statusIcon=error?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null):undefined;var modeClassName=error?classes.error:ack?classes.ack:undefined;var elClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(className,modeClassName);// run once
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(autoRun&&mounted())run();},[autoRun]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Root,null,!children&&icon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,Object.assign({className:elClassName,style:style,onClick:handleClick,"aria-label":title,title:title,disabled:_disabled,color:color},others),statusIcon||icon):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_OptionalTooltip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{title:title,placement:"bottom"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx,Object.assign({className:elClassName,style:style,startIcon:icon,endIcon:statusIcon,onClick:handleClick,"aria-label":title,title:"",disabled:_disabled,color:color},others),children)));}

/***/ }),

/***/ 20743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCloudAdapter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15785);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2658);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75938);
/* harmony import */ var _jacdac_ts_src_servers_cloudadapterserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13270);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3964);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22878);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9680);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68320);
/* harmony import */ var _DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47644);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10662);
/* harmony import */ var _ui_HighlightTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40830);
/* harmony import */ var _jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21149);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
function Controller(props){var{service,connected}=props;var{0:source,1:setSource}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");var json=(0,_jacdac_ts_src_jacdac__WEBPACK_IMPORTED_MODULE_9__.JSONTryParse)(source);var handleUpload=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(function*(){yield service.sendCmdPackedAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CloudAdapterCmd.UploadJson */ .cKR.UploadJson,[JSON.stringify(json)]);});return function handleUpload(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_HighlightTextField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{code:source,language:"json",onChange:setSource})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{container:true,spacing:1,direction:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{variant:"outlined",onClick:handleUpload,disabled:!connected||json===undefined},"upload")))));}function DashboardCloudAdapter(props){var{service,expanded}=props;var connectedRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CloudAdapterReg.Connected */ .nnb.Connected);var connectionNameRegister=(0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(service,_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CloudAdapterReg.ConnectionName */ .nnb.ConnectionName);var connected=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__/* .useRegisterBoolValue */ .I8)(connectedRegister,props);var[connectionName]=(0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_4__/* .useRegisterUnpackedValue */ .Pf)(connectionNameRegister,props);var server=(0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(service,()=>new _jacdac_ts_src_servers_cloudadapterserver__WEBPACK_IMPORTED_MODULE_2__/* .CloudAdapterServer */ .RT());var color=server?"secondary":"primary";var{0:msgs,1:setMsgs}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setMsgs([]),[connectedRegister]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>server===null||server===void 0?void 0:server.subscribe(_jacdac_ts_src_servers_cloudadapterserver__WEBPACK_IMPORTED_MODULE_2__/* .UPLOAD_JSON */ .nh,req=>{setMsgs(prev=>[].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(prev),[req.json]).slice(-10));}),[server]);var handleConnected=server?()=>{server.connected=!server.connected;connectedRegister.scheduleRefresh();}:undefined;if(connected===undefined)return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRegisterValueFallback__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{register:connectedRegister});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{container:true,spacing:1},connectionName&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{variant:"caption"},connectionName)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{checked:connected,label:"connected",readOnly:!server||server.controlled,color:color,onChange:handleConnected})),!!(msgs!==null&&msgs!==void 0&&msgs.length)&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP,{item:true,xs:12},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:{whiteSpace:"pre-wrap",fontSize:"70%"}},msgs.join("\n"))),expanded&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Controller,{service:service,server:server,connected:connected}));}

/***/ }),

/***/ 96173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
function useMounted(){var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);return()=>mounted.current;}

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
//# sourceMappingURL=743-6ec42989f1a124385941.js.map