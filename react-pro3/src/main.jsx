import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
// import './index.css'
import { BrowserRouter } from 'react-router-dom';


const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>       
  </React.StrictMode>
)


