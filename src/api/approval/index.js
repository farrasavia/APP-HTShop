import { getApiNoAuth } from '../utils'

export default{
    approvalFinal(window, nama_barang, tanggal, nama_pemesan, alamat_pemesan, telp_pemesan,
        pengiriman, catatan, status, createAt){
        return getApiNoAuth()
        .post('/pemesanan_finals',{
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
        })
        .catch(function(error){
        console.log(error);
        })
    },
    approvalBegin(window, nama_barang, tanggal, nama_pemesan, alamat_pemesan, telp_pemesan,
      pengiriman, catatan, status, createAt){
      return getApiNoAuth()
      .post('/pemesanan_finals',{
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
      })
      .catch(function(error){
      console.log(error);
      })
  },
    getPemesananFnl (window) {
        return getApiNoAuth()
          .get('pemesanan_finals')
          .then(function (response) {
            console.log(response)
            return response.data
          }).catch(function (err) {
            console.log(err)
          })
      },
}