/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "" + ({"SignIn~feed~not-found":"SignIn~feed~not-found","SignIn":"SignIn","feed":"feed","not-found":"not-found"}[chunkId]||chunkId) + ".chunk.js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/error/ErrorPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "html {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/home/vikram/Desktop/new-assignment/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["html {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"homepage":"http://nethivikram.github.io/AssignmentCampk12","name":"web","version":"0.0.0","private":true,"engines":{"node":">=8.12.0","npm":">=3.10.10"},"browserslist":[">1%","last 4 versions","Firefox ESR","not ie < 9"],"dependencies":{"@babel/polyfill":"^7.2.5","bluebird":"^3.5.1","body-parser":"^1.18.2","classnames":"^2.2.5","compression":"^1.7.3","cookie-parser":"^1.4.3","core-js":"^2.5.3","express":"^4.16.3","express-device":"^0.4.2","gh-pages":"1.2.0","helmet":"^3.15.1","history":"^4.7.2","isomorphic-style-loader":"^4.0.0","jsonwebtoken":"^8.2.0","node-fetch":"^2.1.1","normalize.css":"^8.0.0","pretty-error":"^2.1.1","prop-types":"^15.6.1","query-string":"^6.0.0","react":"^16.8.6","react-dom":"^16.2.0","react-redux":"^5.0.6","redux":"^3.7.2","redux-devtools-extension":"^2.13.2","redux-logger":"^3.0.6","redux-thunk":"^2.2.0","sequelize":"^4.37.3","serialize-javascript":"^1.4.0","source-map-support":"^0.5.4","universal-router":"^6.0.0"},"devDependencies":{"@babel/core":"^7.3.3","@babel/node":"^7.2.2","@babel/plugin-proposal-decorators":"^7.3.0","@babel/plugin-transform-react-constant-elements":"^7.2.0","@babel/plugin-transform-react-inline-elements":"^7.2.0","@babel/preset-env":"^7.3.1","@babel/preset-flow":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/preset-stage-2":"^7.0.0-beta.42","autoprefixer":"^8.1.0","babel-core":"^7.0.0-0","babel-eslint":"^8.2.2","babel-jest":"^22.4.3","babel-loader":"^8.0.5","babel-plugin-transform-react-remove-prop-types":"^0.4.13","babel-plugin-transform-remove-console":"^6.9.4","browser-sync":"^2.23.6","chokidar":"^2.0.2","css-loader":"^0.28.11","enzyme":"^3.3.0","eslint":"^4.19.0","eslint-config-airbnb":"^16.1.0","eslint-config-prettier":"^2.9.0","eslint-import-resolver-node":"^0.3.2","eslint-loader":"^2.0.0","eslint-plugin-css-modules":"^2.7.5","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-prettier":"^2.6.0","eslint-plugin-react":"^7.7.0","file-loader":"^1.1.11","flow-bin":"^0.68.0","front-matter":"^2.3.0","glob":"^7.1.2","husky":"^0.14.3","identity-obj-proxy":"^3.0.0","jest":"^22.4.3","lint-staged":"^7.0.0","markdown-it":"^8.4.1","mkdirp":"^0.5.1","node-sass":"^4.11.0","null-loader":"^0.1.1","opn-cli":"^3.1.0","pixrem":"^4.0.1","pleeease-filters":"^4.0.0","postcss":"^6.0.20","postcss-calc":"^6.0.1","postcss-color-function":"^4.0.1","postcss-custom-media":"^6.0.0","postcss-custom-properties":"^7.0.0","postcss-custom-selectors":"^4.0.1","postcss-flexbugs-fixes":"^3.3.0","postcss-import":"^11.1.0","postcss-loader":"^2.1.3","postcss-media-minmax":"^3.0.0","postcss-nested":"^3.0.0","postcss-nesting":"^4.2.1","postcss-pseudoelements":"^5.0.0","postcss-selector-matches":"^3.0.1","postcss-selector-not":"^3.0.1","prettier":"^1.11.1","raw-loader":"^0.5.1","react-deep-force-update":"^2.1.1","react-dev-utils":"^5.0.0","react-error-overlay":"^4.0.0","react-test-renderer":"^16.2.0","redux-mock-store":"^1.4.0","rimraf":"^2.6.2","sass-loader":"^7.1.0","stylelint":"^9.1.3","stylelint-config-standard":"^18.2.0","stylelint-order":"^0.8.1","svg-url-loader":"^2.3.2","url-loader":"^1.0.1","webpack":"^4.2.0","webpack-assets-manifest":"^2.0.0","webpack-bundle-analyzer":"^2.11.1","webpack-dev-middleware":"^3.0.1","webpack-hot-middleware":"^2.21.2","webpack-node-externals":"^1.6.0"},"lint-staged":{"*.{js,jsx}":["eslint --no-ignore --fix","git add --force"],"*.{json,md,graphql}":["prettier --write","git add --force"],"*.{css,less,styl,scss,sass,sss}":["stylelint --fix","git add --force"]},"scripts":{"precommit":"lint-staged","lint-js":"eslint --ignore-path .gitignore --ignore-pattern \"!**/.*\" .","lint-css":"stylelint \"src/**/*.{css,less,styl,scss,sass,sss}\"","lint":"yarn run lint-js && yarn run lint-css","fix-js":"yarn run lint-js --fix","fix-css":"yarn run lint-css --fix","fix":"yarn run fix-js && yarn run fix-css","flow":"flow","flow:check":"flow check","test":"jest","test-watch":"yarn run test --watch --notify","test-cover":"yarn run test --coverage","coverage":"yarn run test-cover && opn coverage/lcov-report/index.html","clean":"babel-node tools/run clean","copy":"babel-node tools/run copy","bundle":"babel-node tools/run bundle","build":"babel-node tools/run build","build-stats":"yarn run build --release --analyse","deploy":"gh-pages -d build","render":"babel-node tools/run render","serve":"babel-node tools/run runServer","start":"babel-node tools/run start","predeploy":"npm run build"}};

/***/ }),

