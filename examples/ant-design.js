webpackJsonp([1],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
throw new Error("Cannot find module \"rc-dialog/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__ = __webpack_require__(54);




/* eslint no-console:0 */



// use import Dialog from 'rc-dialog'

var clearPath = 'M793 242H366v-74c0-6.7-7.7-10.4-12.9' + '-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c' + '5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4' + ' 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-' + '28.7 64-64V306c0-35.3-28.7-64-64-64z';
var getSvg = function getSvg(path) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var align = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, props), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("svg", { viewBox: "0 0 1024 1024", width: "1em", height: "1em", fill: "currentColor", style: align ? { verticalAlign: '-.125em ' } : {} }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("path", { d: path, "p-id": "5827" })));
};

var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.state = {
            visible: false,
            width: 600,
            destroyOnClose: false,
            center: false,
            mousePosition: {},
            useIcon: false
        };
        _this.onClick = function (e) {
            _this.setState({
                mousePosition: {
                    x: e.pageX,
                    y: e.pageY
                },
                visible: true
            });
        };
        _this.onClose = function (e) {
            // console.log(e);
            _this.setState({
                visible: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        _this.changeWidth = function () {
            _this.setState({
                width: _this.state.width === 600 ? 800 : 600
            });
        };
        _this.center = function (e) {
            _this.setState({
                center: e.target.checked
            });
        };
        _this.toggleCloseIcon = function () {
            _this.setState({
                useIcon: !_this.state.useIcon
            });
        };
        return _this;
    }

    MyControl.prototype.render = function render() {
        var style = {
            width: this.state.width
        };
        var wrapClassName = '';
        if (this.state.center) {
            wrapClassName = 'center';
        }
        var dialog = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__["a" /* default */], { visible: this.state.visible, wrapClassName: wrapClassName, animation: "zoom", maskAnimation: "fade", onClose: this.onClose, style: style, mousePosition: this.state.mousePosition, destroyOnClose: this.state.destroyOnClose, closeIcon: this.state.useIcon ? getSvg(clearPath, {}, true) : undefined }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { autoFocus: true }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "basic modal"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { onClick: this.changeWidth }, "change width"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { onClick: this.toggleCloseIcon }, "use custom icon, is using icon: ", this.state.useIcon && 'true' || 'false', "."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { height: 200 } }));
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { width: '90%', margin: '0 auto' } }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("style", null, '\n            .center {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            }\n            '), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange })), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label", null, "center", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "checkbox", checked: this.state.center, onChange: this.center }))), dialog);
    };

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(MyControl, null)), document.getElementById('__react-content'));

/***/ })

},[58]);
//# sourceMappingURL=ant-design.js.map