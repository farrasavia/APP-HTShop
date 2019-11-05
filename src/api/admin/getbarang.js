import { getApiNoAuth } from '../utils'

export default {
  getBarang (window) {
    return getApiNoAuth()
      .get('barangs')
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  }
}