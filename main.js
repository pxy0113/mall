import Vue from 'vue'
import App from './App'
import tools from 'common/tool/toolBox.js'
import { postRequest } from 'common/api/requestConfig.js';
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false
Vue.prototype.$tools = tools;//自己的工具类
App.mpType = 'app';
Vue.prototype.$BASIC_URL = 'http://m252t77964.wicp.vip:52923/';//测试地址
Vue.prototype.$postRequest = postRequest;//改版后的请求方法

//全局组件
import { $yLoading, $yPrompt } from 'wxcomponents/index';
Vue.prototype.$yLoading = $yLoading;//加载动画
Vue.prototype.$yPrompt = $yPrompt;//页面提示

//工具
// import { getTimeMinute } from './utils/index.js';
// Vue.prototype.$getTimeMinute = getTimeMinute;//时间戳转字符串插件


const app = new Vue({
    ...App,
	store
})
app.$mount()