import React,{useEffect,useState,useContext} from 'react'
import { THEME } from './constants';

export const GlobalContext = React.createContext();


const GlobalReducer = (state,action) =>{    
    
    switch (action.type) {
        case 'toggle/theme':
            return {...state,theme:action.payload }
        default:
            break;
    }
}



function GlobalProvider({children}){
    const hour = new Date().getHours();

    const defaultvalue ={
        theme : (hour > 19 || hour < 4 )?  THEME.DARK : THEME.LIGHT
    }

    const [state,dispatch] = React.useReducer(GlobalReducer,defaultvalue)

    const value = {state,dispatch}

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

function useGlobalContext(){
    const context = useContext(GlobalContext)
    if(context == undefined){
        throw new Error('useGlobalContext must be used within a GlobalContext')
    }
    return context
}

export {GlobalProvider,useGlobalContext}