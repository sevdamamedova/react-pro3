import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
// import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context-api/AuthContext';


const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthContextProvider>       
  </React.StrictMode>
)


