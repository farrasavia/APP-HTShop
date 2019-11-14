<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-5">
    
    <q-header elevated>
      <q-toolbar>
         <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          style="color: black"
        />
        <q-toolbar-title id="stick">
        <img src="~/assets/logo2.jpg">
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-gray"
    >
      <q-list>
        <q-item-label header style="color:white">Menu</q-item-label>
        <q-item clickable tag="a" href="/#/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/dashboard/input">
          <q-item-section avatar>
            <q-icon name="add_shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Barang</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/dashboard/pemesanan">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tabel Pemesanan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/dashboard/tabelbarang">
          <q-item-section avatar>
            <q-icon name="local_grocery_store" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tabel Barang</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/admin">
          <q-item-section avatar>
            <q-icon name="link_off" />
          </q-item-section>
          <q-item-section>
            <q-item-label @click="logout()">Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>



<script>
export default {
    data () {
    return {
      separator: 'vertical',
      leftDrawerOpen: true
    }
  },
  async  mounted(){
    let getRole = await localStorage.getItem('role');
    if(getRole ==='admin'){
         this.$router.push('/dashboard')
      }
      // else if(getRole ===null){
      //    this.$router.push('/admin')
      // } 
      // else {
      //   alert('anda login sebagai admin')
      // }  
    },
    methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        this.$router.push('/admin');
      }
    }
}
</script>
