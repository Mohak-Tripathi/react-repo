
import {Timer} from './components/timer'
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [show,setShow]=useState(true)

  const [counter,setCounter]=useState(0)



  useEffect(function(){
      let id=setInterval(()=>{
        
          setCounter((value)=>{
            console.log("inside the interval") 
            
            if(value===10){
                  clearInterval(id)
                  return value
              }
              else{
              return value+1
              }
          })
         
      },1000)

      return ()=>{ 
        console.log("unmounted")  
          clearInterval(id)
         
      }    
  },[])


  return (
    <div className="App">
     
        {show ? <Timer  seconds={counter} />: null}

        <button onClick={function(){setShow(!show)}}>                  {show ? "Hide":"show"}</button>
       
    </div>
  );
}

export default App;
