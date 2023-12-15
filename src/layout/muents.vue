<template>
  <div>
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      text-color="#fff"
      active-text-color="#fff"
      background-color="rgba(255, 255, 255, 0)"
      :collapse="isCollapse"
    >
      <el-menu-item :index=" ''+item.path" v-for="(item, index) in meunList" :key="index">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>
<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      meunList:[]
    }
  },
  methods: {},
	mounted(){
		this.meunList=JSON.parse(localStorage.getItem("Route"))||[]
	}
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
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