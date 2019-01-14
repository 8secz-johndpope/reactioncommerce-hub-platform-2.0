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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Breadcrumbs/Breadcrumbs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _ChevronRight = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronRight"));

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Breadcrumbs/Breadcrumbs.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    container: _defineProperty({
      display: "flex",
      alignItems: "center",
      maxWidth: theme.layout.mainContentMaxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    }, theme.breakpoints.down("xs"), {
      justifyContent: "center"
    }),
    breadcrumbLink: {
      fontSize: "14px",
      fontFamily: theme.typography.fontFamily,
      color: "#3c3c3c",
      border: 0,
      textDecoration: "underline",
      margin: "0 7px"
    },
    breadcrumbIcon: {
      fontSize: "14px"
    }
  };
};

var Breadcrumbs = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkBreadcrumbs"
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call.apply(_ref, [this].concat(args))), _this.renderTopLevelTagBreadcrumb = function (tag) {
      var _this$props = _this.props,
          _this$props$classes = _this$props.classes,
          breadcrumbIcon = _this$props$classes.breadcrumbIcon,
          breadcrumbLink = _this$props$classes.breadcrumbLink,
          propTag = _this$props.tag;
      var currentTag = tag || propTag;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react.default.createElement(_ChevronRight.default, {
        className: breadcrumbIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react.default.createElement(_Link.default, {
        route: "/tag/".concat(currentTag.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("span", {
        className: breadcrumbLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, currentTag.name)));
    }, _this.renderSecondLevelTagBreadcrumb = function (tag) {
      var _this$props2 = _this.props,
          _this$props2$classes = _this$props2.classes,
          breadcrumbIcon = _this$props2$classes.breadcrumbIcon,
          breadcrumbLink = _this$props2$classes.breadcrumbLink,
          propTag = _this$props2.tag,
          tags = _this$props2.tags;
      var currentTag = tag || propTag; // Find tag that is a parent of this tag

      var nodes = tags.edges.map(function (edge) {
        return edge.node;
      });
      var parentTag = nodes.find(function (node) {
        return node.subTagIds.includes(currentTag._id);
      });
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _this.renderTopLevelTagBreadcrumb(parentTag), _react.default.createElement(_ChevronRight.default, {
        className: breadcrumbIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react.default.createElement(_Link.default, {
        route: "/tag/".concat(currentTag.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react.default.createElement("span", {
        className: breadcrumbLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, currentTag.name)));
    }, _this.renderThirdLevelTagBreadcrumb = function (tag) {
      var _this$props3 = _this.props,
          _this$props3$classes = _this$props3.classes,
          breadcrumbIcon = _this$props3$classes.breadcrumbIcon,
          breadcrumbLink = _this$props3$classes.breadcrumbLink,
          propTag = _this$props3.tag,
          tags = _this$props3.tags;
      var currentTag = tag || propTag; // Find tag that is a parent of this tag

      var nodes = tags.edges.map(function (edge) {
        return edge.node;
      });
      var parentTag = nodes.find(function (node) {
        return node.subTagIds.includes(currentTag._id);
      });
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _this.renderSecondLevelTagBreadcrumb(parentTag), _react.default.createElement(_ChevronRight.default, {
        className: breadcrumbIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react.default.createElement(_Link.default, {
        route: "/tag/".concat(currentTag.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("span", {
        className: breadcrumbLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, currentTag.name)));
    }, _this.renderTagBreadcrumbs = function (tag) {
      var propTag = _this.props.tag;
      var currentTag = tag || propTag; // If this is a top level tag, return a single breadcrumb

      if (_this.isTopLevel || currentTag && currentTag.isTopLevel) {
        return _this.renderTopLevelTagBreadcrumb(currentTag);
      } // If this is not a top level tag, check to see if this is
      // a third level tag


      if (!_this.isTopLevel && currentTag && currentTag.subTagIds && !currentTag.subTagIds.length) {
        return _this.renderThirdLevelTagBreadcrumb(currentTag);
      } // Return a second level tag if it's not a third level tag


      return _this.renderSecondLevelTagBreadcrumb(currentTag);
    }, _this.renderProductNameBreadcrumb = function () {
      var _this$props4 = _this.props,
          _this$props4$classes = _this$props4.classes,
          breadcrumbIcon = _this$props4$classes.breadcrumbIcon,
          breadcrumbLink = _this$props4$classes.breadcrumbLink,
          product = _this$props4.product,
          tag = _this$props4.tag;

      if (tag && tag._id) {
        return _react.default.createElement(_react.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, _this.renderTagBreadcrumbs(tag), _react.default.createElement(_ChevronRight.default, {
          className: breadcrumbIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), _react.default.createElement(_Link.default, {
          route: "/product/".concat(product.slug),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react.default.createElement("span", {
          className: breadcrumbLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, product.title)));
      }

      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react.default.createElement(_ChevronRight.default, {
        className: breadcrumbIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react.default.createElement(_Link.default, {
        route: "/product/".concat(product.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement("span", {
        className: breadcrumbLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, product.title)));
    }, _this.renderBreadcrumbs = function () {
      if (_this.isTagGrid) {
        return _this.renderTagBreadcrumbs();
      }

      if (_this.isPDP) {
        return _this.renderProductNameBreadcrumb();
      }

      return null;
    }, _temp));
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _props$classes = this.props.classes,
          container = _props$classes.container,
          breadcrumbLink = _props$classes.breadcrumbLink;
      return _react.default.createElement("div", {
        className: container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react.default.createElement(_Link.default, {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react.default.createElement("span", {
        className: breadcrumbLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Home")), this.renderBreadcrumbs());
    }
  }, {
    key: "isPDP",
    get: function get() {
      var isPDP = this.props.isPDP;
      return isPDP || false;
    }
  }, {
    key: "isTagGrid",
    get: function get() {
      var isTagGrid = this.props.isTagGrid;
      return isTagGrid || false;
    }
  }, {
    key: "isTopLevel",
    get: function get() {
      var tag = this.props.tag;
      return tag && tag.isTopLevel;
    }
  }]);

  return Breadcrumbs;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object.isRequired,
  isPDP: _propTypes.default.bool,
  isTagGrid: _propTypes.default.bool,
  product: _propTypes.default.object,
  tag: _propTypes.default.object,
  tags: _propTypes.default.shape({
    edges: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
  })
}, _temp2)) || _class);
var _default = Breadcrumbs;
exports.default = _default;

/***/ }),

/***/ "./components/Breadcrumbs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Breadcrumbs.default;
  }
});

var _Breadcrumbs = _interopRequireDefault(__webpack_require__("./components/Breadcrumbs/Breadcrumbs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/Img/Img.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Img/Img.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Img component does a "Medium/Instagram" like progressive loading effect for images.
 * To achieve this the component first renders an img element with a tiny version of the full resolution image.
 * This low res image should download quickly and will be blurred by the CSS removing the pixelation.
 * The component then creates an Image buffer with a src of the full resolution image.
 * Once the buffer loads the full resolution image the blurred low resimg will fade out revealing the full res image.
 *
 * @module Img
 * @extends Component
 */
var styles = function styles(_ref) {
  var palette = _ref.palette,
      transitions = _ref.transitions,
      zIndex = _ref.zIndex;
  return {
    imgWrapper: {
      backgroundColor: palette.common.white,
      // palette.grey["100"],
      display: "block",
      height: 0,
      overflow: "hidden",
      paddingTop: "100%",
      position: "relative",
      width: "100%"
    },
    imgHeroWrapper: {
      paddingTop: "30%"
    },
    img: {
      height: "auto",
      left: "50%",
      opacity: 1,
      position: "absolute",
      transition: "opacity ".concat(transitions.duration.standard, "ms ").concat(transitions.easing.easeInOut),
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%"
    },
    imgLoaded: {
      zIndex: zIndex.mobileStepper
    },
    imgLoading: {
      filter: "blur(8px)",
      zIndex: zIndex.appBar
    },
    imgHidden: {
      opacity: 0
    }
  };
};

var Img = (_dec = (0, _styles.withStyles)(styles, {
  withTheme: true,
  name: "SkImg"
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Img, _Component);

  function Img() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, Img);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = Img.__proto__ || Object.getPrototypeOf(Img)).call.apply(_ref2, [this].concat(args))), _this.state = {
      ready: false
    }, _this._mounted = false, _this._wrapper = null, _temp));
  }

  _createClass(Img, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;

      if (process.browser) {
        this.lazyLoad();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
    /**
     * Private check for component mount, used in image buffer
     */

  }, {
    key: "lazyLoad",

    /**
     *
     * @method lazyLoad
     * @summary If `IntersectionObserver` is supported create a new one and watch for the `_wrapper` element
     * to scroll within the viewport, once it's with 50px of the viewport start loading the full res image.
     * If the `IntersectionObserver` isn't supported just load the image normally.
     * [Intersection Observer]{@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API}
     * @return {undefined}
     */
    value: function lazyLoad() {
      var _this2 = this;

      if (this.supportIntersectionObserver) {
        var viewportIntersection = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && !_this2.state.ready) {
              _this2.loadImage();
            }
          });
        }, {
          root: null,
          rootMargin: "50px 0px",
          threshold: 0.01
        });
        viewportIntersection.observe(this._wrapper);
      } else {
        this.loadImage();
      }
    }
    /**
     *
     * @method loadImage
     * @summary Create a new `Image` buffer and set the `src` to be
     * ether the `props.src` or `props.srcs.small` if a responsive picture.
     * Once the buffer loads set the `ready` state to `true`
     * @return {undefined}
     */

  }, {
    key: "loadImage",
    value: function loadImage() {
      var _this3 = this;

      var _props = this.props,
          src = _props.src,
          srcs = _props.srcs;
      var buffer = new Image();

      buffer.onload = function () {
        return _this3._mounted && _this3.setState({
          ready: true
        });
      };

      buffer.src = src || srcs && srcs.small;
    }
    /**
     *
     * @method renderPicture
     * @summary Renders a `picture` element with the provided theme breakpoints and `props.srcs`
     * @return {Element} - `picture`
     */

  }, {
    key: "renderPicture",
    value: function renderPicture() {
      var _props2 = this.props,
          altText = _props2.altText,
          classes = _props2.classes,
          srcs = _props2.srcs,
          values = _props2.theme.breakpoints.values;
      return _react.default.createElement("picture", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react.default.createElement("source", {
        media: "(min-width: ".concat(values.md, "px)"),
        srcSet: srcs && srcs.large,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), _react.default.createElement("source", {
        media: "(min-width: ".concat(values.sm, "px)"),
        srcSet: srcs && srcs.medium,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), _react.default.createElement("img", {
        src: srcs && srcs.small,
        className: "".concat(classes.img, " ").concat(classes.imgLoaded),
        alt: altText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }));
    }
    /**
     *
     * @method renderImg
     * @summary Renders a `img` element with the provided `props.src`
     * @return {Element} - `img`
     */

  }, {
    key: "renderImg",
    value: function renderImg() {
      var _props3 = this.props,
          altText = _props3.altText,
          classes = _props3.classes,
          src = _props3.src;
      return _react.default.createElement("img", {
        src: src,
        className: "".concat(classes.img, " ").concat(classes.imgLoaded),
        alt: altText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      });
    }
    /**
     *
     * @method renderImage
     * @summary If a `props.src` is provided call `renderImg` else call `renderPicture`
     * @return {Element} - `picture` or `img`
     */

  }, {
    key: "renderImage",
    value: function renderImage() {
      var src = this.props.src;
      return src ? this.renderImg() : this.renderPicture();
    }
    /**
     *
     * @method renderLoadingImage
     * @summary Renders a `img` element with the provided `props.presrc`
     * once the full res image has loaded this `img` will fade out
     * @return {Element} - `img`
     */

  }, {
    key: "renderLoadingImage",
    value: function renderLoadingImage() {
      var _props4 = this.props,
          classes = _props4.classes,
          presrc = _props4.presrc;
      var ready = this.state.ready;
      return _react.default.createElement("img", {
        src: presrc,
        className: "".concat(classes.img, " ").concat(classes.imgLoading, " ").concat(ready ? classes.imgHidden : ""),
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props5 = this.props,
          classes = _props5.classes,
          isHero = _props5.isHero;
      var ready = this.state.ready;
      var wrapperClass = "".concat(classes.imgWrapper, " ").concat(isHero ? classes.imgHeroWrapper : "");
      return _react.default.createElement("div", {
        className: wrapperClass,
        ref: function ref(wrapper) {
          _this4._wrapper = wrapper;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, ready ? this.renderImage() : null, this.renderLoadingImage());
    }
  }, {
    key: "supportIntersectionObserver",

    /**
     *
     * @method supportIntersectionObserver
     * @summary `IntersectionObserver` feature detection
     * @return {Boolean} - `true` if `IntersectionObserver` is supported by browser
     */
    get: function get() {
      return "IntersectionObserver" in window;
    }
  }]);

  return Img;
}(_react.Component), _class2.propTypes = {
  /**
   * Image text alternative - [alt text]{@link https://www.w3.org/TR/WCAG20-TECHS/H37.html}
   */
  altText: _propTypes.default.string,

  /**
   * CSS class names
   */
  classes: _propTypes.default.object,

  /**
   * True if `Img` component is being used for a page hero image
   */
  isHero: _propTypes.default.bool,

  /**
   * Pre load image source: Provide a tiny version of the image to create a medium like progressive loading effect
   */
  presrc: _propTypes.default.string,

  /**
   * Image source
   */
  src: _propTypes.default.string,

  /**
   * Image sources for use with a picture element
   */
  srcs: _propTypes.default.shape({
    large: _propTypes.default.string,
    medium: _propTypes.default.string,
    original: _propTypes.default.string,
    small: _propTypes.default.string,
    thumbnail: _propTypes.default.string
  }),

  /**
   * MUI theme provider
   */
  theme: _propTypes.default.object
}, _class2.defaultProps = {
  altText: "",
  isHero: false,
  presrc: "",
  src: ""
}, _temp2)) || _class);
var _default = Img;
exports.default = _default;

/***/ }),

/***/ "./components/Img/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Img = _interopRequireDefault(__webpack_require__("./components/Img/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Img.default;
exports.default = _default;

/***/ }),

