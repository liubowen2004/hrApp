<template>
  <div>
    <p class="el-icon-full-screen" @click="screen"></p>
  </div>
</template>

<script>
import screenfull from "screenfull"
export default {
  data() {
    return {
			isscreenfull:false
	}
  },
  methods: {
    screen() {
      if (screenfull.isEnabled) {
					screenfull.toggle()
    	}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>