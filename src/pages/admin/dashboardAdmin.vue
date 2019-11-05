<template>
<div class="row">
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
    <commit-chart :data="data" ></commit-chart>
    </q-card>
    </div>
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px;">
    <q-card id="size">
      <donut-chart :data="data"></donut-chart>
      </q-card>
      </div> 

      <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
      <pie-chart :data="data"></pie-chart>
    </q-card>
</div>
</div>
  
  
  
</template>

<style scoped>
#size{
    width: 300px;
    
}
</style>

<script>
import CommitChart from '../../components/app/CommitChart'
import DonutChart from '../../components/app/DonutChart'
import PieChart from '../../components/app/PieChart'
export default {
  components:{
    CommitChart,
    DonutChart,
    PieChart

  },
  data(){
    return{
      data: {
        labels: ['Rice Cooker', 'Kulkas', 'Pisau', 'KPP', 'Blender'],
        datasets: [{
          barPercentage: 0.5,
          label: ['Rice Cooker', 'Kulkas', 'Pisau', 'KPP', 'Blender'],
          backgroundColor: ['#f87979', '#3d65bd', '#3d7354', '#000000','#C10015'],
          data: [10,20,30,40,50]
        }],
        option: {
          height: 200
      }
    }
  }
}
}
</script>