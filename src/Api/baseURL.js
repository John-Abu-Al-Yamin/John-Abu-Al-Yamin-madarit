import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://back.safewayeg.xyz/api/" })

export default baseUrl