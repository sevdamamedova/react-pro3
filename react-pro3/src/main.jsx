import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context-api/AuthContext';
import ModeContextProvider from './context-api/ModeContext';
import ManyModeContextProvider from './context-api/ManyModeContext';
import { createStore } from 'redux';
import rootReducer from './Redux'
import { Provider } from 'react-redux';
import store from './redux-toolkit/store';






const reactRootElement = ReactDOM.createRoot(document.getElementById('root'))

// const store = createStore(rootReducer)

reactRootElement.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
      {/* <ModeContextProvider> */}
        <ManyModeContextProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ManyModeContextProvider>
      {/* </ModeContextProvider> */}
      </Provider>
    </AuthContextProvider>       
  // </React.StrictMode>
)


