(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[580,7933,4659],{

/***/ 5845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ni": function() { return /* reexport */ emotion_element_04d85134_browser_esm_ThemeContext; },
  "Xn": function() { return /* reexport */ emotion_element_04d85134_browser_esm_withEmotionCache; }
});

// UNUSED EXPORTS: CacheProvider, ClassNames, Global, createElement, css, jsx, keyframes

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(94578);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ var stylis_browser_esm = (stylis_min);

;// CONCATENATED MODULE: ./node_modules/@emotion/core/node_modules/@emotion/cache/dist/cache.browser.esm.js




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_browser_esm(stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ var cache_browser_esm = (createCache);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var helpers_inheritsLoose = __webpack_require__(85354);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(5565);
;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js






var emotion_element_04d85134_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/(0,react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? cache_browser_esm() : null);
var emotion_element_04d85134_browser_esm_ThemeContext = /*#__PURE__*/(0,react.createContext)({});
var CacheProvider = EmotionCacheContext.Provider;

var emotion_element_04d85134_browser_esm_withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,react.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,react.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var emotion_element_04d85134_browser_esm_createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_04d85134_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/createElement(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/createElement(Noop, null);


  return /*#__PURE__*/createElement(Fragment, null, possiblyStyleElement, ele);
}; // eslint-disable-next-line no-undef


var emotion_element_04d85134_browser_esm_Emotion = /* #__PURE__ */(/* unused pure expression or super */ null && (emotion_element_04d85134_browser_esm_withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/createElement(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
})));

if (false) {}



// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(68087);
;// CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js


function css_browser_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

/* harmony default export */ var css_browser_esm = ((/* unused pure expression or super */ null && (css_browser_esm_css)));

;// CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/createElement(ThemeContext.Consumer, null, function (theme) {
      var serialized = serializeStyles([styles(theme)]);
      return /*#__PURE__*/createElement(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = serializeStyles([styles]);
  return /*#__PURE__*/createElement(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
})));

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      (0,utils_browser_esm/* insertStyles */.M)(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react.Component);

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,utils_browser_esm/* getRegisteredStyles */.f)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var core_browser_esm_Noop = function Noop() {
  return null;
};

var ClassNames = emotion_element_04d85134_browser_esm_withEmotionCache(function (props, context) {
  return /*#__PURE__*/(0,react.createElement)(emotion_element_04d85134_browser_esm_ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = (0,serialize_browser_esm/* serializeStyles */.O)(args, context.registered);

      {
        (0,utils_browser_esm/* insertStyles */.M)(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {}

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    var possiblyStyleElement = /*#__PURE__*/(0,react.createElement)(core_browser_esm_Noop, null);


    return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, possiblyStyleElement, ele);
  });
});




/***/ }),

/***/ 5565:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": function() { return /* binding */ serializeStyles; }
});

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 68087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ getRegisteredStyles; },
/* harmony export */   "M": function() { return /* binding */ insertStyles; }
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 52900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');
exports.Z = _default;

/***/ }),

/***/ 54048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew');
exports.Z = _default;

/***/ }),

/***/ 12177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));
var _jsxRuntime = __webpack_require__(85893);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), 'SaveAlt');
exports.Z = _default;

/***/ }),

/***/ 84592:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ getListItemIconUtilityClass; }
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1588);
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34867);


function getListItemIconUtilityClass(slot) {
  return (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
/* harmony default export */ __webpack_exports__["Z"] = (listItemIconClasses);

/***/ }),

/***/ 33797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MenuItem_MenuItem; }
});

