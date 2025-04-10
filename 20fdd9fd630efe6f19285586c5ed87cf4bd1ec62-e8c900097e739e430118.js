"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8825,6749],{

/***/ 25449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var React = _interopRequireWildcard(__webpack_require__(67294));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), 'GitHub');
exports.Z = _default;

/***/ }),

/***/ 42643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CardContent_CardContent; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/cardContentClasses.js


function getCardContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiCardContent', slot);
}
const cardContentClasses = (0,generateUtilityClasses/* default */.Z)('MuiCardContent', ['root']);
/* harmony default export */ var CardContent_cardContentClasses = ((/* unused pure expression or super */ null && (cardContentClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/CardContent/CardContent.js


const _excluded = ["className", "component"];








const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getCardContentUtilityClass, classes);
};
const CardContentRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiCardContent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  };
});
const CardContent = /*#__PURE__*/react.forwardRef(function CardContent(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiCardContent'
  });
  const {
      className,
      component = 'div'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardContentRoot, (0,esm_extends/* default */.Z)({
    as: component,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var CardContent_CardContent = (CardContent);

/***/ }),

/***/ 82910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ semverCmp; }
/* harmony export */ });
/* unused harmony export versionTryParse */
function cmp(a,b){if(!a){if(!b)return 0;else return 1;}else if(!b)return-1;else{var d=a.major-b.major||a.minor-b.minor||a.patch-b.patch;if(d)return d;if(a.pre.length==0&&b.pre.length>0)return 1;if(a.pre.length>0&&b.pre.length==0)return-1;for(var i=0;i<a.pre.length+1;++i){var aa=a.pre[i];var bb=b.pre[i];if(!aa){if(!bb)return 0;else return-1;}else if(!bb)return 1;else if(/^\d+$/.test(aa)){if(/^\d+$/.test(bb)){d=parseInt(aa)-parseInt(bb);if(d)return d;}else return-1;}else if(/^\d+$/.test(bb))return 1;else{d=strcmp(aa,bb);if(d)return d;}}return 0;}}function versionTryParse(v){if(!v)return null;if("*"===v){return{major:Number.MAX_SAFE_INTEGER,minor:Number.MAX_SAFE_INTEGER,patch:Number.MAX_SAFE_INTEGER,pre:[],build:[]};}if(/^v\d/i.test(v))v=v.slice(1);var m=/^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);if(m)return{major:parseInt(m[1]),minor:parseInt(m[2]),patch:parseInt(m[3]),pre:m[5]?m[5].split("."):[],build:m[7]?m[7].split("."):[]};return null;}function strcmp(a,b){if(a===b)return 0;if(a<b)return-1;else return 1;}function semverCmp(a,b){var aa=versionTryParse(a);var bb=versionTryParse(b);if(!aa&&!bb)return strcmp(a,b);else return cmp(aa,bb);}

/***/ }),

