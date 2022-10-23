import { $host } from "../utils/consts"
//Запрос получения ответов и вопросов теста
export const fetchAnswer = async (_Q_id)=>{

    const {data} = await $host.post('api/Answer/',{Q_id:_Q_id})
    return data
}
//Запрос получения ответов веток договоров
export const fetchItems = async (_I_id)=>{

    const {data} = await $host.post('api/Items/',{I_id:_I_id})
    return data
}
//Запрос получения ответов выпадающего списка договоров
export const fetchFAQ_Q_A = async (_T_id)=>{

    const {data} = await $host.post('api/FAQ_Q_A/',{T_id:_T_id})
    return data
}
//Запрос получения ответов выпадающего FAQ_Priv
export const fetchFAQ_Priv_Q_A = async ()=>{

    const {data} = await $host.get('api/FAQ_Priv_Q_A/')
    return data
}
//Запрос получения ответов выпадающего FAQ_Resp
export const fetchFAQ_Resp_Q_A = async ()=>{

    const {data} = await $host.get('api/FAQ_Resp_Q_A/')
    return data
}
//Запрос получения ответов выпадающего FAQ_Reg
export const fetchFAQ_Reg_Q_A = async ()=>{

    const {data} = await $host.get('api/FAQ_Reg_Q_A/')
    return data
}
//Проверочный запрос получения логотипа
export const fetchImage = async ()=>{
    const {data} = await $host.get('api/Image/Logo')
    return data
}