// UNUSED EXPORTS: overridesResolver

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(94780);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(41796);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(59773);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 6 modules
var ButtonBase = __webpack_require__(76637);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(58974);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(51705);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/dividerClasses.js
var dividerClasses = __webpack_require__(35097);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
var listItemIconClasses = __webpack_require__(84592);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(26336);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.Z)('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ var MenuItem_menuItemClasses = (menuItemClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js


const _excluded = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses = ownerState => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getMenuItemUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
};
const MenuItemRoot = (0,styled/* default */.ZP)(ButtonBase/* default */.Z, {
  shouldForwardProp: prop => (0,styled/* rootShouldForwardProp */.FO)(prop) || prop === 'classes',
  name: 'MuiMenuItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({}, theme.typography.body1, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, {
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${MenuItem_menuItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${dividerClasses/* default.root */.Z.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses/* default.inset */.Z.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses/* default.root */.Z.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses/* default.inset */.Z.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses/* default.root */.Z.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up('sm')]: {
    minHeight: 'auto'
  }
}, ownerState.dense && (0,esm_extends/* default */.Z)({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${listItemIconClasses/* default.root */.Z.root} svg`]: {
    fontSize: '1.25rem'
  }
})));
const MenuItem = /*#__PURE__*/react.forwardRef(function MenuItem(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiMenuItem'
  });
  const {
      autoFocus = false,
      component = 'li',
      dense = false,
      divider = false,
      disableGutters = false,
      focusVisibleClassName,
      role = 'menuitem',
      tabIndex: tabIndexProp,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const context = react.useContext(ListContext/* default */.Z);
  const childContext = react.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = react.useRef(null);
  (0,useEnhancedEffect/* default */.Z)(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });
  const classes = useUtilityClasses(props);
  const handleRef = (0,useForkRef/* default */.Z)(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default.Provider */.Z.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemRoot, (0,esm_extends/* default */.Z)({
      ref: handleRef,
      role: role,
      tabIndex: tabIndex,
      component: component,
      focusVisibleClassName: (0,clsx_m/* default */.Z)(classes.focusVisible, focusVisibleClassName),
      className: (0,clsx_m/* default */.Z)(classes.root, className)
    }, other, {
      ownerState: ownerState,
      classes: classes
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ var MenuItem_MenuItem = (MenuItem);

/***/ }),

/***/ 94659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TextField_TextField; }
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(57579);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(90948);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(71657);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js
var Input = __webpack_require__(79332);
// EXTERNAL MODULE: ./node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(6135);
// EXTERNAL MODULE: ./node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(32580);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(27666);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(76446);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(3460);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(56036);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(1588);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(34867);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/textFieldClasses.js


function getTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTextField', slot);
}
const textFieldClasses = (0,generateUtilityClasses/* default */.Z)('MuiTextField', ['root']);
/* harmony default export */ var TextField_textFieldClasses = ((/* unused pure expression or super */ null && (textFieldClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/TextField/TextField.js


const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];

















const variantComponent = {
  standard: Input/* default */.Z,
  filled: FilledInput/* default */.Z,
  outlined: OutlinedInput/* default */.Z
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = (0,styled/* default */.ZP)(FormControl/* default */.Z, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/react.forwardRef(function TextField(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  const InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }
  const id = (0,useId/* default */.Z)(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/(0,jsx_runtime.jsx)(InputComponent, (0,esm_extends/* default */.Z)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextFieldRoot, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label != null && label !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.Z, (0,esm_extends/* default */.Z)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.Z, (0,esm_extends/* default */.Z)({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.Z, (0,esm_extends/* default */.Z)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ var TextField_TextField = (TextField);

/***/ }),

/***/ 61284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(67294));
var emotion_theming_1 = __webpack_require__(76861);
var elements_1 = __webpack_require__(11096);
var Formatted_1 = __importDefault(__webpack_require__(6110));
var Object_1 = __importDefault(__webpack_require__(30965));
var Error_1 = __importDefault(__webpack_require__(99777));
// https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
var reSubstitutions = /(%[coOs])|(%(([0-9]*[.])?[0-9]+)?[dif])/g;
var ConsoleMessage = /** @class */ (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function (theme) { return (__assign(__assign({}, theme), { method: _this.props.log.method })); };
        return _this;
    }
    ConsoleMessage.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.log.amount !== nextProps.log.amount;
    };
    ConsoleMessage.prototype.render = function () {
        var log = this.props.log;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Message, { "data-method": log.method },
                log.amount > 1 ? React.createElement(elements_1.AmountIcon, null, log.amount) : React.createElement(elements_1.Icon, null),
                log.timestamp ? React.createElement(elements_1.Timestamp, null, log.timestamp) : React.createElement("span", null),
                React.createElement(elements_1.Content, null, this.getNode()))));
    };
    ConsoleMessage.prototype.getNode = function () {
        var _a;
        var log = this.props.log;
        // Error handling
        var error = this.typeCheck(log);
        if (error)
            return error;
        // Chrome formatting
        if (log.data.length > 0 && typeof log.data[0] === 'string') {
            var matchLength = (_a = log.data[0].match(reSubstitutions)) === null || _a === void 0 ? void 0 : _a.length;
            if (matchLength) {
                var restData = log.data.slice(1 + matchLength);
                return (React.createElement(React.Fragment, null,
                    React.createElement(Formatted_1["default"], { data: log.data }),
                    restData.length > 0 && (React.createElement(Object_1["default"], { quoted: false, log: __assign(__assign({}, log), { data: restData }), linkifyOptions: this.props.linkifyOptions }))));
            }
        }
        // Error panel
        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
            log.method === 'error') {
            return React.createElement(Error_1["default"], { error: log.data.join(' ') });
        }
        // Normal inspector
        var quoted = typeof log.data[0] !== 'string';
        return (React.createElement(Object_1["default"], { log: log, quoted: quoted, linkifyOptions: this.props.linkifyOptions }));
    };
    ConsoleMessage.prototype.typeCheck = function (log) {
        if (!log) {
            return (React.createElement(Formatted_1["default"], { data: [
                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
                    'color: red',
                    'color: orange',
                    'color: cyan',
                ] }));
        }
        else if (!(log.data instanceof Array)) {
            return (React.createElement(Formatted_1["default"], { data: [
                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
                    'color: red',
                    'color: orange',
                    'color: cyan',
                ] }));
        }
        return false;
    };
    return ConsoleMessage;
}(React.Component));
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBRTlCLG1EQUErQztBQUUvQyx1Q0FBMEU7QUFFMUUsMEVBQW1EO0FBQ25ELG9FQUFpRDtBQUNqRCxrRUFBZ0Q7QUFFaEQsc0ZBQXNGO0FBQ3RGLElBQU0sZUFBZSxHQUFHLDBDQUEwQyxDQUFBO0FBRWxFO0lBQTZCLGtDQUFrQztJQUEvRDtRQUFBLHFFQStGQztRQTFGQyxXQUFLLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSx1QkFDckIsS0FBSyxLQUNSLE1BQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQzdCLEVBSHdCLENBR3hCLENBQUE7O0lBdUZKLENBQUM7SUE5RkMsOENBQXFCLEdBQXJCLFVBQXNCLFNBQVM7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDdkQsQ0FBQztJQU9ELCtCQUFNLEdBQU47UUFDVSxJQUFBLEdBQUcsR0FBSyxJQUFJLENBQUMsS0FBSyxJQUFmLENBQWU7UUFDMUIsT0FBTyxDQUNMLG9CQUFDLCtCQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLGtCQUFPLG1CQUFjLEdBQUcsQ0FBQyxNQUFNO2dCQUM3QixHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQUMscUJBQVUsUUFBRSxHQUFHLENBQUMsTUFBTSxDQUFjLENBQUMsQ0FBQyxDQUFDLG9CQUFDLGVBQUksT0FBRztnQkFDakUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsb0JBQUMsb0JB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

/***/ }),

/***/ 32477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var string_utils_1 = __webpack_require__(42903);
function createAppend(s) {
    var container = document.createDocumentFragment();
    container.appendChild(document.createTextNode(s));
    return container;
}
/**
 * @param {string} format
 * @param {!Array.<!SDK.RemoteObject>} parameters
 * @param {!Element} formattedResult
 */
function formatWithSubstitutionString(format, parameters, formattedResult) {
    var formatters = {};
    function stringFormatter(obj) {
        if (typeof obj !== 'string') {
            return '';
        }
        return String(obj);
    }
    function floatFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return obj;
    }
    function integerFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return Math.floor(obj);
    }
    var currentStyle = null;
    function styleFormatter(obj) {
        currentStyle = {};
        var buffer = document.createElement('span');
        buffer.setAttribute('style', obj);
        for (var i = 0; i < buffer.style.length; i++) {
            var property = buffer.style[i];
            if (isWhitelistedProperty(property))
                currentStyle[property] = buffer.style[property];
        }
    }
    function isWhitelistedProperty(property) {
        var prefixes = [
            'background',
            'border',
            'color',
            'font',
            'line',
            'margin',
            'padding',
            'text',
            '-webkit-background',
            '-webkit-border',
            '-webkit-font',
            '-webkit-margin',
            '-webkit-padding',
            '-webkit-text'
        ];
        for (var i = 0; i < prefixes.length; i++) {
            if (property.startsWith(prefixes[i]))
                return true;
        }
        return false;
    }
    formatters.s = stringFormatter;
    formatters.f = floatFormatter;
    // Firebug allows both %i and %d for formatting integers.
    formatters.i = integerFormatter;
    formatters.d = integerFormatter;
    // Firebug uses %c for styling the message.
    formatters.c = styleFormatter;
    function append(a, b) {
        if (b instanceof Node) {
            a.appendChild(b);
        }
        else if (typeof b !== 'undefined') {
            var toAppend = createAppend(String(b));
            if (currentStyle) {
                var wrapper = document.createElement('span');
                wrapper.appendChild(toAppend);
                applyCurrentStyle(wrapper);
                for (var i = 0; i < wrapper.children.length; ++i)
                    applyCurrentStyle(wrapper.children[i]);
                toAppend = wrapper;
            }
            a.appendChild(toAppend);
        }
        return a;
    }
    /**
     * @param {!Element} element
     */
    function applyCurrentStyle(element) {
        for (var key in currentStyle)
            element.style[key] = currentStyle[key];
    }
    // String.format does treat formattedResult like a Builder, result is an object.
    return string_utils_1.String.format(format, parameters, formatters, formattedResult, append);
}
exports["default"] = formatWithSubstitutionString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9mb3JtYXQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUV0RCxTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzdCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO0lBQ25ELFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWpELE9BQU8sU0FBUyxDQUFBO0FBQ2xCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBd0IsNEJBQTRCLENBQ2xELE1BQVcsRUFDWCxVQUFlLEVBQ2YsZUFBb0I7SUFFcEIsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFBO0lBRTFCLFNBQVMsZUFBZSxDQUFDLEdBQVE7UUFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUE7U0FDVjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFRO1FBQzlCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBQ3pDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBUTtRQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVELElBQUksWUFBWSxHQUFRLElBQUksQ0FBQTtJQUM1QixTQUFTLGNBQWMsQ0FBQyxHQUFRO1FBQzlCLFlBQVksR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBTSxN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

/***/ }),

/***/ 32880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var html_1 = __importDefault(__webpack_require__(56163));
var format_message_1 = __importDefault(__webpack_require__(32477));
/**
 * Formats a console log message using the Devtools parser and returns HTML
 * @param args The arguments passed to the console method
 */
function formatMessage(args) {
    var formattedResult = document.createElement('span');
    format_message_1["default"](args[0], args.slice(1), formattedResult);
    return html_1["default"](formattedResult.outerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />'));
}
exports["default"] = formatMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFvQztBQUNwQyxvRUFBa0Q7QUFFbEQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhLENBQUMsSUFBVztJQUNoQyxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXRELDJCQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBRTVELE9BQU8saUJBQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFFRCxxQkFBZSxhQUFhLENBQUEifQ==

/***/ }),

/***/ 42903:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// Taken from the source of chrome devtools:
// https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/platform/utilities.js#L805-L1006
exports.__esModule = true;
exports.String = void 0;
// Copyright 2014 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
var String;
(function (String) {
    /**
     * @param {string} string
     * @param {number} index
     * @return {boolean}
     */
    function isDigitAt(string, index) {
        var c = string.charCodeAt(index);
        return 48 <= c && c <= 57;
    }
    /**
     * @param {string} format
     * @param {!Object.<string, function(string, ...):*>} formatters
     * @return {!Array.<!Object>}
     */
    function tokenizeFormatString(format, formatters) {
        var tokens = [];
        var substitutionIndex = 0;
        function addStringToken(str) {
            if (tokens.length && tokens[tokens.length - 1].type === 'string')
                tokens[tokens.length - 1].value += str;
            else
                tokens.push({ type: 'string', value: str });
        }
        function addSpecifierToken(specifier, precision, substitutionIndex) {
            tokens.push({
                type: 'specifier',
                specifier: specifier,
                precision: precision,
                substitutionIndex: substitutionIndex
            });
        }
        var index = 0;
        for (var precentIndex = format.indexOf('%', index); precentIndex !== -1; precentIndex = format.indexOf('%', index)) {
            if (format.length === index)
                // unescaped % sign at the end of the format string.
                break;
            addStringToken(format.substring(index, precentIndex));
            index = precentIndex + 1;
            if (format[index] === '%') {
                // %% escape sequence.
                addStringToken('%');
                ++index;
                continue;
            }
            if (isDigitAt(format, index)) {
                // The first character is a number, it might be a substitution index.
                var number = parseInt(format.substring(index), 10);
                while (isDigitAt(format, index))
                    ++index;
                // If the number is greater than zero and ends with a "$",
                // then this is a substitution index.
                if (number > 0 && format[index] === '$') {
                    substitutionIndex = number - 1;
                    ++index;
                }
            }
            var precision = -1;
            if (format[index] === '.') {
                // This is a precision specifier. If no digit follows the ".",
                // then the precision should be zero.
                ++index;
                precision = parseInt(format.substring(index), 10);
                if (isNaN(precision))
                    precision = 0;
                while (isDigitAt(format, index))
                    ++index;
            }
            if (!(format[index] in formatters)) {
                addStringToken(format.substring(precentIndex, index + 1));
                ++index;
                continue;
            }
            addSpecifierToken(format[index], precision, substitutionIndex);
            ++substitutionIndex;
            ++index;
        }
        addStringToken(format.substring(index));
        return tokens;
    }
    /**
     * @param {string} format
     * @param {?ArrayLike} substitutions
     * @param {!Object.<string, function(string, ...):Q>} formatters
     * @param {!T} initialValue
     * @param {function(T, Q): T|undefined} append
     * @param {!Array.<!Object>=} tokenizedFormat
     * @return {!{formattedResult: T, unusedSubstitutions: ?ArrayLike}};
     * @template T, Q
     */
    function format(format, substitutions, formatters, initialValue, append, tokenizedFormat) {
        if (!format || !substitutions || !substitutions.length)
            return {
                formattedResult: append(initialValue, format),
                unusedSubstitutions: substitutions
            };
        function prettyFunctionName() {
            return ('String.format("' +
                format +
                '", "' +
                Array.prototype.join.call(substitutions, '", "') +
                '")');
        }
        function warn(msg) {
            console.warn(prettyFunctionName() + ': ' + msg);
        }
        function error(msg) {
            console.error(prettyFunctionName() + ': ' + msg);
        }
        var result = initialValue;
        var tokens = tokenizedFormat || tokenizeFormatString(format, formatters);
        var usedSubstitutionIndexes = {};
        for (var i = 0; i < tokens.length; ++i) {
            var token = tokens[i];
            if (token.type === 'string') {
                result = append(result, token.value);
                continue;
            }
            if (token.type !== 'specifier') {
                error('Unknown token type "' + token.type + '" found.');
                continue;
            }
            if (token.substitutionIndex >= substitutions.length) {
                // If there are not enough substitutions for the current substitutionIndex
                // just output the format specifier literally and move on.
                error('not enough substitution arguments. Had ' +
                    substitutions.length +
                    ' but needed ' +
                    (token.substitutionIndex + 1) +
                    ', so substitution was skipped.');
                result = append(result, '%' + (token.precision > -1 ? token.precision : '') + token.specifier);
                continue;
            }
            usedSubstitutionIndexes[token.substitutionIndex] = true;
            if (!(token.specifier in formatters)) {
                // Encountered an unsupported format character, treat as a string.
                warn('unsupported format character \u201C' +
                    token.specifier +
                    '\u201D. Treating as a string.');
                result = append(result, substitutions[token.substitutionIndex]);
                continue;
            }
            result = append(result, formatters[token.specifier](substitutions[token.substitutionIndex], token));
        }
        var unusedSubstitutions = [];
        for (var i = 0; i < substitutions.length; ++i) {
            if (i in usedSubstitutionIndexes)
                continue;
            unusedSubstitutions.push(substitutions[i]);
        }
        return { formattedResult: result, unusedSubstitutions: unusedSubstitutions };
    }
    String.format = format;
})(String = exports.String || (exports.String = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9kZXZ0b29scy1wYXJzZXIvc3RyaW5nLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0Q0FBNEM7QUFDNUMsNkdBQTZHOzs7QUFFN0csNERBQTREO0FBQzVELEVBQUU7QUFDRixxRUFBcUU7QUFDckUseUVBQXlFO0FBQ3pFLE9BQU87QUFDUCxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLGdFQUFnRTtBQUNoRSwrREFBK0Q7QUFDL0QseUVBQXlFO0FBQ3pFLGdFQUFnRTtBQUNoRSxnQkFBZ0I7QUFDaEIsNERBQTREO0FBQzVELHVFQUF1RTtBQUN2RSwyREFBMkQ7QUFDM0QsRUFBRTtBQUNGLHNFQUFzRTtBQUN0RSxvRUFBb0U7QUFDcEUsd0VBQXdFO0FBQ3hFLHVFQUF1RTtBQUN2RSx3RUFBd0U7QUFDeEUsbUVBQW1FO0FBQ25FLHdFQUF3RTtBQUN4RSx3RUFBd0U7QUFDeEUsc0VBQXNFO0FBQ3RFLHdFQUF3RTtBQUN4RSx1RUFBdUU7QUFFdkUsSUFBaUIsTUFBTSxDQTJNdEI7QUEzTUQsV0FBaUIsTUFBTTtJQUNyQjs7OztPQUlHO0lBQ0gsU0FBUyxTQUFTLENBQUMsTUFBVyxFQUFFLEtBQVU7UUFDeEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsb0JBQW9CLENBQUMsTUFBVyxFQUFFLFVBQWU7UUFDeEQsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFBO1FBQ3BCLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFBO1FBRXpCLFNBQVMsY0FBYyxDQUFDLEdBQVE7WUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FB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

/***/ }),

/***/ 11096:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Content = exports.Timestamp = exports.AmountIcon = exports.Icon = exports.Message = exports.Root = void 0;
var theme_1 = __importDefault(__webpack_require__(23727));
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
        styles["LOG_" + style.toUpperCase()];
};
/**
 * console-feed
 */
exports.Root = theme_1["default"]('div')({
    wordBreak: 'break-word',
    width: '100%'
});
/**
 * console-message
 */
exports.Message = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        position: 'relative',
        display: 'flex',
        color: Themed('color', method, styles),
        backgroundColor: Themed('background', method, styles),
        borderTop: "1px solid " + Themed('border', method, styles),
        borderBottom: "1px solid " + Themed('border', method, styles),
        marginTop: -1,
        marginBottom: +/^warn|error$/.test(method),
        paddingLeft: 10,
        boxSizing: 'border-box',
        '& *': {
            verticalAlign: 'top',
            boxSizing: 'border-box',
            fontFamily: styles.BASE_FONT_FAMILY,
            whiteSpace: 'pre-wrap',
            fontSize: styles.BASE_FONT_SIZE
        },
        '& a': {
            color: styles.LOG_LINK_COLOR
        }
    });
});
/**
 * message-icon
 */
exports.Icon = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        width: styles.LOG_ICON_WIDTH,
        height: styles.LOG_ICON_HEIGHT,
        backgroundImage: Themed('icon', method, styles),
        backgroundRepeat: 'no-repeat',
        backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
        backgroundPosition: '50% 50%'
    });
});
/**
 * message-amount
 */
exports.AmountIcon = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        height: '16px',
        margin: '1px 0',
        whiteSpace: 'nowrap',
        fontSize: '10px',
        lineHeight: '17px',
        padding: '0px 3px',
        background: Themed('amount_background', method, styles),
        color: Themed('amount_color', method, styles),
        borderRadius: '8px',
        minWidth: '18px',
        textAlign: 'center'
    });
});
/**
 * timestamp
 */
exports.Timestamp = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        padding: '3px 0px 0px 5px',
        width: '110px',
        height: styles.LOG_ICON_HEIGHT,
        color: 'dimgray'
    });
});
/**
 * console-content
 */
exports.Content = theme_1["default"]('div')(function (_a) {
    var styles = _a.theme.styles;
    return ({
        clear: 'right',
        position: 'relative',
        padding: styles.PADDING,
        marginLeft: 15,
        minHeight: 18,
        flex: 'auto',
        width: 'calc(100% - 15px)'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBNEI7QUFFNUI7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQ2IsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFrQztJQUVsQyxPQUFBLE1BQU0sQ0FBQyxTQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBSSxLQUFLLENBQUMsV0FBVyxFQUFJLENBQUM7UUFDNUQsTUFBTSxDQUFDLFNBQU8sS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO0FBRHBDLENBQ29DLENBQUE7QUFFdEM7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBRyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBNkI7UUFBM0IsYUFBeUIsRUFBaEIsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBO0lBQVMsT0FBQSxDQUFDO1FBQ3ZFLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN0QyxlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JELFNBQVMsRUFBRSxlQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRztRQUMxRCxZQUFZLEVBQUUsZUFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUc7UUFDN0QsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNiLFlBQVksRUFBRSxD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

/***/ }),

/***/ 99456:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(67294));
var emotion_theming_1 = __webpack_require__(76861);
var default_1 = __importDefault(__webpack_require__(46491));
var elements_1 = __webpack_require__(11096);
var Message_1 = __importDefault(__webpack_require__(61284));
// https://stackoverflow.com/a/48254637/4089357
var customStringify = function (v) {
    var cache = new Set();
    return JSON.stringify(v, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our set
            cache.add(value);
        }
        return value;
    });
};
var getTheme = function (props) { return ({
    variant: props.variant || 'light',
    styles: __assign(__assign({}, default_1["default"](props)), props.styles)
}); };
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            theme: getTheme(_this.props),
            prevStyles: _this.props.styles,
            prevVariant: _this.props.variant
        };
        return _this;
    }
    Console.getDerivedStateFromProps = function (props, state) {
        if (props.variant !== state.prevVariant ||
            JSON.stringify(props.styles) !== JSON.stringify(props.prevStyles)) {
            return {
                theme: getTheme(props),
                prevStyles: props.styles,
                prevVariant: props.variant
            };
        }
        return null;
    };
    Console.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.filter, filter = _b === void 0 ? [] : _b, _c = _a.logs, logs = _c === void 0 ? [] : _c, searchKeywords = _a.searchKeywords, logFilter = _a.logFilter, _d = _a.logGrouping, logGrouping = _d === void 0 ? true : _d;
        if (searchKeywords) {
            var regex_1 = new RegExp(searchKeywords);
            var filterFun = logFilter
                ? logFilter
                : function (log) {
                    try {
                        return regex_1.test(customStringify(log));
                    }
                    catch (e) {
                        return true;
                    }
                };
            // @ts-ignore
            logs = logs.filter(filterFun);
        }
        if (logGrouping) {
            // @ts-ignore
            logs = logs.reduce(function (acc, log) {
                var prevLog = acc[acc.length - 1];
                if (prevLog &&
                    prevLog.amount &&
                    prevLog.method === log.method &&
                    prevLog.data.length === log.data.length &&
                    prevLog.data.every(function (value, i) { return log.data[i] === value; })) {
                    prevLog.amount += 1;
                    return acc;
                }
                acc.push(__assign(__assign({}, log), { amount: 1 }));
                return acc;
            }, []);
        }
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.state.theme },
            React.createElement(elements_1.Root, null, logs.map(function (log, i) {
                // If the filter is defined and doesn't include the method
                var filtered = filter.length !== 0 &&
                    log.method &&
                    filter.indexOf(log.method) === -1;
                return filtered ? null : (React.createElement(Message_1["default"], { log: log, key: log.id || log.method + "-" + i, linkifyOptions: _this.props.linkifyOptions }));
            }))));
    };
    return Console;
}(React.PureComponent));
exports["default"] = Console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEI7QUFDOUIsbURBQStDO0FBRS9DLDREQUFvQztBQUVwQyx1Q0FBaUM7QUFDakMsc0RBQStCO0FBRS9CLCtDQUErQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMvQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLHdDQUF3QztnQkFDeEMsT0FBTTthQUNQO1lBQ0QseUJBQXlCO1lBQ3pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDakI7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU87SUFDakMsTUFBTSx3QkFDRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUNiLEtBQUssQ0FBQyxNQUFNLENBQ2hCO0NBQ0YsQ0FBQyxFQU5pQyxDQU1qQyxDQUFBO0FBRUY7SUFBc0IsMkJBQStCO0lBQXJEO1FBQUEscUVBNEZDO1FBM0ZDLFdBQUssR0FBRztZQUNOLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUMzQixV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

/***/ }),

/***/ 99777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(67294));
var react_1 = __importDefault(__webpack_require__(28175));
function splitMessage(message) {
    var breakIndex = message.indexOf('\n');
    // consider that there can be line without a break
    if (breakIndex === -1) {
        return message;
    }
    return message.substr(0, breakIndex);
}
function ErrorPanel(_a) {
    var error = _a.error;
    /* This checks for error logTypes and shortens the message in the console by wrapping
    it a <details /> tag and putting the first line in a <summary /> tag and the other lines
    follow after that. This creates a nice collapsible error message */
    var otherErrorLines;
    var firstLine = splitMessage(error);
    var msgArray = error.split('\n');
    if (msgArray.length > 1) {
        otherErrorLines = msgArray.slice(1);
    }
    if (!otherErrorLines) {
        return React.createElement(react_1["default"], null, error);
    }
    return (React.createElement("details", null,
        React.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
        React.createElement(react_1["default"], null, otherErrorLines.join('\n\r'))));
}
exports["default"] = ErrorPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBQzlCLDBEQUFxQztBQUVyQyxTQUFTLFlBQVksQ0FBQyxPQUFlO0lBQ25DLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEMsa0RBQWtEO0lBQ2xELElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sT0FBTyxDQUFBO0tBQ2Y7SUFDRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUE0QjtRQUExQixLQUFLLFdBQUE7SUFDekI7O3VFQUVtRTtJQUNuRSxJQUFJLGVBQWUsQ0FBQTtJQUNuQixJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3BDO0lBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtRQUNwQixPQUFPLG9CQUFDLGtCQUFPLFFBQUUsS0FBSyxDQUFXLENBQUE7S0FDbEM7SUFFRCxPQUFPLENBQ0w7UUFDRSxpQ0FBUyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDbkQsU0FBUyxDQUNGO1FBQ1Ysb0JBQUMsa0JBQU8sUUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFXLENBQ3pDLENBQ1gsQ0FBQTtBQUNILENBQUM7QUFFRCxxQkFBZSxVQUFVLENBQUEifQ==

/***/ }),

/***/ 6110:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(67294));
var elements_1 = __webpack_require__(49730);
var devtools_parser_1 = __importDefault(__webpack_require__(32880));
var Formatted = /** @class */ (function (_super) {
    __extends(Formatted, _super);
    function Formatted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Formatted.prototype.render = function () {
        return (React.createElement(elements_1.Root, { "data-type": "formatted", dangerouslySetInnerHTML: {
                __html: devtools_parser_1["default"](this.props.data || [])
            } }));
    };
    return Formatted;
}(React.PureComponent));
exports["default"] = Formatted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvRm9ybWF0dGVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBQzlCLHdEQUFrRDtBQUVsRCx1RUFBdUM7QUFNdkM7SUFBd0IsNkJBQStCO0lBQXZEOztJQVdBLENBQUM7SUFWQywwQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUNMLG9CQUFDLGVBQUksaUJBQ08sV0FBVyxFQUNyQix1QkFBdUIsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLDRCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQ3RDLEdBQ0QsQ0FDSCxDQUFBO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXdCLEtBQUssQ0FBQyxhQUFhLEdBVzFDO0FBRUQscUJBQWUsU0FBUyxDQUFBIn0=

/***/ }),

/***/ 30965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(__webpack_require__(67294));
var emotion_theming_1 = __webpack_require__(76861);
var elements_1 = __webpack_require__(49730);
var react_1 = __importDefault(__webpack_require__(28175));
var react_inspector_1 = __importDefault(__webpack_require__(41194));
var ObjectTree = /** @class */ (function (_super) {
    __extends(ObjectTree, _super);
    function ObjectTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTree.prototype.render = function () {
        var _this = this;
        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
        return log.data.map(function (message, i) {
            if (typeof message === 'string') {
                var string = !quoted && message.length ? (message + " ") : (React.createElement("span", null,
                    React.createElement("span", null, "\""),
                    React.createElement("span", { style: {
                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
                        } }, message),
                    React.createElement("span", null, "\" ")));
                return (React.createElement(elements_1.Root, { "data-type": "string", key: i },
                    React.createElement(react_1["default"], { options: _this.props.linkifyOptions }, string)));
            }
            return React.createElement(react_inspector_1["default"], { data: message, key: i });
        });
    };
    return ObjectTree;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(ObjectTree);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThCO0FBRTlCLG1EQUEyQztBQUMzQyx3REFBa0Q7QUFFbEQsMERBQXFDO0FBR3JDLHVFQUEwQztBQVMxQztJQUF5Qiw4QkFBK0I7SUFBeEQ7O0lBaUNBLENBQUM7SUFoQ0MsMkJBQU0sR0FBTjtRQUFBLGlCQStCQztRQTlCTyxJQUFBLEtBQXlCLElBQUksQ0FBQyxLQUFLLEVBQWpDLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEdBQUcsU0FBZSxDQUFBO1FBRXpDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFZLEVBQUUsQ0FBUztZQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBTSxNQUFNLEdBQ1YsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDdkIsT0FBTyxNQUFHLENBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FDRjtvQkFDRSx1Q0FBYztvQkFDZCw4QkFDRSxLQUFLLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCO3lCQUM5QyxJQUVBLE9BQU8sQ0FDSDtvQkFDUCx3Q0FBZSxDQUNWLENBQ1IsQ0FBQTtnQkFFSCxPQUFPLENBQ0wsb0JBQUMsZUFBSSxpQkFBVyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLG9CQUFDLGtCQUFPLElBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFHLE1BQU0sQ0FBVyxDQUMxRCxDQUNSLENBQUE7YUFDRjtZQUVELE9BQU8sb0JBQUMsNEJBQVMsSUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBeUIsS0FBSyxDQUFDLGFBQWEsR0FpQzNDO0FBRUQscUJBQWUsMkJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQSJ9

/***/ }),

/***/ 49730:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Constructor = exports.HTML = exports.Table = exports.Root = void 0;
var theme_1 = __importDefault(__webpack_require__(23727));
/**
 * Object root
 */
exports.Root = theme_1["default"]('div')({
    display: 'inline-block',
    wordBreak: 'break-all',
    '&::after': {
        content: "' '",
        display: 'inline-block'
    },
    '& > li, & > ol, & > details': {
        backgroundColor: 'transparent !important',
        display: 'inline-block'
    },
    '& ol:empty': {
        paddingLeft: '0 !important'
    }
});
/**
 * Table
 */
exports.Table = theme_1["default"]('span')({
    '& > li': {
        display: 'inline-block',
        marginTop: 5
    }
});
/**
 * HTML
 */
exports.HTML = theme_1["default"]('span')({
    display: 'inline-block',
    '& div:hover': {
        backgroundColor: 'rgba(255, 220, 158, .05) !important',
        borderRadius: '2px'
    }
});
/**
 * Object constructor
 */
exports.Constructor = theme_1["default"]('span')({
    '& > span > span:nth-child(1)': {
        opacity: 0.6
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9lbGVtZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBQTZCO0FBRTdCOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxPQUFPLEVBQUUsY0FBYztJQUN2QixTQUFTLEVBQUUsV0FBVztJQUN0QixVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0QsNkJBQTZCLEVBQUU7UUFDN0IsZUFBZSxFQUFFLHdCQUF3QjtRQUN6QyxPQUFPLEVBQUUsY0FBYztLQUN4QjtJQUNELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxjQUFjO0tBQzVCO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLEtBQUssR0FBRyxrQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFNBQVMsRUFBRSxDQUFDO0tBQ2I7Q0FDRixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsSUFBSSxHQUFHLGtCQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsYUFBYSxFQUFFO1FBQ2IsZUFBZSxFQUFFLHFDQUFxQztRQUN0RCxZQUFZLEVBQUUsS0FBSztLQUNwQjtDQUNGLENBQUMsQ0FBQTtBQUVGOztHQUVHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsa0JBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4Qyw4QkFBOEIsRUFBRTtRQUM5QixPQUFPLEVBQUUsR0FBRztLQUNiO0NBQ0YsQ0FBQyxDQUFBIn0=

/***/ }),

/***/ 41194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var emotion_theming_1 = __webpack_require__(76861);
var React = __importStar(__webpack_require__(67294));
var react_inspector_1 = __webpack_require__(52255);
var Error_1 = __importDefault(__webpack_require__(99777));
var elements_1 = __webpack_require__(49730);
var REMAINING_KEY = '__console_feed_remaining__';
// copied from react-inspector
function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }
    return arr.slice(1).reduce(function (xs, x) { return xs.concat([sep, x]); }, [arr[0]]);
}
var getArrayLength = function (array) {
    if (!array || array.length < 1) {
        return 0;
    }
    var remainingKeyCount = array[array.length - 1]
        .toString()
        .split(REMAINING_KEY);
    if (remainingKeyCount[1] === undefined) {
        return array.length;
    }
    else {
        var remaining = parseInt(array[array.length - 1].toString().split(REMAINING_KEY)[1]);
        return array.length - 1 + remaining;
    }
};
var CustomObjectRootLabel = function (_a) {
    var name = _a.name, data = _a.data;
    var rootData = data;
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
        var object = {};
        for (var propertyName in data) {
            if (data.hasOwnProperty(propertyName)) {
                var propertyValue = data[propertyName];
                if (Array.isArray(propertyValue)) {
                    var arrayLength = getArrayLength(propertyValue);
                    object[propertyName] = new Array(arrayLength);
                }
                else {
                    object[propertyName] = propertyValue;
                }
            }
        }
        rootData = Object.assign(Object.create(Object.getPrototypeOf(data)), object);
    }
    if (typeof name === 'string') {
        return (React.createElement("span", null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            React.createElement(react_inspector_1.ObjectPreview, { data: rootData })));
    }
    else {
        return React.createElement(react_inspector_1.ObjectPreview, { data: rootData });
    }
};
var CustomObjectLabel = function (_a) {
    var name = _a.name, data = _a.data, _b = _a.isNonenumerable, isNonenumerable = _b === void 0 ? false : _b;
    return name === REMAINING_KEY ? (data > 0 ? (React.createElement("span", null,
        data,
        " more...")) : null) : (React.createElement("span", null,
        typeof name === 'string' ? (React.createElement(react_inspector_1.ObjectName, { name: name, dimmed: isNonenumerable })) : (React.createElement(react_inspector_1.ObjectPreview, { data: name })),
        React.createElement("span", null, ": "),
        React.createElement(react_inspector_1.ObjectValue, { object: data })));
};
var CustomInspector = /** @class */ (function (_super) {
    __extends(CustomInspector, _super);
    function CustomInspector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInspector.prototype.render = function () {
        var _a = this.props, data = _a.data, theme = _a.theme;
        var styles = theme.styles, method = theme.method;
        var dom = data instanceof HTMLElement;
        var table = method === 'table';
        return (React.createElement(elements_1.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (React.createElement(elements_1.Table, null,
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, table: true })),
            React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))) : dom ? (React.createElement(elements_1.HTML, null,
            React.createElement(react_inspector_1.DOMInspector, __assign({}, this.props, { theme: styles })))) : (React.createElement(react_inspector_1.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))));
    };
    CustomInspector.prototype.getCustomNode = function (data) {
        var _a;
        var styles = this.props.theme.styles;
        var constructor = (_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name;
        if (constructor === 'Function')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                React.createElement(react_inspector_1.ObjectPreview, { data: data }), " {",
                React.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
        if (data instanceof Error && typeof data.stack === 'string') {
            return React.createElement(Error_1["default"], { error: data.stack });
        }
        if (constructor === 'Promise')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                "Promise ", "{",
                React.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
        if (data instanceof HTMLElement)
            return (React.createElement(elements_1.HTML, null,
                React.createElement(react_inspector_1.DOMInspector, { data: data, theme: styles })));
        if (Array.isArray(data)) {
            var arrayLength = getArrayLength(data);
            var maxProperties = styles.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES;
            if (typeof data[data.length - 1] === 'string' &&
                data[data.length - 1].includes(REMAINING_KEY)) {
                data = data.slice(0, -1);
            }
            var previewArray = data
                .slice(0, maxProperties)
                .map(function (element, index) {
                if (Array.isArray(element)) {
                    return (React.createElement(react_inspector_1.ObjectValue, { key: index, object: new Array(getArrayLength(element)) }));
                }
                else {
                    return React.createElement(react_inspector_1.ObjectValue, { key: index, object: element });
                }
            });
            if (arrayLength > maxProperties) {
                previewArray.push(React.createElement("span", { key: "ellipsis" }, "\u2026"));
            }
            return (React.createElement(React.Fragment, null,
                React.createElement("span", { style: styles.objectDescription }, arrayLength === 0 ? "" : "(" + arrayLength + ")\u00A0"),
                React.createElement("span", { style: styles.preview },
                    "[",
                    intersperse(previewArray, ', '),
                    "]")));
        }
        return null;
    };
    CustomInspector.prototype.nodeRenderer = function (props) {
        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
        // Root
        if (depth === 0) {
            var customNode_1 = this.getCustomNode(data);
            return customNode_1 || React.createElement(CustomObjectRootLabel, { name: name, data: data });
        }
        if (typeof data === 'string' && data.includes(REMAINING_KEY)) {
            name = REMAINING_KEY;
            data = data.split(REMAINING_KEY)[1];
        }
        if (name === 'constructor')
            return (React.createElement(elements_1.Constructor, null,
                React.createElement(react_inspector_1.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
        var customNode = this.getCustomNode(data);
        return customNode ? (React.createElement(elements_1.Root, null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            customNode)) : (React.createElement(CustomObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
    };
    return CustomInspector;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(CustomInspector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJDO0FBQzNDLDJDQUE4QjtBQUM5QixtREFPd0I7QUFHeEIsbUVBQWlEO0FBQ2pELHVDQUEyRDtBQU8zRCxJQUFNLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQTtBQUVsRCw4QkFBOEI7QUFDOUIsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7SUFDM0IsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLEVBQUUsQ0FBQTtLQUNWO0lBRUQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUUsRUFBRSxDQUFDLElBQUssT0FBQSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3RFLENBQUM7QUFFRCxJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQWlCO0lBQ3ZDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxDQUFDLENBQUE7S0FDVDtJQUVELElBQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzlDLFFBQVEsRUFBRTtTQUNWLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV2QixJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUN0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUE7S0FD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

/***/ }),

/***/ 46491:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_inspector_1 = __webpack_require__(52255);
var styles = function (props) {
    var isLight = (props.variant || 'light') === 'light';
    var chrome = isLight ? react_inspector_1.chromeLight : react_inspector_1.chromeDark;
    return __assign(__assign({}, chrome), { 
        /**
         * General
         */
        PADDING: '3px 22px 2px 0', 
        /**
         * Default log styles
         */
        LOG_COLOR: chrome.BASE_COLOR, LOG_BACKGROUND: 'transparent', LOG_BORDER: isLight ? 'rgb(236,236,236)' : 'rgb(44,44,44)', LOG_ICON_WIDTH: 10, LOG_ICON_HEIGHT: 18, LOG_ICON: 'none', LOG_AMOUNT_BACKGROUND: '#42597f', LOG_AMOUNT_COLOR: '#8d8f91', LOG_LINK_COLOR: isLight ? 'rgb(66, 66, 66)' : 'rgb(177, 177, 177)', 
        /**
         * Log types
         */
        LOG_WARN_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVChTbY7BCoJQFERn0Q/3BX1JuxQjsSCXiV8gtCgxhCIrKIRIqKDVzXl5w5cNHBjm6eGinXiAXu5inY2xYm/mbpIh+vcFhLA3sx0athNUhymEsP+10lAEEA17x8o/9wFuNGnYuVlWve0SQl7P0sBu3aq2R1Q/1JzSkYGd29eqNv2wjdnUuvNRciC/N+qe+7gidbA8zyHkOINsvA/sumcOkjcabcBmw2+mMgAAAABJRU5ErkJggg==)", LOG_WARN_BACKGROUND: isLight ? 'rgb(255,250,220)' : '#332b00', LOG_WARN_COLOR: isLight ? 'rgb(73,45,2)' : '#ffdc9e', LOG_WARN_BORDER: isLight ? 'rgb(255,244,181)' : '#650', LOG_WARN_AMOUNT_BACKGROUND: '#ffbb17', LOG_WARN_AMOUNT_COLOR: '#8d8f91', LOG_ERROR_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVChTY4CB7ZI8tmfU5E6e01b+DMIgNkgMKg0BR9Vkux6YWPx/bemIgkFiIDmwogOaqrYPzazAEm8DwuGKYGyQHEgNw0VT05Mwib9v3v7/kJEHxiA2TDFIDcNNU4vPMFPACj58/P/v40cwGyYOUsNwy8IZRSFIEUgxskKQGoZrzp4ErQapYbgYHG371M4dLACTQGaD5EBqwD6/FpzQ9dTBE64IhkFiIDmwIhi4mlJqey8o4eR9r8jPIAxig8QgsgwMAFZz1YtGPXgjAAAAAElFTkSuQmCC)", LOG_ERROR_BACKGROUND: isLight ? 'rgb(255,235,235)' : '#290000', LOG_ERROR_BORDER: isLight ? 'rgb(253,204,205)' : '#5b0000', LOG_ERROR_COLOR: isLight ? 'rgb(252,0,5)' : '#ff8080', LOG_ERROR_AMOUNT_BACKGROUND: '#dc2727', LOG_ERROR_AMOUNT_COLOR: '#8d8f91', LOG_DEBUG_ICON: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 459 459'%3e%3cpath fill='%234D88FF' d='M433.5 127.5h-71.4a177.7 177.7 0 0 0-45.9-51L357 35.7 321.3 0l-56.1 56.1c-10.2-2.6-23-5.1-35.7-5.1s-25.5 2.5-35.7 5.1L137.7 0 102 35.7l40.8 40.8a177.7 177.7 0 0 0-45.9 51H25.5v51H79c-2.5 7.7-2.5 17.9-2.5 25.5v25.5h-51v51h51V306a88 88 0 0 0 2.5 25.5H25.5v51h71.4A152.2 152.2 0 0 0 229.5 459c56.1 0 107.1-30.6 132.6-76.5h71.4v-51H380c2.5-7.7 2.5-17.9 2.5-25.5v-25.5h51v-51h-51V204c0-7.7 0-17.9-2.5-25.5h53.5v-51zm-153 204h-102v-51h102v51zm0-102h-102v-51h102v51z'/%3e%3c/svg%3e\")", LOG_DEBUG_BACKGROUND: '', LOG_DEBUG_BORDER: '', LOG_DEBUG_COLOR: '#4D88FF', LOG_COMMAND_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABaSURBVChTY6AtmDx5cvnUqVP1oFzsoL+/XwCo8DEQv584caIVVBg7mDBhghxQ4Y2+vr6vU6ZM8YAKYwdA00SB+CxQ8S+g4jCoMCYgSiFRVpPkGaAiHMHDwAAA5Ko+F4/l6+MAAAAASUVORK5CYII=)", LOG_RESULT_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABpSURBVChTY6A92LNnj96uXbvKoVzsYMeOHVbbt29/D1T4eP/+/QJQYVSwe/duD6CCr0B8A8iWgwqjAqBk2NatW38B6bPbtm0TBYkBFbsA+c9ANFgRCBCtEASAAoSthgGiPAMD2IOHgQEA521bM7uG52wAAAAASUVORK5CYII=)", LOG_INFO_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVChTY4ABp/AztmZBZ07qe538rO114rOa8+GTskYHbKHSEOARd6nLIOTsf61gIA46U6kVePYQiK3uc/K/hPG+LrCi8IyrtkZh5yCKgk/80w46ba0RdGYGhH/2v6rXyf88qtttGVwSLp2ECQLxeiAu1wo6uwpJ7L+o2f6TDA6xZz8jCyqFnuHXCj4djywmZXHoM/EK0azGqhBsNYpngL6VCTnGqRF4xgKo+D5IDO4ZEEAKnjcQBafvqwWf/YoSPDCAP8AZGAC7mLM81zgOTQAAAABJRU5ErkJggg==)", 
        /**
         * Fonts
         */
        BASE_FONT_FAMILY: 'Consolas, Lucida Console, Courier New, monospace', BASE_FONT_SIZE: '12px', 
        /**
         * Other
         */
        ARROW_FONT_SIZE: 10, OBJECT_VALUE_STRING_COLOR: 'rgb(233,63,59)' });
};
exports["default"] = styles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnQvdGhlbWUvZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlEO0FBSXpELElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBWTtJQUMxQixJQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssT0FBTyxDQUFBO0lBQ3RELElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsNkJBQVcsQ0FBQyxDQUFDLENBQUMsNEJBQVUsQ0FBQTtJQUVqRCxPQUFPLHNCQUNGLE1BQU07UUFDVDs7V0FFRztRQUNILE9BQU8sRUFBRSxnQkFBZ0I7UUFFekI7O1dBRUc7UUFDSCxTQUFTLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFDNUIsY0FBYyxFQUFFLGFBQWEsRUFDN0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFDMUQsY0FBYyxFQUFFLEVBQUUsRUFDbEIsZUFBZSxFQUFFLEVBQUUsRUFDbkIsUUFBUSxFQUFFLE1BQU0sRUFDaEIscUJBQXFCLEVBQUUsU0FBUyxFQUNoQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQzNCLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFFbEU7O1dBRUc7UUFDSCxhQUFhLEVBQUUseVlBQXlZLEVBQ3haLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDN0QsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ3BELGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ3RELDBCQUEwQixFQUFFLFNBQVMsRUFDckMscUJBQXFCLEVBQUUsU0FBUyxFQUVoQyxjQUFjLEVBQUUsaWJBQWliLEVBQ2pjLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDOUQsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUMxRCxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDckQsMkJBQTJCLEVBQUUsU0FBUyxFQUN0QyxzQkFBc0IsRUFBRSxTQUFTLEVBRWpDLGNBQWMsRUFBRSxvbUJBQWttQixFQUNsbkIsb0JBQW9CLEVBQUUsRUFBRSxFQUN4QixnQkFBZ0IsRUFBRSxFQUFFLEVBQ3BCLGVBQWUsRUFBRSxTQUFTLEVBRTFCLGdCQUFnQixFQUFFLHFTQUFxUyxFQUN2VCxlQUFlLEVBQUUseVRBQXlULEVBQzFVLGFBQWEsRUFBRSx5YkFBeWI7UUFFeGM7O1dBRUc7UUFDSCxnQkFBZ0IsRUFBRSxrREFBa0QsRUFDcEUsY0FBYyxFQUFFLE1BQU07UUFFdEI7O1dBRUc7UUFDSCxlQUFlLEVBQUUsRUFBRSxFQUNuQix5QkFBeUIsRUFBRSxnQkFBZ0IsR0FDbEMsQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUVELHFCQUFlLE1BQU0sQ0FBQSJ9

/***/ }),

/***/ 23727:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var styled_1 = __importDefault(__webpack_require__(91245));
exports["default"] = styled_1["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3RoZW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXNEO0FBR3RELHFCQUFlLG1CQUErQixDQUFBIn0=

/***/ }),

/***/ 35288:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Methods_1 = __importDefault(__webpack_require__(88965));
var parse_1 = __importDefault(__webpack_require__(16910));
var Transform_1 = __webpack_require__(95575);
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback, encode, limit) {
    if (encode === void 0) { encode = true; }
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty/console-feed'
        }
    };
    var _loop_1 = function (method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function () {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function () {
                var parsed = parse_1["default"](method, args);
                if (parsed) {
                    var encoded = parsed;
                    if (encode) {
                        encoded = Transform_1.Encode(parsed, limit);
                    }
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for (var _i = 0, Methods_2 = Methods_1["default"]; _i < Methods_2.length; _i++) {
        var method = Methods_2[_i];
        _loop_1(method);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
exports["default"] = Hook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLG1FQUE0QztBQUU1QyxrREFBMkI7QUFFM0IsMENBQXFDO0FBQ3JDLHNDQUFzQztBQUV0Qzs7OztHQUlHO0FBQ0gsU0FBd0IsSUFBSSxDQUMxQixPQUFnQixFQUNoQixRQUFrQixFQUNsQixNQUFhLEVBQ2IsS0FBYztJQURkLHVCQUFBLEVBQUEsYUFBYTtJQUdiLElBQU0sYUFBYSxHQUFHLE9BQXdCLENBQUE7SUFDOUMsSUFBTSxPQUFPLEdBQVk7UUFDdkIsUUFBUSxFQUFFLEVBQUU7UUFDWixHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUsd0NBQXdDO1lBQzdDLE1BQU0sRUFBRSwwQ0FBMEM7U0FDbkQ7S0FDRixDQUFBOzRCQUdRLE1BQU07UUFDYixJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFMUMsV0FBVztRQUNYLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUN0Qiw2QkFBNkI7WUFDN0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFFbkMsd0NBQXdDO1lBQ3hDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRXJDLDRCQUE0QjtZQUM1QixVQUFVLENBQUM7Z0JBQ1QsSUFBTSxNQUFNLEdBQUcsa0JBQUssQ0FBQyxNQUF3QixFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLE9BQU8sR0FBWSxNQUFpQixDQUFBO29CQUN4QyxJQUFJLE1BQU0sRUFBRTt3QkFDVixPQUFPLEdBQUcsa0JBQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFZLENBQUE7cUJBQzNDO29CQUNELFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7UUFFRCx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUE7O0lBMUJ6QywyQkFBMkI7SUFDM0IsS0FBbUIsVUFBTyxFQUFQLFlBQUEsb0JBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBckIsSUFBSSxNQUFNLGdCQUFBO2dCQUFOLE1BQU07S0EwQmQ7SUFFRCxhQUFhLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtJQUU1QixPQUFPLGFBQWEsQ0FBQTtBQUN0QixDQUFDO0FBL0NELDBCQStDQyJ9

/***/ }),

/***/ 99721:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        Date.now());
}
exports["default"] = guidGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR1VJRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3BhcnNlL0dVSUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUF3QixhQUFhO0lBQ25DLElBQUksRUFBRSxHQUFHO1FBQ1AsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDLENBQUE7SUFDRCxPQUFPLENBQ0wsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1gsQ0FBQTtBQUNILENBQUM7QUFsQkQsbUNBa0JDIn0=

/***/ }),

/***/ 16910:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var GUID_1 = __importDefault(__webpack_require__(99721));
var Timing = __importStar(__webpack_require__(5226));
var Count = __importStar(__webpack_require__(22391));
var Assert = __importStar(__webpack_require__(45776));
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign(__assign({}, Count.increment(label)), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArrays([data[0]], data.slice(1)));
                if (assertion) {
                    return __assign(__assign({}, assertion), { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports["default"] = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBeUI7QUFFekIsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4Qyx1REFBMEM7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxpQkFBSSxFQUFFLENBQUE7SUFFN0Isb0JBQW9CO0lBQ3BCLFFBQVEsTUFBTSxFQUFFO1FBQ2QsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLE9BQU87Z0JBQ0wsTUFBTSxRQUFBO2dCQUNOLEVBQUUsSUFBQTthQUNILENBQUE7U0FDRjtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLDZCQUNLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQ3pCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssU0FBUyxDQUFDLENBQUM7WUFDZCxJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkIsT0FBTyxLQUFLLENBQUE7YUFDYjtZQUVELDZCQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQ3JCLEVBQUUsSUFBQSxJQUNIO1NBQ0Y7UUFFRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7WUFFL0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLGtCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUE7Z0JBQ3hELElBQUksU0FBUyxFQUFFO29CQUNiLDZCQUNLLFNBQVMsS0FDWixFQUFFLElBQUEsSUFDSDtpQkFDRjthQUNGO1lBRUQsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDM0IsSUFBSTtvQkFDRixPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFBO2lCQUM1QjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixPQUFPLEtBQUssQ0FBQTtpQkFDYjtZQUNILENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2dCQUNGLElBQUksRUFBRSxNQUFNO2FBQ2IsQ0FBQTtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxNQUFBO2FBQ0wsQ0FBQTtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBRUQscUJBQWUsS0FBSyxDQUFBIn0=

/***/ }),

/***/ 45776:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.test = void 0;
function test(expression) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    if (expression)
        return false;
    // Default message
    if (messages.length === 0)
        messages.push('console.assert');
    return {
        method: 'error',
        data: __spreadArrays(["Assertion failed:"], messages)
    };
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQWdCLElBQUksQ0FBQyxVQUFlO0lBQUUsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBQ3RELElBQUksVUFBVTtRQUFFLE9BQU8sS0FBSyxDQUFBO0lBRTVCLGtCQUFrQjtJQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUUxRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLGtCQUFHLG1CQUFtQixHQUFLLFFBQVEsQ0FBQztLQUN6QyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9CQVVDIn0=

/***/ }),

/***/ 22391:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.increment = void 0;
var state_1 = __webpack_require__(33585);
var dispatch_1 = __importDefault(__webpack_require__(91616));
var actions_1 = __webpack_require__(64138);
function increment(label) {
    dispatch_1["default"](actions_1.count(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: [label + ": " + times]
    };
}
exports.increment = increment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9tZXRob2RzL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJDQUF5QztBQUN6QyxrRUFBMkM7QUFDM0MsK0NBQTJDO0FBRTNDLFNBQWdCLFNBQVMsQ0FBQyxLQUFhO0lBQ3JDLHFCQUFRLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDdEIsSUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoQyxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsQ0FBSSxLQUFLLFVBQUssS0FBTyxDQUFDO0tBQzdCLENBQUE7QUFDSCxDQUFDO0FBUkQsOEJBUUMifQ==

/***/ }),

/***/ 5226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.stop = exports.start = void 0;
var state_1 = __webpack_require__(33585);
var dispatch_1 = __importDefault(__webpack_require__(91616));
var actions_1 = __webpack_require__(64138);
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state === null || state_1.state === void 0 ? void 0 : state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [label + ": " + time + "ms"]
        };
    }
    return {
        method: 'warn',
        data: ["Timer '" + label + "' does not exist"]
    };
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLGtFQUEyQztBQUMzQywrQ0FBd0Q7QUFFeEQsU0FBZ0IsS0FBSyxDQUFDLEtBQWE7SUFDakMscUJBQVEsQ0FBQyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDNUIsQ0FBQztBQUZELHNCQUVDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQWE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsYUFBSyxhQUFMLGFBQUssdUJBQUwsYUFBSyxDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDekIscUJBQVEsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDaEIsSUFBQSxJQUFJLEdBQUssYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBekIsQ0FBeUI7UUFFckMsT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLENBQUksS0FBSyxVQUFLLElBQUksT0FBSSxDQUFDO1NBQzlCLENBQUE7S0FDRjtJQUNELE9BQU87UUFDTCxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxDQUFDLFlBQVUsS0FBSyxxQkFBa0IsQ0FBQztLQUMxQyxDQUFBO0FBQ0gsQ0FBQztBQWZELG9CQWVDIn0=

/***/ }),

/***/ 64138:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.timeEnd = exports.timeStart = exports.count = void 0;
function count(name) {
    return {
        type: 'COUNT',
        name: name
    };
}
exports.count = count;
function timeStart(name) {
    return {
        type: 'TIME_START',
        name: name
    };
}
exports.timeStart = timeStart;
function timeEnd(name) {
    return {
        type: 'TIME_END',
        name: name
    };
}
exports.timeEnd = timeEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsS0FBSyxDQUFDLElBQVk7SUFDaEMsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxNQUFBO0tBQ0wsQ0FBQTtBQUNILENBQUM7QUFMRCxzQkFLQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFZO0lBQ3BDLE9BQU87UUFDTCxJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLE1BQUE7S0FDTCxDQUFBO0FBQ0gsQ0FBQztBQUxELDhCQUtDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDbEMsT0FBTztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksTUFBQTtLQUNMLENBQUE7QUFDSCxDQUFDO0FBTEQsMEJBS0MifQ==

/***/ }),

/***/ 91616:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var reducer_1 = __importDefault(__webpack_require__(13591));
var state_1 = __webpack_require__(33585);
function dispatch(action) {
    state_1.update(reducer_1["default"](state_1.state, action));
}
exports["default"] = dispatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9kaXNwYXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHNEQUE4QjtBQUM5QixpQ0FBdUM7QUFFdkMsU0FBUyxRQUFRLENBQUMsTUFBYztJQUM5QixjQUFNLENBQUMsb0JBQU0sQ0FBQyxhQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUMvQixDQUFDO0FBRUQscUJBQWUsUUFBUSxDQUFBIn0=

/***/ }),

/***/ 13591:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
    timings: {},
    count: {}
};
var now = function () {
    return typeof performance !== 'undefined' && performance.now
        ? performance.now()
        : Date.now();
};
exports["default"] = (function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign(__assign({}, state), { count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
                    start: now()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = now();
            var start = timing.start;
            var time = end - start;
            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFYSxRQUFBLFlBQVksR0FBRztJQUMxQixPQUFPLEVBQUUsRUFBRTtJQUNYLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHO0lBQ1YsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUc7UUFDMUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxzQkFBZSxVQUFDLEtBQW9CLEVBQUUsTUFBYzs7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTNDLDZCQUNLLEtBQUssS0FDUixLQUFLLHdCQUNBLEtBQUssQ0FBQyxLQUFLLGdCQUNiLE1BQU0sQ0FBQyxJQUFJLElBQUcsS0FBSyxHQUFHLENBQUMsVUFFM0I7U0FDRjtRQUVELEtBQUssWUFBWSxDQUFDLENBQUM7WUFDakIsNkJBQ0ssS0FBSyxLQUNSLE9BQU8sd0JBQ0YsS0FBSyxDQUFDLE9BQU8sZ0JBQ2YsTUFBTSxDQUFDLElBQUksSUFBRztvQkFDYixLQUFLLEVBQUUsR0FBRyxFQUFFO2lCQUNiLFVBRUo7U0FDRjtRQUVELEtBQUssVUFBVSxDQUFDLENBQUM7WUFDZixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV6QyxJQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQTtZQUNULElBQUEsS0FBSyxHQUFLLE1BQU0sTUFBWCxDQUFXO1lBRXhCLElBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUE7WUFFeEIsNkJBQ0ssS0FBSyxLQUNSLE9BQU8sd0JBQ0YsS0FBSyxDQUFDLE9BQU8sZ0JBQ2YsTUFBTSxDQUFDLElBQUksMEJBQ1AsTUFBTSxLQUNULEdBQUcsS0FBQTtvQkFDSCxJQUFJLE1BQUEsYUFHVDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQTtTQUNiO0tBQ0Y7QUFDSCxDQUFDLEVBQUEifQ==

/***/ }),

/***/ 33585:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.update = exports.state = void 0;
function update(newState) {
    exports.state = newState;
}
exports.update = update;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9zdG9yZS9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxTQUFnQixNQUFNLENBQUMsUUFBYTtJQUNsQyxhQUFLLEdBQUcsUUFBUSxDQUFBO0FBQ2xCLENBQUM7QUFGRCx3QkFFQyJ9

/***/ }),

/***/ 11254:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
/**
 * Serialize a `bigint` to a string
 */
exports["default"] = {
    type: 'BigInt',
    shouldTransform: function (_type, obj) {
        return typeof obj === 'bigint';
    },
    toSerializable: function (value) {
        return value + "n";
    },
    fromSerializable: function (data) {
        return BigInt(data.slice(0, -1));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlnSW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RyYW5zZm9ybS9CaWdJbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILHFCQUFlO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxlQUFlLEVBQWYsVUFBZ0IsS0FBVSxFQUFFLEdBQVE7UUFDbEMsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUE7SUFDaEMsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLEtBQWE7UUFDMUIsT0FBVSxLQUFLLE1BQUcsQ0FBQTtJQUNwQixDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQVk7UUFDM0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Q0FDRixDQUFBIn0=

/***/ }),

/***/ 30076:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
/**
 * Serialize a function into JSON
 */
exports["default"] = {
    type: 'Function',
    lookup: Function,
    shouldTransform: function (type, obj) {
        return typeof obj === 'function';
    },
    toSerializable: function (func) {
        var body = '';
        try {
            body = func
                .toString()
                .substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
        }
        catch (e) { }
        return {
            name: func.name,
            body: body,
            proto: Object.getPrototypeOf(func).constructor.name
        };
    },
    fromSerializable: function (data) {
        try {
            var tempFunc = function () { };
            if (typeof data.name === 'string') {
                Object.defineProperty(tempFunc, 'name', {
                    value: data.name,
                    writable: false
                });
            }
            if (typeof data.body === 'string') {
                Object.defineProperty(tempFunc, 'body', {
                    value: data.body,
                    writable: false
                });
            }
            if (typeof data.proto === 'string') {
                // @ts-ignore
                tempFunc.constructor = {
                    name: data.proto
                };
            }
            return tempFunc;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUE7O0dBRUc7QUFDSCxxQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGVBQWUsRUFBZixVQUFnQixJQUFTLEVBQUUsR0FBUTtRQUNqQyxPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsSUFBYztRQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7UUFDYixJQUFJO1lBQ0YsSUFBSSxHQUFHLElBQUk7aUJBQ1IsUUFBUSxFQUFFO2lCQUNWLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDM0Q7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBRWQsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1NBQ3BELENBQUE7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWE7UUFDNUIsSUFBSTtZQUNGLElBQU0sUUFBUSxHQUFHLGNBQWEsQ0FBQyxDQUFBO1lBRS9CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsYUFBYTtnQkFDYixRQUFRLENBQUMsV0FBVyxHQUFHO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2pCLENBQUE7YUFDRjtZQUVELE9BQU8sUUFBUSxDQUFBO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==

/***/ }),

/***/ 69329:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
// Sandbox HTML elements
var sandbox;
function getSandbox() {
    return (sandbox || (sandbox = document.implementation.createHTMLDocument('sandbox')));
}
function objectifyAttributes(element) {
    var data = {};
    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */
exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function (type, obj) {
        return (obj &&
            obj.children &&
            typeof obj.innerHTML === 'string' &&
            typeof obj.tagName === 'string');
    },
    toSerializable: function (element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function (data) {
        try {
            var element = getSandbox().createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                }
                catch (e) { }
            }
            return element;
        }
        catch (e) {
            return data;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFJLE9BQWlCLENBQUE7QUFDckIsU0FBUyxVQUFVO0lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEtBQVAsT0FBTyxHQUFLLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQTtBQUM1RSxDQUFDO0FBVUQsU0FBUyxtQkFBbUIsQ0FBQyxPQUFZO0lBQ3ZDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQXNCLFVBQWtCLEVBQWxCLEtBQUEsT0FBTyxDQUFDLFVBQVUsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFyQyxJQUFJLFNBQVMsU0FBQTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUE7S0FDdkM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRDs7R0FFRztBQUNILHFCQUFlO0lBQ2IsSUFBSSxFQUFFLGFBQWE7SUFDbkIsZUFBZSxFQUFmLFVBQWdCLElBQVMsRUFBRSxHQUFRO1FBQ2pDLE9BQU8sQ0FDTCxHQUFHO1lBQ0gsR0FBRyxDQUFDLFFBQVE7WUFDWixPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssUUFBUTtZQUNqQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUNoQyxDQUFBO0lBQ0gsQ0FBQztJQUNELGNBQWMsRUFBZCxVQUFlLE9BQW9CO1FBQ2pDLE9BQU87WUFDTCxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdEMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUN4QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7U0FDbEIsQ0FBQTtJQUNkLENBQUM7SUFDRCxnQkFBZ0IsRUFBaEIsVUFBaUIsSUFBYTtRQUM1QixJQUFJO1lBQ0YsSUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN4RCxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7WUFDbEMsS0FBc0IsVUFBNEIsRUFBNUIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsY0FBNEIsRUFBNUIsSUFBNEIsRUFBRTtnQkFBL0MsSUFBSSxTQUFTLFNBQUE7Z0JBQ2hCLElBQUk7b0JBQ0YsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO2lCQUM1RDtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO2FBQ2Y7WUFDRCxPQUFPLE9BQU8sQ0FBQTtTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQTtTQUNaO0lBQ0gsQ0FBQztDQUNGLENBQUEifQ==

/***/ }),

/***/ 5761:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * Serialize a Map into JSON
 */
exports["default"] = {
    type: 'Map',
    lookup: Map,
    shouldTransform: function (type, obj) {
        return obj && obj.constructor && obj.constructor.name === 'Map';
    },
    toSerializable: function (map) {
        var body = {};
        map.forEach(function (value, key) {
            var k = typeof key == 'object' ? JSON.stringify(key) : key;
            body[k] = value;
        });
        return {
            name: 'Map',
            body: body,
            proto: Object.getPrototypeOf(map).constructor.name
        };
    },
    fromSerializable: function (data) {
        var body = data.body;
        var obj = __assign({}, body);
        if (typeof data.proto === 'string') {
            // @ts-ignore
            obj.constructor = {
                name: data.proto
            };
        }
        return obj;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1RyYW5zZm9ybS9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BOztHQUVHO0FBQ0gscUJBQWU7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLE1BQU0sRUFBRSxHQUFHO0lBQ1gsZUFBZSxFQUFmLFVBQWdCLElBQVMsRUFBRSxHQUFRO1FBQ2pDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFBO0lBQ2pFLENBQUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxHQUFRO1FBQ3JCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUViLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUUsR0FBRztZQUM5QixJQUFNLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtZQUM1RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTztZQUNMLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxNQUFBO1lBQ0osS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUk7U0FDbkQsQ0FBQTtJQUNILENBQUM7SUFDRCxnQkFBZ0IsRUFBaEIsVUFBaUIsSUFBYTtRQUNwQixJQUFBLElBQUksR0FBSyxJQUFJLEtBQVQsQ0FBUztRQUNyQixJQUFJLEdBQUcsZ0JBQVEsSUFBSSxDQUFFLENBQUE7UUFFckIsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ2xDLGFBQWE7WUFDYixHQUFHLENBQUMsV0FBVyxHQUFHO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDakIsQ0FBQTtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0YsQ0FBQSJ9

/***/ }),

/***/ 4290:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
function isMinusZero(value) {
    return 1 / value === -Infinity;
}
exports["default"] = {
    type: 'Arithmetic',
    lookup: Number,
    shouldTransform: function (type, value) {
        return (type === 'number' &&
            (value === Infinity || value === -Infinity || isMinusZero(value)));
    },
    toSerializable: function (value) {
        return value === Infinity
            ? Arithmetic.infinity
            : value === -Infinity
                ? Arithmetic.minusInfinity
                : Arithmetic.minusZero;
    },
    fromSerializable: function (data) {
        if (data === Arithmetic.infinity)
            return Infinity;
        if (data === Arithmetic.minusInfinity)
            return -Infinity;
        if (data === Arithmetic.minusZero)
            return -0;
        return data;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpdGhtZXRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vYXJpdGhtZXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLG1EQUFRLENBQUE7SUFDUiw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBSztJQUN4QixPQUFPLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUE7QUFDaEMsQ0FBQztBQUVELHFCQUFlO0lBQ2IsSUFBSSxFQUFFLFlBQVk7SUFDbEIsTUFBTSxFQUFFLE1BQU07SUFDZCxlQUFlLEVBQWYsVUFBZ0IsSUFBUyxFQUFFLEtBQVU7UUFDbkMsT0FBTyxDQUNMLElBQUksS0FBSyxRQUFRO1lBQ2pCLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2xFLENBQUE7SUFDSCxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsS0FBSztRQUNsQixPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ3ZCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNyQixDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUTtnQkFDckIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhO2dCQUMxQixDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQTtJQUMxQixDQUFDO0lBQ0QsZ0JBQWdCLEVBQWhCLFVBQWlCLElBQWdCO1FBQy9CLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxRQUFRO1lBQUUsT0FBTyxRQUFRLENBQUE7UUFDakQsSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDLGFBQWE7WUFBRSxPQUFPLENBQUMsUUFBUSxDQUFBO1FBQ3ZELElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUU1QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FDRixDQUFBIn0=

/***/ }),

/***/ 95575:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Decode = exports.Encode = void 0;
var arithmetic_1 = __importDefault(__webpack_require__(4290));
var BigInt_1 = __importDefault(__webpack_require__(11254));
var Function_1 = __importDefault(__webpack_require__(30076));
var HTML_1 = __importDefault(__webpack_require__(69329));
var Map_1 = __importDefault(__webpack_require__(5761));
var replicator_1 = __importDefault(__webpack_require__(25954));
var transforms = [HTML_1["default"], Function_1["default"], arithmetic_1["default"], Map_1["default"], BigInt_1["default"]];
var replicator = new replicator_1["default"]();
replicator.addTransforms(transforms);
function Encode(data, limit) {
    return JSON.parse(replicator.encode(data, limit));
}
exports.Encode = Encode;
function Decode(data) {
    var decoded = replicator.decode(JSON.stringify(data));
    // remove __console_feed_remaining__
    decoded.data.pop();
    return decoded;
}
exports.Decode = Decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDREQUFxQztBQUNyQyxvREFBNkI7QUFDN0Isd0RBQWlDO0FBQ2pDLGdEQUF5QjtBQUN6Qiw4Q0FBdUI7QUFFdkIsNERBQXFDO0FBRXJDLElBQU0sVUFBVSxHQUFHLENBQUMsaUJBQUksRUFBRSxxQkFBUSxFQUFFLHVCQUFVLEVBQUUsZ0JBQUcsRUFBRSxtQkFBTSxDQUFDLENBQUE7QUFFNUQsSUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7QUFDbkMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUVwQyxTQUFnQixNQUFNLENBQUksSUFBUyxFQUFFLEtBQWM7SUFDakQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDbkQsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQVM7SUFDOUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDdkQsb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUxELHdCQUtDIn0=

/***/ }),

/***/ 25954:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
// Const
var TRANSFORMED_TYPE_KEY = '@t';
var CIRCULAR_REF_KEY = '@r';
var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
var REMAINING_KEY = '__console_feed_remaining__';
var GLOBAL = (function getGlobal() {
    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
    var savedEval = eval;
    return savedEval('this');
})();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
var MAP_SUPPORTED = typeof Map === 'function';
var SET_SUPPORTED = typeof Set === 'function';
var TYPED_ARRAY_CTORS = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
];
// Saved proto functions
var arrSlice = Array.prototype.slice;
// Default serializer
var JSONSerializer = {
    serialize: function (val) {
        return JSON.stringify(val);
    },
    deserialize: function (val) {
        return JSON.parse(val);
    }
};
// EncodingTransformer
var EncodingTransformer = /** @class */ (function () {
    function EncodingTransformer(val, transforms, limit) {
        this.references = val;
        this.transforms = transforms;
        this.transformsMap = this._makeTransformsMap();
        this.circularCandidates = [];
        this.circularCandidatesDescrs = [];
        this.circularRefCount = 0;
        this.limit = limit !== null && limit !== void 0 ? limit : Infinity;
    }
    EncodingTransformer._createRefMark = function (idx) {
        var obj = Object.create(null);
        obj[CIRCULAR_REF_KEY] = idx;
        return obj;
    };
    EncodingTransformer.prototype._createCircularCandidate = function (val, parent, key) {
        this.circularCandidates.push(val);
        this.circularCandidatesDescrs.push({ parent: parent, key: key, refIdx: -1 });
    };
    EncodingTransformer.prototype._applyTransform = function (val, parent, key, transform) {
        var result = Object.create(null);
        var serializableVal = transform.toSerializable(val);
        if (typeof serializableVal === 'object')
            this._createCircularCandidate(val, parent, key);
        result[TRANSFORMED_TYPE_KEY] = transform.type;
        result.data = this._handleValue(function () { return serializableVal; }, parent, key);
        return result;
    };
    EncodingTransformer.prototype._handleArray = function (arr) {
        var result = [];
        var arrayLimit = Math.min(arr.length, this.limit);
        var remaining = arr.length - arrayLimit;
        var _loop_1 = function (i) {
            result[i] = this_1._handleValue(function () { return arr[i]; }, result, i);
        };
        var this_1 = this;
        for (var i = 0; i < arrayLimit; i++) {
            _loop_1(i);
        }
        result[arrayLimit] = REMAINING_KEY + remaining;
        return result;
    };
    EncodingTransformer.prototype._handlePlainObject = function (obj) {
        var _a, _b;
        var result = Object.create(null);
        var counter = 0;
        var total = 0;
        var _loop_2 = function (key) {
            if (Reflect.has(obj, key)) {
                if (counter >= this_2.limit) {
                    total++;
                    return "continue";
                }
                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
                result[resultKey] = this_2._handleValue(function () { return obj[key]; }, result, resultKey);
                counter++;
                total++;
            }
        };
        var this_2 = this;
        for (var key in obj) {
            _loop_2(key);
        }
        var remaining = total - counter;
        var name = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
        if (name && name !== 'Object') {
            result.constructor = { name: name };
        }
        if (remaining) {
            result[REMAINING_KEY] = remaining;
        }
        return result;
    };
    EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
        this._createCircularCandidate(obj, parent, key);
        return Array.isArray(obj)
            ? this._handleArray(obj)
            : this._handlePlainObject(obj);
    };
    EncodingTransformer.prototype._ensureCircularReference = function (obj) {
        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
        if (circularCandidateIdx > -1) {
            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
            if (descr.refIdx === -1)
                descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
            return EncodingTransformer._createRefMark(descr.refIdx);
        }
        return null;
    };
    EncodingTransformer.prototype._handleValue = function (getVal, parent, key) {
        try {
            var val = getVal();
            var type = typeof val;
            var isObject = type === 'object' && val !== null;
            if (isObject) {
                var refMark = this._ensureCircularReference(val);
                if (refMark)
                    return refMark;
            }
            var transform = this._findTransform(type, val);
            if (transform) {
                return this._applyTransform(val, parent, key, transform);
            }
            if (isObject)
                return this._handleObject(val, parent, key);
            return val;
        }
        catch (e) {
            try {
                return this._handleValue(function () { return (e instanceof Error ? e : new Error(e)); }, parent, key);
            }
            catch (_a) {
                return null;
            }
        }
    };
    EncodingTransformer.prototype._makeTransformsMap = function () {
        if (!MAP_SUPPORTED) {
            return;
        }
        var map = new Map();
        this.transforms.forEach(function (transform) {
            if (transform.lookup) {
                map.set(transform.lookup, transform);
            }
        });
        return map;
    };
    EncodingTransformer.prototype._findTransform = function (type, val) {
        if (MAP_SUPPORTED) {
            if (val && val.constructor) {
                var transform = this.transformsMap.get(val.constructor);
                if (transform === null || transform === void 0 ? void 0 : transform.shouldTransform(type, val))
                    return transform;
            }
        }
        for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            if (transform.shouldTransform(type, val))
                return transform;
        }
    };
    EncodingTransformer.prototype.transform = function () {
        var _this = this;
        var references = [this._handleValue(function () { return _this.references; }, null, null)];
        for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
            var descr = _a[_i];
            if (descr.refIdx > 0) {
                references[descr.refIdx] = descr.parent[descr.key];
                descr.parent[descr.key] = EncodingTransformer._createRefMark(descr.refIdx);
            }
        }
        return references;
    };
    return EncodingTransformer;
}());
// DecodingTransform
var DecodingTransformer = /** @class */ (function () {
    function DecodingTransformer(references, transformsMap) {
        this.activeTransformsStack = [];
        this.visitedRefs = Object.create(null);
        this.references = references;
        this.transformMap = transformsMap;
    }
    DecodingTransformer.prototype._handlePlainObject = function (obj) {
        var unescaped = Object.create(null);
        if ('constructor' in obj) {
            if (!obj.constructor || typeof obj.constructor.name !== 'string') {
                obj.constructor = {
                    name: 'Object'
                };
            }
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                this._handleValue(obj[key], obj, key);
                if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
                    // NOTE: use intermediate object to avoid unescaped and escaped keys interference
                    // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
                    unescaped[key.substring(1)] = obj[key];
                    delete obj[key];
                }
            }
        }
        for (var unsecapedKey in unescaped)
            obj[unsecapedKey] = unescaped[unsecapedKey];
    };
    DecodingTransformer.prototype._handleTransformedObject = function (obj, parent, key) {
        var transformType = obj[TRANSFORMED_TYPE_KEY];
        var transform = this.transformMap[transformType];
        if (!transform)
            throw new Error("Can't find transform for \"" + transformType + "\" type.");
        this.activeTransformsStack.push(obj);
        this._handleValue(obj.data, obj, 'data');
        this.activeTransformsStack.pop();
        parent[key] = transform.fromSerializable(obj.data);
    };
    DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (refIdx, parent, key) {
        // NOTE: we've hit a hard case: object reference itself during transformation.
        // We can't dereference it since we don't have resulting object yet. And we'll
        // not be able to restore reference lately because we will need to traverse
        // transformed object again and reference might be unreachable or new object contain
        // new circular references. As a workaround we create getter, so once transformation
        // complete, dereferenced property will point to correct transformed object.
        var references = this.references;
        Object.defineProperty(parent, key, {
            // @ts-ignore
            val: void 0,
            configurable: true,
            enumerable: true,
            get: function () {
                if (this.val === void 0)
                    this.val = references[refIdx];
                return this.val;
            },
            set: function (value) {
                this.val = value;
            }
        });
    };
    DecodingTransformer.prototype._handleCircularRef = function (refIdx, parent, key) {
        if (this.activeTransformsStack.includes(this.references[refIdx]))
            this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
        else {
            if (!this.visitedRefs[refIdx]) {
                this.visitedRefs[refIdx] = true;
                this._handleValue(this.references[refIdx], this.references, refIdx);
            }
            parent[key] = this.references[refIdx];
        }
    };
    DecodingTransformer.prototype._handleValue = function (val, parent, key) {
        if (typeof val !== 'object' || val === null)
            return;
        var refIdx = val[CIRCULAR_REF_KEY];
        if (refIdx !== void 0)
            this._handleCircularRef(refIdx, parent, key);
        else if (val[TRANSFORMED_TYPE_KEY])
            this._handleTransformedObject(val, parent, key);
        else if (Array.isArray(val)) {
            for (var i = 0; i < val.length; i++)
                this._handleValue(val[i], val, i);
        }
        else
            this._handlePlainObject(val);
    };
    DecodingTransformer.prototype.transform = function () {
        this.visitedRefs[0] = true;
        this._handleValue(this.references[0], this.references, 0);
        return this.references[0];
    };
    return DecodingTransformer;
}());
// Transforms
var builtInTransforms = [
    {
        type: '[[NaN]]',
        shouldTransform: function (type, val) {
            return type === 'number' && isNaN(val);
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return NaN;
        }
    },
    {
        type: '[[undefined]]',
        shouldTransform: function (type) {
            return type === 'undefined';
        },
        toSerializable: function () {
            return '';
        },
        fromSerializable: function () {
            return void 0;
        }
    },
    {
        type: '[[Date]]',
        lookup: Date,
        shouldTransform: function (type, val) {
            return val instanceof Date;
        },
        toSerializable: function (date) {
            return date.getTime();
        },
        fromSerializable: function (val) {
            var date = new Date();
            date.setTime(val);
            return date;
        }
    },
    {
        type: '[[RegExp]]',
        lookup: RegExp,
        shouldTransform: function (type, val) {
            return val instanceof RegExp;
        },
        toSerializable: function (re) {
            var result = {
                src: re.source,
                flags: ''
            };
            if (re.global)
                result.flags += 'g';
            if (re.ignoreCase)
                result.flags += 'i';
            if (re.multiline)
                result.flags += 'm';
            return result;
        },
        fromSerializable: function (val) {
            return new RegExp(val.src, val.flags);
        }
    },
    {
        type: '[[Error]]',
        lookup: Error,
        shouldTransform: function (type, val) {
            return val instanceof Error;
        },
        toSerializable: function (err) {
            var _a, _b;
            if (!err.stack) {
                ;
                (_b = (_a = Error).captureStackTrace) === null || _b === void 0 ? void 0 : _b.call(_a, err);
            }
            return {
                name: err.name,
                message: err.message,
                stack: err.stack
            };
        },
        fromSerializable: function (val) {
            var Ctor = GLOBAL[val.name] || Error;
            var err = new Ctor(val.message);
            err.stack = val.stack;
            return err;
        }
    },
    {
        type: '[[ArrayBuffer]]',
        lookup: ARRAY_BUFFER_SUPPORTED && ArrayBuffer,
        shouldTransform: function (type, val) {
            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
        },
        toSerializable: function (buffer) {
            var view = new Int8Array(buffer);
            return arrSlice.call(view);
        },
        fromSerializable: function (val) {
            if (ARRAY_BUFFER_SUPPORTED) {
                var buffer = new ArrayBuffer(val.length);
                var view = new Int8Array(buffer);
                view.set(val);
                return buffer;
            }
            return val;
        }
    },
    {
        type: '[[TypedArray]]',
        shouldTransform: function (type, val) {
            if (ARRAY_BUFFER_SUPPORTED) {
                return ArrayBuffer.isView(val) && !(val instanceof DataView);
            }
            for (var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++) {
                var ctorName = TYPED_ARRAY_CTORS_1[_i];
                if (typeof GLOBAL[ctorName] === 'function' &&
                    val instanceof GLOBAL[ctorName])
                    return true;
            }
            return false;
        },
        toSerializable: function (arr) {
            return {
                ctorName: arr.constructor.name,
                arr: arrSlice.call(arr)
            };
        },
        fromSerializable: function (val) {
            return typeof GLOBAL[val.ctorName] === 'function'
                ? new GLOBAL[val.ctorName](val.arr)
                : val.arr;
        }
    },
    {
        type: '[[Map]]',
        lookup: MAP_SUPPORTED && Map,
        shouldTransform: function (type, val) {
            return MAP_SUPPORTED && val instanceof Map;
        },
        toSerializable: function (map) {
            var flattenedKVArr = [];
            map.forEach(function (val, key) {
                flattenedKVArr.push(key);
                flattenedKVArr.push(val);
            });
            return flattenedKVArr;
        },
        fromSerializable: function (val) {
            if (MAP_SUPPORTED) {
                // NOTE: new Map(iterable) is not supported by all browsers
                var map = new Map();
                for (var i = 0; i < val.length; i += 2)
                    map.set(val[i], val[i + 1]);
                return map;
            }
            var kvArr = [];
            // @ts-ignore
            for (var j = 0; j < val.length; j += 2)
                kvArr.push([val[i], val[i + 1]]);
            return kvArr;
        }
    },
    {
        type: '[[Set]]',
        lookup: SET_SUPPORTED && Set,
        shouldTransform: function (type, val) {
            return SET_SUPPORTED && val instanceof Set;
        },
        toSerializable: function (set) {
            var arr = [];
            set.forEach(function (val) {
                arr.push(val);
            });
            return arr;
        },
        fromSerializable: function (val) {
            if (SET_SUPPORTED) {
                // NOTE: new Set(iterable) is not supported by all browsers
                var set = new Set();
                for (var i = 0; i < val.length; i++)
                    set.add(val[i]);
                return set;
            }
            return val;
        }
    },
];
// Replicator
var Replicator = /** @class */ (function () {
    function Replicator(serializer) {
        this.transforms = [];
        this.transformsMap = Object.create(null);
        this.serializer = serializer || JSONSerializer;
        this.addTransforms(builtInTransforms);
    }
    Replicator.prototype.addTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
            var transform = transforms_1[_i];
            if (this.transformsMap[transform.type])
                throw new Error("Transform with type \"" + transform.type + "\" was already added.");
            this.transforms.push(transform);
            this.transformsMap[transform.type] = transform;
        }
        return this;
    };
    Replicator.prototype.removeTransforms = function (transforms) {
        transforms = Array.isArray(transforms) ? transforms : [transforms];
        for (var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++) {
            var transform = transforms_2[_i];
            var idx = this.transforms.indexOf(transform);
            if (idx > -1)
                this.transforms.splice(idx, 1);
            delete this.transformsMap[transform.type];
        }
        return this;
    };
    Replicator.prototype.encode = function (val, limit) {
        var transformer = new EncodingTransformer(val, this.transforms, limit);
        var references = transformer.transform();
        return this.serializer.serialize(references);
    };
    Replicator.prototype.decode = function (val) {
        var references = this.serializer.deserialize(val);
        var transformer = new DecodingTransformer(references, this.transformsMap);
        return transformer.transform();
    };
    return Replicator;
}());
exports["default"] = Replicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVHJhbnNmb3JtL3JlcGxpY2F0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxRQUFRO0FBQ1IsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUE7QUFDakMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUE7QUFDN0IsSUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUE7QUFFNUMsSUFBTSxhQUFhLEdBQUcsNEJBQTRCLENBQUE7QUFFbEQsSUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLFNBQVM7SUFDaEMsOEZBQThGO0lBQzlGLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQTtJQUV0QixPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUMsRUFBRSxDQUFBO0FBRUosSUFBTSxzQkFBc0IsR0FBRyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUE7QUFDaEUsSUFBTSxhQUFhLEdBQUcsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFBO0FBQy9DLElBQU0sYUFBYSxHQUFHLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQTtBQUUvQyxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztDQUNmLENBQUE7QUFFRCx3QkFBd0I7QUFDeEIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7QUFFdEMscUJBQXFCO0FBQ3JCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBVCxVQUFVLEdBQVE7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxHQUFRO1FBQ2xCLE9BQU8sSUFBSSxD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

/***/ }),

/***/ 45558:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
/**
 * Unhook a console constructor and restore back the Native methods
 * @argument console The Console constructor to Hook
 */
function Unhook(console) {
    if (console.feed) {
        for (var _i = 0, _a = Object.keys(console.feed.pointers); _i < _a.length; _i++) {
            var method = _a[_i];
            console[method] = console.feed.pointers[method];
        }
        return delete console.feed;
    }
    else {
        return false;
    }
}
exports["default"] = Unhook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVW5ob29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsU0FBUyxNQUFNLENBQUMsT0FBc0I7SUFDcEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2hCLEtBQXFCLFVBQWtDLEVBQWxDLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFsQyxjQUFrQyxFQUFsQyxJQUFrQyxFQUFFO1lBQXBELElBQU0sTUFBTSxTQUFBO1lBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ2hEO1FBQ0QsT0FBTyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUE7S0FDM0I7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFBO0tBQ2I7QUFDSCxDQUFDO0FBRUQscUJBQWUsTUFBTSxDQUFBIn0=

/***/ }),

/***/ 88965:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
var methods = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'table',
    'clear',
    'time',
    'timeEnd',
    'count',
    'assert',
    'command',
    'result',
    'dir',
];
exports["default"] = methods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9ucy9NZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxPQUFPLEdBQUc7SUFDZCxLQUFLO0lBQ0wsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsS0FBSztDQUNOLENBQUE7QUFFRCxxQkFBZSxPQUFPLENBQUEifQ==

/***/ }),

/***/ 66582:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.Encode = exports.Decode = exports.Unhook = exports.Hook = exports.Console = void 0;
var Component_1 = __webpack_require__(99456);
__createBinding(exports, Component_1, "default", "Console");
var Hook_1 = __webpack_require__(35288);
__createBinding(exports, Hook_1, "default", "Hook");
var Unhook_1 = __webpack_require__(45558);
__createBinding(exports, Unhook_1, "default", "Unhook");
var Transform_1 = __webpack_require__(95575);
__createBinding(exports, Transform_1, "Decode");
var Transform_2 = __webpack_require__(95575);
__createBinding(exports, Transform_2, "Encode");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFnRDtBQUF2Qyw0REFBa0I7QUFDM0IsK0JBQXdDO0FBQS9CLG9EQUFlO0FBQ3hCLG1DQUE0QztBQUFuQyx3REFBaUI7QUFFMUIseUNBQW9DO0FBQTNCLGdEQUFNO0FBQ2YseUNBQW9DO0FBQTNCLGdEQUFNIn0=

/***/ }),

/***/ 91245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ styled_browser_esm; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@emotion/styled-base/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/styled-base/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = (index);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__(5845);
// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var utils_browser_esm = __webpack_require__(68087);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js + 3 modules
var serialize_browser_esm = __webpack_require__(5565);
;// CONCATENATED MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js







var testOmitPropsOnStringTag = is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var Noop = function Noop() {
  return null;
};

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,core_browser_esm/* withEmotionCache */.Xn)(function (props, context, ref) {
      return /*#__PURE__*/(0,react.createElement)(core_browser_esm/* ThemeContext.Consumer */.Ni.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = (0,utils_browser_esm/* getRegisteredStyles */.f)(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = (0,serialize_browser_esm/* serializeStyles */.O)(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = (0,utils_browser_esm/* insertStyles */.M)(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (false) {}

        var ele = /*#__PURE__*/(0,react.createElement)(finalTag, newProps);
        var possiblyStyleElement = /*#__PURE__*/(0,react.createElement)(Noop, null);


        return /*#__PURE__*/(0,react.createElement)(react.Fragment, null, possiblyStyleElement, ele);
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {} // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var styled_base_browser_esm = (createStyled);

;// CONCATENATED MODULE: ./node_modules/console-feed/node_modules/@emotion/styled/dist/styled.browser.esm.js


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = styled_base_browser_esm.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ var styled_browser_esm = (newStyled);


/***/ }),

/***/ 76861:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ThemeProvider": function() { return /* binding */ ThemeProvider; },
  "useTheme": function() { return /* binding */ useTheme; },
  "withTheme": function() { return /* binding */ withTheme; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__(5845);
;// CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ var weak_memoize_browser_esm = (weakMemoize);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return _objectSpread({}, outerTheme, {}, theme);
};

var createCacheWithTheme = weak_memoize_browser_esm(function (outerTheme) {
  return weak_memoize_browser_esm(function (theme) {
    return getTheme(outerTheme, theme);
  });
});

var ThemeProvider = function ThemeProvider(props) {
  return /*#__PURE__*/(0,react.createElement)(core_browser_esm/* ThemeContext.Consumer */.Ni.Consumer, null, function (theme) {
    if (props.theme !== theme) {
      theme = createCacheWithTheme(theme)(props.theme);
    }

    return /*#__PURE__*/(0,react.createElement)(core_browser_esm/* ThemeContext.Provider */.Ni.Provider, {
      value: theme
    }, props.children);
  });
};

// should we change this to be forwardRef/withCSSContext style so it doesn't merge with props?
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    return /*#__PURE__*/(0,react.createElement)(core_browser_esm/* ThemeContext.Consumer */.Ni.Consumer, null, function (theme) {
      return /*#__PURE__*/(0,react.createElement)(Component, (0,esm_extends/* default */.Z)({
        theme: theme,
        ref: ref
      }, props));
    });
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoist_non_react_statics_cjs_default()(WithTheme, Component);
}

function useTheme() {
  return react.useContext(core_browser_esm/* ThemeContext */.Ni);
}




/***/ }),

/***/ 97933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImportButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76914);
/* harmony import */ var _mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52900);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6867);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46196);
// tslint:disable-next-line: no-submodule-imports match-default-export-name
var MAX_SIZE=5000000;function ImportButton(props){var{text,onFilesUploaded,disabled,acceptedFiles,icon,multiple,className}=props;var inputId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();var handleSave=ev=>{var _toArray;var{target}=ev;var files=(_toArray=(0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_1__/* .toArray */ .qo)(target.files))===null||_toArray===void 0?void 0:_toArray.filter(f=>f.size<MAX_SIZE);if(files!==null&&files!==void 0&&files.length)onFilesUploaded(files);};var ip=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{id:inputId,type:"file",hidden:true,accept:acceptedFiles===null||acceptedFiles===void 0?void 0:acceptedFiles.join(","),multiple:multiple,onChange:handleSave});return icon?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{htmlFor:inputId},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{title:text||"import",className:className,disabled:disabled,component:"span"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null),ip)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{className:className,variant:"contained",component:"label",disabled:disabled,startIcon:icon||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_OpenInBrowser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null)},text||"import",ip);}

/***/ }),

/***/ 74391:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Console; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@mui/base/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(79104);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(64680);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(71508);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/console-feed/lib/index.js
var lib = __webpack_require__(66582);
// EXTERNAL MODULE: ./src/components/console/ConsoleContext.tsx + 1 modules
var ConsoleContext = __webpack_require__(52518);
;// CONCATENATED MODULE: ./src/components/ui/AutoScroll.tsx
// bug fix: https://github.com/brianmcallister/react-auto-scroll/issues/37
function AutoScroll(props){var{children,height,className,autoScroll,setAutoScroll,style}=props;var containerElement=(0,react.useRef)(null);var css=Object.assign({},style||{},{height,overflow:"auto",scrollBehavior:"auto",pointerEvents:"auto"});var onWheel=()=>{var{current}=containerElement;if(current){setAutoScroll(current.scrollTop+current.offsetHeight===current.scrollHeight);}};(0,react.useEffect)(()=>{if(!autoScroll){return;}var{current}=containerElement;if(current)current.scrollTop=current.scrollHeight;},[children,containerElement,autoScroll]);return/*#__PURE__*/react.createElement("div",{className:className,onWheel:onWheel,ref:containerElement,style:css},children);}
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(50553);
;// CONCATENATED MODULE: ./src/components/console/ConsoleLog.tsx
function ConsoleLog(props){var{hook,height}=props;var{logs,filter,searchKeywords,appendLog,autoScroll,setAutoScroll}=(0,react.useContext)(ConsoleContext/* default */.ZP);var{darkMode}=(0,react.useContext)(DarkModeContext/* default */.ZP);(0,react.useEffect)(()=>{var hooked=hook&&typeof self!=="undefined"&&self.console&&// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,lib.Hook)(self.console,appendLog,false);return()=>{hooked&&(0,lib.Unhook)(hooked);};},[hook]);if(!darkMode)return null;var style={backgroundColor:darkMode==="dark"?"#1d1d1d":"#fff",height:"calc(100vh - 11.05rem)",fontWeight:"600",minWidth:"22rem"};return/*#__PURE__*/react.createElement(AutoScroll,{style:style,height:height||"calc(100vh - 11.05rem)",autoScroll:autoScroll,setAutoScroll:setAutoScroll},/*#__PURE__*/react.createElement(lib.Console// eslint-disable-next-line @typescript-eslint/no-explicit-any
,{logs:logs,variant:darkMode,logGrouping:true,filter:filter,styles:{BASE_FONT_SIZE:"13px",LOG_INFO_COLOR:"rgb(89,136,243)"},linkifyOptions:{defaultProtocol:"https",nl2br:false,rel:"noopened",tagName:"span",validate:true},searchKeywords:searchKeywords}));}
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(48147);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./src/components/hooks/useSnackbar.ts
var useSnackbar = __webpack_require__(37862);
// EXTERNAL MODULE: ./src/components/ImportButton.tsx
var ImportButton = __webpack_require__(97933);
;// CONCATENATED MODULE: ./src/components/console/ConsoleImportSourceMapButton.tsx
function ConsoleImportSourceMapButton(){var{setSourceMap}=(0,react.useContext)(ConsoleContext/* default */.ZP);var{enqueueSnackbar,setError}=(0,useSnackbar/* default */.Z)();var handleFilesUploaded=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(function*(files){var file=files[0];var text=yield file.text();try{setSourceMap(JSON.parse(text));enqueueSnackbar("MakeCode source map loaded","success");}catch(e){setError(e);}});return function handleFilesUploaded(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react.createElement(ImportButton["default"],{text:"Import MakeCode source map",onFilesUploaded:handleFilesUploaded,acceptedFiles:[".srcmap"],icon:true});}
// EXTERNAL MODULE: ./src/components/icons/TransportIcon.tsx
var TransportIcon = __webpack_require__(9516);
;// CONCATENATED MODULE: ./src/components/console/ConsoleSerialButton.tsx
function ConsoleSerialButton(props){var rest=Object.assign({},props);var{connected,connect,disconnect}=(0,react.useContext)(ConsoleContext/* default */.ZP);if(!connect)return null;var handleClick=connected?disconnect:connect;return/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,Object.assign({onClick:handleClick,selected:connected,title:connected?"connected to serial console":"serial console disconnected"},rest),/*#__PURE__*/react.createElement(TransportIcon/* default */.Z,{type:"serial"}));}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/SaveAlt.js
var SaveAlt = __webpack_require__(12177);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(94659);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15725);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 2 modules
var ServiceManagerContext = __webpack_require__(51188);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(54048);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(5355);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(24503);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(76446);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 4 modules
var Select = __webpack_require__(56036);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(33797);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20528);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(63339);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(36807);
;// CONCATENATED MODULE: ./src/components/console/ConsoleLevelSelect.tsx
function ConsoleLevelSelect(){var{bus}=(0,react.useContext)(Context/* default */.Z);var selectId=(0,react.useId)();var value=(0,useChange/* default */.Z)(bus,_=>_.minLoggerPriority);var levels=[specconstants/* LoggerPriority.Debug */.qit.Debug,specconstants/* LoggerPriority.Log */.qit.Log,specconstants/* LoggerPriority.Warning */.qit.Warning,specconstants/* LoggerPriority.Error */.qit.Error,specconstants/* LoggerPriority.Silent */.qit.Silent];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var handleChange=event=>{bus.minLoggerPriority=event.target.value;console.debug("bus min logger priority: "+specconstants/* LoggerPriority */.qit[bus.minLoggerPriority]);};return/*#__PURE__*/react.createElement(FormControl/* default */.Z,{style:{marginTop:"0.25rem"},variant:"outlined",size:"small"},/*#__PURE__*/react.createElement(Select/* default */.Z,{id:selectId,title:"log level",value:value,onChange:handleChange},levels.map(level=>/*#__PURE__*/react.createElement(MenuItem/* default */.Z,{key:level,value:level},/*#__PURE__*/react.createElement(Typography/* default */.Z,{variant:"caption"},specconstants/* LoggerPriority */.qit[level])))));}
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Clear.js
var Clear = __webpack_require__(63343);
;// CONCATENATED MODULE: ./src/components/console/ConsoleClearButton.tsx
function ConsoleClearButton(){var{clear}=(0,react.useContext)(ConsoleContext/* default */.ZP);return/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"clear",onClick:clear},/*#__PURE__*/react.createElement(Clear/* default */.Z,null));}
// EXTERNAL MODULE: ./src/components/buttons/ConnectButtons.tsx
var ConnectButtons = __webpack_require__(13456);
;// CONCATENATED MODULE: ./src/components/console/ConsoleToolbar.tsx
function SaveButton(){var{logs}=(0,react.useContext)(ConsoleContext/* default */.ZP);var{fileStorage}=(0,react.useContext)(ServiceManagerContext/* default */.ZP);var handleSave=()=>{fileStorage.saveText("jacdac-console.txt",(0,ConsoleContext/* serializeLogs */.mJ)(logs));};return/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"save",onClick:handleSave},/*#__PURE__*/react.createElement(SaveAlt/* default */.Z,null));}function PopOutButton(){var{setDrawerType}=(0,react.useContext)(AppContext/* default */.ZP);var handlePopOut=()=>{setDrawerType(AppContext/* DrawerType.None */.jw.None);(0,gatsby_browser_entry.navigate)("/tools/console/");};return/*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z,{title:"pop out",onClick:handlePopOut},/*#__PURE__*/react.createElement(OpenInNew/* default */.Z,null));}function SearchKeywordField(){var{searchKeywords,setSearchKeywords}=(0,react.useContext)(ConsoleContext/* default */.ZP);var handleChange=ev=>(0,react.startTransition)(()=>setSearchKeywords(ev.target.value));return/*#__PURE__*/react.createElement(TextField/* default */.Z,{style:{marginTop:"0.25rem"},type:"search",variant:"outlined",size:"small",placeholder:"filter",title:"Enter search keywords",value:searchKeywords||"",onChange:handleChange});}function ConsoleToolbar(props){var{sourceMap}=(0,react.useContext)(ConsoleContext/* default */.ZP);var{showPopout,showFiles,showSerial,showLevel,showConnect,showFilter}=props;return/*#__PURE__*/react.createElement(Grid/* default */.ZP,{sx:{mb:0.5},container:true,spacing:1,direction:"row",alignItems:"center"},showConnect&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ConnectButtons/* default */.Z,{full:"always",transparent:true})),showSerial&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ConsoleSerialButton,null)),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ConsoleClearButton,null)),showFiles&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SaveButton,null)),showFiles&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ConsoleImportSourceMapButton,null)),showFilter&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(SearchKeywordField,null)),showLevel&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(ConsoleLevelSelect,null)),showPopout&&/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},/*#__PURE__*/react.createElement(PopOutButton,null)),/*#__PURE__*/react.createElement(Grid/* default */.ZP,{item:true},!!sourceMap&&"source map loaded"));}
;// CONCATENATED MODULE: ./src/components/console/Console.tsx
var _excluded=["height","showToolbar","showBottomToolbar","hook"];/** Delay load */function Console(props){var{height,showToolbar,showBottomToolbar,hook}=props,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);return/*#__PURE__*/react.createElement(NoSsr/* default */.Z,null,showToolbar&&/*#__PURE__*/react.createElement(Paper/* default */.Z,{square:true,elevation:1},/*#__PURE__*/react.createElement(Box/* default */.Z,{display:"flex"},/*#__PURE__*/react.createElement(ConsoleToolbar,rest))),/*#__PURE__*/react.createElement(ConsoleLog,{hook:hook,height:height}),showBottomToolbar&&/*#__PURE__*/react.createElement(Box/* default */.Z,{display:"flex"},/*#__PURE__*/react.createElement(ConsoleToolbar,rest)));}

/***/ }),

/***/ 7689:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(56240)
var isWindow = __webpack_require__(70312)

function isNode (val) {
  if (!isObject(val) || !isWindow(window) || typeof window.Node !== 'function') {
    return false
  }

  return typeof val.nodeType === 'number' &&
    typeof val.nodeName === 'string'
}

module.exports = isNode


/***/ }),

/***/ 56240:
/***/ (function(module) {

"use strict";


module.exports = function isObject(x) {
	return typeof x === 'object' && x !== null;
};


/***/ }),

/***/ 70312:
/***/ (function(module) {

"use strict";


module.exports = function (obj) {

  if (obj == null) {
    return false;
  }

  var o = Object(obj);

  return o === o.window;
};


/***/ }),

/***/ 56163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(55867)["default"];


/***/ }),

/***/ 55867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports["default"] = linkifyHtml;

var _simpleHtmlTokenizer = __webpack_require__(32226);

var _simpleHtmlTokenizer2 = _interopRequireDefault(_simpleHtmlTokenizer);

var _linkify = __webpack_require__(8425);

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = linkify.options;
var Options = options.Options;


var StartTag = 'StartTag';
var EndTag = 'EndTag';
var Chars = 'Chars';
var Comment = 'Comment';

/**
	`tokens` and `token` in this section refer to tokens generated by the HTML
	parser.
*/
function linkifyHtml(str) {
	var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
	var linkifiedTokens = [];
	var linkified = [];
	var i;

	opts = new Options(opts);

	// Linkify the tokens given by the parser
	for (i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === StartTag) {
			linkifiedTokens.push(token);

			// Ignore all the contents of ignored tags
			var tagName = token.tagName.toUpperCase();
			var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
			if (!isIgnored) {
				continue;
			}

			var preskipLen = linkifiedTokens.length;
			skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
			i += linkifiedTokens.length - preskipLen - 1;
			continue;
		} else if (token.type !== Chars) {
			// Skip this token, it's not important
			linkifiedTokens.push(token);
			continue;
		}

		// Valid text token, linkify it!
		var linkifedChars = linkifyChars(token.chars, opts);
		linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
	}

	// Convert the tokens back into a string
	for (i = 0; i < linkifiedTokens.length; i++) {
		var _token = linkifiedTokens[i];
		switch (_token.type) {
			case StartTag:
				{
					var link = '<' + _token.tagName;
					if (_token.attributes.length > 0) {
						var attrs = attrsToStrings(_token.attributes);
						link += ' ' + attrs.join(' ');
					}
					link += '>';
					linkified.push(link);
					break;
				}
			case EndTag:
				linkified.push('</' + _token.tagName + '>');
				break;
			case Chars:
				linkified.push(escapeText(_token.chars));
				break;
			case Comment:
				linkified.push('<!--' + escapeText(_token.chars) + '-->');
				break;
		}
	}

	return linkified.join('');
}

/**
	`tokens` and `token` in this section referes to tokens returned by
	`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
*/
function linkifyChars(str, opts) {
	var tokens = linkify.tokenize(str);
	var result = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			result.push({
				type: StartTag,
				tagName: 'br',
				attributes: [],
				selfClosing: true
			});
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push({ type: Chars, chars: token.toString() });
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		// Build up attributes


		var attributeArray = [['href', formattedHref]];

		if (className) {
			attributeArray.push(['class', className]);
		}

		if (target) {
			attributeArray.push(['target', target]);
		}

		for (var attr in attributes) {
			attributeArray.push([attr, attributes[attr]]);
		}

		// Add the required tokens
		result.push({
			type: StartTag,
			tagName: tagName,
			attributes: attributeArray,
			selfClosing: false
		});
		result.push({ type: Chars, chars: formatted });
		result.push({ type: EndTag, tagName: tagName });
	}

	return result;
}

/**
	Returns a list of tokens skipped until the closing tag of tagName.

	* `tagName` is the closing tag which will prompt us to stop skipping
	* `tokens` is the array of tokens generated by HTML5Tokenizer which
	* `i` is the index immediately after the opening tag to skip
	* `skippedTokens` is an array which skipped tokens are being pushed into

	Caveats

	* Assumes that i is the first token after the given opening tagName
	* The closing tag will be skipped, but nothing after it
	* Will track whether there is a nested tag of the same type
*/
function skipTagTokens(tagName, tokens, i, skippedTokens) {

	// number of tokens of this type on the [fictional] stack
	var stackCount = 1;

	while (i < tokens.length && stackCount > 0) {
		var token = tokens[i];

		if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
			// Nested tag of the same type, "add to stack"
			stackCount++;
		} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
			// Closing tag
			stackCount--;
		}

		skippedTokens.push(token);
		i++;
	}

	// Note that if stackCount > 0 here, the HTML is probably invalid
	return skippedTokens;
}

function escapeText(text) {
	// Not required, HTML tokenizer ensures this occurs properly
	return text;
}

function escapeAttr(attr) {
	return attr.replace(/"/g, '&quot;');
}

function attrsToStrings(attrs) {
	var attrStrs = [];
	for (var i = 0; i < attrs.length; i++) {
		var _attrs$i = attrs[i],
		    name = _attrs$i[0],
		    value = _attrs$i[1];

		attrStrs.push(name + '="' + escapeAttr(value) + '"');
	}
	return attrStrs;
}

/***/ }),

