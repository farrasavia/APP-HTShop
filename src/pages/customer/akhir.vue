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
    <div class="text-h4 flex flex-center" style= "color : black" >Pemesanan Sukses</div>
    </q-card-section>
        <q-card dark bordered class="bg-grey-3 my-card">
            <div class="row">
                <div class="col">
                    <q-card-section class="text-h4" style= "color : black">
                    Rincian Pemesanan : 
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                   
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Nama Barang 
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                     {{pesan.nama_barang}}
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Nama Pemesan 
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    {{pesan.nama_barang}}
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Alamat Pemesan
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    {{pesan.alamat_pemesan}}
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Telepon Pemesan
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    {{pesan.alamat_pemesan}}
                    </q-card-section>            
                    <q-card-section class="text-h6" style= "color : black">
                    Total Harga
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    
                    </q-card-section>
                </div>
                <div class="col">
                    <q-card-section class="text-h4" style= "color : black">
                    Transfer ATM :
                    </q-card-section>
                    <q-card-section>
                    
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Bank Mandiri 
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    21387940902475 A/N HTShop Indonesia
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Bank BCA
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    773647634916 A/N HTShop Indonesia
                    </q-card-section>
                    <q-card-section class="text-h6" style= "color : black">
                    Bank BRI
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    756633354444 A/N HTShop Indonesia
                    </q-card-section>            
                    <q-card-section class="text-h6" style= "color : black">
                    Bank BNI
                    </q-card-section>
                    <q-card-section class="text-h7" style= "color : black">
                    666555748364 A/N HTShop Indonesia
                    </q-card-section>
                </div>
            </div>
        </q-card>
    </q-card>
    </div>
</template>

<style scoped>
    .bawah {
         margin-top: 1%;
         height: 550px;
         width: 100%;
         max-width: auto
    }
</style>

<script>

import pemesanan from '../../api/pemesanan_final/index'

export default {
   data () {
    return {
      slide: 1,
      pesan:[]
    }
  },
  beforeCreate() {
    let getId= localStorage.getItem('id');
    console.log(getId)
      let self=this;
      pemesanan
      .getPemesananById(window, getId )
        .then(function (result) {
            console.log(result);
            self.pesan= result;
        })
        .catch(function (err) {
            console.log(err);
        });
    }
}
</script>