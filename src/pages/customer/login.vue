<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="fullscreen" :height="730"
    src="https://cdn.quasar.dev/img/parallax2.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 300px">
      <q-card style="width:300px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
        <q-input
          filled
          v-model="email"
          label="Email *"
          hint="Masukkan Email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        </q-card-section>
        <q-card-section>
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" 
        hint="Password" label="Your Password *">
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
          <q-btn class="full-width" label="Sign In" type="submit" color="primary"/>
          </q-card-section>
          <q-item-label id="font" class="flex flex-center">OR</q-item-label>
          <q-card-section>
          <router-link to="/register"><q-btn class="full-width" color="red"
          label="Sign up"/>
          </router-link>
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
    font-size : 10px;
    font-family: times-new-roman;
    color: red
  }
#form {
    margin-top: 0%;
    margin-left: 5%;
    border:15px solid #4682B4;
  }
</style>

<script>
import login from '../api/Login/index'
export default {
  data (){
    return{
      email:"",
      password:""
    }
  },

  methods:{
    onSubmit(){
      let self=this;
      login
      .userLogin(window, self.email, self.password)
      .then(function(result)
        {
          console.log(result);
          if(result){
            self.$router.push('/customer')
          }
        })
      .catch(function(err){
        console.log(err);
      });
    }
  }

}
</script>
