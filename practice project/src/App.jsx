import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lists from './components/Lists'
function App() {
  const fruits=[
    { id:1,name:'apple',calories:67},
    { id:2,name:'banana',calories:87},
    { id:3,name:'Mango',calories:77},
    { id:4,name:'grapes',calories:99}
      ]
      const Vegetables=[
        { id:1,name:'onion',calories:67},
        { id:2,name:'carrot',calories:87},
        { id:3,name:'potato',calories:77},
        { id:4,name:'tomato',calories:99}
          ]
  return (
    <>
   {fruits.length>0 ? <Lists items={fruits} category='Fruits'/> :null}  
     {Vegetables.length>0 ? <Lists items={Vegetables} category='Vegetables'/> : null}
    </>
  )
}

export default App
