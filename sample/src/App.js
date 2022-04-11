// import logo from './logo.svg';

import './App.css';






import React from 'react';

function App() {

  let Newnavbar= ["Services", "Projects",'About']
const MOS= ["Android", "Blackberry", "iPhone", "iPad", "Windows"]

const MM= ["Samsung", "HTC", "Apple", "Micromax"]

  return (
    // <div className="App">
    <>  

<h1> REACT MOBILE OS </h1>

<ul>{MOS.map(function(elem){

return <li> {elem}  </li> 
})}</ul>


<h1>Mobil Manufacturer</h1> 

<ul>
  {MM.map(function(elem){
    return <li> <Goods  goods={elem}  quality="great"/>   </li>
  })}
</ul>





<nav className="Navbar"> 
<div className="left">
  LOGOBAKERY
   </div>


<div className="middle"> 

{Newnavbar.map(function(elem){ 
  return <Render val={elem}  />
})}

</div>



<div > 
<button className="right">Contact</button>
</div>



</nav>



  
</>
  );

}

function Render(p){
return <a> {p.val}  </a>
}

function Goods(props){
  return <p> Items: {props.goods} , {props.quality} </p>
}

export default App;












// const food= "Pizza";
// const age= 22;
// const skills= ["DSA", "React"]




// Your fav food {food} anf your age {age}

// you {age > 18 ? "eligible": "not eligible"} for licence




// your skills : <ul>
//   {
//    skills.map(function(elem) {

// return <li> <Skills skill={elem}/> </li>

// })}

// </ul>

// <Skills skill= "vscode"/>
// <Skills skill= "rockpaperscessior"/>


{/* <button> Test </button>
<h1>React for you </h1>
<input/> 
<img src="data:image/png;base64,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"/> */}