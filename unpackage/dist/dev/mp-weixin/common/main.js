(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*****************************!*\
  !*** D:/VUEJS/mall/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 1);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 4));
var _toolBox = _interopRequireDefault(__webpack_require__(/*! common/tool/toolBox.js */ 10));
var _requestConfig = __webpack_require__(/*! common/api/requestConfig.js */ 11);
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 13));









var _index = __webpack_require__(/*! wxcomponents/index */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.prototype.$store = _store.default;_vue.default.config.productionTip = false;_vue.default.prototype.$tools = _toolBox.default; //自己的工具类
_App.default.mpType = 'app';_vue.default.prototype.$BASIC_URL = 'http://m252t77964.wicp.vip:52923/'; //测试地址
_vue.default.prototype.$postRequest = _requestConfig.postRequest; //改版后的请求方法
//全局组件
_vue.default.prototype.$yLoading = _index.$yLoading; //加载动画
_vue.default.prototype.$yPrompt = _index.$yPrompt; //页面提示
//工具
// import { getTimeMinute } from './utils/index.js';
// Vue.prototype.$getTimeMinute = getTimeMinute;//时间戳转字符串插件
var app = new _vue.default(_objectSpread({},
_App.default, {
  store: _store.default }));

app.$mount();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*****************************!*\
  !*** D:/VUEJS/mall/App.vue ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 7);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);
var render, staticRenderFns





/* normalize component */

var component = Object(_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/VUEJS/mall/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** D:/VUEJS/mall/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 6);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/VUEJS/mall/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  onLaunch: function onLaunch() {
    console.log('App Launch');
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;

/***/ }),
/* 7 */
/*!**************************************************************!*\
  !*** D:/VUEJS/mall/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 8);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_2_1_3_20190723_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/VUEJS/mall/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */,
/* 10 */
/*!********************************************!*\
  !*** D:/VUEJS/mall/common/tool/toolBox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  getLocalTime: function getLocalTime(nS) {//时间戳转字符到日期
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/\//g, "-").replace(/[上午|下午]([\d\:]*)/g, "");
  },
  getTimeMinute: function getTimeMinute(nS) {//时间戳转字符到分
    return new Date(parseInt(nS) * 1000).toLocaleString('chinese', { hour12: false }).replace(/\//g, "-").replace(/(\:\d*)$/, "");
  },
  isEmpty: function isEmpty(obj) {//判断字符是否为空的方法
    if (typeof obj == "undefined" || obj == null || obj == "" || obj.length > 0 && obj.trim().length == 0) {
      return true;
    } else {
      return false;
    }
  },
  login: function login() {
    console.log('啊啊啊啊地方');
    // uni.login({
    // 	provider: 'weixin',
    // 	success: function(loginRes) {
    // 		console.log('-------获取code-------');
    // 		console.log(loginRes.code);
    // 		getSkeyAndOpenId(loginRes.code);
    // 		return {isTrue:true};
    // 	}
    // });
  },
  getSkeyAndOpenId: function getSkeyAndOpenId(code) {
    console.log(code);
    // this.$postRequest({
    // 	url: 'EShop/login',
    // 	data: { jsCode:code },
    // 	hasToken:false,
    // 	isLoad:false,
    // 	allSuccess: res => {
    // 		uni.setStorage({
    // 			key:'skey',
    // 			data:res.session_key
    // 		});
    // 		uni.setStorage({
    // 			key:'token',
    // 			data:res.token
    // 		});
    // 	}
    // });
  },

  filterObj: function filterObj(arr) {//过滤为空的参数不传递
    var objAr = {};
    for (var i in arr) {
      var k = i;
      var value = arr[i];
      if (value instanceof Object || value instanceof Array) {
        if (value.length !== 0) {
          objAr[k] = value;
        }
      } else {
        if (!isEmpty(value)) {
          objAr[k] = value;
        }
      }
    }
    return objAr;
  },
  DataType: function DataType(tgt, type) {//判断类型
    var dataType = Object.prototype.toString.call(tgt).replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
    return type ? dataType === type : dataType;
  },
  isFull: function isFull(data) {//判断是否是空的
    if (DataType(data, "object")) {//是对象
      if (!Object.keys(data).length) {
        return true;
      } else {
        return false;
      }
    } else if (DataType(data, "array")) {
      if (Array.isArray(data) && !data.length) {
        return true;
      } else {
        return false;
      }
    } else if (typeof obj == "undefined" || obj == null || obj == "" || obj.length > 0 && obj.trim().length == 0) {
      return true;
    } else {
      return false;
    }
  },
  objRemove: function objRemove(arr) {//对象数组的去重
    var obj = {};
    arr = arr.reduce(function (cur, next) {
      obj[next.id] ? "" : obj[next.id] =  true && cur.push(next);
      return cur;
    }, []);
    return arr;
  },
  strLen: function strLen(str) {//判断字符串长度
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
        len += 2;
      } else {
        len++;
      }
    }
    return len;

  },
  transfer: function transfer(text) {//字符的转义
    var s = "";
    if (text.length == 0) return "";
    s = text.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
  },
  /* 数字转整数 如 100000 转为10万
              * @param {需要转化的数} num 
              * @param {需要保留的小数位数} point 
             */
  tranNumber: function tranNumber(num, point) {
    var integer = parseInt(num);
    var numStr = integer.toString();
    if (numStr.length < 6) {//十万以内直接返回 
      return numStr + '元';
    } else if (numStr.length > 8) {//大于8位数是亿
      var decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
      return parseFloat(parseInt(integer / 100000000) + '.' + decimal) + '亿';
    } else if (numStr.length > 5) {//大于6位数是十万 (以10W分割 10W以下全部显示)
      var _decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);
      return parseFloat(parseInt(integer / 10000) + '.' + _decimal) + '万';
    }
  } };



