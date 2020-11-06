require("source-map-support").install();
exports.ids = ["not-found"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/not-found/NotFound.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".NotFound-root-hprJC {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-m2ZQS {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  max-width: var(--max-content-width);\n}\n", "", {"version":3,"sources":["/home/vikram/Desktop/new-assignment/src/routes/not-found/NotFound.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,oCAAoC;CACrC","file":"NotFound.css","sourcesContent":[".root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-hprJC",
	"container": "NotFound-container-m2ZQS"
};

/***/ }),

/***/ "./src/routes/not-found/NotFound.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/not-found/NotFound.css");
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

/***/ "./src/routes/not-found/NotFound.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/not-found/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/vikram/Desktop/new-assignment/src/routes/not-found/NotFound.js";





class NotFound extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _NotFound_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _NotFound_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Sorry, the page you were trying to view does not exist.")));
  }

}

Object.defineProperty(NotFound, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }
});
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_NotFound_css__WEBPACK_IMPORTED_MODULE_3___default.a)(NotFound));

/***/ }),

/***/ "./src/routes/not-found/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/AppLayout/AppLayout.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/not-found/NotFound.js");
var _jsxFileName = "/home/vikram/Desktop/new-assignment/src/routes/not-found/index.js";



const title = 'Page Not Found';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })),
    status: 404
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL25vdC1mb3VuZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdmlrcmFtL0Rlc2t0b3AvbmV3LWFzc2lnbm1lbnQvc3JjL3JvdXRlcy9ub3QtZm91bmQvTm90Rm91bmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbm90LWZvdW5kL05vdEZvdW5kLmNzcz85NTU5IiwiL2hvbWUvdmlrcmFtL0Rlc2t0b3AvbmV3LWFzc2lnbm1lbnQvc3JjL3JvdXRlcy9ub3QtZm91bmQvTm90Rm91bmQuanMiLCIvaG9tZS92aWtyYW0vRGVza3RvcC9uZXctYXNzaWdubWVudC9zcmMvcm91dGVzL25vdC1mb3VuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLk5vdEZvdW5kLXJvb3QtaHBySkMge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLk5vdEZvdW5kLWNvbnRhaW5lci1tMlpRUyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3Zpa3JhbS9EZXNrdG9wL25ldy1hc3NpZ25tZW50L3NyYy9yb3V0ZXMvbm90LWZvdW5kL05vdEZvdW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxvQ0FBb0M7Q0FDckNcIixcImZpbGVcIjpcIk5vdEZvdW5kLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIk5vdEZvdW5kLXJvb3QtaHBySkNcIixcblx0XCJjb250YWluZXJcIjogXCJOb3RGb3VuZC1jb250YWluZXItbTJaUVNcIlxufTsiLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL05vdEZvdW5kLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ob3RGb3VuZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ob3RGb3VuZC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05vdEZvdW5kLmNzcyc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+U29ycnksIHRoZSBwYWdlIHlvdSB3ZXJlIHRyeWluZyB0byB2aWV3IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTm90Rm91bmQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vTm90Rm91bmQnO1xuXG5jb25zdCB0aXRsZSA9ICdQYWdlIE5vdCBGb3VuZCc7XG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsnbm90LWZvdW5kJ10sXG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8QXBwTGF5b3V0PlxuICAgICAgICA8Tm90Rm91bmQgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKSxcbiAgICBzdGF0dXM6IDQwNCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBZkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQURBOztBQWdCQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==