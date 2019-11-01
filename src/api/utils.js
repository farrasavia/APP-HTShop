import axios from 'axios'
 
const API_URL =  'http://localhost:3000/api/'
const API_URL_SB =  'http://localhost:8888/api/v1/customer'

export function getApiNoAuth() {
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Acces-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
}

export function getApicUSTOMER() {
    return axios.create({
        baseURL: API_URL_SB,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Acces-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
}