/***/ 87100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _linkify = __webpack_require__(8425);

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = linkify.options;
var Options = options.Options;

// Given a string, converts to an array of valid React components
// (which may include strings)

function stringToElements(str, opts) {

	var tokens = linkify.tokenize(str);
	var elements = [];
	var linkId = 0;

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];

		if (token.type === 'nl' && opts.nl2br) {
			elements.push(_react2.default.createElement('br', { key: 'linkified-' + ++linkId }));
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			// Regular text
			elements.push(token.toString());
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    attributes = _opts$resolve.attributes;

		var props = {
			key: 'linkified-' + ++linkId,
			href: formattedHref
		};

		if (className) {
			props.className = className;
		}

		if (target) {
			props.target = target;
		}

		// Build up additional attributes
		// Support for events via attributes hash
		if (attributes) {
			for (var attr in attributes) {
				props[attr] = attributes[attr];
			}
		}

		elements.push(_react2.default.createElement(tagName, props, formatted));
	}

	return elements;
}

// Recursively linkify the contents of the given React Element instance
function linkifyReactElement(element, opts) {
	var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	if (_react2.default.Children.count(element.props.children) === 0) {
		// No need to clone if the element had no children
		return element;
	}

	var children = [];

	_react2.default.Children.forEach(element.props.children, function (child) {
		if (typeof child === 'string') {
			// ensure that we always generate unique element IDs for keys
			elementId = elementId + 1;
			children.push.apply(children, stringToElements(child, opts));
		} else if (_react2.default.isValidElement(child)) {
			if (typeof child.type === 'string' && options.contains(opts.ignoreTags, child.type.toUpperCase())) {
				// Don't linkify this element
				children.push(child);
			} else {
				children.push(linkifyReactElement(child, opts, ++elementId));
			}
		} else {
			// Unknown element type, just push
			children.push(child);
		}
	});

	// Set a default unique key, copy over remaining props
	var newProps = { key: 'linkified-element-' + elementId };
	for (var prop in element.props) {
		newProps[prop] = element.props[prop];
	}

	return _react2.default.cloneElement(element, newProps, children);
}