/***/ "./src/DOMUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTag", function() { return updateTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMeta", function() { return updateMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCustomMeta", function() { return updateCustomMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLink", function() { return updateLink; });
function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector("".concat(tagName, "[").concat(keyName, "=\"").concat(keyValue, "\"]"));
  if (node && node.getAttribute(attrName) === attrValue) return; // Remove and create a new tag in order to make it work with bookmarks in Safari

  if (node) {
    node.parentNode.removeChild(node);
  }

  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}
function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}
function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}
function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ "./src/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_deep_force_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-deep-force-update/lib/index.js");
/* harmony import */ var react_deep_force_update__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_deep_force_update__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/history/PathUtils.js");
/* harmony import */ var history_PathUtils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_PathUtils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/store/configureStore.js");
/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/App.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/history.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/DOMUtils.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/router.js");
var _jsxFileName = "/home/vikram/Desktop/new-assignment/src/client.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










 // Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html

var context = {
  // Enables critical path CSS rendering
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: Object(store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"])(window.App.state, {
    history: _history__WEBPACK_IMPORTED_MODULE_7__["default"]
  }),
  storeSubscription: null,
  history: _history__WEBPACK_IMPORTED_MODULE_7__["default"]
};
var container = document.getElementById('app');
var currentLocation = _history__WEBPACK_IMPORTED_MODULE_7__["default"].location;
var appInstance;
var scrollPositionsHistory = {}; // Re-render the app when window.location changes

function onLocationChange(_x, _x2) {
  return _onLocationChange.apply(this, arguments);
} // Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _onLocationChange() {
  _onLocationChange = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(location, action) {
    var isInitialRender, route, renderReactApp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            }; // Delete stored scroll position for next page if any

            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }

            currentLocation = location;
            isInitialRender = !action;
            _context.prev = 4;
            context.pathname = location.pathname;
            context.query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search); // Traverses the list of routes in the order they are defined until
            // it finds the first route that matches provided URL path string
            // and whose action method returns anything other than `undefined`.

            _context.next = 9;
            return _router__WEBPACK_IMPORTED_MODULE_9__["default"].resolve(context);

          case 9:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return");

          case 12:
            if (!route.redirect) {
              _context.next = 15;
              break;
            }

            _history__WEBPACK_IMPORTED_MODULE_7__["default"].replace(route.redirect);
            return _context.abrupt("return");

          case 15:
            renderReactApp = isInitialRender ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;
            appInstance = renderReactApp(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
              context: context,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }, route.component), container, function () {
              if (isInitialRender) {
                // Switch off the native scroll restoration behavior and handle it manually
                // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
                if (window.history && 'scrollRestoration' in window.history) {
                  window.history.scrollRestoration = 'manual';
                }

                var elem = document.getElementById('css');
                if (elem) elem.parentNode.removeChild(elem);
                return;
              }

              document.title = route.title;
              Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_8__["updateMeta"])('description', route.description); // Update necessary tags in <head> at runtime here, ie:
              // updateMeta('keywords', route.keywords);
              // updateCustomMeta('og:url', route.canonicalUrl);
              // updateCustomMeta('og:image', route.imageUrl);
              // updateLink('canonical', route.canonicalUrl);
              // etc.

              var scrollX = 0;
              var scrollY = 0;
              var pos = scrollPositionsHistory[location.key];

              if (pos) {
                scrollX = pos.scrollX;
                scrollY = pos.scrollY;
              } else {
                var targetHash = location.hash.substr(1);

                if (targetHash) {
                  var target = document.getElementById(targetHash);

                  if (target) {
                    scrollY = window.pageYOffset + target.getBoundingClientRect().top;
                  }
                }
              } // Restore the scroll position if it was saved into the state
              // or scroll to the given #hash anchor
              // or scroll to top of the page


              window.scrollTo(scrollX, scrollY); // Google Analytics tracking. Don't send 'pageview' event after
              // the initial rendering, as it was already sent

              if (window.ga) {
                window.ga('send', 'pageview', Object(history_PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"])(location));
              }
            });
            _context.next = 25;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);

            if (false) {}

            throw _context.t0;

          case 23:
            console.error(_context.t0); // Do a full page reload if error occurs during client-side navigation

            if (!isInitialRender && currentLocation.key === location.key) {
              console.error('RSK will reload your page after error');
              window.location.reload();
            }

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 19]]);
  }));
  return _onLocationChange.apply(this, arguments);
}

