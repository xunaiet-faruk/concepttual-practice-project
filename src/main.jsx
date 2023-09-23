import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainpart from './Componets/Mainpart';
import Home from './Componets/Home/Home';
import Favirte from './Componets/Favorite/Favirte';
import Login from './Componets/Login/Login';
import Singlecard from './Componets/Home/Phones/Single/Singlecard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpart></Mainpart>,
    children :[
      {
        path:'/',
        element:<Home></Home>,
        loader:() =>fetch('jobs.json')
      },
      {
        path:'/favorite',
        element:<Favirte></Favirte>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/single/:id',
        element:<Singlecard></Singlecard>,
        loader:() => fetch('jobs.json')
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
