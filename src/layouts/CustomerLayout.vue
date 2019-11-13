<template>

  <q-layout view="hhh lpR fff" class="bg-grey-3">
    
    
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        /> -->

        <q-toolbar-title id="stick">
          <q-btn flat to="/customer/">
        <img src="../statics/logoku.png">
          </q-btn>
         </q-toolbar-title>

    <div id="search">
        <q-input
        
        class="bg-white "
        v-model="search"
        filled
        placeholder="Search">
        <template v-slot:append >
          
          <q-icon name="search"/>
        </template>
      </q-input>
    </div>
        
          <!-- <q-menu  
          transition-show="rotate"
          transition-hide="rotate">
        <div class="row no-wrap q-pa-md" id ="form">
          <div class="column">
            <div class="text-h6 q-mb-md">Login User</div>
            <q-form
             @submit="onSubmit"
             class="q-gutter-md"
           >
            <q-input
            filled
            v-model="username"
            label="Masukkan Email *"
            hint="Email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Masukkan Email']"
          />
           <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Password *" hint="Password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn label="Login" type="submit" style= "color : Black"/>
            <q-btn
              color="Black"
              label="Register"
              push
              size="md"
              flat class="q-ms"
              to = "register"
            />
            </q-form>
             
          </div>
          </div>
      </q-menu> -->
    <!-- </q-btn> -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
      <q-separator color="black" style="height:2px"/>
       <div class="column" style="height: 10px"/>

        
        <q-btn  color="black" label="Semua Barang" float flat class="q-mx-sm" to="katalog">
        </q-btn>
        <!-- <q-btn  color="black" label="Kategori" float flat class="q-mx-sm" id="">
          
          <q-menu
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-list style="min-width: 100px">
            <q-item clickable to = "blender">
              <q-item-section >Blender</q-item-section>
            </q-item>
             <q-separator />
            <q-item clickable  to = "kulkas">
              <q-item-section>Kulkas</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable to = "kpp">
              <q-item-section>Kompor, Penggorengan, & Panci</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable to = "pisau">
              <q-item-section>Pisau</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable to = "rice">
              <q-item-section>Rice Cooker</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn> -->
        <q-btn-dropdown id="pojok" label="PENGATURAN" 
        flat class="bg-white text-black float-right">
        <q-list>
          <q-item clickable v-close-popup 
          tag="a" @click="logout()">
            <q-item-section>
              <q-item-label color="black" >Keluar Akun</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
        <router-link to="/customer/keranjang">
        <q-btn id="pojok" class="float-right" flat round icon="shopping_cart" color="white" text-color="black" />
        </router-link>
        <!-- <q-dialog v-model="fixed">
      <q-card style="width:700px">
        <q-toolbar class="bg-primary text-black shadow-2">
      <q-toolbar-title>Tabel Barang</q-toolbar-title>
    </q-toolbar>

    <q-list bordered class="rounded-borders bg-white">
      <q-item class="bg-teal">
        <q-item-section avatar top class="col-1 gt-xm" style="align : left">
            <q-item-label class="q-mt-sm">No</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2   gt-xm" style="align : left">
            <q-item-label class="q-mt-sm">Nama Barang</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Jumlah</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col-2 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Harga</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Keterangan</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm">
            <q-item-label class="q-mt-sm flex flex-center">Aksi</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar top class="col-1 gt-xm">
            <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2   gt-xm" style="align : left">
            <q-item-label class="q-mt-sm">Panci</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">90</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col-2 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Rp 750000</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">warna kuning-silver</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm">
          <div class="q-mt-sm flex flex-center" style="align : right">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="blue" v-close-popup />
          <q-btn flat label="Accept" color="blue" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black">
     <q-separator color="blue-grey-3" inset />
     <div class="column">
       <div class="column" style="height: 70px"/>
         <div class="row" style="height: 180px">
            <div class="col-1 q-gutter-xl"/>
            <div class="col-3">
              <div class="text-left text-overline">TENTANG KAMI</div>
              <div class="text-left text-caption">Kami Hadir Untuk Membuktikan Kesamaan Pemikiran </div>
              <div class="text-left text-caption">Bahwa Kami Bisa Disini dan Menyamakan Sebuah Pikiran </div>
              <div class="text-left text-caption">Serta Dengan Adanya Kesamaan Pemikiran Membuktikan </div>
              <div class="text-left text-caption">Bahwa Kami Memang Ada Disini dan Membuktikannya</div>
              <div class="text-left text-caption">HTShop Solusi Terbaik Menyamakan Pemikiran</div>
            </div>
            <div class="col-2"/>
            <div class="col-2">
              <div class="text-left text-overline">MENU FOOTER</div>
              <div class="text-left text-caption">AllProduk</div>
              <div class="text-left text-caption">About</div>
              <div class="text-left text-caption">Contact Us</div>
            </div>
            <div class="col-1"/>
            <div class="col-3 q-gutter-xs">
              <div class="text-left text-overline">NEWSLETTER</div>
              <div class="text-left text-caption">Berlangganan untuk menerima pembaruan,</div>
              <div class="text-left text-caption">akses ke penawaran eksklusif, dan banyak lagi.</div>
              <div style="height: 10px"/>
               <q-input outlined v-model="ph" placeholder="Enter your email addres" :dense="dense" style="300px" />
               <div style="height: 10px"/>
               <q-btn style="background: #283b39; color: white" label="Langganan" />
            </div>
         </div> 
         <div class="row" style="height: 100px">
          <div class="col-1 q-gutter-xl "/>
          <div class="col-10">
            <div class="column" style="100px">
              <div class="col-1">
                <div class="text-left text-overline">Kenali kami lebih baik dengan mengikuti pegangan media</div>
                <div class="text-left text-overline">sosial kami!</div>
              </div>
            </div> 
         </div>
        </div>

          <div class="column" style="240px">
            <div class="row">
              <div class="col-1 q-gutter-xl "/>
              <div class="col1">
                <div class="text-left text-overline">@Half-Twelve</div>
              </div>
              <div class="col-10"/>
              <div class="col-auto justify-end">
                <q-img src="./statics/master.png" style="width:30px"/>
                <q-img src="./statics/visa.png" style="width:30px"/>
              </div>
            </div>
          </div>

         </div>
    </q-footer>

  </q-layout>
</template>

<style scoped>
/* css Form Login */
#form {  
    border: 10px solid rgb(0, 0, 0);
}

 #search{
  width: 400px !important;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px
} 

/* #pojok{
  left: 1025px;
} */

/* .src{
        width: 400px;
        max-height: 15px;
        margin-right:600px;
    } */
</style>



<script>
export default {
  data () {
    return {
      // fixed: false
     
    }
  },
  // async mounted(){
  //   let getrole  = await localStorage.getItem('role')
  //   if(getrole != 'customer'){
  //     this.$router.push('/')
  //   }
  // },
  //  methods: {
  //      logout(){
  //     localStorage.removeItem('role')
  //     localStorage.removeItem('email')
  //     this.$router.push("/")

  //     }
  //  },
   async  mounted(){
    let getRole = await localStorage.getItem('role');
    if(getRole !='customer' || getRole ==='owner'){
         this.$router.push('/owner/')
      }
      else if(getRole !='customer' || getRole ==='admin'){
         this.$router.push('/dashboard')
      }
      else if(getRole ===null){
         this.$router.push('/')
      }
       else {
        alert('anda login sebagai customer')
      }  
    },
    methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        this.$router.push('/');
      }
    }
}
</script>
