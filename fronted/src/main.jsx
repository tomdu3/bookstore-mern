import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {router} from './routers/router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
