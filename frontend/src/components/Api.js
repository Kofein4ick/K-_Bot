import { $host } from "../utils/consts"

export const fetchAnswer = async (_Q_id)=>{

    const {data} = await $host.post('/api/Answer/',{Q_id:_Q_id})
    return data
}