/***/ "./components/Link/Link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _routes = __webpack_require__("./routes.js");

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _track = _interopRequireDefault(__webpack_require__("./lib/tracking/track.js"));

var _dec,
    _dec2,
    _dec3,
    _dec4,
    _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _descriptor2,
    _class3,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Link/Link.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var styles = function styles() {
  return {
    anchor: {
      color: "inherit",
      textDecoration: "none"
    }
  };
};

var Link = (_dec = (0, _track.default)(function (ownProps) {
  return {
    component: "Link",
    url: ownProps.route || ownProps.href,
    params: ownProps.params
  };
}), _dec2 = (0, _styles.withStyles)(styles, {
  name: "SkLink"
}), _dec3 = (0, _track.default)(function () {
  return {
    action: "Link Clicked"
  };
}), _dec4 = (0, _track.default)(function () {
  return {
    action: "Link Enter Key Down"
  };
}), _dec(_class = _dec2(_class = (_class2 = (_temp2 = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _initDefineProp(_this, "handleClick", _descriptor, _assertThisInitialized(_this)), _initDefineProp(_this, "handleKeyDown", _descriptor2, _assertThisInitialized(_this)), _temp));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          tracking = _props.tracking,
          onClick = _props.onClick,
          props = _objectWithoutProperties(_props, ["children", "classes", "className", "tracking", "onClick"]);

      return _react.default.createElement(_routes.Link, _extends({
        route: props.route || props.href
      }, props, {
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react.default.createElement("a", {
        className: (0, _classnames.default)(classes.anchor, className),
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        role: "link",
        tabIndex: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, children));
    }
  }]);

  return Link;
}(_react.Component), _class3.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  classes: _propTypes.default.object,
  onClick: _propTypes.default.func
}, _class3.defaultProps = {
  onClick: function onClick() {}
}, _temp2), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "handleClick", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (event) {
      _this2.props.onClick(event);
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "handleKeyDown", [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (event) {
      if (event.key === "Enter") {
        _this3.props.onClick(event);
      }
    };
  }
})), _class2)) || _class) || _class);
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./components/Link/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Link.default;
  }
});

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/Link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/PageLoading/PageLoading.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/PageLoading/PageLoading.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles() {
  return {
    svg: {
      background: "none"
    },
    wrapper: {
      alignItems: "center",
      display: "flex",
      height: "75vh",
      justifyContent: "center"
    }
  };
};

