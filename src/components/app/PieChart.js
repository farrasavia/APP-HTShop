import {
     Doughnut
  }
  from 'vue-chartjs'
  
  export default {
    extends: Doughnut,
    props: ['data'],
    mounted: function () {
      this.renderChart(this.data, this.options)
    },
    data () {
      return {
        options: {
          title: {
            display: true,
            text: 'Donat'
          }
        }
      }
    }
  }