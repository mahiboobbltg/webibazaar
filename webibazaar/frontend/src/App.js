import React from 'react';
// import Navbar from './backendcomponents/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepage from './backendcomponents/homepage';
// import Herosecton from './backendcomponents/category';
// import Herosubsec from './backendcomponents/herosubsec';
// import Herosubsec3 from './backendcomponents/herosubsec3';
// import Herosubsec4 from './backendcomponents/herosubsec4';
// import Herosubsec5 from './backendcomponents/herosubsec5';
// import Herosubsec6 from './backendcomponents/herosubsec6';
// import Footer from './backendcomponents/footer';
// import Blog from './backendcomponents/blog';
// import Movingbrand from './backendcomponents/movingbrand';
// import Themeextimg from './backendcomponents/textonimage';
// import Register from './pages/auth/register';
import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import ProductList from './product/productlist';
import SingleProduct from './product/singleproduct';

// import ProductApp from './productapp';


function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/product/:productId" exact element={<SingleProduct />} />
          
          
          {/* <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} />
          <Route path="/" exact element={<ProductList />} /> */}
     
          {/* <Herosecton />
          <Register />
          <Herosubsec />
          <Homepage />
          <Herosubsec3 />
          <Herosubsec4 />
          <Herosubsec5 />
          <Herosubsec6 />
          <Blog />
          <Themeextimg />
          <Movingbrand />
          <Footer /> */}

        </Routes>







    </BrowserRouter>
  );


}

export default App;
