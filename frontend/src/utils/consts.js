import axios from "axios"
//константы для маршрутизации
export const CHAT_ROUTE ="chat"
export const MAIN_ROUTE ="/"
//Адрес сервера
export const $host=axios.create({
    baseURL:'http://localhost:8000/'
})
//Приветсвенное сообщение
export const first_message={type:'bot',
text:'Здравствуйте! Этот тест поможет определить подходите ли вы под статус самозанятого.\n Для выбора ответа нажмите на него.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}
//Финальное сообщение 
export const last_message={type:'bot',typeMess:'last',
text:'Для возрващение на главную страницу, нажмите на это сообщение.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}