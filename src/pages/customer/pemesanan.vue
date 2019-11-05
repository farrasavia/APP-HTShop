<template>
<div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
        <div class="col-5">
        <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        >
        <q-carousel-slide :name="1" img-src="./statics/rice.jpeg" />
        <q-carousel-slide :name="2" img-src="./statics/ricee.jpeg"  />
        <q-carousel-slide :name="3" img-src="./statics/riceee.jpeg"  />
        <q-carousel-slide :name="4" img-src="./statics/riceeee.jpeg"  />
        </q-carousel>
        <q-card-section class="bg-white">
        <div class="flex flex-center text-h5">Rp 500.000</div>
        <div class="flex flex-center text-h6">Rice Cooker Cosmos RC2001</div>
        <div class="flex flex-center text-h6">
         <q-btn color="grey-6" label="Beli" @click="alert = true"/>
        </div>
        </q-card-section>
      </div>
    <q-dialog v-model="alert">
      <q-card style="width:500px">
        <q-card-section>
          <div id="form" class="q-mx-auto" style="max-width: 800px">
              <q-form class="q-gutter-md">
                  <q-input 
                    filled v-model="tanggal" 
                    type="date" 
                    hint="Tanggal" 
                    />
                  <q-input 
                    filled v-model="nama" 
                    label="Masukkan Nama *" 
                    hint="Nama Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                  <q-input 
                    filled v-model="alamat" 
                    label="Masukkan Alamat *" 
                    hint="Alamat Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                  <q-input 
                    filled v-model="telepon" 
                    label="Masukkan Telepon *" 
                    hint="Telepon Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                <div class="q-gutter-sm">
                    <q-radio v-model="pengiriman" val="JNE Express" label="JNE Express" color="black" />
                    <q-radio v-model="pengiriman" val="Paxel Express" label="Paxel Express" color="black" />
                    </div>
                    <div class="q-px-sm q-mt-sm">
                    Jasa Pengiriman : <strong>{{pengiriman}}</strong>
                    </div>
                  <q-input 
                    filled v-model="catatan" 
                    label="Masukkan Catatan *" 
                    hint="Catatan Pemesan" 
                    lazy-rules 
                    :rules="[ val => val && val.length > 0 || 'Please type something']" />
                <q-card-section>
                <div class="flex flex-center">
                    <q-btn color="grey-6" label="Pesan Sekarang" />
                </div>
                </q-card-section>
                <q-card-section>
                <div class="flex flex-center">
                    <q-btn  label="Batal" color="grey-6" @click="batal()" />
                </div>
                </q-card-section>
              </q-form>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
      <div class="col-7">
        <q-card dark bordered class="bg-white my-card">
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Deskripsi</div>
            </q-card-section>
            <q-separator white inset />
            <q-card-section class="text-h6" style= "color : black">
            Nama Barang 
            </q-card-section>
            <q-card-section>
             
            </q-card-section>
            <q-card-section class="text-h6" style= "color : black">
            Kondisi
            </q-card-section>
            <q-card-section>
             
            </q-card-section>
            <q-card-section class="text-h6" style= "color : black">
            Harga
            </q-card-section>
            <q-card-section>
             
            </q-card-section>            
            <q-card-section class="text-h6" style= "color : black">
            Keterangan
            </q-card-section>
            <q-card-section>
             
            </q-card-section>
        </q-card>
        </div>
    </div>
        <q-card dark bordered class="bg-white bawah">
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Produk Lainnya</div>
            </q-card-section>
        </q-card>
    <q-card dark bordered class="bg-white">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-card-section class="a bg-white">
        <q-img
          src="../statics/mejikom1.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 200.000
          </div>
        </q-img>
        </q-card-section>
        <q-card-section class="a bg-white">
        <div class="flex flex-center text-h6" style= "color : black">Rice Cooker Miyako MCM687</div>
        </q-card-section>
      </div>
      <div class="col-4">
        <q-card-section class="a bg-white">
        <q-img
          src="../statics/mixer.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 320.000
          </div>
        </q-img>
        </q-card-section>
        <q-card-section class="a bg-white">
        <div class="flex flex-center text-h6" style= "color : black">Mixer Philips HD 1552</div>
        </q-card-section>
      </div>
      <div class="col-4">
        <q-card-section class="a bg-white">
        <q-img
          src="../statics/blender.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 250.000
          </div>
        </q-img>
        </q-card-section>
        <q-card-section class="a bg-white">
        <div class="flex flex-center text-h6" style= "color : black">Blender Philips HL 1606</div>
        </q-card-section>
      </div>
    </div>
    </q-card>
</div>
</template>

<style scoped>
    .my-card {
         height: 531px;
         width: 100%;
         max-width: auto
    }
    .bawah {
         margin-top: 1%;
         height: 70px;
         width: 100%;
         max-width: auto
    }
    .a {
            border:1px solid grey;
    }
</style>

<script>
export default {
      data () {
    return {
      slide: 1,
      alert: false,
        form: {
                nama: '',
                alamat: '',
                telepon: '',
                pengiriman: '',
                catatan:''
            },
        batal() {
                alert = false
            }
    }
  }
}
</script>