var PageLoading = (_dec = (0, _styles.withStyles)(styles, {
  withTheme: true
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLoading, _Component);

  function PageLoading() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PageLoading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PageLoading.__proto__ || Object.getPrototypeOf(PageLoading)).call.apply(_ref, [this].concat(args))), _this.state = {
      delayIsDone: false
    }, _temp));
  }

  _createClass(PageLoading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeout = setTimeout(function () {
        _this2.setState({
          delayIsDone: true
        });
      }, 800);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "renderSpinner",
    value: function renderSpinner() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme;
      return _react.default.createElement("svg", {
        className: classes.svg,
        height: 200,
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 100 100",
        width: 200,
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        fill: "none",
        r: "30",
        strokeDasharray: "47.12388980384689 47.12388980384689",
        strokeLinecap: "round",
        strokeWidth: "2",
        stroke: theme.palette.reaction.pageLoading.outerColor,
        transform: "rotate(37.5323 50 50)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        calcMode: "linear",
        values: "0 50 50;360 50 50",
        keyTimes: "0;1",
        dur: "1.1s",
        begin: "0s",
        repeatCount: "indefinite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        fill: "none",
        r: "27",
        strokeDasharray: "42.411500823462205 42.411500823462205",
        strokeDashoffset: "42.411500823462205",
        strokeLinecap: "round",
        strokeWidth: "2",
        stroke: theme.palette.reaction.pageLoading.innerColor,
        transform: "rotate(-37.5323 50 50)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react.default.createElement("animateTransform", {
        attributeName: "transform",
        begin: "0s",
        calcMode: "linear",
        dur: "1.1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        type: "rotate",
        values: "0 50 50;-360 50 50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var delayIsDone = this.state.delayIsDone;
      return _react.default.createElement("div", {
        className: classes.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, !!delayIsDone && this.renderSpinner());
    }
  }]);

  return PageLoading;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  theme: _propTypes.default.object
}, _temp2)) || _class);
var _default = PageLoading;
exports.default = _default;

/***/ }),

/***/ "./components/PageLoading/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _PageLoading.default;
  }
});

var _PageLoading = _interopRequireDefault(__webpack_require__("./components/PageLoading/PageLoading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/PageSizeSelector/PageSizeSelector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _Select = _interopRequireDefault(__webpack_require__("./components/Select/index.js"));

var _pageSizes = __webpack_require__("./lib/utils/pageSizes.js");

var _class,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/PageSizeSelector/PageSizeSelector.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SELECTOR_OPTIONS = [{
  name: "20 Products",
  value: _pageSizes.PAGE_SIZES._20
}, {
  name: "60 Products",
  value: _pageSizes.PAGE_SIZES._60
}, {
  name: "100 Products",
  value: _pageSizes.PAGE_SIZES._100
}];
var PageSizeSelector = (_temp2 = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(PageSizeSelector, _Component);

  function PageSizeSelector() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PageSizeSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PageSizeSelector.__proto__ || Object.getPrototypeOf(PageSizeSelector)).call.apply(_ref, [this].concat(args))), _this.handleChange = function (event) {
      _this.props.onChange(event.target.value);
    }, _temp));
  }

  _createClass(PageSizeSelector, [{
    key: "render",
    value: function render() {
      var pageSize = this.props.pageSize;
      return _react.default.createElement(_Select.default, {
        value: pageSize,
        options: SELECTOR_OPTIONS,
        inputProps: {
          name: "pageSize",
          id: "page-size"
        },
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      });
    }
  }]);

  return PageSizeSelector;
}(_react.Component), _class.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  pageSize: _propTypes.default.number.isRequired
}, _temp2);
var _default = PageSizeSelector;
exports.default = _default;

/***/ }),

/***/ "./components/PageSizeSelector/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _PageSizeSelector.default;
  }
});

var _PageSizeSelector = _interopRequireDefault(__webpack_require__("./components/PageSizeSelector/PageSizeSelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/PageStepper/PageStepper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Button/v1"));

var _Grid = _interopRequireDefault(__webpack_require__("@material-ui/core/Grid"));

var _withStyles = _interopRequireDefault(__webpack_require__("@material-ui/core/styles/withStyles"));

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/PageStepper/PageStepper.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  };
};

