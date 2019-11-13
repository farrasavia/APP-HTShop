<template>
<div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
        <div class="col-5">
        <!-- <q-carousel
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
        </q-carousel> -->
        <q-card dark bordered class="bg-white my-card">
        <q-card-section style="height:530px" class="bg-white">
        <q-img  class="q-mx-auto" style="height:380px"
        :src="images.imgurl" >
        <div class="absolute-bottom text-h5 text-center q-pa-xs" style="color:white">Rp {{images.harga_barang}}</div>
        </q-img>
        <q-card-section class="bg-grey-3" style="margin-top:1%">
        <div class="flex flex-center text-h6" style="color:black">{{images.nama_barang}}</div>
        </q-card-section>
        <div class="flex flex-center text-h6" style="margin-top:3%">
         <q-btn color="grey-6" label="Beli" @click="confirm = true"/>
        </div>
        </q-card-section>
        </q-card>
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
            <q-card-section class="text-h4" style= "color : black">
             {{images.nama_barang}}
            </q-card-section>
            <q-card-section class="text-h6" style= "color : black">
            Kondisi
            </q-card-section>
            <q-card-section class="text-h4" style= "color : black">
             {{images.kondisi}}
            </q-card-section>
            <q-card-section class="text-h6" style= "color : black">
            Harga
            </q-card-section>
            <q-card-section class="text-h4" style= "color : black">
             Rp {{images.harga_barang}}
            </q-card-section>          
            <q-card-section class="text-h6" style= "color : black">
            Keterangan
            </q-card-section>
            <q-card-section class="text-h4" style= "color : black">
             {{images.keterangan}}
            </q-card-section>
        </q-card>
        </div>
    </div>

    <!-- //add q-dialog 11/13/2019 -->
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="flex flex-center">
          <span class="flex flex-center text-h5">Barang Di Masukkan Ke Dalam Keranjang</span>
          <span class="flex flex-center text-h5">Masuk Ke Keranjang Untuk Proses Pembayaran</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Batal" color="black" v-close-popup />
          <q-btn flat label="Lanjut Ke Keranjang" color="black" v-close-popup @click="cart(images)"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

        <q-card dark bordered class="bg-white bawah">
            <q-card-section>
            <div class="text-h4 flex flex-center" style= "color : black" >Produk Lainnya</div>
            </q-card-section>
        </q-card>


    <q-card dark bordered class="bg-white">
    <div class="row" >
      <div class="col-4" v-for="gambar in gambar2" :key="gambar.id">
        <q-card-section class="a bg-white flex flex-center">
        <q-img @click="show(gambar)" style="width:400px; height:400px " class="q-mx-auto"
          :src="gambar.imgurl"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp {{gambar.harga_barang}}
          </div>
        </q-img>
        </q-card-section>
        <q-card-section class="a bg-white">
        <div class="flex flex-center text-h6" style= "color : black">{{gambar.nama_barang}}</div>
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
import product from '../../api/barang/index';
import product1 from '../../api/admin/getbarang';
import containeer from '../../api/admin/container';
import {downloadImage} from '../../api/upload/index';
import cart from '../../api/cart/index';

export default {
      data () {
    return {
      images:[],
      gambar2:[],
      slide: 1,
      alert: false,
      confirm: false,
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
  },
    computed: {
    getImgs() {
      this.getImg()
    }
  },

  beforeCreate() {
    let getId= localStorage.getItem('id');
    console.log(getId)
      let self=this;
      product
      .getproductbyId(window, getId )
        .then(function (result) {
            console.log(result);
            self.images= result;
            if(result){
                localStorage.setItem('imgurl', result.imgurl);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
        product1
        .getBarang(window)
        .then(function (result) {
            for (let i = 0; i < 3; i++) {
            self.gambar2.push(result[i])
    }
        })
        .catch(function (err) {
            console.log(err);
        });
      },

    methods : {
       cart(images) {
        console.log(images.imgurl)
        this.confirm = true
        let getIdCustomer= localStorage.getItem('id_customer');
        let getIdBarang= localStorage.getItem('id');
        let getimgurl= localStorage.getItem('imgurl');
        let self=this;
        console.log(getIdCustomer, getIdBarang, getimgurl)
        cart.postCart(window, getIdCustomer, getIdBarang, getimgurl)
        .then(function(result)
            {
              if(result){
                  self.$router.push('/customer/keranjang');
              } 
            })
        .catch(function(err){
            console.log(err);
        });
      },
      show(gambar){
        console.log(gambar)
      localStorage.setItem('id', gambar.id)
      this.$router.push('/customer/pemesanan2')
    }
  },
  
}

</script>