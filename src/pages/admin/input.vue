<template>
<div class="q-pa-md q-gutter-md">
<div class="row justify-between">
  <q-parallax class="q-pa-md" :height="730"
    src="../../statics/bgregis.jpg"
  >
    <div id="form" class="flex flex-center" style="max-width: 700px">
      <q-card style="width:700px; height: 440px " >
        <q-card-section>
        <div class="text-h4 flex flex-center" style= "color : black" >Form Input Barang</div>
        </q-card-section>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
     
        <q-card-section>
           <div class="row">
          <div class="col q-ma-sm">
        <q-input
          filled
          v-model="nama_barang"
          label="Masukkan Nama Barang*"
          hint="Nama Barang"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Nama']"
        />
        
        <div class="q-gutter-sm">
        <q-radio v-model="kategori" val="Blender" label="Blender" color="black" />
        <q-radio v-model="kategori" val="Pisau" label="Pisau" color="black" />
        <q-radio v-model="kategori" val="Kompor" label="Kompor" color="black" />
        <q-radio v-model="kategori" val="Rice Cooker" label="Rice Cooker" color="black" />
       </div>
        <div class="q-px-sm q-mt-sm">
        Kategori Barang : <strong>{{kategori}}</strong>
        </div>
             
      <q-input
        filled
        type="number"
        v-model="quantity"
        label="Masukkan Jumlah Barang *"
        hint="Kuantitas"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'masukkan jumlah barang',
          val => val > 0 || 'Kuantitas tidak boleh kosong atau 0'
        ]"
      />
          </div>
        
       <div class="col q-ma-sm">
        <q-input outlined v-model="harga_barang" type="number" hint="Harga Barang" prefix="Rp" />
        
        <div class="q-gutter-sm">
        <q-radio v-model="kondisi" val="Baru" label="Baru" color="black" />
        <q-radio v-model="kondisi" val="Bekas" label="Bekas" color="black" />
        </div>
        <div class="q-px-sm q-mt-sm">
        Kondisi Barang : <strong>{{kondisi}}</strong>
        </div>

        <q-input
          filled
          v-model="keterangan"
          type="textarea"
          label="Masukkan Keterangan *"
          hint="Keterangan Barang"
          lazy-rules
          style="padding-top: 20px"
          :rules="[ val => val && val.length > 0 || 'Masukkan Telepon']"
        />
        </div>
        </div>
        </q-card-section>
        <div class="flex flex-center">
            <q-btn color="red" label="Submit" @click="onSubmit()"/>
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
    font-size : 16px;
        margin-top: 0%;
    color: red
  }

#form {
    margin-top: 0%;
    margin-left: 5%;
    border:15px solid #000000;
  }
</style>
<script>
import barang2 from '../../api/admin/post';
export default {
    data () {
    return {
          nama_barang :'',
          kategori :'',
          quantity :'',
          harga_barang :'',
          kondisi :'',
          keterangan :''
    }
  },
  methods :{
    onSubmit() {
        const self = this
        barang2.postBarang(window, self.nama_barang, self.kondisi, 
        self.quantity, self.kategori, self.harga_barang, self.keterangan)
            .then(function (result) {
                self.$router.go('/dashboard/input')
            })
            .catch(function (err) {
                console.log(err);
            });
        },
  }
}
</script>