<template>
  <div class="line-chart-main">
    <div class="title">
      <h5 class="title-text">销售额</h5>
    </div>
    <div class="chart-container">
      <base-echart id="linechart" :options="option" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BaseEchart from "@/components/echarts/BaseEchart.vue";

export default {
  name: "lineChart",
  data() {
    return {
      option: {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 23, 19],
            type: "line",
            smooth: true,
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 20,
              },
            },
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
.line-chart-main {
  background-color: $baseWhite;
  width: 700px;
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
