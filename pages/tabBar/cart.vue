 <template>
	<view>
		<view class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<!-- <view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="title">购物车</view>
		</view> -->
		<!-- 占位 -->
<!-- 		<view class="place"></view> -->
		<!-- 商品列表 -->
		<view class="goods-list">
			<view style="position: relative;">
				<y-prompt id="y-prompt"  @btnClick=""></y-prompt>
			</view>
            <view class="goods-info" v-for="(row,index) in cartList" :key="index" >
				<view class="content">				
					<view class="goods-body">
						<view class="left">
							<view class="checkbox-box1" @tap="selected(index)">
								<view class="checkbox1">
									<view :class="[row.selected?'on':'']"></view>
								</view>
							</view>
							<image :src="row.img" ></image>
						</view>
						
						<view class="right">
							<p class="Gtitle">{{row.name}}</p>
							<p class="Gspec" @tap="toShowType(row)">{{row.goodsType[row.type]}} {{row.specList[row.spec]}}</icon></p>
							<p style="font-size: 24upx;color: #EB4D3D;">当前库存已不足</p>
							<p style="font-size: 24upx;color: #EB4D3D;">当前库存已不足</p>							
							<view class="price-number">
								<view class="price">￥{{row.price}}</view>
								<uni-number-box @change="changeNumber($event,row)" v-model="row.number" :max="200" :min="1"></uni-number-box>
							</view>
						</view>
					</view>	
				</view>

			</view>

        </view>

		
		<!-- 脚部菜单 -->
		<view class="footer" :style="{bottom:footerbottom}">
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			<view class="defaultBtn delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view>
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{sumPrice}}</view></view>
				<view class="btn" @tap="toConfirmation">结算({{selectedList.length}})</view>
			</view>
		</view>
		<card ref="card" :list="editData" :place="2" v-if="showCard" @emitData="updateData"></card>
	</view>
</template>

