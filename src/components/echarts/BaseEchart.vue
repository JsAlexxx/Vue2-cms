<template>
  <div :id='id' :style="style"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '218px'
    },
    width: {
      type: String,
      default: '402px'
    },
    id: {
      type: String,
      default: 'main'
    },
    options: {
      type: Object,
      default: null
    }
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById(this.id))
    // 绘制图表
    this.myChart.setOption(this.options)
    window.addEventListener('resize', () => {
      if (this.myChart) {
        this.myChart.resize()
      }
    })
  }
}
</script>
