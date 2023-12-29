import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import image from '../images/images.jpeg'
// import c1 from '../images/c1.jpeg'
import p1 from '../images/p1.jpeg'


function Herosubsec4() {
    const [products, setproducts] = useState();
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3009/api/product/getProduct'
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
        <div className='container mb-5 mt-5 bg-light'>
            
            <div className='row'>
                <div className='col-sm-8'>
                    <div className='row'>
                    <div className=' mb-3 mt-3'>
                <h3>  TOP CATEGORY</h3>

            </div>
                        {products ? (
                            products.data.map((item, index) => (
                                <div className='col-sm-4 mb-3'>
                                    <div className='card'>
                                        <div className='card-title'>
                                            <div className='card-body '>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <img src={p1} className="img-fluid rounded-start" alt="images" />
                                                        <div>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <i class="fa-regular fa fa-star"></i>
                                                        <i class="fa-regular fa fa-star"></i>
                                                        <i class="fa-regular fa fa-star"></i>
                                                        <i class="fa-regular fa fa-star"></i>
                                                        <p class="card-text fw-bold">{item.productname}</p>
                                                        <p class="card-text fw-bold">${item.price}</p>
                                                    </div>
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
            </div>
        </div>
)
}

export default Herosubsec4