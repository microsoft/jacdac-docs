"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5168],{

/***/ 26253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/



function _createMdxContent(props) {
  var _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p",
    code: "code",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    pre: "pre",
    h2: "h2",
    ul: "ul",
    li: "li",
    em: "em"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    MakeCodeExtensionFooter
  } = _components;

  if (!MakeCodeExtensionFooter) _missingMdxReference("MakeCodeExtensionFooter", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "accelerometer",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#accelerometer",
    "aria-label": "accelerometer permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Accelerometer"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "This extension supports 3-axis accelerometers.\nThe current forces acting on the accelerometer are\nread via the methods ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "x"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "y"), ", and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "z"), ", which return\nvalues in earth gravities (g)."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "A Jacdac accelerometer module translate acceleration values as follows:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.thead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Orientation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "X value (g)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Y value (g)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Z value (g)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tbody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Module lying flat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "-1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Module on left edge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "-1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Module on bottom edge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0")))), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The following program uses the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "x"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "y"), " forces to implement a simple\nusing the micro:bit (show a happy face if near level; otherwise,\nshow sad or angry face):"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "basic.forever(function() {\n    let x = modules.accelerometer1.x() * 100\n    let y = modules.accelerometer1.y() * 100\n    if (Math.abs(x) > 32) {\n        basic.showIcon(IconNames.Sad)\n    } else if (Math.abs(y) > 32) {\n        basic.showIcon(IconNames.Angry)\n    } else {\n        basic.showIcon(IconNames.Happy)\n    }\n})\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "events",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#events",
    "aria-label": "events permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Events"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The accelerometer supports a variety of (debounced) events, including:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.em, null, "tilt_up, tilt_down, tilt_left, tilt_right"), ": emitted when accelerometer is tilted in the given direction."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.em, null, "face_up, face_down"), ": emitted when accelerometer is laying flat in the given direction."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.em, null, "freefall"), ": emitted when total force acting on accelerometer is much less than 1g."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.em, null, "shake"), ": emitted when forces change violently a few times."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.em, null, "force_2g, force_3g, force_6g, force_8g"), ": emitted when force in any direction exceeds the given threshold."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "modules.accelerometer1.onEvent(jacdac.AccelerometerEvent.TiltLeft, function () {\n    basic.showArrow(ArrowNames.West)\n})\nmodules.accelerometer1.onEvent(jacdac.AccelerometerEvent.TiltUp, function () {\n    basic.showArrow(ArrowNames.North)\n})\nmodules.accelerometer1.onEvent(jacdac.AccelerometerEvent.TiltRight, function () {\n    basic.showArrow(ArrowNames.East)\n})\nmodules.accelerometer1.onEvent(jacdac.AccelerometerEvent.TiltDown, function () {\n    basic.showArrow(ArrowNames.South)\n})\nmodules.accelerometer1.onEvent(jacdac.AccelerometerEvent.Shake, function () {\n    basic.showIcon(IconNames.Heart)\n})\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeExtensionFooter, {
    serviceName: "accelerometer"
  }));
}

function MDXContent(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_createMdxContent, props)) : _createMdxContent(props);
}

/* harmony default export */ __webpack_exports__["default"] = (MDXContent);

function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-accelerometer-mdx-5ce1c738c717bc6fde77.js.map