/***/ 6603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E1": function() { return /* binding */ normalizeSlug; },
/* harmony export */   "Jo": function() { return /* binding */ parseRepoUrl; },
/* harmony export */   "wA": function() { return /* binding */ fetchLatestFirmwareRelease; },
/* harmony export */   "ck": function() { return /* binding */ rawUrl; },
/* harmony export */   "e0": function() { return /* binding */ fetchFirmwareReleaseBinary; },
/* harmony export */   "Ux": function() { return /* binding */ useRepository; },
/* harmony export */   "Vv": function() { return /* binding */ useLatestReleaseAsset; },
/* harmony export */   "B5": function() { return /* binding */ useLatestFirmwareRelease; },
/* harmony export */   "ET": function() { return /* binding */ useLatestFirmwareReleases; }
/* harmony export */ });
/* unused harmony exports GITHUB_API_KEY, fetchText, useFetchJSON, useLatestRelease */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var _jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82910);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34284);
var ROOT="https://api.github.com/";var GITHUB_API_KEY="githubtoken";function contentToFirmwareRelease(content){var _$exec;// filter out non-file, non-uf2
var version=(content===null||content===void 0?void 0:content.type)==="file"&&((_$exec=/^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name))===null||_$exec===void 0?void 0:_$exec[1]);if(!version)return undefined;return{version,sha:content.sha,size:content.size,html_url:content.html_url,download_url:content.download_url};}function contentsToFirmwareReleases(contents){return contents===null||contents===void 0?void 0:contents.map(contentToFirmwareRelease).filter(r=>!!r).sort((l,r)=>-(0,_jacdac_ts_src_jdom_semver__WEBPACK_IMPORTED_MODULE_1__/* .semverCmp */ .k)(l.version,r.version));}function normalizeSlug(slug){if(!slug)return{};var cleaned=slug.replace(/^https:\/\/github.com\//,"").replace(/\/tree\/master/,"");var parts=cleaned.split("/");return{repoPath:parts[0]+"/"+parts[1],owner:parts[0],name:parts[1],folder:parts.slice(2).join("/")};}function parseRepoUrl(url){var u=(url||"").replace(/\/tree\/master/,"");var m=/^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(u);if(m)return{owner:m[1],name:m[2]};return undefined;}function fetchLatestFirmwareRelease(_x,_x2){return _fetchLatestFirmwareRelease.apply(this,arguments);}function _fetchLatestFirmwareRelease(){_fetchLatestFirmwareRelease=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(slug,options){// https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
var{repoPath}=normalizeSlug(slug);var uri=ROOT+"repos/"+repoPath+"/contents/dist";var resp=yield fetch(uri);//    console.log(resp)
var{status}=resp;switch(status){case 200:case 204:{var contents=yield resp.json();var releases=contentsToFirmwareReleases(contents);return{release:releases[0],status};}case 404:// unknow repo or no access
return{status};case 403:// throttled
if(options!==null&&options!==void 0&&options.ignoreThrottled)return{status};throw new Error("Too many calls to GitHub, try again later");}throw new Error("unknown status code "+resp.status);});return _fetchLatestFirmwareRelease.apply(this,arguments);}function rawUrl(slug,branch,path){var{repoPath,folder}=normalizeSlug(slug);var url="https://raw.githubusercontent.com/"+[repoPath,branch,folder,path].filter(p=>!!p).join("/");return url;}function fetchFirmwareReleaseBinary(_x3,_x4){return _fetchFirmwareReleaseBinary.apply(this,arguments);}function _fetchFirmwareReleaseBinary(){_fetchFirmwareReleaseBinary=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(slug,version){// we are not using the release api because of CORS.
var{repoPath}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/main/dist/fw-"+version+".uf2";var req=yield fetch(downloadUrl,{headers:{Accept:"application/octet-stream"}});if(req.status==200){var firmware=yield req.blob();return firmware;}return undefined;});return _fetchFirmwareReleaseBinary.apply(this,arguments);}function fetchText(_x5,_x6,_x7,_x8){return _fetchText.apply(this,arguments);}function _fetchText(){_fetchText=_asyncToGenerator(function*(slug,tag,path,mimeType){var{repoPath,folder}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/"+tag+"/"+(folder?folder+"/":"")+path;var req=yield fetch(downloadUrl,{headers:{Accept:mimeType}});if(req.status==200){var src=yield req.text();return src;}return undefined;});return _fetchText.apply(this,arguments);}function useFetchApi(path,options){var res=(0,_useFetch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(path?""+ROOT+path:undefined);if(res.status!==undefined)switch(res.status){case 200:case 201:case 202:case 203:case 204:break;case 404:// unknow repo or no access
res.response=undefined;break;case 403:// throttled
if(options!==null&&options!==void 0&&options.ignoreThrottled){res.response=undefined;return res;}else throw new Error("Too many calls to GitHub, try again later");default:console.log("unknown status",res);throw new Error("Unknown response from GitHub "+res.status);}return res;}function useFetchJSON(slug,tag,path,mimeType){var{repoPath,folder}=normalizeSlug(slug);var downloadUrl="https://raw.githubusercontent.com/"+repoPath+"/"+tag+"/"+(folder?folder+"/":"")+path;return useFetch(downloadUrl,{headers:{Accept:mimeType}});}function useRepository(slug){var{repoPath}=normalizeSlug(slug);var path=repoPath?"repos/"+repoPath:undefined;var res=useFetchApi(path,{ignoreThrottled:true});return res;}function useLatestRelease(slug){var{repoPath}=normalizeSlug(slug);var path="repos/"+repoPath+"/releases/latest";var res=useFetchApi(path);return res;}function useLatestReleaseAsset(url){var[,slug,filename]=/^https:\/\/github.com\/(.+)\/releases\/latest\/download\/(.+)$/i.exec(url)||[];//console.log(`asset slug`, { url, slug })
if(!slug)return{status:404};var{status,response}=useLatestRelease(slug);if(status===200&&response){var{tag_name,name}=response;return{name,version:tag_name,assertUrl:"https://github.com/"+slug+"/releases/download/"+tag_name+"/"+filename};}else return{};}function useLatestFirmwareRelease(slug,options){var _resp$response;var resp=useLatestFirmwareReleases(slug,options);return Object.assign({},resp,{response:(_resp$response=resp.response)===null||_resp$response===void 0?void 0:_resp$response[0]});}function useLatestFirmwareReleases(slug,options){if(!slug)return{response:undefined,loading:false,error:undefined,status:undefined};var{repoPath}=normalizeSlug(slug);var uri="repos/"+repoPath+"/contents/dist";var res=useFetchApi(uri,Object.assign({},options||{},{ignoreThrottled:true}));return Object.assign({},res,{response:contentsToFirmwareReleases(res.response)});}

/***/ }),

