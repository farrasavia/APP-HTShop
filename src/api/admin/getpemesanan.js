import { getApiNoAuth } from '../utils'

export default {
  postPemesanan(window, nama_barang, quantity, nama_pemesan, alamat_pemesan, telp_pemesan,
    pengiriman, catatan, total, status, createAt){
    return getApiNoAuth()
    .post('/pemesanans/' ,{
      nama_barang:nama_barang,
      quantity:quantity,
      nama_pemesan:nama_pemesan,
      alamat_pemesan:alamat_pemesan,
      telp_pemesan:telp_pemesan,
      pengiriman:pengiriman,
      catatan:catatan,
      total:total,
      status:status,
      createAt:createAt
    })
    .then(function(response){
        console.log(response)
        return response.data
    }).catch(function(err){
        console.log(err)
    })
    },
  getPemesanan (window) {
    return getApiNoAuth()
      .get('pemesanans')
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  },
  putPemesanan(window, nama_barang, quantity, nama_pemesan, alamat_pemesan, telp_pemesan,
        pengiriman, catatan, total, status, createAt, id){
      console.log('status =',status)
        return getApiNoAuth()
        .put('/pemesanans/'+id ,{
            nama_barang:nama_barang,
            quantity:quantity,
            nama_pemesan:nama_pemesan,
            alamat_pemesan:alamat_pemesan,
            telp_pemesan:telp_pemesan,
            pengiriman:pengiriman,
            catatan:catatan,
            total:total,
            status:status,
            createAt:createAt
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
    getStatusPemesanan(window){
      return getApiNoAuth()
      .get('/pemesanans/getStatusPemesanan?statuss=string')
      .then(function(response){
        console.log("res",response)
        return response.data
      }).catch(function(err){
        console.log(err)
      })
    }
}