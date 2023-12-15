<template>
  <div class="add">
    <el-dialog title="新增弹层" :visible="true" @close="cancel">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" :label-width="formLabelWidth" prop="code">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      form: {
        name: "",
        description: ""
      },
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
      }
    }
  },
  methods:{
		add(){
			if(this.form.id){
				this.$emit('getCompanyReset',this.form)
			}else{
				this.$emit('getCompanyAdd',this.form)
			}
		},
		cancel(){
			this.$emit('cancel')
		}
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  padding: 20px 20px 10px;
  background-color: #66b1ff;
  color: #fff;
}
::v-deep .el-dialog__title {
  line-height: 42px;
  font-size: 18px;
  color: #fff;
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
</style>