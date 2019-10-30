<template>
<div class="q-pa-md">
    <q-item-label id="font" class="q-pa-md">PRODUK TERBARU</q-item-label>
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
    </div>
        <q-item-label id="font" class="q-pa-md">SEMUA PRODUK</q-item-label>
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 100%"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
           Rp 20.000 
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
           Rp 20.000
          </div>
        </q-img>
      </div>
      <div class="col-3">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Rp 20.000
          </div>
        </q-img>
      </div>
    </div>
        <div class="q-pa-lg flex flex-center">
            <q-pagination
            v-model="current"
            color="black"
            :max="3"
            :boundary-links="true">
            </q-pagination>
        </div>
  </div>
</template>
</<style scoped>
    #font {
    font-size : 25px;
    color: black
  }
</style>
<script>
export default {
    current: 1
}
</script>