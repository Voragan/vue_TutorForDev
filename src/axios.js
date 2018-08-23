import axios from 'axios'
const token = localStorage.getItem('token') || ''

const axiosInstanct = axios.create({
    baseURL: 'localhost:3000/api',
    headers: { 'authorization': token }
})

export default axiosInstanct