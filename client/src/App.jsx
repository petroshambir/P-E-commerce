
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Cart from './pages/Cart'
import Loggin from './pages/Login';
import Contact from "./pages/Contact"
import Orders from './pages/Orders'
import Placeorder from './pages/Placeorder'
import Product from './pages/Product'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import VerifyStripe from './pages/VerifyStripe';

function App() {
  return (
    <>
      <div className='px-4 sm:px-[5vw] lg:px-[9vw]'>
        <ToastContainer />
<Navbar/>
<SearchBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          < Route path='/About' element={<About />} />
          <Route path='/Collections' element={<Collections />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Loggin />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Placeorder' element={<Placeorder />} />
          <Route path='/Product/:ProductId' element={<Product />} />
          <Route path='/verify' element={<VerifyStripe/>} />
        </Routes>
        <Footer/>
        
      </div>
    </>

  )
}

export default App