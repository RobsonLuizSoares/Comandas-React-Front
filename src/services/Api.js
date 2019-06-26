import axios from 'axios'
const REACT_APP_API_URL = 'http://localhost:3001'

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL
  })

export default api