/***/ 72975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GithubRepositoryCard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65295);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42643);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2658);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6603);
/* harmony import */ var _GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6885);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19811);
// tslint:disable-next-line: no-submodule-imports
var MakeCodeDependencies=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>__webpack_require__.e(/* import() */ 7191).then(__webpack_require__.bind(__webpack_require__, 57191)));function GithubRepositoryCard(props){var{slug,showRelease,showDescription,showDependencies,showMakeCodeButton,showMakeCodeImportButton}=props;var{response:repo}=(0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useRepository */ .Ux)(slug);var description=showDescription&&(repo===null||repo===void 0?void 0:repo.description);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{slug:slug,showRelease:showRelease,showMakeCodeButton:showMakeCodeButton,showMakeCodeImportButton:showMakeCodeImportButton}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,description&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,null,description),showDependencies&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeDependencies,{slug:slug,branch:(repo===null||repo===void 0?void 0:repo.default_branch)||"master"}))));}

/***/ }),

/***/ 6885:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ GithubRepositoryCardHeader; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(18515);
// EXTERNAL MODULE: ./src/components/github.ts
var github = __webpack_require__(6603);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/GitHub.js
var GitHub = __webpack_require__(25449);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(16821);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeOpenSnippetButton.tsx
var MakeCodeOpenSnippetButton = __webpack_require__(66749);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeGithubImportLink.tsx
// tslint:disable-next-line: no-submodule-imports
function MakeCodeGithubImportLink(props){var{slug}=props;var importUrl="https://makecode.microbit.org/#pub:github:"+slug;return/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{href:importUrl,target:"blank",underline:"hover",title:"open extension in MakeCode"},/*#__PURE__*/react.createElement(Typography/* default */.Z,{component:"span",variant:"h5"},slug));}
;// CONCATENATED MODULE: ./src/components/github/GithubRepositoryCardHeader.tsx
// tslint:disable-next-line: no-submodule-imports
function GithubRepositoryCardHeader(props){var{slug,showRelease,showMakeCodeButton,showMakeCodeImportButton}=props;var{repoPath,name:repoName}=(0,github/* normalizeSlug */.E1)(slug);var{response:release}=(0,github/* useLatestFirmwareRelease */.B5)(showRelease&&slug);return/*#__PURE__*/react.createElement(CardHeader/* default */.Z,{title:showMakeCodeImportButton?/*#__PURE__*/react.createElement(MakeCodeGithubImportLink,{slug:slug}):/*#__PURE__*/react.createElement(react.Fragment,null,slug),subheader:showRelease&&release&&/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{color:"textSecondary",target:"_blank",to:release.html_url},release.version),avatar:/*#__PURE__*/react.createElement(gatsby_theme_material_ui/* Link */.rU,{target:"_blank",underline:"hover",title:"Open repository in github.com",href:"https://github.com/"+repoPath},/*#__PURE__*/react.createElement(GitHub/* default */.Z,null)),action:showMakeCodeButton&&/*#__PURE__*/react.createElement(MakeCodeOpenSnippetButton["default"],{name:repoName+" with jacdac",slug:slug})});}