var Linkify = function (_React$Component) {
	_inherits(Linkify, _React$Component);

	function Linkify() {
		_classCallCheck(this, Linkify);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Linkify.prototype.render = function render() {
		// Copy over all non-linkify-specific props
		var newProps = { key: 'linkified-element-0' };
		for (var prop in this.props) {
			if (prop !== 'options' && prop !== 'tagName') {
				newProps[prop] = this.props[prop];
			}
		}

		var opts = new Options(this.props.options);
		var tagName = this.props.tagName || 'span';
		var element = _react2.default.createElement(tagName, newProps);

		return linkifyReactElement(element, opts, 0);
	};

	return Linkify;
}(_react2.default.Component);

exports["default"] = Linkify;

/***/ }),

/***/ 8425:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(72227);

var _options = __webpack_require__(47951);

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(6417);

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(45788);

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ 45788:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(25439);

var _multi = __webpack_require__(23370);

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(63333);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ 6417:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(25439);

var _text = __webpack_require__(63333);

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ 25439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(72227);

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ 9770:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ 23370:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(9770);

var _class = __webpack_require__(72227);

var _text = __webpack_require__(63333);

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ 63333:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(9770);

var _class = __webpack_require__(72227);

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ 72227:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ 47951:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ 32226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _html5NamedCharRefs = __webpack_require__(57691);

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

