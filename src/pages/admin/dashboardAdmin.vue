<template>
  <div class="layout-view" style="padding-top: 50px; padding-left: 50px">
    <q-card id="size">
    <commit-chart :data="data" ></commit-chart>
    </q-card>
  <div class="layout-view" style="padding-top: 30px">
    <q-card id="size">
      <donut-chart :data="data"></donut-chart>

    </q-card> 
  </div> 
  </div>
</template>

<style scoped>
#size{
    width: 250px;
    
}
</style>

<script>
import CommitChart from '../../components/app/CommitChart'
import DonutChart from '../../components/app/DonutChart'
export default {
  components:{
    CommitChart,
    DonutChart

  },
  data(){
    return{
      data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
          barPercentage: 0.2,
          label: ['One', 'Two', 'Three', 'Four'],
          backgroundColor: ['#f87979', '#3d65bd', '#3d7354', '#000000'],
          data: [10,20,30,40]
        }],
        option: {
          height: 200
      }
    }
  }
}
}
</script>