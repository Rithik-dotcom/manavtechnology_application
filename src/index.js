import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './components/footer/Footer';
import Electronics from './pages/Electronics';
import Jewellery from './pages/Jewellery';
import Men from './pages/Men';
import Women from './pages/Women';
import Header_two from './components/header_two/Header_two';
import Login from './components/login/Login';


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/electronics",
    element: <Electronics/>,
  },
  {
    path: "/jewelery",
    element: <Jewellery/>,
  },
  {
    path: "/women's clothing",
    element: <Women/>,
  },
  {
    path: "/men's clothing",
    element: <Men/>,
  },
  {
    path: "/login",
   
    element: <Login/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/>
     <Header_two/>
     <RouterProvider router={router} />
     <Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
