import Axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        //Reads the toke in localStorage
        const token = localStorage.getItem('token')
        // console.log('HERE', token)
        //if the token exists, we set the authorization header
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config //we return the new config if the token exists
        //Provides the token to each request that passes through axios
    },
    (error) => Promise.reject(error)
)

export default Client