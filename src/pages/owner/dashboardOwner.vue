<template>
<div class="row">
  <div class="coloumn" style="padding-top: 30px; padding-left: 30px">
    <q-card id="size">
    <chart :chart-data="datacollection"></chart>
    </q-card>
</div>
</div>
  
  
  
</template>

<style scoped>
#size{
    width: 500px;
    
}
</style>

<script>
    // import Chart from "./../Chart.js";
    import product from '../../api/admin/getbarang';
    import Chart from '../../components/app/CommitChart';
    export default {
      components: {
        Chart
      },
      data() {
        return {
          datacollection: null,
          images:[],
          dataBlender: [],
          dataKompor: [],
          dataPisau: [],
          dataKulkas:[],
          dataRice:[],
          data1: {}
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {
            let self = this
            product.getBarang(window).then(function (result) {
                let temp = []
                let temp2 = []
                let temp3=[]
                let temp4=[]
                let temp5=[]
                let tempLabels = []
                let tempDataLabels = []
                
                for(let i = 0; i < result.length; i++) {
                    if (result[i].kategori ===  'Rice Cooker') {
                        temp.push(result[i])
                        if (!tempLabels.includes('Rice Cooker')) {
                            tempLabels.push(result[i].kategori)
                        }
                        if (!tempDataLabels.includes('Rice Cooker')) {
                        tempDataLabels.push(result[i].kategori)
                        }
                    } else if (result[i].kategori ===  'Blender') {
                        temp2.push(result[i])
                        if (!tempLabels.includes('Blender')) {
                            tempLabels.push(result[i].kategori)
                        }
                        if (!tempDataLabels.includes('Blender')) {
                            tempDataLabels.push(result[i].kategori)
                        }
                    
                    } else if (result[i].kategori ===  'Kompor') {
                        temp3.push(result[i])
                        if (!tempLabels.includes('Kompor')) {
                            tempLabels.push(result[i].kategori)
                        }
                        if (!tempDataLabels.includes('Kompor')) {
                            tempDataLabels.push(result[i].kategori)
                        }
                    } else if (result[i].kategori ===  'Pisau') {
                        temp4.push(result[i])
                        if (!tempLabels.includes('Pisau')) {
                            tempLabels.push(result[i].kategori)
                        }
                        if (!tempDataLabels.includes('Pisau')) {
                            tempDataLabels.push(result[i].kategori)
                        }
                    } else if (result[i].kategori ===  'Kulkas') {
                        temp5.push(result[i])
                        if (!tempLabels.includes('Kulkas')) {
                            tempLabels.push(result[i].kategori)
                        }
                        if (!tempDataLabels.includes('Kulkas')) {
                            tempDataLabels.push(result[i].kategori)
                        }
                    }
                    
                }
                console.log(tempLabels)
                console.log(tempDataLabels)
                self.datacollection = {
                    labels:  tempLabels,
                    datasets: [{
                        barPercentage: 0.5,
                        label: tempDataLabels,
                        backgroundColor: ['#f87979', '#3d65bd','#ffa500','#ff00ff','#008000'],
                        data: [temp.length, temp2.length, temp3.length,temp4.length, temp5.length]
                        }],
                        option: {
                            height: 200
                        }
                }
        })
        .catch(function (err) {
            console.log(err);
        })
    }
    }
}
</script>