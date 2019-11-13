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
  putPemesanan(window, id, status){
      console.log('status =',status)
        return getApiNoAuth()
        .put('/pemesanans/'+id ,{
        status : status
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
      .get('/pemesanans/getstatusPemesanan?status=true')
      .then(function(response){
        console.log("res",response)
        return response.data
      }).catch(function(err){
        console.log(err)
      })
    }
}