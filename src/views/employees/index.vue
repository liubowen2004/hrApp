<template>
  <div class="box">
    <nav>
      <el-button type="primary" icon="el-icon-info" plain>共{{ list.total }}条记录</el-button>
      <div class="right">
        <el-button :style="{background:themeColor}" type="danger" @click="outExcel">简单表头导出</el-button>
        <el-button :style="{background:themeColor}" type="info">复杂表头导出</el-button>
        <el-button :style="{background:themeColor}" type="success">excel导入</el-button>
        <el-button :style="{background:themeColor}" type="primary" disabled>新增员工</el-button>
      </div>
    </nav>
    <div class="mokou">
      <listVue @checkRelo="checkRelo"></listVue>
      <pageaction @handlepage="handlepage"></pageaction>
    </div>
    <roleAddVue v-if="reloFlag" @addoks="addoks" @clone="clone"></roleAddVue>
  </div>
</template>

<script>
import { xlsx } from "../../utils/xlsx"
import { mapActions, mapState } from "vuex"
import roleAddVue from "@/components/employee/roleList.vue"
import listVue from "@/components/employee/list.vue"
import pageaction from "@/components/employee/pageaction.vue"
import * as API from "../../api/index"
export default {
  data() {
    return {
      dataForm: {
        page: 1,
        size: 10
      },
      list: [],
      reloList: [],
      reloDetali: [],
      reloFlag: false,
      detailId: "",
      listHander: {
        username: "姓名",
        mobile: "手机号",
        workNumber: "工号",
        formOfEmployment: "聘用形式",
        departmentName: "部门",
        timeOfEntry: "入职时间",
        enableState: "用户状态"
      }
    }
  },
  methods: {
    ...mapActions("employes", ["EmployeeLists"]),
    async getEmployeeList() {
      let res = await API.getEmployeeListApi(this.dataForm)
      if (res.success) {
        this.list = res.data
      }
    },
    handlepage(e) {
      this.dataForm.page = e
      this.getEmployeeList()
    },
    checkRelo(id) {
      this.detailId = id
      this.reloFlag = true
    },
    addoks() {
      this.reloFlag = false
    },
    clone() {
      this.reloFlag = false
    },
    outExcel() {
      // this.jsonData是要导出的数据内容（表格里的内容），
      // this.listHander对应要导出内容的表头
      // 学生：指向的是excel文件名
      xlsx(this.cmpolyeeList, this.listHander, "员工管理表格")
    }
  },
  computed: {
    ...mapState("employes", ["cmpolyeeList"]),
		...mapState('theme',['themeColor'])
  },
  created() {
    this.getEmployeeList()
    this.EmployeeLists()
  },
  components: {
    listVue,
    pageaction,
    roleAddVue
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 16px;
}
nav {
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  line-height: 70px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-button {
    height: 40px;
  }
}
.mokou {
  box-shadow: 0 0 10px #ccc;
}
</style>