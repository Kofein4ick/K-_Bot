import axios from "axios"
//константы для маршрутизации
export const CHAT_ROUTE ="/chat"
export const MAIN_ROUTE ="/"
//Адрес сервера
export const $host=axios.create({
    baseURL:'http://localhost:8000/'
})
//Приветсвенное сообщение
export const first_message={type:'bot',
text:'Здравствуйте! Я попытаюсь ответить на Ваши вопросы.\n Для выбора интересующей Вас темы нажмите на нее.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}
export const themes=[
    {type:'bot',text:'Могу ли я стать самозанятым?',SecondText:'',Link:'',Next_Quest:(-1),FinalAnswer:''},
    {type:'bot',text:'Как стать самозанятым и как перестать им быть?',SecondText:'',Link:'',Next_Quest:(-2),FinalAnswer:''},
    {type:'bot',text:'За что самозанятые могут получить штрафы?',SecondText:'',Link:'',Next_Quest:(-3),FinalAnswer:''},
    {type:'bot',text:'Социальные гарантии, льготы, пенсии.',SecondText:'',Link:'',Next_Quest:(-4),FinalAnswer:''},
    {type:'bot',text:'Документы для самозанятых.',SecondText:'',Link:'',Next_Quest:(-5),FinalAnswer:''},
]
export const test_first_message={type:'bot',
text:'Этот тест поможет определить подходите ли вы под статус самозанятого.\n Для выбора ответа нажмите на него.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}

//Финальное сообщение 
export const last_message={type:'bot',typeMess:'last',
text:'Для возрващение на главную страницу, нажмите на это сообщение.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}