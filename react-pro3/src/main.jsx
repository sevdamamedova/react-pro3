import React from 'react'
import ReactDOM from 'react-dom/client'
// import FirstElement from './FirstElement';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  <React.StrictMode>
    <BrowserRouter>
    <Link to ="/todo"> go to todo</Link>
            
    <NavLink  to="/contacts" style={({isActive}) => ({color: isActive ? 'red' : 'initial'})}>
         contacts
        </NavLink>
      <App/>
    </BrowserRouter>       
  </React.StrictMode>
)