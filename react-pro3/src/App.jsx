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


export default App
