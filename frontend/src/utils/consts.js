import axios from "axios"
//константы для маршрутизации
export const CHAT_ROUTE ="/chat"
export const MAIN_ROUTE ="/"
export const FAQ_PRIV_ROUTE ="/faq_priv"
export const FAQ_RESP_ROUTE ="/faq_resp"
export const FAQ_REG_ROUTE ="/faq_reg"

//Адрес сервера
export const $host=axios.create({
    baseURL:'https://cx15068.tmweb.ru/'
})
//Приветсвенное сообщение
export const first_message={type:'bot',
text:'Здравствуйте! Я попытаюсь ответить на Ваши вопросы.\n Для выбора интересующей Вас темы нажмите на нее.',
SecondText:'',Link:'',Next_Quest:null,mode:(0),FinalAnswer:'',typeMess:'final'}

export const themes=[
    {type:'bot',text:'Могу ли я стать самозанятым?',SecondText:'',Link:'',Next_Quest:(1),mode:(-1),FinalAnswer:''},
    {type:'bot',text:'Как стать самозанятым и как перестать им быть?',SecondText:'',Link:'',Next_Quest:(0),mode:(-2),FinalAnswer:''},
    {type:'bot',text:'Ответственность.',SecondText:'',Link:'',Next_Quest:(0),mode:(-3),FinalAnswer:''},
    {type:'bot',text:'Социальные гарантии, льготы, пенсии.',SecondText:'',Link:'',Next_Quest:(0),mode:(-4),FinalAnswer:''},
    {type:'bot',text:'Документы для самозанятых.',SecondText:'',Link:'',Next_Quest:(-1),mode:(-5),FinalAnswer:''},
]

export const test_first_message={type:'bot',
text:'Этот тест поможет определить подходите ли вы под статус самозанятого.\n Для выбора ответа нажмите на него.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:'',typeMess:'final'}

//Финальное сообщение 
export const last_message={type:'bot',typeMess:'last',
text:'Для возрващение на главную страницу, нажмите на это сообщение.',
SecondText:'',Link:'',Next_Quest:null,FinalAnswer:''}

export const docs_first=
{type:'bot',typeMess:'final',text:'Для того, чтобы осуществлять деятельность самозанятым необходимы различные документы. Перечень документов зависит от вида деятельности.\nДеятельность самозанятых можно разделить на несколько категорий. Выберите сферу Вашей деятельности:',SecondText:'',Link:'',Next_Quest:null,mode:(-5),FinalAnswer:''}


export const docs_type=[
    {type:'bot',text:'Производство',SecondText:'',Link:'',Next_Quest:(1),mode:(-5),FinalAnswer:''},
    {type:'bot',text:'Продажа вспомогательных материалов',SecondText:'',Link:'',Next_Quest:(4),mode:(-5),FinalAnswer:''},
    {type:'bot',text:'Мастер-класс',SecondText:'',Link:'',Next_Quest:(8),mode:(-5),FinalAnswer:''}
]