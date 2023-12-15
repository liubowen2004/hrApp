<template>
  <div class="box">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleChange"
    ></el-pagination>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
		}
  },
  methods: {
		...mapMutations('employes',['handleCurrentChange']),
		...mapActions('employes',['EmployeeLists']),
		handleChange(e){
			this.handleCurrentChange(e)
			this.EmployeeLists()
		}
	},
	computed:{
		...mapState('employes',['total']),
	}
}
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>