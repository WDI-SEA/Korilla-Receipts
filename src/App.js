import React from 'react';
import './App.css';
import { useState } from 'react'
import Receipt from './Components/Receipt/Receipt';



function App() {

 const [initialState, setInitialState] = useState(
  [
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
    }
  ]
 )



  return (
    <>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main className='container'>
       <Receipt name = {initialState[0].person} order = {initialState[0].order} paid = {initialState[0].paid}/>
       <Receipt name = {initialState[1].person} order = {initialState[1].order} paid = {initialState[1].paid}/>
       <Receipt name = {initialState[2].person} order = {initialState[2].order} paid = {initialState[2].paid}/>
      </main>
    </>
  )
}

export default App;
