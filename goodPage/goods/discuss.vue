<template>
	
	<view>
		
		<view class="comment">
			<view class="user-info">
				<view class="face"><image :src="goodsData.comment.userface"></image></view>
				<view class="username">{{goodsData.comment.username}}</view>
			</view>
			<view class="content">
				{{goodsData.comment.content}}
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
	
</template>

<script>

export default {
	name: 'discuss',
	components:{//组件模板
	},
	props:{//组件道具（参数）
		/* ****属性用法*****
		 * 
		 * 传递类型 type: Array | Number | String | Object
		 * 为必传 required: true
		 * 默认值 default: ''
		 * 
		 */
	},
    data () {//数据
        return {
        	goodsData:{
				comment:{
					number:102,
					userface:'../../static/img/face.jpg',
					username:'大黑哥',
					content:'很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
				}
			}
        }
    },
    methods: {//方法
    	
    },
    computed: {//计算属性
        	
    },
    watch: {//监测数据变化
    	
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	
	},
	destroyed(){//Vue 实例销毁后调用
		
	}
	
}
</script>

<style  lang="scss">
page {
	background-color: #f8f8f8;
}
.comment {
		width: 100%;
		margin: 10rpx 0;
		padding: 10upx;
		background: white;
		border-radius: 10rpx;
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
			margin: 10upx 20upx 0 20upx;
			font-size: 26upx;
		}
	}
</style>
