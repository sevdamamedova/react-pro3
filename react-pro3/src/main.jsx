import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context-api/AuthContext';
import ModeContextProvider from './context-api/ModeContext';



const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModeContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ModeContextProvider>
    </AuthContextProvider>       
  </React.StrictMode>
)


