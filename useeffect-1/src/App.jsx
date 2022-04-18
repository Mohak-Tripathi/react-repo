import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Hello } from "./components/hello.jsx"


function App() {
  const [todos, settodos] = useState([])

  useEffect(() => {

async function getData(){

  const data= await fetch("http://localhost:8080/todos")

  const finaldata= await data.json()
  console.log(finaldata)
  settodos(finaldata)
}
getData()

    // fetch("http://localhost:8080/todos")
    // .then((d) =>  d.json() )
    // .then((data) => {
    //   // console.log(data)
    //   settodos(data)
    // })
  },[])

  return (
    <div className="App">

    {todos.map((elem)=>(
      <div> {elem.id}-{elem.list}</div>
    ))}
    </div>


  )
}

export default App
