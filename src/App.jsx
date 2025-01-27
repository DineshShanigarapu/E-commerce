import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Collection } from './pages/Collection'
import { Order } from './pages/Order'
import { PlaceOrder } from './pages/PlaceOrder'
import { Product } from './pages/Product'
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

export const App = () => {
  return (
    
        <Routes>
          
          <Route path='/about' element={<About/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/order' element={<Order/>}/>
          <Route path='/place' element={<PlaceOrder/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
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

        </Routes>

  )
}
export default App;