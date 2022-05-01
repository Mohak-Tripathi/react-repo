import { CardContext } from "../../contexts/CardContext"

import { useContext} from "react";


export const Cart= () =>{
   const {handleChange}= useContext(CardContext)
   
    return <div style={{    

        width: "300px",
        height: "300px",
        backgroundColor: "greenyellow"

    }}>      <button onClick= {()=>{ handleChange(1)}}>   Add 1 </button>  
        
        </div>
}