import React from 'react'
import { Routes, Route } from 'react-router'
import Contacts from '../Contacts'
import SocialNetwork from '../SocialNetwork'
import ToDo from '../ToDo'
import { SingleContact } from '../Contacts'
import Home from '../../pages/Home'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'


const WebRouting = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contacts' element={<Contacts/>}>
       <Route path='test' element={<div>outlet inside contacts </div>}/>
       </Route>
       <Route path='contacts/:id' element={<SingleContact/>}/>
       <Route path='/social' element={<SocialNetwork/>}/>
       <Route path='/todo' element={<ToDo/>}/>
       <Route path='*' element={<NotFound/> }/>
    </Routes>
    </>
  )
}

export default WebRouting