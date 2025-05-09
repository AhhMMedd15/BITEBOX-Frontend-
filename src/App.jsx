import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import MainLayout from './pages/MainLayout'
import Profile from './pages/Profile'
import Order from './pages/Order'
import Dashboard from './admin/Dashboard'
import Restaurantdetailpage from './Restaurants/Restaurant/Restaurantdetailpage'
import ScrollToTop from './components/ui/Scrolltotop'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import Navbar from './components/ui/Navbar'
import AddtoCart from './pages/AddtoCart'
import Restaurant from './admin/Restaurant'
import Menu from './admin/Menu'
import Orders from './admin/Orders'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainLayout />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
          <Route path='/resetpassword' element={<ResetPassword/>}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/orders' element={<Order />}></Route>
          <Route path='/admin/restaurant' element={<Restaurant/>}></Route>
          <Route path='/admin/dishes' element={<Menu/>}></Route>
          <Route path='/admin/orders' element={<Orders/>}></Route>
          <Route path='/restaurant/:id' element={<Restaurantdetailpage />}></Route>
          <Route path='/addtocart' element={<AddtoCart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App