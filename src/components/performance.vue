<template>
	<div class="performance-box">

	</div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
	 return {};
  },
   methods: {
    performance() {
      var chartDom = document.querySelector(".performance-box")
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: "人力资源基础绩效表"
        },
        legend: {
          data: ["Allocated Budget", "Actual Spending"]
        },
        radar: {
          indicator: [
            { name: "考勤", max: 6500 },
            { name: "代码行数", max: 16000 },
            { name: "知识分享", max: 30000 },
            { name: "工作效率", max: 38000 },
            { name: "社保", max: 52000 },
            { name: "工资", max: 25000 }
          ]
        },
       series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [800, 200, 30000, 7000, 52000, 25000]
              },
              {
                value: [2500, 4500, 8500, 11000, 15000, 7000]
              },
              {
                value: [4500, 11000, 21000, 26000, 37000, 17000]
              }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  },
  mounted(){
		this.performance()
  }
};
</script>

<style lang="scss" scoped>

</style>