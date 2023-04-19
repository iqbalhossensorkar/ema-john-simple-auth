import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import cartLoader from './catrLoader';
import Checkout from './components/CheckOut/Checkout';
import SignUp from './components/signup/SignUp';
import AuthProvider from './components/providers/AuthProvider';
import Private from './Private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/review",
        element: <Review></Review>,
        loader: cartLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/checkout",
        element: <Private><Checkout></Checkout></Private>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
