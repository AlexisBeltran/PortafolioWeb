import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Index from './Page/Index'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index/> 
    }
  ],
  //AGREGAR BASENAME A LA CONFIGURACIÓN DE BROWSERROUTER
  {
    basename: "/PortafolioWeb"
  }
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
