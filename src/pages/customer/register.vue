<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="fullscreen" :height="730"
    src="../../statics/bgregis.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 700px">
      <q-card style="width:700px; height: 275px " >
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
     
        <q-card-section>
           <div class="row">
          <div class="col q-ma-sm">
        <q-input
          filled
          v-model="nama"
          label="Masukkan Nama *"
          hint="Nama Pengguna"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Nama']"
        />
             
        
        <q-input
          filled
          v-model="username"
          label="Masukkan Username *"
          hint="Username"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Username']"
        />
        
        
        <q-input
          filled
          v-model="email"
          label="Masukkan Email *"
          hint="Email Pengguna"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Email']"
        />
          </div>
        
       <div class="col q-ma-sm">
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" 
        hint="Password" label="Masukkan Password *">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        
       
        <q-input
          filled
          v-model="telepon"
          label="Masukkan Telepon *"
          hint="Telepon"
          lazy-rules
          style="padding-top: 20px"
          :rules="[ val => val && val.length > 0 || 'Masukkan Telepon']"
        />
        <div style="padding-top: 20px"/> 
        <q-btn class="full-width" color="red"
          label="Register"/>
          
          <!-- <q-item-label id="font" class="flex flex-center">OR</q-item-label>
         
          <q-btn class="full-width" color="red"
          label="Login"/> -->
       </div>
           </div>
          </q-card-section>
       
      </q-form>
      </q-card>
    </div>
  </q-parallax>
</div>
</div>
</template>

<style lang="stylus">
#font {
    font-size : 16px;
        margin-top: 0%;
    color: red
  }

#form {
    margin-top: 4%;
    margin-left: 5%;
    border:15px solid #000000;
  }
</style>
<script>
export default {
    data () {
    return {
      nama : "",
      username: "",
      email:"",
      password: "",
      telepon:"",
      isPwd: true
    }
  },
}
</script>