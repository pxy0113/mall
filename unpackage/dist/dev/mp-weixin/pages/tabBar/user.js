(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/user"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/pages/tabBar/user.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

































































































var _request = _interopRequireDefault(__webpack_require__(/*! @/common/api/request.js */ "D:\\pxy\\mall\\common\\api\\request.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      isTrue: false, //是否存在登陆态
      personInfo: {},
      isfirst: true,
      headerPosition: "fixed",
      headerTop: null,
      statusTop: null,
      //个人信息,
      user: {
        username: '游客1002',
        face: '../../static/img/face.jpg',
        signature: '',
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
      { url: '../../userPage/keep/keep', text: '我的收藏', img: '../../static/img/user/point.png' },
      { url: '../../userPage/coupon/coupon', text: '优惠券', img: '../../static/img/user/quan.png' },
      // {url:'',text:'新客豪礼',img:'../../static/img/user/renw.png'},
      // {url:'',text:'领红包',img:'../../static/img/user/momey.png'},
      // 
      { url: '../../userPage/address/address', text: '收货地址', img: '../../static/img/user/addr.png' }] };








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
    uni.showToast({
      title: 'loading...',
      icon: 'loading',
      image: "../../static/img/user/tre.gif",
      duration: 5000 });

    //此处，演示,每次页面初次渲染都把登录状态重置
    // uni.setStorage({
    // 	key: 'UserInfo',
    // 	data: false,
    // 	success: function () {
    // 	},
    // 	fail:function(e){
    // 	}
    // });
  },
  onShow: function onShow() {var _this = this;
    uni.getStorage({
      key: 'skey',
      success: function success(res) {//session存在skey，执行1
        _this.toCheckSession();
      },
      fail: function fail(e) {
        //登陆.....tongshang
      } });


  },
  methods: {
    toCheckSession: function toCheckSession() {var _this2 = this;
      uni.checkSession({
        success: function success(res) {
          _this2.isTrue = true;
          //直接拿openId
          _this2.toGetUserData();
        },
        fail: function fail(err) {//没有登陆态
          // this.toLogin();
          //登陆=》登陆后通过code获取session_key 转换成skey存入storage
        } });

    },
    wxGetUserInfo: function wxGetUserInfo(res) {
      if (!res.detail.iv) {
        uni.showToast({
          title: "您取消了授权,登录失败",
          icon: "none" });

        return false;
      }
      console.log('-------用户授权，并获取用户基本信息和加密数据------');
      this.personInfo = res.detail.userInfo;
      this.toLogin();

    },
    toOrderList: function toOrderList(index) {
      uni.navigateTo({ url: '../../userPage/order_list/order_list?tbIndex=' + index });
    },
    toSetting: function toSetting() {
      uni.navigateTo({
        url: '../../userPage/setting/setting' });

    },
    toMyQR: function toMyQR() {
      uni.navigateTo({
        url: '../../userPage/myQR/myQR' });

    },
    toGetUserData: function toGetUserData() {var _this3 = this;
      uni.getUserInfo({
        success: function success(c) {
          _this3.personInfo = c.userInfo;
        } });

    },
    toLogin: function toLogin() {
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          console.log('-------获取code-------');
          console.log(loginRes.code);
          this.getSkeyAndOpenId(loginRes.code);
          this.isTrue = true;
        }.bind(this) });

    },
    getSkeyAndOpenId: function getSkeyAndOpenId(code) {
      console.log(code);
      uni.request({
        url: 'http://m252t77964.wicp.vip:52923/EShop/login',
        data: {
          jsCode: code },

        success: function (info) {
          console.log('ok');
          console.log(info);
        }.bind(this),
        fail: function fail(e) {
          console.log(e);
        } });

      // code换取session_key跟openid  
      // 这一步最好在后台做 也就是我直接传code给后台 后台写死secret跟appid 
      // 然后得到session_key跟openid 用session_key进行sha1/md5加密后 把skey,openid给我
      // let secret = '119afffd251e8b1b6e0f0a96e977bb7d';
      // let appid = 'wx0904846d9b4c40fe';
      // uni.request({
      // 	url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,//change
      // 	success: function(info) {
      // 		this.saveStorage('skey',info.data.session_key);
      // 		this.saveStorage('openid',info.data.openid);
      // 	}.bind(this),
      // 	fail: function(e) {
      // 		console.log(e)
      // 	}
      // });
    },
    saveStorage: function saveStorage(name, data) {
      uni.setStorage({
        key: name,
        data: data,
        fail: function fail(err) {
          console.log(err);
        } });

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
      if (this.isTrue) {
        uni.navigateTo({
          url: '../../userPage/deposit/deposit' });

      } else {
        uni.showToast({
          title: '请先登陆',
          icon: 'none' });

      }
    },
    toPage: function toPage(url) {
      if (this.isTrue) {
        uni.navigateTo({
          url: url });

      } else {
        uni.showToast({
          title: '请先登陆',
          icon: 'none' });

      }

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/pages/tabBar/user.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=4a8e866f&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/pages/tabBar/user.vue?vue&type=template&id=4a8e866f& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("view", { staticClass: "icon tongzhi" }),
          _c("view", {
            staticClass: "icon setting",
            attrs: { eventid: "4fe65c13-0" },
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
                attrs: { src: _vm.personInfo.avatarUrl, eventid: "4fe65c13-1" },
                on: { tap: _vm.toSetting }
              })
            : _vm._e(),
          !_vm.personInfo.avatarUrl
            ? _c("button", {
                staticClass: "userinfo-avatar",
                attrs: {
                  "open-type": "getUserInfo",
                  withCredentials: "true",
                  eventid: "4fe65c13-2"
                },
                on: { getuserinfo: _vm.wxGetUserInfo }
              })
            : _vm._e()
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
            attrs: { eventid: "4fe65c13-3" },
            on: { tap: _vm.toSetting }
          },
          [_vm._v(_vm._s(_vm.user.signature))]
        )
      ]),
      _c(
        "view",
        {
          staticClass: "erweima",
          attrs: { eventid: "4fe65c13-4" },
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
              attrs: { eventid: "4fe65c13-5-" + index },
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
              attrs: { eventid: "4fe65c13-6" },
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
              attrs: { eventid: "4fe65c13-7-" + index },
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

/***/ "D:\\pxy\\mall\\common\\api\\apiList.js":
/*!*****************************************!*\
  !*** D:/pxy/mall/common/api/apiList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var host = 'http://120.78.121.164:8080'; // 设置API接口的ip地址和端口

var apiList = {

  login: host + '/EShop/login', //用户登录的API

  getMyInfo: host + '/ucenter/User/myInfo' //用户注册的API

  //...
};


module.exports = apiList; //暴露出来

/***/ }),

