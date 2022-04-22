

import styled from "styled-components";

const Button=styled.button`
border: none;
background-color:${(props)=>{
    return props.type=="primary" ?  "#009dff" : "#fff"}};

margin: 5px; 

color:${(props)=>{
    return (props.type ==="primary" ? "#ffffff" : props.type == "dashed" ? "#009dff" : props.type == "link" ? "#009dff": "#242424")}};

font-weight:bold;
font-size: 16px;
padding:10px;

border: ${(props) =>{
    return (props.type== "primary" ? "1px solid black" : props.type === "default" ? "1px solid black" : props.type== "dashed" ? "1px solid blue" : "5 px solid blue" )
}}`;

// padding:10px`;

export {Button} 




// import "./Button.css"

// import styled from "styled-components";

// const Button = styled.button`

// color: ${(props)=>{
//     return props.theme==="light" ? "blue" : "red"
// }};
// border: 1 px solid white

// `;

// export {Button};





// export const Button= ({children})=>{
//     return <button className="btn">  {children} </button>
// }
