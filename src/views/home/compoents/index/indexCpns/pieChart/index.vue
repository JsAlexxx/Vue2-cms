<template>
  <div class="pie-chart-main">
    <div class="title">
      <h5 class="title-text">销售额</h5>
    </div>
    <div class="chart-container">
      <base-echart id="piechart" :get-data-flag = "getDataFlag" :options="option" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BaseEchart from "@/components/echarts/BaseEchart.vue";
export default {
  data() {
    return {
      getDataFlag: false,
      option: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "15%",
          icon: "circle",
          top: "15%",
          itemWidth: 25,
          itemHeight: 25,
        },
        color: ["#2C68FF", "#3DA8FF", "#5584ff", '#8492af'],
        series: [
          {
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
              // position: "center",
              // color: '#4c4a4a',
              // formatter: "",
              rich: {
                // total: {
                //   fontSize: "16px",
                //   fontFamily: "Helvetica Neue Bold",
                //   fontWeight: "bold",
                //   color: "#5584ff",
                // },
                active: {
                  fontSize: "16px",
                  // fontFamily: "PingFangSC-Regular",
                  fontWeight: "400",
                  color: "#8492af",
                },
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  computed: {
    pieChartData() {
      return this.$store.getters.homeData.pieChartData;
    },
  },
  watch: {
    pieChartData(newValue, oldValue) {
      this.option.series[0].data = newValue
      this.getDataFlag = true
    }
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
