<template>
   
  <div id="app">

        <router-view />  
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
	data(){
		return{

		}
	},
	methods:{
		...mapMutations('theme',['changeThemeColor'])
	},
	computed:{
			...mapState('theme',['themeColor'])
	},
	watch:{
		themeColor(val){
			document.getElementById('ap').style.setProperty('fashe',val)		}
	}
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
	box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}

.z-header-container {
    width: 100%;
    height: 66px;
    //background: #fff;
    text-align: center;
    background: var(--themeColor);
}
#app {
    --themeColor:#008cff;
}

</style>