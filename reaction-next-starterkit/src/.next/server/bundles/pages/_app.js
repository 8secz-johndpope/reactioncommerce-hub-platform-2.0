module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({"0":"chunks/src_lib_utils_locales_json_2fc2013d0e896a44beb67a5404bdbcaf"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return require('next/dynamic').SameLoopPromise.resolve();
/******/ 	};
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
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./components/AccountDropdown/AccountDropdown.js":
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

var _IconButton = _interopRequireDefault(__webpack_require__("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(__webpack_require__("@material-ui/core/Button"));

var _Account = _interopRequireDefault(__webpack_require__("mdi-material-ui/Account"));

var _Popover = _interopRequireDefault(__webpack_require__("@material-ui/core/Popover"));

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/ViewerInfo/v1"));

var _auth = __webpack_require__("./lib/auth/index.js");

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/AccountDropdown/AccountDropdown.js";

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
    accountDropdown: {
      width: 320,
      padding: theme.spacing.unit * 2
    },
    authContent: {
      marginBottom: theme.spacing.unit * 2
    }
  };
};

var AccountDropdown = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkAccountDropdown"
}), _dec2 = (0, _mobxReact.inject)("authStore"), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(AccountDropdown, _Component);

  function AccountDropdown() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AccountDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AccountDropdown.__proto__ || Object.getPrototypeOf(AccountDropdown)).call.apply(_ref, [this].concat(args))), _this.state = {
      anchorElement: null
    }, _this.toggleOpen = function (event) {
      _this.setState({
        anchorElement: event.currentTarget
      });
    }, _this.onClose = function () {
      _this.setState({
        anchorElement: null
      });
    }, _this.onTokenChange = function (event) {
      _this.setState({
        token: event.target.value || ""
      });
    }, _this.onTokenSave = function () {
      var authStore = _this.props.authStore;
      authStore.setToken(_this.state.token); // Reload so the auth changes can be reflected on server and in browser

      window.location.reload();
    }, _this.onLogin = function () {
      (0, _auth.login)();
    }, _this.onLogout = function () {
      window.location.reload();
    }, _temp));
  }

  _createClass(AccountDropdown, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          authStore = _props.authStore;
      var anchorElement = this.state.anchorElement;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.toggleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement(_Account.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react.default.createElement(_Popover.default, {
        anchorEl: anchorElement,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        open: Boolean(anchorElement),
        onClose: this.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement("div", {
        className: classes.accountDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, authStore.isAuthenticated ? _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("div", {
        className: classes.authContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react.default.createElement(_v.default, {
        viewer: {
          firstName: authStore.account.name,
          lastName: " "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), _react.default.createElement(_Button.default, {
        color: "primary",
        fullWidth: true,
        href: "/logout",
        variant: "raised",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "Sign Out")) : _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react.default.createElement("div", {
        className: classes.authContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react.default.createElement(_Button.default, {
        color: "primary",
        fullWidth: true,
        href: "/auth2",
        variant: "raised",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Sign In")), _react.default.createElement(_Button.default, {
        color: "primary",
        fullWidth: true,
        href: "/auth2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Create Account")))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // Sometimes state comes through null. This might be a NextJS bug or react
      // hot loader bug. For now, this workaround works.
      if (state === null) return null;
      var nextPropsToken = props.authStore && props.authStore.token || "";

      if (nextPropsToken !== state.prevToken) {
        // prevToken is changed only here and stored for next comparison, whereas
        // token is changed as the user types
        return {
          prevToken: nextPropsToken,
          token: nextPropsToken
        };
      }

      return null;
    }
  }]);

  return AccountDropdown;
}(_react.Component), _class2.propTypes = {
  authStore: _propTypes.default.object.isRequired,
  classes: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {}
}, _temp2)) || _class) || _class) || _class);
var _default = AccountDropdown;
exports.default = _default;

/***/ }),

/***/ "./components/AccountDropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _AccountDropdown.default;
  }
});

var _AccountDropdown = _interopRequireDefault(__webpack_require__("./components/AccountDropdown/AccountDropdown.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/CartItems/CartItems.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Button/v1"));

var _v2 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartItems/v1"));

var _dec,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/CartItems/CartItems.js";

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
    loadMore: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    },
    cfXPgA: {
      paddingLeft: 0,
      paddingRight: 0
    }
  };
};

var CartItems = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkCartItems"
}), _dec(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(CartItems, _Component);

  function CartItems() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CartItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CartItems.__proto__ || Object.getPrototypeOf(CartItems)).call.apply(_ref, [this].concat(args))), _this.handleItemQuantityChange = function (quantity, _id) {
      var onChangeCartItemQuantity = _this.props.onChangeCartItemQuantity;
      onChangeCartItemQuantity(quantity, _id);
    }, _this.handleRemoveItem = function (_id) {
      var onRemoveItemFromCart = _this.props.onRemoveItemFromCart;
      onRemoveItemFromCart(_id);
    }, _temp));
  }

  _createClass(CartItems, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          items = _props.items,
          isMiniCart = _props.isMiniCart,
          isReadOnly = _props.isReadOnly,
          hasMoreCartItems = _props.hasMoreCartItems,
          onLoadMoreCartItems = _props.onLoadMoreCartItems;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement(_v2.default, {
        isMiniCart: isMiniCart,
        isReadOnly: isReadOnly,
        items: items,
        onChangeCartItemQuantity: this.handleItemQuantityChange,
        onRemoveItemFromCart: this.handleRemoveItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), hasMoreCartItems && _react.default.createElement("div", {
        className: classes.loadMore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react.default.createElement(_v.default, {
        isShortHeight: isMiniCart,
        isTextOnly: true,
        onClick: onLoadMoreCartItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Load More")));
    }
  }]);

  return CartItems;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  hasMoreCartItems: _propTypes.default.bool,
  isMiniCart: _propTypes.default.bool,
  isReadOnly: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string,
    attributes: _propTypes.default.arrayOf(_propTypes.default.object),
    currencyQuantity: _propTypes.default.number,
    imageUrl: _propTypes.default.string,
    isLowInventoryQuantity: _propTypes.default.bool,
    price: _propTypes.default.shape({
      displayPrice: _propTypes.default.string,
      compareAtPrice: _propTypes.default.string
    }),
    productSlug: _propTypes.default.string,
    title: _propTypes.default.string,
    quantity: _propTypes.default.number
  })).isRequired,
  onChangeCartItemQuantity: _propTypes.default.func.isRequired,
  onLoadMoreCartItems: _propTypes.default.func,
  onRemoveItemFromCart: _propTypes.default.func.isRequired
}, _temp2)) || _class);
var _default = CartItems;
exports.default = _default;

/***/ }),

/***/ "./components/CartItems/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _CartItems.default;
  }
});

var _CartItems = _interopRequireDefault(__webpack_require__("./components/CartItems/CartItems.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/Footer/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _Typography = _interopRequireDefault(__webpack_require__("@material-ui/core/Typography"));

var _jsxFileName = "/usr/local/src/reaction-app/src/components/Footer/Footer.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var date = new Date();

var styles = function styles(theme) {
  return {
    footer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing.unit * 2
    }
  };
};

var Footer = function Footer(_ref) {
  var props = _extends({}, _ref);

  return _react.default.createElement("footer", {
    className: props.classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react.default.createElement(_Typography.default, {
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\xA9 ", date.getFullYear(), " Reaction Commerce"));
};

Footer.propTypes = {
  classes: _propTypes.default.object
};

var _default = (0, _styles.withStyles)(styles, {
  name: "SkFooter"
})(Footer);

exports.default = _default;

/***/ }),

/***/ "./components/Footer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});

var _Footer = _interopRequireDefault(__webpack_require__("./components/Footer/Footer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _AppBar = _interopRequireDefault(__webpack_require__("@material-ui/core/AppBar"));

var _Hidden = _interopRequireDefault(__webpack_require__("@material-ui/core/Hidden"));

var _Toolbar = _interopRequireDefault(__webpack_require__("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(__webpack_require__("@material-ui/core/Typography"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _NavigationDesktop = __webpack_require__("./components/NavigationDesktop/index.js");

var _NavigationMobile = __webpack_require__("./components/NavigationMobile/index.js");

var _AccountDropdown = _interopRequireDefault(__webpack_require__("./components/AccountDropdown/index.js"));

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/ShopLogo/v1"));

var _v2 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/ViewerInfo/v1"));

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _MiniCart = _interopRequireDefault(__webpack_require__("./components/MiniCart/index.js"));

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Header/Header.js";

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
    appBar: {
      backgroundColor: theme.palette.reaction.white,
      borderBottom: "solid 1px ".concat(theme.palette.reaction.black05),
      color: theme.palette.reaction.coolGrey500
    },
    controls: {
      alignItems: "inherit",
      display: "inherit",
      flex: 1
    },
    title: {
      color: theme.palette.reaction.reactionBlue,
      marginRight: theme.spacing.unit,
      borderBottom: "solid 5px ".concat(theme.palette.reaction.reactionBlue200)
    },
    toolbar: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between"
    }
  };
};

var Header = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkHeader"
}), _dec2 = (0, _mobxReact.inject)("uiStore"), _dec(_class = _dec2(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this.handleNavigationToggleClick = function () {
      _this.props.uiStore.toggleMenuDrawerOpen();
    }, _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$classes = _props.classes,
          appBar = _props$classes.appBar,
          controls = _props$classes.controls,
          toolbar = _props$classes.toolbar,
          title = _props$classes.title,
          shop = _props.shop,
          viewer = _props.viewer;
      return _react.default.createElement(_AppBar.default, {
        position: "static",
        elevation: 0,
        className: appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement(_Toolbar.default, {
        className: toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement(_Hidden.default, {
        mdUp: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react.default.createElement(_NavigationMobile.NavigationToggleMobile, {
        onClick: this.handleNavigationToggleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react.default.createElement("div", {
        className: controls,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement(_Typography.default, {
        className: title,
        color: "inherit",
        variant: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement(_Link.default, {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement(_v.default, {
        shopName: shop.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))), _react.default.createElement(_Hidden.default, {
        smDown: true,
        initialWidth: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react.default.createElement(_NavigationDesktop.NavigationDesktop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }))), viewer ? _react.default.createElement(_v2.default, {
        viewer: _objectSpread({}, this.splitNames, viewer),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }) : _react.default.createElement(_AccountDropdown.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react.default.createElement(_MiniCart.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), _react.default.createElement(_NavigationMobile.NavigationMobile, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }));
    }
  }, {
    key: "splitNames",
    // TODO: quick fix until we figure out the viewer name stuff.
    // See https://github.com/reactioncommerce/reaction/issues/4646
    get: function get() {
      var name = this.props.viewer.name;
      var firstName = name && name.split(" ").slice(0, -1).join(" ");
      var lastName = name && name.split(" ").slice(-1).join(" ");
      return {
        firstName: firstName,
        lastName: lastName
      };
    }
  }]);

  return Header;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  shop: _propTypes.default.shape({
    name: _propTypes.default.string
  }).isRequired,
  uiStore: _propTypes.default.shape({
    toggleMenuDrawerOpen: _propTypes.default.func.isRequired
  }).isRequired,
  viewer: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {}
}, _temp2)) || _class) || _class);
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});

var _Header = _interopRequireDefault(__webpack_require__("./components/Header/Header.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/Layout/Layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _Header = _interopRequireDefault(__webpack_require__("./components/Header/index.js"));

var _Footer = _interopRequireDefault(__webpack_require__("./components/Footer/index.js"));

var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/Layout/Layout.js";

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
      minHeight: "100vh"
    },
    main: {
      flex: "1 1 auto",
      maxWidth: theme.layout.mainContentMaxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    },
    article: {
      padding: theme.spacing.unit * 3
    }
  };
};

var Layout = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkLayout"
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children,
          shop = _props.shop,
          viewer = _props.viewer;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement(_Header.default, {
        shop: shop,
        viewer: viewer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react.default.createElement("main", {
        className: classes.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("article", {
        className: classes.article,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, children)), _react.default.createElement(_Footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })));
    }
  }]);

  return Layout;
}(_react.Component), _class2.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object,
  shop: _propTypes.default.shape({
    name: _propTypes.default.string
  }).isRequired,
  viewer: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {}
}, _temp)) || _class);
var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Layout.default;
  }
});

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout/Layout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ "./components/MiniCart/MiniCart.js":
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

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/MiniCart/v1"));

var _CartItems2 = _interopRequireDefault(__webpack_require__("./components/CartItems/index.js"));

var _v2 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartEmptyMessage/v1"));

var _IconButton = _interopRequireDefault(__webpack_require__("@material-ui/core/IconButton"));

var _Cart = _interopRequireDefault(__webpack_require__("mdi-material-ui/Cart"));

var _routes = __webpack_require__("./routes.js");

var _Badge = _interopRequireDefault(__webpack_require__("@material-ui/core/Badge"));

var _Popper = _interopRequireDefault(__webpack_require__("@material-ui/core/Popper"));

var _Fade = _interopRequireDefault(__webpack_require__("@material-ui/core/Fade"));

var _withCart = _interopRequireDefault(__webpack_require__("./containers/cart/withCart.js"));

var _withShop = _interopRequireDefault(__webpack_require__("./containers/shop/withShop.js"));

var _dec,
    _dec2,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/MiniCart/MiniCart.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(_ref) {
  var palette = _ref.palette,
      zIndex = _ref.zIndex;
  return {
    popper: {
      marginTop: "0.5rem",
      marginRight: "1rem",
      zIndex: zIndex.modal
    },
    cart: {
      backgroundColor: palette.common.white
    },
    emptyCart: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 320,
      height: 320,
      border: palette.borders.default
    },
    badge: {
      width: 20,
      height: 20,
      top: 10,
      left: 20
    }
  };
};

