import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'

// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { MultipleCustomHooks } from './03-examples'
import { MainApp } from './09-useContext/MainApp'
import { Layout } from './05-useLayoutEffect/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
  
)
