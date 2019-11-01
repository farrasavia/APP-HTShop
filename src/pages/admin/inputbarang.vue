<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-lg bg-white"
      style="width:700px; height:850px "
    >
      <q-uploader
        color="blue"
        url="http://localhost:8080/upload"
        label="Filtered (jpg only)"
        multiple
        :filter="checkFileType"
        style="max-width: 300px"
      />
      <q-input
        filled
        v-model="name"
        label="Nama Barang"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Nama Barang']"
      />

      <q-input
        filled
        type="number"
        v-model="qtt"
        label="Kuantitas"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'masukkan jumlah barang',
          val => val > 0 || 'Kuantitas tidak boleh kosong atau 0'
        ]"
      />

      <q-input outlined v-model="number" type="number" prefix="Rp" />

      <q-input filled label="Kategri Barang"/>

      <q-input
        v-model="text"
        filled
        type="textarea"
        label="Deskripsi barang"
      />
      
      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn 
        :loading="loading4" @click="simulateProgress(4)" style="width: 150px"
        color="blue" type="submit" label="submit" >
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left"/>
            Loading...
          </template>
        </q-btn>

        <q-btn label="Reset" type="reset" color="blue" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      age: null,
      accept: false,
      loading4: false,
      number: null
    }
  },
  
  methods: {
    checkFileSize (files) {
      return files.filter(file => file.size < 2048)
    },

    checkFileType (files) {
      return files.filter(file => file.type === 'image/jpg')
    }
  },
  onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },

    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    }

}
</script>

<style>

</style>