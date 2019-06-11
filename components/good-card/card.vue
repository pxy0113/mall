<template>	
	<view class="popup spec" :class="specClass" ><!--@tap="hideSpec"-->
			<view class="mask" @tap="hideSpec(0)"></view>
			<view class="layer">
				<view class="content">
					<view class="cartContent">
						<img src="https://s2.ax1x.com/2019/03/28/AdOfUJ.jpg" alt="" 
						class="cartImg">
						<div class="save">
							<div>
								<p class="price">{{goodsData.price}}</p>
								<p style="font-size: 25rpx;color: #C0C0C0;padding-left: 10upx;">库存 555 件</p>
							</div>							
							<icon type="clear" size="20" @tap="hideSpec(0)"></icon>
						</div>
					</view>
					<view class="line">尺码</view>
					<view class="sp">
						<view v-for="(item,sidx) in goodsData.specList" :class="[sidx==goodsData.spec?'on':'']" @tap.stop.prevent="setSelectSpec(sidx)" :key="sidx">{{item}}</view>
					</view>
					<view>颜色分类</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.goodsType" :class="[index==goodsData.type?'on':'']" @tap.stop.prevent="selectgoods(index)" :key="index">{{item}}</view>
					</view>
					<view class="num line">
						<view>购买数量</view>
						<view style="font-size: 28rpx;margin-top: 5rpx;">
							<uni-number-box @change="changeNum($event)" v-model="goodsData.number" :max="200" :min="1"></uni-number-box>
						</view>
					</view>
					
				</view>
				<view class="btn" v-if="place==1">
					<view class="joinCart" @tap.stop.prevent="cartBtnFun(1)">加入购物车</view>
					<view class="buy" @tap.stop.prevent="cartBtnFun(2)">立即购买</view>
				</view>
				<view class="btn" v-if="place==2">
					<view class="ok" @tap.stop.prevent="cartBtnFun(3)">确定</view>
				</view>
			</view>
		</view>
</template>

<script>
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
export default {
	name: 'card',
	components:{//组件模板
	uniNumberBox
	},
	props:{//组件道具（参数）
		/* ****属性用法*****
		 * 
		 * 传递类型 type: Array | Number | String | Object
		 * 为必传 required: true
		 * 默认值 default: ''
		 * 
		 */
		list:{
			type:Object,
			default:()=>{{}}
		},
		place:{
			type:String,
			default:'1'
		}
	},
    data () {//数据
        return {
        	specClass:'show',
			goodsData:{}
        }
    },
	onShow: () => {

	},
    methods: {//方法
		changeNum(value){//改变数字
			this.goodsData.number= value;
			console.log(this.goodsData);
		},
		hideSpec(type) {
			this.specClass = 'hide';
			setTimeout(() => {
				this.specClass = 'none';
			}, 200);
			this.$emit('emitData',this.goodsData,type);
		},
    	//选择规格
    	setSelectSpec(index){
			if(index==this.goodsData.spec){
				this.goodsData.spec=null;
			}else{
				this.goodsData.spec = index;
			}
    		
    	},
    	//选择类别
    	selectgoods(index){
			if(index==this.goodsData.type){
				this.goodsData.type=null;
			}else{
				this.goodsData.type = index;
			}
    	},
		cartBtnFun(type){//加入购物车1，立即购买2，确定提交3
			let spec = (this.goodsData.spec==null);
			let goods = (this.goodsData.type==null);
			if(!spec&&!goods){
				this.hideSpec(type);
				// this.$emit('emitData',this.goodsData,type);
			}else{
				goods&&uni.showToast({title:'请选择颜色分类',icon:'none' });
				spec&&uni.showToast({title:'请选择尺码' ,icon:'none' });
			}
		}
    },
    computed: {//计算属性
        	
    },
    watch: {//监测数据变化
    	list:{
			handler:function(newValue,old){
				this.goodsData = JSON.parse(JSON.stringify(newValue));
				this.specClass = 'show'
			},
			immediate:true
		}
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	
	},

	
}
</script>

<style lang="scss">
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
			.buy,
			.ok {
				height: 80upx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
			}
			.joinCart {
				width: 51%;
				background-color: #f0b46c;
			}
			.buy {
				width: 51%;
				background-color: #8bbce7;
			}
			.ok{
				width: 102%;
				background-color: #f0b46c;
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
				border: 1upx solid #f6f6f6;
				background-color: #f6f6f6;
				&.on {
					border: 1upx solid #f47925;
				}
			}
		}
		
	}
}
</style>
