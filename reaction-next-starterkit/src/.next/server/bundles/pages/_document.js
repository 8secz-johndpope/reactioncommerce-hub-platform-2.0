module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../config/analytics/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__segment__ = __webpack_require__("../config/analytics/segment.js");


/* harmony default export */ __webpack_exports__["default"] = ([
  __WEBPACK_IMPORTED_MODULE_0__segment__
]);


/***/ }),

/***/ "../config/analytics/segment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["dispatch"] = dispatch;
/* harmony export (immutable) */ __webpack_exports__["renderScript"] = renderScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment_snippet__ = __webpack_require__("@segment/snippet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__segment_snippet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__segment_snippet__);



/**
 * Dispatch tracking data to segment
 * @name dispatch
 * @ignore
 * @param {Object} data Arguments supplied by tracking library
 * @param {String} data.action String value used as the first param to analytics.track()
 * @returns {undefined} No Return
 */
function dispatch(data) {
  // Workaround for not being able to use object rest spread
  const newData = Object.assign({}, data);
  const { action } = newData;
  delete newData.action;

  window && window.analytics && window.analytics.track(action, newData);
}

/**
 * Render string script
 * @returns {String} String script to be included in the document head
 */
function renderScript() {
  const { publicRuntimeConfig: { segmentAnalytics } } = __WEBPACK_IMPORTED_MODULE_0_next_config___default()();

  const opts = {
    apiKey: segmentAnalytics.writeKey,
    page: true // Set this to `false` if you want to manually fire `analytics.page()` from within your pages.
  };

  if (segmentAnalytics.skipMinimize === true) {
    return __WEBPACK_IMPORTED_MODULE_1__segment_snippet__["max"](opts);
  }

  return __WEBPACK_IMPORTED_MODULE_1__segment_snippet__["min"](opts);
}


/***/ }),

/***/ "./lib/utils/favicons.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__("next/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getConfig = (0, _config.default)(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig;

var basePath = serverRuntimeConfig.faviconUrl;
var favicons = [{
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "".concat(basePath, "/apple-touch-icon.png")
}, {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "".concat(basePath, "/favicon-32x32.png")
}, {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "".concat(basePath, "/favicon-16x16.png")
}, {
  rel: "manifest",
  href: "".concat(basePath, "/manifest.json")
}, {
  rel: "mask-icon",
  color: "#5bbad5",
  href: "".concat(basePath, "/safari-pinned-tab.svg")
}, {
  rel: "shortcut icon",
  href: "".concat(basePath, "/favicon.ico")
}];
var _default = favicons;
exports.default = _default;

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _document = _interopRequireWildcard(__webpack_require__("next/document"));

var _server = _interopRequireDefault(__webpack_require__("styled-jsx/server"));

var _reactHelmet = _interopRequireDefault(__webpack_require__("react-helmet"));

var _analytics = _interopRequireDefault(__webpack_require__("../config/analytics/index.js"));

var _styledComponents = __webpack_require__("styled-components");

var _favicons = _interopRequireDefault(__webpack_require__("./lib/utils/favicons.js"));

var _class,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/pages/_document.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * For details about the styled-components SSR code in this file, see https://www.styled-components.com/docs/advanced#nextjs
 */
var HTMLDocument = (_temp = _class =
/*#__PURE__*/
function (_Document) {
  _inherits(HTMLDocument, _Document);

  function HTMLDocument() {
    _classCallCheck(this, HTMLDocument);

    return _possibleConstructorReturn(this, (HTMLDocument.__proto__ || Object.getPrototypeOf(HTMLDocument)).apply(this, arguments));
  }

  _createClass(HTMLDocument, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          helmet = _props.helmet,
          pageContext = _props.pageContext,
          styledComponentsStyleTags = _props.styledComponentsStyleTags;
      var htmlAttrs = helmet.htmlAttributes.toComponent(); // const { publicRuntimeConfig } = getConfig();
      // const { keycloakConfig } = publicRuntimeConfig;

      var links = [{
        rel: "canonical",
        href: process.env.CANONICAL_URL
      }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700"
      }].concat(_toConsumableArray(_favicons.default));
      var meta = [// Use minimum-scale=1 to enable GPU rasterization
      {
        name: "viewport",
        content: "user-scalable=0, initial-scale=1 minimum-scale=1, width=device-width, height=device-height"
      }]; // PWA primary color
      // pageContext is undefined when there was an Apollo network error. Avoid extra errors

      if (pageContext) {
        meta.push({
          name: "theme-color",
          content: pageContext.theme.palette.primary.main
        });
      }

      var scripts = _toConsumableArray(_analytics.default.map(function (provider) {
        return {
          type: "text/javascript",
          innerHTML: provider.renderScript()
        };
      })).concat([// {
      //   type: "text/javascript",
      //   src: `${keycloakConfig.url}/js/keycloak.js`
      // },
      {
        type: "text/javascript",
        src: "https://js.stripe.com/v3/"
      }]);

      return _react.default.createElement("html", _extends({
        lang: "en"
      }, htmlAttrs, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react.default.createElement(_reactHelmet.default, {
        htmlAttributes: {
          lang: "en",
          dir: "ltr"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), meta.map(function (tag, index) {
        return _react.default.createElement("meta", _extends({
          key: index
        }, tag, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }));
      }), links.map(function (link, index) {
        return _react.default.createElement("link", _extends({
          key: index
        }, link, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }));
      }), scripts.map(function (script, index) {
        return script.innerHTML ?
        /* eslint-disable-next-line */
        _react.default.createElement("script", {
          key: index,
          type: script.type,
          dangerouslySetInnerHTML: {
            __html: script.innerHTML
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }) : _react.default.createElement("script", _extends({
          key: index
        }, script, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }));
      }), helmet.base.toComponent(), helmet.title.toComponent(), helmet.meta.toComponent(), helmet.link.toComponent(), helmet.style.toComponent(), helmet.script.toComponent(), helmet.noscript.toComponent(), styledComponentsStyleTags), _react.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })));
    }
  }]);

  return HTMLDocument;
}(_document.default), _class.getInitialProps = function (ctx) {
  // Render app and page and get the context of the page with collected side effects.
  var pageContext;
  var sheet = new _styledComponents.ServerStyleSheet();
  var page = ctx.renderPage(function (App) {
    var WrappedComponent = function WrappedComponent(props) {
      // eslint-disable-next-line prefer-destructuring
      pageContext = props.pageContext;
      return sheet.collectStyles(_react.default.createElement(App, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })));
    };

    WrappedComponent.propTypes = {
      pageContext: _propTypes.default.object.isRequired
    };
    return WrappedComponent;
  });
  var styledComponentsStyleTags = sheet.getStyleElement();
  return _objectSpread({}, page, {
    pageContext: pageContext,
    helmet: _reactHelmet.default.rewind(),
    styles: _react.default.createElement(_react.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, _react.default.createElement("style", {
      id: "jss-server-side" // pageContext is undefined when there was an Apollo network error. Avoid extra errors
      // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: pageContext ? pageContext.sheetsRegistry.toString() : ""
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }), (0, _server.default)() || null),
    styledComponentsStyleTags: styledComponentsStyleTags
  });
}, _temp);
var _default = HTMLDocument;
exports.default = _default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "@segment/snippet":
/***/ (function(module, exports) {

module.exports = require("@segment/snippet");

/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/server":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map