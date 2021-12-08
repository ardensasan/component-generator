import axios from "axios"
export const getList = async (config:any) => {
    return await axios(config)
} 