var PageStepper = (_dec = (0, _withStyles.default)(styles, {
  name: "SkPageStepper"
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(PageStepper, _Component);

  function PageStepper() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PageStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PageStepper.__proto__ || Object.getPrototypeOf(PageStepper)).call.apply(_ref, [this].concat(args))), _this.handleNextClick = function () {
      var pageInfo = _this.props.pageInfo;

      if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      pageInfo.loadNextPage();
    }, _this.handlePreviousClick = function () {
      var pageInfo = _this.props.pageInfo;

      if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      pageInfo.loadPreviousPage();
    }, _temp));
  }

  _createClass(PageStepper, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          pageInfo = _props.pageInfo;
      return _react.default.createElement(_Grid.default, {
        className: classes.root,
        container: true,
        justify: "space-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react.default.createElement(_Grid.default, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, pageInfo.hasPreviousPage && _react.default.createElement(_v.default, {
        onClick: this.handlePreviousClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Previous")), _react.default.createElement(_Grid.default, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, pageInfo.hasNextPage && _react.default.createElement(_v.default, {
        onClick: this.handleNextClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Next")));
    }
  }]);

  return PageStepper;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  pageInfo: _propTypes.default.shape({
    hasNextPage: _propTypes.default.bool,
    hasPreviousPage: _propTypes.default.bool,
    loadNextPage: _propTypes.default.func,
    loadPreviousPage: _propTypes.default.func
  }).isRequired,
  theme: _propTypes.default.object
}, _temp2)) || _class);
exports.default = PageStepper;

/***/ }),

/***/ "./components/PageStepper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _PageStepper.default;
  }
});

var _PageStepper = _interopRequireDefault(__webpack_require__("./components/PageStepper/PageStepper.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/ProductGrid/ProductGrid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _Grid = _interopRequireDefault(__webpack_require__("@material-ui/core/Grid"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CatalogGrid/v1"));

var _track = _interopRequireDefault(__webpack_require__("./lib/tracking/track.js"));

var _trackProductClicked = _interopRequireDefault(__webpack_require__("./lib/tracking/trackProductClicked.js"));

var _PageLoading = _interopRequireDefault(__webpack_require__("./components/PageLoading/index.js"));

var _PageStepper = _interopRequireDefault(__webpack_require__("./components/PageStepper/index.js"));

var _PageSizeSelector = _interopRequireDefault(__webpack_require__("./components/PageSizeSelector/index.js"));

var _SortBySelector = _interopRequireDefault(__webpack_require__("./components/SortBySelector/index.js"));

var _ProductGridEmptyMessage = _interopRequireDefault(__webpack_require__("./components/ProductGrid/ProductGridEmptyMessage.js"));

var _dec,
    _dec2,
    _dec3,
    _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _class3,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/ProductGrid/ProductGrid.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var styles = function styles(theme) {
  return {
    filters: {
      justifyContent: "flex-end",
      marginBottom: theme.spacing.unit * 2
    }
  };
};

var ProductGrid = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkProductGrid"
}), _dec2 = (0, _track.default)(), _dec3 = (0, _trackProductClicked.default)(), _dec(_class = _dec2(_class = (_class2 = (_temp2 = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductGrid, _Component);

  function ProductGrid() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProductGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProductGrid.__proto__ || Object.getPrototypeOf(ProductGrid)).call.apply(_ref, [this].concat(args))), _initDefineProp(_this, "onItemClick", _descriptor, _assertThisInitialized(_this)), _temp));
  }

  _createClass(ProductGrid, [{
    key: "renderFilters",
    value: function renderFilters() {
      var _props = this.props,
          classes = _props.classes,
          pageSize = _props.pageSize,
          setPageSize = _props.setPageSize,
          setSortBy = _props.setSortBy,
          sortBy = _props.sortBy;
      return _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 8,
        className: classes.filters,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react.default.createElement(_Grid.default, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react.default.createElement(_PageSizeSelector.default, {
        pageSize: pageSize,
        onChange: setPageSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react.default.createElement(_Grid.default, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement(_SortBySelector.default, {
        sortBy: sortBy,
        onChange: setSortBy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })));
    }
  }, {
    key: "renderMainArea",
    // eslint-disable-line no-unused-vars
    value: function renderMainArea() {
      var _props2 = this.props,
          catalogItems = _props2.catalogItems,
          initialSize = _props2.initialSize,
          isLoadingCatalogItems = _props2.isLoadingCatalogItems,
          pageInfo = _props2.pageInfo;
      if (isLoadingCatalogItems) return _react.default.createElement(_PageLoading.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
      var products = (catalogItems || []).map(function (item) {
        return item.node.product;
      });
      if (products.length === 0) return _react.default.createElement(_ProductGridEmptyMessage.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react.default.createElement(_v.default, _extends({
        initialSize: initialSize,
        onItemClick: this.onItemClick,
        products: products,
        placeholderImageURL: "/static/placeholder.gif"
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), pageInfo && _react.default.createElement(_PageStepper.default, {
        pageInfo: pageInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, this.renderFilters(), this.renderMainArea());
    }
  }]);

  return ProductGrid;
}(_react.Component), _class3.propTypes = {
  catalogItems: _propTypes.default.arrayOf(_propTypes.default.object),
  classes: _propTypes.default.object,
  currencyCode: _propTypes.default.string.isRequired,
  initialSize: _propTypes.default.object,
  isLoadingCatalogItems: _propTypes.default.bool,
  pageInfo: _propTypes.default.shape({
    startCursor: _propTypes.default.string,
    endCursor: _propTypes.default.string,
    hasNextPage: _propTypes.default.bool,
    hasPreviousPage: _propTypes.default.bool,
    loadNextPage: _propTypes.default.func,
    loadPreviousPage: _propTypes.default.func
  }),
  pageSize: _propTypes.default.number.isRequired,
  setPageSize: _propTypes.default.func.isRequired,
  setSortBy: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.string.isRequired
}, _temp2), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onItemClick", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return function (event, product) {};
  }
})), _class2)) || _class) || _class);
exports.default = ProductGrid;

/***/ }),

/***/ "./components/ProductGrid/ProductGridEmptyMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _styles = __webpack_require__("@material-ui/core/styles");

var _Typography = _interopRequireDefault(__webpack_require__("@material-ui/core/Typography"));

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _dec,
    _dec2,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/ProductGrid/ProductGridEmptyMessage.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "4rem"
    },
    actionMessage: {
      color: theme.palette.reaction.coolGrey400
    },
    notFoundMessage: {
      color: theme.palette.reaction.black65
    }
  };
};

var ProductGridEmptyMessage = (_dec = (0, _styles.withStyles)(styles), _dec2 = (0, _mobxReact.inject)("routingStore"), _dec(_class = _dec2(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductGridEmptyMessage, _Component);

  function ProductGridEmptyMessage() {
    _classCallCheck(this, ProductGridEmptyMessage);

    return _possibleConstructorReturn(this, (ProductGridEmptyMessage.__proto__ || Object.getPrototypeOf(ProductGridEmptyMessage)).apply(this, arguments));
  }

  _createClass(ProductGridEmptyMessage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          actionMessage = _props.actionMessage,
          notFoundMessage = _props.notFoundMessage,
          providedResetLink = _props.resetLink,
          routingStore = _props.routingStore;
      var resetLink = providedResetLink || routingStore.pathname;

      if (!providedResetLink && routingStore && routingStore.query && routingStore.query.slug) {
        resetLink = "".concat(routingStore.pathname, "/").concat(routingStore.query.slug);
      }

      return _react.default.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react.default.createElement(_Typography.default, {
        className: classes.notFoundMessage,
        paragraph: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, notFoundMessage), _react.default.createElement(_Typography.default, {
        className: classes.actionMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react.default.createElement(_Link.default, {
        route: resetLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, actionMessage)));
    }
  }]);

  return ProductGridEmptyMessage;
}(_react.Component), _class2.propTypes = {
  actionMessage: _propTypes.default.string,
  classes: _propTypes.default.object,
  notFoundMessage: _propTypes.default.string,
  resetLink: _propTypes.default.string,
  routingStore: _propTypes.default.object
}, _class2.defaultProps = {
  actionMessage: "Clear filters",
  notFoundMessage: "Sorry! We couldn't find what you're looking for."
}, _temp)) || _class) || _class);
exports.default = ProductGridEmptyMessage;

