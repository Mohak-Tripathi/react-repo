
import {Button} from "./components/Button"
import { useState } from 'react'

import './App.css'


function App() {
  

  return (
    <div className="App">
     




<Button type={"primary"}>Primary Button</Button>
<Button type={"default"}>Default Button</Button>
<Button type={"dashed"}>Dashed Button</Button>
<Button type={"text"}>Text Button</Button>
<Button type={"link"}>Link Button</Button>


    </div>
  )
}

export default App









// import {Button} from "./components/Button"
// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'


// function App() {
  
//   const [theme, setthemes]= useState("light")
//   return (
//     <div className="App">
     
// {/* <Button> Press 1</Button>    */}

// <Button onClick={()=>{
// setthemes(theme==="light" ? "dark" : "light")
// }}>Add 4</Button>

// <Button theme= {theme} >Add 5</Button>

// <Button>Punch Me</Button>



//     </div>
//   )
// }

// export default App
