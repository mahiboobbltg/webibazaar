import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../backendcomponents/navbar'
import Footer from '../backendcomponents/footer';
import { useCart } from "../context/createContext";
import ControlledTabsExample from './singleproductdetails';

function SingleProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState("");
    const { addToCart } = useCart();




    useEffect(() => {

        axios.get(`http://localhost:3009/api/product/getProductById/${productId}`)

            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [productId]);


    const handleAddToCart = () => {
        // Call the addToCart function from the CartContext
        console.log(product)
        addToCart(product);
    };
    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Navbar />
            <div className='container mt-4 mb-5'>
                <div className='row'>
                    <div className='col-lg-6 colmd-6 '>
                        <div className='card border-0' style={{ height: "500px" }}>
                            <img src={"https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/27-300x298.jpg"} className="img-fluid position-relative" alt="images" height={150} />

                        </div>
                    </div>
                    <div className='col-lg-6 colmd-6 '>
                        <div className='card' style={{ height: "500px" }}>
                            <div className='card-body'>
                                <h1>{product.productname}</h1>
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price}</p>
                                <div className="product">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>Quantity Available: {product.quantity}</p>
                                    <button onClick={handleAddToCart} className="btn btn-primary"   >Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='caonatiner mt-4 mb-4'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card ' >
                                <ControlledTabsExample />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default SingleProduct;





