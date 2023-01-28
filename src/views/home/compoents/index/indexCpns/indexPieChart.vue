<template>
  <div class="pie-chart-main">
    <div class="title">
      <h5 class="title-text">销售额</h5>
    </div>
    <div class="chart-container">
      <base-echart id="piechart" :options="option" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BaseEchart from "@/components/echarts/BaseEchart.vue";
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "15%",
          icon: "circle",
          top: "32%",
          itemWidth: 20,
          itemHeight: 20,
        },
        color: ["#2C68FF", "#3DA8FF", "#27D1D0 "],
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "75%"],
            // 饼图位置参数
            center: ["32%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
              // color: '#4c4a4a',
              formatter: "hhhhhhhhhh",
              rich: {
                total: {
                  fontSize: "16px",
                  fontFamily: "Helvetica Neue Bold",
                  fontWeight: "bold",
                  color: "#262626",
                },
                active: {
                  fontSize: "12px",
                  fontFamily: "PingFangSC-Regular",
                  fontWeight: "400",
                  color: "#8C8C8C",
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Model 3" },
              { value: 500, name: "Model X" },
              { value: 200, name: "Model Y" },
            ],
          },
        ],
      },
    };
  },
  components: {
    BaseEchart,
  },
};
</script>

<style lang="scss" scoped>
.pie-chart-main {
  background-color: $baseWhite;
  width: 450px;
  height: 360px;
  border: 1px solid $border;
  .title {
    height: 80px;
    line-height: 80px;
    padding-left: 25px;
    .title-text {
      color: $secondary;
      font-size: 28px;
      font-weight: normal;
    }
  }
  .chart-container {
    height: 280px;
  }
}
</style>
