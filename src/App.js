import React from 'react';
import './App.css';
import { useState } from 'react';
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
    paid: false,
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
    paid: false,
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
  paid: false,
}
function App() {

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
    setNewState(
      {
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
        paid: false,
      }
    )

    console.log(state)
  }


  // set the state whenever a user enters words in that input field
  const handleChange = (e) => {

    setNewState({
      ...newState,
      [e.target.name]: e.target.value
    })

    console.log('event target name: ', e.target.name)
    console.log('event target value: ', e.target.value)

    console.log('Handle change ran')
  }



  return (
    <>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main></main>
      <main>
        <div className='recipesContainer'>
          {state.map(p =>

            <Receipt order={p}/>
          )}
        </div>

        <div className='newOrder'>
          <div></div>

        <div>
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

/*
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20, */

export default App;
