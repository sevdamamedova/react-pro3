import React, { useState } from 'react'
import './App.css'
// import Counter from './components/Counter'
// import ToDo from './components/ToDo'
import Users from './components/Users'

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
     {/* <Counter/> */}
     {/* <ToDo/> */}
     <button onClick={() => setShow((pre) => !pre)}>show/hide users</button>
     {

       show && <Users/>
     }
    
    </>
  )
  
}

export default App
