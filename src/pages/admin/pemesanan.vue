<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto bg-secondary" style="max-width: 1200px">
                <q-item-label header class="bg-secondary">
                    <q-btn class="q-mr-md" color="red" icon="add_box" label="asdasd" size="sm" @click="add()">
                        <q-tooltip content-class="bg-red" anchor="center right" content-style="font-size: 16px" :offset="[10, 10]">
                            ADD DATA
                        </q-tooltip>
                    </q-btn>
                    <div class="float-right">
                        <q-btn class="float-left" color="red" icon="search" size="sm" @click="findByName()">
                        <q-tooltip content-class="bg-red" anchor="center right" content-style="font-size: 16px" :offset="[10, 10]">
                           SEARCH
                        </q-tooltip>
                    </q-btn>
                    <q-input class=" src bg-white"
                    v-model="find_name"
                    filled
                    lazy-rules
                    />
                    
                    </div>
                </q-item-label>
                
                <q-item class="bg-teal">
                    <q-item-section avatar top class="col-0 gt-xm flex flex-center" style="align :left">
                        <q-item-label class="q-mt-sm">No</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Nama Barang</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-sm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Tanggal</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Nama Pemesan</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center" style="align : center">
                        <q-item-label class="q-mt-sm">Alamat Pemesan</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Pengiriman</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Catatan</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                    <q-item-label class="q-mt-sm flex flex-center">Status</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="bg-grey-3" line="1">
                    <q-item-section avatar top class="col-0 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">1</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">Rice Cooker</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">5-11-2019</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">Royani Saragih</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">Nomaden</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">Burung Elang</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">Males Nyatet</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-toggle v-model="accept" color="teal"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
    </div>
</div>
</template>
<style scoped>
    .src{
        width: 200px;
        height: 26px;
          }
</style>

</<script>
export default {
    data() {
        return {
            accept: false
        }
    }
}
</script>
        