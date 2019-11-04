import { getApiCustomer } from '../utils'

export default{
    userLogin(window, email, password) {
        return getApiCustomer()
        .get('/users/' + email + '/' + password) 
        .then(function(response) {
            console.log(response)
            return response.data
        }).catch(function (err) {
            console.log(err)
        })
    }
}