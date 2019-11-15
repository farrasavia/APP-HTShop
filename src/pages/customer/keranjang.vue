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
                            <!-- <q-card-section class="bg-white">
                            <div class="flex flex-center text-h6">{{item2.harga_barang}}</div>
                            </q-card-section>                -->
                            <q-card-section class="bg-grey-8">
                            <!-- <div class="flex flex-center text-h6">{{item2.nama_barang}}</div> -->
                            </q-card-section>
                            <!-- </div> -->
                            <q-card-section class="bg-white flex flex-center">
                            <q-btn @click="show(item)" flat class="flex flex-center" color="grey-4" text-color="black" icon="attach_money">
                                <q-tooltip content-class="bg-grey-3 text-black" anchor="center left" self="center right" :offset="[10, 10]">
                                 BAYAR SEKARANG
                                </q-tooltip>
                            </q-btn>
                            <q-dialog v-model="dialog" persistent>
                            <q-card style="width:500px">
                                <q-card-section>
                                <div id="form" class="q-mx-auto" style="max-width: 800px">
                                     <q-card-section>
                                        <div class="q-mx-auto" style="width: 400px">
                                            <div class="row">
                                                <div class="col">
                                                    <q-img :src="item2.imgurl" style="width: 200px" />
                                                </div>
                                                <div class="col text-h7">
                                                    Nama Produk : {{item2.nama_barang}}<br>
                                                    Harga : Rp. {{item2.harga_barang}}<br>
                                                </div>
                                            </div>

                                        </div>
                                    </q-card-section>
                                    <q-form class="q-gutter-md">
                                        <q-input 
                                            filled v-model="form.quantity" 
                                            type="number" 
                                            hint="Jumlah Barang" 
                                            />
                                        <q-input 
                                            filled v-model="form.nama_pemesan" 
                                            label="Masukkan Nama *" 
                                            hint="Nama Pemesan" 
                                            lazy-rules 
                                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                        <q-input 
                                            filled v-model="form.alamat_pemesan" 
                                            label="Masukkan Alamat *" 
                                            hint="Alamat Pemesan" 
                                            lazy-rules 
                                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                        <q-input 
                                            filled v-model="form.telp_pemesan" 
                                            label="Masukkan Telepon *" 
                                            hint="Telepon Pemesan" 
                                            lazy-rules 
                                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                        <div class="q-gutter-sm">
                                            <q-radio v-model="form.pengiriman" val="JNE Express" label="JNE Express" color="black" />
                                            <q-radio v-model="form.pengiriman" val="Paxel Express" label="Paxel Express" color="black" />
                                            </div>
                                            <div class="q-px-sm q-mt-sm">
                                            Jasa Pengiriman : <strong>{{form.pengiriman}}</strong>
                                            </div>
                                        <q-input 
                                            filled v-model="form.catatan" 
                                            label="Masukkan Catatan *" 
                                            hint="Catatan Pemesan" 
                                            lazy-rules 
                                            :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                         <div class="col-6">
                                        <div class="text-right text-bold">Rp. {{total}}</div> 
                                        </div>
                                        <q-card-section>
                                        <div class="flex flex-center">
                                            <q-btn color="grey-6" label="Pesan Sekarang" @click="post_pemesanan()" />
                                        </div>
                                        </q-card-section>
                                        <q-card-section>
                                        <div class="flex flex-center">
                                            <q-btn  label="Batal" color="grey-6" @click="batal()" />
                                        </div>
                                        </q-card-section>
                                    </q-form>
                                </div>
                                </q-card-section>
                            </q-card>
                            </q-dialog>
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
import pemesanans from '../../api/admin/getpemesanan'

export default {
    data() {
        return {
            pro:[],
            produk:[],
            item2:[],
            pemesanan:[],
            dialog: false,
            form : {
                nama_barang:'',
                quantity : '',
                nama_pemesan : '',
                alamat_pemesan : '',
                telp_pemesan:'',                
                pengiriman : '',
                catatan : '',
                total : '',
                status : '',
                createAt:'',
                id:''
            },
            // columns: [
            //     {
            //     name: 'nama_barang',
            //     required: true,
            //     label: 'Nama Barang',
            //     align: 'left',
            //     field:row => row.nama_barang,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'quantity',
            //     required: true,
            //     label: 'Quantity',
            //     align: 'left',
            //     field:row => row.quantity,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'nama_pemesan',
            //     required: true,
            //     label: 'Nama Pemesan',
            //     align: 'left',
            //     field:row => row.nama_pemesan,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'alamat_pemesan',
            //     required: true,
            //     label: 'Alamat',
            //     align: 'left',
            //     field:row => row.alamat_pemesan,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'telp_pemesan',
            //     required: true,
            //     label: 'Telepon',
            //     align: 'left',
            //     field:row => row.telp_pemesan,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'pengiriman',
            //     required: true,
            //     label: 'Pengiriman',
            //     align: 'left',
            //     field:row => row.pengiriman,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'catatan',
            //     required: true,
            //     label: 'Catatan',
            //     align: 'left',
            //     field:row => row.catatan,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'total',
            //     required: true,
            //     label: 'Total',
            //     align: 'left',
            //     field:row => row.total,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'status',
            //     required: true,
            //     label: 'Status',
            //     align: 'left',
            //     field:row => row.status,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     },
            //     {
            //     name: 'crateAt',
            //     required: true,
            //     label: 'Creat At',
            //     align: 'left',
            //     field:row => row.creatAt,
            //     format: val => `${val}`,
            //     sortable: true,
            //     classes:'bg-grey-2allipsis',
            //     style:'max-width:100px'
            //     }
            // ],
        }
    },
    computed:{
        total:function() {
        return parseInt(this.item2.harga_barang) * parseInt(this.form.quantity)
    },

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

        batal() {
      {
        this.dialog = false

      }
    },

        post_pemesanan(){
        const self = this
        pemesanans.postPemesanan(window, self.form.nama_barang, self.form.quantity, self.form.nama_pemesan, self.form.alamat_pemesan, 
        self.form.telp_pemesan, self.form.pengiriman, 
        self.form.catatan, self.form.total, 'string',self.createAt)
            .then(function (result) {
                // self.onDelete()
                self.$router.go('/customer/akhir')
            })
            .catch(function (err) {
                console.log(err);
            });
        },

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
        show(cart) {
            let self = this
            localStorage.setItem('id_cart', cart.id);
            console.log(cart.id_barang)
            this.dialog = true
            barang.getproductbyId(window, cart.id_barang)
                .then(function (result) {
                    console.log(result)
                    self.item2 = result;
                })
                .catch(function (err) {
                    console.log(err);
                });
        },
        
        
    }
}
</script>