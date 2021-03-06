import apiList from './apiList'   //  引入apiList.js文件

const apiRequest = (url, method, data, header) => {     //接收所需要的参数，如果不够还可以自己自定义参数
  let promise = new Promise(function (resolve, reject) {
    uni.request({
      url: url,
      data: data ? data : null,
      method: method,
      header: header ? header : { 'content-type':'application/json'}, //application/json
      success: function (res) {
        //接口调用成功
        resolve(res);    //根据业务需要resolve接口返回的json的数据
      },
      fail: function (res) {
        // fail调用接口失败
        reject({ errormsg: res, code: -1 });
      }
    })
  });
  return promise;  //注意，这里返回的是promise对象
}

//登录接口的调用
let login = (data)=>{
  return new Promise((resolve, reject) => {
    resolve (apiRequest(apiList.login, 'POST', data))
  })
}
//注册接口的调用
let getMyInfo= (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(apiList.getMyInfo, 'POST', data))
  })
}

//最后需要将具体调用的函数暴露出，给具体业务调用
//在需要的地方引入
// import api from '../../common/api/request.js'
// 				api.getMyInfo().then(res =>{
// 					console.log(res)
// 				});

export default {
  login: login,
  getMyInfo: getMyInfo
}
