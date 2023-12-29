import React from 'react'

import { NavDropdown } from 'react-bootstrap'
import MyComponent from './dropdown'
import logo from "../images/webi-logo.png"
import desk from "../images/desk.png"
import tab from "../images/tab.png"
import phon from "../images/phon.png"


function Navbar() {
    return (
        <div className='container-fluid mb-2 bg-light'>
            <div >
                <div className='row'>
                    <div className='col '>
                        <div className='nav d-flex justify-content-around align-items-center'>
                            <div className='nav-link'>
                                <img src={logo} alt='logo' />
                                
                            </div>
                            <div className='nav-link'>Shopeur Electronics WooCommerce Theme</div>
                            <div className=' d-flex'>
                            <div className='nav-link '><img src={desk} alt='desk' width={50}/>Desktop</div>
                            <div className='nav-link'><img src={tab} alt='tab'width={50} />Tablet</div>
                            <div className='nav-link'><img src={phon} alt='phon'width={50} />Mobile</div>
                            
                            </div>
                          
                            <div className='nav-link'><button className='btn btn-secondary float-end'>Buy</button></div>
                        </div>
                    </div>
                </div>
            </div>

























            <div className='conatiner mb-2'>
                <div className='row'>
                    <div className='col'>
                        <div className='nav d-flex justify-content-around'>
                            <div className='nav-link'>shouper</div>
                            <div className='nav-link d-flex '>
                                <div className='d-flex  border ' style={{Width:"600px"}}>
                               < MyComponent/>
                                    <input type='search' className='  border-0' placeholder='seacrch' />
                                    <button className='btn btn-warning   '>
                                    search
                                </button>
                                </div>
                              
                            </div>
                            <div className='nav-link d-flex'>
                                <div className='btn btn-light text-center'><i className='fa fa-user '></i> </div>
                                <div> My Account
                                    <span>Sign in</span></div>
                            </div>
                            <div className='nav-link d-flex'>
                                <div className='btn btn-light text-center'><i className='fa fa-user '></i> </div>
                                <div>  <span>My Cart</span>
                                    <span>Sign in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container bg-primary text-white mb-4'>
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