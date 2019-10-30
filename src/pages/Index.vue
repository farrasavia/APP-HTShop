<template>
  <div class="q-pa-md">
    <q-page>
    <q-carousel
      animated
      arrows
      v-model="slide"
      infinite
      autoplay
      thumbnails
      transition-prev="rotate-right"
      transition-next="slide-left"
      id=""
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="./statics/1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    </q-page>
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
  
  <<style scoped>
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
