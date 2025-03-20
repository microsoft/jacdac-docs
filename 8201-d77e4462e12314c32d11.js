"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8201],{

/***/ 98201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMAND_BUS_CONNECT": function() { return /* binding */ COMMAND_BUS_CONNECT; },
/* harmony export */   "COMMAND_BUS_DISCONNECT": function() { return /* binding */ COMMAND_BUS_DISCONNECT; },
/* harmony export */   "COMMAND_SIMULATOR_START": function() { return /* binding */ COMMAND_SIMULATOR_START; },
/* harmony export */   "default": function() { return /* binding */ SimulatorCommands; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15861);
/* harmony import */ var _jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43850);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _CommandPaletteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3975);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46196);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62070);
/* harmony import */ var _HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55630);
var COMMAND_BUS_CONNECT="bus.connect";var COMMAND_BUS_DISCONNECT="bus.disconnect";var COMMAND_SIMULATOR_START="simulator.start";function SimulatorCommands(){var{addCommands}=(0,_CommandPaletteContext__WEBPACK_IMPORTED_MODULE_2__/* .useCommandPalette */ .nH)();var{addHostedSimulator}=(0,_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)();(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>addCommands([{id:COMMAND_BUS_CONNECT,description:"start connecting the bus",handler:bus=>bus.connect()},{id:COMMAND_BUS_DISCONNECT,description:"disconnect the bus",handler:bus=>bus.disconnect()},{id:COMMAND_SIMULATOR_START,description:"Starts a simulator from a named template, service name or service class",help:()=>"\nThis command launches a simulator from the list of existing simulator templates.\n\n```typescript\n    ...\n    args: {\n        // template name, service name or service class\n        name: string \n    }\n```\n\n* hosted names: "+(0,_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__/* .hostedSimulatorDefinitions */ .JF)().map(s=>"`\""+s.name+"\"`").join(", ")+"\n* simulator names: "+(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__/* .serviceProviderDefinitions */ .a3)().map(s=>"`\""+s.name+"\"`").join(", ")+"\n* service names: "+(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .serviceSpecifications */ .Le)().filter(sc=>!(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .isInfrastructure */ .lz)(sc)).map(s=>"`\""+s.shortId+"\"`").join(", ")+"\n",handler:function(){var _handler=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(function*(bus,args){var{name}=args;var hdef=(0,_HostedSimulatorsContext__WEBPACK_IMPORTED_MODULE_5__/* .hostedSimulatorDefinitions */ .JF)().find(h=>h.name===name);if(hdef){addHostedSimulator(hdef);return;}var def=(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__/* .serviceProviderDefinitions */ .a3)().find(d=>d.name===name);if(def){(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__/* .addServiceProvider */ .Q6)(bus,def);return;}var srv=(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_4__/* .serviceSpecificationFromName */ .kB)(name);if(srv){(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__/* .startServiceProviderFromServiceClass */ .V6)(bus,srv.classIdentifier);return;}var id=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_3__/* .parseIdentifier */ .ti)(name);if(id){(0,_jacdac_ts_src_servers_servers__WEBPACK_IMPORTED_MODULE_0__/* .startServiceProviderFromServiceClass */ .V6)(bus,id);return;}throw new Error("simulator "+name+" not found");});function handler(_x,_x2){return _handler.apply(this,arguments);}return handler;}()}]),[]);return null;}

/***/ })

}]);
//# sourceMappingURL=8201-d77e4462e12314c32d11.js.map