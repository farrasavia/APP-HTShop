import { getApiNoAuth } from "../utils"

export default {

    downloadImage(window, file){
        return getApiNoAuthLB()
        .get('container/images/download/'+file)
        .then(function(response){
            return response.config
        })
        .catch (function(err){
            console.log(err)
        })
    },
    getproductbyId(window, id){
        
        return getApiNoAuth()
        .get('barangs/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    }
}