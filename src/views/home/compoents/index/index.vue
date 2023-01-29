<template>
  <div class="index-main">
    <h2 class="welcome-title">
      欢迎使用后台， admin
    </h2>
    <div class="charts">
      <index-pie-chart />
      <index-line-chart />
    </div>
  </div>
</template>

<script>
  import indexPieChart from './indexCpns/indexPieChart.vue';
  import indexLineChart from './indexCpns/indexLineChart.vue';
  export default {
    name: 'theIndex',

    components: {
      indexPieChart,
      indexLineChart
    }
  }
</script>

<style lang="scss" scoped>
.index-main {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .welcome-title {
    height: 32px;
    font-size: 30px;
    color: $bg;
    margin-bottom: 30px;
  }

  .charts {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>