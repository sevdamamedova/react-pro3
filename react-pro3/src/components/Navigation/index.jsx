import React from 'react'
import {NavLink} from 'react-router-dom'

function NavigationLink({to, title, color}) {
    return(
        <NavLink to={to} 
        className={({isActive}) => isActive ? 'test' : 'test1'}
        style={({isActive}) =>
        ({color: isActive ?(color || 'red')  : 'inital'})}>{title}</NavLink> 
        
    ) 
}

const Navigation = () => {
  return (
    <>
        <NavigationLink to='/' title='Home' color='blue'/>
        <NavigationLink to='/about' title='About'/>
        <NavigationLink to='/contacts' title='Contacts'/>
    </>
  )
}

export default Navigation