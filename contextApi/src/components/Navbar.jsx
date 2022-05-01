import { CardContext } from "../contexts/CardContext"

import { useContext } from "react"



export const Navbar = ()=>{

    const {cart} = useContext(CardContext);

    return <nav style= {{
display: "flex",
justifyContent: "end",
padding: "15 px", 
border: "1px solid black",
fontSize: "50px",


    }}> Cart : {cart} </nav>
}