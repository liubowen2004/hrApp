<template>
  <div class="box">
    <div class="login">
			<p class="title">iHRM 后台登录系统</p>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.mobile" class="inp"  prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
			<el-form-item>
        <el-input v-model="form.password" class="inp" show-password prefix-icon="el-icon-s-goods"></el-input>
      </el-form-item>
			<el-form-item>
				<el-button type="primary" @click="getLogin">登录</el-button>
      </el-form-item>
    </el-form>
		<span>
			仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何敏感信息(如手机号, 省份证等)!
		</span>
		</div>
  </div>
</template>

<script>
import {getLoginApi} from '../../api/index'
import {setToken} from '../../api/auth'
export default {
  data() {
    return {
			form:{
				mobile:"13800000002",
				password:'hm#qd@23!'
			}
		}
  },
  methods: {
		getLogin(){
			getLoginApi(this.form).then(res=>{
				console.log(res);
				setToken(res.data)
				this.$message({
          message: `${res.message}`,
          type: 'success'
        });
				this.$router.push('/about')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/资源/图片/common/login.jpg);
	display: flex;
	justify-content: center;
	align-items: center;
	.login{
		width: 450px;
		height: 400px;
	}
}
.el-button{
	width: 100%;
	height: 60px !important;
	background-color: #407ffe;
}
.inp{
	opacity: 0.5;
}
.title{
	font-size: 50px;
	color: #fff;
	margin: 10px 0;
}
span{
	color: #fff;
}
</style>