/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
(() => {
  // vm-worker.ts
  importScripts(
    "https://microsoft.github.io/devicescript/dist/devicescript-vm.js"
  );
  console.log(Module);
  var init = Module().then((m) => {
    m.sendPacket = (data) => {
      self.postMessage({
        worker: "vm",
        type: "packet",
        data
      });
    };
    m.devsStart();
    return m;
  });
  var handlers = {
    packet: (props) => {
      const { data } = props;
      init.then((m) => m.handlePacket(data));
      return void 0;
    },
    // not used
    deploy: async (props) => {
      const { binary, debugInfo, restart } = props;
      const Module2 = await init;
      const verificationError = Module2.devsDeploy(binary);
      if (verificationError != 0) {
        console.log("verification error: " + verificationError);
        return { verificationError };
      }
      return {};
    }
  };
  function processMessage(message) {
    try {
      const handler = handlers[message.type];
      return handler?.(message);
    } catch (e) {
      console.debug(e);
      return void 0;
    }
  }
  async function handleMessage(event) {
    const message = event.data;
    const { id, worker, type, ...rest } = message;
    if (worker !== "vm")
      return;
    try {
      const result = await processMessage(message);
      if (result) {
        const resp = { id, worker, ...rest, ...result };
        self.postMessage(resp);
      }
    } catch (e) {
      console.debug(`devicescript vm: error ${e + ""}`, e);
      self.postMessage({
        id,
        type,
        worker,
        error: e + ""
      });
    }
  }
  self.addEventListener("message", handleMessage);
  console.debug(`devicescript vm: worker registered`);
})();
//# sourceMappingURL=vm-worker.js.map

/******/ })()
;
//# sourceMappingURL=6812-bb808a282b52741081e3.js.map