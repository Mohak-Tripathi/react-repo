import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {About} from "./components/About"

import {Home} from "./components/Home"

import {Routes, Route} from "react-router-dom"

import {Navbar} from "./components/Navbar"
import {UserList} from "./components/UserList"
import { UserDetails } from './components/UserDetails'
import { Privatecomponent } from './components/PrivateComponents'

import {Login} from "./components/Login"

function App() {
  

  return (
    <div className="App">


<Navbar />

<Routes>
<Route path= "/" element = {<Home />}>

</Route>

<Route path= "/about" element = {<About />}>

</Route>



<Route path= "/users" element = {<UserList />}>

</Route>

<Route path= "/Login" element = {<Login />}>

</Route>




<Route path= "/users/:id" element = {           <Privatecomponent>    <UserDetails />       </Privatecomponent>}>

</Route>

</Routes>
     
      
    </div>
  )
}



export default App