_history__WEBPACK_IMPORTED_MODULE_7__["default"].listen(onLocationChange);
onLocationChange(currentLocation); // Enable Hot Module Replacement (HMR)

if (false) {}

/***/ }),

/***/ "./src/components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ContextType = _objectSpread({
  // Enables critical path CSS rendering
  insertCss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // Universal HTTP client
  pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
}, react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"].childContextTypes);
/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */


var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Object.defineProperty(App, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(ContextType).isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
  }
});
Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ContextType
});
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__);
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["default"] = (true && history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default()());

/***/ }),

/***/ "./src/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/reducers/runtime.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  runtime: _runtime__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/runtime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return runtime; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACTION_TYPES = {
  setUserDetails: 'setUserDetails',
  setCurrentUser: 'setCurrentUser'
};
var DEFAULT_STATE = {
  registeredUsers: {},
  currentUser: null
};
function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACTION_TYPES.setUserDetails:
      {
        var users = state.registeredUsers;
        users[action.payload.value.email] = action.payload.value;
        return _objectSpread({}, state, _defineProperty({}, action.payload.name, users));
      }

    case ACTION_TYPES.setCurrentUser:
      return _objectSpread({}, state, _defineProperty({}, action.payload.name, action.payload.value));

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/universal-router/module.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/index.js");


/* harmony default export */ __webpack_exports__["default"] = (new universal_router__WEBPACK_IMPORTED_MODULE_0__["default"](_routes__WEBPACK_IMPORTED_MODULE_1__["default"], {
  resolveRoute: function resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(function (action) {
        return action.default(context, params);
      });
    }

    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }

    return undefined;
  }
}));

/***/ }),

/***/ "./src/routes/error/ErrorPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/error/ErrorPage.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/routes/error/ErrorPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageWithoutStyle", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/isomorphic-style-loader/lib/withStyles.js");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/error/ErrorPage.css");
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/vikram/Desktop/new-assignment/src/routes/error/ErrorPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      if (true && this.props.error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.error.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, this.props.error.stack));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Error"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Sorry, a critical error occurred on this page."));
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object.defineProperty(ErrorPage, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      stack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    })
  }
});
Object.defineProperty(ErrorPage, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: null
  }
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_ErrorPage_css__WEBPACK_IMPORTED_MODULE_3___default.a)(ErrorPage));

/***/ }),

/***/ "./src/routes/error/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/error/ErrorPage.js");
var _jsxFileName = "/home/vikram/Desktop/new-assignment/src/routes/error/index.js";



function action() {
  return {
    title: 'Demo Error',
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable global-require */
// The top-level (parent) route
var routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [{
    path: '',
    load: function load() {
      return Promise.all(/* import() | SignIn */[__webpack_require__.e("SignIn~feed~not-found"), __webpack_require__.e("SignIn")]).then(__webpack_require__.bind(null, "./src/routes/sign-in/index.js"));
    }
  }, {
    path: '/signin',
    load: function load() {
      return Promise.all(/* import() | SignIn */[__webpack_require__.e("SignIn~feed~not-found"), __webpack_require__.e("SignIn")]).then(__webpack_require__.bind(null, "./src/routes/sign-in/index.js"));
    }
  }, {
    path: '/feed',
    load: function load() {
      return Promise.all(/* import() | feed */[__webpack_require__.e("SignIn~feed~not-found"), __webpack_require__.e("feed")]).then(__webpack_require__.bind(null, "./src/routes/feed/index.js"));
    }
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return Promise.all(/* import() | not-found */[__webpack_require__.e("SignIn~feed~not-found"), __webpack_require__.e("not-found")]).then(__webpack_require__.bind(null, "./src/routes/not-found/index.js"));
    }
  }],
  action: function () {
    var _action = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var next, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next = _ref.next;
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;
              // Provide default values for title, description etc.
              route.title = "".concat(route.title || 'vikram');
              route.description = route.description || '';
              return _context.abrupt("return", route);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function action(_x) {
      return _action.apply(this, arguments);
    }

    return action;
  }()
}; // The error page is available by permanent url for development mode

if (true) {
  routes.children.unshift({
    path: '/error',
    action: __webpack_require__("./src/routes/error/index.js").default
  });
}

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/store/configureStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/redux-devtools-extension/developmentOnly.js");
/* harmony import */ var redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/reducers/index.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _package_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _package_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _createHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/store/createHelpers.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/store/logger/logger.client.js");







