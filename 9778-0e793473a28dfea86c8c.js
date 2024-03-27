"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9778],{

/***/ 69778:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InstallPWAButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useWindowEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76914);
/* harmony import */ var _hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92513);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37862);
function usePWAInfo(){var standAlone=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{var _window$matchMedia,_window,_window$matchMedia$ca;return typeof window!=="undefined"&&!!((_window$matchMedia=(_window=window).matchMedia)!==null&&_window$matchMedia!==void 0&&(_window$matchMedia$ca=_window$matchMedia.call(_window,"(display-mode: standalone)"))!==null&&_window$matchMedia$ca!==void 0&&_window$matchMedia$ca.matches);},[]);return{standAlone};}function InstallPWAButton(props){var{standAlone}=usePWAInfo();var{0:visible,1:setVisible}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{0:promptInstall,1:setPromptInstall}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);var{enqueueSnackbar}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();var{trackEvent}=(0,_hooks_useAnalytics__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();// listen for prompt
(0,_hooks_useWindowEvent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(// eslint-disable-next-line @typescript-eslint/no-explicit-any
"beforeinstallprompt",e=>{trackEvent("app.beforeinstall");e.preventDefault();setVisible(true);setPromptInstall(e);},false,[]);// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,_hooks_useWindowEvent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("appinstalled",()=>{trackEvent("app.installed");setVisible(false);enqueueSnackbar("Jacdac app installed!","success");});// detect installed apps
/*
    useEffectAsync(async () => {
        if (
            typeof window === "undefined" ||
            !("getInstalledRelatedApps" in navigator)
        )
            return

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const apps = await (navigator as any).getInstalledRelatedApps()
            console.log("installed apps", { apps })
        } catch (e) {
            console.debug(e)
        }
    }, [])
    */if(!visible||standAlone)return null;var onClick=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function*(evt){evt.preventDefault();yield promptInstall===null||promptInstall===void 0?void 0:promptInstall.prompt();});return function onClick(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,Object.assign({size:"small","aria-label":"Install application",title:"Install application",onClick:onClick,variant:"outlined"},props),"Install");}

/***/ })

}]);
//# sourceMappingURL=9778-0e793473a28dfea86c8c.js.map