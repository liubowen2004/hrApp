<template>
  <div>
    <el-alert
      title="对公司名称，公司地址，营业执照，公司地区更新，将使得公司资料被重新审核，请谨慎修改"
      type="info"
      show-icon
    >
    </el-alert>
    <el-form ref="form" :model="cprMsgList" label-width="80px" size="mini">
      <el-form-item label="公司名称">
        <el-input v-model="cprMsgList.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="cprMsgList.companyAddress" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="cprMsgList.mailbox" disabled></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="cprMsgList.remarks" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
		cprMsgList:{
			type:Object,
			default:{}
		}
  },
  data() {
    return {
      cprMsgLists: {}
    }
  },
  methods: {
    render() {
      this.cprMsgLists = this.cprMsgList
      console.log(this.cprMsgLists, "ss")
    }
  },
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 580px;
  padding: 40px;
}
</style>