var MiniCart = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkMiniCart"
}), _dec2 = (0, _mobxReact.inject)("uiStore"), _dec(_class = (0, _withShop.default)(_class = (0, _withCart.default)(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(MiniCart, _Component);

  function MiniCart(props) {
    var _this;

    _classCallCheck(this, MiniCart);

    _this = _possibleConstructorReturn(this, (MiniCart.__proto__ || Object.getPrototypeOf(MiniCart)).call(this, props));
    _this.state = {
      open: false,
      anchorElement: null
    };
    _this.anchorElement = null;

    _this.handlePopperOpen = function () {
      var openCart = _this.props.uiStore.openCart;
      openCart();
    };

    _this.handleClick = function () {
      return _routes.Router.pushRoute("/");
    };

    _this.handleCheckoutButtonClick = function () {
      return _routes.Router.pushRoute("/cart/checkout");
    };

    _this.handlePopperClose = function () {
      var closeCart = _this.props.uiStore.closeCart;
      closeCart();
    };

    _this.handleEnterPopper = function () {
      var openCart = _this.props.uiStore.openCart;
      openCart();
    };

    _this.handleLeavePopper = function () {
      var closeCart = _this.props.uiStore.closeCart;
      closeCart();
    };

    _this.handleOnClick = function () {
      var closeCart = _this.props.uiStore.closeCart;
      closeCart();

      _routes.Router.pushRoute("cart");
    };

    _this.handleItemQuantityChange = function (quantity, cartItemId) {
      var onChangeCartItemsQuantity = _this.props.onChangeCartItemsQuantity;
      onChangeCartItemsQuantity({
        quantity: quantity,
        cartItemId: cartItemId
      });
    };

    _this.setPopoverAnchorEl = function (element) {
      _this.anchorElement = element;
    };

    return _this;
  }

  _createClass(MiniCart, [{
    key: "renderMiniCart",
    value: function renderMiniCart() {
      var _this2 = this;

      var _props = this.props,
          cart = _props.cart,
          classes = _props.classes,
          hasMoreCartItems = _props.hasMoreCartItems,
          loadMoreCartItems = _props.loadMoreCartItems,
          onRemoveCartItems = _props.onRemoveCartItems;

      if (cart && Array.isArray(cart.items) && cart.items.length) {
        return _react.default.createElement(_v.default, {
          cart: cart,
          onCheckoutButtonClick: this.handleCheckoutButtonClick,
          components: {
            QuantityInput: "div",
            CartItems: function CartItems(cartItemProps) {
              return _react.default.createElement(_CartItems2.default, _extends({}, cartItemProps, {
                hasMoreCartItems: hasMoreCartItems,
                onRemoveItemFromCart: onRemoveCartItems,
                onChangeCartItemQuantity: _this2.handleItemQuantityChange,
                onLoadMoreCartItems: loadMoreCartItems,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                }
              }));
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        });
      }

      return _react.default.createElement("div", {
        className: classes.emptyCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react.default.createElement(_v2.default, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          cart = _props2.cart,
          classes = _props2.classes,
          uiStore = _props2.uiStore;
      var isCartOpen = uiStore.isCartOpen;
      var id = isCartOpen ? "simple-popper" : null;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react.default.createElement("div", {
        ref: this.setPopoverAnchorEl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onMouseEnter: this.handlePopperOpen,
        onMouseLeave: this.handlePopperClose,
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, cart && cart.totalItemQuantity > 0 ? _react.default.createElement(_Badge.default, {
        badgeContent: cart.totalItemQuantity,
        color: "primary",
        classes: {
          badge: classes.badge
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react.default.createElement(_Cart.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      })) : _react.default.createElement(_Cart.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }))), _react.default.createElement(_Popper.default, {
        className: classes.popper,
        id: id,
        open: isCartOpen,
        anchorEl: this.anchorElement,
        transition: true,
        onMouseEnter: this.handleEnterPopper,
        onMouseLeave: this.handleLeavePopper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, function (_ref2) {
        var TransitionProps = _ref2.TransitionProps;
        return _react.default.createElement(_Fade.default, _extends({}, TransitionProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }), _react.default.createElement("div", {
          className: classes.cart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, _this3.renderMiniCart()));
      }));
    }
  }]);

  return MiniCart;
}(_react.Component), _class2.propTypes = {
  cart: _propTypes.default.shape({
    items: _propTypes.default.arrayOf(_propTypes.default.object),
    checkout: _propTypes.default.shape({
      itemTotal: _propTypes.default.shape({
        displayAmount: _propTypes.default.string
      }),
      taxTotal: _propTypes.default.shape({
        displayAmount: _propTypes.default.string
      })
    })
  }),
  classes: _propTypes.default.object.isRequired,
  hasMoreCartItems: _propTypes.default.bool,
  loadMoreCartItems: _propTypes.default.func,
  onChangeCartItemsQuantity: _propTypes.default.func,
  onRemoveCartItems: _propTypes.default.func,
  uiStore: _propTypes.default.shape({
    isCartOpen: _propTypes.default.bool.isRequired,
    openCart: _propTypes.default.func.isRequired,
    closeCart: _propTypes.default.func.isRequired
  })
}, _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = MiniCart;

/***/ }),

/***/ "./components/MiniCart/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _MiniCart.default;
  }
});

var _MiniCart = _interopRequireDefault(__webpack_require__("./components/MiniCart/MiniCart.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/NavigationDesktop/NavigationDesktop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavigationDesktop = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _index = __webpack_require__("./components/NavigationDesktop/index.js");

var _withNavigationTags = _interopRequireDefault(__webpack_require__("./containers/tags/withNavigationTags.js"));

var _class,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/NavigationDesktop/NavigationDesktop.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationDesktop = (_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationDesktop, _Component);

  function NavigationDesktop() {
    _classCallCheck(this, NavigationDesktop);

    return _possibleConstructorReturn(this, (NavigationDesktop.__proto__ || Object.getPrototypeOf(NavigationDesktop)).apply(this, arguments));
  }

  _createClass(NavigationDesktop, [{
    key: "renderNavItem",
    value: function renderNavItem(navItem, index) {
      return _react.default.createElement(_index.NavigationItemDesktop, {
        key: index,
        navItem: navItem.node,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var navItems = this.props.navItems;
      return _react.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, navItems && navItems.edges && navItems.edges.map(this.renderNavItem));
    }
  }]);

  return NavigationDesktop;
}(_react.Component), _class.propTypes = {
  classes: _propTypes.default.object,
  navItems: _propTypes.default.object
}, _class.defaultProps = {
  classes: {},
  navItems: []
}, _temp);
exports.NavigationDesktop = NavigationDesktop;

var _default = (0, _withNavigationTags.default)(NavigationDesktop);

exports.default = _default;

/***/ }),

/***/ "./components/NavigationDesktop/NavigationItemDesktop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _Button = _interopRequireDefault(__webpack_require__("@material-ui/core/Button"));

var _Divider = _interopRequireDefault(__webpack_require__("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(__webpack_require__("@material-ui/core/Grid"));

var _ListItemText = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItemText"));

var _MenuList = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuList"));

var _MenuItem = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuItem"));

var _Popover = _interopRequireDefault(__webpack_require__("@material-ui/core/Popover"));

var _ChevronDown = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronDown"));

var _ChevronRight = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronRight"));

var _ChevronUp = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronUp"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _routes = __webpack_require__("./routes.js");

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/NavigationDesktop/NavigationItemDesktop.js";

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
    popover: {
      left: "0!important",
      maxWidth: "100vw",
      padding: theme.spacing.unit * 2,
      width: "100vw"
    },
    grid: {
      width: "100vw"
    },
    navigationShopAllLink: {
      display: "flex",
      textDecoration: "underline",
      fontSize: "14px",
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 2,
      fontFamily: theme.typography.fontFamily
    },
    navigationShopAllLinkIcon: {
      fontSize: "12px"
    },
    primaryNavItem: {
      textTransform: "capitalize"
    }
  };
};

var NavigationItemDesktop = (_dec = (0, _mobxReact.inject)("routingStore"), _dec2 = (0, _styles.withStyles)(styles, {
  name: "SkNavigationItemDesktop"
}), _dec(_class = _dec2(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationItemDesktop, _Component);

  function NavigationItemDesktop() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NavigationItemDesktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NavigationItemDesktop.__proto__ || Object.getPrototypeOf(NavigationItemDesktop)).call.apply(_ref, [this].concat(args))), _this.state = {
      isSubNavOpen: false
    }, _this.linkPath = function (providedNavItem) {
      var _this$props = _this.props,
          navItem = _this$props.navItem,
          routingStore = _this$props.routingStore;
      var currentNavItem = providedNavItem || navItem;
      return routingStore.queryString !== "" ? "/tag/".concat(currentNavItem.slug, "?").concat(routingStore.queryString) : "/tag/".concat(currentNavItem.slug);
    }, _this.onClick = function (event) {
      event.preventDefault();
      var navItem = _this.props.navItem;

      if (_this.hasSubNavItems) {
        _this.setState({
          isSubNavOpen: !_this.state.isSubNavOpen
        });
      } else {
        var path = _this.linkPath();

        _routes.Router.pushRoute(path, {
          slug: navItem.slug
        });
      }
    }, _this.onClose = function () {
      _this.setState({
        isSubNavOpen: false
      });
    }, _temp));
  }

  _createClass(NavigationItemDesktop, [{
    key: "renderSubNav",
    value: function renderSubNav(navItemGroup) {
      var _this2 = this;

      var menuItems = navItemGroup.subTags.edges.map(function (_ref2, index) {
        var navItem = _ref2.node;
        return _react.default.createElement(_MenuItem.default, {
          dense: true,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, _react.default.createElement(_Link.default, {
          onClick: _this2.onClose,
          route: "".concat(_this2.linkPath(navItem)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react.default.createElement(_ListItemText.default, {
          primary: navItem.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        })));
      });
      menuItems.unshift(_react.default.createElement(_Divider.default, {
        key: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }));
      return menuItems;
    }
  }, {
    key: "renderPopover",
    value: function renderPopover() {
      var _this3 = this;

      var _props = this.props,
          classes = _props.classes,
          navItem = _props.navItem,
          subTags = _props.navItem.subTags;

      if (subTags) {
        return _react.default.createElement(_Popover.default, {
          classes: {
            paper: classes.popover
          },
          anchorReference: "anchorPosition",
          anchorPosition: {
            left: 0,
            top: 64
          },
          elevation: 1,
          onClose: this.onClose,
          open: this.state.isSubNavOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react.default.createElement(_Grid.default, {
          container: true,
          className: classes.grid,
          spacing: 16,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, subTags.edges.map(function (_ref3, index) {
          var navItemGroup = _ref3.node;
          return _react.default.createElement(_Grid.default, {
            item: true,
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          }, _react.default.createElement(_MenuList.default, {
            disablePadding: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          }, _react.default.createElement(_MenuItem.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          }, _react.default.createElement(_Link.default, {
            onClick: _this3.onClose,
            route: "".concat(_this3.linkPath(navItemGroup)),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            }
          }, _react.default.createElement(_ListItemText.default, {
            primary: navItemGroup.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          }))), navItemGroup.subTags && Array.isArray(navItemGroup.subTags.edges) && _this3.renderSubNav(navItemGroup)));
        })), _react.default.createElement(_Link.default, {
          className: classes.navigationShopAllLink,
          onClick: this.onClose,
          route: "".concat(this.linkPath()),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, "Shop all ", navItem.name, " ", _react.default.createElement(_ChevronRight.default, {
          className: classes.navigationShopAllLinkIcon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }))));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          primaryNavItem = _props2.classes.primaryNavItem,
          navItem = _props2.navItem;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react.default.createElement(_Button.default, {
        className: primaryNavItem,
        color: "inherit",
        onClick: this.onClick,
        href: this.linkPath(navItem),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, navItem.name, this.hasSubNavItems && _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, this.state.isSubNavOpen ? _react.default.createElement(_ChevronUp.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }) : _react.default.createElement(_ChevronDown.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }))), this.hasSubNavItems && this.renderPopover());
    }
  }, {
    key: "hasSubNavItems",
    get: function get() {
      var subTags = this.props.navItem.subTags;
      return subTags && Array.isArray(subTags.edges) && subTags.edges.length > 0;
    }
  }]);

  return NavigationItemDesktop;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  navItem: _propTypes.default.object,
  routingStore: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {},
  navItem: {},
  routingStore: {}
}, _temp2)) || _class) || _class);
var _default = NavigationItemDesktop;
exports.default = _default;

/***/ }),

/***/ "./components/NavigationDesktop/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NavigationDesktop", {
  enumerable: true,
  get: function get() {
    return _NavigationDesktop.default;
  }
});
Object.defineProperty(exports, "NavigationItemDesktop", {
  enumerable: true,
  get: function get() {
    return _NavigationItemDesktop.default;
  }
});

var _NavigationDesktop = _interopRequireDefault(__webpack_require__("./components/NavigationDesktop/NavigationDesktop.js"));

var _NavigationItemDesktop = _interopRequireDefault(__webpack_require__("./components/NavigationDesktop/NavigationItemDesktop.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./components/NavigationMobile/NavigationItemMobile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _routes = __webpack_require__("./routes.js");

var _ListItemIcon = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(__webpack_require__("@material-ui/core/ListItemText"));

var _Collapse = _interopRequireDefault(__webpack_require__("@material-ui/core/Collapse"));

var _MenuList = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuList"));

var _MenuItem = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuItem"));

var _ChevronDown = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronDown"));

var _ChevronUp = _interopRequireDefault(__webpack_require__("mdi-material-ui/ChevronUp"));

var _styles = __webpack_require__("@material-ui/core/styles");

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/NavigationMobile/NavigationItemMobile.js";

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
    subNav: {
      marginBottom: theme.spacing.unit * 2
    },
    listItemTextInset: {
      "&:first-child": {
        paddingLeft: theme.spacing.unit * 3
      }
    }
  };
};

var NavigationItemMobile = (_dec = (0, _mobxReact.inject)("routingStore"), _dec2 = (0, _styles.withStyles)(styles, {
  name: "SkNavigationItemMobile"
}), _dec(_class = _dec2(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationItemMobile, _Component);

  function NavigationItemMobile() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NavigationItemMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NavigationItemMobile.__proto__ || Object.getPrototypeOf(NavigationItemMobile)).call.apply(_ref, [this].concat(args))), _this.state = {
      isSubNavOpen: false
    }, _this.onClick = function () {
      var navItem = _this.props.navItem;

      if (_this.hasSubNavItems) {
        _this.setState({
          isSubNavOpen: !_this.state.isSubNavOpen
        });
      } else {
        var path = _this.linkPath;

        _routes.Router.pushRoute(path, {
          slug: navItem.slug
        });
      }
    }, _this.onClose = function () {
      _this.setState({
        isSubNavOpen: false
      });
    }, _temp));
  }

  _createClass(NavigationItemMobile, [{
    key: "renderSubNav",
    value: function renderSubNav(navItemGroup) {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.subNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, navItemGroup.subTags.edges.map(function (_ref2, index) {
        var navItemGroupItem = _ref2.node;
        return _react.default.createElement(_MenuItem.default, {
          className: classes.nested,
          dense: true,
          inset: true,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react.default.createElement(_ListItemText.default, {
          classes: {
            inset: classes.listItemTextInset
          },
          inset: true,
          primary: navItemGroupItem.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }));
      }));
    }
  }, {
    key: "renderCollapse",
    value: function renderCollapse() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          subTags = _props.navItem.subTags;
      return _react.default.createElement(_Collapse.default, {
        "in": this.state.isSubNavOpen,
        timeout: "auto",
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement(_MenuList.default, {
        component: "div",
        disablePadding: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, subTags.edges.map(function (_ref3, index) {
        var navItemGroup = _ref3.node;
        return _react.default.createElement(_MenuList.default, {
          disablePadding: true,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react.default.createElement(_MenuItem.default, {
          inset: true,
          className: classes.nested,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react.default.createElement(_ListItemText.default, {
          classes: {
            inset: classes.listItemTextInset
          },
          inset: true,
          primary: navItemGroup.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        })), Array.isArray(navItemGroup.subTags.edges) && _this2.renderSubNav(navItemGroup));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          navItem = _props2.navItem;
      return _react.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement(_MenuItem.default, {
        color: "inherit",
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement(_ListItemText.default, {
        classes: {
          primary: classes.primary
        },
        primary: navItem.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), this.hasSubNavItems && _react.default.createElement(_ListItemIcon.default, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, this.state.isSubNavOpen ? _react.default.createElement(_ChevronUp.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }) : _react.default.createElement(_ChevronDown.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }))), this.hasSubNavItems && this.renderCollapse());
    }
  }, {
    key: "linkPath",
    get: function get() {
      var _props3 = this.props,
          navItem = _props3.navItem,
          routingStore = _props3.routingStore;
      return routingStore.queryString !== "" ? "/tag/".concat(navItem.slug, "?").concat(routingStore.queryString) : "/tag/".concat(navItem.slug);
    }
  }, {
    key: "hasSubNavItems",
    get: function get() {
      var subTags = this.props.navItem.subTags;
      return Array.isArray(subTags.edges) && subTags.edges.length > 0;
    }
  }]);

  return NavigationItemMobile;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  navItem: _propTypes.default.object,
  routingStore: _propTypes.default.object
}, _class2.defaultProps = {
  classes: {},
  navItem: {},
  routingStore: {}
}, _temp2)) || _class) || _class);
var _default = NavigationItemMobile;
exports.default = _default;

/***/ }),

/***/ "./components/NavigationMobile/NavigationMobile.js":
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

var _Drawer = _interopRequireDefault(__webpack_require__("@material-ui/core/Drawer"));

var _MenuList = _interopRequireDefault(__webpack_require__("@material-ui/core/MenuList"));

var _index = __webpack_require__("./components/NavigationMobile/index.js");

