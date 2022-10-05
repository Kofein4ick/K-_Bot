import axios from "axios"
export const CHAT_ROUTE ="chat"
export const MAIN_ROUTE ="/"
export const $host=axios.create({
    baseURL:'http://localhost:8000/'
})
