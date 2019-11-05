import {
    Pie
  }
  from 'vue-chartjs'
  
  export default {
    extends: Pie,
    props: ['data'],
    mounted: function () {
      this.renderChart(this.data, this.options)
    },
    data () {
      return {
        options: {
          title: {
            display: true,
            text: 'Grafik Pengunjung'
          }
        }
      }
    }
  }