<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
	<el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script >
import axios from "axios"
export default {
  data() {
    return {}
  },
   methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
   },
  created() {
    console.log(process.env)
    axios
      .post(process.env.VUE_APP_IDENT + "/sys/login", {
        mobile: "17764049967",
        password: 123456
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
