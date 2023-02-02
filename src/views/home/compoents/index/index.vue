<template>
  <div class="index-main">
    <h2 class="welcome-title">
      欢迎使用后台，{{username}}
    </h2>
    <div class="charts">
      <index-pie-chart />
      <index-line-chart />
    </div>
  </div>
</template>

<script>
  import indexPieChart from './indexCpns/pieChart/';
  import indexLineChart from './indexCpns/lineChart/';

  export default {
    name: 'theIndex',
    mounted() {
      this.$store.dispatch('home/getHomeDataAction')
    },
    data() {
      return {
        username: this.$store.getters.hasUserInfo.username,
      }
    },
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