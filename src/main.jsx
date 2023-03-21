import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom"
import Index from './Page/Index'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/> 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/PortafolioWeb'>
      <RouterProvider router={router}/>
    </BrowserRouter>
  </React.StrictMode>,
)
