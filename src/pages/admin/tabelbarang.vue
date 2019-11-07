<template>
<div class="q-pa-lg">
  <div class="row">
    <div class="col" style="align : center">
      <q-toolbar class="bg-primary text-black shadow-2">
        <q-toolbar-title>Tabel Barang</q-toolbar-title>
      </q-toolbar>

      <q-list bordered class="rounded-borders bg-white">
        <q-item class="bg-teal">
          <q-item-section avatar top class="col-1 gt-xm" style="align : left">
              <q-item-label class="q-mt-sm">No</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2   gt-xm" style="align : left">
              <q-item-label class="q-mt-sm">Nama Barang</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm">Kategori</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">Jumlah</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">Harga</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">Kondisi</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm">Keterangan</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
              <q-item-label class="q-mt-sm text-center">Aksi</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-for="(barang, index) in barangs" :key="barang.id" class="bg-grey-3" line="1">
          <q-item-section avatar top class="col-1 gt-xm">
              <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2   gt-xm" style="align : left">
              <q-item-label class="q-mt-sm">{{barang.nama_barang}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.kategori}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">{{barang.quantity}}</q-item-label>
          </q-item-section>
          
          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">{{barang.harga_barang}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-1 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm text-center">{{barang.kondisi}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm" style="align : center">
              <q-item-label class="q-mt-sm">{{barang.keterangan}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-xm">
            <div class="q-mt-sm flex flex-center" style="align : right">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(barang.id)" />
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(barang)"/>
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</div>
</template>

<style>

</style>

<script>
import baraang from '../../api/admin/getbarang';
export default {
    data () {
    return {
      barangs: [{}],
      separator: 'vertical',
      date: '2019-02-01 12:44',
      form:{
        nama_barang:'',
        kategori:'',
        quantity:'',
        harga_barang:'',
        kondisi:'',
        keterangan:''

      }
    }
  },
  async mounted() {
        const response = await
        baraang.getBarang(window) 
          {
            this.barangs = response
          }
  },
  methods : {
    onDelete(id) {
      if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
          baraang.deleteBarang(window, id)
              .then((res) => {
                  baraang.getBarang(window)
                      .then((res) => {
                          this.barangs = res.data
                          this.$router.go('/dashboard/tabelbarang')
                      })
                      .catch(() => {
                          alert('Error load data');
                      })
              })
              .catch(() => {
                  alert('Error load data');
              })
          console.log("delete called");
      }
    },
    edit(barang) {
            if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')) {
                try {
                    this.dialog = true
                    this.updateSubmit = true
                    this.form.id = barang.id
                    this.form.nama_barang = barang.nama_barang
                    this.form.kategori = barang.kategori
                    this.form.quantity = barang.quantity
                    this.form.harga_barang = barang.harga_barang
                    this.form.kondisi = barang.kondisi
                    this.form.keterangan = barang.keterangan

                } catch (error) {
                    console.log(error.message)
                }
            }
        },
        batal() {
            if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')) {
                this.dialog = false
            }
        },
        update(id) {
            const self = this
            baraang.putBarang(window, self.form.nama_barang, self.form.kategori, 
            self.form.quantity, self.form.harga_barang, self.form.kondisi, self.keterangan)
            .then(function (result) {
                self.$router.go('/employees')
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    
  }
        
}
</script>