/***/ "D:\\pxy\\mall\\common\\api\\request.js":
/*!*****************************************!*\
  !*** D:/pxy/mall/common/api/request.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _apiList = _interopRequireDefault(__webpack_require__(/*! ./apiList */ "D:\\pxy\\mall\\common\\api\\apiList.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  引入apiList.js文件

var apiRequest = function apiRequest(url, method, data, header) {//接收所需要的参数，如果不够还可以自己自定义参数
  var promise = new Promise(function (resolve, reject) {
    uni.request({
      url: url,
      data: data ? data : null,
      method: method,
      header: header ? header : { 'content-type': 'application/x-www-form-urlencoded' }, //application/json
      success: function success(res) {
        //接口调用成功
        resolve(res); //根据业务需要resolve接口返回的json的数据
      },
      fail: function fail(res) {
        // fail调用接口失败
        reject({ errormsg: '网络错误,请稍后重试', code: -1 });
      } });

  });
  return promise; //注意，这里返回的是promise对象
};

//登录接口的调用
var login = function login(data) {
  return new Promise(function (resolve, reject) {
    resolve(apiRequest(_apiList.default.login, 'POST', data));
  });
};
//注册接口的调用
var getMyInfo = function getMyInfo(data) {
  return new Promise(function (resolve, reject) {
    resolve(apiRequest(_apiList.default.getMyInfo, 'POST', data));
  });
};

//最后需要将具体调用的函数暴露出，给具体业务调用
//在需要的地方引入
// import api from '../../common/api/request.js'
// 				api.getMyInfo().then(res =>{
// 					console.log(res)
// 				});
var _default =
{
  login: login,
  getMyInfo: getMyInfo };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "D:\\pxy\\mall\\main.js?{\"page\":\"pages%2FtabBar%2Fuser\"}":
/*!************************************************************!*\
  !*** D:/pxy/mall/main.js?{"page":"pages%2FtabBar%2Fuser"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "D:\\pxy\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _user = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/user.vue */ "D:\\pxy\\mall\\pages\\tabBar\\user.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_user.default));

/***/ }),

/***/ "D:\\pxy\\mall\\pages\\tabBar\\user.vue":
/*!*****************************************!*\
  !*** D:/pxy/mall/pages/tabBar/user.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=4a8e866f& */ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=4a8e866f&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.vue?vue&type=style&index=0&lang=scss& */ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/pxy/mall/pages/tabBar/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** D:/pxy/mall/pages/tabBar/user.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** D:/pxy/mall/pages/tabBar/user.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=4a8e866f&":
/*!************************************************************************!*\
  !*** D:/pxy/mall/pages/tabBar/user.vue?vue&type=template&id=4a8e866f& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=4a8e866f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\pages\\tabBar\\user.vue?vue&type=template&id=4a8e866f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_4a8e866f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["D:\\pxy\\mall\\main.js?{\"page\":\"pages%2FtabBar%2Fuser\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabBar/user.js.map