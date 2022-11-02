import React from 'react'
import './Receipt.css' 

function Receipt(props) {
  return (
    <div className='receipt'>

        <h1>{props.name}</h1>
       <h3><span>Main: </span> {props.order.main}</h3>
       <h3><span>Protein: </span> {props.order.protein}</h3>
       <h3><span>Rice: </span> {props.order.rice}</h3>
       <h3><span>Sauce: </span> {props.order.sauce}</h3>
       <h3><span>Drink: </span> {props.order.drink}</h3>
       <h3><span>Cost: </span> {props.order.cost}</h3>
       

    </div>
  )
}

export default Receipt