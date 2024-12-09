"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2633],{

/***/ 96719:
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
    h3: "h3",
    code: "code",
    h4: "h4",
    ol: "ol"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .ah)(), props.components),
      {
    RandomGenerator
  } = _components;

  if (!RandomGenerator) _missingMdxReference("RandomGenerator", true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h1, {
    id: "specification",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#specification",
    "aria-label": "specification permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Specification"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac is an integrated hardware and software stack\nthat makes it easier to connect programmable microcontrollers,\nsensors, actuators, and peripherals together\nin a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/clientserver"
  }, "client/server architecture"), ".\nIt also provides a bridge from the embedded world to the web browser and beyond.\nKey features of Jacdac are:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "a dedicated 3-wire cable and connector"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "a true bus topology"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "service advertisement and dynamic device discovery"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "a standardized service abstraction"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "a full stack that supports platforms from 8-bit MCUs to web development."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In addition to the functionality provided by common networking\nstacks, the Jacdac protocol specifies electrical and mechanical\nrequirements that improve interoperability at the hardware level."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 452px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 108.5%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEaElEQVQ4y32U60+TZxjG3/9qn/ywqZtmWZZFM7NoJiDHioVSoNDSA6Xn87mlByhtKeXUQgEFRLGTGXXGxKjZFrMP7uOyGGOyo8BveR7EkDh9kiv3+7zvc1/PdV/3nVfhzfrn37959sszXu+95sNrn+e/Pufpj095+erlO1+VO1t3aazdZmv5JrVSnZsrDRpXb7OzcYcnD57y6N5jHv/whAc7D7lRv8WN+jbL5RUWpqqsza2zvfod26sNfnr0s4SibzFj7/HgGQji1gZw9wcwtlkZbjaRduWIWpIk7Rnc/X6aT3bQf34Y72AIV58Pm9pN++fddH3Zw4RvipQjg5IYSxO3jsvEsDEuY1Afle+WCissTNRYLq0yk5zDpwsR0EeOIIp/OEzIGJdnFyeXUESyIDkgTTHuzMnnoCFKMVom7ZqQNws1337cSsvJTppPdLxF04l2Wj7tpBSb4ersBop/KIy9x01sNEXQECNiTsjk0EiM+WyVnDcvSR29Hpksym463i6fmwTpyQ5aT6mopOapT6+h2NQu6ZkoPWxKSHWGSxYcvV5K8QopR1bCLgiPt6M5N0jv1wOoz2q5ckZL5xdqLn3WxXS8wlJxBcUzEJDlSe8MUemHeCe8mU0vkPFMMu7KSYUXP2lDd9GIRWVn9LIDQ6sF9dl+SViIlKmMz6OMXXEhIAgPISxwaLxMJ2alp+POrNwLz4SHh6Ufou30ZUqxCvXSGop3MCiVCZ8StrQkECMkvBUKxeiIsbF2Ozl/rFmqPArRKBGLkTKrlWsoTo1XKgyb4rIREVNCJou5E2Mwk5qTozMVKslmiZkV54X3B3s3Lq2fan6ZWqGOYuoYkx9EQ4QyUbK5y45F5WAmNU8+WJQjkbRlGLigxz8cedPAg5k1d9oYajLJy2uFFZSsM0fGkWM6UmbSN0UhUCRtzzLhybOYq5F25ohZklhVDs59dIHB83o8Wj8ujReryk7bKRUXjjUz6S+QDxRQ1G1mNF1WTIN+Rvo8mAf9dLcY0amdrNe3WVnYpD63TiW/hNccJ+LMEvNMEHPniHsmCVhTBMfGWatuybNK7VqDxau3WN36no1b91jfvvt2P15YwhbK40/NYPJmOdOqR2MJo7Mn6LNE6LdGUel9nOs0EkxXiGTnUD70o2rceUi/JYLJnSaQLDM0FsfqzxFOz+KJlXBHi4w4UxKpqSqRzBzK7t4eAntHsLu7Kwn/+PMvmWTxZuk1Bjl+tpuWHhujvqy8qHvYx1dNOk5/o8GXmGa+fuNdhfv7+zIKYrGuN+6jG4vjiRUZGI1Kpe5YEX+yjDcxLfeD1hiZ0jLTixv/X7IgPSR+8fIVzvAUQ7a4VCei2hBAa46gMYVQG/xcvGIlmpunUrv+fsKjKlc3d6SPWnMYe3BSliyigLRjJCgV5itrH27K3t4B8W+/v5CJGmNIqhIEfeYwKp1XxstDXmmBuOC9hIdlH6q9ufNAqpipbVJaWKdc3aC0cE3uZ6qbbDXuyzP/AdLl9LOw0HCYAAAAAElFTkSuQmCC'); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='OSI 7 layer stack vs Jacdac stack' title='OSI 7 layer stack vs Jacdac stack' src='/jacdac-docs/static/94c7255ef4f0f956d238b9fc6adf0d20/fcb94/osi-and-jacdac-stack.png' srcset='/jacdac-docs/static/94c7255ef4f0f956d238b9fc6adf0d20/772e8/osi-and-jacdac-stack.png 200w,\n/jacdac-docs/static/94c7255ef4f0f956d238b9fc6adf0d20/e17e5/osi-and-jacdac-stack.png 400w,\n/jacdac-docs/static/94c7255ef4f0f956d238b9fc6adf0d20/fcb94/osi-and-jacdac-stack.png 452w' sizes='(max-width: 452px) 100vw, 452px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "As illustrated above, the Jacdac protocol consists of three\ncore software/firmware layers and several hardware layers.\nAn overview of these is given below, followed by detailed descriptions of each layer."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ul, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://www.microsoft.com/en-us/research/uploads/prod/2023/01/MSR-TR-2023-4-63b4a4bb98c7f.pdf",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Technical Report")), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h2, {
    id: "overview",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#overview",
    "aria-label": "overview permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Overview"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "service-layer-how-devices-share-hardware-and-software-resources-with-one-another",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#service-layer-how-devices-share-hardware-and-software-resources-with-one-another",
    "aria-label": "service layer how devices share hardware and software resources with one another permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Service layer: how devices share hardware and software resources with one another"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The way Jacdac devices share resources with other devices on the bus are through ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services"
  }, "services"), "\nServices provide abstract, standardized interfaces that can be used to interact with\nphysical hardware resources (e.g. an accelerometer) or pure virtual resources\n(e.g. the state of a video game). This abstraction brings plug-and-play dynamism to\nJacdac: devices with the same functionality but different hardware implementations\ncan be substituted without having to recompile the application that uses them. For example,\ntwo different models of accelerometer hardware can replace each other\nbecause they share the same software interface."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Any device that hosts a service must also run the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/control"
  }, "control service"), ".\nThe control service is responsible for advertising any services a device\nis running every 500 milliseconds. Like any other service,\nthe packets emitted by the control service are standardized.\nThere also a set of common commands that must be implemented by Jacdac devices that operate services,\nincluding functionality like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "reset"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.code, null, "time since boot"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Most Jacdac users will never need to write a service: the major use case is for users\nto ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/clients"
  }, "program applications"), " that interact with Jacdac devices through services.\nUsing Jacdac in microcontroller applications is incredibly easy and only\nrequires a software stack that has a compatible Jacdac physical layer."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Services are registered in the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/services/"
  }, "service catalog"), "\nand are described by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/service-specification/"
  }, "service specifications"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/protocol#service-layer"
  }, "Read more about the service layer.")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "transport-layer-responsible-for-routing-packets-between-services-and-applications",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#transport-layer-responsible-for-routing-packets-between-services-and-applications",
    "aria-label": "transport layer responsible for routing packets between services and applications permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Transport layer: responsible for routing packets between services and applications"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The role of the Jacdac transport layer is to\ndivide frames received by the network interface layer into data packets\nand to forward them to the appropriate service or user application.\nThe transport layer integrates functionality that is split across multiple layers\nin other networking stacks, in order to improve efficiency.\nIt includes naming, addressing, packet description, dynamic service discovery,\nand power control (for power providers above 0.5W)."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "In many cases it is important that data is received by a specific device.\nJacdac supports this mechanism using acknowledgements and pipes.\nAcknowledgements are simple and require receiving devices\nto recognize that a frame has successfully been received.\nPipes, on the other hand, set up a point-to-point connection between devices,\nand every packet is acknowledged and received using a sliding window approach.\nOnly the most capable devices are expected to support pipes."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "The transport layer can optionally support over-the-wire firmware updates."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h4, {
    id: "device-identification",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#device-identification",
    "aria-label": "device identification permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Device identification"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "By design, the Jacdac protocol does not require central allocation of\nguaranteed-unique device identifiers (JDIDs). Instead, device designers and manufacturers are responsible\nfor allocating a random 64-bit device identifier to each device. From a probabalistic\npoint of view, this will most likely be unique on any given Jacdac bus and can therefore\nbe used to identify a sending or receiving device, and allows devices to remember\none another on the bus. Once generated and allocated, a device's identifier must remain constant.\nAs long identifiers are generated with appropriate\nentropy (see analysis below), there is little chance of identifier collision.\nWe recommend the following ways of generating a unique identifier:"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.ol, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Many modern microcontrollers (MCUs) include a factory-programmed unique hardware ID, and this is ideal for creating the Jacdac device identifier - through hashing if needed."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Use the random number generator (found below) to allocate an identifier for each device, and flash this number into the MCU during device production. The number generator itself could be included in the automated flashing process to ensure appropriate entropy."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.li, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Use a hardware random number generator in the MCU to generate a random 64 bit number during device commissioning - for example at first boot. This could use sensor values to create further entropy. Once generated it must be stored in non-volatile flash or EEPROM memory for future use."), "\n"), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "For an example, see ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://github.com/microsoft/jacdac-stm32x0/blob/master/bl/blmain.c",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "the Jacdac bootloader for STM32x0"), "."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RandomGenerator, {
    device: true
  }), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "If we consider one trillion Jacdac networks of size 200 devices, with randomly chosen 64 bit JDIDs,\nthe probability of a JDID collision in at least one of the networks is 0.1%.\nOn the other hand, with 32 bit IDs and two thousand networks, the collision probability in any of them is already 1%,\nand with two hundred thousand networks it's more than 60%."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/protocol#transport-layer"
  }, "Read more about the transport layer.")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "network-interface-layer-low-level-data-transfer-between-jacdac-devices",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#network-interface-layer-low-level-data-transfer-between-jacdac-devices",
    "aria-label": "network interface layer low level data transfer between jacdac devices permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Network interface layer: low level data transfer between Jacdac devices"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac devices with a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/ddk/design/electro-mechanical#pcb-edge-connector"
  }, "Jacdac PCB edge connector"), "\nmust run the Jacdac network interface protocol, which is a variant of\nsingle wire serial (SWS) communications. This protocol was designed to be resource\nefficient, enabling it to be implemented on low cost microcontrollers right down to\n8 bit one-time-programmable units with tens of bytes of RAM and hundreds of words\nof instruction memory."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "To support interoperability with existing devices and protocols without\nnative Jacdac support, it is possible to substitute the Jacdac network interface\nprotocol with a legacy protocol. For example, the Jacdac network interface and its\nunderlying layers can be replaced with a USB or Bluetooth stack. In this way, the Jacdac\nservice layer and the transport layer that underpins it remain, but the relevant existing\nprotocols are used below to implement data transfer."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/reference/protocol#network-interface-layer"
  }, "Read more about the network interface layer.")), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.h3, {
    id: "hardware-layers-supporting-electrical-and-mechanical-interoperability",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "#hardware-layers-supporting-electrical-and-mechanical-interoperability",
    "aria-label": "hardware layers supporting electrical and mechanical interoperability permalink",
    className: "anchor before"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Hardware layers: supporting electrical and mechanical interoperability"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Unlike many other networking protocol stacks, Jacdac specifies electrical and\nmechanical properties beyond the connector. These allow power sharing across the Jacdac\nbus, support different physical topologies that may be 'overlaid' on the\nunderlying bus topology, provide a common approach to physical characteristics\nof Jacdac modules such as mounting hole size & position, module shape and labelling."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "At the electrical level, Jacdac is a true bus architecture\nthat uses three wires to support power delivery and data transfer.\nOne wire is used for ground (GND), one for data (JD_DATA) and one for power (JD_PWR).\nIn the simplest configurations, all devices on the Jacdac bus are connected\ndirectly to these three wires."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, "Jacdac leverages a purpose-built, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://creativecommons.org/licenses/by/4.0/",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Creative Commons CC-BY 4.0"), " open-IP ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "https://github.com/microsoft/jacdac-ddk/tree/main/connector#cable",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "connector standard"), " that is optimized for cost, performance and user experience. One mating half of the connector takes the form of a three-conductor edge connector profile that is incorporated into the PCB design of Jacdac devices. The other mating half may be implemented in different ways, including a female-to-female cable."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<span class='gatsby-resp-image-wrapper' style='position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; '>\n      <span class='gatsby-resp-image-background-image' style=\"padding-bottom: 56.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVQoz2NgIABiYmIYFBUVGdzd3RnExMQYJCQkGGRkZEBs5v///zNISUnB+AyioqL4DSsqKmKQl5dnMDc3Z0hKSmJ0c3Nj1tTUZAZpBmEuLi4GaWlpP1lZ2Xh2dnYGGxsbTEO6V0xn6F41g6F6ej1D96rJDLOOrWAorEtnqq5qYAgJCWHQ1dVl4ODgYBQXF4+QkJCYIyUlVSUnJ6cgLi4OtgQO+lZMZMiqLWLwSY9mSG0uZYhNT2Aqa69kLjIwZKhsz2fo65su7O/vn2Fubt4jKSm5SVhYuFFCQkJeUlKSQVZWFtXLy7ZOYgCFBwi0Typhmri4gyk+M4mhfVY3g4eOBoOrr12IkZHeZ01Nzf+ioqL/paSk/EAuEhERAYUps5ycHMjFCANXbJ8MN7B/ZiXDoq1zGOLzM3TapjR3985tudA6vfy/kb3ROXZW1j4efj4FUVGwa1hEREQYBQQEGPj5+cERIycnhzAQBibPa3CbsnrC6sTc5N+pZVn/Uxpz/jtHujZNTfeHqmBkEBAQZOLh4WEoKSkBuwoU8yggoiASpA4MEquSDpZ2F/4PSQv9Z+Zjv5ZNRUI/tSIW7AM+YQEWPl4+Rpg+UHLCCm492cFgH+fJoB/kAOKy6XiZRmp7GFvmNmYzsGnIMOS3pjMzyoszCBqpM+h5mDNoOZgwqKmp4U5vb78cY7CJdmPQ9LYG8y1CbBn0fcwY2qc3Mqm7mDId//8YLC5jqsGgZK7NQBAo2OkxqDgZMohbaDGImqozuCV4MVsG2THB5KVN1BkUDTQYiAEAbn2Wjn/gKMsAAAAASUVORK5CYII='); background-size: cover; display: block;\"></span>\n  <img class='gatsby-resp-image-image' alt='jacdac module and cable picture' title='jacdac module and cable picture' src='/jacdac-docs/static/681cc3017360301325698a5321d77a16/5a190/cablepluggingintomodule.png' srcset='/jacdac-docs/static/681cc3017360301325698a5321d77a16/772e8/cablepluggingintomodule.png 200w,\n/jacdac-docs/static/681cc3017360301325698a5321d77a16/e17e5/cablepluggingintomodule.png 400w,\n/jacdac-docs/static/681cc3017360301325698a5321d77a16/5a190/cablepluggingintomodule.png 800w,\n/jacdac-docs/static/681cc3017360301325698a5321d77a16/c1b63/cablepluggingintomodule.png 1200w,\n/jacdac-docs/static/681cc3017360301325698a5321d77a16/29007/cablepluggingintomodule.png 1600w,\n/jacdac-docs/static/681cc3017360301325698a5321d77a16/29114/cablepluggingintomodule.png 1920w' sizes='(max-width: 800px) 100vw, 800px' style='width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;' loading='lazy' decoding='async'>\n    </span>"
    }
  })), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.p, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components.a, {
    href: "/jacdac-docs/ddk/design"
  }, "Read more about the hardware layers.")));
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
//# sourceMappingURL=component---src-pages-reference-mdx-bc1c9035442c58edf7c8.js.map