var _entityParser = __webpack_require__(17305);

var _entityParser2 = _interopRequireDefault(_entityParser);

var _eventedTokenizer = __webpack_require__(91497);

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

var _tokenizer = __webpack_require__(34630);

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _tokenize = __webpack_require__(94030);

var _tokenize2 = _interopRequireDefault(_tokenize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5Tokenizer = {
	HTML5NamedCharRefs: _html5NamedCharRefs2.default,
	EntityParser: _entityParser2.default,
	EventedTokenizer: _eventedTokenizer2.default,
	Tokenizer: _tokenizer2.default,
	tokenize: _tokenize2.default
};

exports["default"] = HTML5Tokenizer;

/***/ }),

/***/ 17305:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
function EntityParser(named) {
  this.named = named;
}

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE = /^#([0-9]+)$/;
var NAMED = /^([A-Za-z0-9]+)$/;

EntityParser.prototype.parse = function (entity) {
  if (!entity) {
    return;
  }
  var matches = entity.match(HEXCHARCODE);
  if (matches) {
    return "&#x" + matches[1] + ";";
  }
  matches = entity.match(CHARCODE);
  if (matches) {
    return "&#" + matches[1] + ";";
  }
  matches = entity.match(NAMED);
  if (matches) {
    return this.named[matches[1]] || "&" + matches[1] + ";";
  }
};

