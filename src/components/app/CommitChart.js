import {
    Bar
  }
  from 'vue-chartjs'
  
  export default {
    extends: Bar,
    props: ['data'],
    mounted: function () {
      this.renderChart(this.data, this.options)
    },
    data () {
      return {
        options: {
          title: {
            display: true,
            text: 'Grafik Pemesanan'
          }
        }
      }
    }
  }