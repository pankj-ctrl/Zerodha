import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage.jsx'
import SignupPage from './landing_page/signup/SignupPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import ProductPage from "./landing_page/products/ProductPage.jsx"
import SupportPage from "./landing_page/support/SupportPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}  ></Route>
      <Route path='/signup' element={<SignupPage/> }  ></Route>
      <Route path='/about' element={<AboutPage/>}  ></Route>
      <Route path='/pricing' element={<PricingPage />}  ></Route>
      <Route path='/support' element={<SupportPage />}  ></Route>
       <Route path='/products' element={<ProductPage/>}  ></Route>
    </Routes>
  </BrowserRouter>
)
