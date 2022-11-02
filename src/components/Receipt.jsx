import React from 'react'
import '../App.css';

function Receipt(props) {
    let items = Object.entries(props.data)
    let name = props.data.person;
    let orders = Object.entries(props.data.order);
    console.log(props)
  return (
    <div style={{border: "2px solid orange"}} id="contain">
        <div id="wrapper">
        <h2 className='name'>{name}</h2>
        {orders.map(ele=><p><span className="purp">{ele[0]}</span>{":"+ele[1]}</p>)}
    </div>
    </div>
  )
}

export default Receipt