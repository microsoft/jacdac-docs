"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3359],{

/***/ 27036:
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
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');
exports.Z = _default;

/***/ }),

/***/ 63343:
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
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
exports.Z = _default;

/***/ }),

/***/ 77682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDeviceCatalog; }
/* harmony export */ });
/* harmony import */ var _jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26040);
/**
 * Gets the device catalog from the current bus
 * @returns
 */function useDeviceCatalog(){var bus=(0,_jacdac_useBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();return bus.deviceCatalog;}

/***/ }),

/***/ 94597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15785);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24503);
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */function Head(props){var _site$siteMetadata,_data$page,_site$siteMetadata2;var{pageContext,data,description,image,title,meta=[]}=props;var{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("63159454");var metaTitle=title||(pageContext===null||pageContext===void 0?void 0:pageContext.title)||(site===null||site===void 0?void 0:(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title);if(!/^(Jacdac|DeviceScript)/i.test(metaTitle))metaTitle="Jacdac - "+metaTitle;var metaDescription=description||(data===null||data===void 0?void 0:(_data$page=data.page)===null||_data$page===void 0?void 0:_data$page.description)||(site===null||site===void 0?void 0:(_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.description);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{key:"title"},metaTitle),[{name:"description",content:metaDescription},{name:"og:image",content:image},{name:"og:title",content:metaTitle},{name:"og:description",content:metaDescription},{name:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:site.siteMetadata.author},{name:"twitter:title",content:title},{name:"twitter:description",content:metaDescription}].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(meta)).filter(_ref=>{var{content}=_ref;return!!content;}).map(_ref2=>{var{name,content}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:name,name:name,content:content});}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"fontsgoogle",rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{key:"gitusercontent",rel:"preconnect",href:"https://raw.githubusercontent.com",crossOrigin:"anonymous"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"viewport",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}));}

/***/ }),

/***/ 23729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontmatter": function() { return /* binding */ frontmatter; },
/* harmony export */   "Head": function() { return /* binding */ Head; },
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var _jacdac_ts_src_testdom_testrules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45665);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62070);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43850);
/* harmony import */ var _components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77682);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63339);
/* harmony import */ var _components_makecode_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29363);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24503);
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27036);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63343);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90461);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16821);
/* harmony import */ var _components_shell_Head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94597);












var statuses = {
  stable: "Stable",
  rc: "Release Candidate",
  experimental: "Experimental",
  deprecated: "Deprecated"
};

function ServiceStatus(props) {
  var {
    service,
    makecodeExtensions
  } = props;
  var {
    shortId,
    name,
    classIdentifier
  } = service;
  var catalog = (0,_components_devices_useDeviceCatalog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(catalog, _ => _.specificationsForService(classIdentifier, {
    includeDeprecated: true
  }));
  var serviceProvider = (0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_3__/* .serviceProviderDefinitionFromServiceClass */ .vd)(classIdentifier);
  var testRule = (0,_jacdac_ts_src_testdom_testrules__WEBPACK_IMPORTED_MODULE_0__/* .resolveTestRules */ .f2)(classIdentifier);
  var testCommand = (0,_jacdac_ts_src_testdom_testrules__WEBPACK_IMPORTED_MODULE_0__/* .resolveServiceCommandTest */ .c8)(classIdentifier);
  var customTest = !!(testRule !== null && testRule !== void 0 && testRule.length) || testCommand;
  var makecode = (0,_components_makecode_services__WEBPACK_IMPORTED_MODULE_6__/* .resolveMakecodeServiceFromClassIdentifier */ .WB)(classIdentifier);
  var makecodeExtension = makecode && makecodeExtensions.indexOf(shortId.toLowerCase()) > -1;

  var available = function available(value, allowMissing) {
    if (allowMissing === void 0) {
      allowMissing = false;
    }

    return typeof value === "number" && value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "success"
      }),
      label: value
    }) : value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      color: "success"
    }) : allowMissing ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      color: "warning"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_8__/* .Link */ .rU, {
    to: "/services/" + shortId + "/"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, available(devices === null || devices === void 0 ? void 0 : devices.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, available(serviceProvider)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, available(customTest, true)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, makecode ? makecode.client.generated ? "generated" : "custom" : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, available(makecodeExtension)));
}

function ServiceStatusSection(props) {
  var {
    status,
    services,
    makecodeExtensions
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, statuses[status]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "devices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "simulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "custom tests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "MakeCode Extension"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "MakeCode Docs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ServiceStatus, {
    key: service.shortId,
    service: service,
    makecodeExtensions: makecodeExtensions
  })))));
}

var frontmatter = {
  title: "Service Status",
  description: "Implementation status of services in clients, tests, firmware."
};

var Head = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_shell_Head__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, Object.assign({}, props, frontmatter));
function Page() {
  var query = (0,gatsby__WEBPACK_IMPORTED_MODULE_7__.useStaticQuery)("1530881449");
  var makecodeExtensions = query.allMdx.edges.map(edge => edge.node).sort((l, r) => l.fields.slug.localeCompare(r.fields.slug)).map(_ref => {
    var {
      fields
    } = _ref;
    return fields.slug.slice("/clients/makecode/extensions/".length, -1);
  }).map(p => p.toLowerCase());
  var services = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecifications */ .Le)().filter(srv => !(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isInfrastructure */ .lz)(srv));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "Service Implementation Status"), Object.keys(statuses).map(status => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ServiceStatusSection, {
    key: status,
    status: status,
    services: services.filter(srv => srv.status === status),
    makecodeExtensions: makecodeExtensions
  })));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-status-tsx-4a752ce2f86fbb088407.js.map