var _withNavigationTags = _interopRequireDefault(__webpack_require__("./containers/tags/withNavigationTags.js"));

var _dec,
    _dec2,
    _class,
    _class2,
    _temp2,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/NavigationMobile/NavigationMobile.js";

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
    nav: {
      width: 320
    }
  };
};

var NavigationMobile = (_dec = (0, _styles.withStyles)(styles, {
  name: "SkNavigationMobile"
}), _dec2 = (0, _mobxReact.inject)("uiStore"), _dec(_class = (0, _withNavigationTags.default)(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationMobile, _Component);

  function NavigationMobile() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NavigationMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NavigationMobile.__proto__ || Object.getPrototypeOf(NavigationMobile)).call.apply(_ref, [this].concat(args))), _this.handleClose = function () {
      _this.props.uiStore.closeMenuDrawer();
    }, _temp));
  }

  _createClass(NavigationMobile, [{
    key: "renderNavItem",
    value: function renderNavItem(navItem, index) {
      return _react.default.createElement(_index.NavigationItemMobile, {
        key: index,
        navItem: navItem.node,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          navItems = _props.navItems,
          uiStore = _props.uiStore;
      return _react.default.createElement(_Drawer.default, {
        open: uiStore.isMenuDrawerOpen,
        onClose: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("nav", {
        className: classes.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react.default.createElement(_MenuList.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, navItems.edges && navItems.edges.map(this.renderNavItem))));
    }
  }]);

  return NavigationMobile;
}(_react.Component), _class2.propTypes = {
  classes: _propTypes.default.object,
  navItems: _propTypes.default.object,
  uiStore: _propTypes.default.shape({
    closeMenuDrawer: _propTypes.default.func
  }).isRequired
}, _class2.defaultProps = {
  classes: {},
  navItems: []
}, _temp2)) || _class) || _class) || _class) || _class);
var _default = NavigationMobile;
exports.default = _default;

/***/ }),

/***/ "./components/NavigationMobile/NavigationToggleMobile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _IconButton = _interopRequireDefault(__webpack_require__("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(__webpack_require__("mdi-material-ui/Menu"));

var _class,
    _temp,
    _jsxFileName = "/usr/local/src/reaction-app/src/components/NavigationMobile/NavigationToggleMobile.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationToggleMobile = (_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationToggleMobile, _Component);

  function NavigationToggleMobile() {
    _classCallCheck(this, NavigationToggleMobile);

    return _possibleConstructorReturn(this, (NavigationToggleMobile.__proto__ || Object.getPrototypeOf(NavigationToggleMobile)).apply(this, arguments));
  }

  _createClass(NavigationToggleMobile, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_IconButton.default, {
        color: "inherit",
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement(_Menu.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    }
  }]);

  return NavigationToggleMobile;
}(_react.Component), _class.propTypes = {
  onClick: _propTypes.default.func
}, _temp);
var _default = NavigationToggleMobile;
exports.default = _default;

/***/ }),

/***/ "./components/NavigationMobile/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NavigationMobile", {
  enumerable: true,
  get: function get() {
    return _NavigationMobile.default;
  }
});
Object.defineProperty(exports, "NavigationItemMobile", {
  enumerable: true,
  get: function get() {
    return _NavigationItemMobile.default;
  }
});
Object.defineProperty(exports, "NavigationToggleMobile", {
  enumerable: true,
  get: function get() {
    return _NavigationToggleMobile.default;
  }
});

var _NavigationMobile = _interopRequireDefault(__webpack_require__("./components/NavigationMobile/NavigationMobile.js"));

var _NavigationItemMobile = _interopRequireDefault(__webpack_require__("./components/NavigationMobile/NavigationItemMobile.js"));

var _NavigationToggleMobile = _interopRequireDefault(__webpack_require__("./components/NavigationMobile/NavigationToggleMobile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./containers/account/viewer.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"viewer"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"emailRecords"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"primaryEmailAddress"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":112}};
    doc.loc.source = {"body":"query viewer {\n  viewer {\n    _id\n    emailRecords {\n      address\n    }\n    name\n    primaryEmailAddress\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["viewer"] = oneQuery(doc, "viewer");
        


/***/ }),

/***/ "./containers/account/withViewer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withViewer;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _reactApollo = __webpack_require__("react-apollo");

var _mobxReact = __webpack_require__("mobx-react");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _viewer = _interopRequireDefault(__webpack_require__("./containers/account/viewer.gql"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/account/withViewer.js";

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
 * withViewer higher order query component for getting the current viewer account
 * @name WithViewer
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `viewer` prop
 */
function withViewer(Component) {
  var _dec, _class, _class2, _temp;

  var WithViewer = (_dec = (0, _mobxReact.inject)("authStore"), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithViewer, _React$Component);

    function WithViewer() {
      _classCallCheck(this, WithViewer);

      return _possibleConstructorReturn(this, (WithViewer.__proto__ || Object.getPrototypeOf(WithViewer)).apply(this, arguments));
    }

    _createClass(WithViewer, [{
      key: "render",
      value: function render() {
        var _this = this;

        var authStore = this.props.authStore;
        return _react.default.createElement(_reactApollo.Query, {
          query: _viewer.default,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, function (_ref) {
          var data = _ref.data;

          if (data && data.viewer) {
            authStore.setAccount(data.viewer);
          }

          return _react.default.createElement(Component, _extends({}, _this.props, {
            viewer: data && data.viewer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }));
        });
      }
    }]);

    return WithViewer;
  }(_react.default.Component), _class2.propTypes = {
    authStore: _propTypes.default.shape({
      setAccountId: _propTypes.default.func
    })
  }, _temp)) || _class) || _class);
  (0, _hoistNonReactStatics.default)(WithViewer, Component);
  return WithViewer;
}

/***/ }),

/***/ "./containers/cart/fragments.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartCommon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"emailRecords"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shop"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillmentGroups"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"data"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"company"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBillingDefault"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isCommercial"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isShippingDefault"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"postal"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"region"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"availableFulfillmentOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"fulfillmentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"selectedFulfillmentOption"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillmentMethod"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayName"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"handlingPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfillmentTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"itemTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"taxTotal"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"total"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItemQuantity"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartQueryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartCommon"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsAfterCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartItemConnectionFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartCommon"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartItemConnectionFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartItemConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CartItemConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productConfiguration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productVariantId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"addedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBackorder"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isLowQuantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isSoldOut"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageURLs"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"large"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"small"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"original"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"medium"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"metafields"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"key"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"parcel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"width"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"weight"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"height"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceWhenAdded"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productSlug"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shop"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variantTitle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"optionTitle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currentQuantity"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IncorrectPriceFailureDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IncorrectPriceFailureDetails"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"productConfiguration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productVariantId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"providedPrice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"displayAmount"},"arguments":[],"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MinOrderQuantityFailureDetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MinOrderQuantityFailureDetails"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minOrderQuantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productConfiguration"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"productVariantId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":3347}};
    doc.loc.source = {"body":"# Common fields for cart for queries\nfragment CartCommon on Cart {\n  _id\n  createdAt\n  account {\n    _id\n    emailRecords {\n      address\n    }\n  }\n  shop {\n    _id\n    currency {\n      code\n    }\n  }\n  email\n  updatedAt\n  expiresAt\n  checkout {\n    fulfillmentGroups {\n      _id\n      type\n      data {\n        shippingAddress {\n          address1\n          address2\n          city\n          company\n          country\n          fullName\n          isBillingDefault\n          isCommercial\n          isShippingDefault\n          phone\n          postal\n          region\n        }\n      }\n      availableFulfillmentOptions {\n        price {\n          amount\n          displayAmount\n        }\n        fulfillmentMethod {\n          _id\n          name\n          displayName\n        }\n      }\n      selectedFulfillmentOption {\n        fulfillmentMethod {\n          _id\n          name\n          displayName\n        }\n        price {\n          amount\n          displayAmount\n        }\n        handlingPrice {\n          amount\n          displayAmount\n        }\n      }\n    }\n    summary {\n      fulfillmentTotal {\n        displayAmount\n      }\n      itemTotal {\n        displayAmount\n      }\n      taxTotal {\n        displayAmount\n      }\n      total {\n        amount\n        displayAmount\n      }\n    }\n  }\n  totalItemQuantity\n}\n\n# Fragment for queries that require pagination\nfragment CartQueryFragment on Cart {\n  ...CartCommon\n  items(first: 20, after: $itemsAfterCursor) {\n    ...CartItemConnectionFragment\n  }\n}\n\n# Fragment for use with cart payloads\nfragment CartPayloadFragment on Cart {\n  ...CartCommon\n  items {\n    ...CartItemConnectionFragment\n  }\n}\n\n## Fragment for cart items, used in both queries and mutations\nfragment CartItemConnectionFragment on CartItemConnection {\n  pageInfo {\n    hasNextPage\n    endCursor\n  }\n  edges {\n    node {\n      _id\n      productConfiguration {\n        productId\n        productVariantId\n      }\n      addedAt\n      attributes {\n        label\n        value\n      }\n      createdAt\n      isBackorder\n      isLowQuantity\n      isSoldOut\n      imageURLs {\n        large\n        small\n        original\n        medium\n        thumbnail\n      }\n      metafields {\n        value\n        key\n      }\n      parcel {\n        length\n        width\n        weight\n        height\n      }\n      price {\n        amount\n        displayAmount\n        currency {\n          code\n        }\n      }\n      priceWhenAdded {\n        amount\n        displayAmount\n        currency {\n          code\n        }\n      }\n      productSlug\n      productType\n      quantity\n      shop {\n        _id\n      }\n      title\n      variantTitle\n      optionTitle\n      updatedAt\n      currentQuantity\n    }\n  }\n}\n\n# Fragment for use with payloads related cart. Used solely for mutations\nfragment IncorrectPriceFailureDetailsFragment on IncorrectPriceFailureDetails {\n  currentPrice {\n    amount\n    currency {\n      code\n    }\n    displayAmount\n  }\n  productConfiguration {\n    productId\n    productVariantId\n  }\n  providedPrice {\n    amount\n    currency {\n      code\n    }\n    displayAmount\n  }\n}\n\n# Fragment for use with payloads related cart. Used solely for mutations\nfragment MinOrderQuantityFailureDetailsFragment on MinOrderQuantityFailureDetails {\n  minOrderQuantity\n  productConfiguration {\n    productId\n    productVariantId\n  }\n  quantity\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

/***/ "./containers/cart/mutations.gql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCartInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"incorrectPriceFailures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncorrectPriceFailureDetailsFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"minOrderQuantityFailures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MinOrderQuantityFailureDetailsFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCartItemsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCartItemsInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCartItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"incorrectPriceFailures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IncorrectPriceFailureDetailsFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"minOrderQuantityFailures"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MinOrderQuantityFailureDetailsFragment"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"},"arguments":[],"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"reconcileCartsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReconcileCartsInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reconcileCarts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCartItemsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCartItemsInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCartItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setEmailOnAnonymousCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetEmailOnAnonymousCartInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setEmailOnAnonymousCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setFulfillmentOptionCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SelectFulfillmentOptionForGroupInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"selectFulfillmentOptionForGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setShippingAddressCartMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetShippingAddressOnCartInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setShippingAddressOnCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCartItemsQuantityMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCartItemsQuantityInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCartItemsQuantity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateFulfillmentOptionsForGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateFulfillmentOptionsForGroupInput"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFulfillmentOptionsForGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartPayloadFragment"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":2338}};
    doc.loc.source = {"body":"#import \"./fragments.gql\"\n\n# Create cart for both anonymous and account users\nmutation createCartMutation($input: CreateCartInput!) {\n  createCart(input: $input) {\n    cart {\n     ...CartPayloadFragment\n    }\n    incorrectPriceFailures {\n      ...IncorrectPriceFailureDetailsFragment\n    }\n    minOrderQuantityFailures {\n      ...MinOrderQuantityFailureDetailsFragment\n    }\n    clientMutationId\n    token\n  }\n}\n\n# Add items to the cart\nmutation addCartItemsMutation($input: AddCartItemsInput!) {\n  addCartItems(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n    incorrectPriceFailures {\n      ...IncorrectPriceFailureDetailsFragment\n    }\n    minOrderQuantityFailures {\n      ...MinOrderQuantityFailureDetailsFragment\n    }\n    clientMutationId\n  }\n}\n\n# Reconcile carts. Usually used to merge an anonymous cart with an account cart\nmutation reconcileCartsMutation($input: ReconcileCartsInput!) {\n  reconcileCarts(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n# Remove items from cart\nmutation removeCartItemsMutation($input: RemoveCartItemsInput!) {\n  removeCartItems(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n\n# Set email on anonymous cart for guest checkout\nmutation setEmailOnAnonymousCartMutation($input: SetEmailOnAnonymousCartInput!) {\n  setEmailOnAnonymousCart(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n# Set Fulfillment option for items in cart\nmutation setFulfillmentOptionCartMutation($input: SelectFulfillmentOptionForGroupInput!) {\n  selectFulfillmentOptionForGroup(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n# Set shipping address on cart\nmutation setShippingAddressCartMutation($input: SetShippingAddressOnCartInput!) {\n  setShippingAddressOnCart(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n# Update the quantities of items in the cart\nmutation updateCartItemsQuantityMutation($input: UpdateCartItemsQuantityInput!) {\n  updateCartItemsQuantity(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n\n# Update fulfillment options for the provided fulfillment group\nmutation updateFulfillmentOptionsForGroup($input: UpdateFulfillmentOptionsForGroupInput!) {\n  updateFulfillmentOptionsForGroup(input: $input) {\n    cart {\n      ...CartPayloadFragment\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("./containers/cart/fragments.gql").definitions));


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
    
        module.exports["createCartMutation"] = oneQuery(doc, "createCartMutation");
        
        module.exports["addCartItemsMutation"] = oneQuery(doc, "addCartItemsMutation");
        
        module.exports["reconcileCartsMutation"] = oneQuery(doc, "reconcileCartsMutation");
        
        module.exports["removeCartItemsMutation"] = oneQuery(doc, "removeCartItemsMutation");
        
        module.exports["setEmailOnAnonymousCartMutation"] = oneQuery(doc, "setEmailOnAnonymousCartMutation");
        
        module.exports["setFulfillmentOptionCartMutation"] = oneQuery(doc, "setFulfillmentOptionCartMutation");
        
        module.exports["setShippingAddressCartMutation"] = oneQuery(doc, "setShippingAddressCartMutation");
        
        module.exports["updateCartItemsQuantityMutation"] = oneQuery(doc, "updateCartItemsQuantityMutation");
        
        module.exports["updateFulfillmentOptionsForGroup"] = oneQuery(doc, "updateFulfillmentOptionsForGroup");
        


/***/ }),

/***/ "./containers/cart/queries.gql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"anonymousCartByCartIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsAfterCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cart"},"name":{"kind":"Name","value":"anonymousCartByCartId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartQueryFragment"},"directives":[]}]}}]}},{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"accountCartByAccountIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsAfterCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cart"},"name":{"kind":"Name","value":"accountCartByAccountId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}},{"kind":"Argument","name":{"kind":"Name","value":"shopId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartQueryFragment"},"directives":[]}]}}]}}],"loc":{"start":0,"end":589}};
    doc.loc.source = {"body":"#import \"./fragments.gql\"\n\n# Get an anonymous cart by the anonymous cartId and and an anonymous cart token\nquery anonymousCartByCartIdQuery($cartId: ID!, $token: String!, $itemsAfterCursor: ConnectionCursor) {\n  cart: anonymousCartByCartId(cartId: $cartId, token: $token) {\n    ...CartQueryFragment\n  }\n}\n\n\n# Get an account cart by the accountId and the shopId the cart belongs to\nquery accountCartByAccountIdQuery($accountId: ID!, $shopId: ID!, $itemsAfterCursor: ConnectionCursor) {\n  cart: accountCartByAccountId(accountId: $accountId, shopId: $shopId) {\n    ...CartQueryFragment\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("./containers/cart/fragments.gql").definitions));


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
    
        module.exports["anonymousCartByCartIdQuery"] = oneQuery(doc, "anonymousCartByCartIdQuery");
        
        module.exports["accountCartByAccountIdQuery"] = oneQuery(doc, "accountCartByAccountIdQuery");
        


/***/ }),

