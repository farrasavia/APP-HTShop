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
    <q-card dark bordered class="bg-white bawah">
      <q-card-section>
      <div class="text-h4 flex flex-center" style= "color : black" >Produk Terbaru</div>
      </q-card-section>
    </q-card>
    <div class="column" style="height: 30px" />
    <q-page>
    <div class=" row items-start">
    <div class=" col-4">
    <q-card class="my-card q-mx-auto" id="kecil">
      <img src="https://cdn.quasar.dev/img/mountains.jpg"
        style="width: 100%"
      >    
      <q-card-section class="">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        <q-btn flat round color="Black" icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
    </div>
    <div class="col-4">
    <q-card class="my-card q-mx-auto" id="kecil">
      <img src="https://cdn.quasar.dev/img/mountains.jpg"
      style="width: 100%"
      >
      <q-card-section class="">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        <q-btn flat round color="Black" icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
    </div>
    <div class="col-4">
    <q-card class="my-card q-mx-auto" id="kecil">
      <img src="https://cdn.quasar.dev/img/mountains.jpg"
      style="width: 100%"
      >
      <q-card-section class="">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        <q-btn flat round color="Black" icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
    </div>
    </div>
  </q-page>
  </div>
  </template>
  
  <style scoped>
  .bawah {
         margin-top: 1%;
         height: 70px;
         width: 100%;
         max-width: auto
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
export default {
   data () {
    return {
      slide: 1
    }
  },
  name: 'PageIndex'
}
</script>
