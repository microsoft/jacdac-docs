"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2115],{

/***/ 95140:
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
    h2: "h2",
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    strong: "strong",
    hr: "hr"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "electrical",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#electrical",
    "aria-label": "electrical permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Electrical"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "signalling",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#signalling",
    "aria-label": "signalling permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Signalling"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac data transmission occurs on a single wire (JD_DATA) using a half duplex asynchronous serial protocol called\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/single-wire-serial/"
  }, "single wire serial"), " (SWS).  Data bytes are 10 bits long and are composed\nof 1 start bit, 8 data bits, and 1 stop bit. Jacdac devices must only communicate at 1 Mbaud\nand when no data is being transmitted, the bus must read as a logical one. Many MCU UARTs support\nsingle-wire half duplex communications,  but if necessary the UART transmit and receive pins can be\nconnected together externally. The native Jacdac SWS signal uses 3.3V logic where a logical one\nis nominally 3.3V and a logical zero is nominally 0V. The full spec of the signalling voltage is provided\nin the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#all-devices"
  }, "electrical specification"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "To interface a microcontroller to the Jacdac bus data signal (JD_DATA) use the following circuit:\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 602px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 33.5%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABO0lEQVQoz4WRyW7jQAxE9f8/lWuSL0hiwPI0tLRbrb3du/QGUgADnssUwAMLJItFFvwH+/5vvp9xIBjDnuILX3x/b9R1xPtAjBvOJbyLrHpkyxsxRqSUKHUnpfRsPqBUQIiVEPNTsHh7S7y/TzRNhxALQox0+kF9begbjfORr6+Ztl15PALL4mhbS9cFtDaIUiNvkqHV5JwpytLT9xveb6yrZxgC0xTROpDzflpW6hhiWJbAOEaGwWFMYtug6/zLSYqfn5KyFNzvPcYEpDyUM3+EpWk0Uo6k80472w6ttAzDjLWGEDLX60JVdUzTTAiB4vPzg8vlwjj2Z0GnZlKMeOeo6wohBFLeTzvHug9jqapf3juPs+7Mb7cbxhgKpTrWdcX739X9spzh5vnlswdySthhePI5BOw4vVj+C1UWGt0LfS3lAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='Jacdac bus interface' title='Jacdac bus interface' src='/jacdac-docs/static/1ef923afe98bcd543179615e77a1aa61/32056/Jacdac_electrical_interface.png' srcset='/jacdac-docs/static/1ef923afe98bcd543179615e77a1aa61/772e8/Jacdac_electrical_interface.png 200w,\n/jacdac-docs/static/1ef923afe98bcd543179615e77a1aa61/e17e5/Jacdac_electrical_interface.png 400w,\n/jacdac-docs/static/1ef923afe98bcd543179615e77a1aa61/32056/Jacdac_electrical_interface.png 602w' sizes='(max-width: 602px) 100vw, 602px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In the above schematic, the ESD diodes protect against potential static discharges directly onto the\nJacdac PCB edge connector. Many alternative ESD didoes are suitable but we require ultra-low capacitance.\nThe low-pass filter formed by FB1, C1 and R1 reduces unwanted electromagnetic emissions. R1 also limits\nJD_DATA current, and D1 products the microcontroller in case of unexpected voltages on the bus."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Note that when power is shared over the Jacdac bus, current flowing between devices will result in voltage drops.\nThe current is limited to 1A but there may be several potentially long cables between a power provider and a\npower consumer resulting in an end-to-end resistance of several hundred mΩ and hence a voltage drop of several\nhundred mV in each direction (i.e. both on JD_PWR and on the GND return path)."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "power-supply-sharing",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#power-supply-sharing",
    "aria-label": "power supply sharing permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Power supply sharing"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In addition to providing data communications, Jacdac supports the sharing of power between devices."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "power-supply-sharing-options",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#power-supply-sharing-options",
    "aria-label": "power supply sharing options permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Power supply sharing options"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "From a power perspective, Jacdac devices fall into one of four catgeories."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Independently powered:"), " A device that communicates on the Jacdac bus without providing power\nor consuming power. It must have a bus independent power source of some kind—e.g. a battery or a\nUSB-micro socket for external power—from which it operates."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Pure power provider:"), " A pure power provider is a device that is capable of supplying power to\nthe Jacdac bus. The current available to the bus must be limited by circuitry in the power provider,\nand power providers capable of supplying more than ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_lc(max)")), " must contain an MCU that implements the\nJacdac ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/power/"
  }, "power provider service"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Pure power consumer:"), " A power consumer always draws power from the Jacdac bus; the bus is\nits only power source. Due to power\nprovision tolerance, a single module should draw no more than ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-consumers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "in_pc(max)")), ". If a device sometimes or always\nrequires more than this it must be implemented as a power independent device or as a power provider."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Dynamically powered device:"), " Some Jacdac devices may be able to operate as either a power consumer,\npower independent device and/or power provider. For example, a device with a bus independent power source\nmay use that power source when it’s available but switch to using the Jacdac bus as a power source otherwise.\nWe refer to these as dynamically powered Jacdac devices."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 733px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 29.000000000000004%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABJ0AAASdAHeZh94AAABh0lEQVQY022OTWsTURSG53f5FwRxIeL3x6Zq1ZKPpqRxoqbBpKYtE5tErCBoaUrdim5ciAtBaBokzGTmzm06c2emmWmg/oZHvHXpgZdznpdzXo7Bf+rH1580C+u0zR4by5s0ci2a+TWsJx3NVqWjvdXiBm2zy6tqj1bJ4vXKW4ypSkmjjDTOSIJjTme/+dT/wvOHL3hZXOfZgzrlu1Vqjxo0Cmus5lu6P71fp77QpFE4Y3OuhmV2MIrXyizdMlm8vkz5TpX5Czl2t/bITk9Qtk10KFFJTBRHhCpEOTZhGBAlkfaOjiaMxw4qUqRZilG6UdFBpZsVqnMr3Dv/mO1en+g4RhwMkbaNLyVSSnzf59fBEM8TZ/xXroscDhG+jwoVxvzFHLnLJRYuLZK/ssTVc7d5Z71HxYrBYMBoNNJBQghc10Xs7+OOxzrAFwLHcfSe53kEQYDxob3DTneP7c1d+r2PdGtv+Pb5O9lJivj3SZIkpGmqDzwhmEwmTKdTrTiOOZRSz7PZjD/aN3ZQn2tHRgAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='Jacdac power provision schemes' title='Jacdac power provision schemes' src='/jacdac-docs/static/58c07c84c924db51ec9e68654b8ebdeb/00b70/jacdac-power-provision-schemes.png' srcset='/jacdac-docs/static/58c07c84c924db51ec9e68654b8ebdeb/772e8/jacdac-power-provision-schemes.png 200w,\n/jacdac-docs/static/58c07c84c924db51ec9e68654b8ebdeb/e17e5/jacdac-power-provision-schemes.png 400w,\n/jacdac-docs/static/58c07c84c924db51ec9e68654b8ebdeb/00b70/jacdac-power-provision-schemes.png 733w' sizes='(max-width: 733px) 100vw, 733px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "overview-of-jacdac-power-sharing",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#overview-of-jacdac-power-sharing",
    "aria-label": "overview of jacdac power sharing permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Overview of Jacdac power sharing"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The simplest Jacdac scenario involves a single power provider device connected directly to a pure power consumer device.\nAn example is a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://arcade.makecode.com/hardware",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "MakeCode Arcade gaming device"), " (provider) connected to a Jacdac temperature sensor (consumer).\nThe power provider will continuously deliver power to the Jacdac bus, and when the power consumer is connected it will power up\nand start signalling its presence. Any number of additional pure power consumers and/or power independent devices may be\nconnected to the bus, as long as the power provider can deliver enough current to operate them all."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In order to provide a certain level of safety, the power available on the bus is limited. This means that all power providers\n(including dynamically powered devices) must limit the current they deliver to the bus. The side-effect of this current limiting\nmeans that if the aggregate load of power consumers on the bus cannot be met, the bus voltage will fall and device operation will\nbecome unreliable. The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/power"
  }, "power provider service"), " includes provisions for user feedback to make this condition\neasy to detect, understand and debug."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "There are two types of power providers:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Low current power providers"), " may supply up to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_lc(max)")), ". This may either be on a single PCB edge connector\nor shared across several PCB edge connectors."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "High current power providers"), " may supply up to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out(hc)")), ". High current hub providers may supply up to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out)hc(max)")), " per\nJacdac PCB edge connector. High current Jacdac power providers must contain an MCU that implements the Jacdac ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/power"
  }, "power provider service"), "\nwhich ensures that only one such provider is active at any one time. This limits the current available on any one part of the Jacdac bus to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), "."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "By default, Jacdac power providers are active (i.e. actively providing power) when they are first connected.\nThis ensures that power is successfully delivered to pure power consumers. The Jacdac ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/power"
  }, "power provider service"), "\nwill quickly detect if more than one high current provider is active at the same time and will cause one to be disabled;\nmost likely it will move into power independent operation but it could instead become a power consumer."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "power-provider-current-limiting",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#power-provider-current-limiting",
    "aria-label": "power provider current limiting permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Power provider current limiting"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "As mentioned above, power providers ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "must"), " incorporate current limiting. We recommend the use of one of the\nmany readily-available low-cost single-chip current limiters that operate at up to 5.5V."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Current limiters specify a tolerance on their output current - please ensure that the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "maximum"), " output current does not exceed ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_lc(max)")), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), " (for low current and high current providers respectively). This often means setting the typical current to a value like 100mA or 900mA, which might result in as little as 75mA or 800mA in some cases. But it is important that the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "maximum"), " current specification is not exceeded."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "It is possible for a high current provider to have a maximum current of any value between ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_lc(max)")), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), ". For example, a battery pack that is only able to supply 500mA could be used with a 500mA maximum Jacdac power provider."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Resettable polyfuses are not suitable"), " for current limiting because they have a relatively large 'on' resistance, a larger threshold current tolerance and do not switch on or off cleanly. This is very confusing for the user. Jacdac devices must use a silicon current limiter."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "example-power-delivery-circuit",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#example-power-delivery-circuit",
    "aria-label": "example power delivery circuit permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Example power delivery circuit"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 39.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABJ0AAASdAHeZh94AAABsElEQVQoz12RSW/UUBCE/f//AfAbuHHhTgTJkASUxcOMPTb2xM9v8/O+zfIhW3DhUKpWS11dXe0NWtA6w+FwINjvsUZzmjpE9oaUAq1ylBJk2ZF57DBKEkcRye+YMAxwVtM1JUGwR+YCrzWGvnZst6/4/ivWKE5jj1UWcVSksSSJJVpa5qEnjkK+3X7lbnPL63ZLWRZYnfPl5oY4jvD6tqMsKkpbsdRGOnTuqGyOyj6jxCf2/kfyY0jlGvqmIheWQjlaLTi1NUZL7u8fiKIDHueBvmmpiorLPOI/F6SxQaQ7kugdhXuPlh8Q6TOlbSitw3+RHHaGJHyjMiVWKx4fH0nTFI/LyNSPREFBVzfIzJKlBmdylNjgzAYt7hjaYl1c6OWKksup5zQNcB65zD1j36wZe0tjzUyXTH1PEtd0dcvu15bN959sNj+4f3giTY90TUNddiSx4XoaWMysfB7hMq3sLcXcNwyVA2byRGKVQ4o3wmBPHB8Igx0iO9KUDSZTjG2zCixi/8PjOjMWChfuOI8t1n+C67R+bOv7K5Zs6qriep7Q/gtTaVjm/omsDv/iD8sAVygtdgddAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='Example 100mA power delivery circuit' title='Example 100mA power delivery circuit' src='/jacdac-docs/static/0d132c3c367a88316c8f3aef5540eae1/5a190/jacdac-100mA-power-delivery.png' srcset='/jacdac-docs/static/0d132c3c367a88316c8f3aef5540eae1/772e8/jacdac-100mA-power-delivery.png 200w,\n/jacdac-docs/static/0d132c3c367a88316c8f3aef5540eae1/e17e5/jacdac-100mA-power-delivery.png 400w,\n/jacdac-docs/static/0d132c3c367a88316c8f3aef5540eae1/5a190/jacdac-100mA-power-delivery.png 800w,\n/jacdac-docs/static/0d132c3c367a88316c8f3aef5540eae1/23592/jacdac-100mA-power-delivery.png 1031w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Please refer to our list of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://github.com/microsoft/jacdac-ddk/tree/main/electronics/generic/suggested-components",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Jacdac suggested components"), " for suggested current limiter ICs."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "delivering-more-than-1a",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#delivering-more-than-1a",
    "aria-label": "delivering more than 1a permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Delivering more than 1A"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "We cannot allow more than ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), " on any one part of the Jacdac bus because ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.strong, null, "Jacdac cables are only rated up to 1A"), ". However, it is possible for power providers such as dedicated Jacdac power supplies to have multiple Jacdac connectors each of which separately provides up to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), ". These multiple-output high-current power supplies must run the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/power/"
  }, "power negotiation protocol"), " independently for each connector. In this way, if a user connects multiple outputs together via a Jacdac hub, this will be detected and power delivery will automatically be reduced to at most ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), " for that section of the Jacdac bus."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "It is possible to use a single MCU to run the power negotiation protocol for several independently-powered connectors, but it may be more convenient to use one cheap PADAUK MCU per connector."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "cable-and-connector-losses",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#cable-and-connector-losses",
    "aria-label": "cable and connector losses permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Cable and connector losses"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac requires cabling of at least 26AWG, resulting in a resistance of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#cables"
  }, "R", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cond")), ". In addition, the contact resistance in a Jacdac connector may be up to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#cables"
  }, "R", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cont")), ". Therefore cables have a total end-to-end resistance of (R", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cond(max)"), " x L", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cable"), ") + (2 x R", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cont(max)"), ")  mΩ where L", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "cable"), " is the cable length in m. For example, a 250mm single-hop cable will have up to 100mΩ resistance including contact resistance at both ends."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "bus-voltage-range",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#bus-voltage-range",
    "aria-label": "bus voltage range permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Bus voltage range"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "V", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out(nom)")), " nominal bus voltage and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out_hc(max)")), " maximum bus current limit allow commonly available USB power delivery parts to be used for Jacdac. In particular, 5V power adapters, 5V power packs, 5V current limiting ICs and 5V DC-DC converters are all commodity items. Note that high current providers do not have to provide ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out(hc)")), ", it may for example be cheaper to implement a 500mA power provider."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Note that any current flowing through the Jacdac bus will result in a voltage drop between the points of power provision and consumption, and any ground return current will cause a similar voltage drop. At 1A and with a 250mm, 100mΩ cable, this results in a 100mV drop on JD_PWR between power provider and power consumer, and another 100mV 'rise' on the GND return path; the power consuming device sees 200mV less than is being provided at the source. Additional hubs and cables will further reduce the margin."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "power-consumers",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#power-consumers",
    "aria-label": "power consumers permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Power consumers"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "A power consumer may draw a maximum of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-consumers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "in(max)")), " given that ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-providers"
  }, "I", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "out(hc)")), " may not be available due to component tolerances."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "To accommodate voltage drops, Jacdac devices must be capable of operating when the potential between JD_PWR and GND falls to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-consumers"
  }, "V", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "in(min)")), ". Since we expect the logic of a Jacdac device to operate at 3.3V (or lower), a low dropout linear regulator is the cheapest and simplest way to regulate JD_PWR to power a device from the bus. Alternatively a DC-DC converter can be used for improved efficiency."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Although some kind of voltage regulation is necessary to ensure that JD_DATA signalling runs at 3.3V, devices may also consume unregulated JD_PWR if desired. For example, it will typically be more efficient to power a servo motor or a strip of RGB LEDs directly from JD_PWR. This reduces the amount of current passing through the on-device voltage regulation circuit, which in turn reduces losses and may reduce cost."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "jacdac-bus-brown-outs",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#jacdac-bus-brown-outs",
    "aria-label": "jacdac bus brown outs permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Jacdac bus brown-outs"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Sometimes the Jacdac bus voltage JD_PWR will inevitably brown-out below ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/electrical-spec/#power-consumers"
  }, "V", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", null, "in(min)")), ". For example, if the bus is overloaded the power provider's current limiter will either reduce the bus voltage, or will switch it off completely before re-trying. This means that all power consumers must be designed to behave gracefully if they are not supplied with a high enough voltage to operate reliably. MCUs should have brown-out protection and peripherals should fail gracefully in the face of a brownout."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.hr));
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
//# sourceMappingURL=component---src-pages-ddk-design-electrical-mdx-a0ea219da6fbed808741.js.map