<template>
  <div class="box">
    <nav>
      <button @click="jdcFlag = true">添加权限</button>
    </nav>
    <jdcListRender @getJurisdictionDel="getJurisdictionDel" @jdcAdd="jdcAdd" @jdcRev="jdcRev"></jdcListRender>
    <addsVue
      v-if="jdcFlag"
      @getJurisdictionAdd="getJurisdictionAdd"
      ref="revForm"
      @getJurisdictionRev="getJurisdictionRev"
    ></addsVue>
  </div>
</template>

<script>
import { getStructureList } from "../../api/commonLogic"
import * as API from "../../api/index"
import jdcListRender from "@/components/jurisdiction/jdcListRender.vue"
import addsVue from "@/components/jurisdiction/jdcAdds.vue"
export default {
  data() {
    return {
      jdcList: [],
      jdcFlag: false,
      jdcId: ""
    }
  },
  methods: {
    async getJurisdictionList() {
      if (await (await API.getJurisdictionListApi()).success) {
        let res = await (await API.getJurisdictionListApi()).data
        this.jdcList = getStructureList(res, "0")
      }
    },
    async getJurisdictionDel(id) {
      let res = await API.getJurisdictionDelApi({ id: id })
      if (res.success) this.getJurisdictionList()
    },
    jdcAdd(id) {
      this.jdcId = id
      this.jdcFlag = true
    },
    async jdcRev(id) {
      this.jdcFlag = true
      let res = await API.getJurisdictionEchoApi({ id: id })
      if (res.success) {
        this.$refs.revForm.form = res.data
      }
    },
    async getJurisdictionAdd(val) {
      let res = await API.getJurisdictionAddApi(val)
      if (res.success) {
        this.getJurisdictionList()
        this.$message({
          message: res.message,
          type: "success"
        })
      } else {
        this.$message({
          message: res.message,
          type: "error"
        })
      }
      this.jdcFlag = false
    },
    async getJurisdictionRev(val) {
      let res = await API.getJurisdictionRevApi({ ...val, enVisible: "" })
      if (res.success) {
        this.$message({
          message: res.message,
          type: "success"
        })
        this.getJurisdictionList()
        this.jdcAdd = false
      }
    }
  },
  created() {
    this.getJurisdictionList()
  },
  components: {
    jdcListRender,
    addsVue
  } /*  */
}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
}
nav {
  width: 100%;
  line-height: 70px;
  box-shadow: 0 0 10px #ddd;
  overflow: hidden;
  text-align: right;
  padding-right: 20px;
  margin-bottom: 40px;
  > button {
    padding: 10px 20px;
    background-color: #409eff;
    outline: 0;
    border: 0;
    color: #fff;
    border-radius: 4px;
  }
}
</style>