webpackJsonp([0],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_css__);
throw new Error("Cannot find module \"rc-dialog/assets/bootstrap.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__ = __webpack_require__(55);









var MyControl = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MyControl, _React$Component);

    function MyControl() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MyControl);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.state = {
            visible: false,
            destroyOnClose: false
        };
        _this.onClick = function () {
            _this.setState({
                visible: true
            });
        };
        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.onDestroyOnCloseChange = function (e) {
            _this.setState({
                destroyOnClose: e.target.checked
            });
        };
        return _this;
    }

    MyControl.prototype.render = function render() {
        var dialog = void 0;
        if (this.state.visible || !this.state.destroyOnClose) {
            dialog = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_DialogWrap__["a" /* default */], { visible: this.state.visible, animation: "slide-fade", maskAnimation: "fade", onClose: this.onClose, style: { width: 600 }, title: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, '\u7B2C\u4E8C\u4E2A\u5F39\u6846'), footer: [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { type: "button", className: "btn btn-default", key: "close", onClick: this.onClose }, "Close"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { type: "button", className: "btn btn-primary", key: "save", onClick: this.onClose }, "Save changes")] }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4", null, "Text in a modal"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", null), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4", null, "Overflowing text to show scroll behavior"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { display: '' } }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.")));
        }
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", { style: { margin: 20 } }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", { className: "btn btn-primary", onClick: this.onClick }, "show dialog"), '\xA0', __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("label", null, "destroy on close:", __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "checkbox", checked: this.state.destroyOnClose, onChange: this.onDestroyOnCloseChange }))), dialog);
    };

    return MyControl;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h2", null, "ant-design dialog"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(MyControl, null)), document.getElementById('__react-content'));

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: ExtractPluginMissingException: svg-sprite-loader exception. svg-sprite-loader in extract mode requires the corresponding plugin\n    at Object.loader (/Users/neo/WorkSpace/react-component/dialog/node_modules/svg-sprite-loader/lib/loader.js:54:13)\n    at runLoaders (/Users/neo/WorkSpace/react-component/dialog/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/neo/WorkSpace/react-component/dialog/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/neo/WorkSpace/react-component/dialog/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Users/neo/WorkSpace/react-component/dialog/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/neo/WorkSpace/react-component/dialog/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at /Users/neo/WorkSpace/react-component/dialog/node_modules/loader-runner/lib/LoaderRunner.js:205:4\n    at /Users/neo/WorkSpace/react-component/dialog/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

},[129]);
//# sourceMappingURL=bootstrap.js.map