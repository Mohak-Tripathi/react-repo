
import { Children, createContext } from "react";
import { useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({children}) =>{
   const [cart, setCart] = useState(0)
   
const handleChange = (inc) =>{
    setCart(cart + 1)
}
   return (
        <CardContext.Provider value={
            {cart,handleChange}}> {children} </CardContext.Provider> 

    )
}