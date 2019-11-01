<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="fullscreen" :height="730"
    src="../statics/admin.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 300px">
      <q-card style="width:300px">
        <q-item-label id="font" class="flex flex-center">OWNER</q-item-label>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
        <q-input
          filled
          v-model="username"
          label="Your Username *"
          hint="Username"
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
          <q-btn class="full-width" color="blue-grey-10"
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
export default {
    data () {
    return {
      username: "",
      password: "",
      isPwd: true
    }
  },
}
</script>