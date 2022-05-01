import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";



export const UserDetails = () => {

    const { id } = useParams();

    const [user, setUser] = useState({})
    // const {isAuth} =  useContext(AuthContext)

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
            setUser(data.data)
        })
    },[])

// if(!isAuth){
//    return <Navigate to = {"/login"} />
// }

    return (

    <div>
        <div> UserID= {id} </div>
        <div> First name= {user.first_name} </div>
        <div> Last name= {user.last_name} </div>
        <img src={user.avatar} />
    </div>
    )
}