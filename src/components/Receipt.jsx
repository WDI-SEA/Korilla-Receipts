import React, { useState } from 'react';
import '../App.css';
function Receipt(props) {
    let name = props.data.person;
    let orders = Object.entries(props.data.order);
    const [pay,setPay]=useState(props.data.paid)
    
    let handleClick=()=>{
      setPay(true)      
    }
    

     if(pay==false){ 
  return (   
    <div style={{border: "2px solid orange"}} id="contain">
        <div id="wrapper">
        <h2 className='name'>{name}</h2>
        {orders.map(ele=><p><span className="purp">{ele[0]}</span>{":"+ele[1]}</p>)}
       <button onClick={handleClick}>Pay </button>
    </div>
    </div>
  )}else{
    return ""
  }
}
    
  


export default Receipt