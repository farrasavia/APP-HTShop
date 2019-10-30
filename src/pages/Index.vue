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
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    </q-page>
    <div class="column" style="height: 30px" />
    <q-page>
    <q-card class="my-card" id="kecil">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section class="">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        <q-btn flat round color="Black" icon="fas fa-cart-plus"/>
        
      </q-card-section>
    </q-card>
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
