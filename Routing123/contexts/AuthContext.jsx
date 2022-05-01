import { createContext, useState } from "react";

export const AuthContext= createContext();

export const AuthContextProvider = ({children}) =>{

const [isAuth, setisAuth]= useState(false)

const handleAuth = (state) =>{
    setisAuth(state)
}

    return (<AuthContext.Provider value= {{isAuth, handleAuth}}> {children}  </AuthContext.Provider>)
}