import React from 'react'
import image from '../images/images.jpeg'

function Herosecton() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card border-0'>
                                    <ul className="list-group">
                                        <li className="list-group-item bg-warning active" aria-current="true">An active item</li>
                                        <li className="list-group-item">A second item</li>
                                        <li className="list-group-item">A third item</li>
                                        <li className="list-group-item">A fourth item</li>
                                        <li className="list-group-item">And a fifth one</li>
                                        <li className="list-group-item">A third item</li>
                                        <li className="list-group-item">A fourth item</li>
                                        <li className="list-group-item">And a fifth one</li>
                                        <li className="list-group-item">And a fifth one</li>
                                        <li className="list-group-item">And a fifth one</li>
                                    </ul>

                        </div>

                    </div>
                    <div className='col-md-9'>
                        <div className='card border-0'>
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={image} className="card-img-top" alt="images" height={400} />

                                            </div>
                                            <div className="carousel-item">
                                                <img src={image} className="card-img-top" alt="images" />

                                            </div>
                                            <div className="carousel-item">
                                                <img src={image} className="card-img-top" alt="images" />

                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                </div>












            </div>
        </div>
    )
}

export default Herosecton