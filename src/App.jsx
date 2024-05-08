import { useState } from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import ProductList from './components/productList.jsx'
import Nav from './components/nav.jsx'
import Products from './components/products.jsx'
import About from './components/about.jsx'
import ProductDetails from './components/productDetails.jsx'
import './index.css'
const ax = {
  name: "seif",
  age: "19",
  hobby: 'music&drawing'
};
function App() {

  console.log("error?");
  return (
    <>
      <Nav />
      <Routes>
      <Route path='/' element={<ProductList />} />
     < Route path="About" element={<About />} />
     < Route path="/product/:prodId" element={<ProductDetails />} />
     < Route path="/products/category/:catg" element={<ProductList />} />
     {/* < Route path="/product/categories/:cat" element={<Product product={cat} />} /> */}
     </Routes>

    </>
  )
}
// why productlist is not working
// why productlist is not working?
// why productlist is not working?
//
export default App
