<template>
  <div class="q-pa-md" style="max-width: 1000px">
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
            <q-item-label class="q-mt-sm">Jumlah</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Harga</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Kondisi</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Keterangan</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm">
            <q-item-label class="q-mt-sm flex flex-center">Aksi</q-item-label>
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
            <q-item-label class="q-mt-sm">{{barang.quantity}}</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">{{barang.harga_barang}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">{{barang.kondisi}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">{{barang.keterangan}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm">
          <div class="q-mt-sm flex flex-center" style="align : right">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
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
      date: '2019-02-01 12:44'
    }
  },
  async mounted() {
        const response = await
        baraang.getBarang(window) 
          {
            this.barangs = response
          }
}
        
}
</script>
