<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <span class="el-icon-caret-bottom"></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><p @click="$router.push('/about')">首页</p></el-dropdown-item>
        <el-dropdown-item
          ><a href="https://gitee.com/shuiruohanyu/hrsaas139" target="_blank">项目地址</a></el-dropdown-item
        >
        <el-dropdown-item><p @click="outLogin">退出登录</p></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import * as API from "../api/index"
import {removeToken} from '../api/auth'
export default {
  data() {
    return {}
  },
  methods: {
    outLogin() {
      this.$confirm("确定要退出登录？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出登录成功!"
          })
					removeToken()
					this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消登录"
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-caret-bottom {
  cursor: pointer;
  color: #fff;
}
</style>