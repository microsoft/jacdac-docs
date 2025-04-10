"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5559],{

/***/ 23946:
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
    h2: "h2",
    ul: "ul",
    li: "li",
    h3: "h3",
    ol: "ol",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "single-wire-serial-sws",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#single-wire-serial-sws",
    "aria-label": "single wire serial sws permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Single Wire Serial (SWS)"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac connects microcontrollers (MCUs) to each other using a UART-based protocol on a single (common) data wire\nand common ground that form a shared bus. Communications can be implemented on nearly all MCUs, including very\nlow cost ones, as detailed in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#hardware-requirements"
  }, "hardware requirements"), ". A simple way to implement SWS\nis to use a standard RS232 UART peripheral, common to many microcontrollers, operated in half-duplex mode."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "protocol-overview",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#protocol-overview",
    "aria-label": "protocol overview permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Protocol overview"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "A complete Jacdac transmission and the beginning of another are captured in the image below."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 38.5%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAC4jAAAuIwF4pT92AAACPklEQVQoz1WP0WtSURzHz98QxDKCXnqexdZDED0UBBI9jWIQDqwH8dVB4ZB2p1lQDHrywe1hmQym13uv96qY7XLD04TNvNzNzbTp3dSYziasQDfP9d4T59JLP/jx/XC+X36cL3A+c17Y/b77vFQtve6d9AKiKPpYlqUEQaA4nqek7Cffwfb2q+NuN9DpdALdbjfQaDQCSkXx93q9AITQz7LsS0EQ3rAs+xTQq/HLR8dHf2rNfUwGQogZhsHpVApziQTe+CLhE1U1PcMwTO0P+rhc3zO5WCxilmVxKpUiugNmnsxYD5uHteJOkfjnEELEMAyKrq2hBC8gKZtFVVlGGGNk6Lqp/UEfwU1osizLKBqNntE0jROJhASmH09PqA31QC7J5OAIQmgwDGMshUIGLwiGmMkY5W8F8jVD13VT+4O+ATehyYqiGJFIRAuHw5jn+RyYezF3rfmz2ShVSmYrUplUSCaTmBcEnBNF3CqX/6s8OBvgLWXLZFmWSV4neY7jvoLox+hYq91S9xs/iK/lcrkhTdMax3F6nGG0DUk6/1WvaUNN0xFCGsZ4ePr7dFSu741I5UKhgGKx2JDjOHJYBJZLlosL/oWbyyvLNzKZjNVut993OBy3qfl5q3t2dvLR1NTD4OLi5Of19fFgMHjL7XY/oOP09aWVkNXn891zOp13vV7vuNfrnbDZbHdAW22Daq0CwqsfQDqVBhhjkM/ngcvlMhkAcAUAMAYAsPzjq+T93fu3pk/W4/EAiqLM/F+NuM1igVWm9wAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='An image depicting a Jacdac transmission. A Jacdac transmission begins with a start pulse of 11-14 us, a inter lo data spacing of minimally 50 us before data commences. A Jacdac transmission ends with an end pulse of 11-14 us.' title='An image depicting a Jacdac transmission. A Jacdac transmission begins with a start pulse of 11-14 us, a inter lo data spacing of minimally 50 us before data commences. A Jacdac transmission ends with an end pulse of 11-14 us.' src='/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/5a190/jacdac-activity.png' srcset='/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/772e8/jacdac-activity.png 200w,\n/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/e17e5/jacdac-activity.png 400w,\n/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/5a190/jacdac-activity.png 800w,\n/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/c1b63/jacdac-activity.png 1200w,\n/jacdac-docs/static/9fdbd7cb80bf359a0ff2ed62539dcf06/c2d9c/jacdac-activity.png 1326w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Data bytes are 10 bits long and are composed of 1 start bit, 8 data bits, and one stop bit.\nJacdac devices must only communicate at 1 Mbaud and when no data is being transmitted,\nthe bus must read as a logical one."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In Jacdac SWS, any device can initiate a transmission at any time.\nBecause of this, devices must assert control over the bus before sending any data.\nThis is where Jacdac differs from half-duplex UART–––devices must assert control over the bus\nby pulsing the line low before transmitting any data. This low pulse is known as the start pulse\nand must be between 11 and 15 microseconds in duration. This duration is recognized\nas a break condition on most UART hardware."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "When the start pulse is over, devices have minimally 50 microseconds to configure IO registers\nto receive UART data. If no data byte is received within 200 microseconds,\nan error condition must be triggered and devices must wait for the bus to return to an idle state.\nThis means that the first data byte must commence at 189 microseconds\nafter the completion of the start pulse in order to be specification compliant.\nDevices should strive to start transmission as close as possible after the 50 microsecond mark."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "After the transmitter has sent the data portion of a frame, it must then pulse\nthe line low one final time to signal the end of a transmission.\nThe duration of this end pulse is also between 11 and 15 microseconds so to trigger\nanother UART break condition. The end pulse can come immediately after the last data byte,\nbut it must occur within 80 microseconds of the last data byte. If it does not,\nan error condition is generated."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "A small amount of time must pass before another transmission can begin.\nDevices must wait minimally 100 microseconds plus a randomly generated backoff value\nso that multiple devices do not initiate transmission at precisely the same time.\nIt is therefore extremely important that all devices have some randomness in their transmission sequence\nto reduce the likelihood of data loss."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "hardware-requirements",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#hardware-requirements",
    "aria-label": "hardware requirements permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Hardware requirements"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "As yet, there is no silicon implementation of Jacdac SWS.\nHowever, the diversity of readily-available microcontrollers and the flexibility of\ntypical UART hardware means there are many ways to reach a specification compliant\nJacdac SWS implementation. It is also possible to implement Jacdac SWS by bit-banging,\nif UART hardware is not available."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac SWS requires the following basic functionality of hardware:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Transmitting / receiving UART-style (10 bits: 1 byte, 1 stop bit, 1 start bit) bytes\nat 1Mbaud in half-duplex mode, implemented in hardware or in software via bit-banging."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "A GPIO with an internal or external 300k pull-up and support for interrupts,\nimplemented in hardware or in software by spin waiting."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "The ability to keep time (whether through instruction counting or a hardware timer)."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "protocol-details",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#protocol-details",
    "aria-label": "protocol details permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Protocol details"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "transmission-sequence",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#transmission-sequence",
    "aria-label": "transmission sequence permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Transmission sequence"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ol, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Place GPIO in high impedance input mode."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Check to see if the line is low.", "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "If the line is already low, start the reception sequence instead."), "\n"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Place GPIO pin in output mode"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Pulse the line low for 11––15 microseconds."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Configure the UART peripheral with the correct baud rate and begin transmitting data after (minimally) 40 microseconds."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "reception-sequence",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#reception-sequence",
    "aria-label": "reception sequence permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Reception sequence"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ol, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Place GPIO in high impedance input mode with a PullUp."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Enable GPIO edge interrupts, UART break interrupts, or spin wait until the line goes low."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "When the start pulse has finished, configure UART registers appropriately. It is better to wait until the start pulse is complete as in some cases UART hardware may incorrectly detect a data byte or trigger an error condition."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "Receive data until the end pulse is detected."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "error-detection",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#error-detection",
    "aria-label": "error detection permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Error detection"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The image and table below captures key timings of Jacdac SWS."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 86.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAC4jAAAuIwF4pT92AAAEGklEQVQ4y21U7U9bVRh/eodDWaeZLzObM5kvGYl+8ssi26Ix4+PU+AcY/SAm6ljitkzNAgnG97lC0lKYjkILBfqy7r7W25aClJamlQIZLy0Um8JmnUFbXopAe+95zLkyo4ZfcvJ7nnvv+Z3fOc9zLgAA8DyvDZZlHxQE4VeO49HWbd3usbpLXdeEks1mKzmdzm2WZZHn+awoilWiKGpzdoUgCICIUFtbC06nM+xyudBi6VD77C70eUPY1taODodDjcXiKIqiP5FIQC6X0+btCrqSyWRiDAYDWK3WNo7jMBwOl0ajoyRf+IOIokhCoVCpWCyi3+83RKNRiEQie3YV/FSoA0CADktHhdlshvb29nqPx4PDw8PlSCRC8vkCsixLaL65uYnBYPCdSCQCI+GRCtM5O5jP9/4zNDTx74K3DGA0GRlD81Vobjac7urqQrfbTTweD4nFYmi1Wonb7cbx8Qnyg+w7MTAYBC/nY1rP26H1wt+ilGmuYd8BgC/eN+kMX34P31xtOdLdbVtzOp3Y0tJCOjs70WAwqBaLBVtNxpWP6t9+tOnDyzD5JsJXZ1uZXDuCq+FH6LkkQ92+zwH2wxGAgwBi9jN9k+fKsYbrqaOSJCXptvv7+1WHw4F9fb2q0+VBP29Lhy+ePu6/jpWLw9lK99cDB4c6JvRpebnS2xapMl/p1MGJl168b+c49xyve+0QANzv9rBxURRRkiRFkiSNRcmL/A3riPnlx44BwAMAUAkAe+9xJTypn8QboLXLzPTMW5nFzEx6aT609edm3OeT12ileZ4nPM9rTHOf7Mv/PPZTaH19Lb6xsREvbhTjxWIxtr21HVtYSo+5B10nNcFCvvDJL3fv4Fw2hRQDwQGtsoIg0L5DyizHkcGBAC6OJxAJwf8jcyeD3zmvvUG3emB+br4xu5TFcDy8iYhKIBAg9FYIgqBVl+c4zWnA5yNRn6yUy2WFfkcIUVRVLSNi+dbsLTx3uf4MFdyfnk83Zm9nMT4ZK9HVAoEA0i1SZ0ajEWmBaOyXZRyVZVTKZc0VIQRVVaV21anUFDZ+2/AqFXxofi7dmMlmMBQNbe04VFiWVXieV1wul8Ycxyl+WVZ2cUjj8sTUBJ79+IMz2hmur65fyv2Ww4XbC9rKg0ODmiNaYa/Xi15JQkEUcSgYxMWJcdwNi7ksWvmu1zXBxFjivVQ6dXcyOTm1trpGezDV09Mz29vbm7Tb7XTQPMndvDk7HRpO/r68nCoUCsmVlZXZfD4/u7qympqem17oZC2vgE6no314mJ4lvTQ7ffU0ADxFe3Ln2SMA8MJOrAeAKgB4HgCe+Nc3NH6GCsKpk6f+88Oorq7WUa6oqHicYZijDMM8yzDMc5Tpa51O93BNTQ3o9Xrm3pxDh+mdgL1/ATFNDhmnW3yEAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='An image depicting a Jacdac transmission with portions of the signal labelled, A-F.' title='An image depicting a Jacdac transmission with portions of the signal labelled, A-F.' src='/jacdac-docs/static/8c4f5c8d08d75967139606f66076445c/5a190/jacdac-proto-timings.png' srcset='/jacdac-docs/static/8c4f5c8d08d75967139606f66076445c/772e8/jacdac-proto-timings.png 200w,\n/jacdac-docs/static/8c4f5c8d08d75967139606f66076445c/e17e5/jacdac-proto-timings.png 400w,\n/jacdac-docs/static/8c4f5c8d08d75967139606f66076445c/5a190/jacdac-proto-timings.png 800w,\n/jacdac-docs/static/8c4f5c8d08d75967139606f66076445c/f3a19/jacdac-proto-timings.png 1086w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.thead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.th, null, "Duration min/max (us)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tbody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Start pulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "11/15")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Start-data gap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "60/89")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Data-byte gap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0/80")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Data-end gap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "0/80")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "End pulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "11/15")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.tr, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "Frame-to-frame gap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.td, null, "200/")))), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The state machine below encapsulates how these timings should be used during frame reception:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 70%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAADp0lEQVQ4y01TW0gjZxQ+47rdqk2rlfqw6O4+FLu0rIulLH1woS9REGFZ+tSuL4W6YhEhEi9YVBDijSBVQY2oq8QISlDMJDqJJobcJiZGnURN5mJuXhKjBkSCvqxT/rEpe+DwH87lO+f//vMDz/NwcHAgaCAQgGg0Ck6nE1KpFHZ3dwcGg6E0Go2esyy7DACZlZWV2PDwMOzt7UEwGISzszM4OTmB8/NzEAQB0jQtKMuy38Tj8R+3t7df1NbWfoliLpfr72QyycdiMb6+vv575JPJZAU0TZceHx//kEgkMhFoMpm8B7y5uQGLxZJhNpvB4XC8tdlsZpvNNo7jeM7c3BzgOP4Vx3HDDMP8gaYwGAzg8/l+cjgcOEmSKp7nc29vb+H09PQekOM4SEtRUdHn6FpyuRxNjqFpQqFQztjYWJlWq32Z9iGxWq2QnZ2dJZPJHqTr1Wr1/ZWXl5dhcXFRsJGWlJQInKJmkUjkhd1uV7nd7n9SqdQjqVSKqdXqB+ncdIP9/X2M4zhMcAwODkJfX1/W0tKS2Gg0Zv6XkBeJRLIsFgusra29xHG8YGFhAYxGIyB65ufngSCIp6urq68QxtXVFVAUBTAyMpKBHE6n80MoFOLdbrdcq9U+I0mS8ng871ZWVippmuZZlmW6uroeWyyWdyRJ/tbf3/8tTdOHKKbRaH4nCOK53+//GcrKyh4i3jwej/bo6Ijf3d2dAwBMoVA8Ro0IgvgrGAwiwMumpqYnExMTz2ZmZp5IJJLnHMddo5jJZPpzamrqNUEQb4QrKxQK0Ol0BSRJvidJMs9kMkFPTw9IpVIhfnh4+JaiqFK32w2Tk5OgVCpRPng8nlcURf2Kci4uLgQqhAKdToeh5US23++H5uZm6OjoEE6WZSEWiwHDMKDX67He3l4oLy//f4fTj+L1ejMMBkMGoK5pqaury+vs7Mz1er0PUWJ1dTWMj4/D5eWl8Bu8Xi/2KVBLS4vI5/N9lp+fL9RrNBoQXqa9vR1mZ2dha2urb3Nzc9flcvVUVFRATU0NmjIrGo22MAzzJh6PQ3d3N9rBp2azuWZjY+O91Wr9hSAIWF9fB7vdDoC2XCQSCYDJZPILjuO+HhgYyK+qqspBU+zs7DSGw2E+HA5/bGxs/A5NIhaLRQ0NDblKpTJ7aGjokUQiAaSIX7i+vobCwkKYnp6GRCIhcKVSqUAul2ci7vR6vRgBBgKBreLi4pw0Z62trYC+5ujoqGC3tbUJGP8CGrtnW/CVxgoAAAAASUVORK5CYII='); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='An image depicting the state machine to be used when receiving a Jacdac packet. Whenever any timing is exceeded, the device should wait for the frame-to-frame gap to elapse before listening for another packet.' title='An image depicting the state machine to be used when receiving a Jacdac packet. Whenever any timing is exceeded, the device should wait for the frame-to-frame gap to elapse before listening for another packet.' src='/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/5a190/jacdac-state-diagram.png' srcset='/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/772e8/jacdac-state-diagram.png 200w,\n/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/e17e5/jacdac-state-diagram.png 400w,\n/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/5a190/jacdac-state-diagram.png 800w,\n/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/c1b63/jacdac-state-diagram.png 1200w,\n/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/29007/jacdac-state-diagram.png 1600w,\n/jacdac-docs/static/2ad7137a8d7bb550470c6092f4884e71/09262/jacdac-state-diagram.png 1896w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })));
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
//# sourceMappingURL=component---src-pages-reference-single-wire-serial-mdx-c4c0d0b810e665a48c1a.js.map