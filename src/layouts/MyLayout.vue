<template>

  <q-layout view="hhh lpR fff" class="bg-grey-5">
    
    
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
        <img src="~/assets/logo2.jpg">
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
        <q-btn style= "color : black" label="Login"  flat class="q-ms-sm">
          <q-menu  
          transition-show="rotate"
          transition-hide="rotate">
        <div class="row no-wrap q-pa-md" id ="form">
          <div class="column">
            <div class="text-h6 q-mb-md">Account Login</div>
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
      </q-menu>
    </q-btn>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
       <div class="column" style="height: 10px"/>

        
        <q-btn  color="black" label="Semua Barang" float flat class="q-mx-sm" id="">
        </q-btn>
        <q-btn  color="black" label="Kategori" float flat class="q-mx-sm" id="">
          
          <q-menu
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Blender</q-item-section>
            </q-item>
             <q-separator />
            <q-item clickable>
              <q-item-section>Kulkas</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Kompor, Penggorengan, & Panci</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Pisau</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
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
              <div class="text-left text-caption">Dalam NAH Project, kami bertujuan untuk mengacaukan </div>
              <div class="text-left text-caption">sepatu miliaran dolar dengan bersikap transparan, </div>
              <div class="text-left text-caption">Anda harga yang wajar menggunakan model langsung </div>
              <div class="text-left text-caption">konsumen, dan mengembalikan semangat dan kreativitas</div>
              <div class="text-left text-caption">dengan menjadi berani untuk mengeksplorasi.</div>
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
                <div class="text-left text-overline">@TGProject</div>
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

#stick{
  position: sticky
}
/* .src{
        width: 400px;
        max-height: 15px;
        margin-right:600px;
    } */
</style>



<script>
import login_api from '../api/Login/index'
export default {
  data () {
    return {
      leftDrawerOpen: false,
      username: "",
      password: "",
      isPwd: true,

      accept: false
    }
  },

  methods: {
    onSubmit () {
        let self = this;
        login_api
            .userLogin(window, self.username, self.password)
            .then(function(result){
                console.log(result)
                if (result){
                    self.$router.push("/Berhasil");
                }
            })
            .catch(function(err){
                console.log(err)
            });
    
      }
    },
}
</script>
