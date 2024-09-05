import React from "react";
import ReactDom from 'react-dom/client'
import { Login } from './login'
import './styles/index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)