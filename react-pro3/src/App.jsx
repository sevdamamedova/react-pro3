import React, { useState } from 'react'
import './App.css'
import { Route, Routes, useParams } from 'react-router'
import Counter from './components/Counter'
import ToDo from './components/ToDo'
import Users from './components/Users'
import { Link, NavLink } from 'react-router-dom'
import WebRouting from './components/Routing'

function App() {
  return (
    <>
       <WebRouting/>
    </>
  )
  
}
// function SingleContact(){
//   const o = useParams()
//   console.log(o)
//   return(
//     <div>im single contacts
//       <h1>My name is {o.id}, im at {o.name} </h1>
//     </div>
    
//   )
// }

export default App