exports["default"] = EntityParser;

/***/ }),

/***/ 91497:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(80055);

function EventedTokenizer(delegate, entityParser) {
  this.delegate = delegate;
  this.entityParser = entityParser;

  this.state = null;
  this.input = null;

  this.index = -1;
  this.line = -1;
  this.column = -1;
  this.tagLine = -1;
  this.tagColumn = -1;

  this.reset();
}

EventedTokenizer.prototype = {
  reset: function reset() {
    this.state = 'beforeData';
    this.input = '';

    this.index = 0;
    this.line = 1;
    this.column = 0;

    this.tagLine = -1;
    this.tagColumn = -1;

    this.delegate.reset();
  },

  tokenize: function tokenize(input) {
    this.reset();
    this.tokenizePart(input);
    this.tokenizeEOF();
  },

  tokenizePart: function tokenizePart(input) {
    this.input += (0, _utils.preprocessInput)(input);

    while (this.index < this.input.length) {
      this.states[this.state].call(this);
    }
  },

  tokenizeEOF: function tokenizeEOF() {
    this.flushData();
  },

  flushData: function flushData() {
    if (this.state === 'data') {
      this.delegate.finishData();
      this.state = 'beforeData';
    }
  },

  peek: function peek() {
    return this.input.charAt(this.index);
  },

  consume: function consume() {
    var char = this.peek();

    this.index++;

    if (char === "\n") {
      this.line++;
      this.column = 0;
    } else {
      this.column++;
    }

    return char;
  },

  consumeCharRef: function consumeCharRef() {
    var endIndex = this.input.indexOf(';', this.index);
    if (endIndex === -1) {
      return;
    }
    var entity = this.input.slice(this.index, endIndex);
    var chars = this.entityParser.parse(entity);
    if (chars) {
      var count = entity.length;
      // consume the entity chars
      while (count) {
        this.consume();
        count--;
      }
      // consume the `;`
      this.consume();

      return chars;
    }
  },

  markTagStart: function markTagStart() {
    // these properties to be removed in next major bump
    this.tagLine = this.line;
    this.tagColumn = this.column;

    if (this.delegate.tagOpen) {
      this.delegate.tagOpen();
    }
  },

  states: {
    beforeData: function beforeData() {
      var char = this.peek();

      if (char === "<") {
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else {
        this.state = 'data';
        this.delegate.beginData();
      }
    },

    data: function data() {
      var char = this.peek();

      if (char === "<") {
        this.delegate.finishData();
        this.state = 'tagOpen';
        this.markTagStart();
        this.consume();
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToData(this.consumeCharRef() || "&");
      } else {
        this.consume();
        this.delegate.appendToData(char);
      }
    },

    tagOpen: function tagOpen() {
      var char = this.consume();

      if (char === "!") {
        this.state = 'markupDeclaration';
      } else if (char === "/") {
        this.state = 'endTagOpen';
      } else if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginStartTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    },

    markupDeclaration: function markupDeclaration() {
      var char = this.consume();

      if (char === "-" && this.input.charAt(this.index) === "-") {
        this.consume();
        this.state = 'commentStart';
        this.delegate.beginComment();
      }
    },

    commentStart: function commentStart() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentStartDash';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData(char);
        this.state = 'comment';
      }
    },

    commentStartDash: function commentStartDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("-");
        this.state = 'comment';
      }
    },

    comment: function comment() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEndDash';
      } else {
        this.delegate.appendToCommentData(char);
      }
    },

    commentEndDash: function commentEndDash() {
      var char = this.consume();

      if (char === "-") {
        this.state = 'commentEnd';
      } else {
        this.delegate.appendToCommentData("-" + char);
        this.state = 'comment';
      }
    },

    commentEnd: function commentEnd() {
      var char = this.consume();

      if (char === ">") {
        this.delegate.finishComment();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToCommentData("--" + char);
        this.state = 'comment';
      }
    },

    tagName: function tagName() {
      var char = this.consume();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.appendToTagName(char);
      }
    },

    beforeAttributeName: function beforeAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.state = 'selfClosingStartTag';
        this.consume();
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    attributeName: function attributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.state = 'afterAttributeName';
        this.consume();
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.state = 'beforeAttributeValue';
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeName(char);
      }
    },

    afterAttributeName: function afterAttributeName() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        return;
      } else if (char === "/") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === "=") {
        this.consume();
        this.state = 'beforeAttributeValue';
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'attributeName';
        this.delegate.beginAttribute();
        this.delegate.appendToAttributeName(char);
      }
    },

    beforeAttributeValue: function beforeAttributeValue() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
      } else if (char === '"') {
        this.state = 'attributeValueDoubleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === "'") {
        this.state = 'attributeValueSingleQuoted';
        this.delegate.beginAttributeValue(true);
        this.consume();
      } else if (char === ">") {
        this.delegate.beginAttributeValue(false);
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'attributeValueUnquoted';
        this.delegate.beginAttributeValue(false);
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
      var char = this.consume();

      if (char === '"') {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
      var char = this.consume();

      if (char === "'") {
        this.delegate.finishAttributeValue();
        this.state = 'afterAttributeValueQuoted';
      } else if (char === "&") {
        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
      } else {
        this.delegate.appendToAttributeValue(char);
      }
    },

    attributeValueUnquoted: function attributeValueUnquoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.delegate.finishAttributeValue();
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "&") {
        this.consume();
        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
      } else if (char === ">") {
        this.delegate.finishAttributeValue();
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.consume();
        this.delegate.appendToAttributeValue(char);
      }
    },

    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
      var char = this.peek();

      if ((0, _utils.isSpace)(char)) {
        this.consume();
        this.state = 'beforeAttributeName';
      } else if (char === "/") {
        this.consume();
        this.state = 'selfClosingStartTag';
      } else if (char === ">") {
        this.consume();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    selfClosingStartTag: function selfClosingStartTag() {
      var char = this.peek();

      if (char === ">") {
        this.consume();
        this.delegate.markTagAsSelfClosing();
        this.delegate.finishTag();
        this.state = 'beforeData';
      } else {
        this.state = 'beforeAttributeName';
      }
    },

    endTagOpen: function endTagOpen() {
      var char = this.consume();

      if ((0, _utils.isAlpha)(char)) {
        this.state = 'tagName';
        this.delegate.beginEndTag();
        this.delegate.appendToTagName(char.toLowerCase());
      }
    }
  }
};

