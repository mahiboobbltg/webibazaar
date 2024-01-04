import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import image from '../images/images.jpeg'
// import c1 from '../images/c1.jpeg'
import { Link } from 'react-router-dom';
import Herosecton from '../backendcomponents/category';
import Navbar from '../backendcomponents/navbar'
import Movingbrand from '../backendcomponents/movingbrand';
import Footer from '../backendcomponents/footer';
import Blog from '../backendcomponents/blog';
import LatestProduct from '../backendcomponents/latestproduct';

import TopCategory from '../backendcomponents/topcategory';


function Productlist() {
    const [products, setproducts] = useState();


    
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3009/api/product/getProduct/'
                );
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, []);

    return (
        <>

            <Navbar />
         
            <Herosecton />
            <div className='container md-3 '>
                <div className='mb-3 mt-3'>
                    <h3>  LATEST PRODUCTS</h3>
               
                </div>
                <div className='row'>
                    {products ? (
                        products.data.map((item, index) => (
                            <div key={index} className='col  my-3 fs-6'>
                                <div className='card border-0'>


                                    <div className='card-body '>
                                    <Link to={`/product/${item._id}`}>
                                        <img src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-300x298.jpg"} className="img-fluid position-relative" alt="images" height={150} />

                                        <div>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                        </div>
                                        <div className='card-title fs-5 fw-bold'>
                                           
                                                {item.productname}
                                                <div className='fw-bold'>
                                                    $  {item.price}
                                                </div>

                                                </div>
                                            </Link>


                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
            <div className='container md-3 '>
                <div className='mb-3 mt-3'>
                    <h3>  LATEST PRODUCTS</h3>

                </div>
                <div className='row'>
                    {products ? (
                        products.data.map((item, index) => (
                            <div key={index} className='col  my-3 fs-6'>
                                <div className='card border-0'>


                                    <div className='card-body '>
                                    <Link to={`/product/${item._id}`}>
                                        <img src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-300x298.jpg"} className="img-fluid position-relative" alt="images" height={150} />

                                        <div>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                            <i className="fa-regular fa fa-star"></i>
                                        </div>
                                        <div className='card-title fs-5 fw-bold'>
                                           
                                                {item.productname}
                                                <div className='fw-bold'>
                                                    $  {item.price}
                                                </div>

                                                </div>
                                            </Link>


                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
         

            <LatestProduct />
            <TopCategory />
            <Blog />
            <Movingbrand />
            <Footer />

        </>

    );
}

export default Productlist