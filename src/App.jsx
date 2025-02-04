import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Collection } from './pages/Collection'
import { Order } from './pages/Order'
import { PlaceOrder } from './pages/PlaceOrder'
import { Contact } from './pages/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonals'
import Hero from './components/Hero'
import Mlsheduel from './components/Mlsheduel'
import Powerbi from './components/Powerbi'
import Features from './components/Features'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminPanel from './components/AdminPanel'
import ProductMenu from './components/ProductMenu'
import CreateProduct from './components/CreateProduct'
import RegisterModel from './pages/RegisterModel'
import CartPage from './pages/CartPage'
import CheckoutPage from './components/CheckoutPage'
import Forgot from './pages/Forgot'
import Title from './components/Title'
import LoginReg from './pages/LoginReg'
import Item from './Products/Item'
import { Cart } from './pages/Cart'
import ProductPage from './Products/ProductPage'
import MainComponent from './Products/MainComponent'
import Sidebar from './components/SideBar'




export const App = () => {
  return (
    
        <Routes>

          <Route path='/collection' element={<Collection/>} />
          <Route path='/order' element={<Order/>}/>
          <Route path='/place' element={<PlaceOrder/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/testimonals' element={<Testimonials/>}/>
          <Route path='/hero' element={<Hero/>}/>
          <Route path='/ml' element={<Mlsheduel/>}/>
          <Route path='/power' element={<Powerbi/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<AdminPanel/>}/>
          <Route path='/menu' element={<ProductMenu/>}/>
          <Route path='/new' element={<CreateProduct/>}/>
          <Route path='/regmodel' element={<RegisterModel/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/check' element={<CheckoutPage/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/title' element={<Title/>}/>
          <Route path='/popup' element={<LoginReg/>}/>
          <Route path='/item' element={<Item/>}/>
          <Route path='/product' element={<Cart/>}/>
          <Route path='/productpage' element={<ProductPage/>}/>
          <Route path='/main' element={<MainComponent/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
        </Routes>

  )
}
export default App;