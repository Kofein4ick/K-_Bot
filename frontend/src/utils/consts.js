import axios from "axios"
export const CHAT_ROUTE ="chat"
export const MAIN_ROUTE ="/"
export const $host=axios.create({
    baseURL:'http://localhost:8000/'
})
export const first_message={type:'bot',
text:'Здравствуйте! Этот тест поможет определить подходите ли вы под статус самозанятого. '
+'Для выбора ответа нажмите кнопку с таким же номером.',
secondText:''}