<template>

  <q-layout view="lHh Lpr lFf" class="bg-grey-5">
    
    
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
        <q-btn color="black" label="Semua Barang" flat class="q-mx-sm" id="katalog">
        </q-btn>
        <q-btn color="black" label="Kategori" flat class="q-mx-sm" id="kategori">
          
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
        <q-input
        class="src bg-white q-mr-xl"
        v-model="search"
        filled
        placeholder="Search">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
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
            />
            </q-form>
             
          </div>
          </div>
      </q-menu>
    </q-btn>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
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
  </q-layout>
</template>

<style scoped>
/* css Form Login */
#form {  
    border: 10px solid rgb(0, 0, 0);
}
/* css btn Katalog */
#katalog{
  position:sticky;
    right: 1200px
}
#kategori{
  position: sticky;
  right: 1100px
  
}

/* #search{
  right: 100px
} */

#stick{
  position: sticky
}
.src{
        width: 400px;
        max-height: 15px;
        margin-right:600px;
    }
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