exports["default"] = EventedTokenizer;

/***/ }),

/***/ 57691:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
var HTML5NamedCharRefs = {
    // We don't need the complete named character reference because linkifyHtml
    // does not modify the escape sequences. We do need &nbsp; so that
    // whitespace is parsed properly. Other types of whitespace should already
    // be accounted for
    nbsp: "\xA0"
};
exports["default"] = HTML5NamedCharRefs;

/***/ }),

/***/ 94030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = tokenize;

var _tokenizer = __webpack_require__(34630);

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _entityParser = __webpack_require__(17305);

var _entityParser2 = _interopRequireDefault(_entityParser);

var _html5NamedCharRefs = __webpack_require__(57691);

var _html5NamedCharRefs2 = _interopRequireDefault(_html5NamedCharRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenize(input, options) {
  var tokenizer = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
  return tokenizer.tokenize(input);
}

/***/ }),

/***/ 34630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _eventedTokenizer = __webpack_require__(91497);

var _eventedTokenizer2 = _interopRequireDefault(_eventedTokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tokenizer(entityParser, options) {
  this.token = null;
  this.startLine = 1;
  this.startColumn = 0;
  this.options = options || {};
  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
}

Tokenizer.prototype = {
  tokenize: function tokenize(input) {
    this.tokens = [];
    this.tokenizer.tokenize(input);
    return this.tokens;
  },

  tokenizePart: function tokenizePart(input) {
    this.tokens = [];
    this.tokenizer.tokenizePart(input);
    return this.tokens;
  },

  tokenizeEOF: function tokenizeEOF() {
    this.tokens = [];
    this.tokenizer.tokenizeEOF();
    return this.tokens[0];
  },

  reset: function reset() {
    this.token = null;
    this.startLine = 1;
    this.startColumn = 0;
  },

  addLocInfo: function addLocInfo() {
    if (this.options.loc) {
      this.token.loc = {
        start: {
          line: this.startLine,
          column: this.startColumn
        },
        end: {
          line: this.tokenizer.line,
          column: this.tokenizer.column
        }
      };
    }
    this.startLine = this.tokenizer.line;
    this.startColumn = this.tokenizer.column;
  },

  // Data

  beginData: function beginData() {
    this.token = {
      type: 'Chars',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToData: function appendToData(char) {
    this.token.chars += char;
  },

  finishData: function finishData() {
    this.addLocInfo();
  },

  // Comment

  beginComment: function beginComment() {
    this.token = {
      type: 'Comment',
      chars: ''
    };
    this.tokens.push(this.token);
  },

  appendToCommentData: function appendToCommentData(char) {
    this.token.chars += char;
  },

  finishComment: function finishComment() {
    this.addLocInfo();
  },

  // Tags - basic

  beginStartTag: function beginStartTag() {
    this.token = {
      type: 'StartTag',
      tagName: '',
      attributes: [],
      selfClosing: false
    };
    this.tokens.push(this.token);
  },

  beginEndTag: function beginEndTag() {
    this.token = {
      type: 'EndTag',
      tagName: ''
    };
    this.tokens.push(this.token);
  },

  finishTag: function finishTag() {
    this.addLocInfo();
  },

  markTagAsSelfClosing: function markTagAsSelfClosing() {
    this.token.selfClosing = true;
  },

  // Tags - name

  appendToTagName: function appendToTagName(char) {
    this.token.tagName += char;
  },

  // Tags - attributes

  beginAttribute: function beginAttribute() {
    this._currentAttribute = ["", "", null];
    this.token.attributes.push(this._currentAttribute);
  },

  appendToAttributeName: function appendToAttributeName(char) {
    this._currentAttribute[0] += char;
  },

  beginAttributeValue: function beginAttributeValue(isQuoted) {
    this._currentAttribute[2] = isQuoted;
  },

  appendToAttributeValue: function appendToAttributeValue(char) {
    this._currentAttribute[1] = this._currentAttribute[1] || "";
    this._currentAttribute[1] += char;
  },

  finishAttributeValue: function finishAttributeValue() {}
};

exports["default"] = Tokenizer;

/***/ }),

/***/ 80055:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isSpace = isSpace;
exports.isAlpha = isAlpha;
exports.preprocessInput = preprocessInput;
var WSP = /[\t\n\f ]/;
var ALPHA = /[A-Za-z]/;
var CRLF = /\r\n?/g;

function isSpace(char) {
  return WSP.test(char);
}

function isAlpha(char) {
  return ALPHA.test(char);
}

function preprocessInput(input) {
  return input.replace(CRLF, "\n");
}

/***/ }),

/***/ 28175:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(87100)["default"];


/***/ }),

/***/ 52255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMInspector": function() { return /* binding */ DOMInspector$1; },
/* harmony export */   "Inspector": function() { return /* binding */ Inspector; },
/* harmony export */   "ObjectInspector": function() { return /* binding */ ObjectInspector$1; },
/* harmony export */   "ObjectLabel": function() { return /* binding */ ObjectLabel; },
/* harmony export */   "ObjectName": function() { return /* binding */ ObjectName; },
/* harmony export */   "ObjectPreview": function() { return /* binding */ ObjectPreview; },
/* harmony export */   "ObjectRootLabel": function() { return /* binding */ ObjectRootLabel; },
/* harmony export */   "ObjectValue": function() { return /* binding */ ObjectValue; },
/* harmony export */   "TableInspector": function() { return /* binding */ TableInspector$1; },
/* harmony export */   "chromeDark": function() { return /* binding */ theme$1; },
/* harmony export */   "chromeLight": function() { return /* binding */ theme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33870);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7689);
/* harmony import */ var is_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_dom__WEBPACK_IMPORTED_MODULE_2__);




function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends.apply(this, arguments);
  }
  module.exports = _extends;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _extends = unwrapExports(_extends_1);

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  module.exports = _objectWithoutPropertiesLoose;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(objectWithoutPropertiesLoose);

var objectWithoutProperties = createCommonjsModule(function (module) {
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  module.exports = _objectWithoutProperties;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

var theme$1 = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
  BASE_COLOR: 'rgb(213, 213, 213)',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'white',
  BASE_COLOR: 'black',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: '#6e6e6e',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: '#aaa',
  TABLE_TH_BACKGROUND_COLOR: '#eee',
  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
  TABLE_SORT_ICON_COLOR: '#6e6e6e',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

var themes = /*#__PURE__*/Object.freeze({
__proto__: null,
chromeDark: theme$1,
chromeLight: theme
});

var arrayWithHoles = createCommonjsModule(function (module) {
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  module.exports = _arrayWithHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  module.exports = _iterableToArrayLimit;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArrayLimit);

var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayLikeToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }
  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(unsupportedIterableToArray);

var nonIterableRest = createCommonjsModule(function (module) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }
  module.exports = _slicedToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _slicedToArray = unwrapExports(slicedToArray);

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }
    return _typeof(obj);
  }
  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _typeof = unwrapExports(_typeof_1);

var runtime_1 = createCommonjsModule(function (module) {
  var runtime = function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }
    exports.wrap = wrap;
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise =
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;
    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        context.delegate = null;
        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }
      context.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    Gp[iteratorSymbol] = function () {
      return this;
    };
    Gp.toString = function () {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }
            next.value = undefined$1;
            next.done = true;
            return next;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    exports.values = values;
    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }
    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$1;
        }
        return ContinueSentinel;
      }
    };
    return exports;
  }(
  module.exports );
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }
  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _toConsumableArray = unwrapExports(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _defineProperty = unwrapExports(defineProperty);

var ExpandedPathsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([{}, function () {}]);

var unselectable = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none'
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var base = (function (theme) {
  return {
    DOMNodePreview: {
      htmlOpenTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        },
        htmlAttributeName: {
          color: theme.HTML_ATTRIBUTE_NAME_COLOR
        },
        htmlAttributeValue: {
          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
        }
      },
      htmlCloseTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        offsetLeft: {
          marginLeft: -theme.TREENODE_PADDING_LEFT
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        }
      },
      htmlComment: {
        color: theme.HTML_COMMENT_COLOR
      },
      htmlDoctype: {
        color: theme.HTML_DOCTYPE_COLOR
      }
    },
    ObjectPreview: {
      objectDescription: {
        fontStyle: 'italic'
      },
      preview: {
        fontStyle: 'italic'
      },
      arrayMaxProperties: theme.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
      objectMaxProperties: theme.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES
    },
    ObjectName: {
      base: {
        color: theme.OBJECT_NAME_COLOR
      },
      dimmed: {
        opacity: 0.6
      }
    },
    ObjectValue: {
      objectValueNull: {
        color: theme.OBJECT_VALUE_NULL_COLOR
      },
      objectValueUndefined: {
        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
      },
      objectValueRegExp: {
        color: theme.OBJECT_VALUE_REGEXP_COLOR
      },
      objectValueString: {
        color: theme.OBJECT_VALUE_STRING_COLOR
      },
      objectValueSymbol: {
        color: theme.OBJECT_VALUE_SYMBOL_COLOR
      },
      objectValueNumber: {
        color: theme.OBJECT_VALUE_NUMBER_COLOR
      },
      objectValueBoolean: {
        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
      },
      objectValueFunctionPrefix: {
        color: theme.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
        fontStyle: 'italic'
      },
      objectValueFunctionName: {
        fontStyle: 'italic'
      }
    },
    TreeView: {
      treeViewOutline: {
        padding: 0,
        margin: 0,
        listStyleType: 'none'
      }
    },
    TreeNode: {
      treeNodeBase: {
        color: theme.BASE_COLOR,
        backgroundColor: theme.BASE_BACKGROUND_COLOR,
        lineHeight: theme.TREENODE_LINE_HEIGHT,
        cursor: 'default',
        boxSizing: 'border-box',
        listStyle: 'none',
        fontFamily: theme.TREENODE_FONT_FAMILY,
        fontSize: theme.TREENODE_FONT_SIZE
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: _objectSpread$7({
        whiteSpace: 'pre',
        fontSize: theme.ARROW_FONT_SIZE,
        marginRight: theme.ARROW_MARGIN_RIGHT
      }, unselectable),
      treeNodeArrow: {
        base: _objectSpread$7(_objectSpread$7({
          color: theme.ARROW_COLOR,
          display: 'inline-block',
          fontSize: theme.ARROW_FONT_SIZE,
          marginRight: theme.ARROW_MARGIN_RIGHT
        }, parseFloat(theme.ARROW_ANIMATION_DURATION) > 0 ? {
          transition: "transform ".concat(theme.ARROW_ANIMATION_DURATION, " ease 0s")
        } : {}), unselectable),
        expanded: {
          WebkitTransform: 'rotateZ(90deg)',
          MozTransform: 'rotateZ(90deg)',
          transform: 'rotateZ(90deg)'
        },
        collapsed: {
          WebkitTransform: 'rotateZ(0deg)',
          MozTransform: 'rotateZ(0deg)',
          transform: 'rotateZ(0deg)'
        }
      },
      treeNodeChildNodesContainer: {
        margin: 0,
        paddingLeft: theme.TREENODE_PADDING_LEFT
      }
    },
    TableInspector: {
      base: {
        color: theme.BASE_COLOR,
        position: 'relative',
        border: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
        fontFamily: theme.BASE_FONT_FAMILY,
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%',
        boxSizing: 'border-box',
        cursor: 'default'
      }
    },
    TableInspectorHeaderContainer: {
      base: {
        top: 0,
        height: '17px',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        tableLayout: 'fixed',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: '100%',
        width: '100%',
        margin: 0
      }
    },
    TableInspectorDataContainer: {
      tr: {
        display: 'table-row'
      },
      td: {
        boxSizing: 'border-box',
        border: 'none',
        height: '16px',
        verticalAlign: 'top',
        padding: '1px 4px',
        WebkitUserSelect: 'text',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px'
      },
      div: {
        position: 'static',
        top: '17px',
        bottom: 0,
        overflowY: 'overlay',
        transform: 'translateZ(0)',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        positon: 'static',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: '0 none transparent',
        margin: 0,
        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: 'fixed',
        borderSpacing: 0,
        borderCollapse: 'separate',
        width: '100%',
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },
    TableInspectorTH: {
      base: {
        position: 'relative',
        height: 'auto',
        textAlign: 'left',
        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
        fontWeight: 'normal',
        verticalAlign: 'middle',
        padding: '0 4px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px',
        ':hover': {
          backgroundColor: theme.TABLE_TH_HOVER_COLOR
        }
      },
      div: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },
    TableInspectorLeftBorder: {
      none: {
        borderLeft: 'none'
      },
      solid: {
        borderLeft: "1px solid ".concat(theme.TABLE_BORDER_COLOR)
      }
    },
    TableInspectorSortIcon: _objectSpread$7({
      display: 'block',
      marginRight: 3,
      width: 8,
      height: 7,
      marginTop: -7,
      color: theme.TABLE_SORT_ICON_COLOR,
      fontSize: 12
    }, unselectable)
  };
});

var DEFAULT_THEME_NAME = 'chromeLight';
var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(base(themes[DEFAULT_THEME_NAME]));
var useStyles = function useStyles(baseStylesKey) {
  var themeStyles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return themeStyles[baseStylesKey];
};
var themeAcceptor = function themeAcceptor(WrappedComponent) {
  var ThemeAcceptor = function ThemeAcceptor(_ref) {
    var _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? DEFAULT_THEME_NAME : _ref$theme,
        restProps = _objectWithoutProperties(_ref, ["theme"]);
    var themeStyles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      switch (Object.prototype.toString.call(theme)) {
        case '[object String]':
          return base(themes[theme]);
        case '[object Object]':
          return base(theme);
        default:
          return base(themes[DEFAULT_THEME_NAME]);
      }
    }, [theme]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider, {
      value: themeStyles
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, restProps));
  };
  ThemeAcceptor.propTypes = {
    theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)])
  };
  return ThemeAcceptor;
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Arrow = function Arrow(_ref) {
  var expanded = _ref.expanded,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: _objectSpread$6(_objectSpread$6({}, styles.base), expanded ? styles.expanded : styles.collapsed)
  }, "\u25B6");
};
var TreeNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (props) {
  props = _objectSpread$6({
    expanded: true,
    nodeRenderer: function nodeRenderer(_ref2) {
      var name = _ref2.name;
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name);
    },
    onClick: function onClick() {},
    shouldShowArrow: false,
    shouldShowPlaceholder: true
  }, props);
  var _props = props,
      expanded = _props.expanded,
      onClick = _props.onClick,
      children = _props.children,
      nodeRenderer = _props.nodeRenderer,
      title = _props.title,
      shouldShowArrow = _props.shouldShowArrow,
      shouldShowPlaceholder = _props.shouldShowPlaceholder;
  var styles = useStyles('TreeNode');
  var NodeRenderer = nodeRenderer;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    "aria-expanded": expanded,
    role: "treeitem",
    style: styles.treeNodeBase,
    title: title
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.treeNodePreviewContainer,
    onClick: onClick
  }, shouldShowArrow || react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Arrow, {
    expanded: expanded,
    styles: styles.treeNodeArrow
  }) : shouldShowPlaceholder && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.treeNodePlaceholder
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(NodeRenderer, props)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    role: "group",
    style: styles.treeNodeChildNodesContainer
  }, expanded ? children : undefined));
});
TreeNode.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  expanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  shouldShowArrow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  shouldShowPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  nodeRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var DEFAULT_ROOT_PATH = '$';
var WILDCARD = '*';
function hasChildNodes(data, dataIterator) {
  return !dataIterator(data).next().done;
}
var wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
  return Array.from({
    length: level
  }, function (_, i) {
    return [DEFAULT_ROOT_PATH].concat(Array.from({
      length: i
    }, function () {
      return '*';
    })).join('.');
  });
};
var getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths) {
  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
    return typeof path === 'string';
  });
  var expandedPaths = [];
  wildcardPaths.forEach(function (wildcardPath) {
    var keyPaths = wildcardPath.split('.');
    var populatePaths = function populatePaths(curData, curPath, depth) {
      if (depth === keyPaths.length) {
        expandedPaths.push(curPath);
        return;
      }
      var key = keyPaths[depth];
      if (depth === 0) {
        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
        }
      } else {
        if (key === WILDCARD) {
          var _iterator = _createForOfIteratorHelper$1(dataIterator(curData)),
              _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _step.value,
                  name = _step$value.name,
                  _data = _step$value.data;
              if (hasChildNodes(_data, dataIterator)) {
                populatePaths(_data, "".concat(curPath, ".").concat(name), depth + 1);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var value = curData[key];
          if (hasChildNodes(value, dataIterator)) {
            populatePaths(value, "".concat(curPath, ".").concat(key), depth + 1);
          }
        }
      }
    };
    populatePaths(data, '', 0);
  });
  return expandedPaths.reduce(function (obj, path) {
    obj[path] = true;
    return obj;
  }, _objectSpread$5({}, prevExpandedPaths));
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ConnectedTreeNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (props) {
  var data = props.data,
      dataIterator = props.dataIterator,
      path = props.path,
      depth = props.depth,
      nodeRenderer = props.nodeRenderer;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ExpandedPathsContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      expandedPaths = _useContext2[0],
      setExpandedPaths = _useContext2[1];
  var nodeHasChildNodes = hasChildNodes(data, dataIterator);
  var expanded = !!expandedPaths[path];
  var handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return nodeHasChildNodes && setExpandedPaths(function (prevExpandedPaths) {
      return _objectSpread$4(_objectSpread$4({}, prevExpandedPaths), {}, _defineProperty({}, path, !expanded));
    });
  }, [nodeHasChildNodes, setExpandedPaths, path, expanded]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeNode, _extends({
    expanded: expanded,
    onClick: handleClick
    ,
    shouldShowArrow: nodeHasChildNodes
    ,
    shouldShowPlaceholder: depth > 0
    ,
    nodeRenderer: nodeRenderer
  }, props),
  expanded ? _toConsumableArray(dataIterator(data)).map(function (_ref) {
    var name = _ref.name,
        data = _ref.data,
        renderNodeProps = _objectWithoutProperties(_ref, ["name", "data"]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectedTreeNode, _extends({
      name: name,
      data: data,
      depth: depth + 1,
      path: "".concat(path, ".").concat(name),
      key: name,
      dataIterator: dataIterator,
      nodeRenderer: nodeRenderer
    }, renderNodeProps));
  }) : null);
});
ConnectedTreeNode.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  dataIterator: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  expanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  nodeRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
var TreeView = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref2) {
  var name = _ref2.name,
      data = _ref2.data,
      dataIterator = _ref2.dataIterator,
      nodeRenderer = _ref2.nodeRenderer,
      expandPaths = _ref2.expandPaths,
      expandLevel = _ref2.expandLevel;
  var styles = useStyles('TreeView');
  var stateAndSetter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  var _stateAndSetter = _slicedToArray(stateAndSetter, 2),
      setExpandedPaths = _stateAndSetter[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    return setExpandedPaths(function (prevExpandedPaths) {
      return getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths);
    });
  }, [data, dataIterator, expandPaths, expandLevel]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExpandedPathsContext.Provider, {
    value: stateAndSetter
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    role: "tree",
    style: styles.treeViewOutline
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectedTreeNode, {
    name: name,
    data: data,
    dataIterator: dataIterator,
    depth: 0,
    path: DEFAULT_ROOT_PATH,
    nodeRenderer: nodeRenderer
  })));
});
TreeView.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  dataIterator: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  nodeRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  expandPaths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  expandLevel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ObjectName = function ObjectName(_ref) {
  var name = _ref.name,
      _ref$dimmed = _ref.dimmed,
      dimmed = _ref$dimmed === void 0 ? false : _ref$dimmed,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles;
  var themeStyles = useStyles('ObjectName');
  var appliedStyles = _objectSpread$3(_objectSpread$3(_objectSpread$3({}, themeStyles.base), dimmed ? themeStyles['dimmed'] : {}), styles);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: appliedStyles
  }, name);
};
ObjectName.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dimmed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ObjectValue = function ObjectValue(_ref) {
  var object = _ref.object,
      styles = _ref.styles;
  var themeStyles = useStyles('ObjectValue');
  var mkStyle = function mkStyle(key) {
    return _objectSpread$2(_objectSpread$2({}, themeStyles[key]), styles);
  };
  switch (_typeof(object)) {
    case 'bigint':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueNumber')
      }, String(object), "n");
    case 'number':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueNumber')
      }, String(object));
    case 'string':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueString')
      }, "\"", object, "\"");
    case 'boolean':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueBoolean')
      }, String(object));
    case 'undefined':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueUndefined')
      }, "undefined");
    case 'object':
      if (object === null) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: mkStyle('objectValueNull')
        }, "null");
      }
      if (object instanceof Date) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, object.toString());
      }
      if (object instanceof RegExp) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: mkStyle('objectValueRegExp')
        }, object.toString());
      }
      if (Array.isArray(object)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Array(".concat(object.length, ")"));
      }
      if (!object.constructor) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Object");
      }
      if (typeof object.constructor.isBuffer === 'function' && object.constructor.isBuffer(object)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Buffer[".concat(object.length, "]"));
      }
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, object.constructor.name);
    case 'function':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueFunctionPrefix')
      }, "\u0192\xA0"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueFunctionName')
      }, object.name, "()"));
    case 'symbol':
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: mkStyle('objectValueSymbol')
      }, object.toString());
    default:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null);
  }
};
ObjectValue.propTypes = {
  object: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

function getPropertyValue(object, propertyName) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
  if (propertyDescriptor.get) {
    try {
      return propertyDescriptor.get();
    } catch (_unused) {
      return propertyDescriptor.get;
    }
  }
  return object[propertyName];
}

