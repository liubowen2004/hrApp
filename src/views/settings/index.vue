<template>
  <div class="box">
    <section>
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first">
          <el-button type="primary" style="margin-bottom: 20px" @click="addFlag = true" :style="{background:themeColor}">新增角色</el-button>
          <corporation
            :roleList="roleList.rows"
            @getCompanyDel="getCompanyDel"
            @getCompanyEcho="getCompanyEcho"
						@assign="assign"
          ></corporation>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <cprMsg :cprMsgList="cprMsgList"></cprMsg>
        </el-tab-pane>
      </el-tabs>
    </section>
    <cprAddVue @getCompanyAdd="getCompanyAdd" v-if="addFlag" @cancel="cancel" @getCompanyReset="getCompanyReset"></cprAddVue>
		<cprPagetionVue @handlpage="handlpage"></cprPagetionVue>
		<asgAuthorityVue v-if="assignFlag"  @assignCancel="assignCancel" @addPerm="addPerm"></asgAuthorityVue>
  </div>
</template>

<script>
import cprMsg from "./components/cprMsg.vue"
import corporation from "./components/corporation.vue"
import * as API from "../../api/index"
import cprAddVue from "./components/cprAdd.vue"
import cprPagetionVue from './components/cprPagetion.vue'
import asgAuthorityVue from './components/asgAuthority.vue'
export default {
  data() {
    return {
      activeName: "first",
      query: {
        page: 1,
        pagesize: 10
      },
      roleList: [],
      cprMsgList: {},
      addFlag: false,
			assignFlag:false,
			assignId:''
    }
  },
  methods: {
    async getCompanyRoleList() {
      if ((await API.getCompanyRoleListApi(this.query)).success) {
        this.roleList = await (await API.getCompanyRoleListApi(this.query)).data
				console.log(this.roleList);
      }
    },
    async getCompanyCprMsg() {
      if ((await API.getCompanyCprMsgApi({ id: "1" })).success) {
        this.cprMsgList = await (await API.getCompanyCprMsgApi({ id: "1" })).data
      }
    },
    getCompanyDel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await API.getCompanyDelApi({ id: id })
          if (res.success) {
            this.$message({
              type: "success",
              message: res.message + "!"
            })
            this.getCompanyRoleList()
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    async getCompanyAdd(val) {
      let res = await API.getCompanyAddApi(val)
      if (res.success) {
        this.getCompanyRoleList()
        this.$message({
          type: "success",
          message: res.message
        })
        this.addFlag = false
      }
    },
    cancel() {
      this.addFlag = false
    },
    async getCompanyEcho(id) {
      let res = await API.getCompanyEchoApi({ id: id })
      if (res.success) {
        this.addFlag = true
				this.$nextTick(()=>{
					this.$children[2].form=res.data
				})
      }
    },
		async getCompanyReset(val){
			let res= await API.getCompanyResetApi(val)
			if(res.success){
				this.$message({
					type:'success',
					message:res.message+'!'
				})
				this.getCompanyRoleList()
				this.addFlag=false
			}
		},
		handlpage(e){
			this.query.page=e
			this.getCompanyRoleList()
		},
		assign(id){
			this.assignFlag=true
			this.assignId=id
		},
		assignCancel(){
			this.assignFlag=false
		},
		addPerm(){
			this.assignFlag=false
		}
  },
  created() {
    this.getCompanyRoleList()
    this.getCompanyCprMsg()
  },
  components: {
    cprMsg,
    cprAddVue,
    corporation,
		cprPagetionVue,
		asgAuthorityVue
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
}
section {
  padding: 15px;
  box-shadow: 0 0 10px #ccc;
}
</style>