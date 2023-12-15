<template>
  <div class="box">
    <el-table ref="singleTable" :data="cmpolyeeList" highlight-current-row style="width: 100%">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column property="username" label="姓名"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img style="width: 80px" src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" />
        </template>
      </el-table-column>
      <el-table-column property="mobile" label="手机号"></el-table-column>
      <el-table-column property="workNumber" label="工号"></el-table-column>
      <el-table-column label="聘用形式">
        <template slot-scope="scope">
          <p>{{ scope.row.enableState == "1" ? "正式" : "非正式" }}</p>
        </template>
      </el-table-column>
      <el-table-column property="departmentName" label="部门"></el-table-column>
      <el-table-column property="correctionTime" label="任职时间"></el-table-column>
      <el-table-column label="账户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enableState"
            active-color="#409eff"
            inactive-color="#dcdfe6"
            :active-value="1"
            inactive-value="1"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="260px">
        <template slot-scope="scope">
          <el-button type="text" @click="goInformation(scope.row.id)">查看</el-button>
          <el-button type="text">转正</el-button>
          <el-button type="text">调岗</el-button>
          <el-button type="text">离职</el-button>
          <el-button type="text" @click="checkRelo(scope.row.id)">角色</el-button>
          <el-button type="text" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {}
  },
  methods: {
    checkRelo(id) {
      this.$emit("checkRelo", id)
    },
    goInformation(id) {
      this.$router.push({
        path: "/about/employee/information",
        query: {
          id: id
        }
      })
    }
  },
  computed: {
    ...mapState("employes", ["cmpolyeeList"])
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 20px;
}
</style>