import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const Privatecomponent = ({children}) =>{

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){

        return <Navigate to = "/Login" replace= {false} />

    }
    return children 
}