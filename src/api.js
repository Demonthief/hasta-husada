import axios from "axios";

const customFetch = axios.create({
    baseURL: '/api/v1/auth'
})

export default customFetch