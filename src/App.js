import React, {useState} from 'react';
import './App.css';
import Receipt from './components/Receipt/Receipt'

function App() {

  const [receipt, setReceipt] = useState(
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
    },
  ]
  )

  const [newReceipt, setNewReceipt] = useState(
    {
      // id: 3,
      person: '',
      order: {
        main: '',
        protein: '',
        rice: '',
        sauce: "",
        // toppings: ['', '', ''],
        drink: '',
        cost: 0,
      },
      paid: false,
    }
  ) 
  const addReceipt = (e) => {
    e.preventDefault()
   setReceipt([ ...receipt,
    newReceipt
  ])
    setNewReceipt(
      {
        // id: 3,
        person: '',
        order: {
          main: '',
          protein: '',
          rice: '',
          sauce: "",
          // toppings: ['', '', ''],
          drink: '',
          cost: 0,
        },
        paid: false,
      }
    )
  }
  const handleChange = (e) => {
    setNewReceipt({ ...newReceipt, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <section>
      <h1>Korilla</h1>
      <div className='container'>
        <Receipt
        person={receipt[0].person}
        order={receipt[0].order}
        />
        
        <Receipt
        person={receipt[1].person}
        order={receipt[1].order}
        />

        <Receipt
        person={receipt[2].person}
        order={receipt[2].order}
        />

        {/* <Receipt
        person={receipt[3].person}
        order={receipt[3].order}
        /> */}
      </div>

      <form onSubmit={addReceipt}>
        <label>
          <span>Person</span>
          <input value={newReceipt.person} name='person' onChange={handleChange} />
        </label>
        <label>
          <span>Main</span>
          <input value={newReceipt.order.main} onChange={handleChange} name='order.main'>
          </input>
        </label>

        <button type='submit' onClick={addReceipt}>
          ADD RECEIPT
        </button>
    </form>
    </section>
  );
}

export default App;