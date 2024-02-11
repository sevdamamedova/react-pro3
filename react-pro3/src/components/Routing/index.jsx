import React from 'react'
import { Routes, Route } from 'react-router'
import Contacts from '../Contacts'
import SocialNetwork from '../SocialNetwork'
import ToDo from '../ToDo'

const WebRouting = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<div>
        <h1>Home page</h1>
        </div>}/>
       <Route path='/contacts' element={<Contacts/>}>
       <Route path='test' element={<div>outlet inside contacts </div>}/>
       </Route>
       {/* <Route path='contacts/:id/:name' element={<SingleContact/>}/> */}
       <Route path='/social' element={<SocialNetwork/>}/>
       <Route path='/todo' element={<ToDo/>}/>
    </Routes>
    </>
  )
}

export default WebRouting