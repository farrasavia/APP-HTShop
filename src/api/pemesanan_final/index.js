import { getApiNoAuth } from "../utils"

export default {
    getPemesananById(window, id){
        console.log(id)
        return getApiNoAuth()
        .get('/pemesanan_finals/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    }
}