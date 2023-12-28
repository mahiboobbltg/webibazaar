import React from 'react'

import { NavDropdown } from 'react-bootstrap'


function Navbar() {
    return (
        <div >
            <div className='container-fluid mb-2 bg-light'>
                <div className='row'>
                    <div className='col '>
                        <div className='nav d-flex justify-content-around'>
                            <div className='nav-link'>home</div>
                            <div className='nav-link'>home</div>
                            <div className='nav-link'>home</div>
                            <div className='nav-link'>home</div>
                            <div className='nav-link'>home</div>
                            <div className='nav-link'>home</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='conatiner mb-2'>
                <div className='row'>
                    <div className='col'>
                        <div className='nav d-flex justify-content-around'>
                            <div className='nav-link'><h2>shouper</h2></div>
                            <div className='nav-link d-flex '>
                                <div className='d-flex  border'>
                                    <input type='dropdown' className='  border-0' placeholder='allcategory' />
                                    <input type='search' className='  border-0' placeholder='seacrch' />
                                </div>
                                <button className='btn btn-warning   '>
                                    search
                                </button>
                            </div>
                            <div className='nav-link d-flex'>
                                <div className='btn btn-light text-center'><i className='fa fa-user fa-xl'></i> </div>
                                <div> <h5>My Account</h5>
                                    <span>Sign in</span></div>
                            </div>
                            <div className='nav-link d-flex'>
                                <div className='btn btn-light text-center'><i className='fa fa-user fa-xl'></i> </div>
                                <div> <h5>My Cart</h5>
                                    <span>Sign in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container-fluid bg-primary text-white mb-4'>
                <div className='row'>
                    <div className='col my-2'>
                        <div className='nav d-flex justify-content-between align-items-center'>
                            <div className=' d-flex justify-content-between'>
                                <div className='nav-link  text-white fs-5'>home</div>
                                <div className='nav-link  text-white fs-5'>shop</div>
                                <div className='d-flex align-items-center  text-white '>
                                    <div>




                                        <NavDropdown className='text-white' style={{ color: 'white' }} id="nav-dropdown">
                                            <NavDropdown.Item eventKey="4.1">Left Sidebar</NavDropdown.Item>
                                            <NavDropdown.Item eventKey="4.2">Right Sidebar</NavDropdown.Item>
                                            <NavDropdown.Item eventKey="4.3">No Sidebar</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                    <NavDropdown title="PAGES" id="nav-dropdown">
                                        <NavDropdown.Item eventKey="4.1">Service</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.2">FAQs Pages</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.3">Gallery</NavDropdown.Item>
                                        <NavDropdown.Item eventKey="4.3">Page 404</NavDropdown.Item>
                                    </NavDropdown>


                                </div>

                                <div className='nav-link text-white fs-5'>contact us</div>
                                <div className='nav-link  text-white fs-5'>features</div>
                            </div>
                            <div className='nav d-flex '>
                                <div className='nav-link  text-white'>SPECIAL OFFERS</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Navbar