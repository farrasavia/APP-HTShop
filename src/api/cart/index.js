import { getApiNoAuth } from "../utils"

export default {
postCart(window, id_customer, id_barang, imgurl){
    return getApiNoAuth()
    .post('/keranjangs/' ,{
        id_customer : id_customer,
        id_barang: id_barang,
        imgurl :imgurl
    })
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
    },
    getCartByCustomer(window, id_customer){
    return getApiNoAuth()
        .get('keranjangs/getKeranjangByIdCust?nama='+id_customer)
        .then(function(response){
            console.log('acuy ',response)
            return response.data
            
        })
        .catch (function(err){
            console.log(err)
        })
        
    },
    deleteCart(window, id){
        return getApiNoAuth()
        .delete('/keranjangs/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    getCart(window) {
        return getApiNoAuth()
          .get('keranjangs')
          .then(function (response) {
            console.log(response)
            return response.data
          }).catch(function (err) {
            console.log(err)
          })
      },
}