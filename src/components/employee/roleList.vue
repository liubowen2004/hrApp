<template>
  <div>
    <el-dialog title="分配角色" :visible="true">
      <el-checkbox-group v-model="reloDetaliAll">
        <el-checkbox v-for="item in roleList" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addoks">确 定</el-button>
        <el-button @click="clone">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as API from "../../api/index"
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      dialogFormVisible: true,
			reloDetaliAll:[]
    }
  },
	methods:{
		...mapActions("employes",['EmployeeRoleList','checkReloList','addok']),
		...mapMutations("employes",['checkReloL','reloDetalis','reloDetaliEvent']),
		addoks(){
			this.reloDetaliEvent(this.reloDetaliAll)
			this.addok()
			this.$emit('addoks')
		},
		clone(){
			this.$emit('clone')
		}
	},
	computed:{
		...mapState('employes',['roleList','reloDetali']),
	},
	created(){
		this.EmployeeRoleList(),
		this.$nextTick(()=>{
				this.checkReloL(this.$parent.detailId)
				this.checkReloList()
				this.reloDetaliAll=this.reloDetali
		})
	}
}
</script>

<style lang="scss" scoped>
.dialog-footer{
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