<script>
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
import card from '@/components/good-card/card.vue'
import {  
	mapState,  
	mapActions  
} from 'vuex';  
	export default {
		components:{uniNumberBox,card},
		data() {
			return {
				buySuccess:false,
				showCard:false,
				editData:{
					specList:[],
					goodsType:[],
					spec:'',
					type:''
				},
				showType:'',//控制显示弹窗
				sumPrice:'0.00',
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				selectedList:[],
				isAllselected:false,
				goodsList:[]
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
				console.log('下拉再次请求购物车');
				uni.getStorage({
					key:'cartList',
					success: (res) => {
						this.goodsList = res.data;
					},
					fail: (err) => {
						this.goodsList = [];
					}
				});
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onLoad(option) {
			//兼容H5下结算条位置
			// #ifdef H5
				this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight+'px';
			// #endif
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			console.log('第一次load的时候请求购物车列表并且存入cartList')

					let arr = [{
						id:10,
						img:'../../static/img/goods/p1.jpg',
						name:'蝴蝶结丝绒长袖吊带连衣裙欧美复古',
						type:2,
						spec:1,
						specList:["XS","S","M","L","XL","XXL"],
						goodsType:["粉紫","樱桃红","湖水蓝"],
						price:127.5,
						number:1,
						// selected:false,
					},
					{
						id:22,
						img:'../../static/img/goods/p2.jpg',
						name:'森系少女复古手链手环网红Ins',
						type:4,
						spec:1,
						specList:["XS","S","M","L","XL","XXL"],
						goodsType:["玫瑰金色链子粉晶拼珍珠","彩虹珠子草编森女手串","链子","特价散珠*1","波罗的海银色手镯"],
						price:127.5,
						number:1,
						// selected:false,
					},
					{
						id:33,
						img:'../../static/img/goods/p3.jpg',
						name:'阳澄湖精品大闸蟹',
						type:0,
						spec:1,
						specList:["500g","250g","1kg"],
						goodsType:["公蟹",'母蟹','公母各半'],
						price:127.5,
						number:1,
						// selected:false,
					}];
				this.setCart(arr);
		},
		
		onShow() {
			this.$yPrompt().hide();
			if(this.cartList.length>0){//待改进
				this.isAllselected = this.selectedList.length == this.cartList.length;
			}else{
				this.isAllselected = false;
				this.$yPrompt().show({
					title: '购物车还没有东西哦',
					msg: '赶快去逛逛吧'
				});
			}
			this.sum();
		},
		computed:{
			...mapState(['cartList']) 
		},
		watch:{
			cartList:{
				handler(newV,oldV){
					this.sum();
				},
				deep:true
			},
			goodsList:{
				handler(newV,oldV){
					this.sum();
					uni.setStorage({
						key:'cartList',
						data:newV
					});
				},
				deep:true
			}
		},
		methods: {
			 ...mapActions(['setCart']),
			
			successPay(){//下订单成功后
				uni.getStorage({
					key:'paymentOrder',
					success: (res) => {
						res.data.forEach(item =>{
							this.cartList.forEach((buy,index) =>{
								if((buy.id==item.id)&&(buy.spec==item.spec)&&(buy.type==item.type)){
										this.cartList.splice(index,1);
								}
							});
						});
						this.selectedList = [];
					}
				})
			},
			updateData(data,type){
				if(type==3){
					this.cartList.forEach((item,index) =>{
						if(item.id == data.id){
							this.cartList.splice(index,1,data);
						}
					});
					console.log(this.$store.state.cartList);
				}
				
			},
			toShowType(row){
				this.showCard = true;
				this.editData = JSON.parse(JSON.stringify(row));
				
			},
			changeNumber(value,row){//改变数字
				row.number = value;
			},
			//加入商品 参数 goods:商品数据
			joinGoods(goods){
				/*
				* 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
				* 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
				* 一般商城购物车的增删改动作是由后端来完成的,
				* 后端记录后返回前端更新前端缓存
				*/
				let len = this.goodsList.length;
				let isFind = false;//是否找到ID一样的商品
				for(let i=0;i<len;i++){
					let row = this.goodsList[i];
					if(row.id==goods.id )
					{	//找到商品一样的商品
						this.goodsList[i].number++;//数量自增
						isFind = true;//找到一样的商品
						break;//跳出循环
					}
				}
				if(!isFind){
					//没有找到一样的商品，新增一行到购物车商品列表头部
					this.goodsList[i].unshift(goods);
				}
			},

			//商品跳转
			toGoods(e){
				uni.showToast({title: '商品'+e.id,icon:"none"});
				uni.navigateTo({
					url: '../../goodPage/goods/goods' 
				});
			},
			//跳转确认订单页面
			toConfirmation(){
				let tmpList=[];
				let len = this.cartList.length;
				for(let i=0;i<len;i++){
					if(this.cartList[i].selected) {
						tmpList.push(this.cartList[i]);
					}
				}
				if(tmpList.length<1){
					uni.showToast({
						title:'请选择商品结算',
						icon:'none'
					});
					return ;
				}
				uni.setStorage({
					key:'buylist',
					data:tmpList,
					success: () => {
						uni.navigateTo({
							url:'../../pages/order/confirmation'
						})
					}
				});
			},
			//删除商品
			deleteGoods(id){
				let len = this.cartList.length;
				for(let i=0;i<len;i++){
					if(id==this.cartList[i].id){
						this.cartList.splice(i, 1);
						break;
					}
				}
				this.selectedList.splice(this.selectedList.indexOf(id), 1);
				this.sum();
				if(this.cartList.length==0){
					this.$yPrompt().show({
						title: '购物车还没有东西哦',
						msg: '赶快去逛逛吧'
					});
				}
			},
			// 删除商品s
			deleteList(){
				let len = this.selectedList.length;
				while (this.selectedList.length>0)
				{
					this.deleteGoods(this.selectedList[0]);
				}
				this.selectedList = [];
				this.isAllselected = this.selectedList.length == this.cartList.length && this.cartList.length>0;
				this.sum();
			},
			// 选中商品
			selected(index){
				this.cartList[index].selected = this.cartList[index].selected?false:true;
				let i = this.selectedList.indexOf(this.cartList[index].id);//这里是判断id 所以相同id不同尺寸的会计算错误 导致结算数量错误
				i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.cartList[index].id);
				this.isAllselected = this.selectedList.length == this.cartList.length;
				this.sum();
			},
			//全选
			allSelect(){
				let len = this.cartList.length;
				let arr = [];
				for(let i=0;i<len;i++){
					this.cartList[i].selected = this.isAllselected? false : true;
					arr.push(this.cartList[i].id);
				}
				this.selectedList = this.isAllselected?[]:arr;
				this.isAllselected = this.isAllselected||this.cartList.length==0?false : true;
				this.sum();
			},
			// 合计
			sum(e,index){
				this.sumPrice = 0;
				let len = this.cartList.length;
				for(let i=0;i<len;i++){
					if(this.cartList[i].selected) {
						if(e && i==index){
							this.sumPrice = this.sumPrice + (e.detail.value*this.cartList[i].price);
						}else{
							this.sumPrice = this.sumPrice + (this.cartList[i].number*this.cartList[i].price);
						}
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			discard() {
				//丢弃
			}
			
			
		}
	}
</script>
<style lang="scss">
	page{position: relative;}
	@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOEAAsAAAAAB7wAAAM1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDAIJNATYCJAMQCwoABCAFhG0HPhu1BsiOw7jha84s8T+CgOyq6unevTlAeAkRhAhQBjj8eJfmMg/oB5whSgaFspy7AqbpwE3Py3/j9j+X07uGyFHr21lua9HYi9rUCzDeGtBYmw4o0AJJ0BvGLmiJxyEAC3yIQhSVPL9BF4U5TgBi7ChtQzfjQKFYWEdgrFiqEBsxoGurtMfAhuD74g8JQgcNg8ScWjf8xoPz7/nfD8iFpoV0eQi86XQAWwUSiAIUiJGVhgEaUSAKiYXau0kKoKOjwVRthd8PmExIBRvmWH95INCQIIyYqVYAJKGghO/5Dg4B3wtxaPD9QAoS4IOM1gEzYBbAMkT16iIQGPxsopS5ScAcK23LiaBDpzyk1aGLHtsvhVrL7adDD55016wPXnDfcr7T3lcE2TVcP2fNhZM7WeiEhVp44vx9C5vVD6+eEgaLTZvEot3HL1lawlnXLK3XnISDllbWwmrmGjlRLdxq2bpme1RAeqXtzWh6g0F//wCCnRiN2diwr2+Yse3iEs20g05Q5tT0BikOXwKf79vsoEvb6p6xjVhHP92nwDJmX+9hwsf26dXbPiNvZ/98x67/+5T+ev0aWxbXCwOX41zLxia+O73B6Y57fN1u6GvN+Zmbc8XITigTAcB0Rl6X8QB4hDgEpoXypZz2q37D5FVnVa9t1n/dUgHw8uKMq9BmWqjoJoP3zevM+zG8jmVKE5hKpRShw9WTFZW04D7TscAC+B0RcOD9FHLnzqkg0HFOQMMMb5DoBKGKGgUGLEkCIzq5YEEkpastcWQyDYQyByJYBkBgx2nQsOEaSOx4girqOzDgwj8wYickWNAiHLe0JESMsiicTLaQh84PBm6WKlst/TD9hXQV25wWBLQP4jJw435MXD58RynxFDPKT30golBxluAtOI3iOMOcs5Bc2fFF8sPd2OFVBO24WQJ9CmEIG4HwQAb4ARmFS0aK8qoL/cLnXyA0FTE23FBSZf+AYEqCzpF4YojrgN5J004lt/LKFD7RHDAVQYEMh8lIQErAICImJgOZWD0ohHARdhg5wJdzSKxVaXhX6c7y8uQN1wAWmLOU0IQUShiQo0fZTceadqaMdP2uXwEAAAAA') format('woff2');}
	.icon {
		font-family:"HMfont-home" !important;
		font-size:60upx;
		font-style:normal;
		color:#000000;
		&.jia {
			&:before{content:"\e641";}
		}
		&.jian {
			&:before{content:"\e643";}
		}
		&.shanchu {
			&:before{content:"\e6a4";}
		}
		
	}
	.checkbox-box1{
		margin: 11vw 5upx;
		.checkbox1{
			width: 35upx;
			height: 35upx;
			border-radius: 100%;
			border: solid 2upx #8bbce7;
			display: flex;
			justify-content: center;
			align-items: center;
			.on{
				width: 25upx;
				height: 25upx;
				border-radius: 100%;
				background-color: #8bbce7;
			}
		}
		.text{
			font-size: 28upx;
			margin-left: 10upx;
		}
	}
	.checkbox-box{
		display: flex;
		align-items: center;
		.checkbox{
			width: 35upx;
			height: 35upx;
			border-radius: 100%;
			border: solid 2upx #8bbce7;
			display: flex;
			justify-content: center;
			align-items: center;
			.on{
				width: 25upx;
				height: 25upx;
				border-radius: 100%;
				background-color: #8bbce7;
			}
		}
		.text{
			font-size: 28upx;
			margin-left: 10upx;
		}
	}
.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
	}

	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		// background-color: #8bbce7;
		background: linear-gradient(rgba(139,188,231,1),rgba(139,188,231,0.6));
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.title{
			font-size: 36upx;
		}
		
	}
	.place{
		
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.goods-list{
		width: 100%;
		padding: 10upx 0 120upx 0;
		.tis{
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}
		.goods-info{
			margin: 20upx 0;
			background: rgba(139,188,231,0.2);
			.content{
				padding: 10rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.goods-body{
					margin: 0 10upx;
					display: flex;
					justify-content: flex-start;
					.left{
						display: flex;
						flex:1 0 22vw;
						image{
							width: 20vw;
							height:22vw;
							border: 1px solid white;
							border-radius: 7upx;
						}
					}
					.right{
						padding-left:10rpx;
						width:65vw;
					}
				}
			}
		}
	}
	
	.footer{
		width: 96%;
		padding-left:4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		.delBtn{
			border:1upx solid #8bbce7;
			background: #fff;
			color: #8bbce7;
		}
		.settlement{
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.sum{
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				.money{
					font-weight: 600;
				}
			}
			.btn{
				padding: 0 30upx;
				height: 100upx;
				background-color: #8bbce7;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				
				// border-radius: 30upx;
			}
		}
	}	
	.price-number{
		width: 100%;
		bottom: 0upx;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		height: 50upx;
		.uni-numbox{
			height: 50rpx;
		}
		.uni-numbox__minus, .uni-numbox__plus {
		margin:0;
		background-color:#f8f8f8;
		width:50rpx;
		font-size:30rpx;
		height:100%;
		line-height:50rpx;
		text-align:center;
		color:#333;
		position:relative;
		
		}
		.uni-numbox__value {
		position:relative;
		background-color:#ffffff;
		min-width:80rpx;
		line-height:50rpx;
		height:100%;
		text-align:center;
		
		}
		input {
		cursor:auto;
		display:block;
		height:50upx;
		text-overflow:clip;
		//overflow:hidden;
		white-space:nowrap;
		font-family:UICTFontTextStyleBody;
		min-height:50rpx;
		
		}
		.uni-numbox--disabled {
		color:#c0c0c0;
		
		}
		.uni-numbox__minus, .uni-numbox__plus {
		margin:0;
		background-color:#f8f8f8;
		width:50rpx;
		font-size:30rpx;
		height:100%;
		line-height:50rpx;
		text-align:center;
		color:#333;
		position:relative;
		
		}
	}
	.Gtitle{
		width: 100%;
		font-size: 28upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.Gspec{
		font-size: 22upx;
		margin: 8upx 0;
		padding: 8upx 6upx;
		color: #c0c0c0;
		// max-height: 8vw;
		width: 70%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

</style>
