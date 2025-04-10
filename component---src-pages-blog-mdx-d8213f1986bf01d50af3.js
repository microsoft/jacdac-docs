"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9237],{

/***/ 70558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; }
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(11151);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(24503);
// EXTERNAL MODULE: ./src/components/ui/PageLinkList.tsx
var PageLinkList = __webpack_require__(5754);
;// CONCATENATED MODULE: ./src/components/blog/BlogEntries.tsx
function BlogEntries(props){var{header}=props;var query=(0,gatsby_browser_entry.useStaticQuery)("2414203395");return/*#__PURE__*/react.createElement(PageLinkList/* default */.Z,{header:header,nodes:(0,PageLinkList/* pageQueryToNodes */.t)(query)});}
;// CONCATENATED MODULE: ./src/pages/blog.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/




function _createMdxContent(props) {
  var _components = Object.assign({
    h1: "h1",
    a: "a",
    div: "div",
    p: "p"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(_components.h1, {
    id: "jacdac-blog",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react.createElement(_components.a, {
    href: "#jacdac-blog",
    "aria-label": "jacdac blog permalink",
    className: "anchor before"
  }, /*#__PURE__*/react.createElement(_components.div, {
    dangerouslySetInnerHTML: {
      __html: "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>"
    }
  })), "Jacdac Blog"), "\n", /*#__PURE__*/react.createElement(_components.p, null, "This blog is also cross-posted on ", /*#__PURE__*/react.createElement(_components.a, {
    href: "https://medium.com/@jacdac",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "medium"), "."), "\n", /*#__PURE__*/react.createElement(BlogEntries));
}

function MDXContent(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    wrapper: MDXLayout
  } = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? /*#__PURE__*/react.createElement(MDXLayout, props, /*#__PURE__*/react.createElement(_createMdxContent, props)) : _createMdxContent(props);
}

/* harmony default export */ var blog = (MDXContent);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-blog-mdx-d8213f1986bf01d50af3.js.map