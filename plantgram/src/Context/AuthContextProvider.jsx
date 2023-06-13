import {  createContext, useReducer, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    
    const [loginData,setLoginData] = useState({email:"",password:""})
    
    return(
        <AuthContext.Provider value={{loginData,setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}