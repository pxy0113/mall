<template>
	<view>
		<view class="status" :style="{ opacity: afterHeaderOpacity }"></view>
		<view class="header">
			<!-- 头部-默认显示 -->
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back"><view class="icon xiangqian" @tap="back" v-if="showBack"></view></view> 
				<view class="middle"></view>
				<view class="icon-btn">
					<view class="icon tongzhi"></view>
					<view class="icon cart" @tap="joinCart"></view>
				</view>
			</view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				<view class="back" ><view class="icon xiangqian" @tap="back" v-if="showBack"></view></view>
				<view class="middle">
					<view v-for="(anchor,index) in anchorlist" :class="[selectAnchor==index ?'on':'']" :key="index" @tap="toAnchor(index)">{{anchor.name}}</view>
				</view>
				<view class="icon-btn">
					<view class="icon tongzhi"></view>
					<view class="icon cart" @tap="joinCart"></view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="share">
					<view class="icon fenxiang"></view>
					<view class="text">分享</view>
				</view>
				<view class="box">
					<view class="icon kefu"></view>
					<view class="text">客服</view>
				</view>
				<view class="box" @tap="keep">
					<view class="icon" :class="[isKeep?'shoucangsel':'shoucang']"></view>
					<view class="text">{{isKeep?'已':''}}收藏</view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy" @tap="buy">立即购买</view>
			</view>
		</view>
		<!-- share弹窗 -->
		<view class="share" :class="shareClass" @touchmove.stop.prevent="discard" @tap="hideShare">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="h1">分享</view>
				<view class="list">
					<view class="box">
						<image src="../../static/img/share/wx.png"></image>
						<view class="title">
							微信好友
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/pyq.png"></image>
						<view class="title">
							朋友圈
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/wb.png"></image>
						<view class="title">
							新浪微博
						</view>
					</view>
					<view class="box">
						<image src="../../static/img/share/qq.png"></image>
						<view class="title">
							QQ
						</view>
					</view>
				</view>
				<view class="btn" @tap="hideShare">
					取消
				</view>
			</view>
			
		</view>
		<!-- 服务-模态层弹窗 -->
		<view class="popup service" :class="serviceClass" @touchmove.stop.prevent="discard" @tap="hideService">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData.service" :key="index">
						<view style="display: flex;justify-content: flex-start;align-items: flex-start;">
							<icon type="success" size="20" style="margin: 10upx 10upx 10upx 0;"></icon>
							<view>
								<view class="title">{{item.name}}</view>
								<view class="description">{{item.description}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="cartContent">
						<img src="https://s2.ax1x.com/2019/03/28/AdOfUJ.jpg" alt="" 
						class="cartImg">
						<div class="save">
							<div>
								<p class="price">{{goodsData.price}}</p>
								<p style="font-size: 25rpx;color: #C0C0C0;padding-left: 10upx;">库存 555 件</p>
							</div>							
							<icon type="clear" size="20" @tap="hideSpec"></icon>
						</div>
					</view>
					<view class="line">尺码</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.spec" :class="[index==selectSpec?'on':'']" @tap="setSelectSpec(index)" :key="index">{{item}}</view>
					</view>
					<view>颜色分类</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.goodsType" :class="[index==selectGoods?'on':'']" @tap="selectgoods(index)" :key="index">{{item}}</view>
					</view>
					<view class="num line">
						<view>购买数量</view>
						<view style="font-size: 28rpx;margin-top: 5rpx;">
							<view style="display: flex;justify-content: flex-start;align-items: center;">
								<view class="sub" @tap.stop="sub">
									<view class="icon jian"></view>
								</view>
								<view class="input" @tap.stop="discard">
									<input type="number" v-model="goodsData.number" />
								</view>
								<view class="add"  @tap.stop="add">
									<view class="icon jia"></view>
								</view>

							</view>
						</view>
					</view>
					
				</view>
				<!-- <view class="btn"><view class="button" @tap="hideSpec">完成</view></view> -->
				<view class="btn">
					<view class="joinCart" @tap="joinCart">加入购物车</view>
					<view class="buy" @tap="buy">立即购买</view>
				</view>
			</view>
		</view>
		<!-- 商品主图轮播 -->
		<view class="swiper-box">
			<swiper circular="true"  @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper.id">
					<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<p>
				<!-- <view class="price">{{goodsData.price}}</view> -->
				<span class="price">{{goodsData.price}}</span>
				 <span style="text-decoration: line-through;font-size: 22upx;margin-left: 5upx;">￥299</span>
			</p>
			<view class="title">
				{{goodsData.name}}
			</view>
			<view class="three">
				<span style="width: 40vw;">邮费:15.00</span>
				<span style="width: 40vw;">销量 403</span>
				<span >西安</span>
			</view>
		</view>
		<!-- 服务-规则选择 -->
		<view class="info-box spec">
			<view class="row" @tap="showService">
				<view class="text">服务</view>
				<view class="arrow"><view class="icon xiangyou"></view></view>
			</view>
			<view class="row" @tap="showSpec(false)">
				<view v-if="selectSpec||selectGoods" class="text">
					已选择 {{goodsData.goodsType[selectGoods]}} {{selectSpec?goodsData.spec[selectSpec]:''}}
				</view>			
				<view class="text" v-else>
					<div>
						规格 <span style="color: #333333;padding-left: 8upx;"> 选择 颜色分类,尺码</span> 
					</div>						
					<view class="mini">
						<view class="sp">
							<view v-for="(item,index) in goodsData.spec":key="index">{{item}}</view>
							<view>共{{goodsData.spec.length}}种尺码可选</view>
						</view>
					</view>
				</view>
				<view class="arrow"><view class="icon xiangyou"></view></view>
			</view>
		</view>
		<!-- 评价 -->
		<view class="info-box comments" id="comments">
			<view class="row">
				<view class="text">商品评价({{goodsData.comment.number}})</view>
				<view class="arrow">
					<view class="show" @tap="showComments(goodsData.id)">
						查看全部
						<view class="icon xiangyou"></view>
					</view>
				</view>
			</view>
			<view class="comment">
				<view class="user-info">
					<view class="face"><image :src="goodsData.comment.userface"></image></view>
					<view class="username">{{goodsData.comment.username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment.content}}
				</view>
			</view>
		</view>
		<!-- 详情 -->
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content"><rich-text :nodes="descriptionStr"></rich-text></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//控制渐变标题栏的参数
			beforeHeaderzIndex: 11,//层级
			afterHeaderzIndex: 10,//层级
			beforeHeaderOpacity: 1,//不透明度
			afterHeaderOpacity: 0,//不透明度
			//是否显示返回按钮
			// #ifndef MP
			showBack:true,
			// #endif
			
			
			
			//轮播主图数据
			swiperList: [
				{ id: 1, img: 'https://s2.ax1x.com/2019/03/28/AdOfUJ.jpg' },
				{ id: 2, img: 'https://s2.ax1x.com/2019/03/28/AdOWE4.jpg' },
				{ id: 3, img: 'https://s2.ax1x.com/2019/03/28/AdO2bF.jpg' },
				{ id: 4, img: 'https://s2.ax1x.com/2019/03/28/AdOh59.jpg' }
			],
			//轮播图下标
			currentSwiper: 0,
			anchorlist:[],//导航条锚点
			selectAnchor:0,//选中锚点
			serviceClass: '',//服务弹窗css类，控制开关动画
			specClass: '',//规格弹窗css类，控制开关动画
			shareClass:'',//分享弹窗css类，控制开关动画
			// 商品信息
			goodsData:{
				id:111,
				name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
				price:"127.00",
				number:1,
				service:[
					{name:"正品保证",description:"此商品官方保证为正品"},
					{name:"极速退款",description:"此商品享受退货极速退款服务"},
					{name:"7天退换",description:"此商品享受7天无理由退换服务"}
				],
				spec:["XS","S","M","L","XL","XXL"],
				goodsType:["玫瑰金色链子粉晶拼珍珠","彩虹珠子草编森女手串","链子","特价散珠*1","波罗的海银色手镯"],
				comment:{
					number:102,
					userface:'../../static/img/face.jpg',
					username:'大黑哥',
					content:'很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
				}
				
			},
			selectSpec:null,//选中规格
			selectGoods:null,//选中商品类型
			isKeep:false,//收藏
			//商品描述html
			descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOogx.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOHKK.jpg"/><img width="100%" src="https://s2.ax1x.com/2019/03/28/AdOTv6.jpg"/></div>'
		};
	},
	onLoad(option) {
		// #ifdef MP
		//小程序隐藏返回按钮
		this.showBack = false;
		// #endif
		//option为object类型，会序列化上个页面传递的参数
		this.goodsData.name =option.name;
		this.goodsData.price = option.price;
		console.log(option); //打印出上个页面传递的参数。
	},
	onReady(){
		this.calcAnchor();//计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
	},
	onPageScroll(e) {
		//锚点切换
		this.selectAnchor = e.scrollTop>=this.anchorlist[2].top?2:e.scrollTop>=this.anchorlist[1].top?1:0;
		//导航栏渐变
		let tmpY = 375;
		e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
		this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
		this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
		//切换层级
		this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
		this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		uni.showToast({ title: '触发上拉加载' });
	},
	mounted () {
		
	},
	methods: {
		toSwiper(item){
			let arr = [];
			this.swiperList.forEach(item =>{
				arr.push(item.img);
			});
			uni.previewImage({
				urls:arr,
				current: item.img,
				longPressActions: {
				itemList: ['发送给朋友', '保存图片', '收藏'],
				itemColor:['skyblue','green','orange'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}    
				}
			});
		},
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		},
		// 分享
		share(){
			this.shareClass = 'show';
		},
		hideShare(){
			this.shareClass = 'hide';
			setTimeout(() => {
				this.shareClass = 'none';
			}, 150);
		},
		//收藏
		keep(){
			this.isKeep = this.isKeep?false:true;
		},
		checkCart(){
			uni.getStorage({
				key:'cartList',
				success: (res) => {
					let list = res.data;
					let isFind = false;
					for(let i=0;i<list.length;i++){
						let row = list[i];
						if((row.id==this.goodsData.id)&&(row.spec==this.goodsData.spec[this.selectSpec])
						&&(row.type==this.goodsData.goodsType[this.selectGoods]))
						{	//找到商品一样的商品
							list[i].number = list[i].number+this.goodsData.number;//数量自增
							isFind = true;//找到一样的商品  bug商品Id相同 商品分类不同 需要进入下面的新增
							break;//跳出循环
						}
					}
					if(!isFind){
						//没有找到一样的商品，新增一行到购物车商品列表头部
						let goods = {
							id:this.goodsData.id,
							img:this.swiperList[0].img,
							name:this.goodsData.name,
							spec:this.goodsData.spec[this.selectSpec],
							specList:this.goodsData.spec,
							goodsType:this.goodsData.goodsType,
							type:this.goodsData.goodsType[this.selectGoods],
							price:this.goodsData.price,
							number:this.goodsData.number};
						list.unshift(goods);
					}
					uni.setStorage({
						key:'cartList',
						data:list,
						success: (ret) =>{
							uni.showToast({title: "已加入购物车"});//都有了就会跳转
						}
					});
				},
				fail: () => {
					uni.showToast({title: "加入购物车失败",icon:'none'});//都有了就会跳转
				}
			});
		},
		// 加入购物车
		joinCart(){
			let spec = (this.selectSpec==null);
			let goods = (this.selectGoods==null);
			if(!spec&&!goods){
				this.checkCart();
				//uni.showToast({title: "已加入购物车"});//都有了就会跳转
				this.specClass = 'none';
			}else{
				if(goods){					
					uni.showToast({title:'请选择颜色分类',icon:'none' });
					this.specClass = 'show';
				};
				if(spec){					
					uni.showToast({title:'请选择尺码' ,icon:'none' });
					this.specClass = 'show';
				};
			}
		},
		//立即购买
		buy(){
			let spec = (this.selectSpec==null);
			let goods = (this.selectGoods==null);
			 if(!spec&&!goods){
				this.toConfirmation();
			 }else{
				if(goods){					
					uni.showToast({title:'请选择颜色分类',icon:'none' });
					this.specClass = 'show';
				};
				if(spec){					
					uni.showToast({title:'请选择尺码' ,icon:'none' });
					this.specClass = 'show';
				};
			 }
			
		},
		//跳转确认订单页面
		toConfirmation(){
			let tmpList=[];
			let goods = {id:this.goodsData.id,img:'../../static/img/goods/p1.jpg',name:this.goodsData.name,type:this.goodsData.goodsType[this.selectGoods],spec:this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};
			tmpList.push(goods);
			uni.setStorage({
				key:'buylist',
				data:tmpList,
				success: () => {
					uni.navigateTo({
						url:'../../pages/order/confirmation'
					});
				}
			})
		},
		//跳转评论列表
		showComments(goodsid){
			uni.navigateTo({
				url:'./discuss'
			});
		},
		//选择规格
		setSelectSpec(index){
			this.selectSpec = index;
		},
		//选择类别
		selectgoods(index){
			this.selectGoods = index;
		},
		//减少数量
		sub(){
			if(this.goodsData.number<=1){
				return;
			}
			this.goodsData.number--;
		},
		//增加数量
		add(){
			this.goodsData.number++;
		},
		//跳转锚点
		toAnchor(index){
			console.log(index);
			this.selectAnchor = index;
			uni.pageScrollTo({scrollTop: this.anchorlist[index].top,duration: 200});
		},
		//计算锚点高度
		calcAnchor(){
			this.anchorlist=[
				{name:'主图',top:0},
				{name:'评价',top:0},
				{name:'详情',top:0}
			]
			let commentsView = uni.createSelectorQuery().select("#comments");
			commentsView.boundingClientRect((data) => {
				let statusbarHeight = 0;
				//APP内还要计算状态栏高度
				// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
				// #endif
				let headerHeight = uni.upx2px(100);
				this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
				this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;
				
			}).exec();
		},
		//返回上一页
		back() {
			uni.navigateBack();
		},
		//服务弹窗
		showService() {
			console.log('show');
			this.serviceClass = 'show';
		},
		//关闭服务弹窗
		hideService() {
			this.serviceClass = 'hide';
			setTimeout(() => {
				this.serviceClass = 'none';
			}, 200);
		},
		//规格弹窗
		showSpec(fun) {
			console.log('show');
			this.specClass = 'show';
			this.specCallback = fun;
		},
		specCallback(){
			return;
		},
		//关闭规格弹窗
		hideSpec() {
			this.specClass = 'hide';
			//回调
			this.selectSpec&&this.specCallback&&this.specCallback();
			this.specCallback = false;
			setTimeout(() => {
				this.specClass = 'none';
			}, 200);
		},
		discard() {
			//丢弃
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
%flexs{
	display: flex;
	justify-content: center;
	align-items: center;
}
%jb{
	height: 80upx;
	padding: 0 40upx;
	color: #fff;
	display: flex;
	align-items: center;
	font-size: 28upx;
}
@keyframes showPopup {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes hidePopup {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0);
		}
	}
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,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')
		format('woff2');
}
.icon {
	font-family: 'HMfont-home' !important;
	font-size: 26upx;
	font-style: normal;
	&.fenxiang {
		&:before {
			content: '\e642';
		}
	}
	&.xiangqian {
		&:before {
			content: '\e634';
		}
	}
	&.xiangyou {
		&:before {
			content: '\e637';
		}
	}
	&.shoucangsel {
		&:before {
			content: '\e62c';
		}
	}
	&.shoucang {
		&:before {
			content: '\e62e';
		}
	}
	&.tongzhi {
		&:before {
			content: '\e729';
		}
	}
	&.kefu {
		&:before {
			content: '\e61e';
		}
	}
	&.cart {
		&:before {
			content: '\e614';
		}
	}
	&.jia {
		&:before{content:"\e641";}
	}
	&.jian {
		&:before{content:"\e643";}
	}
}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
	background-color: #f1f1f1;
}
.header {
	width: 100%;

	height: 100upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.before,
	.after {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
		/*  #endif  */

		.back {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			.icon {
				margin-left: -10%;
				width: 60upx;
				height: 60upx;
				@extend %flexs;
				font-size: 42upx;
			}
		}
		.middle {
			width: 100%;
		}
		.icon-btn {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon {
				&:first-child{
					margin-right: 5upx;
				}
				width: 60upx;
				height: 60upx;
				@extend %flexs;
				font-size: 42upx;
			}
		}
	}
	.before {
		.back {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
			}
		}
		.icon-btn {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
				
			}
		}
	}
	.after {
		background-color: #f1f1f1;
		.back {
			.icon {
				color: #666;
			}
		}
		.icon-btn {
			.icon {
				color: #666;
			}
		}
		.middle {
			font-size: 32upx;
			height: 90upx;
			@extend %flexs;
			view {
				padding: 0 3%;
				margin: 0 3%;
				@extend %flexs;
				&.on {
					margin-bottom: -4upx;
					color: #f47952;
					border-bottom: solid 4upx #f47952;
				}
			}
		}
	}
}
.swiper-box {
	position: relative;
	width: 100%;
	height: 100vw;
	swiper {
		width: 100%;
		height: 100vw;
		swiper-item {
			image {
				width: 100%;
				height: 100vw;
			}
		}
	}
	.indicator{
		@extend %flexs;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
.info-box {
	width: 92%;
	padding: 20upx 4%;
	background-color: #fff;
	margin-bottom: 20upx;
}

.goods-info {
	.price {
		font-size: 46upx;
		font-weight: 600;
		color: #f47925;
		padding: 10upx 0;
	}
	.title {
		font-size: 30upx;
		padding: 10upx 0;
	}
}
.three{
	display: flex;
	justify-content: space-between;
	font-size: 24upx;
	color: #C0C0C0;
	padding: 10upx 0;
}
.spec {
	.row {
		width: 100%;
		display: flex;
		align-items: flex-start;
		margin: 0 0 30upx 0;
		.text {
			font-size: 24upx;
			color: #a2a2a2;
			margin-right: 20upx;
		}
		.content {
			font-size: 28upx;
			display: flex;
			flex-wrap: wrap;
			.serviceitem{
				margin-right: 10upx;
			}
			// .sp {
			// 	width: 100%;
			// 	display: flex;
			// 	view {
			// 		background-color: #f6f6f6;
			// 		padding: 5upx 10upx;
			// 		color: #999;
			// 		margin-right: 10upx;
			// 		font-size: 20upx;
			// 		border-radius: 5upx;
			// 		&.on{
			// 			border: solid 1upx #f47952;
			// 			padding: 4upx 8upx;
			// 		}
			// 	}
			// }
			
		}
		.arrow {
			position: absolute;
			right: 4%;
			.icon {
				color: #ccc;
			}
		}
	}
}
.comments {
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 30upx;
		}
		.arrow {
			font-size: 28upx;
			position: absolute;
			right: 4%;
			color: #17e6a1;
			.show {
				display: flex;
				align-items: center;
				.icon {
					color: #17e6a1;
				}
			}
		}
	}
	.comment {
		width: 100%;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			.username {
				font-size: 24upx;
				color: #999;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
}
.description {
	.title {
		width: 100%;
		height: 80upx;
		@extend %flexs;
		font-size: 26upx;
		color: #999;
	}
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 92%;
	padding: 0 4%;
	height: 99upx;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.icons {
		display: flex;
		height: 80upx;
		margin-left: -4%;
		.box {
			width: 80upx;
			height: 80upx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.icon {
				font-size: 40upx;
				color: #828282;
			}
			.text {
				display: flex;
				justify-content: center;
				width: 100%;
				font-size: 22upx;
				color: #666;
			}
		}
	}
	.btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
		.joinCart,
		.buy {
			@extend %jb;
		}
		.joinCart {
			background-color: #f0b46c;
		}
		.buy {
			background-color: #8bbce7;
		}
	}
}
.popup {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	display: none;
	.mask{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 21;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.layer {
		position: fixed;
		z-index: 22;
		bottom: -70%;
		width: 92%;
		padding: 0 4%;
		height: 70%;
		border-radius: 10upx 10upx 0 0;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		.content {
			width: 100%;
			padding: 20upx 0;
		}
		.num{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.btn {
			margin: 6upx 0;
			height: 80upx;
			width: 100%;
			border-radius: 40upx;
			overflow: hidden;
			display: flex;
			.joinCart,
			.buy {
				width: 51%;
				height: 80upx;
				// padding: 0 40upx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
			}
			.joinCart {
				background-color: #f0b46c;
			}
			.buy {
				background-color: #8bbce7;
			}
		}
	}
	
	&.show {
		display: block;
		.mask{
			animation: showPopup 0.2s linear both;
		}
		.layer {
			animation: showLayer 0.2s linear both;
		}
	}
	&.hide {
		display: block;
		.mask{
			animation: hidePopup 0.2s linear both;
		}
		
		.layer {
			animation: hideLayer 0.2s linear both;
		}
	}
	&.none {
		display: none;
	}
	&.service {
		.row {
			margin: 30upx 0;
			.title {
				font-size: 30upx;
				margin: 10upx 0;
			}
			.description {
				font-size: 28upx;
				color: #999;
			}
		}
	}
	&.spec {
		font-size: 28upx;
		.title {
			font-size: 30upx;
			margin: 30upx 0;
		}
		.sp {
			padding: 10rpx 0;
			display: flex;
			flex-wrap: wrap;
			view {
				font-size: 28upx;
				padding: 10upx;
				border-radius: 10upx;
				margin:10upx 10upx 10upx 0;
				box-sizing: border-box;
				background-color: #f6f6f6;
				&.on {
					padding: 10upx;
					margin:8upx 8upx 8upx -2upx;
					border: solid 1upx #f47925;
				}
			}
		}
		
	}
}
	.input{
		width: 80upx;
		height: 60upx;
		margin: 0 10upx;
		background-color: #f3f3f3;
		@extend %flexs;
		text-align: center;
		input{
			width: 80upx;
			height: 60upx;
			@extend %flexs;
			text-align: center;
			font-size: 26upx;
		}
	}
	
	.sub ,.add{
		width: 60upx;
		height: 60upx;
		background-color: #f3f3f3;
		border-radius: 5upx;
		.icon{
			font-size: 30upx;
			width: 60upx;
			height: 60upx;
			@extend %flexs;
			
		}
	}
.share{
	display: none;
	&.show {
		display: block;
		.mask{
			animation: showPopup 0.15s linear both;
		}
		.layer {
			animation: showLayer 0.15s linear both;
		}
	}
	&.hide {
		display: block;
		.mask{
			animation: hidePopup 0.15s linear both;
		}
		
		.layer {
			animation: hideLayer 0.15s linear both;
		}
	}
	&.none {
		display: none;
	}
	.mask{
		background-color: rgba(0,0,0,.5);
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		z-index: 11;
	}
	.layer{
		width: 92%;
		position: fixed;
		z-index: 12;
		padding: 0 4%;
		top: 100%;
		background-color: rgba(255,255,255,0.9);
		.list{
			width: 100%;
			display: flex;
			padding:10upx 0 30upx 0;
			.box{
				width: 25%;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				image{
					width: 13.8vw;
					height: 13.8vw;
				}
				.title{
					margin-top: 10upx;
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 26upx;
				}
			}
		}
		.btn{
			width: 100%;
			height: 100upx;
			@extend %flexs;
			font-size: 28upx;
			border-top: solid 1upx #666666;
		}
		.h1{
			width: 100%;
			height: 80upx;
			@extend %flexs;
			font-size: 34upx;
		}
	}
}
	.cartContent{
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		.price{
			font-weight: 700;
			color: orange;
			padding-top: 20upx;
			font-size: 28upx;
			padding-left: 10upx;
		}
		.cartImg{
			width: 150upx;
			height: 150upx;
			position: relative;
			top: -25px;
			border: 2px solid white;
			border-radius: 5px;
		}
		.save{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			width: 80%;
		}
	}
.line{
	border-top: 1px solid #f6f6f6;
	padding-top: 15upx;
}
.mini{
	.sp {
		padding: 10rpx 0;
		display: flex;
		flex-wrap: wrap;
		view {
			font-size: 28upx;
			padding: 10upx;
			border-radius: 10upx;
			margin:10upx 10upx 10upx 0;
			box-sizing: border-box;
			background-color: #f6f6f6;
			&.on {
				padding: 10upx;
				margin:8upx 8upx 8upx -2upx;
				border: solid 1upx #f47925;
			}
		}
	}
}
</style>