/***/ "./containers/cart/withCart.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withCart;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _reactApollo = __webpack_require__("react-apollo");

var _mobxReact = __webpack_require__("mobx-react");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _cartItemsConnectionToArray = _interopRequireDefault(__webpack_require__("./lib/utils/cartItemsConnectionToArray.js"));

var _withShop = _interopRequireDefault(__webpack_require__("./containers/shop/withShop.js"));

var _mutations = __webpack_require__("./containers/cart/mutations.gql");

var _queries = __webpack_require__("./containers/cart/queries.gql");

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/cart/withCart.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * withCart higher order query component for creating, fetching, and updating carts
 * @name WithCart
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `cart` props and callbacks
 */
function withCart(Component) {
  var _dec, _class, _class2, _temp2;

  var WithCart = (_dec = (0, _mobxReact.inject)("cartStore", "authStore"), (0, _reactApollo.withApollo)(_class = (0, _withShop.default)(_class = _dec(_class = (0, _mobxReact.observer)(_class = (_temp2 = _class2 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithCart, _React$Component);

    function WithCart() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, WithCart);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = WithCart.__proto__ || Object.getPrototypeOf(WithCart)).call.apply(_ref, [this].concat(args))), _this.handleChangeCartItemsQuantity = function (cartItems) {
        var _this$props = _this.props,
            cartStore = _this$props.cartStore,
            apolloClient = _this$props.client;
        apolloClient.mutate({
          mutation: _mutations.updateCartItemsQuantityMutation,
          variables: {
            input: {
              cartId: cartStore.anonymousCartId || cartStore.accountCartId,
              items: Array.isArray(cartItems) && cartItems || [cartItems],
              token: cartStore.anonymousCartToken || null
            }
          },
          update: function update(cache, _ref2) {
            var mutationData = _ref2.data;

            if (mutationData && mutationData.updateCartItemsQuantity) {
              var cartPayload = mutationData.updateCartItemsQuantity.cart;

              if (cartPayload) {
                // Update Apollo cache
                cache.writeQuery({
                  query: cartPayload.account ? _queries.accountCartByAccountIdQuery : _queries.anonymousCartByCartIdQuery,
                  data: {
                    cart: cartPayload
                  }
                });
              }
            }
          }
        });
      }, _this.handleRemoveCartItems = function (itemIds) {
        var _this$props2 = _this.props,
            cartStore = _this$props2.cartStore,
            apolloClient = _this$props2.client;
        apolloClient.mutate({
          mutation: _mutations.removeCartItemsMutation,
          variables: {
            input: {
              cartId: cartStore.anonymousCartId || cartStore.accountCartId,
              cartItemIds: Array.isArray(itemIds) && itemIds || [itemIds],
              token: cartStore.anonymousCartToken || null
            }
          },
          update: function update(cache, _ref3) {
            var mutationData = _ref3.data;

            if (mutationData && mutationData.removeCartItems) {
              var cartPayload = mutationData.removeCartItems.cart;

              if (cartPayload) {
                // Update Apollo cache
                cache.writeQuery({
                  query: cartPayload.account ? _queries.accountCartByAccountIdQuery : _queries.anonymousCartByCartIdQuery,
                  data: {
                    cart: cartPayload
                  }
                });
              }
            }
          }
        });
      }, _this.handleSetEmailOnAnonymousCart =
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(_ref4) {
          var email, _this$props3, anonymousCartToken, apolloClient, _this$cartIdAndCartTo, cartToken, rest;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  email = _ref4.email;
                  _this$props3 = _this.props, anonymousCartToken = _this$props3.cartStore.anonymousCartToken, apolloClient = _this$props3.client; // Omit cartToken, as for this particular input type the
                  // the param is named token

                  _this$cartIdAndCartTo = _this.cartIdAndCartToken, cartToken = _this$cartIdAndCartTo.cartToken, rest = _objectWithoutProperties(_this$cartIdAndCartTo, ["cartToken"]);
                  _context.next = 5;
                  return apolloClient.mutate({
                    mutation: _mutations.setEmailOnAnonymousCartMutation,
                    variables: {
                      input: _objectSpread({}, _objectSpread({}, {
                        token: anonymousCartToken
                      }, rest), {
                        email: email
                      })
                    }
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }(), _this.handleUpdateFulfillmentOptionsForGroup =
      /*#__PURE__*/
      function () {
        var _ref6 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(fulfillmentGroupId) {
          var apolloClient;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  apolloClient = _this.props.client;
                  _context2.next = 3;
                  return apolloClient.mutate({
                    mutation: _mutations.updateFulfillmentOptionsForGroup,
                    variables: {
                      input: _objectSpread({}, _this.cartIdAndCartToken, {
                        fulfillmentGroupId: fulfillmentGroupId
                      })
                    }
                  });

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref6.apply(this, arguments);
        };
      }(), _this.handleSetFulfillmentOption =
      /*#__PURE__*/
      function () {
        var _ref8 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(_ref7) {
          var fulfillmentGroupId, fulfillmentMethodId, apolloClient;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  fulfillmentGroupId = _ref7.fulfillmentGroupId, fulfillmentMethodId = _ref7.fulfillmentMethodId;
                  apolloClient = _this.props.client;
                  _context3.next = 4;
                  return apolloClient.mutate({
                    mutation: _mutations.setFulfillmentOptionCartMutation,
                    variables: {
                      input: _objectSpread({}, _this.cartIdAndCartToken, {
                        fulfillmentGroupId: fulfillmentGroupId,
                        fulfillmentMethodId: fulfillmentMethodId
                      })
                    }
                  });

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x3) {
          return _ref8.apply(this, arguments);
        };
      }(), _this.handleSetShippingAddress =
      /*#__PURE__*/
      function () {
        var _ref9 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(address) {
          var apolloClient, result, cart;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  apolloClient = _this.props.client;
                  _context4.next = 3;
                  return apolloClient.mutate({
                    mutation: _mutations.setShippingAddressCartMutation,
                    variables: {
                      input: _objectSpread({}, _this.cartIdAndCartToken, {
                        address: address
                      })
                    }
                  });

                case 3:
                  result = _context4.sent;
                  // Update fulfillment options for current cart
                  cart = result.data.setShippingAddressOnCart.cart;
                  _context4.next = 7;
                  return _this.handleUpdateFulfillmentOptionsForGroup(cart.checkout.fulfillmentGroups[0]._id);

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x4) {
          return _ref9.apply(this, arguments);
        };
      }(), _temp));
    }

    _createClass(WithCart, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var cartStore = this.props.cartStore; // Update the anonymousCartId if necessary

        cartStore.setAnonymousCartCredentialsFromLocalStorage();
      }
      /**
       * Reconcile an anonymous and account cart when an anonymous user signs in
       * and they have an anonymous cart.
       * @name reconcileCartsIfNecessary
       * @summary Called when a user signs in with an anonymous cart
       * @private
       * @ignore
       * @param {Function} refetchCart An Apollo query function to refetch cart data
       * @returns {undefined} No return
       */

    }, {
      key: "reconcileCartsIfNecessary",
      value: function reconcileCartsIfNecessary(refetchCart) {
        var _props = this.props,
            authStore = _props.authStore,
            cartStore = _props.cartStore,
            shop = _props.shop,
            apolloClient = _props.client;

        if (cartStore.hasAnonymousCartCredentials && authStore.isAuthenticated && cartStore.isReconcilingCarts === false) {
          // Prevent multiple calls to reconcile cart mutations when one is currently in progress
          cartStore.setIsReconcilingCarts(true);
          apolloClient.mutate({
            mutation: _mutations.reconcileCartsMutation,
            update: function update(cache, _ref10) {
              var mutationData = _ref10.data;

              // If the mutation data contains a createCart object and we are an anonymous user,
              // then set the anonymous cart details
              if (mutationData && mutationData.reconcileCarts) {
                var cartPayload = mutationData.reconcileCarts.cart;

                if (cartPayload) {
                  // Clear anonymous account credentials
                  cartStore.clearAnonymousCartCredentials(); // Update cache for account cart query

                  cache.writeQuery({
                    query: _queries.accountCartByAccountIdQuery,
                    data: {
                      cart: cartPayload
                    }
                  }); // Refetch cart

                  refetchCart && refetchCart();
                }
              }

              cartStore.setIsReconcilingCarts(false);
            },
            variables: {
              input: {
                anonymousCartId: cartStore.anonymousCartId,
                anonymousCartToken: cartStore.anonymousCartToken,
                shopId: shop._id
              }
            }
          });
        }
      }
      /**
       * @name handleAddItemsToCart
       * @summary Called when addItemsToCart callback is called
       * @private
       * @ignore
       * @param {Function} mutation An Apollo mutation function
       * @param {Object} data An an object containing input data for mutations
       * @param {Array} data.items An an array of CartItemInput objects
       * @param {Boolean} isCreating True if the mutation is CreateCart. CreateCartInput does
       *   not allow `cartId` or `token` while `AddCartItemsInput` needs them.
       * @returns {undefined} No return
       */

    }, {
      key: "handleAddItemsToCart",
      value: function () {
        var _handleAddItemsToCart = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(mutation, data, isCreating) {
          var _props2, authStore, cartStore, shop, input, anonymousCartId, anonymousCartToken;

          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _props2 = this.props, authStore = _props2.authStore, cartStore = _props2.cartStore, shop = _props2.shop;
                  input = {
                    items: data.items
                  };

                  if (!isCreating && !authStore.isAuthenticated && cartStore.hasAnonymousCartCredentials) {
                    // Given an anonymous user, with a cart, add token and cartId to input
                    anonymousCartId = cartStore.anonymousCartId, anonymousCartToken = cartStore.anonymousCartToken; // Add items to an existing anonymous cart

                    input.token = anonymousCartToken;
                    input.cartId = anonymousCartId;
                  } else if (!isCreating && authStore.isAuthenticated && cartStore.hasAccountCart) {
                    // With an account and an account cart, set the accountCartId on the input object
                    input.cartId = cartStore.accountCartId;
                  } else if (isCreating) {
                    // With no anonymous or account cart, add shop Id to input as it will be needed for the create cart mutation
                    input.shopId = shop._id;
                  } // Run the mutation function provided as a param.
                  // It may take the form of `createCart` or `addCartItems` depending on the
                  // availability of a cart for either an anonymous or logged-in account.


                  _context5.next = 5;
                  return mutation({
                    variables: {
                      input: input
                    }
                  });

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function handleAddItemsToCart(_x5, _x6, _x7) {
          return _handleAddItemsToCart.apply(this, arguments);
        };
      }()
      /**
       * @name handleChangeCartItemsQuantity
       * @summary Update the quantity of one or more cart items
       * @ignore
       * @param {Array<Object>|Object} cartItems An array of objects or a single object of shape: { cartItemId: String, quantity: Int }
       * @returns {undefined} No return
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            authStore = _props3.authStore,
            cartStore = _props3.cartStore,
            shop = _props3.shop;
        var query = _queries.anonymousCartByCartIdQuery;
        var variables;
        var skipQuery = false; // With an anonymous cart

        if (cartStore.hasAnonymousCartCredentials) {
          // Otherwise, set query and variables for fetching an anonymous cart
          query = _queries.anonymousCartByCartIdQuery;
          variables = {
            cartId: cartStore.anonymousCartId,
            token: cartStore.anonymousCartToken
          };
        } else if (authStore.isAuthenticated) {
          // With an authenticated user, update the cart query to find an authenticated cart
          query = _queries.accountCartByAccountIdQuery;
          variables = {
            accountId: authStore.accountId,
            shopId: shop._id
          };
        } else {
          // Otherwise skip the query since we have nothing to load
          skipQuery = true;
        }

        return _react.default.createElement(_reactApollo.Query, {
          query: query,
          variables: variables,
          skip: skipQuery,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          }
        }, function (_ref11) {
          var isLoading = _ref11.loading,
              cartData = _ref11.data,
              fetchMore = _ref11.fetchMore,
              refetchCart = _ref11.refetch;

          var _ref12 = cartData || {},
              cart = _ref12.cart;

          var _ref13 = cart && cart.items || {},
              pageInfo = _ref13.pageInfo; // With an authenticated cart, set the accountCartId for later use


          if (cart && cart.account && cart.account._id === authStore.accountId && authStore.isAuthenticated) {
            cartStore.setAccountCartId(cart._id);
          } else {
            cartStore.setAccountCartId(null);
          } // If we are authenticated, reconcile carts


          if (cartStore.hasAnonymousCartCredentials && authStore.isAuthenticated) {
            _this2.reconcileCartsIfNecessary(refetchCart);
          }

          var processedCartData = null;

          if (cart) {
            processedCartData = _objectSpread({}, cart, {
              items: (0, _cartItemsConnectionToArray.default)(cart.items)
            });
          }

          return _react.default.createElement(_reactApollo.Mutation, {
            mutation: cart ? _mutations.addCartItemsMutation : _mutations.createCartMutation,
            update: function update(cache, _ref14) {
              var mutationData = _ref14.data;
              // On update, refetch cart data
              refetchCart(); // If the mutation data contains a createCart object and we are an anonymous user,
              // then set the anonymous cart details

              if (mutationData && mutationData.createCart && !authStore.isAuthenticated) {
                var _mutationData$createC = mutationData.createCart,
                    cartPayload = _mutationData$createC.cart,
                    token = _mutationData$createC.token;
                cartStore.setAnonymousCartCredentials(cartPayload._id, token);
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            }
          }, function (mutationFunction) {
            return _react.default.createElement(Component, _extends({}, _this2.props, {
              addItemsToCart:
              /*#__PURE__*/
              function () {
                var _ref15 = _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee6(items) {
                  return _regenerator.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return _this2.handleAddItemsToCart(mutationFunction, {
                            items: items
                          }, !cart);

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));

                return function (_x8) {
                  return _ref15.apply(this, arguments);
                };
              }(),
              cart: processedCartData,
              checkoutMutations: {
                onSetFulfillmentOption: _this2.handleSetFulfillmentOption,
                onSetShippingAddress: _this2.handleSetShippingAddress
              },
              hasMoreCartItems: pageInfo && pageInfo.hasNextPage || false,
              isLoading: skipQuery ? false : isLoading,
              loadMoreCartItems: function loadMoreCartItems() {
                fetchMore({
                  variables: {
                    itemsAfterCursor: pageInfo && pageInfo.endCursor || null
                  },
                  updateQuery: function updateQuery(previousResult, _ref16) {
                    var fetchMoreResult = _ref16.fetchMoreResult;
                    var fetchMoreCart = fetchMoreResult.cart; // Check for additional items from result

                    if (fetchMoreCart && fetchMoreCart.items && Array.isArray(fetchMoreCart.items.edges) && fetchMoreCart.items.edges.length) {
                      // Merge previous cart items with next cart items
                      return _objectSpread({}, fetchMoreResult, {
                        cart: _objectSpread({}, fetchMoreCart, {
                          items: {
                            __typename: previousResult.cart.items.__typename,
                            pageInfo: fetchMoreCart.items.pageInfo,
                            edges: _toConsumableArray(previousResult.cart.items.edges).concat(_toConsumableArray(fetchMoreCart.items.edges))
                          }
                        })
                      });
                    } // Send the previous result if the new result contains no additional data


                    return previousResult;
                  }
                });
              },
              onChangeCartItemsQuantity: _this2.handleChangeCartItemsQuantity,
              onRemoveCartItems: _this2.handleRemoveCartItems,
              refetchCart: refetchCart,
              setEmailOnAnonymousCart: _this2.handleSetEmailOnAnonymousCart,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 404
              }
            }));
          });
        });
      }
    }, {
      key: "cartIdAndCartToken",
      get: function get() {
        var cartStore = this.props.cartStore;
        var accountCartId = cartStore.accountCartId,
            anonymousCartId = cartStore.anonymousCartId,
            anonymousCartToken = cartStore.anonymousCartToken;
        var cartToken = {};

        if (!accountCartId) {
          cartToken = {
            cartToken: anonymousCartToken
          };
        }

        return _objectSpread({
          cartId: accountCartId || anonymousCartId
        }, cartToken);
      }
      /**
       * @name handleSetFulfillmentOption
       * @summary Sets a fulfillment method for items in a cart
       * @param {Object} fulfillmentOption - an object with the following props: fulfillmentGroupId, fulfillmentMethodId
       * @param {Function} mutation An Apollo mutation function
       * @return {undefined} No return
       */

    }]);

    return WithCart;
  }(_react.default.Component), _class2.propTypes = {
    authStore: _propTypes.default.shape({
      accountId: _propTypes.default.string,
      token: _propTypes.default.string,
      isAuthenticated: _propTypes.default.bool
    }),
    cartStore: _propTypes.default.shape({
      anonymousCartId: _propTypes.default.string,
      anonymousCartToken: _propTypes.default.string,
      setAnonymousCartCredentialsFromLocalStorage: _propTypes.default.func
    }),
    client: _propTypes.default.shape({
      mutate: _propTypes.default.func.isRequired
    }),
    shop: _propTypes.default.shape({
      _id: _propTypes.default.string
    })
  }, _temp2)) || _class) || _class) || _class) || _class);
  (0, _hoistNonReactStatics.default)(WithCart, Component);
  return WithCart;
}

