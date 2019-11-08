<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="fullscreen" :height="730"
    src="../statics/admin.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 300px">
      <q-card style="width:300px">
        <q-item-label id="font" class="flex flex-center">LOGIN ADMIN</q-item-label>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
        <q-input
          filled
          v-model="email"
          label="Masukkan Email *"
          hint="Email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
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
        <div>
          <q-card-section>
          <q-btn class="full-width" color="blue-grey-10"
          @click="onSubmit()" 
          label="Login"/>
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
#font {
    font-size : 30px;
    margin-top: 5%;
    color: #37474f
  }
#form {
    margin-top: 0%;
    margin-left: 5%;
    border:15px solid #37474f;
  }
</style>
<script>
import login_api from '../../api/Login/index'
export default {
    data () {
    return {
      email: "",
      password: "",
      isPwd: true
    }
  },
    methods: {
    onSubmit () {
        let self = this;
        login_api
            .userLogin(window, self.email, self.password)
            .then(function(result){
                console.log(result)
                if (result){
                  localStorage.setItem('email', result.email)
                  localStorage.setItem('role', result.role)
                  
                  console.log(localStorage.getItem('role'))
                if(result.role=='admin'){
                  self.$router.push('/dashboard')
                  } else if (result.role=='owner'){
                    self.$router.push('/dashboard')
                  } else {
                    self.$router.push("/customer/katalog");
                }
              }
            })
            .catch(function(err){
                console.log(err)
            });
    
      }
    },
}
</script>