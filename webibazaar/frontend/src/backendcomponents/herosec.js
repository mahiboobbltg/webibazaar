import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import home from '../images/home.jpg'

function Herosecton() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='bg-warning d-flex justify-content-around align-items-center'>

                                <i className='fa fa-bars  ms-0'></i>
                                <p className='fw-bolder mt-3 me-5 '>ALL CATEGORY</p>


                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='h6'> Accessories</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <p className='h6'> Hydraulic</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='h6'> Lamp</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <div className='h6'><span>Cryotronics</span></div>
                            </div>
                            <div className=''>
                                <div className='h6'><span> Induction</span></div>

                            </div>
                            <div className='d-flex justify-content-between '>
                                <p className='h6'>Avionic</p>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className=''>
                                <p className='h6'> Circuits</p>
                            </div>
                            <div className=''>
                                <p className='h6'>ElectronicsY</p>
                            </div>
                            <div className=''>
                                <p className='h6 '>Handwatch</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-9'>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home}
                                    alt="First slide"
                                />
                                <Carousel.Caption >
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={home}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5>Third slide label</h5>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                    </div>





                </div>



            </div>
        </div>
    )
}

export default Herosecton