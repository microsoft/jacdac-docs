"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3614],{

/***/ 39836:
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
    h2: "h2",
    pre: "pre",
    strong: "strong"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "hooks",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#hooks",
    "aria-label": "hooks permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Hooks"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "All the hooks rely on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "JacdacContext"), " configured in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/clients/javascript/react/setup/"
  }, "setup"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "usebus",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#usebus",
    "aria-label": "usebus permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useBus"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useBus"), " hook ensures that the context is setup and returns the Jacdac bus."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "const Connected = () => {\n    const bus = useBus()\n    ...\n}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "usedevices",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#usedevices",
    "aria-label": "usedevices permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useDevices"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useDevices"), " hooks gets a snapshot of the devices connected to the bus. It provides a number of filtering options."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "import { useDevices } from \"react-jacdac\";\n\nconst Devices = () => {\n  const devices = useDevices({ ignoreInfrastructure: true });\n  return (\n    <ul>\n      {devices.map((device) => (\n        <li key={device.id}>{device.describe()}</li>\n      ))}\n    </ul>\n  );\n};\n-----\nimport React from \"react\";\nimport { useDevices } from \"react-jacdac\";\n\nconst Devices = () => {\n  const devices = useDevices({ ignoreInfrastructure: true });\n  return (\n    <ul>\n      {devices.map((device) => (\n        <li key={device.id}>{device.describe()}</li>\n      ))}\n    </ul>\n  );\n};\n\nexport default Devices\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "useservices",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#useservices",
    "aria-label": "useservices permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useServices"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useServices"), " hooks gets a snapshot of the services accross devices connected to the bus. It provides a number of filtering options."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "import { SRV_BUTTON } from \"jacdac-ts\"\nimport { useServices } from \"react-jacdac\"\n\nconst ButtonCount = () => {\n    const buttons = useServices({ serviceClass: SRV_BUTTON })\n    return <span>{buttons.length}</span>\n}\n-----\nimport React from \"react\";\nimport { SRV_BUTTON } from \"jacdac-ts\"\nimport { useServices } from \"react-jacdac\"\n\nconst ButtonCount = () => {\n    const buttons = useServices({ serviceClass: SRV_BUTTON })\n    return <span>{buttons.length}</span>\n}\nexport default ButtonCount\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "useregister",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#useregister",
    "aria-label": "useregister permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useRegister"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useRegister"), " retrevies the register JDOM node from a service. This hook is typically used with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useRegisterValue"), " hooks\ndocumented afterwards below."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "import { SRV_POTENTIOMETER, JDService, PotentiometerReg } from \"jacdac-ts\"\nimport { useRegister } from \"react-jacdac\"\n\nconst Position = (props: { slider: JDService }) => {\n    const { slider } = props\n    const positionRegister = useRegister(slider, PotentiometerReg.Position)\n    ...\n}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "useregistervalue",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#useregistervalue",
    "aria-label": "useregistervalue permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useRegisterValue"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useRegisterValue"), " decodes the latest register value and returns it into an unpacked value array.\nIf data is missing, the array is empty."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "// A component that maps the position of a slider\n// to an HTML input range\nconst Position = (props: { service: JDService }) => {\n  const { service } = props;\n  // the position register returns a 0..1 value\n  const positionRegister = useRegister(service, PotentiometerReg.Position);\n  // read and decode the value\n  const [position = 0] = useRegisterValue(positionRegister);\n  // display a range\n  return <input type=\"range\" min=\"0\" max=\"100\" value={position * 100} />;\n};\n-----\nimport * as React from \"react\";\nimport { SRV_POTENTIOMETER, JDService, PotentiometerReg } from \"jacdac-ts\";\nimport { useServices, useRegister, useRegisterValue } from \"react-jacdac\";\n\n// A component that maps the position of a slider\n// to an HTML input range\nconst Position = (props: { service: JDService }) => {\n  const { service } = props;\n  // the position register returns a 0..1 value\n  const positionRegister = useRegister(service, PotentiometerReg.Position);\n  // read and decode the value\n  const [position = 0] = useRegisterValue(positionRegister);\n  // display a range\n  return <input type=\"range\" min=\"0\" max=\"100\" value={position * 100} />;\n};\n\n// the main component shows a list of potentiometer ranges\nconst Demo = () => {\n  // auto-update list of slider services on the jacdac bus\n  const sliders = useServices({ serviceClass: SRV_POTENTIOMETER });\n  return (\n    <ul>\n      {sliders.map((slider) => (\n        <li key={slider.id}>\n          <Position service={slider} />\n        </li>\n      ))}\n    </ul>\n  );\n};\nexport default Demo;\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "usechange",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#usechange",
    "aria-label": "usechange permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "useChange"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useChange"), " hook retreives a mutable value from the JDOM tree and triggers a render when it mutates."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "const Connected = () => {\n    const bus = useBus()\n    // read the connected state of the bus\n    const connected = useChange(bus, _ => _.connected)\n    return <span>connected: {connected}</span>\n}\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "It's not uncommon that the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "useChange"), " hook receives a undefined node as an argument.\nTo handle this in the query callback, using the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "?."), " operator"), " which checks for nullness before calling a function."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-tsx"
  }, "import { JDService } from \"jacdac-ts\"\n\nconst ServiceName = (props: { service: JDService }) => {\n    const { service } = props\n    // notice the ?. to handle case when _ is undefined\n    const name = useChange(service, _ => _?.name)\n    return <span>{name || \"?\"}</span>\n}\n")));
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

/***/ })

}]);
//# sourceMappingURL=component---src-pages-clients-javascript-react-hooks-mdx-82a5b54761a7dc830642.js.map