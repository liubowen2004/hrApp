<template>
  <div class="box">
    <el-pagination layout="prev, pager, next" :total="$parent.roleList.total"  @current-change="handleCurrentChange"> </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
		handleCurrentChange(e){
			this.$emit('handlpage',e)
		}
  }
}
</script>

<style lang="scss" scoped>
.box{
	text-align: center;
}
</style>