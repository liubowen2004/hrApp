const express=require('express')
const Mock=require('mockjs')
const loginRes=require('./common/login.json')
const port=3001

const app=express()

app.listen(port,()=>{
	console.log(`我启动服务了${port}`);
})