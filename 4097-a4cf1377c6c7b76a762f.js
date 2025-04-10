"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[4097],{

/***/ 64097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectRoleDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3838);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42440);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2658);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23239);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63339);
/* harmony import */ var _services_RoleListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80827);
/* harmony import */ var _ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64720);
function SelectRoleDialog(props){var{service,onClose}=props;var open=!!service;var dialogId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var labelId=dialogId+"-label";var roleManager=(0,_services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();var roles=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(roleManager,rm=>rm===null||rm===void 0?void 0:rm.compatibleRoles(service),[service]);var currentRole=(0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(service,srv=>srv.role);var hasRoles=!!(roles!==null&&roles!==void 0&&roles.length);var handleClick=role=>/*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function*(){yield roleManager.setRole(service,role.name);onClose();});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{id:dialogId,"aria-labelledby":labelId,open:open,onClose:onClose},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_DialogTitleWithClose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{onClose:onClose,id:labelId},hasRoles?"Select a role":"No role available"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,hasRoles?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null,roles.map(role=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_services_RoleListItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{key:role.name,role:role,selected:currentRole===role.name,onClick:handleClick(role)}))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{variant:"body1"},"No roles available.")));}

/***/ })

}]);
//# sourceMappingURL=4097-a4cf1377c6c7b76a762f.js.map