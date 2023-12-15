<template>
  <div>
    <el-dialog title="新增部门" :visible.sync="dialogFormVisible" @close="guanbi">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="权限名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" :label-width="formLabelWidth" prop="code">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开启" :label-width="formLabelWidth">
          <el-switch
            v-model="form.type"
            active-color="#409eff"
            inactive-color="#dcdfe6"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$parent.jdcFlag = false">取 消</el-button>
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
        type: 0,
        enVisible: "",
        
      },
      formLabelWidth: "120px",
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        code: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    }
  },
  methods: {
    guanbi() {
      this.$parent.jdcFlag = false
    },
    add() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.form.pid) {
            this.$emit("getJurisdictionRev", this.form)
          } else {
            this.form.pid = this.$parent.jdcId
            this.$emit("getJurisdictionAdd", this.form)
          }
        } else {
          console.log("error submit!!")
          return false
        }
      })
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