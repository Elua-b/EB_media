import axios from 'axios'
const API=axios.create({baseURL:"http://locahost:5000"})
export const login =(formData)=>API.post('/auth/login',formData)