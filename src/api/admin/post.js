import { getApiNoAuth } from '../utils'

export default {
    postBarang(window, nama_barang, kondisi, quantity,
                kategori, harga_barang, keterangan, imgurl){
    console.log( nama_barang, kondisi, quantity, kategori, harga_barang, keterangan, imgurl)
    return getApiNoAuth()
    
      .post('/barangs/' ,{
        nama_barang : nama_barang,
        kondisi : kondisi,
        quantity: quantity,
        kategori : kategori,
        harga_barang : harga_barang,
        keterangan : keterangan,
        imgurl :'http://localhost:3000/api/container/images/download/'+nama_barang+'.jpg'
    })
      .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  }
}