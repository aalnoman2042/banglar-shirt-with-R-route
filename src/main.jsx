import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';

import OrderReview from './component/OrderReview/OrderReview';
import Main from './component/Layout/Main';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main> ,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('tshirt.json')
      },
      {
        path:'review',
        element: <OrderReview></OrderReview>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
