<template>
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getEmployeeRoleDetailApi} from "../../../api/index"
export default {
	props:['id'],
  data() {
    return {
			ruleForm: {
				username: '',
				password: ''
        },
				rules: {
          username: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        }
      }
  },
  methods: {
		async getEmployeeRoleDetail(){
			let res=await getEmployeeRoleDetailApi({ id:this.id })
			this.ruleForm.username=res.data.username
			this.ruleForm.password=res.data.password
		}
	},
	created(){
		this.getEmployeeRoleDetail()

	}
}
</script>

<style lang="scss" scoped>
.box{
	width: 470px;
}
</style>