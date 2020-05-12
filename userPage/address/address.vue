<template>
	<view>
		<view class="content" style="margin-bottom: 50px;">
			<view class="list" style="position: relative;">
				<view class="row view" v-for="(row,index) in addressList" :key="index" @tap="select(row)">
					<view class="left view">
						<view class="head view">
							A
						</view>
					</view>
					<view class="center view">
						<view class="name-tel view">
							<view class="name view">{{row.name}}</view>
							<view class="tel view">{{row.phone}}</view>
							<view class="default view" v-if="row.isDefault==1">
								默认
							</view>
						</view>
						<view class="address view">
							{{row.cityPickerValue?row.cityPickerValue:''}}
							{{row.detail?row.detail:''}}
						</view>
					</view>
					<view class="right view">
						<view class="icon bianji view" @tap.stop="edit(row)">
						</view>
						<icon type="cancel" @tap.stop="del(row)"></icon>					
					</view>
				</view>
				<view class="row view"></view>
				
				<y-prompt id="y-prompt" class="y-prompt" fix="true"></y-prompt>
			</view>
		</view>
		
		<y-loading id="y-loading"></y-loading>
		<view class="add view">
			<view class="circleBtn" @tap="add">
				<view class="circleBtn-icon tianjia view"></view>新增地址
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				refresh:false,
				isSelect:false,
				addressList:[]
			};
		},
		onShow() {
			
			// uni.getStorage({
			// 	key:'delAddress',
			// 	success: (e) => {
			// 		let len = this.addressList.length;
			// 		if(e.data.hasOwnProperty('id')){
			// 			for(let i=0;i<len;i++){
			// 				if(this.addressList[i].id==e.data.id){
			// 					this.addressList.splice(i,1);
			// 					break;
			// 				}
			// 			}
			// 		}
			// 		uni.removeStorage({
			// 			key:'delAddress'
			// 		})
			// 	}
			// });
			// uni.getStorage({
			// 	key:'saveAddress',
			// 	success: (e) => {
			// 		let len = this.addressList.length;
			// 		if(e.data.hasOwnProperty('id')){
			// 			for(let i=0;i<len;i++){
			// 				if(this.addressList[i].id==e.data.id){
			// 					this.addressList.splice(i,1,e.data);
			// 					break;
			// 				}
			// 			}
			// 		}else{
			// 			let lastid = this.addressList[len-1];
			// 			lastid++;
			// 			e.data.id = lastid;
			// 			this.addressList.push(e.data);
			// 		}
			// 		uni.removeStorage({
			// 			key:'saveAddress'
			// 		})
			// 	}
			// });

		},
		onLoad(e) {
			if(e.type=='select'){
				this.isSelect = true;
			}
			this.getAddressList();
		},
		methods:{
			getAddressList(){
				this.$yLoading().show();
				// this.$yPrompt().hide();
				this.$postRequest({
					url: 'EShop/getAddress',
					allSuccess: res => {
						this.addressList = res.data;
						if(this.addressList.length==0){
							this.$yPrompt().show({
								title: '暂时没有地址',
								msg: '快来添加一个吧'
							});
						}
					},
					allError: () => {
						this.$yPrompt().show({
							title: '加载失败',
							msg: '数据加载失败请重新加载',
							btnTitle: '重新加载',
							isBtn: true,
							btnClick: () => {
								this.getAddressList();
							}
						});
					}
				});
			},
			
			del(row){
				uni.showModal({
					title: '删除提示',
					content: '你将删除这个收货地址',
					success: (res)=>{
						if (res.confirm) {
							this.$postRequest({
								url: 'EShop/delAddress',
								data:{id:row.id},
								isLoad:false,
								allSuccess: res => {
									this.addressList.splice(this.addressList.indexOf(row),1);
								},
								allError: err => {
									uni.showToast({
										title:err.result,
										icon:'none'
									});
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			
			edit(row){

				uni.navigateTo({
					url:"edit/edit?type=edit&&list="+JSON.stringify(row)
				});
		
			},
			add(){
				uni.navigateTo({
					url:"edit/edit?type=add"
				})
			},
			select(row){
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if(!this.isSelect){
					return ;
				}
				uni.setStorage({
					key:'selectAddress',
					data:row,
					success() {
						uni.navigateBack();
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.view{
	display: flex;
}
@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMIAAsAAAAABvwAAAK8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBSIFAATYCJAMMCwgABCAFhG0HVBskBsiusClj9ljNiEIaBdizs389YOCARVDt99mzu+8dMMpzQEn5KEAZRez+yRDbSDIixkYo1tF/+vv5OxYJFk2VghXWbbzzPn8D/OMG3vvXGTU90ZFhOrNJROZwCRGjj/Iry36wAbfSxBsuNGggeG9sMbJKDd7xg8vpr4ACmWdZLnMtGxMwwUD3wCiywi3oDWMXuITzBNpNc4BP3j5/Q1thTQvE1SQiaOd8isKSrUJds7aIVyqt6XECAF6Gj49/sBcUSZVZc09duQng/CfPcXTVrIs+gj+fBWwTGZsghbhcGzurJhgZ1S6rt2fXipDmCv5PyNMltf2HRxJEzSrsBKtIk9wU32WS+E1w14UZ1HFiG+QkJg3ODWmyn5/20eOvTz5LnR6l8aWDT5Sn3wLtYlfNe7RIik/fN961C3Vftf6YZLr5ZMcjU/LExqD9u3LzvKE8KQtBGAp9ilm1XbAK2m83TdlozEvQ0Zbrh8HBMrKDB03MjRwHaJKP2f5jf+NfDvML4f+tHQX8+EJvkwL1z9Mqwfi/kd+zq+hCS5+LynN5piObGRlNaNedmrJc/R7jVUO3agmtOT7zJy32WkjWahGihbQJlQ5bklpT7ENotyG3ucOAjpoobVi3BxB6HSDp9h2yXne0kDSoDPtBrTdQaHc61D07LEezm1Im4wBLc2z6UoaO0bpR8SdHLifNCkPKL+s4CaLX5Skm77hknWNBdxLt9SzEmkqBWXAZ57lgSyVl37YaZqMzt7tWd6OtshTQdYJixLAAKplDTT5RCv3Bplu6/ycWcXJEW+pqrL+YGkuGR14unh7onazsVXcv13RNRPb0mBCqUaKAssDCcjsmUKt+VIr5zJbGiMjIGTfqV+sr21pfUXxALmvCmpMjRY5i9G5CZepynIyYZOr+sksyR2W0UHLiChIrRmXfA0E') format('woff2');}
	.icon {
		font-family:"HMfont-home" !important;
		font-size:60upx;
		font-style:normal;
		color:#000000;
		&.bianji {
			&:before{content:"\e61b";}
		}
		&.tianjia {
			&:before{content:"\e81a";}
		}
	}
	.add{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		justify-content: center;
		align-items: center;
	}
	.list{
		flex-wrap: wrap;
		.row{
			width: 96%;
			padding: 20upx 2%;
			.left{
				width: 90upx;
				flex-shrink: 0;
				align-items: center;
				.head{
					width: 70upx;
					height: 70upx;
					background:linear-gradient(to right,#ccc,#aaa);
					color: #fff;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					font-size: 35upx;
				}
			}
			.center{
				width: 100%;
				flex-wrap: wrap;
				.name-tel{
					width: 100%;
					align-items: baseline;
					.name{
						font-size: 34upx;
					}
					.tel{
						margin-left: 30upx;
						font-size: 24upx;
						color: #777;
					}
					.default{

						font-size: 22upx;
						
						background-color: #8bbce7;
						color: #fff;
						padding: 0 18upx;
						border-radius: 24upx;
						margin-left: 20upx;
					}
				}
				.address{
					width: 100%;
					font-size: 24upx;
					align-items: baseline;
					color: #777;
				}
			}
			.right{
				flex-shrink: 0;
				align-items: center;
				margin-left: 20upx;
				.icon{
					justify-content: center;
					align-items: center;
					width: 80upx;
					height: 60upx;
					border-left: solid 1upx #aaa;
					font-size: 40upx;
					color: #777;
				}
			}
		}
	}
</style>
