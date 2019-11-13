import { getApiNoAuth } from '../utils'

export default {
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
  putPemesanan(window, nama_barang, tanggal, nama_pemesan, alamat_pemesan, telp_pemesan,
        pengiriman, catatan, status, createAt, id){
      console.log('status =',status)
        return getApiNoAuth()
        .put('/pemesanans/'+id ,{
            nama_barang:nama_barang,
            tanggal:tanggal,
            nama_pemesan:nama_pemesan,
            alamat_pemesan:alamat_pemesan,
            telp_pemesan:telp_pemesan,
            pengiriman:pengiriman,
            catatan:catatan,
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