import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router'
import Loading from '../Loading'
// import Contacts from '../Contacts'
import {SingleContact} from '../Contacts'
import Contacts from '../../pages/Contacts'
// import CounterRTK from '../../pages/CounterRTK'
// import AlionFollowers from '../../pages/AlionFollowers'
// import About from '../../pages/About'
// import ToDo from '../ToDo'
// import NotFound from '../../pages/NotFound'
// import SocialNetwork from '../SocialNetwork'
// import Home from '../../pages/Home'
// import UsersWithReducer from '../../pages/UsersWithReducer'






 //lazy-loading

//  const Contacts = lazy(() => import('../../pages/Contacts'))
 const SocialNetwork = lazy(() => import('../../components/SocialNetwork'))
 const ToDo = lazy(() => import('../../components/ToDo'))
 const Home = lazy(() => import('../../pages/Home'))
 const About = lazy(() => import('../../pages/About'))
 const NotFound = lazy(() => import('../../pages/NotFound'))
 const UsersWithReducer = lazy(() => import('../../pages/UsersWithReducer'))
 const UsersWithRedux = lazy(() => import('../../pages/UsersWithRedux'))
 const AlionFollowers = lazy(() => import('../../pages/AlionFollowers'))
 const CounterR = lazy(() => import('../../pages/CounterR'))
 const CounterRTK = lazy(() => import('../../pages/CounterRTK'))
 
 



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
       <Route path='/alion-followers' element={<AlionFollowers />}/>
       <Route path='/users-with-reducer' element={<UsersWithReducer/>}/>
       <Route path='/users-with-redux' element={<UsersWithRedux />}/>
       <Route path='/todo' element={<ToDo />}/>
       <Route path='/counter-redux' element={<CounterR />}/>
       <Route path='/counter-redux-rtk' element={<CounterRTK />}/>
       <Route path='*' element={<NotFound /> }/>
    </Routes>
    </Suspense>
    
  )
}

export default WebRouting