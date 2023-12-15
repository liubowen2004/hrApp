<template>
  <div class="box">
    <div class="login-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录账户设置" name="first">
          <login v-if="activeName == 'first'" :id="id"></login>
        </el-tab-pane>
        <el-tab-pane label="个人详情" name="second">
          <detail v-if="activeName == 'second'" :id="id"></detail>
        </el-tab-pane>
        <el-tab-pane label="岗位信息" name="third">
          <postBoc v-if="activeName == 'third'"></postBoc>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import detail from "./components/detail"
import login from "./components/login"
import postBoc from "./components/postBoc"
export default {
  data() {
    return {
      activeName: "first",
      id:''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(this.activeName)
    }
  },
  components: {
    detail,
    login,
    postBoc
  },
  created() {
    this. id = this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
}
.login-box {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  margin: 0 auto;
}
.el-tab-pane {
  padding: 0 0 0 140px;
}
</style>