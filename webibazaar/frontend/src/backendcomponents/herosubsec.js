import { React } from 'react'
import { Alert } from 'react-bootstrap'
import hsub1 from '../images/hsub1.jpeg'
import hsub2 from '../images/hsub2.jpeg'

const Herosubsec = () => {
    return (
        <div className='container mt-4'>
            <div className='mb-4  '>
            <div className='row'>
                <div className='col-6 '>
                    <div className='card border-0'>
                        <img src={hsub1} className="card-img-top" alt="images" />
                    </div>
                </div>
                <div className='col-6 '>
                    <div className='card border-0'>
                        <img src={hsub2} className="card-img-top" alt="images" />
                    </div>
                </div>
            </div>
            </div>

                <div className='mb-5 '>
                <div className='row'>
                    <div className='col '>
                        <div className='card  d-flex'>
                            <div className=' d-flex'>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}></i></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">24/7 Support</h3>
                                        <h5 className="ms-4 fs-6">Online Support 24/7</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3 ' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}></i></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Money Back Guarantee</h3>
                                        <h5 className="ms-4 fs-6">100% Secure Payment</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3 ' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}></i></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Special Gift Cards</h3>
                                        <h5 className="ms-4 fs-6">Give The Perfect Gift</h5>
                                    </div>
                                </div>
                                <div className='vr mt-3' style={{ height: "50px" }}></div>
                                <div className="  d-flex  p-3  "><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}><i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}></i></Alert>
                                    <div >
                                        <h3 className="ms-4 fs-5">Free Shipping</h3>
                                        <h5 className="ms-4 fs-6">On Order Over $99</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Herosubsec