function configureStore(initialState, helpersConfig) {
  var helpers = Object(_createHelpers__WEBPACK_IMPORTED_MODULE_5__["default"])(helpersConfig);
  var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(helpers)];
  var enhancer;

  if (true) {
    middleware.push(Object(_logger__WEBPACK_IMPORTED_MODULE_6__["default"])()); // https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production

    var composeEnhancers = Object(redux_devtools_extension_developmentOnly__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])({
      // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
      name: "".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__["name"], "@").concat(_package_json__WEBPACK_IMPORTED_MODULE_4__["version"])
    }); // https://redux.js.org/docs/api/applyMiddleware.html

    enhancer = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware));
  } else {} // https://redux.js.org/docs/api/createStore.html


  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, enhancer); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (false) {}

  return store;
}

/***/ }),

/***/ "./src/store/createHelpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHelpers; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createGraphqlRequest(fetch) {
  return (
    /*#__PURE__*/
    function () {
      var _graphqlRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: variables
                  }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetch('/graphql', fetchConfig);

              case 3:
                resp = _context.sent;

                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                throw new Error(resp.statusText);

              case 6:
                return _context.abrupt("return", resp.json());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function graphqlRequest(_x, _x2) {
        return _graphqlRequest.apply(this, arguments);
      }

      return graphqlRequest;
    }()
  );
}

function createHelpers(_ref) {
  var fetch = _ref.fetch,
      history = _ref.history;
  return {
    fetch: fetch,
    history: history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),

/***/ "./src/store/logger/logger.client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createLogger; });
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);

