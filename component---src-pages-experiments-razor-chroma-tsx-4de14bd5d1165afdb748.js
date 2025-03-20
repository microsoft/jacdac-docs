"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4083],{

/***/ 90:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chroma; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43144);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12094);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3964);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63339);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15725);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76914);








/**
 * Razor Chroma SDK client
 * Docs: https://assets.razerzone.com/dev_portal/REST/html/index.html
 */

var ChromaClient = /*#__PURE__*/function (_JDClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ChromaClient, _JDClient); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  function ChromaClient() {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.supported = true;

    _this.mount(() => _this.stop());

    return _this;
  }

  var _proto = ChromaClient.prototype;

  _proto.startHeartbeat = function startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.unmounted) clearInterval(this.heartbeatInterval);
      this.fetch("/heartbeat", "PUT");
    }, 2000);
  };

  _proto.start = /*#__PURE__*/function () {
    var _start = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      if (!this.supported || this.connected) return;
      console.debug("razor: connecting", {
        conn: this.connectionInfo
      });
      var resp = yield fetch("https://chromasdk.io:54236/razer/chromasdk", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          title: "Microsoft Jacdac",
          description: "Jacdac interface to Razer",
          author: {
            name: "Microsoft",
            contact: "jacdac@microsoft.com"
          },
          device_supported: ["keyboard", "mouse", "headset", "mousepad", "keypad", "chromalink"],
          category: "application"
        })
      });
      console.log({
        resp
      });
      if (this.unmounted) return;

      if (resp.status === 200) {
        this.connectionInfo = yield resp.json();
        if (this.unmounted) return;
        this.startHeartbeat();
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      } else if (resp.status == 404) {
        this.supported = false;
        console.log("razor not supported");
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver);
      }
    });

    function start() {
      return _start.apply(this, arguments);
    }

    return start;
  }();

  _proto.stop = /*#__PURE__*/function () {
    var _stop = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
      console.debug("razor: disconnecting");

      if (this.heartbeatInterval) {
        clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = undefined;
      }

      if (this.connectionInfo) {
        var {
          uri
        } = this.connectionInfo;
        this.connectionInfo = undefined;

        try {
          yield fetch(uri, {
            method: "DELETE",
            headers: {
              "content-type": "application/json"
            }
          });
        } catch (e) {
          console.debug(e);
        }
      }
    });

    function stop() {
      return _stop.apply(this, arguments);
    }

    return stop;
  }();

  _proto.startHeadsetEffect = /*#__PURE__*/function () {
    var _startHeadsetEffect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (effect, data) {
      var body;
      var ceffect = "CHROMA_" + effect.toUpperCase();

      if (ceffect === "CHROMA_NONE") {
        body = {
          effect: ceffect
        };
      } else if (ceffect === "CHROMA_CUSTOM") {
        body = {
          effect: ceffect,
          param: data
        };
      } else if (ceffect === "CHROMA_STATIC") {
        var color = {
          color: data
        };
        body = {
          effect: ceffect,
          param: color
        };
      }

      yield this.fetch("/headset", "PUT", body);
    });

    function startHeadsetEffect(_x4, _x5) {
      return _startHeadsetEffect.apply(this, arguments);
    }

    return startHeadsetEffect;
  }();

  _proto.fetch = function (_fetch) {
    function fetch(_x, _x2, _x3) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* (path, method, body) {
      yield this.start();
      if (!this.connected) return;

      try {
        yield fetch(this.connectionInfo.uri + path, {
          method,
          body: body && JSON.stringify(body),
          headers: {
            "content-type": "application/json"
          }
        });
      } catch (e) {
        this.connectionInfo = undefined;
      }
    });

    return function (_x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(ChromaClient, [{
    key: "connected",
    get: function get() {
      return !!this.connectionInfo;
    }
  }]);

  return ChromaClient;
}(_jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_1__/* .JDClient */ .z);

function Chroma() {
  var {
    0: client
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new ChromaClient());
  var connected = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(client, c => c.connected); // make sure to cleanup

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    client.start(); // async

    return () => client.unmount();
  }, []);

  var handleStatic = v => /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
    yield client.startHeadsetEffect("static", v);
  });

  var handleCustom = v => /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function* () {
    yield client.startHeadsetEffect("custom", v);
  }); // color: BGR


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "connected: ", connected ? "connected" : "disconnected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    onClick: handleStatic(0xff0000)
  }, "headset 255"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    onClick: handleStatic(0x00ff00)
  }, "headset 128"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    onClick: handleStatic(0x0000ff)
  }, "headset 0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    onClick: handleCustom([0, 64, 128, 196, 255])
  }, "headset custom")));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-experiments-razor-chroma-tsx-4de14bd5d1165afdb748.js.map