/***/ }),

/***/ "./components/ProductGrid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ProductGrid.default;
  }
});

var _ProductGrid = _interopRequireDefault(__webpack_require__("./components/ProductGrid/ProductGrid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/ProductGridHero/ProductGridHero.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _Grid = _interopRequireDefault(__webpack_require__("@material-ui/core/Grid"));

var _Img = _interopRequireDefault(__webpack_require__("./components/Img/index.js"));

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/ProductGridHero/ProductGridHero.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    heroImg: {
      width: "100%",
      height: "325px",
      objectFit: "cover"
    },
    heroGridContainer: {
      maxWidth: theme.layout.mainContentMaxWidth,
      margin: "20px auto"
    }
  };
};

var ProductGridHero = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkProductGridHero"
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductGridHero, _Component);

  function ProductGridHero() {
    _classCallCheck(this, ProductGridHero);

    return _possibleConstructorReturn(this, (ProductGridHero.__proto__ || Object.getPrototypeOf(ProductGridHero)).apply(this, arguments));
  }

  _createClass(ProductGridHero, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          heroMediaUrl = _props.tag.heroMediaUrl;
      if (!heroMediaUrl) return null;
      return _react.default.createElement("section", {
        className: classes.heroGridContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react.default.createElement(_Img.default, {
        isHero: true,
        src: heroMediaUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))));
    }
  }]);

  return ProductGridHero;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  tag: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {},
  tag: {}
}, _temp)) || _class);
exports.default = ProductGridHero;

/***/ }),

/***/ "./components/ProductGridHero/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ProductGridHero.default;
  }
});

var _ProductGridHero = _interopRequireDefault(__webpack_require__("./components/ProductGridHero/ProductGridHero.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/Select/Select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _Select = _interopRequireDefault(__webpack_require__("@material-ui/core/Select"));

var _Input = _interopRequireDefault(__webpack_require__("@material-ui/core/Input"));

var _MenuItem = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuItem"));

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Select/Select.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    popOver: {
      border: theme.palette.borders.default,
      boxShadow: "none"
    },
    menuItem: {
      fontSize: "1rem",
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    selectMenu: {
      fontSize: "1rem",
      border: theme.palette.borders.default,
      paddingLeft: theme.spacing.unit,
      borderRadius: theme.borderRadii.default
    },
    selected: {
      backgroundColor: theme.palette.action.hover
    },
    input: {
      width: theme.spacing.unit * 21
    }
  };
};

var Select = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkSelect"
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this.handleChange = function (event) {
      _this.props.onChange(event);
    }, _temp));
  }

  _createClass(Select, [{
    key: "renderOptions",
    value: function renderOptions() {
      var _props = this.props,
          classes = _props.classes,
          options = _props.options;
      return options.map(function (option) {
        return _react.default.createElement(_MenuItem.default, {
          classes: {
            selected: classes.selected
          },
          className: classes.menuItem,
          key: option.value,
          value: option.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, option.name);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          inputProps = _props2.inputProps,
          value = _props2.value;
      return _react.default.createElement(_Select.default, {
        classes: {
          selectMenu: classes.selectMenu
        },
        input: _react.default.createElement(_Input.default, {
          className: classes.input,
          disableUnderline: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }),
        inputProps: _objectSpread({}, inputProps),
        MenuProps: {
          PopoverClasses: {
            paper: classes.popOver
          }
        },
        onChange: this.handleChange,
        value: value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.renderOptions());
    }
  }]);

  return Select;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object.isRequired,
  inputProps: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
}, _temp2)) || _class);
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "./components/Select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});

var _Select = _interopRequireDefault(__webpack_require__("./components/Select/Select.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/SortBySelector/SortBySelector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _Select = _interopRequireDefault(__webpack_require__("./components/Select/index.js"));

var _class,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/SortBySelector/SortBySelector.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SORT_BY = [{
  name: "Newest",
  value: "updatedAt-desc"
}, {
  name: "Price: low to high",
  value: "minPrice-asc"
}, {
  name: "Price: high to low",
  value: "minPrice-desc"
}];
var SortBySelector = (_temp2 = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(SortBySelector, _Component);

  function SortBySelector() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SortBySelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SortBySelector.__proto__ || Object.getPrototypeOf(SortBySelector)).call.apply(_ref, [this].concat(args))), _this.handleChange = function (event) {
      _this.props.onChange(event.target.value);
    }, _temp));
  }

  _createClass(SortBySelector, [{
    key: "render",
    value: function render() {
      var sortBy = this.props.sortBy;
      return _react.default.createElement(_Select.default, {
        value: sortBy,
        options: SORT_BY,
        inputProps: {
          name: "sortBy",
          id: "sort-by"
        },
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      });
    }
  }]);

  return SortBySelector;
}(_react.Component), _class.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.string.isRequired
}, _temp2);
var _default = SortBySelector;
exports.default = _default;

/***/ }),

/***/ "./components/SortBySelector/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _SortBySelector.default;
  }
});

