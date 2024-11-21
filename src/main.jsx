import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Statistics from './Components/Statistics/Statistics';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ListedProducts from './Components/Utility/ListedProducts/ListedProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
     
      {
        path:'dashboard',
        element:<DashBoard></DashBoard>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
       path:'listedProducts',
       element:<ListedProducts></ListedProducts>,
       loader: ()=> fetch('/Products.json')
      },
      {
        path:'products/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader:() => fetch('/Products.json')
      }

    ]
 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
