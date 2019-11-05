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
          v-model="form.nama_barang"
          label="Masukkan Nama Barang*"
          hint="Nama Barang"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Masukkan Nama']"
        />
        
        <div class="q-gutter-sm">
        <q-radio v-model="form.kategori" val="Blender" label="Blender" color="black" />
        <q-radio v-model="form.kategori" val="Pisau" label="Pisau" color="black" />
        <q-radio v-model="form.kategori" val="Kompor" label="Kompor" color="black" />
        <q-radio v-model="form.kategori" val="Rice Cooker" label="Rice Cooker" color="black" />
       </div>
        <div class="q-px-sm q-mt-sm">
        Kategori Barang : <strong>{{form.kategori}}</strong>
        </div>
             
      <q-input
        filled
        type="number"
        v-model="form.quantity"
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
        <q-input outlined v-model="form.harga_barang" type="number" hint="Harga Barang" prefix="Rp" />
        
        <div class="q-gutter-sm">
        <q-radio v-model="form.kondisi" val="Baru" label="Baru" color="black" />
        <q-radio v-model="form.kondisi" val="Bekas" label="Bekas" color="black" />
        </div>
        <div class="q-px-sm q-mt-sm">
        Kondisi Barang : <strong>{{form.kondisi}}</strong>
        </div>

        <q-input
          filled
          v-model="form.keterangan"
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
            <q-btn color="red" label="Submit"/>
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
      form: {
          nama_barang :'',
          kategori :'',
          quantity :'',
          harga_barang :'',
          kondisi :'',
          keterangan :''
      }
    }
  },
  methods :{
    onSubmit() {
        const self = this
        barang2.postBarang(window, self.form.nama_barang, self.form.kondisi, 
        self.form.quantity, self.form.kategori, self.form.harga_barang, self.form.keterangan)
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