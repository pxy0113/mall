/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例 
 微信小程序中 有的情况是A->B页面  改变了B的数据 推出回到A的时候页面不刷新 所以可以用页面栈改变A页面的数据
     //获取页面栈
        var pages = getCurrentPages();//所有页面栈的数组
        var Page = pages[pages.length - 1];//当前页
          if(pages.length > 1){ //说明有上一页存在
            //上一个页面实例对象
            var prePage = pages[pages.length - 2];
            //关键在这里，调用上一页的函数 小程序可以直接用  uni-app需要使用prePage.$vm.changeData(e.detail.value)
            prePage.changeData(e.detail.value)//就可以调用上一页的函数改变了
        }
        
 */
const getCtx = (selector, ctx = getCurrentPages()[getCurrentPages().length - 1]) => {
    const componentCtx = ctx.selectComponent(selector);
    if(!componentCtx){
        console.error('无法找到对应的组件（y）');
    }
    return componentCtx;
}

const $yLoading = (selector = '#y-loading', ctx) => getCtx(selector, ctx);
//搜索组件名叫y-loading的组件  此处组件在page.json/app.json处定义在了globalStyle的usingComponents里
const $yPrompt = (selector = '#y-prompt', ctx) => getCtx(selector, ctx);

export {
    $yLoading,
    $yPrompt
}
