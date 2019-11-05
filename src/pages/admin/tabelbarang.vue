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

      <q-item>
        <q-item-section avatar top class="col-1 gt-xm">
            <q-item-label class="q-mt-sm">1</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2   gt-xm" style="align : left">
            <q-item-label class="q-mt-sm">Panci</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">kompor</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">90</q-item-label>
        </q-item-section>
        
        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Rp 750000</q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">Baru</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm" style="align : center">
            <q-item-label class="q-mt-sm">warna kuning-silver</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-xm">
          <div class="q-mt-sm flex flex-center" style="align : right">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
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
export default {
    data () {
    return {
      separator: 'vertical',
      date: '2019-02-01 12:44'
    }
  }
}
</script>
