import React from 'react'
import './Receipt.css';

function Receipt(props) {
  return (
    <div className='personDiv'>



    <h1>{props.order.person}</h1>

    {Object.entries(props.order.order).map(item => 

        <p style={{fontWeight: 'bold'}}><span style={{color: ''}}>{item[0]}:</span> {item[1]}</p>

        )}




</div>

)
}


export default Receipt

