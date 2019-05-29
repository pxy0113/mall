(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/user"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =



































































































{
  data: function data() {
    return {
      personInfo: {},
      isfirst: true,
      headerPosition: "fixed",
      headerTop: null,
      statusTop: null,
      //个人信息,
      user: {
        username: '游客1002',
        face: '../../static/img/face.jpg',
        signature: '点击昵称跳转登录/注册页',
        integral: 0,
        balance: 0,
        envelope: 0 },

      // 订单类型
      orderList: [
      { text: '待付款', icon: "fukuan" },
      { text: '待发货', icon: "fahuo" },
      { text: '待收货', icon: "shouhuo" },
      { text: '待评价', icon: "pingjia" },
      { text: '退换货', icon: "tuihuo" }],

      // 工具栏列表
      mytoolbarList: [
      { url: '../user/keep/keep', text: '我的收藏', img: '../../static/img/user/point.png' },
      { url: '../user/coupon/coupon', text: '优惠券', img: '../../static/img/user/quan.png' },
      { url: '', text: '新客豪礼', img: '../../static/img/user/renw.png' },
      { url: '', text: '领红包', img: '../../static/img/user/momey.png' },

      { url: '../user/address/address', text: '收货地址', img: '../../static/img/user/addr.png' },
      { url: '', text: '账户安全', img: '../../static/img/user/security.png' },
      { url: '', text: '银行卡', img: '../../static/img/user/bank.png' },
      { url: '', text: '抽奖', img: '../../static/img/user/choujiang.png' }] };





  },
  //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onPageScroll: function onPageScroll(e) {
    //兼容iOS端下拉时顶部漂移
    this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
    this.headerTop = e.scrollTop >= 0 ? null : 0;
    this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
  },
  onLoad: function onLoad() {
    this.statusHeight = 0;



  },
  onReady: function onReady() {
    //此处，演示,每次页面初次渲染都把登录状态重置
    uni.setStorage({
      key: 'UserInfo',
      data: false,
      success: function success() {
      },
      fail: function fail(e) {
      } });

  },
  onShow: function onShow() {var _this = this;
    uni.getStorage({
      key: 'UserInfo',
      success: function success(res) {
        if (!res.data) {
          if (_this.isfirst) {
            //this.toLogin();
          }
          return;
        }
        _this.user = res.data;
      },
      fail: function fail(e) {
        //this.toLogin(); 
      } });

  },
  methods: {
    // getInfo(){
    // 	let that = this;
    // 	wx.getSetting({ //查询是否有权限
    // 	  success(res) {
    // 		if(res.authSetting['scope.userInfo']){ //有权限
    // 			that.isAuth = true;
    // 		}else{
    // 			that.showButton = true;
    // 		}
    // 	  }
    // 	});
    // },
    // userInfoHandler(e){
    // 	let that = this;
    // 	if(e.mp.detail.userInfo){
    // 		wx.login({
    // 		  success(res) {
    // 			  console.log(res)
    // 			if (res.code) {
    // 			  wx.request({
    // 				  url:'https://api.weixin.qq.com/sns/jscode2session?appid=wx0904846d9b4c40fe&secret=119afffd251e8b1b6e0f0a96e977bb7d&js_code='+res.code+'&grant_type=authorization_code',
    // 				  success(){
    // 					  console.log('登录成功');
    // 					  that.showButton = false;
    // 					  that.isAuth = true;
    // 				  },
    // 				  fail(err){
    // 					  console.log(err)
    // 				  }
    // 			  })
    // 			} 
    // 		  }
    // 		});
    // 	}
    // },
    // getSetting(){
    // 	let that = this;
    // 	wx.checkSession({ //有没有登录态 有就直接请求getInfo  没有就查看是否授权
    // 	  success() {
    // 		that.isAuth= true;
    // 		console.log('有登陆态') //从这一步过去的人已经登陆过了 授权过了没不知道啊
    // 		// this.getInfo();
    // 	  },
    // 	  fail(err) {
    // 		// session_key 已经失效，需要重新执行登录流程
    // 		console.log(err);
    // 		that.getInfo();				
    // 	  }
    // 	});
    // },
    wxGetUserInfo: function wxGetUserInfo(res) {
      if (!res.detail.iv) {
        uni.showToast({
          title: "您取消了授权,登录失败",
          icon: "none" });

        return false;
      }
      console.log('-------用户授权，并获取用户基本信息和加密数据------');
      this.personInfo = res.detail.userInfo;
      uni.login({
        provider: 'weixin',
        success: function success(loginRes) {
          console.log('-------获取code-------');
          console.log(loginRes.code);
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code', //change
            success: function success(info) {
              console.log('-------获取sessionKey、openid(unionid)-------');
              console.log(info);
            },
            fail: function fail(e) {
              console.log(e);
            } });

        } });


    },
    //消息列表
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../msg/msg' });

    },
    toOrderList: function toOrderList(index) {
      uni.navigateTo({ url: '../user/order_list/order_list?tbIndex=' + index });
    },
    toSetting: function toSetting() {
      uni.navigateTo({
        url: '../user/setting/setting' });

    },
    toMyQR: function toMyQR() {
      uni.navigateTo({
        url: '../user/myQR/myQR' });

    },
    toLogin: function toLogin() {
      uni.showToast({ title: '请登录', icon: "none" });
      uni.navigateTo({
        url: '../../loginPage/login' });

      this.isfirst = false;
    },
    isLogin: function isLogin() {
      //实际应用中,用户登录状态应该用token等方法去维持登录状态.
      var value = uni.getStorageSync('UserInfo');
      if (value) {
        return true;
      }
      return false;
    },
    toDeposit: function toDeposit() {
      uni.navigateTo({
        url: '../user/deposit/deposit' });

    },
    toPage: function toPage(url) {
      console.log("url: " + url);
      uni.navigateTo({
        url: url });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=07eba931&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=template&id=07eba931& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", {
      staticClass: "status",
      style: { position: _vm.headerPosition, top: _vm.statusTop }
    }),
    _c(
      "view",
      {
        staticClass: "header",
        style: { position: _vm.headerPosition, top: _vm.headerTop }
      },
      [
        _c("view", { staticClass: "addr" }),
        _c("view", { staticClass: "input-box" }),
        _c("view", { staticClass: "icon-btn" }, [
          _c("view", {
            staticClass: "icon tongzhi",
            attrs: { eventid: "9225f8ac-0" },
            on: { tap: _vm.toMsg }
          }),
          _c("view", {
            staticClass: "icon setting",
            attrs: { eventid: "9225f8ac-1" },
            on: { tap: _vm.toSetting }
          })
        ])
      ]
    ),
    _c("view", { staticClass: "place" }),
    _c("view", { staticClass: "user" }, [
      _c(
        "view",
        { staticClass: "left" },
        [
          _vm.personInfo.avatarUrl
            ? _c("image", {
                attrs: { src: _vm.personInfo.avatarUrl, eventid: "9225f8ac-3" },
                on: { tap: _vm.toSetting }
              })
            : _c(
                "button",
                {
                  staticClass: "userinfo-avatar",
                  attrs: {
                    "open-type": "getUserInfo",
                    withCredentials: "true",
                    eventid: "9225f8ac-2"
                  },
                  on: { getuserinfo: _vm.wxGetUserInfo }
                },
                [_c("span", [_vm._v("游客")])]
              )
        ],
        1
      ),
      _c("view", { staticClass: "right" }, [
        _c("view", { staticClass: "username" }, [
          _vm._v(
            _vm._s(_vm.personInfo.nickName ? _vm.personInfo.nickName : "游客")
          )
        ]),
        _c(
          "view",
          {
            staticClass: "signature",
            attrs: { eventid: "9225f8ac-4" },
            on: { tap: _vm.toSetting }
          },
          [_vm._v(_vm._s(_vm.user.signature))]
        )
      ]),
      _c(
        "view",
        {
          staticClass: "erweima",
          attrs: { eventid: "9225f8ac-5" },
          on: { tap: _vm.toMyQR }
        },
        [_c("view", { staticClass: "icon qr" })]
      )
    ]),
    _c("view", { staticClass: "order" }, [
      _c(
        "view",
        { staticClass: "list" },
        _vm._l(_vm.orderList, function(row, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "box",
              attrs: { eventid: "9225f8ac-6-" + index },
              on: {
                tap: function($event) {
                  _vm.toOrderList(index)
                }
              }
            },
            [
              _c("view", { staticClass: "img" }, [
                _c("view", { staticClass: "icon", class: row.icon })
              ]),
              _c("view", { staticClass: "text" }, [_vm._v(_vm._s(row.text))])
            ]
          )
        })
      ),
      _c("view", { staticClass: "balance-info" }, [
        _c("view", { staticClass: "left" }, [
          _c("view", { staticClass: "box" }, [
            _c("view", { staticClass: "num" }, [
              _vm._v(_vm._s(_vm.user.integral))
            ]),
            _c("view", { staticClass: "text" }, [_vm._v("积分")])
          ]),
          _c("view", { staticClass: "box" }, [
            _c("view", { staticClass: "num" }, [
              _vm._v(_vm._s(_vm.user.envelope))
            ]),
            _c("view", { staticClass: "text" }, [_vm._v("佣金")])
          ]),
          _c("view", { staticClass: "box" }, [
            _c("view", { staticClass: "num" }, [
              _vm._v(_vm._s(_vm.user.balance))
            ]),
            _c("view", { staticClass: "text" }, [_vm._v("余额")])
          ])
        ]),
        _c("view", { staticClass: "right" }, [
          _c(
            "view",
            {
              staticClass: "box",
              attrs: { eventid: "9225f8ac-7" },
              on: { tap: _vm.toDeposit }
            },
            [_vm._m(0), _c("view", { staticClass: "text" }, [_vm._v("充值")])]
          )
        ])
      ])
    ]),
    _c("view", { staticClass: "toolbar" }, [
      _c("view", { staticClass: "title" }, [_vm._v("我的工具栏")]),
      _c(
        "view",
        { staticClass: "list" },
        _vm._l(_vm.mytoolbarList, function(row, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "box",
              attrs: { eventid: "9225f8ac-8-" + index },
              on: {
                tap: function($event) {
                  _vm.toPage(row.url)
                }
              }
            },
            [
              _c("view", { staticClass: "img" }, [
                _c("image", { attrs: { src: row.img } })
              ]),
              _c("view", { staticClass: "text" }, [_vm._v(_vm._s(row.text))])
            ]
          )
        })
      )
    ]),
    _c("view", { staticClass: "place-bottom" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "img" }, [
      _c("view", { staticClass: "icon chongzhi" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "D:\\VUEJS\\mall\\main.js?{\"page\":\"pages%2FtabBar%2Fuser\"}":
/*!**************************************************************!*\
  !*** D:/VUEJS/mall/main.js?{"page":"pages%2FtabBar%2Fuser"} ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "D:\\VUEJS\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/user.vue */ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_user.default));

/***/ }),

/***/ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue":
/*!*******************************************!*\
  !*** D:/VUEJS/mall/pages/tabBar/user.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=07eba931& */ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=07eba931&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.vue?vue&type=style&index=0&lang=scss& */ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/VUEJS/mall/pages/tabBar/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=07eba931&":
/*!**************************************************************************!*\
  !*** D:/VUEJS/mall/pages/tabBar/user.vue?vue&type=template&id=07eba931& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=07eba931& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\VUEJS\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=07eba931&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_pxy_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_07eba931___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["D:\\VUEJS\\mall\\main.js?{\"page\":\"pages%2FtabBar%2Fuser\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabBar/user.js.map