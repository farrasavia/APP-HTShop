<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="fullscreen" :height="730"
    src="https://cdn.quasar.dev/img/parallax2.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 400px">
      <q-card style="width:300px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
        <q-input
          filled
          v-model="nama"
          label="Masukkan Nama *"
          hint="Nama Pengguna"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Nama']"
        />
        </q-card-section>      
        <q-card-section>
        <q-input
          filled
          v-model="username"
          label="Masukkan Username *"
          hint="Username"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Username']"
        />
        </q-card-section>
        <q-card-section>
        <q-input
          filled
          v-model="email"
          label="Masukkan Email *"
          hint="Email Pengguna"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Email']"
        />
        </q-card-section>
        <q-card-section>
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
        </q-card-section>
        <q-card-section>
        <q-input
          filled
          v-model="telepon"
          label="Masukkan Telepon *"
          hint="Telepon"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Telepon']"
        />
        </q-card-section>
        
        <div>
          <q-card-section>
          <q-btn class="full-width" color="red"
          label="Register"/>
          </q-card-section>
        </div>
      </q-form>
      </q-card>
    </div>
  </q-parallax>
</div>
</div>
</template>

<style lang="stylus">

#form {
    margin-top: 0%;
    margin-left: 5%;
    border:15px solid #4682B4;
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