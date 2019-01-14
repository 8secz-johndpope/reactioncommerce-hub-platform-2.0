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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/_error.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _reactHelmet = _interopRequireDefault(__webpack_require__("react-helmet"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _Typography = _interopRequireDefault(__webpack_require__("@material-ui/core/Typography"));

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/pages/_error.js";

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
    errorMessage: {
      color: theme.palette.reaction.black65
    },
    errorLink: {
      color: theme.palette.reaction.coolGrey400
    }
  };
};

var Error = (_dec = (0, _styles.withStyles)(styles), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Error, _Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          shop = _props.shop,
          statusCode = _props.statusCode,
          subtitle = _props.subtitle;
      return _react.default.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react.default.createElement(_reactHelmet.default, {
        title: "".concat(subtitle, " | ").concat(shop && shop.name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), statusCode ? _react.default.createElement(_Typography.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, " `An error $", statusCode, " occurred on server`") : _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement(_Typography.default, {
        className: classes.errorMessage,
        paragraph: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Sorry! We couldn't find what you're looking for."), _react.default.createElement(_Typography.default, {
        className: classes.errorLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement(_Link.default, {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Home"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res.statusCode; // Did not receive an OK response

      if (!statusCode) {
        statusCode = err ? err.statusCode : null;
      }

      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  shop: _propTypes.default.object,
  statusCode: _propTypes.default.object,
  subtitle: _propTypes.default.string
}, _class2.defaultProps = {
  subtitle: "Page Not Found"
}, _temp)) || _class);
exports.default = Error;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes")();

routes.add("home", "/", "productGrid").add("cart", "/cart", "cart").add("checkout", "/cart/checkout", "checkout").add("checkoutLogin", "/cart/login", "checkout").add("checkoutComplete", "/checkout/order/:orderId", "checkoutComplete").add("login", "/login", "login").add("shopProduct", "/shop/:shopSlug/product/:slugOrId", "product").add("product", "/product/:slugOrId/:variantId?", "product").add("shop", "/shop/:shopId/:tag", "productGrid").add("tag", "/tag/:slug", "tag");
module.exports = routes;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_error.js");


/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-tracking":
/***/ (function(module, exports) {

module.exports = require("react-tracking");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map