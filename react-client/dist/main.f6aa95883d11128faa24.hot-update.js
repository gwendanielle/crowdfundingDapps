webpackHotUpdate("main",{

/***/ "./react-client/src/Components/RaiseFundPage.jsx":
/*!*******************************************************!*\
  !*** ./react-client/src/Components/RaiseFundPage.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDatepicker = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/es/index.js\");\n\nvar _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);\n\nvar _moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar API = 'http://samu.localtunnel.me/api/projects/';\n\nvar RaiseFundPage = function (_Component) {\n    _inherits(RaiseFundPage, _Component);\n\n    function RaiseFundPage(props) {\n        _classCallCheck(this, RaiseFundPage);\n\n        var _this = _possibleConstructorReturn(this, (RaiseFundPage.__proto__ || Object.getPrototypeOf(RaiseFundPage)).call(this, props));\n\n        _this.state = {\n            title: '',\n            description: '',\n            amount_goal: '',\n            date_goal: '',\n            creator_address: '',\n            category: 1,\n            startDate: (0, _moment2.default)(),\n            ContractInstance: _this.props.contractInstance\n        };\n        _this.onSubmit = _this.onSubmit.bind(_this);\n        _this.handleChange = _this.handleChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(RaiseFundPage, [{\n        key: 'handleChange',\n        value: function handleChange(date) {\n            this.setState({\n                startDate: date\n            });\n        }\n    }, {\n        key: 'onSubmit',\n        value: function onSubmit(e) {\n            e.preventDefault();\n            var title = document.getElementById('title').value;\n            var description = document.getElementById('description').value;\n            var amount_goal = document.getElementById('amount_goal').value;\n            var date_goal = document.getElementById('date_goal').value;\n            var goalValue = web3.toWei(parseFloat(amount_goal), 'ether');\n\n            this.props.contractInstance.addProject(goalValue, {\n                gas: 300000,\n                from: web3.eth.accounts[0]\n            }, function (err, result) {\n                console.log(err, 'asdf');\n                console.log(result, 'res');\n                console.log(web3.eth.accounts[0], 'sender');\n                console.log(goalValue, 'val');\n                console.log(typeof goalValue === 'undefined' ? 'undefined' : _typeof(goalValue), 'val');\n                if (!err) {\n                    fetch(API, {\n                        method: 'POST',\n                        headers: {\n                            'Content-Type': 'application/json',\n                            'Accept': 'application/json'\n                        },\n                        body: JSON.stringify({\n                            title: title,\n                            category: 1,\n                            description: description,\n                            amount_goal: amount_goal,\n                            date_goal: date_goal,\n                            creator_address: web3.eth.accounts[0]\n                        })\n                    }).then(function (res) {\n                        return res.json();\n                    }).then(function (data) {\n                        return console.log(data);\n                    }).catch(function (err) {\n                        return console.log(err);\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _state = this.state,\n                title = _state.title,\n                description = _state.description,\n                amount_goal = _state.amount_goal,\n                date_goal = _state.date_goal,\n                creator_address = _state.creator_address;\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.onSubmit },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'center-elements top-margin' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'title:',\n                            _react2.default.createElement('input', { type: 'text', name: 'title', id: 'title' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'description:',\n                            _react2.default.createElement('textarea', { name: 'description', id: 'description' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'goal amount:',\n                            _react2.default.createElement('input', { type: 'text', name: 'amount_goal', id: 'amount_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement(\n                            'label',\n                            null,\n                            'date_goal:',\n                            _react2.default.createElement(_reactDatepicker2.default, { dateFormat: 'YYYY-MM-DD', selected: this.state.startDate, onChange: this.handleChange, name: 'date_goal', id: 'date_goal' })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { type: 'submit' },\n                        'Submit'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RaiseFundPage;\n}(_react.Component);\n\nexports.default = RaiseFundPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1jbGllbnQvc3JjL0NvbXBvbmVudHMvUmFpc2VGdW5kUGFnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVhY3QtY2xpZW50L3NyYy9Db21wb25lbnRzL1JhaXNlRnVuZFBhZ2UuanN4PzhmZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBBUEkgPSAnaHR0cDovL3NhbXUubG9jYWx0dW5uZWwubWUvYXBpL3Byb2plY3RzLyc7XG5cbmNsYXNzIFJhaXNlRnVuZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIGFtb3VudF9nb2FsOiAnJyxcbiAgICAgICAgICAgIGRhdGVfZ29hbDogJycsXG4gICAgICAgICAgICBjcmVhdG9yX2FkZHJlc3M6ICcnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IDEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG1vbWVudCgpLFxuICAgICAgICAgICAgQ29udHJhY3RJbnN0YW5jZTogdGhpcy5wcm9wcy5jb250cmFjdEluc3RhbmNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlQ2hhbmdlKGRhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhcnREYXRlOiBkYXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBhbW91bnRfZ29hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbW91bnRfZ29hbCcpLnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZV9nb2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVfZ29hbCcpLnZhbHVlO1xuICAgICAgICBsZXQgZ29hbFZhbHVlID0gd2ViMy50b1dlaShwYXJzZUZsb2F0KGFtb3VudF9nb2FsKSwgJ2V0aGVyJyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5jb250cmFjdEluc3RhbmNlLmFkZFByb2plY3QoZ29hbFZhbHVlLCB7XG4gICAgICAgICAgICBnYXM6IDMwMDAwMCxcbiAgICAgICAgICAgIGZyb206IHdlYjMuZXRoLmFjY291bnRzWzBdLFxuICAgICAgICB9LCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ2FzZGYnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3JlcycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2ViMy5ldGguYWNjb3VudHNbMF0sICdzZW5kZXInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdvYWxWYWx1ZSwgJ3ZhbCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGdvYWxWYWx1ZSwgJ3ZhbCcpO1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICBmZXRjaChBUEksIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6dGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudF9nb2FsOiBhbW91bnRfZ29hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVfZ29hbDogZGF0ZV9nb2FsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcl9hZGRyZXNzOiB3ZWIzLmV0aC5hY2NvdW50c1swXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gIGNvbnNvbGUubG9nKGRhdGEpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGFtb3VudF9nb2FsLCBkYXRlX2dvYWwsIGNyZWF0b3JfYWRkcmVzcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWVsZW1lbnRzIHRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbCBhbW91bnQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRfZ29hbFwiIGlkPVwiYW1vdW50X2dvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9nb2FsOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkYXRlRm9ybWF0PVwiWVlZWS1NTS1ERFwiIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGF0ZV9nb2FsXCIgaWQ9XCJkYXRlX2dvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJhaXNlRnVuZFBhZ2U7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQWJBO0FBY0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU5BO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJBO0FBREE7QUE4QkE7Ozs7QUEvRkE7QUFDQTtBQWdHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./react-client/src/Components/RaiseFundPage.jsx\n");

/***/ })

})