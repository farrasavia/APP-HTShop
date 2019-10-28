import { getApiNoAuth } from '../utils'

export default{
    userLogin(window, username, password) {
        return getApiNoAuth()
        .post('Users/login', {
            username: username,
            password: password,
            // role:'customer'
        })
        .then(function(response) {
            console.log(response)
            return response.data
        }).catch(function (err) {
            console.log(err)
        })
    }
}