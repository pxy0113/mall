Component({
	
    properties: {
    	
    },
    
	data: {
		
		isShow: false,
		
		param: {
			title: '加载中',
			icon: 'logo'
		},
		
	},
	
	methods: {
		
		show(paramObj={}){
			wx.hideToast();
			let obj = Object.assign({}, this.data.param, paramObj);
			this.setData({
				isShow: true,
				param: obj
			});
			setTimeout(() => {
				if(this.data.isShow){
					this.setData({
						isShow: false
					});
				}
			}, 10000);
		},
		
		hide(){
			this.setData({
				isShow: false
			});
		},
		
	},
	
	lifetimes: {//组件生命周期
		
		created(){//在组件实例刚刚被创建时执行
		
		},
		
		attached(){//在组件实例进入页面节点树时执行
			
		},
		
		ready(){//在组件在视图层布局完成后执行
			
		},
		
		detached(){//在组件实例被从页面节点树移除时执行
			this.setData({
				isShow: false
			});
		},
		
	},
	
});
