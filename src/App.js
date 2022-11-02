import React, { useState } from 'react';
import './App.css';
import Receipt from './components/Receipt/Receipt';


const initialState = [
  {
    id: 1,
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: true,
  },
  {
    id: 2,
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: true,
  },
  {
    id: 3,
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];









function App() {

  const updatedState =  {
    id: 0,
    person: '',
    order: {
      main: '',
      protein: '',
      rice: '',
      sauce: '',
      toppings: [''],
      drink: '',
      cost: 0,
    },
    paid: true,
  }

  const [state, setState] = useState(initialState)


  const [newState, setNewState] = useState(updatedState)


  const addNewState = (e) => {
    e.preventDefault()

    // adding the newState or order
    setState([
      ...state,
      newState
    ])

    // reset the newState saved to empty
    setNewState(updatedState)

    console.log(state)
  }


  // set the state whenever a user enters words in that input field
  // const handleChange = (e) => {
  
  //   setNewState({
  //     ...newState,
  //     [e.target.name]: e.target.value
  //   })
    
  //   console.log('event target name: ', e.target.name)
  //   console.log('event target value: ', e.target.value)

  //   console.log('Handle change ran')
  // }


  // handle the nested state
    // set the state whenever a user enters words in that input field
    const handleChange = (e) => {
  

      const name =  e.target.name
      const value =  e.target.value


      // check for the values in order if they're changed
      // first convert the order keys in newState to array
      // second check if they include a selected input name
      // third set the order state of it
      // so in short it will set the person + order
      if (Object.keys(newState.order).includes(name)){
        setNewState({
          ...newState,
          order: {
            ...newState.order,
            [name]: value
          }
        })

        // only set the person
      } else {
        console.log('It ran')
        setNewState({
          ...newState,
          [name]: value
        })
      }

      
      console.log('event target name: ', name)
      console.log('event target value: ', value)

      console.log('Handle change ran')
    }
  



  return (
    <>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main>
        <div className='recipesContainer'>
          {state.map((p, idx) => {

            if(p.paid){
              return <Receipt order={p} key={idx}/>
            }
          
            return null
          })}
        </div>

        <div className='newOrder'>
          <div></div>

        <div className='myNewOrder'>
        <h3>Add New Order</h3>

        <form onSubmit={addNewState}>
          <label>
            <span>Person Name: </span>
          <input type='text' name='person' value={newState.person} onChange={handleChange}></input>
          </label>
          <br />
            <span>Order: </span>
            <br />

          <label>
            <span>Main: </span>
            <input name='main' value={newState.order.main} onChange={handleChange}></input>
          </label>
          <br />

          <label>
            <span>Protein: </span>
            <input name='protein' value={newState.order.protein} onChange={handleChange}></input>
          </label>
          <br />

          <label>
            <span>Rice: </span>
            <input name='rice' value={newState.order.rice} onChange={handleChange}></input>
          </label>
          <br />

          <label>
            <span>Sauce: </span>
            <input name='sauce' value={newState.order.sauce} onChange={handleChange}></input>
          </label>
          <br />

          {/* <label>
            <span>Toppings: </span>
            <input name='toppings'></input>
          </label>
          <br /> */}

          <label>
            <span>Drink: </span>
            <input name='drink' value={newState.order.drink} onChange={handleChange}></input>
          </label>
          <br />

          <label>
            <span>Cost: </span>
            <input name='cost' value={newState.order.cost} onChange={handleChange}></input>
          </label>
          <br />


          <br />
          <button type='submit'>Add Order</button>
        </form>
        </div>
        <div></div>
        </div>
      </main>
    </>
  );
}


export default App;
