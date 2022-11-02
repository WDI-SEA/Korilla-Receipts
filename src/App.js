import React, { useState } from 'react';
import './components/Receipt'
import Receipt from './components/Receipt';

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

function App() {
  let [state, setState]=useState(initialState)
  let [person, setPerson]=useState("");
  let [order, setOrder]=useState({main:'',protein:'',rice:'',sauce:'', drink:'',cost:''});
 
  function handleChange(e){
    if(e.target.id=="name"){
      setPerson(e.target.value)
    }else{
      setOrder({...order,[e.target.id]:e.target.value})
      console.log(order)
      
    }
  }
  
  return (
    <>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main>
       {state.map(ele=><Receipt data={ele}/>)}
      </main>
      <form>     
        <input id="name" placeholder='Name..' value={person}  onChange={handleChange}/>
        <input id="main" placeholder='Main' value={order.main}  onChange={handleChange}/>
        <input id="protein" placeholder='Protein' value={order.protein} onChange={handleChange}/>
        <input id="rice" placeholder='Rice' value={order.rice} onChange={handleChange}/>
        <input id="sauce" placeholder='Sauce' value={order.sauce} onChange={handleChange}/>
        <input id="drink" placeholder='Drink' value={order.drink} onChange={handleChange}/>
        <input id="cost" placeholder='Cost' value={order.cost} onChange={handleChange}/>
        <button onClick={(e) => {
        e.preventDefault();
        setState([...state, {person, order:order} ]);
        console.log(state)}}>Click me</button>
   
      </form>
    </>
  );
}

export default App;
