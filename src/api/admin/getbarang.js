import { getApiNoAuth } from '../utils'

export default {
  getBarang (window) {
    return getApiNoAuth()
      .get('barangs')
      .then(function (response) {
        console.log('mek ', response.data.sort((a, b) => new Date(b.createAt) - new Date(a.createAt)))
        return response.data.sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
      }).catch(function (err) {
        console.log(err)
      })
  },
  deleteBarang(window, id){
    return getApiNoAuth()
    .delete('/barangs/'.concat(id))
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  },
  putBarang(window, id, nama_barang, kategori, quantity, harga_barang, kondisi, keterangan){
    return getApiNoAuth()
    .put('/barangs/'+id ,{
        nama_barang:nama_barang,
        kategori:kategori,
        quantity:quantity,
        harga_barang:harga_barang,
        kondisi:kondisi,
        keterangan:keterangan
    })
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
  },
  downloadImage(window, file){
    return getApiNoAuth()
    .get('container/images/download/'+file)
    .then(function(response){
        return response.config
    })
    .catch (function(err){
        console.log(err)
    })
  }
}