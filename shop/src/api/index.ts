import axios, {AxiosInstance} from "axios";

let api:AxiosInstance


function createApi(){
     api = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        timeout: 5000,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        }
    })
    return api
}

export const useApi = () => {
    if(!api) {
        return createApi()
    }
    return api
}