import { $host } from "../utils/consts"

export const fetchAnswer = async (_Q_id)=>{

    const {data} = await $host.post('/api/Answer/',{Q_id:_Q_id})
    return data
}

export const fetchItems = async (_I_id)=>{

    const {data} = await $host.post('/api/Items/',{I_id:_I_id})
    return data
}
export const fetchFAQ_Q_A = async (_T_id)=>{

    const {data} = await $host.post('api/FAQ_Q_A/',{T_id:_T_id})
    return data
}

export const fetchFAQ_Priv_Q_A = async (_T_id)=>{

    const {data} = await $host.get('api/FAQ_Priv_Q_A/')
    return data
}