import cookies from 'js-cookie'

let token='token'

function getToken(){
	return cookies.get(token)
}

function setToken(value){
	cookies.set(token,value,{ expires: 7 })
}

function removeToken(){
	cookies.remove(token)
}

export {
	getToken,
	setToken,
	removeToken
}