/***/ }),

/***/ "./containers/common-gql/primaryShopId.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"primaryShopId"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryShopId"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":40}};
    doc.loc.source = {"body":"query primaryShopId {\n  primaryShopId\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["primaryShopId"] = oneQuery(doc, "primaryShopId");
        


/***/ }),

/***/ "./containers/shop/shop.gql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"shopQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":125}};
    doc.loc.source = {"body":"query shopQuery($shopId: ID!) {\n  shop(id: $shopId) {\n    _id\n    description\n    name\n    currency {\n      code\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["shopQuery"] = oneQuery(doc, "shopQuery");
        


/***/ }),

/***/ "./containers/shop/withShop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withShop;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactApollo = __webpack_require__("react-apollo");

var _mobxReact = __webpack_require__("mobx-react");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _primaryShopId = _interopRequireDefault(__webpack_require__("./containers/common-gql/primaryShopId.gql"));

var _shop = _interopRequireDefault(__webpack_require__("./containers/shop/shop.gql"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/shop/withShop.js";

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
 * withShop higher order query component for fetching primaryShopId and shop data
 * @name withShop
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and shop as props
 */
function withShop(Component) {
  var Shop =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Shop, _React$Component);

    function Shop() {
      _classCallCheck(this, Shop);

      return _possibleConstructorReturn(this, (Shop.__proto__ || Object.getPrototypeOf(Shop)).apply(this, arguments));
    }

    _createClass(Shop, [{
      key: "render",
      value: function render() {
        var _this = this;

        return _react.default.createElement(_reactApollo.Query, {
          query: _primaryShopId.default,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, function (_ref) {
          var loadingPrimaryShopId = _ref.loading,
              data = _ref.data;

          var _ref2 = data || {},
              primaryShopId = _ref2.primaryShopId;

          return _react.default.createElement(_reactApollo.Query, {
            query: _shop.default,
            variables: {
              shopId: primaryShopId
            },
            skip: loadingPrimaryShopId,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, function (_ref3) {
            var loadingShopData = _ref3.loading,
                shopData = _ref3.data;

            var _ref4 = shopData || {},
                shop = _ref4.shop; // Use mobx-provider to pass shop data through context
            // as well as passing into the component directly


            return _react.default.createElement(_mobxReact.Provider, {
              primaryShopId: primaryShopId,
              shop: shop,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            }, _react.default.createElement(Component, _extends({}, _this.props, {
              isLoading: loadingPrimaryShopId || loadingShopData,
              primaryShopId: primaryShopId,
              shop: shop,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            })));
          });
        });
      }
    }]);

    return Shop;
  }(_react.default.Component);

  (0, _hoistNonReactStatics.default)(Shop, Component);
  return Shop;
}

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

/***/ "./containers/tags/tags.gql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tagsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shopId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shopId"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagInfo"},"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":292}};
    doc.loc.source = {"body":"#import \"./tagFragment.gql\"\n\nquery tagsQuery($shopId: ID!, $cursor: ConnectionCursor) {\n  tags(shopId: $shopId, first: 200, after: $cursor) {\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        ...TagInfo\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["tagsQuery"] = oneQuery(doc, "tagsQuery");
        


/***/ }),

/***/ "./containers/tags/withNavigationTags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withNavigationTags;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobx = __webpack_require__("mobx");

var _mobxReact = __webpack_require__("mobx-react");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/tags/withNavigationTags.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * withNavigationTags higher order query component for fetching tags for the navigation
 * @name NavigationTags
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `navItems` prop
 */
function withNavigationTags(Component) {
  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _class3, _temp2;

  var NavigationTags = (_dec = (0, _mobxReact.inject)("primaryShopId"), _dec2 = (0, _mobxReact.inject)("tags"), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = (_class2 = (_temp2 = _class3 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(NavigationTags, _React$Component);

    function NavigationTags() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, NavigationTags);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NavigationTags.__proto__ || Object.getPrototypeOf(NavigationTags)).call.apply(_ref, [this].concat(args))), _initDefineProp(_this, "_data", _descriptor, _assertThisInitialized(_this)), _this.getTagTree = (0, _mobx.action)(function (subTagIds) {
        var tags = _this.data.tags; // With a list of tags

        if (tags && tags.edges) {
          // If the there are subTags, we'll fetch them now
          if (Array.isArray(subTagIds) && subTagIds.length) {
            var subTags = [];

            var _loop = function _loop(subTagId) {
              var foundTagEdge = tags.edges.find(function (_ref2) {
                var node = _ref2.node;
                return node._id === subTagId;
              });

              if (foundTagEdge) {
                var subTag = foundTagEdge.node;

                if (subTag.subTagIds && Array.isArray(subTag.subTagIds)) {
                  subTag.subTags = {
                    edges: _this.getTagTree(subTag.subTagIds)
                  };
                }

                subTags.push({
                  node: subTag
                });
              }
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = subTagIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var subTagId = _step.value;

                _loop(subTagId);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return subTags;
          } else if (!subTagIds) {
            // Return the list of top-level tags
            return tags.edges.filter(function (_ref3) {
              var node = _ref3.node;
              return node.isTopLevel;
            }).map(function (_ref4) {
              var node = _ref4.node;

              if (node.subTagIds && Array.isArray(node.subTagIds)) {
                node.subTags = {
                  edges: _this.getTagTree(node.subTagIds)
                };
              }

              return {
                node: node
              };
            });
          }
        }

        return [];
      }), _temp));
    }

    _createClass(NavigationTags, [{
      key: "render",
      value: function render() {
        var tags = this.props.tags;
        this.data = {
          tags: tags
        };
        return _react.default.createElement(Component, _extends({}, this.props, {
          navItems: {
            edges: this.getTagTree(null, this.data)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }));
      }
    }, {
      key: "data",
      get: function get() {
        return (0, _mobx.toJS)(this._data);
      },
      set: function set(value) {
        this._data = value;
      }
      /**
       * Generates a tree from the given array of subTagIds.
       * @param {[String]} [subTagIds] - Array of tag ids. Starts from top-level tags if undefined
       * @return {Array} array of tags
       */

    }]);

    return NavigationTags;
  }(_react.default.Component), _class3.propTypes = {
    /**
     * ShopId used to obtain tags for
     */
    primaryShopId: _propTypes.default.string.isRequired,

    /**
     * Object of tags available to shop
     */
    tags: _propTypes.default.shape({
      edges: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
    })
  }, _temp2), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_data", [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  }), _applyDecoratedDescriptor(_class2.prototype, "data", [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, "data"), _class2.prototype)), _class2)) || _class) || _class) || _class);
  (0, _hoistNonReactStatics.default)(NavigationTags, Component);
  return NavigationTags;
}

/***/ }),

/***/ "./containers/tags/withTags.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withTag;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _reactApollo = __webpack_require__("react-apollo");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _tags = _interopRequireDefault(__webpack_require__("./containers/tags/tags.gql"));

var _jsxFileName = "/usr/local/src/reaction-app/src/containers/tags/withTags.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * withTag higher order query component for fetching tag information
 * @name WithTag
 * @param {React.Component} Component to decorate
 * @returns {React.Component} - Component with `tag` prop
 */
function withTag(Component) {
  var _dec, _class, _class2, _temp2;

  var WithTag = (_dec = (0, _mobxReact.inject)("primaryShopId"), _dec(_class = (_temp2 = _class2 =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithTag, _React$Component);

    function WithTag() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, WithTag);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = WithTag.__proto__ || Object.getPrototypeOf(WithTag)).call.apply(_ref, [this].concat(args))), _this.fetchMoreDataIfNecessary = function (fetchMore, data) {
        var primaryShopId = _this.props.primaryShopId;
        var pageInfo = data && data.tags.pageInfo;

        if (pageInfo && pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              shopId: primaryShopId,
              cursor: pageInfo.endCursor
            },
            updateQuery: function updateQuery(previousResult, _ref2) {
              var fetchMoreResult = _ref2.fetchMoreResult;
              var _fetchMoreResult$tags = fetchMoreResult.tags,
                  newEdges = _fetchMoreResult$tags.edges,
                  newPageInfo = _fetchMoreResult$tags.pageInfo; // Return with additional results

              if (newEdges.length) {
                // Concat the previous and next data
                var newEdgesArray = _toConsumableArray(previousResult.tags.edges).concat(_toConsumableArray(newEdges)); // Remove duplicates


                newEdgesArray = newEdgesArray.filter(function (obj, pos, arr) {
                  return arr.map(function (_ref3) {
                    var node = _ref3.node;
                    return node._id;
                  }).indexOf(obj.node._id) === pos;
                });
                return {
                  tags: {
                    __typename: previousResult.tags.__typename,
                    edges: newEdgesArray,
                    pageInfo: newPageInfo
                  }
                };
              } // Send the previous result if the new result contains no additional data


              return previousResult;
            }
          }).catch(function () {
            /*
              Catch errors, namely `TypeError: Cannot set property 'networkStatus' of undefined` which seems to be
              an Apollo issue: https://github.com/apollographql/apollo-client/issues/2539
            */
          });
        }
      }, _temp));
    }

    _createClass(WithTag, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var primaryShopId = this.props.primaryShopId;
        return _react.default.createElement(_reactApollo.Query, {
          query: _tags.default,
          variables: {
            shopId: primaryShopId
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, function (_ref4) {
          var loading = _ref4.loading,
              error = _ref4.error,
              data = _ref4.data,
              fetchMore = _ref4.fetchMore;
          if (loading || error) return null;
          if (!data || !data.tags) return null; // Recursively more tags until we can fetch no more

          _this2.fetchMoreDataIfNecessary(fetchMore, data);

          return _react.default.createElement(_mobxReact.Provider, {
            tags: data.tags,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }, _react.default.createElement(Component, _extends({}, _this2.props, {
            tags: data.tags,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          })));
        });
      }
    }]);

    return WithTag;
  }(_react.default.Component), _class2.propTypes = {
    /**
     * ShopId used to obtain tags for
     */
    primaryShopId: _propTypes.default.string.isRequired
    /**
     * Generates a tree from the given array of subTagIds.
     * @param {Function} fetchMore - Function used to fetch more data from a graphql endpoint
     * @param {Object} data - Data from previous query, used for recursion to fetch all tags
     * @return {undefined} no return value
     */

  }, _temp2)) || _class);
  (0, _hoistNonReactStatics.default)(WithTag, Component);
  return WithTag;
}

/***/ }),

/***/ "./lib/apollo/initApollo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _apolloClient = __webpack_require__("apollo-client");

var _apolloLink = __webpack_require__("apollo-link");

var _apolloLinkHttp = __webpack_require__("apollo-link-http");

var _apolloLinkContext = __webpack_require__("apollo-link-context");

var _apolloLinkError = __webpack_require__("apollo-link-error");

var _apolloCacheInmemory = __webpack_require__("apollo-cache-inmemory");

var _isomorphicFetch = _interopRequireDefault(__webpack_require__("isomorphic-fetch"));

var _config = _interopRequireDefault(__webpack_require__("next/config"));

var _omitVariableTypenameLink = __webpack_require__("./lib/apollo/omitVariableTypenameLink.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Config
var graphqlUrl;

var _getConfig = (0, _config.default)(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig,
    serverRuntimeConfig = _getConfig.serverRuntimeConfig;
/* eslint-disable prefer-destructuring */


if (process.browser) {
  graphqlUrl = publicRuntimeConfig.graphqlUrl;
} else {
  graphqlUrl = serverRuntimeConfig.graphqlUrl;
}
/* eslint-enable prefer-destructuring */


var apolloClient = null;

if (!process.browser) {
  global.fetch = _isomorphicFetch.default;
}

var create = function create(initialState, options) {
  // error handling for Apollo Link
  var errorLink = (0, _apolloLinkError.onError)(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
        networkError = _ref.networkError;

    if (graphQLErrors) {
      graphQLErrors.forEach(function (_ref2) {
        var message = _ref2.message,
            locations = _ref2.locations,
            path = _ref2.path;
        // eslint-disable-next-line no-console
        console.error("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(JSON.stringify(locations), ", Path: ").concat(JSON.stringify(path)));
      });
    }

    if (networkError) {
      // eslint-disable-next-line no-console
      console.error("[Network error]: ".concat(networkError));
    }
  });
  var authorizationHeader = {};

  if (options.accessToken) {
    authorizationHeader = {
      Authorization: options.accessToken
    };
  } // Set auth context
  // https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-context


  var authLink = (0, _apolloLinkContext.setContext)(function (__, _ref3) {
    var headers = _ref3.headers;
    return {
      headers: _objectSpread({}, headers, authorizationHeader)
    };
  });
  var httpLink = new _apolloLinkHttp.HttpLink({
    uri: "".concat(graphqlUrl),
    credentials: "same-origin"
  });
  return new _apolloClient.ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: _apolloLink.ApolloLink.from([_omitVariableTypenameLink.omitTypenameLink, authLink, errorLink, httpLink]),
    cache: new _apolloCacheInmemory.InMemoryCache().restore(initialState || {})
  });
};
/**
 * @name initApollo
 * @param {Object} initialState Initial state to initialize the Apollo client with
 * @param {Object} options Additional options to initialize the Apollo client with
 * @return {ApolloClient} Apollo client instance
 */


function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/apollo/omitVariableTypenameLink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omitTypenameLink = void 0;

var _apolloLink = __webpack_require__("apollo-link");

var omitTypename = function omitTypename(key, value) {
  return key === "__typename" ? undefined : value;
};

var omitTypenameLink = new _apolloLink.ApolloLink(function (operation, forward) {
  if (operation.variables) {
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }

  return forward ? forward(operation) : null;
});
exports.omitTypenameLink = omitTypenameLink;

/***/ }),

/***/ "./lib/apollo/withApolloClient.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withApolloClient;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _reactApollo = __webpack_require__("react-apollo");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _config = _interopRequireDefault(__webpack_require__("next/config"));

var _stores = _interopRequireDefault(__webpack_require__("./lib/stores/index.js"));

