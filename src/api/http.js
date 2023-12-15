import axios from "axios";
import { MessageBox, Loading } from "element-ui"
import {getToken,setToken} from './auth'
import DEFAULTSTATUS from './default'
import router from 'vue-router'
let loadingInstance
const instance=axios.create({
	baseURL:'/',
	timeout:100*30,
	headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  // 表示跨域请求时是否需要使用凭证
  withCredentials: true
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	// if (response.data && response.data.code === 1002) {
	// 	// 401, token失效
	// 	/**
	// 	 * TODO: 401用户登录
	// 	 */
	// 	 // resetLoginInfo()

	// 	  router.push('/')
	// }
	// text:'数据玩命加载中',target:'.el-main'
	loadingInstance = Loading.service({ fullscreen: true })
	config.headers.Authorization='Bearer ' + getToken()
	return config;
}, function (error) {
	return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
	// 2xx 范围内的状态码都会触发该函数。
	// 对响应数据做点什么
	loadingInstance.close()

	return response.data;
}, function (error) {
	// 超出 2xx 范围的状态码都会触发该函数。
	// 对响应错误做点什么
	loadingInstance.close()
	let title = ""
	let message = ""
	if (error && error.response) {
		console.log(error)
		/**后端返回的报错的信息 */
		message = error.response.data.message

		// 401, token失效
		switch (
			error.response.status // 跨域存在获取到的状态码的情况, status(随后端定义变化而变化,code)
		) {
			case DEFAULTSTATUS.ERRORPRO:
				title = "错误请求"
				break // 停止循环
			case DEFAULTSTATUS.UNAUTHORIZED:
				title = "资源未授权"
				break
			case DEFAULTSTATUS.ACCESSFORBIDDEN:
				title = "禁止访问"
				break
			case DEFAULTSTATUS.NOTFOUND:
				title = "未找到所请求的资源"
				break
			case DEFAULTSTATUS.NOTALLOW:
				title = "不允许使用该方法"
				break
			case DEFAULTSTATUS.TIMEOUT:
				title = "请求超时"
				break
			case DEFAULTSTATUS.SERVERERROE:
				title = "内部服务器错误"
				break
			case DEFAULTSTATUS.UNREALIZED:
				title = "未实现"
				break
			case DEFAULTSTATUS.GATEWAY:
				title = "网关错误"
				break
			case DEFAULTSTATUS.SERVICEUN:
				title = "服务不可用"
				break
			case DEFAULTSTATUS.GATEWAYTIMEOUT:
				title = "网关超时"
				break
			case DEFAULTSTATUS.UNSUPPORT:
				title = "HTTP版本不受支持"
				break
			default:
				title = error.response.status
		}
		return MessageBox.alert(message, title, {
			type: "warning"
		})
	}
	else {
		// 跨域获取不到状态码或者其他状态进行的处理
		return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
			type: "error"
		})
	}
});

/**封装动态代理标识
 * process.env.VUE_APP_IDENT
 *url : /login
 */
 instance.addURL = function (url) {
  return process.env.VUE_APP_IDENT + url
}

export default instance