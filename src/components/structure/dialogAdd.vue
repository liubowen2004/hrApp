<template>
  <div>
    <el-dialog title="新增部门" :visible.sync="dialogFormVisible" @close="guanbi">
      <el-form :model="form">
        <el-form-item label="部门名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
				<el-form-item label="部门编码" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门负责人" :label-width="formLabelWidth">
          <el-select v-model="form.manager" placeholder="请选择活动区域">
            <el-option v-for="(item) in userList" :key="item.id" :label="item.username" :value="item.username"></el-option>
          </el-select>
        </el-form-item>
				<el-form-item label="部门介绍" :label-width="formLabelWidth">
					<el-input type="textarea" v-model="form.introduce" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="getStructureAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import {getStructureUserApi} from '../../api/index'
export default {
  data() {
    return {
      dialogFormVisible: true,
      form: {
      },
      formLabelWidth: "120px",
			userList:[]
    }
  },
	methods:{
		guanbi(){
			this.$parent.addFlag=false
		},
		close(){
			this.$parent.addFlag=false
		},
		getStructureAdd(){
				this.$emit('render',this.form)
		}
	},
	created(){
		getStructureUserApi().then(res=>{
			console.log(res.data);
			this.userList=res.data
		})
	}
}
</script>

<style lang="scss" scoped>
.dialog-footer{
	text-align: center;
}
.el-select{
	width: 100%;
}
::v-deep .el-dialog__header {
	padding: 20px 20px 10px;
	background-color: #66b1ff;
	color: #fff;
}
::v-deep .el-dialog__title{
	line-height: 42px;
	font-size: 18px;
	color: #fff;
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
	color: #fff;
}
</style>