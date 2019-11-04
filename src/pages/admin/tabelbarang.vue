<template>
  <div class="q-pa-md">
    <div class="q-pa-md" style="max-width: 300px">
    <q-input filled v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date color="blue" v-model="date" mask="YYYY-MM-DD HH:mm" />
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time color="blue" v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
    />

    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-right">ID</th>
          <th class="text-left">Nama barang</th>
          <th class="text-right">Harga</th>
          <th class="text-right">Terjual</th>
          <th class="text-right">Kuantitas</th>
          <th class="text-right">Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">A</td>
          <td class="text-right">Panci</td>
          <td class="text-right">600.000</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right"></td>
        </tr>
        <tr>
          <td class="text-left">B</td>
          <td class="text-right">Kuali</td>
          <td class="text-right">900.000</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right"></td>
        </tr>
 
      </tbody>
    </q-markup-table>
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