function createLogger() {
  // https://github.com/evgenyrodionov/redux-logger#options
  return Object(redux_logger__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__("./src/client.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlcyI6WyIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9ET01VdGlscy5qcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9jbGllbnQuanMiLCIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC9zcmMvaGlzdG9yeS5qcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yZWR1Y2Vycy9ydW50aW1lLmpzIiwiL2hvbWUvdmlrcmFtL0Rlc2t0b3AvbmV3LWFzc2lnbm1lbnQvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3M/Yjg3NCIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmpzIiwiL2hvbWUvdmlrcmFtL0Rlc2t0b3AvbmV3LWFzc2lnbm1lbnQvc3JjL3JvdXRlcy9lcnJvci9pbmRleC5qcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yb3V0ZXMvaW5kZXguanMiLCIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC9zcmMvc3RvcmUvY3JlYXRlSGVscGVycy5qcyIsIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9zdG9yZS9sb2dnZXIvbG9nZ2VyLmNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY2xpZW50XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblxuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiU2lnbklufmZlZWR+bm90LWZvdW5kXCI6XCJTaWduSW5+ZmVlZH5ub3QtZm91bmRcIixcIlNpZ25JblwiOlwiU2lnbkluXCIsXCJmZWVkXCI6XCJmZWVkXCIsXCJub3QtZm91bmRcIjpcIm5vdC1mb3VuZFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jaHVuay5qc1wiO1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbnByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdmlrcmFtL0Rlc2t0b3AvbmV3LWFzc2lnbm1lbnQvc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx1QkFBdUI7TUFDbkIsb0JBQW9CO0VBQ3hCLHNCQUFzQjtNQUNsQix3QkFBd0I7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQlwiLFwiZmlsZVwiOlwiRXJyb3JQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcblxcbnByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhZyh0YWdOYW1lLCBrZXlOYW1lLCBrZXlWYWx1ZSwgYXR0ck5hbWUsIGF0dHJWYWx1ZSkge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFxuICAgIGAke3RhZ05hbWV9WyR7a2V5TmFtZX09XCIke2tleVZhbHVlfVwiXWAsXG4gICk7XG4gIGlmIChub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSA9PT0gYXR0clZhbHVlKSByZXR1cm47XG5cbiAgLy8gUmVtb3ZlIGFuZCBjcmVhdGUgYSBuZXcgdGFnIGluIG9yZGVyIHRvIG1ha2UgaXQgd29yayB3aXRoIGJvb2ttYXJrcyBpbiBTYWZhcmlcbiAgaWYgKG5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBhdHRyVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIG5leHROb2RlLnNldEF0dHJpYnV0ZShrZXlOYW1lLCBrZXlWYWx1ZSk7XG4gICAgbmV4dE5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobmV4dE5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNZXRhKG5hbWUsIGNvbnRlbnQpIHtcbiAgdXBkYXRlVGFnKCdtZXRhJywgJ25hbWUnLCBuYW1lLCAnY29udGVudCcsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tTWV0YShwcm9wZXJ0eSwgY29udGVudCkge1xuICB1cGRhdGVUYWcoJ21ldGEnLCAncHJvcGVydHknLCBwcm9wZXJ0eSwgJ2NvbnRlbnQnLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpbmsocmVsLCBocmVmKSB7XG4gIHVwZGF0ZVRhZygnbGluaycsICdyZWwnLCByZWwsICdocmVmJywgaHJlZik7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgZGVlcEZvcmNlVXBkYXRlIGZyb20gJ3JlYWN0LWRlZXAtZm9yY2UtdXBkYXRlJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHsgY3JlYXRlUGF0aCB9IGZyb20gJ2hpc3RvcnkvUGF0aFV0aWxzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdzdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJ2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vaGlzdG9yeSc7XG5pbXBvcnQgeyB1cGRhdGVNZXRhIH0gZnJvbSAnLi9ET01VdGlscyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcblxuLy8gR2xvYmFsIChjb250ZXh0KSB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgZWFzaWx5IGFjY2Vzc2VkIGZyb20gYW55IFJlYWN0IGNvbXBvbmVudFxuLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9jb250ZXh0Lmh0bWxcbmNvbnN0IGNvbnRleHQgPSB7XG4gIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gIGluc2VydENzczogKC4uLnN0eWxlcykgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGNvbnN0IHJlbW92ZUNzcyA9IHN0eWxlcy5tYXAoeCA9PiB4Ll9pbnNlcnRDc3MoKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZUNzcy5mb3JFYWNoKGYgPT4gZigpKTtcbiAgICB9O1xuICB9LFxuICAvLyBJbml0aWFsaXplIGEgbmV3IFJlZHV4IHN0b3JlXG4gIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9iYXNpY3MvVXNhZ2VXaXRoUmVhY3QuaHRtbFxuICBzdG9yZTogY29uZmlndXJlU3RvcmUod2luZG93LkFwcC5zdGF0ZSwgeyBoaXN0b3J5IH0pLFxuICBzdG9yZVN1YnNjcmlwdGlvbjogbnVsbCxcbiAgaGlzdG9yeSxcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmxldCBjdXJyZW50TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xubGV0IGFwcEluc3RhbmNlO1xuXG5jb25zdCBzY3JvbGxQb3NpdGlvbnNIaXN0b3J5ID0ge307XG5cbi8vIFJlLXJlbmRlciB0aGUgYXBwIHdoZW4gd2luZG93LmxvY2F0aW9uIGNoYW5nZXNcbmFzeW5jIGZ1bmN0aW9uIG9uTG9jYXRpb25DaGFuZ2UobG9jYXRpb24sIGFjdGlvbikge1xuICAvLyBSZW1lbWJlciB0aGUgbGF0ZXN0IHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIHByZXZpb3VzIGxvY2F0aW9uXG4gIHNjcm9sbFBvc2l0aW9uc0hpc3RvcnlbY3VycmVudExvY2F0aW9uLmtleV0gPSB7XG4gICAgc2Nyb2xsWDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHNjcm9sbFk6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgfTtcbiAgLy8gRGVsZXRlIHN0b3JlZCBzY3JvbGwgcG9zaXRpb24gZm9yIG5leHQgcGFnZSBpZiBhbnlcbiAgaWYgKGFjdGlvbiA9PT0gJ1BVU0gnKSB7XG4gICAgZGVsZXRlIHNjcm9sbFBvc2l0aW9uc0hpc3RvcnlbbG9jYXRpb24ua2V5XTtcbiAgfVxuICBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICBjb25zdCBpc0luaXRpYWxSZW5kZXIgPSAhYWN0aW9uO1xuICB0cnkge1xuICAgIGNvbnRleHQucGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb250ZXh0LnF1ZXJ5ID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKTtcblxuICAgIC8vIFRyYXZlcnNlcyB0aGUgbGlzdCBvZiByb3V0ZXMgaW4gdGhlIG9yZGVyIHRoZXkgYXJlIGRlZmluZWQgdW50aWxcbiAgICAvLyBpdCBmaW5kcyB0aGUgZmlyc3Qgcm91dGUgdGhhdCBtYXRjaGVzIHByb3ZpZGVkIFVSTCBwYXRoIHN0cmluZ1xuICAgIC8vIGFuZCB3aG9zZSBhY3Rpb24gbWV0aG9kIHJldHVybnMgYW55dGhpbmcgb3RoZXIgdGhhbiBgdW5kZWZpbmVkYC5cbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IHJvdXRlci5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgLy8gUHJldmVudCBtdWx0aXBsZSBwYWdlIHJlbmRlcnMgZHVyaW5nIHRoZSByb3V0aW5nIHByb2Nlc3NcbiAgICBpZiAoY3VycmVudExvY2F0aW9uLmtleSAhPT0gbG9jYXRpb24ua2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2Uocm91dGUucmVkaXJlY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclJlYWN0QXBwID0gaXNJbml0aWFsUmVuZGVyID8gUmVhY3RET00uaHlkcmF0ZSA6IFJlYWN0RE9NLnJlbmRlcjtcbiAgICBhcHBJbnN0YW5jZSA9IHJlbmRlclJlYWN0QXBwKFxuICAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fT57cm91dGUuY29tcG9uZW50fTwvQXBwPixcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbFJlbmRlcikge1xuICAgICAgICAgIC8vIFN3aXRjaCBvZmYgdGhlIG5hdGl2ZSBzY3JvbGwgcmVzdG9yYXRpb24gYmVoYXZpb3IgYW5kIGhhbmRsZSBpdCBtYW51YWxseVxuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDkvaGlzdG9yeS1hcGktc2Nyb2xsLXJlc3RvcmF0aW9uXG4gICAgICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5ICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjc3MnKTtcbiAgICAgICAgICBpZiAoZWxlbSkgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcm91dGUudGl0bGU7XG5cbiAgICAgICAgdXBkYXRlTWV0YSgnZGVzY3JpcHRpb24nLCByb3V0ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIFVwZGF0ZSBuZWNlc3NhcnkgdGFncyBpbiA8aGVhZD4gYXQgcnVudGltZSBoZXJlLCBpZTpcbiAgICAgICAgLy8gdXBkYXRlTWV0YSgna2V5d29yZHMnLCByb3V0ZS5rZXl3b3Jkcyk7XG4gICAgICAgIC8vIHVwZGF0ZUN1c3RvbU1ldGEoJ29nOnVybCcsIHJvdXRlLmNhbm9uaWNhbFVybCk7XG4gICAgICAgIC8vIHVwZGF0ZUN1c3RvbU1ldGEoJ29nOmltYWdlJywgcm91dGUuaW1hZ2VVcmwpO1xuICAgICAgICAvLyB1cGRhdGVMaW5rKCdjYW5vbmljYWwnLCByb3V0ZS5jYW5vbmljYWxVcmwpO1xuICAgICAgICAvLyBldGMuXG5cbiAgICAgICAgbGV0IHNjcm9sbFggPSAwO1xuICAgICAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgICAgIGNvbnN0IHBvcyA9IHNjcm9sbFBvc2l0aW9uc0hpc3RvcnlbbG9jYXRpb24ua2V5XTtcbiAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgIHNjcm9sbFggPSBwb3Muc2Nyb2xsWDtcbiAgICAgICAgICBzY3JvbGxZID0gcG9zLnNjcm9sbFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SGFzaCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICAgICAgICAgIGlmICh0YXJnZXRIYXNoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRIYXNoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlmIGl0IHdhcyBzYXZlZCBpbnRvIHRoZSBzdGF0ZVxuICAgICAgICAvLyBvciBzY3JvbGwgdG8gdGhlIGdpdmVuICNoYXNoIGFuY2hvclxuICAgICAgICAvLyBvciBzY3JvbGwgdG8gdG9wIG9mIHRoZSBwYWdlXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcblxuICAgICAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHRyYWNraW5nLiBEb24ndCBzZW5kICdwYWdldmlldycgZXZlbnQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGluaXRpYWwgcmVuZGVyaW5nLCBhcyBpdCB3YXMgYWxyZWFkeSBzZW50XG4gICAgICAgIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICB3aW5kb3cuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBjcmVhdGVQYXRoKGxvY2F0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICAvLyBEbyBhIGZ1bGwgcGFnZSByZWxvYWQgaWYgZXJyb3Igb2NjdXJzIGR1cmluZyBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXG4gICAgaWYgKCFpc0luaXRpYWxSZW5kZXIgJiYgY3VycmVudExvY2F0aW9uLmtleSA9PT0gbG9jYXRpb24ua2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdSU0sgd2lsbCByZWxvYWQgeW91ciBwYWdlIGFmdGVyIGVycm9yJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEhhbmRsZSBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uIGJ5IHVzaW5nIEhUTUw1IEhpc3RvcnkgQVBJXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeSNyZWFkbWVcbmhpc3RvcnkubGlzdGVuKG9uTG9jYXRpb25DaGFuZ2UpO1xub25Mb2NhdGlvbkNoYW5nZShjdXJyZW50TG9jYXRpb24pO1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcm91dGVyJywgKCkgPT4ge1xuICAgIGlmIChhcHBJbnN0YW5jZSAmJiBhcHBJbnN0YW5jZS51cGRhdGVyLmlzTW91bnRlZChhcHBJbnN0YW5jZSkpIHtcbiAgICAgIC8vIEZvcmNlLXVwZGF0ZSB0aGUgd2hvbGUgdHJlZSwgaW5jbHVkaW5nIGNvbXBvbmVudHMgdGhhdCByZWZ1c2UgdG8gdXBkYXRlXG4gICAgICBkZWVwRm9yY2VVcGRhdGUoYXBwSW5zdGFuY2UpO1xuICAgIH1cblxuICAgIG9uTG9jYXRpb25DaGFuZ2UoY3VycmVudExvY2F0aW9uKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFJlZHV4UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IENvbnRleHRUeXBlID0ge1xuICAvLyBFbmFibGVzIGNyaXRpY2FsIHBhdGggQ1NTIHJlbmRlcmluZ1xuICBpbnNlcnRDc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIFVuaXZlcnNhbCBIVFRQIGNsaWVudFxuICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBxdWVyeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLy8gSW50ZWdyYXRlIFJlZHV4XG4gIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9iYXNpY3MvVXNhZ2VXaXRoUmVhY3QuaHRtbFxuICAuLi5SZWR1eFByb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzLFxufTtcblxuLyoqXG4gKiBUaGUgdG9wLWxldmVsIFJlYWN0IGNvbXBvbmVudCBzZXR0aW5nIGNvbnRleHQgKGdsb2JhbCkgdmFyaWFibGVzXG4gKiB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuICpcbiAqIFVzYWdlIGV4YW1wbGU6XG4gKlxuICogICBjb25zdCBjb250ZXh0ID0ge1xuICogICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksXG4gKiAgICAgc3RvcmU6IGNyZWF0ZVN0b3JlKCksXG4gKiAgIH07XG4gKlxuICogICBSZWFjdERPTS5yZW5kZXIoXG4gKiAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fT5cbiAqICAgICAgIDxMYXlvdXQ+XG4gKiAgICAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICogICAgICAgPC9MYXlvdXQ+XG4gKiAgICAgPC9BcHA+LFxuICogICAgIGNvbnRhaW5lcixcbiAqICAgKTtcbiAqL1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29udGV4dDogUHJvcFR5cGVzLnNoYXBlKENvbnRleHRUeXBlKS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IENvbnRleHRUeXBlO1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIE5PVEU6IElmIHlvdSBuZWVkIHRvIGFkZCBvciBtb2RpZnkgaGVhZGVyLCBmb290ZXIgZXRjLiBvZiB0aGUgYXBwLFxuICAgIC8vIHBsZWFzZSBkbyB0aGF0IGluc2lkZSB0aGUgTGF5b3V0IGNvbXBvbmVudC5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5cbi8vIE5hdmlnYXRpb24gbWFuYWdlciwgZS5nLiBoaXN0b3J5LnB1c2goJy9ob21lJylcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tamFja3Nvbi9oaXN0b3J5XG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLmVudi5CUk9XU0VSICYmIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcnVudGltZSBmcm9tICcuL3J1bnRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBydW50aW1lLFxufSk7XG4iLCJleHBvcnQgY29uc3QgQUNUSU9OX1RZUEVTID0ge1xuICBzZXRVc2VyRGV0YWlsczogJ3NldFVzZXJEZXRhaWxzJyxcbiAgc2V0Q3VycmVudFVzZXI6ICdzZXRDdXJyZW50VXNlcicsXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVEFURSA9IHtcbiAgcmVnaXN0ZXJlZFVzZXJzOiB7fSxcbiAgY3VycmVudFVzZXI6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW50aW1lKHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTl9UWVBFUy5zZXRVc2VyRGV0YWlsczoge1xuICAgICAgY29uc3QgdXNlcnMgPSBzdGF0ZS5yZWdpc3RlcmVkVXNlcnM7XG4gICAgICB1c2Vyc1thY3Rpb24ucGF5bG9hZC52YWx1ZS5lbWFpbF0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQubmFtZV06IHVzZXJzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBQ1RJT05fVFlQRVMuc2V0Q3VycmVudFVzZXI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2FjdGlvbi5wYXlsb2FkLm5hbWVdOiBhY3Rpb24ucGF5bG9hZC52YWx1ZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXZlcnNhbFJvdXRlciBmcm9tICd1bml2ZXJzYWwtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2FsUm91dGVyKHJvdXRlcywge1xuICByZXNvbHZlUm91dGUoY29udGV4dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlXG4gICAgICAgIC5sb2FkKClcbiAgICAgICAgLnRoZW4oYWN0aW9uID0+IGFjdGlvbi5kZWZhdWx0KGNvbnRleHQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5hY3Rpb24oY29udGV4dCwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbn0pO1xuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0Vycm9yUGFnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9FcnJvclBhZ2UuY3NzJztcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHN0YWNrOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlcnJvcjogbnVsbCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKF9fREVWX18gJiYgdGhpcy5wcm9wcy5lcnJvcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuZXJyb3IubmFtZX08L2gxPlxuICAgICAgICAgIDxwcmU+e3RoaXMucHJvcHMuZXJyb3Iuc3RhY2t9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVycm9yPC9oMT5cbiAgICAgICAgPHA+U29ycnksIGEgY3JpdGljYWwgZXJyb3Igb2NjdXJyZWQgb24gdGhpcyBwYWdlLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRXJyb3JQYWdlIGFzIEVycm9yUGFnZVdpdGhvdXRTdHlsZSB9O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShFcnJvclBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9FcnJvclBhZ2UnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdEZW1vIEVycm9yJyxcbiAgICBjb21wb25lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIFRoZSB0b3AtbGV2ZWwgKHBhcmVudCkgcm91dGVcbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJycsXG5cbiAgLy8gS2VlcCBpbiBtaW5kLCByb3V0ZXMgYXJlIGV2YWx1YXRlZCBpbiBvcmRlclxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdTaWduSW4nICovICcuL3NpZ24taW4nKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvc2lnbmluJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnU2lnbkluJyAqLyAnLi9zaWduLWluJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2ZlZWQnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdmZWVkJyAqLyAnLi9mZWVkJyksXG4gICAgfSxcbiAgICAvLyBXaWxkY2FyZCByb3V0ZXMsIGUuZy4geyBwYXRoOiAnKC4qKScsIC4uLiB9IChtdXN0IGdvIGxhc3QpXG4gICAge1xuICAgICAgcGF0aDogJyguKiknLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdub3QtZm91bmQnICovICcuL25vdC1mb3VuZCcpLFxuICAgIH0sXG4gIF0sXG5cbiAgYXN5bmMgYWN0aW9uKHsgbmV4dCB9KSB7XG4gICAgLy8gRXhlY3V0ZSBlYWNoIGNoaWxkIHJvdXRlIHVudGlsIG9uZSBvZiB0aGVtIHJldHVybiB0aGUgcmVzdWx0XG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBuZXh0KCk7XG5cbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciB0aXRsZSwgZGVzY3JpcHRpb24gZXRjLlxuICAgIHJvdXRlLnRpdGxlID0gYCR7cm91dGUudGl0bGUgfHwgJ3Zpa3JhbSd9YDtcbiAgICByb3V0ZS5kZXNjcmlwdGlvbiA9IHJvdXRlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgcmV0dXJuIHJvdXRlO1xuICB9LFxufTtcblxuLy8gVGhlIGVycm9yIHBhZ2UgaXMgYXZhaWxhYmxlIGJ5IHBlcm1hbmVudCB1cmwgZm9yIGRldmVsb3BtZW50IG1vZGVcbmlmIChfX0RFVl9fKSB7XG4gIHJvdXRlcy5jaGlsZHJlbi51bnNoaWZ0KHtcbiAgICBwYXRoOiAnL2Vycm9yJyxcbiAgICBhY3Rpb246IHJlcXVpcmUoJy4vZXJyb3InKS5kZWZhdWx0LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2RldmVsb3BtZW50T25seSc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAncmVkdWNlcnMnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgY3JlYXRlSGVscGVycyBmcm9tICcuL2NyZWF0ZUhlbHBlcnMnO1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwgaGVscGVyc0NvbmZpZykge1xuICBjb25zdCBoZWxwZXJzID0gY3JlYXRlSGVscGVycyhoZWxwZXJzQ29uZmlnKTtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuay53aXRoRXh0cmFBcmd1bWVudChoZWxwZXJzKV07XG5cbiAgbGV0IGVuaGFuY2VyO1xuXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGNyZWF0ZUxvZ2dlcigpKTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96YWxtb3hpc3VzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbiMxNC11c2luZy1pbi1wcm9kdWN0aW9uXG4gICAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoe1xuICAgICAgLy8gT3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL3phbG1veGlzdXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2Jsb2IvbWFzdGVyL2RvY3MvQVBJL0FyZ3VtZW50cy5tZCNvcHRpb25zXG4gICAgICBuYW1lOiBgJHtuYW1lfUAke3ZlcnNpb259YCxcbiAgICB9KTtcblxuICAgIC8vIGh0dHBzOi8vcmVkdXguanMub3JnL2RvY3MvYXBpL2FwcGx5TWlkZGxld2FyZS5odG1sXG4gICAgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XG4gIH0gZWxzZSB7XG4gICAgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XG4gIH1cblxuICAvLyBodHRwczovL3JlZHV4LmpzLm9yZy9kb2NzL2FwaS9jcmVhdGVTdG9yZS5odG1sXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG4gIC8vIEhvdCByZWxvYWQgcmVkdWNlcnMgKHJlcXVpcmVzIFdlYnBhY2sgb3IgQnJvd3NlcmlmeSBITVIgdG8gYmUgZW5hYmxlZClcbiAgaWYgKF9fREVWX18gJiYgbW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9yZWR1Y2VycycsICgpID0+XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ2xvYmFsLXJlcXVpcmVcbiAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKHJlcXVpcmUoJy4uL3JlZHVjZXJzJykuZGVmYXVsdCksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUdyYXBocWxSZXF1ZXN0KGZldGNoKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKSB7XG4gICAgY29uc3QgZmV0Y2hDb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSwgdmFyaWFibGVzIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCBmZXRjaENvbmZpZyk7XG4gICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcihyZXNwLnN0YXR1c1RleHQpO1xuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVscGVycyh7IGZldGNoLCBoaXN0b3J5IH0pIHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaCxcbiAgICBoaXN0b3J5LFxuICAgIGdyYXBocWxSZXF1ZXN0OiBjcmVhdGVHcmFwaHFsUmVxdWVzdChmZXRjaCksXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVMb2dnZXIgYXMgcmVkdXhMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dnZXIoKSB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmdlbnlyb2Rpb25vdi9yZWR1eC1sb2dnZXIjb3B0aW9uc1xuICByZXR1cm4gcmVkdXhMb2dnZXIoe1xuICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgfSk7XG59XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBc0dBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBekdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQVpBO0FBY0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMkJBO0FBNUJBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXJGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE0RkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUF3R0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQURBOzs7O0FBTUE7O0FBYUE7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQWZBO0FBaUJBOzs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVhBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7OztBQTdCQTtBQUNBO0FBREE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTs7QUFEQTs7OztBQVNBO0FBQ0E7QUFEQTs7QUF1QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQXhCQTtBQUFBO0FBQ0E7QUFEQTtBQTBCQTtBQUVBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0EsV0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsZUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFVQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=