//数组去重    	let arr = [1,2,2,3,3,4,4,5,5];let array = new Set(arr);let newArr = Array.from(array);
//Math.round(new Date(this.prize.sign_end_time) / 1000) //日期转时间戳
//let parentArr = newArr.filter(l => l.fid == 0)  //过滤
exports.default = _default;

/***/ }),
/* 11 */
/*!*************************************************!*\
  !*** D:/VUEJS/mall/common/api/requestConfig.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.postRequest = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));



var _toolBox = _interopRequireDefault(__webpack_require__(/*! ../tool/toolBox.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var vm = new _vue.default();
//异步获取全局变量
var asynGlobal = new Promise(function (resolve) {
  setTimeout(function () {
    resolve(vm.$BASIC_URL);
  }, 10);
});
_toolBox.default.login();
// const asynGlobal = 'http://m252t77964.wicp.vip:52923/';
//判断本地是否存在token  没有就要重新请求
// if(!wx.getStorageSync('token')){
// 	asynGlobal.then(basicsUrl => {
// 		uni.login({
// 			provider: 'weixin',
// 			success: function(loginRes) {
// 				console.log(loginRes.code);
// 				wx.request({//获取sessionid
// 					url: basicsUrl + 'EShop/login',
// 					success: res => {
// 						if(res.data.code == 0){
// 							console.log(res.data)
// 							wx.setStorageSync('token', res.data.token);
// 							wx.setStorageSync('skey', res.data.session_key);
// 						}
// 					}
// 				});
// 			}.bind(this)
// 		});
// 	
// 	});
// }
// 
//设置错误日志
var setErrlog = function setErrlog() {var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var _msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var _code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var _type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var obj = {
    url: _url,
    msg: _msg,
    code: _code,
    type: _type
    // time: vm.$getTimeMinute(new Date()).longDateSec

    // vm.$store.state.errMsg.push(obj);
  };};

//改版后的请求方法
var postRequest = function postRequest(transmitObj) {

  var TOKEN = wx.getStorageSync('token'); //获取sessionid

  var PUBLIC_HEADER = {
    'content-type': 'application/json;charset=utf-8' //POST请求必须'application/x-www-form-urlencoded',
  };

  // let COOKIE_HEADER = {
  // 	'Cookie': 'PHPSESSID=' + SESSIONID,//请求头设置sessionid
  // };

  var defaultParam = {
    url: '', //请求路径
    data: {}, //需要发送的数据
    hasToken: true,
    isLoad: true,
    allSuccess: function allSuccess() {}, //完全成功回调
    allError: function allError() {}, //所有错误回调
    success: function success() {}, //成功回调
    complete: function complete() {} //接口调用结束的回调函数（调用成功、失败都会执行）
  };

  var param = Object.assign({}, defaultParam, transmitObj);
  if (param.hasToken) {
    PUBLIC_HEADER.token = TOKEN;
  }
  var url = vm.$BASIC_URL + param.url;

  uni.getNetworkType({
    success: function success(res) {
      if (res.networkType == 'none') {
        if (param.isLoad) {
          vm.$yLoading().hide();
        }
        uni.stopPullDownRefresh(); //关闭下拉刷新
        param.allError('网络异常');
        param.complete('网络异常');
        uni.showToast({
          title: '网络异常，请检查您的网络！',
          icon: 'none',
          duration: 2500 });

        return;
      }
      uni.request({
        url: url,
        data: param.data,
        method: 'POST',
        // header: Object.assign({}, PUBLIC_HEADER, SESSIONID ? COOKIE_HEADER : {}),
        header: Object.assign({}, PUBLIC_HEADER),
        success: function success(res) {

          console.info({
            '请求的接口': url,
            '发送的数据': param.data,
            '返回的数据': res });


          if (res.statusCode == 200) {
            if (res.data) {
              if (res.data.code == 1) {
                param.allSuccess(res.data); //完全成功回调
              } else {
                param.allError(res.data);
                setErrlog(url, res.data.result, res.data.code, '后端接口报错'); //设置错误日志
                uni.showToast({
                  title: res.data.result || '未知错误！',
                  icon: 'none',
                  duration: 2500 });

              }
            }
          } else {
            param.allError(res);
            setErrlog(url, res.errMsg, res.statusCode, 'API(request)报错'); //设置错误日志
            uni.showToast({
              title: '网络出错：' + res.statusCode,
              icon: 'none',
              duration: 2500 });

          }

          param.success(res.data);

        },
        fail: function fail(err) {

          param.allError(err);

          setErrlog(url, err.errMsg, '', '接口调用失败'); //设置错误日志

          uni.showToast({
            title: '请求超时！',
            icon: 'none',
            duration: 2000 });


        },
        complete: function complete(res) {

          if (param.isLoad) {
            vm.$yLoading().hide();
          }

          uni.stopPullDownRefresh(); //关闭下拉刷新

          param.complete(res);

        } });

    } });


};exports.postRequest = postRequest;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 12)["default"]))

/***/ }),
/* 12 */,
/* 13 */
/*!************************************!*\
  !*** D:/VUEJS/mall/store/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    cartList: [] },

  mutations: {
    setCartList: function setCartList(state, list) {
      state.cartList = list;
    } },

  actions: {
    setCart: function setCart(_ref, data) {var commit = _ref.commit;
      commit('setCartList', data);
    } } });var _default =



store;exports.default = _default;

/***/ }),
/* 14 */,
/* 15 */
/*!*******************************************!*\
  !*** D:/VUEJS/mall/wxcomponents/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.$yPrompt = exports.$yLoading = void 0; /**
                                                                                                                           * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
                                                                                                                           * @param {String} selector 节点选择器
                                                                                                                           * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例 
                                                                                                                           微信小程序中 有的情况是A->B页面  改变了B的数据 推出回到A的时候页面不刷新 所以可以用页面栈改变A页面的数据
                                                                                                                               //获取页面栈
                                                                                                                                  var pages = getCurrentPages();//所有页面栈的数组
                                                                                                                                  var Page = pages[pages.length - 1];//当前页
                                                                                                                                    if(pages.length > 1){ //说明有上一页存在
                                                                                                                                      //上一个页面实例对象
                                                                                                                                      var prePage = pages[pages.length - 2];
                                                                                                                                      //关键在这里，调用上一页的函数 小程序可以直接用  uni-app需要使用prePage.$vm.changeData(e.detail.value)
                                                                                                                                      prePage.changeData(e.detail.value)//就可以调用上一页的函数改变了
                                                                                                                                  }
                                                                                                                                  
                                                                                                                           */
var getCtx = function getCtx(selector) {var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getCurrentPages()[getCurrentPages().length - 1];
  var componentCtx = ctx.selectComponent(selector);
  if (!componentCtx) {
    console.error('无法找到对应的组件（y）');
  }
  return componentCtx;
};

var $yLoading = function $yLoading() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#y-loading';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};
//搜索组件名叫y-loading的组件  此处组件在page.json/app.json处定义在了globalStyle的usingComponents里
exports.$yLoading = $yLoading;var $yPrompt = function $yPrompt() {var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#y-prompt';var ctx = arguments.length > 1 ? arguments[1] : undefined;return getCtx(selector, ctx);};exports.$yPrompt = $yPrompt;

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map