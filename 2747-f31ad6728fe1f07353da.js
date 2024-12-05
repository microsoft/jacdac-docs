/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
(() => {
  // devicescript-worker.ts
  importScripts(
    "https://microsoft.github.io/devicescript/dist/devicescript-compiler.js"
  );
  var { compile } = self.deviceScript;
  var WorkerHost = class {
    constructor(specs) {
      this.specs = specs;
      this.files = {};
      this.logs = "";
      this.errors = [];
      this.error = this.error.bind(this);
    }
    files;
    logs;
    errors;
    mainFileName() {
      return "";
    }
    write(filename, contents) {
      this.files[filename] = contents;
    }
    log(msg) {
      this.logs += msg + "\n";
    }
    error(err) {
      console.log(err);
      const { filename, line, messageText } = err;
      this.errors.push({
        filename,
        message: messageText,
        line
      });
    }
    getSpecs() {
      return this.specs;
    }
    verifyBytecode(buf, dbg) {
    }
  };
  var serviceSpecs;
  var DEVICESCRIPT_PREFIX = 'import * as ds from "@devicescript/core"';
  var handlers = {
    compile: async (props) => {
      let { source = "" } = props;
      if (!serviceSpecs)
        throw new Error("specs missing");
      let lineOffset = 0;
      if (source.indexOf(DEVICESCRIPT_PREFIX) < 0) {
        source = DEVICESCRIPT_PREFIX + "\n\n" + source;
        lineOffset = 2;
      }
      const host = new WorkerHost(serviceSpecs);
      const res = compile(source, { host });
      return {
        ...res,
        files: host.files,
        logs: host.logs,
        errors: host.errors.map(({ line, ...rest }) => ({
          ...rest,
          line: line - lineOffset
        }))
      };
    },
    specs: async (props) => {
      serviceSpecs = props.serviceSpecs;
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
    if (worker !== "devicescript")
      return;
    try {
      const result = await processMessage(message);
      if (result) {
        const resp = { id, worker, ...rest, ...result };
        self.postMessage(resp);
      }
    } catch (e) {
      console.debug(`devicescript: error ${e + ""}`, e);
      self.postMessage({
        id,
        type,
        worker,
        error: e + ""
      });
    }
  }
  self.addEventListener("message", handleMessage);
  console.debug(`devicescript: worker registered`);
})();
//# sourceMappingURL=devicescript-worker.js.map

/******/ })()
;
//# sourceMappingURL=2747-f31ad6728fe1f07353da.js.map