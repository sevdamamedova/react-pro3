import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context-api/AuthContext';
import ModeContextProvider from './context-api/ModeContext';
import ManyModeContextProvider from './context-api/ManyModeContext';



const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

reactRootElement.render(
  // <React.StrictMode>
    <AuthContextProvider>
      {/* <ModeContextProvider> */}
        <ManyModeContextProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ManyModeContextProvider>
      {/* </ModeContextProvider> */}
    </AuthContextProvider>       
  // </React.StrictMode>
)