var _logger = _interopRequireDefault(__webpack_require__("./lib/logger/index.js"));

var _initApollo = _interopRequireDefault(__webpack_require__("./lib/apollo/initApollo.js"));

var _jsxFileName = "/usr/local/src/reaction-app/src/lib/apollo/withApolloClient.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _getConfig = (0, _config.default)(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig;
/**
 * Get the display name of a component
 * @name getComponentDisplayName
 * @param {React.Component} Component React component
 * @returns {String} Component display name
 */


function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || "Unknown";
}
/**
 * @name withApolloClient
 * @summary Wraps the component with a configured Apollo client provider
 * @param {React.Component} WrappedComponent Component to wrap
 * @returns {React.Component} Higher order component
 */


function withApolloClient(WrappedComponent) {
  var _class, _temp;

  var WithApolloClient = (_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithApolloClient, _React$Component);

    _createClass(WithApolloClient, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(ctx) {
          var Component, router, _ctx$ctx, req, res, query, pathname, user, apollo, wrappedComponentProps, apolloState;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = ctx.Component, router = ctx.router, _ctx$ctx = ctx.ctx, req = _ctx$ctx.req, res = _ctx$ctx.res, query = _ctx$ctx.query, pathname = _ctx$ctx.pathname; // Provide the `url` prop data in case a GraphQL query uses it

                  _stores.default.routingStore.updateRoute({
                    query: query,
                    pathname: pathname
                  });

                  user = req && req.session && req.session.passport && req.session.passport.user && JSON.parse(req.session.passport.user);
                  apollo = (0, _initApollo.default)({
                    cookies: req && req.cookies
                  }, {
                    accessToken: user && user.accessToken
                  });
                  ctx.ctx.apolloClient = apollo;
                  wrappedComponentProps = {};

                  if (!WrappedComponent.getInitialProps) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 9;
                  return WrappedComponent.getInitialProps(ctx);

                case 9:
                  wrappedComponentProps = _context.sent;

                case 10:
                  if (!(res && res.finished)) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt("return", {});

                case 12:
                  apolloState = {};

                  if (process.browser) {
                    _context.next = 26;
                    break;
                  }

                  _context.prev = 14;
                  _context.next = 17;
                  return (0, _reactApollo.getDataFromTree)(_react.default.createElement(_reactApollo.ApolloProvider, {
                    client: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    }
                  }, _react.default.createElement(WrappedComponent, _extends({}, wrappedComponentProps, {
                    Component: Component,
                    router: router,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  }))));

                case 17:
                  _context.next = 22;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](14);

                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                  if (_context.t0.networkError) {
                    _logger.default.error("Unable to access the GraphQL API. Is it running and accessible at ".concat(serverRuntimeConfig.graphqlUrl, " from the Storefront UI server?"));
                  } else {
                    _logger.default.error("Error while running `getDataFromTree`:", _context.t0);
                  }

                case 22:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head.default.rewind(); // Extract query data from the Apollo's store


                  apolloState.data = apollo.cache.extract();
                  _context.next = 27;
                  break;

                case 26:
                  apolloState.data = {};

                case 27:
                  return _context.abrupt("return", _objectSpread({}, wrappedComponentProps, {
                    apolloState: apolloState,
                    accessToken: user && user.accessToken
                  }));

                case 28:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[14, 19]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        var _nextProps$router = nextProps.router,
            pathname = _nextProps$router.pathname,
            query = _nextProps$router.query; // Update routing store with pathname and query after route change

        _stores.default.routingStore.updateRoute({
          pathname: pathname,
          query: query
        });

        return null;
      }
    }]);

    function WithApolloClient(props) {
      var _this;

      _classCallCheck(this, WithApolloClient);

      _this = _possibleConstructorReturn(this, (WithApolloClient.__proto__ || Object.getPrototypeOf(WithApolloClient)).call(this, props)); // `getDataFromTree` renders the component first, then the client is passed off as a property.
      // After that, rendering is done using Next's normal rendering pipeline

      _this.apollo = (0, _initApollo.default)(props.apolloState.data, {
        accessToken: props.accessToken
      }); // State must be initialized if getDerivedStateFromProps is used

      _this.state = {};
      return _this;
    }

    _createClass(WithApolloClient, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_reactApollo.ApolloProvider, {
          client: this.apollo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, _react.default.createElement(WrappedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        })));
      }
    }]);

    return WithApolloClient;
  }(_react.default.Component), _class.displayName = "WithApolloClient(".concat(getComponentDisplayName(WrappedComponent), ")"), _class.propTypes = {
    accessToken: _propTypes.default.string,
    apolloState: _propTypes.default.object.isRequired,
    router: _propTypes.default.object
  }, _temp); // Exclude copying `getInitialProps` because WithApolloClient has its own

  (0, _hoistNonReactStatics.default)(WithApolloClient, WrappedComponent, {
    getInitialProps: true
  });
  return WithApolloClient;
}

/***/ }),

/***/ "./lib/auth/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _config = _interopRequireDefault(__webpack_require__("next/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// trigger oauth login redirect flow with Keycloak (CLIENT SIDE ONLY)
// https://www.keycloak.org/docs/3.0/securing_apps/topics/oidc/javascript-adapter.html
var login = function login() {
  var _window = window,
      Keycloak = _window.Keycloak;

  var _getConfig = (0, _config.default)(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

  var keycloakConfig = publicRuntimeConfig.keycloakConfig; // eslint-disable-line no-unused-vars

  var _ref = keycloakConfig || {},
      realm = _ref.realm,
      clientId = _ref.clientId,
      url = _ref.url,
      redirectUri = _ref.redirectUri;

  var kc = new Keycloak({
    realm: realm,
    clientId: clientId,
    url: url
  }); // eslint-disable-next-line no-console

  kc.init({
    flow: "implicit"
  }).catch(function (error) {
    return console.error(error);
  });
  localStorage.setItem("kc-redirected-from", window.location.pathname); // eslint-disable-next-line no-console

  kc.login({
    redirectUri: redirectUri
  }).catch(function (error) {
    return console.error(error);
  });
};

exports.login = login;

/***/ }),

/***/ "./lib/logger/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(__webpack_require__("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

/**
 * Logger middleware
 */
var logger = {
  // Called whenever there's an error on the server we want to print
  error: function error(err) {
    console.error(_chalk.default.red(err));
  },
  // Called when express.js app starts on given port w/o errors
  appStarted: function appStarted(host, port) {
    console.log("Server started ! ".concat(_chalk.default.green("✓")));
    console.log("\n".concat(_chalk.default.magenta("http://".concat(host, ":").concat(port)), "\n").concat(_chalk.default.blue("Press ".concat(_chalk.default.italic("CTRL-C"), " to stop")), "\n    "));
  }
};
var _default = logger;
exports.default = _default;

/***/ }),

/***/ "./lib/stores/AuthStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsCookie = _interopRequireDefault(__webpack_require__("js-cookie"));

var _mobx = __webpack_require__("mobx");

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * A mobx store for authentication
 * @class AuthStore
 */
var AuthStore = (_class =
/*#__PURE__*/
function () {
  function AuthStore(name) {
    _classCallCheck(this, AuthStore);

    _initDefineProp(this, "accountId", _descriptor, this);

    _initDefineProp(this, "account", _descriptor2, this);

    _initDefineProp(this, "token", _descriptor3, this);

    this.tokenName = name || "token";
  }
  /**
   * The accountId of the currently signed-in user
   *
   * @type String
   */


  _createClass(AuthStore, [{
    key: "setToken",
    value: function setToken(token) {
      this.token = token || "";
      this.saveTokenToLocalStorage();
      this.saveTokenToCookie();
    }
  }, {
    key: "unsetToken",
    value: function unsetToken() {
      this.setToken("");
    }
  }, {
    key: "saveTokenToLocalStorage",
    value: function saveTokenToLocalStorage() {
      if (typeof this.token === "string" && this.token.length) {
        localStorage.setItem(this.tokenName, this.token);
      } else {
        localStorage.removeItem(this.tokenName);
      }
    }
  }, {
    key: "setTokenFromLocalStorage",
    value: function setTokenFromLocalStorage() {
      var token = localStorage.getItem(this.tokenName);
      this.setToken(token);
    }
  }, {
    key: "saveTokenToCookie",
    value: function saveTokenToCookie() {
      if (typeof this.token === "string" && this.token.length) {
        _jsCookie.default.set(this.tokenName, this.token);
      } else {
        _jsCookie.default.remove(this.tokenName);
      }
    }
  }, {
    key: "setAccount",
    value: function setAccount(account) {
      this.accountId = account._id || null;
      this.account = account;
    }
  }, {
    key: "isAuthenticated",
    get: function get() {
      if (this.accountId) {
        return true;
      }

      return false;
    }
  }]);

  return AuthStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "accountId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "account", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "token", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _applyDecoratedDescriptor(_class.prototype, "setToken", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setToken"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsetToken", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "unsetToken"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAccount", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAccount"), _class.prototype)), _class);
var _default = AuthStore;
exports.default = _default;

/***/ }),

/***/ "./lib/stores/CartStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsCookie = _interopRequireDefault(__webpack_require__("js-cookie"));

var _mobx = __webpack_require__("mobx");

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * A MobX store for cart
 * @class CartStore
 */
var CartStore = (_class =
/*#__PURE__*/
function () {
  function CartStore() {
    _classCallCheck(this, CartStore);

    this.ANONYMOUS_CART_ID_KEY_NAME = "anonymousCartId";
    this.ANONYMOUS_CART_TOKEN_KEY_NAME = "anonymousCartToken";

    _initDefineProp(this, "anonymousCartId", _descriptor, this);

    _initDefineProp(this, "anonymousCartToken", _descriptor2, this);

    _initDefineProp(this, "accountCartId", _descriptor3, this);

    _initDefineProp(this, "isReconcilingCarts", _descriptor4, this);

    _initDefineProp(this, "stripeToken", _descriptor5, this);
  }

  _createClass(CartStore, [{
    key: "setAnonymousCartCredentials",

    /**
     * @name setAnonymousCartCredentials
     * @summary Set anonymousCartID and anonymousCartToken to local storage and cookies
     * @param {String} anonymousCartId Cart Id from "createCart" mutation
     * @param {String} anonymousCartToken  Token from "createCart" mutation
     * @returns {undefined} No return
     */
    value: function setAnonymousCartCredentials(anonymousCartId, anonymousCartToken) {
      this.anonymousCartId = anonymousCartId || null;
      this.anonymousCartToken = anonymousCartToken || null;

      if (typeof this.anonymousCartId === "string" && this.anonymousCartId.length) {
        // Save to local storage
        localStorage.setItem(this.ANONYMOUS_CART_ID_KEY_NAME, this.anonymousCartId);
        localStorage.setItem(this.ANONYMOUS_CART_TOKEN_KEY_NAME, this.anonymousCartToken); // Save cookies

        _jsCookie.default.set(this.ANONYMOUS_CART_ID_KEY_NAME, this.anonymousCartId);

        _jsCookie.default.set(this.ANONYMOUS_CART_TOKEN_KEY_NAME, this.anonymousCartToken);
      } else {
        // Remove from local storage
        localStorage.removeItem(this.ANONYMOUS_CART_ID_KEY_NAME);
        localStorage.removeItem(this.ANONYMOUS_CART_TOKEN_KEY_NAME); // Remove cookies

        _jsCookie.default.remove(this.ANONYMOUS_CART_ID_KEY_NAME);

        _jsCookie.default.remove(this.ANONYMOUS_CART_TOKEN_KEY_NAME); // Clear stripe token


        this.stripeToken = null;
      }
    }
    /**
     * @name clearAnonymousCartCredentials
     * @summary Remove anonymousCartId and anonymousCartToken from local storage and cookies
     * @returns {undefined} No return
     */

  }, {
    key: "clearAnonymousCartCredentials",
    value: function clearAnonymousCartCredentials() {
      this.setAnonymousCartCredentials(null, null);
    }
    /**
     * @name setAnonymousCartCredentialsFromLocalStorage
     * @summary Set into class properties from local storage
     * @returns {undefined} No return
     */

  }, {
    key: "setAnonymousCartCredentialsFromLocalStorage",
    value: function setAnonymousCartCredentialsFromLocalStorage() {
      var anonymousCartId = localStorage.getItem(this.ANONYMOUS_CART_ID_KEY_NAME);
      var anonymousCartToken = localStorage.getItem(this.ANONYMOUS_CART_TOKEN_KEY_NAME); // Call to set, and ensure all credentials are the same in
      // local storage, cookies, and class properties

      this.setAnonymousCartCredentials(anonymousCartId, anonymousCartToken);
    }
    /**
     * @name setIsReconcilingCarts
     * @summary Set the value of isReconcilingCarts
     * @param {Boolean} value true/false
     * @returns {undefined} No return
     */

  }, {
    key: "setIsReconcilingCarts",
    value: function setIsReconcilingCarts(value) {
      this.isReconcilingCarts = value;
    }
    /**
     * @name hasAnonymousCartCredentials
     * @summary Return a boolean is the credentials for an anonymous cart exists
     * @returns {Boolean} Boolean true if credentials for an anonymous cart exists
     */

  }, {
    key: "setAccountCartId",
    value: function setAccountCartId(value) {
      this.accountCartId = value;
    }
  }, {
    key: "setStripeToken",
    value: function setStripeToken(value) {
      this.stripeToken = value;
    }
  }, {
    key: "hasAnonymousCartCredentials",
    get: function get() {
      return this.anonymousCartId && this.anonymousCartToken || false;
    }
  }, {
    key: "hasAccountCart",
    get: function get() {
      return typeof this.accountCartId === "string";
    }
  }, {
    key: "stripeToken",
    get: function get() {
      return this.stripeToken;
    }
  }]);

  return CartStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "anonymousCartId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "anonymousCartToken", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "accountCartId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isReconcilingCarts", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "stripeToken", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setAnonymousCartCredentials", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAnonymousCartCredentials"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearAnonymousCartCredentials", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearAnonymousCartCredentials"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setIsReconcilingCarts", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setIsReconcilingCarts"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAccountCartId", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAccountCartId"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setStripeToken", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setStripeToken"), _class.prototype)), _class);
var _default = CartStore;
exports.default = _default;

/***/ }),

/***/ "./lib/stores/RoutingStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__("mobx");

var _routes = __webpack_require__("./routes.js");

var _pageSizes = __webpack_require__("./lib/utils/pageSizes.js");

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/**
 * A mobx store for routing data
 * @class AuthStore
 */
var RoutingStore = (_class =
/*#__PURE__*/
function () {
  function RoutingStore() {
    _classCallCheck(this, RoutingStore);

    _initDefineProp(this, "pathname", _descriptor, this);

    _initDefineProp(this, "query", _descriptor2, this);

    _initDefineProp(this, "queryString", _descriptor3, this);

    _initDefineProp(this, "tag", _descriptor4, this);

    _initDefineProp(this, "setTag", _descriptor5, this);
  }

  _createClass(RoutingStore, [{
    key: "updateRoute",
    value: function updateRoute(_ref) {
      var pathname = _ref.pathname,
          query = _ref.query;
      this.pathname = pathname;
      this.query = query;
    }
    /**
     * Set a query string for the current route
     * @name setSearch
     * @param {String} search Search query string first=1&after=123
     * @returns {String} full url with query string
     */

  }, {
    key: "setSearch",
    value: function setSearch(search) {
      var _query = _objectSpread({}, (0, _mobx.toJS)(this.query), search);

      var _slug = _query.slug;

      var _limit = parseInt(_query.limit, 10);

      delete _query.slug; // Handle deleting query params

      var _arr = Object.keys(_query);

      for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];

        if (_query[key] === null) {
          delete _query[key];
        }
      } // Validate limit


      _query.limit = (0, _pageSizes.inPageSizes)(_limit) ? _limit : _pageSizes.PAGE_SIZES._20;
      var urlQueryString = "";
      Object.keys(_query).forEach(function (key, index, arr) {
        urlQueryString += "".concat(key, "=").concat(_query[key]);

        if (index < arr.length - 1) {
          urlQueryString += "&";
        }
      });
      this.queryString = urlQueryString;
      var path;

      if (_slug) {
        path = "".concat(this.pathname, "/").concat(_slug, "?").concat(this.queryString);
      } else {
        path = "".concat(this.pathname, "?").concat(this.queryString);
      }

      _routes.Router.pushRoute(path, path, {
        shallow: true
      });

      return path;
    }
  }]);

  return RoutingStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "pathname", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "query", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "queryString", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tag", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setTag", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (tag) {
      _this.tag = tag;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "updateRoute", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateRoute"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSearch", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSearch"), _class.prototype)), _class);
exports.default = RoutingStore;

/***/ }),

