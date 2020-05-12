
import Vue from 'vue';

const vm = new Vue();

import tools from '../tool/toolBox.js'
//异步获取全局变量
const asynGlobal = new Promise(resolve => {
	setTimeout(() => {
		resolve(vm.$BASIC_URL);
	},10);
});
tools.login();
// const asynGlobal = 'http://m252t77964.wicp.vip:52923/';
//判断本地是否存在token  没有就要重新请求
// if(!wx.getStorageSync('token')){
// 	asynGlobal.then(basicsUrl => {
// 		uni.login({
// 			provider: 'weixin',
// 			success: function(loginRes) {
// 				console.log(loginRes.code);
// 				wx.request({//获取sessionid
// 					url: basicsUrl + 'EShop/login',
// 					success: res => {
// 						if(res.data.code == 0){
// 							console.log(res.data)
// 							wx.setStorageSync('token', res.data.token);
// 							wx.setStorageSync('skey', res.data.session_key);
// 						}
// 					}
// 				});
// 			}.bind(this)
// 		});
// 	
// 	});
// }
// 
//设置错误日志
let setErrlog = (_url='', _msg='', _code='', _type='') => {
	let obj = {
		url: _url,
		msg: _msg,
		code: _code,
		type: _type,
		// time: vm.$getTimeMinute(new Date()).longDateSec
	}
	// vm.$store.state.errMsg.push(obj);
}

//改版后的请求方法
export const postRequest = (transmitObj) => {
	
	let TOKEN = wx.getStorageSync('token');//获取sessionid
	
	let PUBLIC_HEADER = {
		'content-type': 'application/json;charset=utf-8',//POST请求必须'application/x-www-form-urlencoded',
	};
	
	// let COOKIE_HEADER = {
	// 	'Cookie': 'PHPSESSID=' + SESSIONID,//请求头设置sessionid
	// };
	
	let defaultParam = {
		url: '',//请求路径
		data: {},//需要发送的数据
		hasToken:true,
		isLoad: true,
		allSuccess: () => {},//完全成功回调
		allError: () => {},//所有错误回调
		success: () => {},//成功回调
		complete: () => {}//接口调用结束的回调函数（调用成功、失败都会执行）
	};
	
	let param = Object.assign({}, defaultParam, transmitObj);
	if(param.hasToken){
		PUBLIC_HEADER.token = TOKEN;
	}	
	let url = vm.$BASIC_URL + param.url;
	
	uni.getNetworkType({
		success: res => {
			if(res.networkType == 'none'){
				if(param.isLoad){
					vm.$yLoading().hide();
				}
				uni.stopPullDownRefresh();//关闭下拉刷新
				param.allError('网络异常');
				param.complete('网络异常');
				uni.showToast({
					title: '网络异常，请检查您的网络！',
					icon: 'none',
					duration: 2500
				});
				return;
			}
			uni.request({
				url,
				data: param.data,
				method: 'POST',
				// header: Object.assign({}, PUBLIC_HEADER, SESSIONID ? COOKIE_HEADER : {}),
				header: Object.assign({}, PUBLIC_HEADER),
				success: res => {
					
					console.info({
						'请求的接口': url,
						'发送的数据': param.data,
						'返回的数据': res,
					});
					
					if(res.statusCode == 200){
						if(res.data){
							if(res.data.code == 1){
								param.allSuccess(res.data);//完全成功回调
							}else{
								param.allError(res.data);
								setErrlog(url, res.data.result, res.data.code, '后端接口报错');//设置错误日志
								uni.showToast({
									title: res.data.result || '未知错误！',
									icon: 'none',
									duration: 2500
								});
							}
						}
					}else{
						param.allError(res);
						setErrlog(url, res.errMsg, res.statusCode, 'API(request)报错');//设置错误日志
						uni.showToast({
							title: '网络出错：'+res.statusCode,
							icon: 'none',
							duration: 2500
						});
					}
					
					param.success(res.data);
					
				},
				fail: err => {
					
					param.allError(err);
					
					setErrlog(url, err.errMsg, '', '接口调用失败');//设置错误日志
					
					uni.showToast({
						title: '请求超时！',
						icon: 'none',
						duration: 2000
					});
					
				},
				complete: res => {
					
					if(param.isLoad){
						vm.$yLoading().hide();
					}
					
					uni.stopPullDownRefresh();//关闭下拉刷新
					
					param.complete(res);
					
				}
			});
		}
	});
	
}
