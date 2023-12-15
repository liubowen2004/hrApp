<template>
  <div class="box">
    <el-tree :data="newArr" node-key="id" default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <el-button type="text" size="mini">{{ !data.manager ? "负责人" : data.manager }}</el-button>
          <el-dropdown @command="getStructureAdd($event, data.id)">
            <span class="el-dropdown-link">操作<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="data.manager" command="rev">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="data.manager" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </span>
    </el-tree>
    <dialogAdd v-if="addFlag" @render="render"></dialogAdd>
  </div>
</template>

<script>
import {
  getStructureAddApi,
  getStructureListApi,
  getStructureDelApi,
  getStructureEchoApi,
  getStructureRevApi
} from "../../api/index"
import { getStructureList } from "../../api/commonLogic"
import dialogAdd from "../../components/structure/dialogAdd.vue"
export default {
  data() {
    return {
      newArr: [
        {
          code: "1",
          createTime: "2023-11-17 10:04:22",
          id: "604e115c7bfcfa45d019d3e9",
          introduce: "程序员的摇篮",
          name: "传智教育",
          pid: "-1",
          children: []
        }
      ],
      addFlag: false,
      eveFlag: "",
      dataId: ""
    }
  },
  methods: {
    async getStructureAdd(e, id) {
      if (e === "del") {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            })
            getStructureDelApi({ id: id }).then((res) => {
              if (res.success) {
                this.getStructureList()
              }
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      } else if (e === "rev") {
        this.addFlag = true
        this.dataId = id
        this.eveFlag = e
        let res = await getStructureEchoApi({ id: id })
        this.$children[1].form = { ...res.data }
      } else if (e == "add") {
        this.addFlag = true
        this.dataId = id
        this.eveFlag = e
      }
    },
    async getStructureList() {
      let res = await getStructureListApi()
      if (res.success) {
        this.newArr[0].children = getStructureList(res.data.depts, "")
      }
    },
    render(val) {
      if (this.eveFlag == "add") {
        getStructureAddApi({...val,pid:this.dataId}).then((res) => {
          if (res.success) {
            this.getStructureList()
          } else {
            this.$message({
              type: "error",
              message: res.message
            })
          }
        })
      } else if (this.eveFlag == "rev") {
        getStructureRevApi(val).then(res=>{
					this.$message({
              type: "success",
              message: res.message
            })
				})
      }
			this.getStructureList()
      this.addFlag = false
    }
  },
  components: {
    dialogAdd
  },
  created() {
    this.getStructureList()
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 20px 200px;
	width: 95%;
	margin: 20px auto;
	box-shadow: 0 0 10px #ccc;
	border-radius: 5px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-button {
  color: #000 !important;
  margin: 0 30px !important;
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>