import { config } from "../constants";
import axios from 'axios'

export const getStories = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories`)
    if(res){
        return res.data
    }
    return null
}

export const getTopStories = async ()=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories/top`)
    if(res){
        return res.data
    }
    return null
}

export const getStoriesByCat = async (category)=>{
    const res = await axios.get(`${config.API_ENDPOINT}/stories/category/${category}`)
    if(res){
        return res.data
    }
    return null
}
