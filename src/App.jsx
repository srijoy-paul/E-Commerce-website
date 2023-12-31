import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button"
import Layout from '../components/Layout';
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from '../pages/Login';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { store } from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Layout />}>
  <Route index element={<Home />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/login' element={<Login />} />
</Route>))
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
