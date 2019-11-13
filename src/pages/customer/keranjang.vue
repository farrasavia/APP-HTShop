<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto bg-grey-8" style="max-width: 1600px">
                <q-item-label header class="bg-grey-8 text-h6 flex flex-center" style="color: white">
                    KERANJANG BELANJA
                </q-item-label>
                
                <q-card class="abc">
                    <div class="row " style="padding-top: 10px">
                        <div class="col q-mx-auto  column q-ma-xs" style= "min-width:300px; max-width:300px"
                        v-for="item in pro" :key="item.id">
                        <q-card-section class="bg-grey-8">
                            <q-img  style="width:300px; height:300px " class="q-mx-auto"
                                :src="item.imgurl"
                            >
                            </q-img>   
                            <!-- <div v-for="item2 in produk" :key="item2.id"> -->
                            <q-card-section class="bg-white">
                            <div class="flex flex-center text-h6">{{item2.harga_barang}}</div>
                            </q-card-section>               
                            <q-card-section class="bg-grey-8">
                            <div class="flex flex-center text-h6">{{item2.nama_barang}}</div>
                            </q-card-section>
                            <!-- </div> -->
                            <q-card-section class="bg-white flex flex-center">
                            <q-btn flat class="flex flex-center" color="grey-4" text-color="black" icon="attach_money">
                                <q-tooltip content-class="bg-grey-3 text-black" anchor="center left" self="center right" :offset="[10, 10]">
                                 BAYAR SEKARANG
                                </q-tooltip>
                            </q-btn>
                            <q-btn flat class="flex flex-center" color="grey-4" text-color="black" icon="delete" @click="onDelete(item.id)">
                                <q-tooltip content-class="bg-grey-3 text-black" anchor="center right" self="center left" :offset="[10, 10]">
                                 BATALKAN PEMBELIAN
                                </q-tooltip>
                            </q-btn>
                            </q-card-section>
                        </q-card-section>
                        </div>
                        </div>
                </q-card>
   
                <div class="q-pa-lg flex flex-center">
                </div>
            </q-list>
        </div>
    </div>
</div>
</template>

<style scoped>
    
</style>

<script>
import cart from '../../api/cart/index'
import barang from '../../api/barang/index'
import gbr from '../../api/upload/index'

export default {
    data() {
        return {
            pro:[],
            produk:[],
            item2:[]

        }
    },
     beforeCreate() {
        let getIdCustomer = localStorage.getItem('id_customer');
        let self = this;
        cart.getCartByCustomer(window, getIdCustomer)
            .then(function (result) {
                if (result) {
                   self.pro = result;

                    for (let i = 0; i < result.length; i++) {

                         barang.getproductbyId(window, result[i].id_barang)
                                .then(function (res) {
                                    console.log(i, res)
                                    self.produk.push(res);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                });
                    }
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    methods: {
        // Method untuk delete data By ID
        onDelete(id) {
            console.log("id produk", id)
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                cart.deleteCart(window, id)
                    .then((res) => {
                        cart.getCart(window)
                            .then((res) => {
                                this.pro = res.data
                                this.$router.go('/customer/keranjang')
                            })
                            .catch(() => {
                                alert('Error load data');
                                console.log(err)
                            })
                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
        },
    }
}
</script>