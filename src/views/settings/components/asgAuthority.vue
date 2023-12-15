<template>
  <div class="add">
    <el-dialog title="分配权限" :visible="true" @close="cancel">
      <el-tree
				ref="tree"
        :data="list"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :default-checked-keys="permIds"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ data.name }}</span>
        </span>
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addPerm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as API from "../../.././api/index"
import { getStructureList } from "../../.././api/commonLogic"
export default {
  data() {
    return {
      list: [],
      permIds: []
    }
  },
  methods: {
    cancel() {
      this.$emit("assignCancel")
    },
    async getCompanyAuthority() {
      let res = await API.getCompanyAuthorityApi()
      if (res.success) {
        this.list = getStructureList(res.data, "0")
        console.log(this.list)
      }
    },
    getCompanyEcho() {
      let id = this.$parent.assignId
      console.log(id)
      API.getCompanyEchoApi({ id: id }).then((res) => {
        this.permIds = res.data.permIds
      })
    },
    // 确认分配
    async addPerm() {
      let res = await API.rolesAssignApi({
        id: this.$parent.assignId,
        permIds: this.$refs.tree.getCheckedKeys()
      })
      this.$message.success(res.message)
      this.$emit('addPerm')
    }
  },
  created() {
    this.getCompanyAuthority()
    this.getCompanyEcho()
  }
}
</script>

<style lang="scss" scoped>
.dialog-footer {
  text-align: center;
}
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