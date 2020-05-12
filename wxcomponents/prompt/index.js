Component({
	
	externalClasses: ['i-class'],
	
    properties: {
    	
		fix: {//是否固定，需要父级有 relative 或 absolute
			type: Boolean,
			value: false
		},
		
    },
	
	data: {
		
		visible: false,
		
		paramObj: {
			title: '暂无内容',
			msg: '',
			btnTitle: '重新加载',
			isBtn: false
		},
		
	},
	
	methods: {
		
		show(obj={title: '暂无内容',msg: '',btnTitle: '重新加载',isBtn: false}){
			this.setData({
				visible: true,
				paramObj: Object.assign({}, this.data.paramObj, obj)
			});
		},
		
		hide(){
			this.setData({
				visible: false
			});
		},
		
		onPromptClick(){
			if(this.data.paramObj.btnClick){
				this.data.paramObj.btnClick();
				return;
			}
			this.triggerEvent('btnClick');
		},
		
	},
	
});