var _SortBySelector = _interopRequireDefault(__webpack_require__("./components/SortBySelector/SortBySelector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./containers/catalog/catalogItems.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"catalogItemsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionLimitInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionLimitInt"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CatalogItemSortByField"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortByPriceCurrencyCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortOrder"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shopIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"shopId"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"tagIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortByPriceCurrencyCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortByPriceCurrencyCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CatalogItemProduct"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isLowQuantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSoldOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBackorder"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shop"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"displayPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"minPrice"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryImage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"URLs"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"small"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"medium"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"large"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":1319}};
    doc.loc.source = {"body":"query catalogItemsQuery($shopId: ID!, $tagIds: [ID] $first: ConnectionLimitInt, $last:  ConnectionLimitInt, $before: ConnectionCursor, $after: ConnectionCursor, $sortBy: CatalogItemSortByField, $sortByPriceCurrencyCode: String, $sortOrder: SortOrder) {\n  catalogItems(shopIds: [$shopId], tagIds: $tagIds, first: $first, last: $last, before: $before, after: $after, sortBy: $sortBy, sortByPriceCurrencyCode: $sortByPriceCurrencyCode, sortOrder: $sortOrder) {\n    totalCount\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        _id\n        ... on CatalogItemProduct {\n          product {\n            _id\n            title\n            slug\n            description\n            vendor\n            isLowQuantity\n            isSoldOut\n            isBackorder\n            shop {\n              currency {\n                code\n              }\n            }\n            pricing {\n              currency {\n                code\n              }\n              displayPrice\n              minPrice\n              maxPrice\n            }\n            primaryImage {\n              URLs {\n                thumbnail\n                small\n                medium\n                large\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["catalogItemsQuery"] = oneQuery(doc, "catalogItemsQuery");
        


/***/ }),

/***/ "./containers/catalog/withCatalogItems.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withCatalogItems;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _reactApollo = __webpack_require__("react-apollo");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _pagination = __webpack_require__("./lib/helpers/pagination.js");

var _catalogItems = _interopRequireDefault(__webpack_require__("./containers/catalog/catalogItems.gql"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/catalog/withCatalogItems.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * withCatalogItems higher order query component for fetching primaryShopId and catalog data
 * @name withCatalogItems
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and catalog as props
 */
function withCatalogItems(Component) {
  var _dec, _dec2, _dec3, _class, _class2, _temp;

  var CatalogItems = (_dec = (0, _mobxReact.inject)("primaryShopId"), _dec2 = (0, _mobxReact.inject)("routingStore"), _dec3 = (0, _mobxReact.inject)("uiStore"), _dec(_class = _dec2(_class = _dec3(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CatalogItems, _React$Component);

    function CatalogItems() {
      _classCallCheck(this, CatalogItems);

      return _possibleConstructorReturn(this, (CatalogItems.__proto__ || Object.getPrototypeOf(CatalogItems)).apply(this, arguments));
    }

    _createClass(CatalogItems, [{
      key: "render",
      value: function render() {
        var _this = this;

        var _props = this.props,
            primaryShopId = _props.primaryShopId,
            routingStore = _props.routingStore,
            uiStore = _props.uiStore;

        var _uiStore$sortBy$split = uiStore.sortBy.split("-"),
            _uiStore$sortBy$split2 = _slicedToArray(_uiStore$sortBy$split, 2),
            sortBy = _uiStore$sortBy$split2[0],
            sortOrder = _uiStore$sortBy$split2[1];

        var tagIds = routingStore.tag._id ? [routingStore.tag._id] : undefined;

        var variables = _objectSpread({
          shopId: primaryShopId
        }, (0, _pagination.paginationVariablesFromUrlParams)(routingStore.query, {
          defaultPageLimit: uiStore.pageSize
        }), {
          tagIds: tagIds,
          sortBy: sortBy,
          sortByPriceCurrencyCode: uiStore.sortByCurrencyCode,
          sortOrder: sortOrder
        });

        return _react.default.createElement(_reactApollo.Query, {
          query: _catalogItems.default,
          variables: variables,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, function (_ref) {
          var data = _ref.data,
              fetchMore = _ref.fetchMore,
              loading = _ref.loading;

          var _ref2 = data || {},
              catalogItems = _ref2.catalogItems;

          return _react.default.createElement(Component, _extends({}, _this.props, {
            catalogItemsPageInfo: (0, _pagination.pagination)({
              fetchMore: fetchMore,
              routingStore: routingStore,
              data: data,
              queryName: "catalogItems",
              limit: uiStore.pageSize
            }),
            catalogItems: catalogItems && catalogItems.edges || [],
            isLoadingCatalogItems: loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }));
        });
      }
    }]);

    return CatalogItems;
  }(_react.default.Component), _class2.propTypes = {
    primaryShopId: _propTypes.default.string.isRequired,
    routingStore: _propTypes.default.object.isRequired,
    uiStore: _propTypes.default.object.isRequired
  }, _temp)) || _class) || _class) || _class) || _class);
  (0, _hoistNonReactStatics.default)(CatalogItems, Component);
  return CatalogItems;
}

/***/ }),

/***/ "./containers/tags/tag.gql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tagQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slugOrId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slugOrId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slugOrId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":115}};
    doc.loc.source = {"body":"#import \"./tagFragment.gql\"\n\nquery tagQuery($slugOrId: String) {\n  tag(slugOrId: $slugOrId) {\n    ...TagInfo\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("./containers/tags/tagFragment.gql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["tagQuery"] = oneQuery(doc, "tagQuery");
        


/***/ }),

/***/ "./containers/tags/tagFragment.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TagInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"position"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isTopLevel"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"subTagIds"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"heroMediaUrl"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":99}};
    doc.loc.source = {"body":"fragment TagInfo on Tag {\n  _id\n  position\n  name\n  slug\n  isTopLevel\n  subTagIds\n  heroMediaUrl\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./containers/tags/withTag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withTag;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _reactApollo = __webpack_require__("react-apollo");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _tag = _interopRequireDefault(__webpack_require__("./containers/tags/tag.gql"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/tags/withTag.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * withTag higher order query component for fetching tag information
 * @name WithTag
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `tag` prop
 */
function withTag(Component) {
  var _class, _temp;

  var WithTag = (_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithTag, _React$Component);

    function WithTag() {
      _classCallCheck(this, WithTag);

      return _possibleConstructorReturn(this, (WithTag.__proto__ || Object.getPrototypeOf(WithTag)).apply(this, arguments));
    }

    _createClass(WithTag, [{
      key: "render",
      value: function render() {
        var _this = this;

        var tag = this.props.router.query.slug;
        return _react.default.createElement(_reactApollo.Query, {
          query: _tag.default,
          variables: {
            slugOrId: tag
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, function (_ref) {
          var error = _ref.error,
              data = _ref.data;
          if (error) return null;
          var tagData = data || {};
          return _react.default.createElement(Component, _extends({}, _this.props, {
            tag: tagData && tagData.tag,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }));
        });
      }
    }]);

    return WithTag;
  }(_react.default.Component), _class.propTypes = {
    /**
     * slug used to obtain tag info
     */
    router: _propTypes.default.object.isRequired
  }, _temp);
  (0, _hoistNonReactStatics.default)(WithTag, Component);
  return WithTag;
}

/***/ }),

/***/ "./lib/helpers/pagination.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginationVariablesFromUrlParams = exports.pagination = exports.loadPreviousPage = exports.loadNextPage = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Load next page of content for a Apollo GraphQL query
 * @name loadNextPage
 * @param {Object} args Args for pagination
 * @param {String} args.queryName Name of the GraphQL whose result will be used to paginate
 * @param {Object} args.data Full result from GraphQl
 * @param {Object} args.limit Limit
 * @param {Object} args.fetchMore fetchMore function
 * @returns {Function} load next page function
 */
var loadNextPage = function loadNextPage(_ref) {
  var queryName = _ref.queryName,
      data = _ref.data,
      limit = _ref.limit,
      fetchMore = _ref.fetchMore,
      routingStore = _ref.routingStore;
  return function () {
    if (!queryName) throw new Error("queryName is required");
    var cursor = data[queryName].pageInfo.endCursor; // Set URL search params to allow for link sharing

    if (routingStore) {
      routingStore.setSearch({
        limit: limit,
        after: cursor
      });
    }

    fetchMore({
      variables: {
        first: limit,
        after: cursor,
        last: null,
        before: null
      },
      updateQuery: function updateQuery(previousResult, _ref2) {
        var fetchMoreResult = _ref2.fetchMoreResult;
        var items = fetchMoreResult[queryName]; // Return with additional results

        if (items.edges.length) {
          return fetchMoreResult;
        } // Send the previous result if the new result contains no additional data


        return previousResult;
      }
    });
  };
};
/**
 * Load previous page of content for a Apollo GraphQL query
 * @name loadPreviousPage
 * @param {Object} args Args for pagination
 * @param {String} args.queryName Name of the GraphQL whose result will be used to paginate
 * @param {Object} args.data Full result from GraphQl
 * @param {Object} args.limit Limit
 * @param {Object} args.fetchMore fetchMore function
 * @returns {Function} load next page function
 */