/***/ }),

/***/ 71348:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33502);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony default export */ __webpack_exports__["Z"] = (props=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,Object.assign({titleAccess:"MakeCode logo"},props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",strokeWidth:".75"})));

/***/ }),

/***/ 66749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MakeCodeOpenSnippetButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76914);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
/* harmony import */ var _icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71348);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48147);
/* harmony import */ var _hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11462);
/* harmony import */ var _hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37862);
/* harmony import */ var _makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9668);
function MakeCodeOpenSnippetButton(props){var{setError}=(0,_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();var{mobile}=(0,_hooks_useMediaQueries__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();var{0:importing,1:setImporting}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);var{sx,code="",options,name="Jacdac demo",slug,branch="master",full}=props;var pxt=(0,_makecode_usePxtJson__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(slug,branch);var disabled=importing||slug&&!pxt;var handleClick=/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(function*(){var _options$package;var md="\n";var target="microbit";var editor="https://makecode.microbit.org/";var deps=options===null||options===void 0?void 0:(_options$package=options.package)===null||_options$package===void 0?void 0:_options$package.split(",").map(dep=>dep.split("=",2));var dependencies=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .toMap */ .qL)(deps,deps=>deps[0],deps=>deps[1])||{};if(pxt)dependencies[pxt.name]="github:"+slug+"#v"+pxt.version;try{setImporting(true);var x=yield fetch("https://makecode.com/api/scripts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name,target,description:"Made with ❤️ in Microsoft Jacdac.",editor:"blocksprj",text:{"README.md":md,"main.blocks":code?"":"<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>","main.ts":code,"pxt.json":JSON.stringify({name:name,dependencies:Object.assign({core:"*",microphone:"*"},dependencies),description:"",files:["main.blocks","main.ts","README.md"]})},meta:{}})});var data=yield x.json();var url=editor+"#pub:"+data.shortid;window.open(url,"_blank","noreferrer");}catch(error){setError(error);}finally{setImporting(false);}});return function handleClick(){return _ref.apply(this,arguments);};}();if(mobile)// mobile blocks all popups
return undefined;return!full&&mobile?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{sx:sx,onClick:handleClick,color:"primary",disabled:disabled,title:"Try in MakeCode"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{sx:sx,variant:"outlined",color:"primary",onClick:handleClick,disabled:disabled,startIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons_MakeCodeIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null)},"Try in MakeCode");}

/***/ }),

/***/ 9668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ usePxtJson; }
/* harmony export */ });
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6603);
/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34284);
function usePxtJson(slug,branch){if(!slug)return undefined;var url=(0,_github__WEBPACK_IMPORTED_MODULE_0__/* .rawUrl */ .ck)(slug,branch,"pxt.json");var{response:pxtJson}=(0,_useFetch__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(url);return pxtJson;}

/***/ }),

/***/ 34284:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useFetch; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60763);
function useFetch(url,options){var{0:response,1:setResponse}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);// eslint-disable-next-line @typescript-eslint/no-explicit-any
var{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:status,1:setStatus}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);var{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);// start in loading mode
(0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(/*#__PURE__*/function(){var _ref=(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function*(mounted){setLoading(true);try{if(!url){setStatus(404);setResponse(undefined);}else{var res=yield fetch(url,options);if(!mounted())return;var _status=res.status;setStatus(_status);if(_status>=200&&_status<=204){var json=yield res.json();if(!mounted())return;setResponse(json);}}}catch(error){if(!mounted())return;setError(error);}finally{if(mounted())setLoading(false);}});return function(_x){return _ref.apply(this,arguments);};}(),[url]);return{response,error,status,loading};}

/***/ })

}]);
//# sourceMappingURL=20fdd9fd630efe6f19285586c5ed87cf4bd1ec62-e8c900097e739e430118.js.map