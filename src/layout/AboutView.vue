<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <img src="../assets/资源/图片/common/logo.png" alt="" />
        <muentsVue :isCollapse="isCollapse"></muentsVue>
	      </el-aside>
      <el-main>
        <nav class="navLeft" :style="{background:themeColor}">
          <div class="left navLeft">
            <span class="el-icon-s-fold" @click="isCollapse = !isCollapse" :class="isCollapse ? 'fan' : ''"></span>
            <span style="margin:0 20px;">{{$t("test.companyName") }}</span>
            <button>体验版</button>
          </div>
          <div class="right navLeft">
            <screenFullVue></screenFullVue>
            <img style="margin: 0 10px" src="../assets/资源/图片/common/head.jpg" alt="" />
						<Lang></Lang>
						<theme></theme>
            <p style="fontsize: 14px">{{ info.username }} </p><homeOptionVue></homeOptionVue>
          </div>
        </nav>
        <div class="crumbs-box"></div>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getMuentListApi } from "../api/index"
import screenFullVue from "../components/screenFull/index.vue"
import muentsVue from "@/layout/muents.vue"
import homeOptionVue from '@/components/homeOption.vue'
import Lang from "@/components/lang"
import theme from "@/components/theme"
export default {
  data() {
    return {
      isCollapse: false,
      info: {},
			meunList:[]
    }
  },
  components: {
    screenFullVue,
    muentsVue,
    homeOptionVue,
		Lang,
		theme
  },
  created() {
    getMuentListApi().then((res) => {
      this.info = res.data
    })
  }
}
</script>

<style lang="scss" scoped>

.fan {
  transform: rotateY(180deg);
}
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
.el-aside {
  background-image: url("../assets/资源/图片/common/login.jpg");
  height: 100vh;
  transition: all 0.2s linear;
  img {
    width: 80%;
    height: 6%;
    margin: 12px;
  }
}
.el-main {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: scroll;
}
.navLeft {
  display: flex;
  display: flex;
  align-items: center;
}
nav {
  width: 100%;
  height: 50px;
  background-color: #4979fb;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 18px;
  color: #fff;
  .left {
		padding: 0 10px;
    justify-content: space-between;
    > button {
      padding: 5px 10px;
      border: 0;
      outline: 0;
      border-radius: 10px;
      background-color: #84a9fe;
      color: #fff;
    }
  }
  .right {
    > img {
      width: 30px;
    }
  }
}
.crumbs-box {
  height: 40px;
  box-shadow: 0 0 10px #ccc;
  width: 100%;
}
.right {
  > img {
    border-radius: 50%;
  }
}
</style>