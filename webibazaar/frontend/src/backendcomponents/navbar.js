import React from 'react'
import { MDBInputGroup } from 'mdb-react-ui-kit';
import MyComponent from './dropdown'
import Subnav from './subnav'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import Header from '../components/header';

function Navbar() {


    return (
        <div className='container-fluid mb-2 bg-light'>
            <div className='row'>
                <div className='col '>
                    <div className='nav d-flex justify-content-around align-items-center'>
                        <div className='nav-link'>
                            <img src="/images/webi-logo.png" alt='logo' />

                        </div>
                        <div className='nav-link'>Shopeur Electronics WooCommerce Theme</div>
                        <div className=' d-flex'>
                            <div className='nav-link '><img src="/images/desk.png" alt='desk' width={50} />Desktop</div>
                            <div className='nav-link'><img src="/images/tab.png" alt='tab' width={50} />Tablet</div>
                            <div className='nav-link'><img src="/images/phon.png" alt='phon' width={50} />Mobile</div>

                        </div>

                        <div className='nav-link'><button className='btn btn-secondary float-end'>Buy</button></div>
                    </div>
                </div>
            </div>



            <div className='conatiner mb-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='nav d-flex justify-content-around align-items-center'>
                            <div className='nav-link'>
                                <img src='/images/logo.png' alt='shoplogo' />
                            </div>
                            <div className='nav-link  '>
                                <div className='d-flex ' >

                                    <MDBInputGroup tag="form" className='d-flex border'>
                                        < MyComponent />
                                        <input className='border-0  text-muted' style={{ width: "400px" }} placeholder="search products" aria-label="Search" type='Search' />
                                        <button className='btn btn-warning'>search</button>
                                    </MDBInputGroup>
                                </div>
                            </div>
                            <div className=' '>
                                <div className='btn btn-light '><FaRegUser className='icon' /></div>
                                My Account   <span>Sign in</span>

                            </div>
                            <div className=' '>
                               
                                    <div className='btn btn-light  '><TiShoppingCart className='icon' />  </div>
                                    My Cart
                                    <span>Sign in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Subnav />
                <Header />
                





            </div >
            )
}

            export default Navbar