import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router'
import Loading from '../Loading'
import Contacts from '../Contacts'
import {SingleContact} from '../Contacts'
// import About from '../../pages/About'
// import ToDo from '../ToDo'
// import NotFound from '../../pages/NotFound'
// import SocialNetwork from '../SocialNetwork'
// import Home from '../../pages/Home'




 //lazy-loading

//  const Contacts = lazy(() => import('../../components/Contact'))
 const SocialNetwork = lazy(() => import('../../components/SocialNetwork'))
 const ToDo = lazy(() => import('../../components/ToDo'))
 const Home = lazy(() => import('../../pages/Home'))
 const About = lazy(() => import('../../pages/About'))
 const NotFound = lazy(() => import('../../pages/NotFound'))



const WebRouting = () => {
  return (
    <Suspense fallback={<Loading/>}>
   
    <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contacts' element={<Contacts />}>
       <Route path='test' element={<div>outlet inside contacts </div>}/>
       </Route>
       <Route path='contacts/:id' element={<SingleContact />}/>
       <Route path='/social' element={<SocialNetwork />}/>
       <Route path='/todo' element={<ToDo />}/>
       <Route path='*' element={<NotFound /> }/>
    </Routes>
    </Suspense>
    
  )
}

export default WebRouting