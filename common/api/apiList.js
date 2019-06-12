let host = 'http://120.78.121.164:8080'   // 设置API接口的ip地址和端口

let apiList = {

  login: host +'/EShop/login',     //用户登录的API
  
  getMyInfo: host + '/ucenter/User/myInfo',   //用户注册的API

  //...

}

module.exports = apiList;    //暴露出来