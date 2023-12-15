<template>
  <div class="box">
    <el-table
      :data="$parent.jdcList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="code" label="标识"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link :underline="false" type="primary" @click="add(scope.row.id)">添加</el-link>
          <el-link :underline="false" type="primary" style="margin: 0 10px" @click="rev(scope.row.id)">编辑</el-link>
          <el-link :underline="false" type="primary" @click="del(scope.row.id)">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
		del(id){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
					this.$emit('getJurisdictionDel',id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},
		add(id){
			this.$emit('jdcAdd',id)
		},
		rev(id){
			this.$emit('jdcRev',id)
		},
	}
}
</script>

<style lang="scss" scoped>
</style>