webpackHotUpdate("main",{

/***/ "./react-client/src/Components/FundPage.jsx":
/*!**************************************************!*\
  !*** ./react-client/src/Components/FundPage.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FundPage = function (_Component) {\n    _inherits(FundPage, _Component);\n\n    function FundPage() {\n        _classCallCheck(this, FundPage);\n\n        return _possibleConstructorReturn(this, (FundPage.__proto__ || Object.getPrototypeOf(FundPage)).apply(this, arguments));\n    }\n\n    _createClass(FundPage, [{\n        key: 'handleGetProjects',\n        value: function handleGetProjects() {\n            _axios2.default.get(\"http://samu.localtunnel.me/api/projects\").then(function (results) {\n                var data = results.data;\n                var result = data.results[0];\n                console.log(result);\n            }).catch(function () {\n                console.log('通信に失敗しました。');\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return this.handleGetProjects()\n            // <ul>\n            //     {this.state.prjct.map(prjct => <li>{prjct.name}</li>)}\n            // </ul>\n            ;\n        }\n    }]);\n\n    return FundPage;\n}(_react.Component);\n\nexports.default = FundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvRnVuZFBhZ2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlYWN0LWNsaWVudC9zcmMvQ29tcG9uZW50cy9GdW5kUGFnZS5qc3g/ZjBhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBGdW5kUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGhhbmRsZUdldFByb2plY3RzKCkge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAuZ2V0KFwiaHR0cDovL3NhbXUubG9jYWx0dW5uZWwubWUvYXBpL3Byb2plY3RzXCIpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0cy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+mAmuS/oeOBq+WkseaVl+OBl+OBvuOBl+OBn+OAgicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHZXRQcm9qZWN0cygpXHJcbiAgICAgICAgICAgIC8vIDx1bD5cclxuICAgICAgICAgICAgLy8gICAgIHt0aGlzLnN0YXRlLnByamN0Lm1hcChwcmpjdCA9PiA8bGk+e3ByamN0Lm5hbWV9PC9saT4pfVxyXG4gICAgICAgICAgICAvLyA8L3VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGdW5kUGFnZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7QUF2QkE7QUFDQTtBQXdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/Components/FundPage.jsx\n");

/***/ })

})