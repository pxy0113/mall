import Vue from 'vue'
import App from './App'
import tools from 'common/tool/toolBox.js'

Vue.config.productionTip = false
Vue.prototype.$tools = tools;//自己的工具类
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()