function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).reduce(function (xs, x) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}
var ObjectPreview = function ObjectPreview(_ref) {
  var data = _ref.data;
  var styles = useStyles('ObjectPreview');
  var object = data;
  if (_typeof(object) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectValue, {
      object: object
    });
  }
  if (Array.isArray(object)) {
    var maxProperties = styles.arrayMaxProperties;
    var previewArray = object.slice(0, maxProperties).map(function (element, index) {
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectValue, {
        key: index,
        object: element
      });
    });
    if (object.length > maxProperties) {
      previewArray.push( react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: "ellipsis"
      }, "\u2026"));
    }
    var arrayLength = object.length;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: styles.objectDescription
    }, arrayLength === 0 ? "" : "(".concat(arrayLength, ")\xA0")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: styles.preview
    }, "[", intersperse(previewArray, ', '), "]"));
  } else {
    var _maxProperties = styles.objectMaxProperties;
    var propertyNodes = [];
    for (var propertyName in object) {
      if (hasOwnProperty.call(object, propertyName)) {
        var ellipsis = void 0;
        if (propertyNodes.length === _maxProperties - 1 && Object.keys(object).length > _maxProperties) {
          ellipsis = react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            key: 'ellipsis'
          }, "\u2026");
        }
        var propertyValue = getPropertyValue(object, propertyName);
        propertyNodes.push( react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: propertyName
        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectName, {
          name: propertyName || "\"\""
        }), ":\xA0", react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectValue, {
          object: propertyValue
        }), ellipsis));
        if (ellipsis) break;
      }
    }
    var objectConstructorName = object.constructor ? object.constructor.name : 'Object';
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: styles.objectDescription
    }, objectConstructorName === 'Object' ? '' : "".concat(objectConstructorName, " ")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: styles.preview
    }, '{', intersperse(propertyNodes, ', '), '}'));
  }
};

var ObjectRootLabel = function ObjectRootLabel(_ref) {
  var name = _ref.name,
      data = _ref.data;
  if (typeof name === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectName, {
      name: name
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ": "), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectPreview, {
      data: data
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectPreview, {
      data: data
    });
  }
};

var ObjectLabel = function ObjectLabel(_ref) {
  var name = _ref.name,
      data = _ref.data,
      _ref$isNonenumerable = _ref.isNonenumerable,
      isNonenumerable = _ref$isNonenumerable === void 0 ? false : _ref$isNonenumerable;
  var object = data;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, typeof name === 'string' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectName, {
    name: name,
    dimmed: isNonenumerable
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectPreview, {
    data: name
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ": "), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectValue, {
    object: object
  }));
};
ObjectLabel.propTypes = {
  isNonenumerable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
  var objectIterator = regenerator.mark(function objectIterator(data) {
    var shouldIterate, dataIsArray, i, _iterator, _step, entry, _entry, k, v, keys, _iterator2, _step2, propertyName, propertyValue, _propertyValue;
    return regenerator.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = _typeof(data) === 'object' && data !== null || typeof data === 'function';
            if (shouldIterate) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            dataIsArray = Array.isArray(data);
            if (!(!dataIsArray && data[Symbol.iterator])) {
              _context.next = 32;
              break;
            }
            i = 0;
            _iterator = _createForOfIteratorHelper(data);
            _context.prev = 7;
            _iterator.s();
          case 9:
            if ((_step = _iterator.n()).done) {
              _context.next = 22;
              break;
            }
            entry = _step.value;
            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 17;
              break;
            }
            _entry = _slicedToArray(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 15;
            return {
              name: k,
              data: v
            };
          case 15:
            _context.next = 19;
            break;
          case 17:
            _context.next = 19;
            return {
              name: i.toString(),
              data: entry
            };
          case 19:
            i++;
          case 20:
            _context.next = 9;
            break;
          case 22:
            _context.next = 27;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](7);
            _iterator.e(_context.t0);
          case 27:
            _context.prev = 27;
            _iterator.f();
            return _context.finish(27);
          case 30:
            _context.next = 64;
            break;
          case 32:
            keys = Object.getOwnPropertyNames(data);
            if (sortObjectKeys === true && !dataIsArray) {
              keys.sort();
            } else if (typeof sortObjectKeys === 'function') {
              keys.sort(sortObjectKeys);
            }
            _iterator2 = _createForOfIteratorHelper(keys);
            _context.prev = 35;
            _iterator2.s();
          case 37:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 53;
              break;
            }
            propertyName = _step2.value;
            if (!propertyIsEnumerable.call(data, propertyName)) {
              _context.next = 45;
              break;
            }
            propertyValue = getPropertyValue(data, propertyName);
            _context.next = 43;
            return {
              name: propertyName || "\"\"",
              data: propertyValue
            };
          case 43:
            _context.next = 51;
            break;
          case 45:
            if (!showNonenumerable) {
              _context.next = 51;
              break;
            }
            _propertyValue = void 0;
            try {
              _propertyValue = getPropertyValue(data, propertyName);
            } catch (e) {
            }
            if (!(_propertyValue !== undefined)) {
              _context.next = 51;
              break;
            }
            _context.next = 51;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };
          case 51:
            _context.next = 37;
            break;
          case 53:
            _context.next = 58;
            break;
          case 55:
            _context.prev = 55;
            _context.t1 = _context["catch"](35);
            _iterator2.e(_context.t1);
          case 58:
            _context.prev = 58;
            _iterator2.f();
            return _context.finish(58);
          case 61:
            if (!(showNonenumerable && data !== Object.prototype
            )) {
              _context.next = 64;
              break;
            }
            _context.next = 64;
            return {
              name: '__proto__',
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };
          case 64:
          case "end":
            return _context.stop();
        }
      }
    }, objectIterator, null, [[7, 24, 27, 30], [35, 55, 58, 61]]);
  });
  return objectIterator;
};
var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectRootLabel, {
    name: name,
    data: data
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectLabel, {
    name: name,
    data: data,
    isNonenumerable: isNonenumerable
  });
};
var ObjectInspector = function ObjectInspector(_ref2) {
  var _ref2$showNonenumerab = _ref2.showNonenumerable,
      showNonenumerable = _ref2$showNonenumerab === void 0 ? false : _ref2$showNonenumerab,
      sortObjectKeys = _ref2.sortObjectKeys,
      nodeRenderer = _ref2.nodeRenderer,
      treeViewProps = _objectWithoutProperties(_ref2, ["showNonenumerable", "sortObjectKeys", "nodeRenderer"]);
  var dataIterator = createIterator(showNonenumerable, sortObjectKeys);
  var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeView, _extends({
    nodeRenderer: renderer,
    dataIterator: dataIterator
  }, treeViewProps));
};
ObjectInspector.propTypes = {
  expandLevel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  expandPaths: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  showNonenumerable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  sortObjectKeys: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)]),
  nodeRenderer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
var ObjectInspector$1 = themeAcceptor(ObjectInspector);

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement
  ) {
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}
function getHeaders(data) {
  if (_typeof(data) === 'object') {
    var rowHeaders;
    if (Array.isArray(data)) {
      var nRows = data.length;
      rowHeaders = _toConsumableArray(Array(nRows).keys());
    } else if (data !== null) {
      rowHeaders = Object.keys(data);
    }
    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
      var row = data[rowHeader];
      if (_typeof(row) === 'object' && row !== null) {
        var cols = Object.keys(row);
        cols.reduce(function (xs, x) {
          if (!xs.includes(x)) {
            xs.push(x);
          }
          return xs;
        }, colHeaders);
      }
      return colHeaders;
    }, []);
    return {
      rowHeaders: rowHeaders,
      colHeaders: colHeaders
    };
  }
  return undefined;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DataContainer = function DataContainer(_ref) {
  var rows = _ref.rows,
      columns = _ref.columns,
      rowsData = _ref.rowsData;
  var styles = useStyles('TableInspectorDataContainer');
  var borderStyles = useStyles('TableInspectorLeftBorder');
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.div
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: styles.table
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("colgroup", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows.map(function (row, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row,
      style: styles.tr
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.none)
    }, row), columns.map(function (column) {
      var rowData = rowsData[i];
      if (_typeof(rowData) === 'object' && rowData !== null && hasOwnProperty.call(rowData, column)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          key: column,
          style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.solid)
        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectValue, {
          object: rowData[column]
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          key: column,
          style: _objectSpread$1(_objectSpread$1({}, styles.td), borderStyles.solid)
        });
      }
    }));
  }))));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SortIconContainer = function SortIconContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'absolute',
      top: 1,
      right: 0,
      bottom: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, props.children);
};
var SortIcon = function SortIcon(_ref) {
  var sortAscending = _ref.sortAscending;
  var styles = useStyles('TableInspectorSortIcon');
  var glyph = sortAscending ? '▲' : '▼';
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles
  }, glyph);
};
var TH = function TH(_ref2) {
  var _ref2$sortAscending = _ref2.sortAscending,
      sortAscending = _ref2$sortAscending === void 0 ? false : _ref2$sortAscending,
      _ref2$sorted = _ref2.sorted,
      sorted = _ref2$sorted === void 0 ? false : _ref2$sorted,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? undefined : _ref2$onClick,
      _ref2$borderStyle = _ref2.borderStyle,
      borderStyle = _ref2$borderStyle === void 0 ? {} : _ref2$borderStyle,
      children = _ref2.children,
      thProps = _objectWithoutProperties(_ref2, ["sortAscending", "sorted", "onClick", "borderStyle", "children"]);
  var styles = useStyles('TableInspectorTH');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];
  var handleMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setHovered(true);
  }, []);
  var handleMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setHovered(false);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", _extends({}, thProps, {
    style: _objectSpread(_objectSpread(_objectSpread({}, styles.base), borderStyle), hovered ? styles.base[':hover'] : {}),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.div
  }, children), sorted && react__WEBPACK_IMPORTED_MODULE_0__.createElement(SortIconContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(SortIcon, {
    sortAscending: sortAscending
  })));
};

var HeaderContainer = function HeaderContainer(_ref) {
  var _ref$indexColumnText = _ref.indexColumnText,
      indexColumnText = _ref$indexColumnText === void 0 ? '(index)' : _ref$indexColumnText,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      sorted = _ref.sorted,
      sortIndexColumn = _ref.sortIndexColumn,
      sortColumn = _ref.sortColumn,
      sortAscending = _ref.sortAscending,
      onTHClick = _ref.onTHClick,
      onIndexTHClick = _ref.onIndexTHClick;
  var styles = useStyles('TableInspectorHeaderContainer');
  var borderStyles = useStyles('TableInspectorLeftBorder');
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.base
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: styles.table
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(TH, {
    borderStyle: borderStyles.none,
    sorted: sorted && sortIndexColumn,
    sortAscending: sortAscending,
    onClick: onIndexTHClick
  }, indexColumnText), columns.map(function (column) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TH, {
      borderStyle: borderStyles.solid,
      key: column,
      sorted: sorted && sortColumn === column,
      sortAscending: sortAscending,
      onClick: onTHClick.bind(null, column)
    }, column);
  })))));
};

var TableInspector = function TableInspector(_ref) {
  var data = _ref.data,
      columns = _ref.columns;
  var styles = useStyles('TableInspector');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    sorted: false,
    sortIndexColumn: false,
    sortColumn: undefined,
    sortAscending: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      sorted = _useState2$.sorted,
      sortIndexColumn = _useState2$.sortIndexColumn,
      sortColumn = _useState2$.sortColumn,
      sortAscending = _useState2$.sortAscending,
      setState = _useState2[1];
  var handleIndexTHClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setState(function (_ref2) {
      var sortIndexColumn = _ref2.sortIndexColumn,
          sortAscending = _ref2.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: true,
        sortColumn: undefined,
        sortAscending: sortIndexColumn ? !sortAscending : true
      };
    });
  }, []);
  var handleTHClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (col) {
    setState(function (_ref3) {
      var sortColumn = _ref3.sortColumn,
          sortAscending = _ref3.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: false,
        sortColumn: col,
        sortAscending: col === sortColumn ? !sortAscending : true
      };
    });
  }, []);
  if (_typeof(data) !== 'object' || data === null) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
  }
  var _getHeaders = getHeaders(data),
      rowHeaders = _getHeaders.rowHeaders,
      colHeaders = _getHeaders.colHeaders;
  if (columns !== undefined) {
    colHeaders = columns;
  }
  var rowsData = rowHeaders.map(function (rowHeader) {
    return data[rowHeader];
  });
  var columnDataWithRowIndexes;
  if (sortColumn !== undefined) {
    columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
      if (_typeof(rowData) === 'object' && rowData !== null
      ) {
          var columnData = rowData[sortColumn];
          return [columnData, index];
        }
      return [undefined, index];
    });
  } else {
    if (sortIndexColumn) {
      columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
        var columnData = rowHeaders[index];
        return [columnData, index];
      });
    }
  }
  if (columnDataWithRowIndexes !== undefined) {
    var comparator = function comparator(mapper, ascending) {
      return function (a, b) {
        var v1 = mapper(a);
        var v2 = mapper(b);
        var type1 = _typeof(v1);
        var type2 = _typeof(v2);
        var lt = function lt(v1, v2) {
          if (v1 < v2) {
            return -1;
          } else if (v1 > v2) {
            return 1;
          } else {
            return 0;
          }
        };
        var result;
        if (type1 === type2) {
          result = lt(v1, v2);
        } else {
          var order = {
            string: 0,
            number: 1,
            object: 2,
            symbol: 3,
            boolean: 4,
            undefined: 5,
            function: 6
          };
          result = lt(order[type1], order[type2]);
        }
        if (!ascending) result = -result;
        return result;
      };
    };
    var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
      return item[0];
    }, sortAscending)).map(function (item) {
      return item[1];
    });
    rowHeaders = sortedRowIndexes.map(function (i) {
      return rowHeaders[i];
    });
    rowsData = sortedRowIndexes.map(function (i) {
      return rowsData[i];
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.base
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderContainer, {
    columns: colHeaders
    ,
    sorted: sorted,
    sortIndexColumn: sortIndexColumn,
    sortColumn: sortColumn,
    sortAscending: sortAscending,
    onTHClick: handleTHClick,
    onIndexTHClick: handleIndexTHClick
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataContainer, {
    rows: rowHeaders,
    columns: colHeaders,
    rowsData: rowsData
  }));
};
TableInspector.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  columns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
var TableInspector$1 = themeAcceptor(TableInspector);

var TEXT_NODE_MAX_INLINE_CHARS = 80;
var shouldInline = function shouldInline(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
};

var OpenTag = function OpenTag(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.base
  }, '<', react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.tagName
  }, tagName), function () {
    if (attributes) {
      var attributeNodes = [];
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        attributeNodes.push( react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          key: i
        }, ' ', react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: styles.htmlAttributeName
        }, attribute.name), '="', react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: styles.htmlAttributeValue
        }, attribute.value), '"'));
      }
      return attributeNodes;
    }
  }(), '>');
};
var CloseTag = function CloseTag(_ref2) {
  var tagName = _ref2.tagName,
      _ref2$isChildNode = _ref2.isChildNode,
      isChildNode = _ref2$isChildNode === void 0 ? false : _ref2$isChildNode,
      styles = _ref2.styles;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: _extends({}, styles.base, isChildNode && styles.offsetLeft)
  }, '</', react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: styles.tagName
  }, tagName), '>');
};
var nameByNodeType = {
  1: 'ELEMENT_NODE',
  3: 'TEXT_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  11: 'DOCUMENT_FRAGMENT_NODE'
};
var DOMNodePreview = function DOMNodePreview(_ref3) {
  var isCloseTag = _ref3.isCloseTag,
      data = _ref3.data,
      expanded = _ref3.expanded;
  var styles = useStyles('DOMNodePreview');
  if (isCloseTag) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseTag, {
      styles: styles.htmlCloseTag,
      isChildNode: true,
      tagName: data.tagName
    });
  }
  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(OpenTag, {
        tagName: data.tagName,
        attributes: data.attributes,
        styles: styles.htmlOpenTag
      }), shouldInline(data) ? data.textContent : !expanded && '…', !expanded && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseTag, {
        tagName: data.tagName,
        styles: styles.htmlCloseTag
      }));
    case Node.TEXT_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, data.textContent);
    case Node.CDATA_SECTION_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, '<![CDATA[' + data.textContent + ']]>');
    case Node.COMMENT_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: styles.htmlComment
      }, '<!--', data.textContent, '-->');
    case Node.PROCESSING_INSTRUCTION_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, data.nodeName);
    case Node.DOCUMENT_TYPE_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: styles.htmlDoctype
      }, '<!DOCTYPE ', data.name, data.publicId ? " PUBLIC \"".concat(data.publicId, "\"") : '', !data.publicId && data.systemId ? ' SYSTEM' : '', data.systemId ? " \"".concat(data.systemId, "\"") : '', '>');
    case Node.DOCUMENT_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, data.nodeName);
    case Node.DOCUMENT_FRAGMENT_NODE:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, data.nodeName);
    default:
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, nameByNodeType[data.nodeType]);
  }
};
DOMNodePreview.propTypes = {
  isCloseTag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  expanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};

var domIterator = regenerator.mark(function domIterator(data) {
  var textInlined, i, node;
  return regenerator.wrap(function domIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(data && data.childNodes)) {
            _context.next = 17;
            break;
          }
          textInlined = shouldInline(data);
          if (!textInlined) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return");
        case 4:
          i = 0;
        case 5:
          if (!(i < data.childNodes.length)) {
            _context.next = 14;
            break;
          }
          node = data.childNodes[i];
          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("continue", 11);
        case 9:
          _context.next = 11;
          return {
            name: "".concat(node.tagName, "[").concat(i, "]"),
            data: node
          };
        case 11:
          i++;
          _context.next = 5;
          break;
        case 14:
          if (!data.tagName) {
            _context.next = 17;
            break;
          }
          _context.next = 17;
          return {
            name: 'CLOSE_TAG',
            data: {
              tagName: data.tagName
            },
            isCloseTag: true
          };
        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, domIterator);
});
var DOMInspector = function DOMInspector(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeView, _extends({
    nodeRenderer: DOMNodePreview,
    dataIterator: domIterator
  }, props));
};
DOMInspector.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
var DOMInspector$1 = themeAcceptor(DOMInspector);

var Inspector = function Inspector(_ref) {
  var _ref$table = _ref.table,
      table = _ref$table === void 0 ? false : _ref$table,
      data = _ref.data,
      rest = _objectWithoutProperties(_ref, ["table", "data"]);
  if (table) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableInspector$1, _extends({
      data: data
    }, rest));
  }
  if (is_dom__WEBPACK_IMPORTED_MODULE_2___default()(data)) return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DOMInspector$1, _extends({
    data: data
  }, rest));
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectInspector$1, _extends({
    data: data
  }, rest));
};
Inspector.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  table: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

//# sourceMappingURL=react-inspector.js.map


/***/ }),

/***/ 60660:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(30190);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 33870:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(60660)();
}


/***/ }),

/***/ 30190:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);
//# sourceMappingURL=3d2bac4849b3b5d4f37a07ba978469d53c1b2338-adf6a4af10fcf02268fc.js.map