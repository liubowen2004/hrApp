<template>
  <div>
    <el-table
      :data="roleList"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="assign(scope.row.id)">分配权限</el-button>
          <el-button type="primary" @click="revList(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="roleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["roleList"],
  data() {
    return {}
  },
  methods: {
		roleDel(id){
			this.$emit('getCompanyDel', id)
		},
		revList(id){
			this.$emit('getCompanyEcho', id)
		},
		assign(id){
			this.$emit('assign',id)
		}
  }
}
</script>

<style lang="scss" scoped>
</style>