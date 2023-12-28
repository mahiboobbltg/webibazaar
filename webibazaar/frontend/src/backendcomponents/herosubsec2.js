import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import image from '../images/images.jpeg'
// import c1 from '../images/c1.jpeg'


function Herosubsec2() {
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

        <div className='container md-3 mt-3'>
            <div className='mb-3'>
                <h3>  LATEST PRODUCTS</h3>

            </div>
            <div className='row'>
                {products ? (
                    products.data.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card border-0'>


                                <div className='card-body '>
                                    <img src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-300x298.jpg"} className="img-fluid position-relative" alt="images" height={150} />
                                    
                                    <div> 
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                    <i class="fa-regular fa fa-star"></i>
                                         </div>
                                        <div className='card-title fs-5'>
                                   
                                        {item.productname}
                                        <div className=''>
                                          $  {item.price}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
}

export default Herosubsec2