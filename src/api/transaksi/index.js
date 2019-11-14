import { getApiNoAuth } from "../utils"

export default {
        postTransaksi(window, id_product, id_customer, catatan,
            kuantity, diskon, kurir, total, metode_bayar, status){
            console.log(id_product, id_customer, catatan, kuantity, diskon, kurir, total, status )
        return getApiNoAuth()
        .post('/transaksis/' ,{
            id_product : id_product,
            id_customer : id_customer,
            catatan : catatan,
            kuantity : kuantity,
            diskon : diskon,
            kurir : kurir,
            total : total,
            metode_bayar : metode_bayar,
            status : status
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}