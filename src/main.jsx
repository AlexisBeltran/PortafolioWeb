import React from 'react'
import ReactDOM from 'react-dom/client'
import DB_URL from "./consts/index"
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Index from './Page/Index'
console.log(DB_URL.DB_URL);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index/> 
    }
  ],
  //AGREGAR BASENAME A LA CONFIGURACIÓN DE BROWSERROUTER
  {
    basename: DB_URL.DB_URL
  }
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
