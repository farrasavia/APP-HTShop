<template>
  <div class="q-pa-md">
    <q-page>
    <q-carousel
      style="max-height:500px"
      animated
      v-model="slide"
      thumbnails
      arrows
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="./statics/a.jpeg" />
      <q-carousel-slide :name="2" img-src="./statics/b.jpeg" />
      <q-carousel-slide :name="3" img-src="./statics/z.jpeg" />
      <q-carousel-slide :name="4" img-src="./statics/c.jpeg" />
    </q-carousel>
    </q-page>
    <!-- <q-card dark bordered class="bg-white bawah">
      <q-card-section>
      <div class="text-h4 flex flex-center" style= "color : black" >Produk Terbaru</div>
      </q-card-section> -->

    <!-- <div class="column" style="height: 30px" /> -->
    <!-- <q-page>
    <div class=" row items-start">
    <div class=" col-4">
    <q-card class="my-card bg-grey-5 q-mx-auto" id="kecil">
      <img src="../statics/blender.jpg"
      >    
      <q-card-section class="bg-grey-5">
        <div class="text-h6 flex flex-center" style="color: black">Blender Philips</div>
        <div class="text-subtitle2 flex flex-center h4" style="color: black">Rp 175.000</div>
      </q-card-section>

      <q-card-section class="bg-grey-5 flex flex-center">
        <q-btn flat round style="color: Black"  icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
    </div>
    <div class="col-4">
    <q-card class="my-card bg-grey-5 q-mx-auto" id="kecil">
      <img src="../statics/panci.jpg"
      >
      <q-card-section class="bg-grey-5">
        <div class="text-h6 flex flex-center" style="color: black">Panci Teflon Maspion</div>
        <div class="text-subtitle2 flex flex-center" style="color: black">Rp 150.000</div>
      </q-card-section>

      <q-card-section class="bg-grey-5 flex flex-center">
        <q-btn flat round style="color: Black"  icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
    </div> -->
    <!-- <div class="col-4">
    <q-card class="my-card bg-grey-5 q-mx-auto" id="kecil">
      <img src="../statics/mejikom.jpg"
      style="width: 100%"
      >
      <q-card-section class="bg-grey-5">
        <div class="text-h6 flex flex-center" style="color: black">Rice Cooker Young Ma</div>
        <div class="text-subtitle2 flex flex-center" style="color: black">Rp 200.000</div>
      </q-card-section>

      <q-card-section class="bg-grey-5 flex flex-center">
        <q-btn flat round style="color: Black" icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card> -->

    <q-card class="bawah" @click="getBarang()">
        <q-card-section >
          <div class="text-h6 text-center">Produk Terbaru</div>
        </q-card-section>
             <div class="row " style="padding-top: 10px">
               <div class="col q-mx-auto  column q-ma-xs" v-for="item in images" :key="item.id" style= "min-width:400px; max-width:400px">
                <q-card-section class="bg-grey-4" @click="show(item)">
                    <q-img style="width:400px; height:400px " class="q-mx-auto"
                      :src="item.imgurl"
                    />
                    <q-separator/>
                    <div class="align text-body2 q-mt-sm text-center"><b> {{item.nama_barang}}</b></div>
                    <div class="align text-caption text-center">Rp.  {{item.harga_barang}} </div>    
                </q-card-section>
                </div>
             </div>
    </q-card>
  </div>
             
          
 
  
  </template>
  
<style scoped>
  .bawah {
         margin-top: 1%;
         height: 600px;
    }
  #caros{
    border: 10px solid rgb(255, 255, 255);
  }
  #kecil{
    
    height: 400px;
    width: 400px;
  }
  #besar{
    height:650px
  }
</style>

<script>
import containeer from '../api/admin/container';
import {downloadImage} from '../api/upload/index';
import product from '../api/admin/getbarang'
export default {
   data () {
    return {
      slide: 1,
       images:[],
       search:[]
    }
  },
   computed: {
    getImgs() {
      this.getImg()
    }
  },
  beforeCreate() {
    let self=this;
    product
    .getBarang(window )
      .then(function (result) {
          console.log(result);

          for (let i = 0; i < 3; i++) {
            self.images.push(result[i])
          }
  
      })
      .catch(function (err) {
          console.log(err);
      });

    },
  // name: 'PageIndex',
  methods :{
      show(item){
      localStorage.setItem('id', item.id)
      this.$router.push('/customer/pemesanan')
    },
    getBarang(){
      let getsearch = localStorage.getItem('search')
         let self=this;
     product.getBarangByNama(window, getsearch)
        .then(function(result){
          console.log("result:", result)
          return self.images=result.data
                })
                .catch(function (err) {
                    console.log(err);
                });
    }
  }
}
</script>
