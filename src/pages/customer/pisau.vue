<template>
<div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 2000px; margin-right: 70px; margin-left: 70px">
      <q-tabs
        class="text-teal"
      >
       <q-btn flat name="katalog"  label="Semua Barang"  style="color: black" to = "katalog"/>      
        <q-tab @click="findByKategori()"   name="blender"   label="Blender" style="color: black"/>
        <q-tab @click="findByKategori1()"  name="pisau"  label="Pisau" style="color: black"/>
        <q-tab @click="findByKategori2()"  name="kompor"  label="Kompor" style="color: black" />
        <q-tab @click="findByKategori3()"  name="kulkas"  label="Kulkas" style="color: black" />
        <q-tab @click="findByKategori4()"  name="rice"  label="Rice Cooker" style="color: black" />

      </q-tabs>
      <q-separator class="garis" color="black" style="height:1px"/>   
    </div>
    <div id="search" style="margin-left: 10px">
            <q-input
              class="bg-white "
              v-model="search"
              filled
              placeholder="Search">
              <template v-slot:append >
          
            <q-icon name="search" @click="findByName()"/>
         </template>
        </q-input>
     </div>
  <q-card class="bawah">
    <q-card-section >
      <div class="text-h4 text-center">PRODUK TERBARU</div>
    </q-card-section>
    <div class="row " style="padding-top: 10px">
      <div class="col q-mx-auto  column q-ma-xs" v-for="item in images" :key="item.id" style= "min-width:300px; max-width:300px">
      <q-card-section class="bg-grey-4">
          <q-img @click="show(item)" style="width:300px; height:300px " class="q-mx-auto"
            :src="item.imgurl"
          >
          <div class="absolute-bottom text-h5 text-center q-pa-xs">
            Rp {{item.harga_barang}}
          </div>
          </q-img>
        <q-card-section class="bg-white">
        <div class="flex flex-center text-h6">{{item.nama_barang}}</div>
        </q-card-section>
      </q-card-section>
      </div>
    </div>
      <q-separator class="garis" color="black" style="height:5px"/>
        <q-card-section >
          <div class="text-h4 text-center">SEMUA PRODUK</div>
        </q-card-section>
      <q-separator class="garis2" color="black" style="height:5px"/>
        <div class="row " style="padding-top: 10px">
         <div class="col q-mx-auto  column q-ma-xs" v-for="item in images2" :key="item.id" style= "min-width:300px; max-width:300px">
          <q-card-section class="bg-grey-4">
          <q-img @click="show(item)" style="width:300px; height:300px " class="q-mx-auto"
            :src="item.imgurl"
          >
          <div class="absolute-bottom text-h5 text-center q-pa-xs">
            Rp {{item.harga_barang}}
          </div>
          </q-img>
        <q-card-section class="bg-white">
          <div class="flex flex-center text-h6">{{item.nama_barang}}</div>
        </q-card-section>
          </q-card-section>
      </div>
    </div>
        <div class="q-pa-lg flex flex-center">
            <q-pagination
            v-model="current"
            color="black"
            :max="3"
            :boundary-links="true">
            </q-pagination>
        </div>
    </q-card>
  </div>
</template>
<style scoped>
  .garis {
      margin-top: 1%;
  }
  .garis2{
    margin-top:0%;
    margin-bottom: 1%;
  }
  #search{
  width: 300px !important;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 10px
} 
</style>
<script>
import containeer from '../../api/admin/container';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/admin/getbarang';

export default {
  data() {
    return {
    images:[],
   
   }
  },
   computed: {
    getImgs() {
      this.getImg()
    }
  },
  beforeCreate() {
    let getPisau = localStorage.getItem('Pisau')
         let self=this;
     product.getBarangByKategori(window, getPisau)
        .then(function(result){
          console.log("result:", result)
          return self.images=result.data
                })
                .catch(function (err) {
                    console.log(err);
                });
     },
  methods:{
 findByKategori(Blender){
        localStorage.setItem('Blender','Blender')
      console.log("blender:",this.Blender)
      this.$router.push('/customer/katalog2')
      // try{
      //   const self = this
      // product.getBarangByKategori(window, self.Blender)
      //   .then(function(result){
      //     console.log("result:", result)
      //     return self.images=result.data

      //     // return self.images=result.data
      //   })
      // } catch (error){
      //   console.log(error.message);
      // }
    },
  
  findByKategori1(Pisau){
        localStorage.setItem('Pisau','Pisau')
      console.log("pisau:",this.Pisau)
      this.$router.push('/customer/pisau')
  },
  findByKategori2(Kompor){
        localStorage.setItem('Kompor','Kompor')
      console.log("kompor:",this.Kompor)
      this.$router.push('/customer/kpp')
  },
  findByKategori3(Kulkas){
        localStorage.setItem('Kulkas','Kulkas')
      console.log("kulkas:",this.Kulkas)
      this.$router.push('/customer/kulkas')
  },
  findByKategori4(Rice){
        localStorage.setItem('Rice','Rice')
      console.log("rice:",this.Rice)
      this.$router.push('/customer/rice')
  },
  findByName(search) {
          console.log(this.search)
          localStorage.setItem('search', this.search)
          this.$router.push('/customer/search')
        //   
      }
  },
}
</script>