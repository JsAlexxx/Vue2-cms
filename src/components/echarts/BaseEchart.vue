<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
export default {
  mounted() {
    this.myChart = this.$echarts.init(this.$refs.chart);
    window.addEventListener("resize", () => {
      if (this.myChart) {
        this.myChart.resize();
      }
    });
  },
  props: {
    height: {
      type: String,
      default: "218px",
    },
    width: {
      type: String,
      default: "402px",
    },
    id: {
      type: String,
      default: "main",
    },
    options: {
      type: Object,
      default() {
        return null;
      },
    },
    getDataFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },

  methods: {
    drawChart() {
      this.myChart.setOption(this.options);
    },
  },
  watch: {
    getDataFlag: {
      handler(newValue, oldValue) {
        console.log(this.options);
        this.drawChart();
      },
      deep: true,
    },
  },
};
</script>
