import { getApiCustomer } from '../utils'

export default{
    registerInput(credentials, window, firstName, lastName, email, password){
        return getApiCustomer()
        .post('/users',{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
        })   
        .then(function(response){
        console.log(response)
        return response.data
        })
        .catch(function(error){
        console.log(error);
        })
    }
}