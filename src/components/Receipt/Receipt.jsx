import React from 'react'
import './Receipt.css';

function Receipt(props) {
  return (
    <div className='receipt'>
        <h3>{props.person}</h3>
        <p>Main: {props.order.main}</p>
        <p>Protein: {props.order.protein}</p>
        <p>Rice: {props.order.rice}</p>
        <p>Sauce: {props.order.sauce}</p>
        <p>Drink: {props.order.drink}</p>
        <p>Cost: {props.order.cost}</p>
    </div>
  )
}

export default Receipt