exports.loadNextPage = loadNextPage;

var loadPreviousPage = function loadPreviousPage(_ref3) {
  var queryName = _ref3.queryName,
      data = _ref3.data,
      limit = _ref3.limit,
      fetchMore = _ref3.fetchMore,
      routingStore = _ref3.routingStore;
  return function () {
    if (!queryName) throw new Error("queryName is required");
    var cursor = data[queryName].pageInfo.startCursor; // Set URL search params to allow for link sharing

    if (routingStore) {
      routingStore.setSearch({
        limit: limit,
        before: cursor
      });
    }

    fetchMore({
      variables: {
        first: null,
        after: null,
        last: limit,
        before: cursor
      },
      updateQuery: function updateQuery(previousResult, _ref4) {
        var fetchMoreResult = _ref4.fetchMoreResult;
        var items = fetchMoreResult[queryName]; // Return with additional results

        if (items.edges.length) {
          return fetchMoreResult;
        } // Send the previous result if the new result contains no additional data


        return previousResult;
      }
    });
  };
};
/**
 * Create pagination functions for next and previous and page info data
 * @name pagination
 * @param {Object} args Args for pagination
 * @param {String} args.queryName Name of the GraphQL whose result will be used to paginate
 * @param {Object} args.data Full result from GraphQl
 * @param {Object} args.limit Limit
 * @param {Object} args.fetchMore fetchMore function
 * @returns {Function} load next page function
 */


exports.loadPreviousPage = loadPreviousPage;

var pagination = function pagination(args) {
  var queryName = args.queryName,
      data = args.data;
  if (!queryName) throw new Error("queryName is required");
  var pageInfo = data && data[queryName] && data[queryName].pageInfo || {};
  return _objectSpread({}, pageInfo, {
    loadNextPage: loadNextPage(args),
    loadPreviousPage: loadPreviousPage(args)
  });
};
/**
 * Create an object of variables for pagination a GraphQL query.
 * @name paginationVariablesFromUrlParams
 * @param {Object} params Object of params to create query variables from
 * @param {Number|String} params.limit Maximum number of items to get
 * @param {String} params.before Before Cursor
 * @param {String} params.after After cursor
 * @param {Options} options Additional options
 * @param {Number} options.defaultLimit After cursor
 * @returns {Object} Object of variables for GraphQL query
 */


exports.pagination = pagination;

var paginationVariablesFromUrlParams = function paginationVariablesFromUrlParams(params, options) {
  var _ref5 = params || {},
      limit = _ref5.limit,
      before = _ref5.before,
      after = _ref5.after;

  var _ref6 = options || {},
      defaultPageLimit = _ref6.defaultPageLimit;

  var variables = {};

  if (limit && after) {
    variables.first = parseInt(limit, 10);
  } else if (limit && before) {
    variables.last = parseInt(limit, 10);
  } else if (limit) {
    variables.first = parseInt(limit, 10);
  } else if (defaultPageLimit) {
    variables.first = defaultPageLimit;
  }

  if (after) {
    variables.after = after;
  } else if (before) {
    variables.before = before;
  }

  return variables;
};

exports.paginationVariablesFromUrlParams = paginationVariablesFromUrlParams;

/***/ }),

/***/ "./lib/tracking/track.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _reactTracking.default;
  }
});

