<template>
  <div>
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      text-color="#fff"
      active-text-color="#fff"
      :collapse="isCollapse"
    >
      <el-menu-item :index="'/about/' + item.path" v-for="(item, index) in muenList" :key="index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import axios from "axios"
export default {
	props:['isCollapse'],
  data() {
    return {
      muenList: []
    }
  },
  methods: {},
  created() {
    axios.get("muentList.json").then((res) => {
      this.muenList = res.data.data
	  console.log(this.muenList);
    })
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: rgba(255, 255, 255, 0) !important;
  border-right: transparent !important;
  .el-menu-item {
    i {
      color: #fff !important;
      vertical-align: middle;
      font-size: 20px;
      margin-right: 10px;
    }
    font-size: 16px;
  }
  .el-menu-item:hover {
    color: #43a7fe !important;
    background-color: #cccccc !important;
    i {
      color: #43a7fe !important;
    }
  }
}
</style>