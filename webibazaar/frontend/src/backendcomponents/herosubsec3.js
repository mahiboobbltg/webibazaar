import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import image from '../images/images.jpeg'
import c1 from '../images/c1.jpeg'
// import p1 from '../images/p1.jpeg'


function Herosubsec3() {
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

        <div className='container md-3'>
            <div className='mb-3'>
                <h3>  TOP CATEGORY</h3>

            </div>
            <div className='row'>

                {products ? (
                    products.data.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card '>
                                <img src={c1} className="img-fluid position-relative" alt="images" height={150} />
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>







{/* 

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='row'>

                            {products ? (
                                products.data.map((item, index) => (
                                    <div className='col-sm-4'>
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
                                                            <p class="card-text">{item.productname}</p>
                                                            <p class="card-text">{item.price}</p>
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
 */}









           
        </div>
    );
}

export default Herosubsec3