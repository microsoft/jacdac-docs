"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[197],{

/***/ 6525:
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
    pre: "pre",
    h2: "h2"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    MakeCodeExtensionFooter
  } = _components;

  if (!MakeCodeExtensionFooter) _missingMdxReference("MakeCodeExtensionFooter", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "hid-keyboard",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#hid-keyboard",
    "aria-label": "hid keyboard permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "HID Keyboard"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The HID keyboard extension can be used to control a HID keyboard, via a Jacdac module\nthat implements HID (generally communicating to a desktop/laptop over USB). Use the\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/devices/microsoft-research/jmbrainf441v02"
  }, "JM Brain F4 v0.2"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/devices/microsoft-research/jmbrainrp204059v01"
  }, "JM Brain RP2040 v0.1"), " module,\nloaded with the HID Keyboard + Mouse firmware that is available via the same links."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "As shown in the example below,\nthe method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "key"), " sends a keyboard action ('press'), specified by the first argument,\nwith a modifier (second argument, 'none'), and a selected key (third argument, 'a'):"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "input.onButtonPressed(Button.A, function () {\n    modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Press, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.LeftControl), jacdac.HidKeyboardKey.A)\n})\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The method ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "clear"), " clears all currently pressed keys. In the program below, pressing the A button of the\nmicro:bit will send a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "Down"), " event on the key ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "a"), " to the HID keyboard, causing the letter ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "a"), " to be repeated\nuntil the B button of the micro:bit is pressed:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-blocks"
  }, "input.onButtonPressed(Button.A, function () {\n    modules.hidKeyboard1.key(jacdac.HidKeyboardAction.Down, modules.keyboardModifiers(jacdac.HidKeyboardModifiers.LeftControl), jacdac.HidKeyboardKey.A)\n})\ninput.onButtonPressed(Button.B, function () {\n    modules.hidKeyboard1.clear()\n})\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "connecting-the-keyboard-module",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#connecting-the-keyboard-module",
    "aria-label": "connecting the keyboard module permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Connecting the Keyboard module"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The module that implements the HID keyboard server (like the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/devices/microsoft-research/jmbrainf441v02"
  }, "JD BRAIN F4"), " below)\nmust also be connected with a USB-C cable to your computer."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABTtZusgP/xAAZEAEBAAMBAAAAAAAAAAAAAAACAQAREgP/2gAIAQEAAQUCSsR9rWV1nO6jDhmj/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ATV//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/ARF//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRAxYYH/2gAIAQEABj8CSS9FVE6J4J4//8QAGhAAAwEAAwAAAAAAAAAAAAAAAAERIUFhcf/aAAgBAQABPyHlDaxkyHEQOmliG7axx4O0ZjIC6P/aAAwDAQACAAMAAAAQw+//xAAXEQEBAQEAAAAAAAAAAAAAAAABAEFR/9oACAEDAQE/EBiDt//EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAgBAgEBPxBRTL//xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMaFBUWGR/9oACAEBAAE/EEVVhGg5ejKfQEO0dV/MTdBEjQ85G0V91ymHBG27sNduWtqCvtz/2Q=='); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='A microbit and HID keyboard module connected with 2 cables' title='A microbit and HID keyboard module connected with 2 cables' src='/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/4b190/hidcables.jpg' srcset='/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/e07e9/hidcables.jpg 200w,\n/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/066f9/hidcables.jpg 400w,\n/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/4b190/hidcables.jpg 800w,\n/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/e5166/hidcables.jpg 1200w,\n/jacdac-docs/static/56e6960c65b63ec41957cbc24a88ef65/b17f8/hidcables.jpg 1600w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeExtensionFooter, {
    serviceName: "hidkeyboard"
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
//# sourceMappingURL=component---src-pages-clients-makecode-extensions-hidkeyboard-mdx-5a12d12af3d12dea9f12.js.map