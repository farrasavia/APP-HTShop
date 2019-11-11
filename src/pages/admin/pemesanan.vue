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
                        <q-btn class="float-left" color="red" icon="search" size="sm">
                        <q-tooltip content-class="bg-red" anchor="center right" content-style="font-size: 16px" :offset="[10, 10]">
                           SEARCH
                        </q-tooltip>
                    </q-btn>
                    <q-input class=" src bg-white"
                    
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
                <q-item  v-for="(pemesanan,index ) in pemesanans" :key="pemesanan.id" class="bg-grey-3" line="1">
                    <q-item-section avatar top class="col-0 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.nama_barang}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.tanggal}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.nama_pemesan}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.alamat_pemesan}} & {{pemesanan.telp_pemesan}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.pengiriman}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-1 gt-xm flex flex-center">
                        <q-item-label class="q-mt-sm">{{pemesanan.catatan}}</q-item-label>
                    </q-item-section>

                    <q-item-section  top class="col-2 gt-xm flex flex-center">
                        <q-toggle @input="update(pemesanan.id, pemesanan.status)" v-model="pemesanan.status" color="teal">{{pemesanan.status}}</q-toggle>

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

<script>
import pemesanaan from '../../api/admin/getpemesanan'
export default {
    data() {
        return {
            pemesanans: [{}],
            status: false,
            id:''
        }
    },
    async mounted() {
        const response = await
        pemesanaan.getPemesanan(window) 
          {
            this.pemesanans = response
        }
    },
    methods : {
            update(id, status) {
            const self = this
            console.log(status, id)
            pemesanaan.putPemesanan(window, id, status)
            .then(function (result) {
                // self.$router.go('/dashboard/pemesanan')
                console.log(result)
            })
            .catch(function (err) {
                console.log(err);
            });
        },
        
    }
}
</script>
        