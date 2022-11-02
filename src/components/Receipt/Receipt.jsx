import React from 'react'
import './Receipt.css'
// import { UserContext } from '../../App'

function Receipt(props) {

    // const data = useContext(UserContext)

    // console.log('data is:', data)

// console.log(props)
    // console.log(Object.entries(data[0].order))
  return (
    <div className='personDiv'>



        <h1>{props.order.person}</h1>

        {Object.entries(props.order.order).map((item,idx) => 
            
            <p style={{fontWeight: 'bold'}} key={idx}><span style={{color: 'purple'}}>{item[0]}:</span> {item[1]}</p>
            
            )}




    </div>

  )
}

export default Receipt