/***/ "./lib/stores/UIStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__("mobx");

var _config = _interopRequireDefault(__webpack_require__("next/config"));

var _pageSizes = __webpack_require__("./lib/utils/pageSizes.js");

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * A mobx store for UI data
 * @class AuthStore
 */
var UIStore = (_class =
/*#__PURE__*/
function () {
  function UIStore() {
    var _this = this;

    _classCallCheck(this, UIStore);

    _initDefineProp(this, "appConfig", _descriptor, this);

    _initDefineProp(this, "isCartOpen", _descriptor2, this);

    _initDefineProp(this, "isCartPopoverOpen", _descriptor3, this);

    _initDefineProp(this, "isMenuDrawerOpen", _descriptor4, this);

    _initDefineProp(this, "pageSize", _descriptor5, this);

    _initDefineProp(this, "sortBy", _descriptor6, this);

    _initDefineProp(this, "sortByCurrencyCode", _descriptor7, this);

    _initDefineProp(this, "pdpSelectedOptionId", _descriptor8, this);

    _initDefineProp(this, "pdpSelectedVariantId", _descriptor9, this);

    _initDefineProp(this, "locales", _descriptor10, this);

    _initDefineProp(this, "openCart", _descriptor11, this);

    _initDefineProp(this, "closeCart", _descriptor12, this);

    _initDefineProp(this, "openCartWithTimeout", _descriptor13, this);

    this.clearOpenCartTimeout = function () {
      _this.openCartTimeout && clearTimeout(_this.openCartTimeout);
    };

    _initDefineProp(this, "setPageSize", _descriptor14, this);

    _initDefineProp(this, "setSortBy", _descriptor15, this);
  }

  _createClass(UIStore, [{
    key: "setLocales",

    /* ACTIONS */

    /**
     * @name setLocales
     * @summary adds loaded locales data to store.
     * @param {Object} locales locales data loaded via json.
     * @returns {undefined} No return
     */
    value: function setLocales(locales) {
      this.locales = locales;
    }
  }, {
    key: "setPDPSelectedVariantId",
    value: function setPDPSelectedVariantId(variantId, optionId) {
      this.pdpSelectedVariantId = variantId;
      this.pdpSelectedOptionId = optionId;
    }
    /**
     * @name openCart
     * @summary Open the mini-cart drawer
     * @returns {undefined} No return
     */

  }, {
    key: "toggleCartOpen",
    value: function toggleCartOpen() {
      this.isCartOpen = !this.isCartOpen;
    }
  }, {
    key: "openCartPopover",
    value: function openCartPopover() {
      this.isCartPopoverOpen = true;
    }
  }, {
    key: "closeCartPopover",
    value: function closeCartPopover() {
      this.isCartPopoverOpen = false;
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer() {
      this.isMenuDrawerOpen = false;
    }
  }, {
    key: "toggleMenuDrawerOpen",
    value: function toggleMenuDrawerOpen() {
      this.isMenuDrawerOpen = !this.isMenuDrawerOpen;
    }
  }]);

  return UIStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "appConfig", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return (0, _config.default)();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isCartOpen", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isCartPopoverOpen", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isMenuDrawerOpen", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "pageSize", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return _pageSizes.PAGE_SIZES._20;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "sortBy", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "updatedAt-desc";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "sortByCurrencyCode", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "USD";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "pdpSelectedOptionId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "pdpSelectedVariantId", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "locales", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, "setLocales", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setLocales"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPDPSelectedVariantId", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPDPSelectedVariantId"), _class.prototype), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "openCart", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.isCartOpen = true;

      _this2.clearOpenCartTimeout();
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "closeCart", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
      _this3.openCartTimeout = setTimeout((0, _mobx.action)(function () {
        _this3.isCartOpen = false;

        _this3.clearOpenCartTimeout();
      }), delay);
    };
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "openCartWithTimeout", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

      _this4.openCart();

      _this4.openCartTimeout = setTimeout((0, _mobx.action)(function () {
        _this4.isCartOpen = false;
        clearTimeout(_this4.openCartTimeout);
      }), delay);
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "toggleCartOpen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleCartOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openCartPopover", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "openCartPopover"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeCartPopover", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "closeCartPopover"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeMenuDrawer", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "closeMenuDrawer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleMenuDrawerOpen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleMenuDrawerOpen"), _class.prototype), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "setPageSize", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (size) {
      // Validate page size
      _this5.pageSize = (0, _pageSizes.inPageSizes)(size) ? size : _pageSizes.PAGE_SIZES._20;
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "setSortBy", [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (sortBy) {
      _this6.sortBy = sortBy;
    };
  }
})), _class);
var _default = UIStore;
exports.default = _default;

/***/ }),

/***/ "./lib/stores/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = __webpack_require__("mobx");

var _executionEnv = __webpack_require__("./lib/utils/executionEnv.js");

var _AuthStore = _interopRequireDefault(__webpack_require__("./lib/stores/AuthStore.js"));

var _CartStore = _interopRequireDefault(__webpack_require__("./lib/stores/CartStore.js"));

var _RoutingStore = _interopRequireDefault(__webpack_require__("./lib/stores/RoutingStore.js"));

var _UIStore = _interopRequireDefault(__webpack_require__("./lib/stores/UIStore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mobx.configure)({
  enforceActions: true
});
var authStore = new _AuthStore.default("meteorToken");
var cartStore = new _CartStore.default();
var keycloakAuthStore = new _AuthStore.default("keycloakToken");
var routingStore = new _RoutingStore.default();
var uiStore = new _UIStore.default();
(0, _mobx.autorun)(function () {
  // Execute only in browser.
  if (_executionEnv.ExecutionEnv.canUseDOM) {
    var query = routingStore.query;

    if (query && query.limit) {
      uiStore.setPageSize(parseInt(query.limit, 10));
    }

    if (query && query.sortby) {
      uiStore.setSortBy(query.sortby);
    }
  }
});
var _default = {
  authStore: authStore,
  cartStore: cartStore,
  keycloakAuthStore: keycloakAuthStore,
  routingStore: routingStore,
  uiStore: uiStore
};
exports.default = _default;

/***/ }),

/***/ "./lib/stores/withMobX.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _mobxReact = __webpack_require__("mobx-react");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("hoist-non-react-statics"));

var _index = _interopRequireDefault(__webpack_require__("./lib/stores/index.js"));

var _jsxFileName = "/usr/local/src/reaction-app/src/lib/stores/withMobX.js";

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
 * @summary Provides MobX stores to each page.
 *
 * @param {Node} Component - The component to wrap
 * @returns {Node} - The wrapped component with Mobx stores add the react context.
 */
function withMobX(Component) {
  var WithMobX =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithMobX, _React$Component);

    function WithMobX() {
      _classCallCheck(this, WithMobX);

      return _possibleConstructorReturn(this, (WithMobX.__proto__ || Object.getPrototypeOf(WithMobX)).apply(this, arguments));
    }

    _createClass(WithMobX, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(_mobxReact.Provider, _extends({}, _index.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }), _react.default.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })));
      }
    }]);

    return WithMobX;
  }(_react.default.Component);

  (0, _hoistNonReactStatics.default)(WithMobX, Component);
  return WithMobX;
}

var _default = withMobX;
exports.default = _default;

/***/ }),

/***/ "./lib/theme/componentTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This is the theme file used by the Reaction Design System components.
 * Any variables you define here will override the default value for that
 * variable, but will not impact any other default variables (i.e., you are
 * extending the default theme object, and not overwriting it).
 */
var _default = {// This is an example. Uncomment this line to change the color of all buttons with the "important" action type.
  // Go to /cart with an empty cart to see this change on the "Continue shopping" button
  // rui_buttonBackgroundColor_important: "#20427B"
};
exports.default = _default;

/***/ }),

/***/ "./lib/theme/components.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iconClear = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconClear"));

var _iconError = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconError"));

var _iconValid = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconValid"));

var _iconAmericanExpress = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconAmericanExpress"));

var _iconDiscover = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconDiscover"));

var _iconMastercard = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconMastercard"));

var _iconVisa = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/iconVisa"));

var _spinner = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/svg/spinner"));

var _v = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/AddressForm/v1"));

var _v2 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/BadgeOverlay/v1"));

var _v3 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Button/v1"));

var _v4 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartItem/v1"));

var _v5 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartItemDetail/v1"));

var _v6 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartItems/v1"));

var _v7 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CartSummary/v1"));

var _v8 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CatalogGrid/v1"));

var _v9 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CatalogGridItem/v1"));

var _v10 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Checkbox/v1"));

var _v11 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CheckoutAction/v1"));

var _v12 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CheckoutActionComplete/v1"));

var _v13 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/CheckoutActionIncomplete/v1"));

var _v14 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/ErrorsBlock/v1"));

var _v15 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Field/v1"));

var _Link = _interopRequireDefault(__webpack_require__("./components/Link/index.js"));

var _v16 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/MiniCartSummary/v1"));

var _v17 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/PhoneNumberInput/v1"));

var _v18 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Price/v1"));

var _v19 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/ProgressiveImage/v1"));

var _v20 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/QuantityInput/v1"));

var _v21 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/Select/v1"));

var _v22 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/SelectableItem/v1"));

var _v23 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/SelectableList/v1"));

var _v24 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/StockWarning/v1"));

var _v25 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/StripeForm/v1"));

var _v26 = _interopRequireDefault(__webpack_require__("@reactioncommerce/components/TextInput/v1"));

var _withLocales = _interopRequireDefault(__webpack_require__("./lib/utils/withLocales.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All Reaction Design System components are injected into the app from this single file.
 * This allows you to easily swap out one of the default components for your own, everywhere
 * in the app. It also allows you to take updates to the `@reactioncommerce/components` package
 * without worrying about it pulling in new component versions everywhere automatically. Instead,
 * you can switch from the `v1` import path to the `v2` import path, e.g., for a single component
 * when you're ready.
 */
// Providing locales data
var AddressFormWithLocales = (0, _withLocales.default)(_v.default);
var _default = {
  AddressForm: AddressFormWithLocales,
  BadgeOverlay: _v2.default,
  Button: _v3.default,
  CartItem: _v4.default,
  CartItemDetail: _v5.default,
  CartItems: _v6.default,
  CartSummary: _v7.default,
  CatalogGrid: _v8.default,
  CatalogGridItem: _v9.default,
  Checkbox: _v10.default,
  CheckoutAction: _v11.default,
  CheckoutActionComplete: _v12.default,
  CheckoutActionIncomplete: _v13.default,
  ErrorsBlock: _v14.default,
  Field: _v15.default,
  Link: _Link.default,
  iconAmericanExpress: _iconAmericanExpress.default,
  iconClear: _iconClear.default,
  iconDiscover: _iconDiscover.default,
  iconError: _iconError.default,
  iconMastercard: _iconMastercard.default,
  iconValid: _iconValid.default,
  iconVisa: _iconVisa.default,
  MiniCartSummary: _v16.default,
  PhoneNumberInput: _v17.default,
  Price: _v18.default,
  ProgressiveImage: _v19.default,
  QuantityInput: _v20.default,
  Select: _v21.default,
  spinner: _spinner.default,
  SelectableItem: _v22.default,
  SelectableList: _v23.default,
  StockWarning: _v24.default,
  StripeForm: _v25.default,
  TextInput: _v26.default
};
exports.default = _default;

/***/ }),

/***/ "./lib/theme/getPageContext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageContext;

var _jss = __webpack_require__("jss");

var _styles = __webpack_require__("@material-ui/core/styles");

var _reactionTheme = _interopRequireDefault(__webpack_require__("./lib/theme/reactionTheme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @summary Creates and returns a page context object
 * @returns {Object} Page context object
 */
function createPageContext() {
  return {
    theme: _reactionTheme.default,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry(),
    // The standard class name generator.
    generateClassName: (0, _styles.createGenerateClassName)()
  };
}
/**
 * Either creates a new or returns an existing page context object. If called from Node, creates
 * a new object every time. Otherwise creates and caches an object in the browser and
 * subsequent calls will return that.
 *
 * @summary Gets a page context object
 * @returns {Object} Page context object
 */


function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ "./lib/theme/reactionTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = __webpack_require__("@material-ui/core/styles");

var theme = (0, _styles.createMuiTheme)({
  layout: {
    mainContentMaxWidth: "1440px",
    mainLoginMaxWidth: "1024px"
  },
  palette: {
    primary: {
      light: "#26B0F9",
      main: "#1999DD",
      dark: "#172F3C",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#5d8ea9",
      main: "#5E7480",
      dark: "#1D1D1D",
      contrastText: "#000000"
    },
    background: {
      default: "#ffffff"
    },
    error: {
      light: "#E54F5D",
      main: "#CD3F4C",
      dark: "#3C1F21",
      contrastText: "#FFFFFF"
    },
    action: {
      hover: "#f5f5f5",
      selected: "#f5f5f5"
    },
    colors: {
      buttonBorderColor: "#5e7480"
    },
    borders: {
      default: "1px solid #e6e6e6"
    },
    reaction: {
      activeElementBorderColor: "#94E8D1",
      activeElementBackground: "#E6E6E6",
      badges: {
        bestseller: "#8CE0C9",
        sale: "#E54F5D"
      },
      borderColor: "#CCCCCC",
      buttonBorderRadius: 2,
      // grey scale
      black: "#000000",
      black95: "#0d0d0d",
      black90: "#1a1a1a",
      black85: "#262626",
      black80: "#333333",
      black75: "#404040",
      black70: "#4d4d4d",
      black65: "#595959",
      black60: "#666666",
      black55: "#737373",
      black50: "#808080",
      black45: "#8c8c8c",
      black40: "#999999",
      black35: "#a6a6a6",
      black30: "#b3b3b3",
      black25: "#bfbfbf",
      black20: "#cccccc",
      black15: "#d9d9d9",
      black10: "#e6e6e6",
      black05: "#f5f5f5",
      black02: "#fafafa",
      white: "#ffffff",
      // medium colors
      reactionBlue: "#1999dd",
      reactionBlue100: "#ecf8fe",
      reactionBlue200: "#d6e5ed",
      reactionBlue300: "#26b0f9",
      reactionBlue400: "#067ebe",
      reactionBlue500: "#285268",
      reactionBlue600: "#172f3c",
      coolGrey: "#5e7480",
      coolGrey100: "#e3ebf0",
      coolGrey200: "#d5d5d5",
      coolGrey300: "#5d8ea9",
      coolGrey400: "#3c5d6f",
      coolGrey500: "#3c3c3c",
      coolGrey600: "#1d1d1d",
      // dark colors
      forestGreen: "#158562",
      forestGreen100: "#dcfaf1",
      forestGreen200: "#b4ddc1",
      forestGreen300: "#0db781",
      forestGreen400: "#066144",
      forestGreen500: "#285749",
      forestGreen600: "#1e4035",
      darkBlue: "#23566d",
      darkBlue100: "#d9ebf3",
      darkBlue200: "#c4d3da",
      darkBlue300: "#135471",
      darkBlue400: "#103a4d",
      darkBlue500: "#333f45",
      darkBlue600: "#242c30",
      // support colors
      yellow: "#3fc95f",
      yellow100: "#fcf3dc",
      yellow200: "#e9e1cb",
      yellow300: "#fdda79",
      yellow400: "#fbc120",
      yellow500: "#a2832d",
      yellow600: "#7a6322",
      red: "#cd3f4c",
      red100: "#ffeeef",
      red200: "#f0e8e9",
      red300: "#e54f5d",
      red400: "#bc1d2b",
      red500: "#5e3033",
      red600: "#3c1f21",
      pageLoading: {
        innerColor: "#1999dd",
        outerColor: "rgba(9.80392156862745%,59.99999999999995%,86.66666666666667%,0.122)"
      },
      teal: "#8ce0c9",
      teal100: "#edfdf8",
      teal200: "#d9ece6",
      teal300: "#a3f2dc",
      teal400: "#55e4be",
      teal500: "#447467",
      teal600: "#34584f"
    }
  },
  borderRadii: {
    default: 2
  },
  boxShadow: {
    depth0: "none",
    depth1: "0 0 1rem -0.5rem #808080",
    depth2: "0 0 1rem #808080"
  },
  spacing: {
    unithalf: 4
  },
  typography: {
    fontFamily: "Source Sans Pro, Helvetica Neue, Helvetica, sans-serif",
    fontSize: 16,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 700,
    body2: {
      fontSize: 14,
      fontWeight: 400,
      color: "#595959"
    },
    subheading: {
      fontSize: 14,
      fontWeight: 600,
      color: "#737373"
    }
  }
});
var _default = theme;
exports.default = _default;

/***/ }),

