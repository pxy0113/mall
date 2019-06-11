(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["goodPage/goods/goods"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/goodPage/goods/goods.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















































































































































































var _card = _interopRequireDefault(__webpack_require__(/*! @/components/good-card/card.vue */ "D:\\pxy\\mall\\components\\good-card\\card.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: { card: _card.default },
  data: function data() {
    return {
      showCard: false,
      //控制渐变标题栏的参数
      beforeHeaderzIndex: 11, //层级
      afterHeaderzIndex: 10, //层级
      beforeHeaderOpacity: 1, //不透明度
      afterHeaderOpacity: 0, //不透明度
      //是否显示返回按钮






      //轮播主图数据
      swiperList: [
      { id: 1, img: 'https://s2.ax1x.com/2019/03/28/AdOfUJ.jpg' },
      { id: 2, img: 'https://s2.ax1x.com/2019/03/28/AdOWE4.jpg' },
      { id: 3, img: 'https://s2.ax1x.com/2019/03/28/AdO2bF.jpg' },
      { id: 4, img: 'https://s2.ax1x.com/2019/03/28/AdOh59.jpg' }],

      //轮播图下标
      currentSwiper: 0,
      anchorlist: [], //导航条锚点
      selectAnchor: 0, //选中锚点
      serviceClass: '', //服务弹窗css类，控制开关动画
      shareClass: '', //分享弹窗css类，控制开关动画
      // 商品信息
      goodsData: {
        id: 111,
        name: "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
        price: "127.00",
        number: 1,
        service: [
        { name: "正品保证", description: "此商品官方保证为正品" },
        { name: "极速退款", description: "此商品享受退货极速退款服务" },
        { name: "7天退换", description: "此商品享受7天无理由退换服务" }],

        spec: null,
        type: null,
        specList: ["XS", "S", "M", "L", "XL", "XXL"],
        goodsType: ["玫瑰金色链子粉晶拼珍珠", "彩虹珠子草编森女手串", "链子", "特价散珠*1", "波罗的海银色手镯"],
        comment: {
          number: 102,
          userface: '../../static/img/face.jpg',
          username: '大黑哥',
          content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！' } },



      isKeep: false, //收藏
      //商品描述html
      descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>' };

  },
  onLoad: function onLoad(option) {

    //小程序隐藏返回按钮
    this.showBack = false;

    //option为object类型，会序列化上个页面传递的参数
    this.goodsData.name = option.name;
    this.goodsData.price = option.price;
    console.log(option); //打印出上个页面传递的参数。
  },
  onReady: function onReady() {
    this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
  },
  onHide: function onHide() {
    console.log('我hide了');
  },
  onPageScroll: function onPageScroll(e) {
    //锚点切换
    this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
    //导航栏渐变
    var tmpY = 375;
    e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
    this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
    this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
    //切换层级
    this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
    this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
  },
  //上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
  onReachBottom: function onReachBottom() {
    uni.showToast({ title: '触发上拉加载' });
  },
  mounted: function mounted() {

  },
  methods: {
    toSwiper: function toSwiper(item) {
      var arr = [];
      this.swiperList.forEach(function (item) {
        arr.push(item.img);
      });
      uni.previewImage({
        urls: arr,
        current: item.img,
        longPressActions: {
          itemList: ['发送给朋友', '保存图片', '收藏'],
          itemColor: ['skyblue', 'green', 'orange'],
          success: function success(res) {
            console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
          },
          fail: function fail(res) {
            console.log(res.errMsg);
          } } });


    },
    //轮播图指示器
    swiperChange: function swiperChange(event) {
      this.currentSwiper = event.detail.current;
    },
    // 分享
    share: function share() {
      this.shareClass = 'showSe';
    },
    hideShare: function hideShare() {var _this = this;
      this.shareClass = 'hideSe';
      setTimeout(function () {
        _this.shareClass = 'noneSe';
      }, 150);
    },
    //收藏
    keep: function keep() {
      this.isKeep = this.isKeep ? false : true;
    },
    emitData: function emitData(data, type) {
      this.showCard = false;
      this.goodsData.spec = data.spec;
      this.goodsData.type = data.type;
      this.goodsData.number = data.number;
      if (type == 1) {
        this.checkCart(data);
      }
      if (type == 2) {
        this.toConfirmation();
      }
    },
    checkCart: function checkCart(data) {var _this2 = this;
      uni.getStorage({
        key: 'cartList',
        success: function success(res) {
          var list = res.data;
          var isFind = false;
          for (var i = 0; i < list.length; i++) {
            var row = list[i];
            if (row.id == data.id && row.spec == data.spec &&
            row.type == data.type)
            {//找到商品一样的商品
              list[i].number = list[i].number + data.number; //数量自增
              isFind = true; //找到一样的商品  bug商品Id相同 商品分类不同 需要进入下面的新增
              break; //跳出循环
            }
          }
          if (!isFind) {
            //没有找到一样的商品，新增一行到购物车商品列表头部
            var goods = {
              id: _this2.goodsData.id,
              img: _this2.swiperList[0].img,
              name: _this2.goodsData.name,
              spec: _this2.goodsData.spec,
              specList: _this2.goodsData.specList,
              goodsType: _this2.goodsData.goodsType,
              type: _this2.goodsData.type,
              price: _this2.goodsData.price,
              number: _this2.goodsData.number };
            list.unshift(data);
          }
          uni.setStorage({
            key: 'cartList',
            data: list,
            success: function success(ret) {
              uni.showToast({ title: "已加入购物车" }); //都有了就会跳转
            } });

        },
        fail: function fail() {
          uni.showToast({ title: "加入购物车失败", icon: 'none' }); //都有了就会跳转
        } });

    },
    joinOrBuy: function joinOrBuy(type) {//买或者加购
      var spec = this.goodsData.spec == null;
      var goods = this.goodsData.type == null;
      if (!spec && !goods) {
        type == 1 && this.checkCart(this.goodsData);
        type == 2 && this.toConfirmation();
      } else {
        if (goods) {
          uni.showToast({ title: '请选择颜色分类', icon: 'none' });
          this.showCard = true;
        };
        if (spec) {
          uni.showToast({ title: '请选择尺码', icon: 'none' });
          this.showCard = true;
        };
      }
    },
    //跳转确认订单页面
    toConfirmation: function toConfirmation() {
      var tmpList = [];
      var goods = { id: this.goodsData.id, img: '../../static/img/goods/p1.jpg', name: this.goodsData.name, type: this.goodsData.type, spec: this.goodsData.spec, price: this.goodsData.price, number: this.goodsData.number };
      tmpList.push(goods);
      uni.setStorage({
        key: 'buylist',
        data: tmpList,
        success: function success() {
          uni.navigateTo({
            url: '../../pages/order/confirmation' });

        } });

    },
    //跳转评论列表
    showComments: function showComments(goodsid) {
      uni.navigateTo({
        url: './discuss' });

    },
    //跳转锚点
    toAnchor: function toAnchor(index) {
      console.log(index);
      this.selectAnchor = index;
      uni.pageScrollTo({ scrollTop: this.anchorlist[index].top, duration: 200 });
    },
    //计算锚点高度
    calcAnchor: function calcAnchor() {var _this3 = this;
      this.anchorlist = [
      { name: '主图', top: 0 },
      { name: '评价', top: 0 },
      { name: '详情', top: 0 }];

      var commentsView = uni.createSelectorQuery().select("#comments");
      commentsView.boundingClientRect(function (data) {
        var statusbarHeight = 0;
        //APP内还要计算状态栏高度



        var headerHeight = uni.upx2px(100);
        _this3.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
        _this3.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

      }).exec();
    },
    //返回上一页
    back: function back() {
      uni.navigateBack();
    },
    //服务弹窗
    showService: function showService() {
      this.serviceClass = 'showSe';
    },
    //关闭服务弹窗
    hideService: function hideService() {var _this4 = this;
      this.serviceClass = 'hideSe';
      setTimeout(function () {
        _this4.serviceClass = 'noneSe';
      }, 200);
    },
    //规格弹窗
    showSpec: function showSpec() {
      console.log('show');
      this.showCard = true;
      // this.specCallback = fun;
    },
    specCallback: function specCallback() {
      return;
    },

    discard: function discard() {
      //丢弃
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/goodPage/goods/goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=template&id=70c85128&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/pxy/mall/goodPage/goods/goods.vue?vue&type=template&id=70c85128&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    [
      _c("view", {
        staticClass: "status",
        style: { opacity: _vm.afterHeaderOpacity }
      }),
      _c("view", { staticClass: "header" }, [
        _c(
          "view",
          {
            staticClass: "before",
            style: {
              opacity: 1 - _vm.afterHeaderOpacity,
              zIndex: _vm.beforeHeaderzIndex
            }
          },
          [
            _c("view", { staticClass: "back" }, [
              _vm.showBack
                ? _c("view", {
                    staticClass: "icon xiangqian",
                    attrs: { eventid: "2e32a098-0" },
                    on: { tap: _vm.back }
                  })
                : _vm._e()
            ]),
            _c("view", { staticClass: "middle" }),
            _c("view", { staticClass: "icon-btn" }, [
              _c("view", { staticClass: "icon tongzhi" }),
              _c("view", {
                staticClass: "icon cart",
                attrs: { eventid: "2e32a098-1" },
                on: {
                  tap: function($event) {
                    _vm.joinOrBuy(1)
                  }
                }
              })
            ])
          ]
        ),
        _c(
          "view",
          {
            staticClass: "after",
            style: {
              opacity: _vm.afterHeaderOpacity,
              zIndex: _vm.afterHeaderzIndex
            }
          },
          [
            _c("view", { staticClass: "back" }, [
              _vm.showBack
                ? _c("view", {
                    staticClass: "icon xiangqian",
                    attrs: { eventid: "2e32a098-2" },
                    on: { tap: _vm.back }
                  })
                : _vm._e()
            ]),
            _c(
              "view",
              { staticClass: "middle" },
              _vm._l(_vm.anchorlist, function(anchor, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    class: [_vm.selectAnchor == index ? "on" : ""],
                    attrs: { eventid: "2e32a098-3-" + index },
                    on: {
                      tap: function($event) {
                        _vm.toAnchor(index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(anchor.name))]
                )
              })
            ),
            _c("view", { staticClass: "icon-btn" }, [
              _c("view", { staticClass: "icon tongzhi" }),
              _c("view", {
                staticClass: "icon cart",
                attrs: { eventid: "2e32a098-4" },
                on: {
                  tap: function($event) {
                    _vm.joinOrBuy(1)
                  }
                }
              })
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "footer" }, [
        _c("view", { staticClass: "icons" }, [
          _c(
            "view",
            {
              staticClass: "box",
              attrs: { eventid: "2e32a098-5" },
              on: { tap: _vm.share }
            },
            [
              _c("view", { staticClass: "icon fenxiang" }),
              _c("view", { staticClass: "text" }, [_vm._v("分享")])
            ]
          ),
          _vm._m(0),
          _c(
            "view",
            {
              staticClass: "box",
              attrs: { eventid: "2e32a098-6" },
              on: { tap: _vm.keep }
            },
            [
              _c("view", {
                staticClass: "icon",
                class: [_vm.isKeep ? "shoucangsel" : "shoucang"]
              }),
              _c("view", { staticClass: "text" }, [
                _vm._v(_vm._s(_vm.isKeep ? "已" : "") + "收藏")
              ])
            ]
          )
        ]),
        _c("view", { staticClass: "btn" }, [
          _c(
            "view",
            {
              staticClass: "joinCart",
              attrs: { eventid: "2e32a098-7" },
              on: {
                tap: function($event) {
                  _vm.joinOrBuy(1)
                }
              }
            },
            [_vm._v("加入购物车")]
          ),
          _c(
            "view",
            {
              staticClass: "buy",
              attrs: { eventid: "2e32a098-8" },
              on: {
                tap: function($event) {
                  _vm.joinOrBuy(2)
                }
              }
            },
            [_vm._v("立即购买")]
          )
        ])
      ]),
      _c(
        "view",
        {
          staticClass: "share",
          class: _vm.shareClass,
          attrs: { eventid: "2e32a098-11" },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.discard($event)
            },
            tap: _vm.hideShare
          }
        },
        [
          _c("view", { staticClass: "mask" }),
          _c(
            "view",
            {
              staticClass: "layer",
              attrs: { eventid: "2e32a098-10" },
              on: {
                tap: function($event) {
                  $event.stopPropagation()
                  _vm.discard($event)
                }
              }
            },
            [
              _c("view", { staticClass: "h1" }, [_vm._v("分享")]),
              _vm._m(1),
              _c(
                "view",
                {
                  staticClass: "btn",
                  attrs: { eventid: "2e32a098-9" },
                  on: { tap: _vm.hideShare }
                },
                [_vm._v("取消")]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: "popup service",
          class: _vm.serviceClass,
          attrs: { eventid: "2e32a098-13" },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.discard($event)
            },
            tap: _vm.hideService
          }
        },
        [
          _c("view", { staticClass: "mask" }),
          _c(
            "view",
            {
              staticClass: "layer",
              attrs: { eventid: "2e32a098-12" },
              on: {
                tap: function($event) {
                  $event.stopPropagation()
                  _vm.discard($event)
                }
              }
            },
            [
              _c(
                "view",
                { staticClass: "content" },
                _vm._l(_vm.goodsData.service, function(item, index) {
                  return _c("view", { key: index, staticClass: "row" }, [
                    _c(
                      "view",
                      {
                        staticStyle: {
                          display: "flex",
                          "justify-content": "flex-start",
                          "align-items": "flex-start"
                        }
                      },
                      [
                        _c("icon", {
                          staticStyle: { margin: "10rpx 10rpx 10rpx 0" },
                          attrs: { type: "success", size: "20" }
                        }),
                        _c("view", [
                          _c("view", { staticClass: "title" }, [
                            _vm._v(_vm._s(item.name))
                          ]),
                          _c("view", { staticClass: "description" }, [
                            _vm._v(_vm._s(item.description))
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                })
              )
            ]
          )
        ]
      ),
      _vm.showCard
        ? _c("card", {
            ref: "card",
            attrs: {
              list: _vm.goodsData,
              place: 1,
              eventid: "2e32a098-14",
              mpcomid: "2e32a098-0"
            },
            on: { emitData: _vm.emitData }
          })
        : _vm._e(),
      _c(
        "view",
        { staticClass: "swiper-box" },
        [
          _c(
            "swiper",
            {
              attrs: { circular: "true", eventid: "2e32a098-16" },
              on: { change: _vm.swiperChange }
            },
            _vm._l(_vm.swiperList, function(swiper, index0) {
              return _c(
                "swiper-item",
                { key: swiper.id, attrs: { mpcomid: "2e32a098-1-" + index0 } },
                [
                  _c("image", {
                    attrs: {
                      src: swiper.img,
                      eventid: "2e32a098-15-" + index0
                    },
                    on: {
                      tap: function($event) {
                        _vm.toSwiper(swiper)
                      }
                    }
                  })
                ]
              )
            })
          ),
          _c("view", { staticClass: "indicator" }, [
            _vm._v(
              _vm._s(_vm.currentSwiper + 1) +
                "/" +
                _vm._s(_vm.swiperList.length)
            )
          ])
        ],
        1
      ),
      _c(
        "view",
        { staticClass: "info-box goods-info" },
        [
          _c("p", [
            _c("span", { staticClass: "price" }, [
              _vm._v(_vm._s(_vm.goodsData.price))
            ]),
            _c(
              "span",
              {
                staticStyle: {
                  "text-decoration": "line-through",
                  "font-size": "22rpx",
                  "margin-left": "5rpx"
                }
              },
              [_vm._v("￥299")]
            )
          ]),
          _c("view", { staticClass: "title" }, [
            _vm._v(_vm._s(_vm.goodsData.name))
          ]),
          _vm._m(2)
        ],
        1
      ),
      _c("view", { staticClass: "info-box spec" }, [
        _c(
          "view",
          {
            staticClass: "row",
            attrs: { eventid: "2e32a098-17" },
            on: { tap: _vm.showService }
          },
          [_c("view", { staticClass: "text" }, [_vm._v("服务")]), _vm._m(3)]
        ),
        _c(
          "view",
          {
            staticClass: "row",
            attrs: { eventid: "2e32a098-18" },
            on: { tap: _vm.showSpec }
          },
          [
            _vm.goodsData.spec !== null && _vm.goodsData.type !== null
              ? _c("view", { staticClass: "text" }, [
                  _vm._v(
                    "已选择 " +
                      _vm._s(_vm.goodsData.goodsType[_vm.goodsData.type]) +
                      " " +
                      _vm._s(_vm.goodsData.specList[_vm.goodsData.spec])
                  )
                ])
              : _c("view", { staticClass: "text" }, [
                  _vm._m(4),
                  _c("view", { staticClass: "mini" }, [
                    _c(
                      "view",
                      { staticClass: "sp" },
                      [
                        _vm._l(_vm.goodsData.specList, function(item, index) {
                          return _c("view", { key: index }, [
                            _vm._v(_vm._s(item))
                          ])
                        }),
                        _c("view", [
                          _vm._v(
                            "共" +
                              _vm._s(_vm.goodsData.specList.length) +
                              "种尺码可选"
                          )
                        ])
                      ],
                      2
                    )
                  ])
                ]),
            _vm._m(5)
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: "info-box comments", attrs: { id: "comments" } },
        [
          _c("view", { staticClass: "row" }, [
            _c("view", { staticClass: "text" }, [
              _vm._v("商品评价(" + _vm._s(_vm.goodsData.comment.number) + ")")
            ]),
            _c("view", { staticClass: "arrow" }, [
              _c(
                "view",
                {
                  staticClass: "show",
                  attrs: { eventid: "2e32a098-19" },
                  on: {
                    tap: function($event) {
                      _vm.showComments(_vm.goodsData.id)
                    }
                  }
                },
                [
                  _vm._v("查看全部"),
                  _c("view", { staticClass: "icon xiangyou" })
                ]
              )
            ])
          ]),
          _c("view", { staticClass: "comment" }, [
            _c("view", { staticClass: "user-info" }, [
              _c("view", { staticClass: "face" }, [
                _c("image", { attrs: { src: _vm.goodsData.comment.userface } })
              ]),
              _c("view", { staticClass: "username" }, [
                _vm._v(_vm._s(_vm.goodsData.comment.username))
              ])
            ]),
            _c("view", { staticClass: "content" }, [
              _vm._v(_vm._s(_vm.goodsData.comment.content))
            ])
          ])
        ]
      ),
      _c("view", { staticClass: "description" }, [
        _c("view", { staticClass: "title" }, [_vm._v("———— 商品详情 ————")]),
        _c(
          "view",
          { staticClass: "content" },
          [
            _c("rich-text", {
              attrs: { nodes: _vm.descriptionStr, mpcomid: "2e32a098-2" }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "box" }, [
      _c("view", { staticClass: "icon kefu" }),
      _c("view", { staticClass: "text" }, [_vm._v("客服")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "list" }, [
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wx.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("微信好友")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/pyq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("朋友圈")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/wb.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("新浪微博")])
      ]),
      _c("view", { staticClass: "box" }, [
        _c("image", { attrs: { src: "../../static/img/share/qq.png" } }),
        _c("view", { staticClass: "title" }, [_vm._v("QQ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "three" }, [
      _c("span", { staticStyle: { width: "40vw" } }, [_vm._v("邮费:15.00")]),
      _c("span", { staticStyle: { width: "40vw" } }, [_vm._v("销量 403")]),
      _c("span", [_vm._v("西安")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "arrow" }, [
      _c("view", { staticClass: "icon xiangyou" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("规格"),
      _c(
        "span",
        { staticStyle: { color: "#333333", "padding-left": "8rpx" } },
        [_vm._v("选择 颜色分类,尺码")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "arrow" }, [
      _c("view", { staticClass: "icon xiangyou" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue":
/*!********************************************!*\
  !*** D:/pxy/mall/goodPage/goods/goods.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods.vue?vue&type=template&id=70c85128&scoped=true& */ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=template&id=70c85128&scoped=true&");
/* harmony import */ var _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods.vue?vue&type=script&lang=js& */ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped& */ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70c85128",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/pxy/mall/goodPage/goods/goods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** D:/pxy/mall/goodPage/goods/goods.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./goods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=script&lang=js&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped&":
/*!********************************************************************************************************!*\
  !*** D:/pxy/mall/goodPage/goods/goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=style&index=0&id=70c85128&lang=scss&scoped=scoped&");
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_style_index_0_id_70c85128_lang_scss_scoped_scoped___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=template&id=70c85128&scoped=true&":
/*!***************************************************************************************!*\
  !*** D:/pxy/mall/goodPage/goods/goods.vue?vue&type=template&id=70c85128&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./goods.vue?vue&type=template&id=70c85128&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\pxy\\mall\\goodPage\\goods\\goods.vue?vue&type=template&id=70c85128&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Administrator_Downloads_HBuilderX_0_1_49_20180917_alpha_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_vue_vue_type_template_id_70c85128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "D:\\pxy\\mall\\main.js?{\"page\":\"goodPage%2Fgoods%2Fgoods\"}":
/*!***************************************************************!*\
  !*** D:/pxy/mall/main.js?{"page":"goodPage%2Fgoods%2Fgoods"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "D:\\pxy\\mall\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _goods = _interopRequireDefault(__webpack_require__(/*! ./goodPage/goods/goods.vue */ "D:\\pxy\\mall\\goodPage\\goods\\goods.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_goods.default));

/***/ })

},[["D:\\pxy\\mall\\main.js?{\"page\":\"goodPage%2Fgoods%2Fgoods\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/goodPage/goods/goods.js.map