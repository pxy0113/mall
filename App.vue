<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*商品列表样式*/
	.xy-product-list{
		width: 92%;
		padding: 0 4% 3vw 4%; 
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.xy-product{
		width: 48%;
		border-radius: 20upx;
		background-color: #fff;
		margin: 0 0 15upx 0;
		box-shadow: 0upx 5upx 25upx rgba(0,0,0,0.1);
	}
	.xy-product-info{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 92%;
		padding: 10upx 4% 10upx 4%;	
	}
	.xy-product-img{
		width: 100%;
		border-radius: 20upx 20upx 0 0;
	}
	.xy-product-name{
		width: 92%;
		padding: 10upx 4%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-align: justify;
		overflow: hidden;
		font-size: 30upx;
	}
	.xy-product-price{
		color: #e65339;
		font-size: 30upx;
		font-weight: 600;
	}
	.xy-product-slogan{
		color: #807c87;
		font-size: 24upx;
	}
	.xy-loading-text{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	
	/*带圆形边框的按钮*/
	.circleBtn{
		box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.4);
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		background-color: #8bbce7;
		color: #fff;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
	}
	.circleBtn-icon{
		height: 80upx;
		color: #fff;
		font-size: 30upx;
		justify-content: center;
		align-items: center;
	}
	/*二等分原型按钮*/
	.circleBtn-two{
		width: 102%;
		height: 80upx;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
	}
	/*普通按钮*/
	.defaultBtn{
		background-color: #8bbce7;
		padding: 10upx 30upx;
/* 		height: 50upx; */
		color:#FFFFFF;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