var _reactTracking = _interopRequireDefault(__webpack_require__("react-tracking"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./lib/tracking/trackProductClicked.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _track = _interopRequireDefault(__webpack_require__("./lib/tracking/track.js"));

var _getProductTrackingData = _interopRequireDefault(__webpack_require__("./lib/tracking/utils/getProductTrackingData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name trackProductClicked
 * @summary tracks the "Product Clicked" Segment event. Expects the function it decorates to have a second argument,
 *  being the product that was clicked
 * @param {Object} options options to supply to tracking HOC
 * @returns {React.Component} - component
 */
var _default = function _default(options) {
  return (0, _track.default)(function (props, state, methodArgs) {
    var data = {};
    var product = methodArgs && methodArgs[1]; // If product data is provided as a prop, then process the data for tracking

    if (product) {
      data = _objectSpread({
        action: "Product Clicked"
      }, (0, _getProductTrackingData.default)(product));
    }

    return data;
  }, options);
};

exports.default = _default;

/***/ }),

/***/ "./lib/tracking/trackProductListViewed.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _track = _interopRequireDefault(__webpack_require__("./lib/tracking/track.js"));

var _getProductListTrackingData = _interopRequireDefault(__webpack_require__("./lib/tracking/utils/getProductListTrackingData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * trackProductListViewed higher tracks a list of viewed products
 * @name trackProductListViewed
 * @param {Object} options options to supply to tracking HOC
 * @returns {React.Component} - component
 */
var _default = function _default(options) {
  return (0, _track.default)(function (_ref) {
    var tag = _ref.tag,
        catalogItems = _ref.catalogItems;
    var products = Array.isArray(catalogItems) && catalogItems.map(function (catalogItem) {
      return catalogItem.node.product;
    }) || undefined;
    return _objectSpread({
      action: "Product List Viewed"
    }, (0, _getProductListTrackingData.default)({
      tag: tag,
      products: products
    }));
  }, _objectSpread({}, options));
};

exports.default = _default;

/***/ }),

/***/ "./lib/tracking/utils/getProductListTrackingData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductListTrackingData;

var _getProductTrackingData = _interopRequireDefault(__webpack_require__("./lib/tracking/utils/getProductTrackingData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a list of products into data for tracking with the Segment Product List Viewed event
 * @name getProductListTrackingData
 * @param {Object} data Object containing data for tracking a list of products
 * @param {Object} [data.tag] Tag object, used to associate the list with a uniq identifier
 * @param {Array} data.products An array of product documents
 * @returns {Object} Data for tracking
 */
function getProductListTrackingData(_ref) {
  var tag = _ref.tag,
      products = _ref.products;
  var data = {};

  if (tag) {
    data.list_id = tag._id; // eslint-disable-line camelcase

    data.category = tag.name;
  }

  if (Array.isArray(products) && products.length) {
    data.products = products.map(function (product) {
      return (0, _getProductTrackingData.default)(product);
    });
  }

  return data;
}

/***/ }),

/***/ "./lib/tracking/utils/getProductTrackingData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductTrackingData;

var _routes = _interopRequireDefault(__webpack_require__("./routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a product object into a partial representation of the Segment product schema.
 * Combine with `getVariantTrackingData(varaint)` to get the full definition
 * @name getProductTrackingData
 * @param {Object} product Project object
 * @returns {Object} Data for tracking
 */
function getProductTrackingData(product) {
  var price;
  var url;

  if (product) {
    if (product.shop) {
      var shopCurrency = product.shop.currency.code;
      var foundPricing = product.pricing.find(function (pricing) {
        return pricing.currency.code === shopCurrency;
      });

      if (foundPricing) {
        price = foundPricing.price || foundPricing.minPrice; // eslint-disable-line prefer-destructuring
      }
    }

    var route = _routes.default.findAndGetUrls("product", {
      slugOrId: product.slug || product._id
    });

    if (route && route.urls) {
      url = route.urls.as;
    }
  }

  return {
    product_id: product._id,
    // eslint-disable-line camelcase
    sku: product.sku,
    category: product.tags && Array.isArray(product.tags.nodes) && product.tags.nodes.length && product.tags.nodes[0].name || undefined,
    name: product.title,
    brand: product.vendor,
    currency: product.shop.currency.code,
    price: price,
    quantity: 1,
    value: price,
    image_url: product.primaryImage && product.primaryImage.URLs.original,
    // eslint-disable-line camelcase
    url: url
  };
}

/***/ }),

/***/ "./lib/utils/pageSizes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inPageSizes = inPageSizes;
exports.PAGE_SIZES = void 0;
var PAGE_SIZES = {
  _20: 20,
  _60: 60,
  _100: 100
};
/**
 * Determines whether a given pages is in the predefined enumeration
 *
 * @param {Number} size - The size to check against
 * @returns {Boolean} -  True if size is valid, false otherwise.
 */

exports.PAGE_SIZES = PAGE_SIZES;

function inPageSizes(size) {
  for (var value in PAGE_SIZES) {
    if (PAGE_SIZES[value] === size) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./pages/tag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _reactHelmet = _interopRequireDefault(__webpack_require__("react-helmet"));

var _withCatalogItems = _interopRequireDefault(__webpack_require__("./containers/catalog/withCatalogItems.js"));

var _withTag = _interopRequireDefault(__webpack_require__("./containers/tags/withTag.js"));

var _Breadcrumbs = _interopRequireDefault(__webpack_require__("./components/Breadcrumbs/index.js"));

var _ProductGrid = _interopRequireDefault(__webpack_require__("./components/ProductGrid/index.js"));

var _ProductGridHero = _interopRequireDefault(__webpack_require__("./components/ProductGridHero/index.js"));

var _trackProductListViewed = _interopRequireDefault(__webpack_require__("./lib/tracking/trackProductListViewed.js"));

var _dec,
    _dec2,
    _class,
    _desc,
    _value,
    _class2,
    _class3,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/pages/tag.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var TagGridPage = (_dec = (0, _mobxReact.inject)("routingStore", "uiStore"), _dec2 = (0, _trackProductListViewed.default)(), (0, _withTag.default)(_class = (0, _withCatalogItems.default)(_class = _dec(_class = (0, _mobxReact.observer)(_class = (_class2 = (_temp2 = _class3 =
/*#__PURE__*/
function (_Component) {
  _inherits(TagGridPage, _Component);

  function TagGridPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TagGridPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TagGridPage.__proto__ || Object.getPrototypeOf(TagGridPage)).call.apply(_ref, [this].concat(args))), _this.state = {}, _this.setPageSize = function (pageSize) {
      _this.props.routingStore.setSearch({
        limit: pageSize
      });

      _this.props.uiStore.setPageSize(pageSize);
    }, _this.setSortBy = function (sortBy) {
      _this.props.routingStore.setSearch({
        sortby: sortBy
      });

      _this.props.uiStore.setSortBy(sortBy);
    }, _temp));
  }

  _createClass(TagGridPage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.catalogItems !== prevProps.catalogItems) {
        this.trackEvent(this.props);
      }
    }
  }, {
    key: "trackEvent",
    value: function trackEvent() {}
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          catalogItems = _props.catalogItems,
          catalogItemsPageInfo = _props.catalogItemsPageInfo,
          isLoadingCatalogItems = _props.isLoadingCatalogItems,
          query = _props.routingStore.query,
          shop = _props.shop,
          tag = _props.tag,
          tags = _props.tags,
          uiStore = _props.uiStore;
      var pageSize = query && query.limit ? parseInt(query.limit, 10) : uiStore.pageSize;
      var sortBy = query && query.sortby ? query.sortby : uiStore.sortBy;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement(_reactHelmet.default, {
        title: "".concat(tag && tag.name, " | ").concat(shop && shop.name),
        meta: [{
          name: "description",
          content: shop && shop.description
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react.default.createElement(_Breadcrumbs.default, {
        isTagGrid: true,
        tag: tag,
        tags: tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react.default.createElement(_ProductGridHero.default, {
        tag: tag,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react.default.createElement(_ProductGrid.default, {
        catalogItems: catalogItems,
        currencyCode: shop.currency.code,
        isLoadingCatalogItems: isLoadingCatalogItems,
        pageInfo: catalogItemsPageInfo,
        pageSize: pageSize,
        setPageSize: this.setPageSize,
        setSortBy: this.setSortBy,
        sortBy: sortBy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var routingStore = props.routingStore,
          tag = props.tag;

      if (routingStore.tag._id !== tag._id) {
        routingStore.setTag(tag);
        routingStore.setSearch({
          before: null,
          after: null
        });
      }

      return null;
    }
  }]);

  return TagGridPage;
}(_react.Component), _class3.propTypes = {
  catalogItems: _propTypes.default.array.isRequired,
  catalogItemsPageInfo: _propTypes.default.object,
  classes: _propTypes.default.object,
  isLoadingCatalogItems: _propTypes.default.bool,
  routingStore: _propTypes.default.object,
  shop: _propTypes.default.shape({
    currency: _propTypes.default.shape({
      code: _propTypes.default.string.isRequired
    })
  }),
  tag: _propTypes.default.object,
  tags: _propTypes.default.shape({
    edges: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
  }),
  uiStore: _propTypes.default.shape({
    pageSize: _propTypes.default.number.isRequired,
    setPageSize: _propTypes.default.func.isRequired,
    setSortBy: _propTypes.default.func.isRequired,
    sortBy: _propTypes.default.string.isRequired
  })
}, _class3.defaultProps = {
  tag: {}
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, "trackEvent", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackEvent"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
exports.default = TagGridPage;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes")();

routes.add("home", "/", "productGrid").add("cart", "/cart", "cart").add("checkout", "/cart/checkout", "checkout").add("checkoutLogin", "/cart/login", "checkout").add("checkoutComplete", "/checkout/order/:orderId", "checkoutComplete").add("login", "/login", "login").add("shopProduct", "/shop/:shopSlug/product/:slugOrId", "product").add("product", "/product/:slugOrId/:variantId?", "product").add("shop", "/shop/:shopId/:tag", "productGrid").add("tag", "/tag/:slug", "tag");
module.exports = routes;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/tag.js");


/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Input":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/withStyles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ "@reactioncommerce/components/Button/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Button/v1");

/***/ }),

/***/ "@reactioncommerce/components/CatalogGrid/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CatalogGrid/v1");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "hoist-non-react-statics":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "mdi-material-ui/ChevronRight":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronRight");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-tracking":
/***/ (function(module, exports) {

module.exports = require("react-tracking");

/***/ })

/******/ });
//# sourceMappingURL=tag.js.map