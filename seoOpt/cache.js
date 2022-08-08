import CachingService from './redis'

const fetch = async (key,fetcher,expires)  =>{
    const existingData = await get(key)
    if(existingData!==null) return existingData
    return set(key,fetcher,expires)
}

const get = async (key)  =>{

    const value = await CachingService.redis.get(key)

    if(value===null) return null

    return JSON.parse(value)
}

const set = async (key,fetcher,expires)  =>{

    const value = await fetcher();
    await CachingService.redis.set(key,JSON.stringify(value),"EX",expires)

    console.log(value)

    return value
}

export default {fetch,set}