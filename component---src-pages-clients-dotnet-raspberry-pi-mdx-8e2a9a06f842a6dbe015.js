"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1653],{

/***/ 57125:
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
    ul: "ul",
    li: "li",
    h2: "h2",
    img: "img",
    strong: "strong",
    code: "code",
    pre: "pre"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    DeviceSpecificationList
  } = _components;

  if (!DeviceSpecificationList) _missingMdxReference("DeviceSpecificationList", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "jacdacnet-on-raspberry-pi",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#jacdacnet-on-raspberry-pi",
    "aria-label": "jacdacnet on raspberry pi permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Jacdac.NET on Raspberry Pi"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Thanks to the .NET core support for Raspberry Pi, Jacdac can be used to build applications running on Raspberry Pi\nthat use Jacdac modules."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "To run Jacdac on a Raspberry Pi and connect to Jacdac physical modules, you will need a JacHAT."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/bridge"
  }, "JacHAT bridge"), ", add the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://www.nuget.org/packages/Jacdac.NET.Transports.Spi/",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Jacdac.NET.Transports.Spi"), " NuGet package"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DeviceSpecificationList, {
    tags: ["adapter", "pi"]
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "devbox-mode",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#devbox-mode",
    "aria-label": "devbox mode permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "\"Devbox Mode\""), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The \"Devbox mode\" denotes a development setup where all the dev work is done from your uber-powerful desktop (devbox), your Jacdac application runs on your desktop (or a VM)\nand communicates to the Raspberry Pi through the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/clients/dotnet/devtools"
  }, "devtools"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.img, {
    src: "/jacdac-docs/static/devboxmode.drawio-0f80bb36835ef934e45548ffd7231a66.svg",
    alt: "Visual Studio + .NET app (devbox)   to   web socket   to   devtools server (pi) to JacHAT to Jacdac modules"
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In this mode, you get access to a full featured Visual Studio debugger and profiler, full performance of your desktop,\nwhile still interacting with physical and simulated sensors."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "This mode will shorten your development cycle, until you are ready to test things on the \"bare metal\"."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "open the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Raspberry Pi configuration"), " dialog under ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Preferences"), ", select the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Interfaces"), " tab, enable the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "SPI"), " interface"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "install ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "libgpiod-dev"), " to support fast SPI operations. For sanity sake, reboot the pi after doing the update."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-bash"
  }, "sudo apt install --upgrade -y libgpiod-dev\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "launch the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "devtools"), " in internet+spi mode on the Raspberry Pi. Pro tip: from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "ssh"), ", use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "tmux"), " to launch the server."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-bash"
  }, "jacdac.devtools --internet --spi\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "navigate to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "http://[raspberrypi ip]:8082/"), " on your local network and you should load a dashboard connected to your Pi"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "use the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "WebSocketTransport"), " in your code (from the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://www.nuget.org/packages/Jacdac.NET.Transports.WebSockets/",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Jacdac.NET.Transports.WebSockets"), " nuget package)."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-cs"
  }, "using Jacdac;\nusing Jacdac.Transports.WebSockets;\n...\nvar bus = new JDBus(WebSocketTransport.Create());\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "launch or debug your .NET app and it will connect automatically to your hardware through the devtools"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "raspberry-pi-mode",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#raspberry-pi-mode",
    "aria-label": "raspberry pi mode permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Raspberry Pi Mode"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The \"Pi mode\" denotes a development where the .NET application runs on the Pi operating system and communicates directly to the JacHAT."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "Visual Studio --> publish & copy                       .NET app <--> JacHAT <--> Jacdac modules\ndevbox                                                 pi\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In this mode, it is still possible to debug the .NET app by attaching to the process, and also use the devtools; but there is a bit\nmore friction in the development flow."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "launch the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "devtools"), " in internet mode on the Raspberry Pi. Do ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "not"), " use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "--spi"), " or it will lock the JacHAT"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-bash"
  }, "jacdac.devtools --internet\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "navigate to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "http://[raspberrypi ip]:8082/"), " on your local network and you should load a dashboard. You will notice that it is not connected to the Jacdac modules."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "add the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "SpiTransport"), " transport from the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://www.nuget.org/packages/Jacdac.NET.Transports.Spi/",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Jacdac.NET.Transports.Spi"), " nuget package."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.pre, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, {
    className: "language-cs"
  }, "using Jacdac;\nusing Jacdac.Transports.WebSockets;\nusing Jacdac.Transports.Spi;\n...\nvar bus = new JDBus(WebSocketTransport.Create());\nbus.AddTransport(SpiTransport.Create());\n")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "publish and copy your .NET application to the Pi"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "launch your .NET app on the Pi and you will see that the dashboard now \"sees\" the Jacdac connected modules."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "back in Visual Studio, you can also attach to your application to start a debugging session"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "whats-next-blinky",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#whats-next-blinky",
    "aria-label": "whats next blinky permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "What's next? Blinky!"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Now that your development environment is ready, try to build ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/clients/dotnet/projects/blinky"
  }, "Blinky"), "!"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "troubleshooting",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#troubleshooting",
    "aria-label": "troubleshooting permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Troubleshooting"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "If you are using other application that talk SPI, the pins might have been locked and not properly released. A reboot typically takes care of fixing things."));
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
//# sourceMappingURL=component---src-pages-clients-dotnet-raspberry-pi-mdx-8e2a9a06f842a6dbe015.js.map