/***/ "./lib/tracking/dispatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatch;

var _analytics = _interopRequireDefault(__webpack_require__("../config/analytics/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dispatch tracking data to providers
 * @name dispatch
 * @param {Object} data Arguments supplied by tracking library
 * @returns {undefined} No Return
 */
function dispatch(data) {
  // Dispatch analytics events
  _analytics.default.forEach(function (provider) {
    provider.dispatch(data);
  });
}

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

/***/ "./lib/utils/cartItemsConnectionToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cartItemsConnectionToArray;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * @name cartItemsConnectionToArray
 * @summary Transform cart items relay style connection into a simple array of objects with some additional transformations
 * @param {Object} cartItemsConnection Cart items relay style connection
 * @param {Array.<Object>} items.edges An array of edges
 * @returns {Array.<Object>} Returns an array of cart item objects
 */
function cartItemsConnectionToArray(cartItemsConnection) {
  // Return a blank array if you don't have good data to begin with
  if (!cartItemsConnection || !cartItemsConnection.edges) {
    return [];
  } // Make a copy to be able to mutate array if items


  var cartItems = _toConsumableArray(cartItemsConnection.edges);

  return cartItems.map(function (_ref) {
    var node = _ref.node;

    // Make a copy to be able to mutate
    var item = _objectSpread({}, node);

    return item;
  });
}

/***/ }),

/***/ "./lib/utils/executionEnv.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionEnv = void 0;
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
/**
 * The ExecutionEnv object provides properties that should be used
 * to determine if the current execution environment is either client or server.
 * Further, other properties are available to determine if a browser
 * supports certain features.
 */

var ExecutionEnv = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== "undefined",
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen
};
exports.ExecutionEnv = ExecutionEnv;

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

/***/ "./lib/utils/withLocales.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withLocales;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _mobxReact = __webpack_require__("mobx-react");

var _jsxFileName = "/usr/local/src/reaction-app/src/lib/utils/withLocales.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @name withLocales
 * @summary Imports locales.json and provides it to components via props
 * @param {Object} ComponentWithLocales - The component you want to provide locales
 * @return {Class} - React component with locales on props
 */
function withLocales(ComponentWithLocales) {
  var _dec, _class, _class2, _temp;

  var WithLocales = (_dec = (0, _mobxReact.inject)("uiStore"), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithLocales, _Component);

    function WithLocales() {
      _classCallCheck(this, WithLocales);

      return _possibleConstructorReturn(this, (WithLocales.__proto__ || Object.getPrototypeOf(WithLocales)).apply(this, arguments));
    }

    _createClass(WithLocales, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var uiStore, currentLocales;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  uiStore = this.props.uiStore;
                  currentLocales = uiStore.locales;

                  if (!(Object.keys(currentLocales).length === 0)) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 5;
                  return this.loadLocales().then(function (locales) {
                    uiStore.setLocales(locales);
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        };
      }()
    }, {
      key: "loadLocales",
      value: function () {
        var _loadLocales = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var locales;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return  false ? new (require('next/dynamic').SameLoopPromise)(function (resolve, reject) {
                    eval('require.ensure = function (deps, callback) { callback(require) }');

                    require.ensure([], function (require) {
                      var m = require("./locales.json");

                      m.__webpackChunkName = 'src_lib_utils_locales_json_2fc2013d0e896a44beb67a5404bdbcaf.js';
                      resolve(m);
                    }, 'chunks/src_lib_utils_locales_json_2fc2013d0e896a44beb67a5404bdbcaf.js');
                  }) : new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
                    var weakId = /*require.resolve*/("./lib/utils/locales.json");

                    try {
                      var weakModule = __webpack_require__(weakId);

                      return resolve(weakModule);
                    } catch (err) {}

                    __webpack_require__.e/* require.ensure */(0).then((function (require) {
                      try {
                        var m = __webpack_require__("./lib/utils/locales.json");

                        m.__webpackChunkName = 'src_lib_utils_locales_json_2fc2013d0e896a44beb67a5404bdbcaf';
                        resolve(m);
                      } catch (error) {
                        reject(error);
                      }
                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                  });

                case 3:
                  locales = _context2.sent;
                  delete locales.__webpackChunkName;
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  // eslint-disable-next-line
                  console.error(_context2.t0);

                case 10:
                  return _context2.abrupt("return", locales);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 7]]);
        }));

        return function loadLocales() {
          return _loadLocales.apply(this, arguments);
        };
      }()
    }, {
      key: "render",
      value: function render() {
        var uiStore = this.props.uiStore;
        var locales = uiStore.locales;
        return _react.default.createElement(ComponentWithLocales, _extends({
          ref: this.props.forwardRef
        }, this.props, {
          locales: locales,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }));
      }
    }]);

    return WithLocales;
  }(_react.Component), _class2.propTypes = {
    forwardRef: _propTypes.default.func,
    locales: _propTypes.default.object,
    uiStore: _propTypes.default.object
  }, _class2.defaultProps = {
    locales: {}
  }, _temp)) || _class) || _class);
  return _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(WithLocales, _extends({}, props, {
      forwardRef: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }));
  });
}

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _app = _interopRequireWildcard(__webpack_require__("next/app"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _styledComponents = __webpack_require__("styled-components");

var _reactStripeElements = __webpack_require__("react-stripe-elements");

var _styles = __webpack_require__("@material-ui/core/styles");

var _CssBaseline = _interopRequireDefault(__webpack_require__("@material-ui/core/CssBaseline"));

var _JssProvider = _interopRequireDefault(__webpack_require__("react-jss/lib/JssProvider"));

var _componentsContext = __webpack_require__("@reactioncommerce/components-context");

var _config = _interopRequireDefault(__webpack_require__("next/config"));

var _track = _interopRequireDefault(__webpack_require__("./lib/tracking/track.js"));

var _dispatch = _interopRequireDefault(__webpack_require__("./lib/tracking/dispatch.js"));

var _withApolloClient = _interopRequireDefault(__webpack_require__("./lib/apollo/withApolloClient.js"));

var _withShop = _interopRequireDefault(__webpack_require__("./containers/shop/withShop.js"));

var _withViewer = _interopRequireDefault(__webpack_require__("./containers/account/withViewer.js"));

var _withTags = _interopRequireDefault(__webpack_require__("./containers/tags/withTags.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout/index.js"));

var _withMobX = _interopRequireDefault(__webpack_require__("./lib/stores/withMobX.js"));

var _stores = _interopRequireDefault(__webpack_require__("./lib/stores/index.js"));

var _components = _interopRequireDefault(__webpack_require__("./lib/theme/components.js"));

var _getPageContext = _interopRequireDefault(__webpack_require__("./lib/theme/getPageContext.js"));

var _componentTheme = _interopRequireDefault(__webpack_require__("./lib/theme/componentTheme.js"));

var _dec,
    _class,
    _jsxFileName = "/usr/local/src/reaction-app/src/pages/_app.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _getConfig = (0, _config.default)(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var App = (_dec = (0, _track.default)({}, {
  dispatch: _dispatch.default
}), (0, _withApolloClient.default)(_class = (0, _withMobX.default)(_class = (0, _withShop.default)(_class = (0, _withViewer.default)(_class = (0, _withTags.default)(_class = _dec(_class =
/*#__PURE__*/
function (_NextApp) {
  _inherits(App, _NextApp);

  _createClass(App, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.pageContext = null;
    _this.pageContext = (0, _getPageContext.default)();
    _this.state = {
      stripe: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Fetch and update auth token in auth store
      _stores.default.authStore.setTokenFromLocalStorage();

      _stores.default.cartStore.setAnonymousCartCredentialsFromLocalStorage();

      _stores.default.keycloakAuthStore.setTokenFromLocalStorage(); // Remove the server-side injected CSS.


      var jssStyles = document.querySelector("#jss-server-side");

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }

      var stripePublicApiKey = publicRuntimeConfig.stripePublicApiKey;

      if (stripePublicApiKey && window.Stripe) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          stripe: window.Stripe(stripePublicApiKey)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          shop = _props.shop,
          viewer = _props.viewer,
          rest = _objectWithoutProperties(_props, ["Component", "pageProps", "shop", "viewer"]);

      var route = this.props.router.route;
      var stripe = this.state.stripe;
      return _react.default.createElement(_app.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react.default.createElement(_componentsContext.ComponentsProvider, {
        value: _components.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react.default.createElement(_JssProvider.default, {
        registry: this.pageContext.sheetsRegistry,
        generateClassName: this.pageContext.generateClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: _componentTheme.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: this.pageContext.theme,
        sheetsManager: this.pageContext.sheetsManager,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react.default.createElement(_CssBaseline.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), route === "/checkout" || route === "/login" ? _react.default.createElement(_reactStripeElements.StripeProvider, {
        stripe: stripe,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement(Component, _extends({
        pageContext: this.pageContext,
        shop: shop
      }, rest, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))) : _react.default.createElement(_Layout.default, {
        shop: shop,
        viewer: viewer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement(Component, _extends({
        pageContext: this.pageContext,
        shop: shop
      }, rest, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))))))));
    }
  }]);

  return App;
}(_app.default)) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = App;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes")();

routes.add("home", "/", "productGrid").add("cart", "/cart", "cart").add("checkout", "/cart/checkout", "checkout").add("checkoutLogin", "/cart/login", "checkout").add("checkoutComplete", "/checkout/order/:orderId", "checkoutComplete").add("login", "/login", "login").add("shopProduct", "/shop/:shopSlug/product/:slugOrId", "product").add("product", "/product/:slugOrId/:variantId?", "product").add("shop", "/shop/:shopId/:tag", "productGrid").add("tag", "/tag/:slug", "tag");
module.exports = routes;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Collapse":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fade":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Popover":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Popper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@reactioncommerce/components-context":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components-context");

/***/ }),

/***/ "@reactioncommerce/components/AddressForm/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/AddressForm/v1");

/***/ }),

/***/ "@reactioncommerce/components/BadgeOverlay/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/BadgeOverlay/v1");

/***/ }),

/***/ "@reactioncommerce/components/Button/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Button/v1");

/***/ }),

/***/ "@reactioncommerce/components/CartEmptyMessage/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CartEmptyMessage/v1");

/***/ }),

/***/ "@reactioncommerce/components/CartItem/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CartItem/v1");

/***/ }),

/***/ "@reactioncommerce/components/CartItemDetail/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CartItemDetail/v1");

/***/ }),

/***/ "@reactioncommerce/components/CartItems/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CartItems/v1");

/***/ }),

/***/ "@reactioncommerce/components/CartSummary/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CartSummary/v1");

/***/ }),

/***/ "@reactioncommerce/components/CatalogGrid/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CatalogGrid/v1");

/***/ }),

/***/ "@reactioncommerce/components/CatalogGridItem/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CatalogGridItem/v1");

/***/ }),

/***/ "@reactioncommerce/components/Checkbox/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Checkbox/v1");

/***/ }),

/***/ "@reactioncommerce/components/CheckoutAction/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CheckoutAction/v1");

/***/ }),

/***/ "@reactioncommerce/components/CheckoutActionComplete/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CheckoutActionComplete/v1");

/***/ }),

/***/ "@reactioncommerce/components/CheckoutActionIncomplete/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/CheckoutActionIncomplete/v1");

/***/ }),

/***/ "@reactioncommerce/components/ErrorsBlock/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/ErrorsBlock/v1");

/***/ }),

/***/ "@reactioncommerce/components/Field/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Field/v1");

/***/ }),

/***/ "@reactioncommerce/components/MiniCart/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/MiniCart/v1");

/***/ }),

/***/ "@reactioncommerce/components/MiniCartSummary/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/MiniCartSummary/v1");

/***/ }),

/***/ "@reactioncommerce/components/PhoneNumberInput/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/PhoneNumberInput/v1");

/***/ }),

/***/ "@reactioncommerce/components/Price/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Price/v1");

/***/ }),

/***/ "@reactioncommerce/components/ProgressiveImage/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/ProgressiveImage/v1");

/***/ }),

/***/ "@reactioncommerce/components/QuantityInput/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/QuantityInput/v1");

/***/ }),

/***/ "@reactioncommerce/components/Select/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/Select/v1");

/***/ }),

/***/ "@reactioncommerce/components/SelectableItem/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/SelectableItem/v1");

/***/ }),

/***/ "@reactioncommerce/components/SelectableList/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/SelectableList/v1");

/***/ }),

/***/ "@reactioncommerce/components/ShopLogo/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/ShopLogo/v1");

/***/ }),

/***/ "@reactioncommerce/components/StockWarning/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/StockWarning/v1");

/***/ }),

/***/ "@reactioncommerce/components/StripeForm/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/StripeForm/v1");

/***/ }),

/***/ "@reactioncommerce/components/TextInput/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/TextInput/v1");

/***/ }),

/***/ "@reactioncommerce/components/ViewerInfo/v1":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/ViewerInfo/v1");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconAmericanExpress":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconAmericanExpress");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconClear":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconClear");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconDiscover":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconDiscover");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconError":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconError");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconMastercard":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconMastercard");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconValid":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconValid");

/***/ }),

/***/ "@reactioncommerce/components/svg/iconVisa":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/iconVisa");

/***/ }),

/***/ "@reactioncommerce/components/svg/spinner":
/***/ (function(module, exports) {

module.exports = require("@reactioncommerce/components/svg/spinner");

/***/ }),

/***/ "@segment/snippet":
/***/ (function(module, exports) {

module.exports = require("@segment/snippet");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-context":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-error":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "chalk":
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "hoist-non-react-statics":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "mdi-material-ui/Account":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Account");

/***/ }),

/***/ "mdi-material-ui/Cart":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Cart");

/***/ }),

/***/ "mdi-material-ui/ChevronDown":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronDown");

/***/ }),

/***/ "mdi-material-ui/ChevronRight":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronRight");

/***/ }),

/***/ "mdi-material-ui/ChevronUp":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/ChevronUp");

/***/ }),

/***/ "mdi-material-ui/Menu":
/***/ (function(module, exports) {

module.exports = require("mdi-material-ui/Menu");

/***/ }),

/***/ "mobx":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-stripe-elements":
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),

/***/ "react-tracking":
/***/ (function(module, exports) {

module.exports = require("react-tracking");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map