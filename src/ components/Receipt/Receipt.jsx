import React from 'react'
import './Receipt.css'

function Receipt(props) {




console.log(props)

  return (
    <div className='detail'>
    
        <h2>{props.person}</h2>

        <div className='Receipt'>
          <div  className='Receipt2' key={props.order.main}> <span>Main: </span> {props.order.main}</div>
          <div className='Receipt2' key={props.order.protein}><span>Protein: </span>{props.order.protein}</div>
          <div className='Receipt2' key={props.order.rice}><span>Rice: </span>{props.order.rice}</div>
          <div className='Receipt2' key={props.order.sauce}><span>Sauce: </span>{props.order.sauce}</div>
          <div className='Receipt3' key={props.order.drink}><span>Drink: </span>{props.order.drink}</div>
          <div className='Receipt2' key={props.order.cost}><span>Cost: </span>{props.order.cost}</div>
       </div>
     

    </div>
  )
}

export default Receipt