<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					收件人
				</view>
				<view class="input">
					<input placeholder="请输入收件人姓名" type="text" v-model="address.name" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电话号码
				</view>
				<view class="input">
					<input placeholder="请输入收件人电话号码" type="text" v-model="address.phone" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					所在地区
				</view>
				<view class="input" @tap="chooseCity">
					{{region.label}}
				</view>
				
			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="address.detail" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					设置默认地址
				</view>
				<view class="input switch">
					<switch color="#8bbce7" :checked="isDefault" @change="isDefaultChange" />
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="circleBtn">
				保存地址
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	    <y-loading id="y-loading" class="y-loading"></y-loading>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				editId:0,
				editType:'edit',
				address:{
					name:'',
					phone:'',
					detail:'',
				},
				isDefault:false,
				cityPickerValue: [0, 0, 1],
				themeColor: '#007AFF',
				region:{label:"请点击选择地址",value:[],cityCode:""}
			};
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			chooseCity() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.region = e;
				this.cityPickerValue = e.value;
			},
			isDefaultChange(e){
				this.isDefault = e.detail.value;
			},
			save(){
				if(this.editType=='edit'){
					this.address.id = this.editId;
				}
				if(!this.address.name){
					uni.showToast({title:'请输入收件人姓名',icon:'none'});
					return ;
				}
				if(!this.address.phone){
					uni.showToast({title:'请输入收件人电话号码',icon:'none'});
					return ;
				}
				if(!this.address.detail){
					uni.showToast({title:'请输入收件人详细地址',icon:'none'});
					return ;
				}
				if(this.region.value.length==0){
					uni.showToast({title:'请选择收件地址',icon:'none'});
					return ;
				}
				uni.showLoading({
					title:'正在提交'
				});
				let extend = {
					prov:this.region.value[0],
					city:this.region.value[1],
					area:this.region.value[2],
					isDefault:this.isDefault?1:0,
					cityPickerValue:this.region.label
				}
				let list = Object.assign({},this.address,extend);
				let url = this.editType=='add'?'EShop/addAddress':'EShop/modifyAddress';
				this.$postRequest({
					url: url,
					data: list,
					allSuccess: res => {
						uni.hideLoading();
						uni.showToast({							
							title:'保存成功',
							icon:'success',
							duration:2500
						});
						let pages = getCurrentPages();//所有页面栈的数组
						let Page = pages[pages.length - 1];//当前页
						 if(pages.length > 1){ //说明有上一页存在
						   //上一个页面实例对象
						  let prePage = pages[pages.length - 2];
						   //关键在这里，调用上一页的函数
						   prePage.$vm.getAddressList();
						 }
						 
						uni.navigateBack({
							delta: 1
						});
					},
					allError:() =>{
						uni.hideLoading();
					}
				});
							
			}
		},
		onLoad(e) {
			//获取传递过来的参数
			
			this.editType = e.type;
			if(e.type=='edit'){
				let list = JSON.parse(e.list);
				this.editId = list.id;
				this.address = {
					phone:list.phone,
					name:list.name,
					detail:list.detail
				};
				this.isDefault = list.isDefault==1?true:false;//待修
				this.cityPickerValue = [list.prov,list.city,list.area];
				this.region.label = list.cityPickerValue;
				this.region.value[0] = list.prov;
				this.region.value[1] = list.city;
				this.region.value[2] = list.area;
			}
			
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	};
</script>
<style lang="scss">

.save{
		view{
			display: flex;
		}
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		view{
			display: flex;
		}
		.row{
			width: 94%;
			
			margin: 0 3%;
			border-top: solid 1upx #eee;
			.nominal{
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}
			.input{
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;
				&.switch{
					justify-content: flex-end;
				}
				.textarea{
					margin: 20upx 0;
					min-height: 120upx;
				}
			}
		}
	}
	
</style>
