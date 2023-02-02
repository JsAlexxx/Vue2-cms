<template>
  <div class="line-chart-main">
    <div class="title">
      <h5 class="title-text">销售额</h5>
    </div>
    <div class="chart-container">
      <base-echart id="linechart" :get-data-flag="getDataFlag" :options="option" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BaseEchart from "@/components/echarts/BaseEchart.vue";

export default {
  name: "lineChart",
  data() {
    return {
      getDataFlag: false,
      option: {
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            type: "line",
            smooth: true,
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 20,
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  computed: {
    lineChartData() {
      return this.$store.getters.homeData.lineChartData
    }
  },
  watch: {
    lineChartData(newValue, oldValue) {
      this.option.xAxis.data = newValue.dateRes
      this.option.series[0].data = ['100','110','130','150','80',]
      this.getDataFlag = true
    }
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
