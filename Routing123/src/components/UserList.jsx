import axios from "axios";
import { useEffect } from "react"

import { useState } from "react";

import { Link } from "react-router-dom";
export const UserList = () =>{

    const [users, setUsers]= useState([]);


useEffect(()=>{
axios.get("https://reqres.in/api/users").then(({data})=>{
    setUsers(data.data)
})

}, [])

return (
    <div>
        {
            // users.map((user)=>(
            //      <p key={user.id}> {user.id}. {user.first_name} </p>
            // ))

            // both are right

            // <Link key={i} to= {e.to}> {e.title}  </Link>

            users.map((user)=>{
                return   <Link key= {user.id} to = {`/users/${user.id}`}> {user.id}. {user.first_name}  </Link>       
            })
        }
    </div>
)

}