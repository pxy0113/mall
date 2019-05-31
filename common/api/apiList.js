let host = 'https://cocbs.cocmis.com/index.php?_url='   // 设置API接口的ip地址和端口

let apiList = {

  login: host +'/ucenter/Index/test_login',     //用户登录的API
  
  getMyInfo: host + '/ucenter/User/myInfo',   //用户注册的API

  //...

}

module.exports = apiList;    //暴露出来