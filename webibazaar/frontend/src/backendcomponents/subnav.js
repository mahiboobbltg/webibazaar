import React from 'react'
import { NavDropdown, Navbar, Container, Nav} from 'react-bootstrap'


import {Link} from 'react-router-dom'


function Subnav
    () {
    return (
        <div className='container-fluid bg-primary text-white mb-4'>
            <div className='row'>
                <div className='col my-2'>
                    <Navbar expand="lg" className="">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0 "   style={{ maxHeight: '120px' }}   navbarScroll >
                                    <Nav.Link href="/">
                                        <Link to="/" varient='text-white' />Home

                                    </Nav.Link>
                                    <Nav.Link href="#oooo">SHOP</Nav.Link>
                                    <NavDropdown title="BLOG" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#mmmmm">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#yyyy">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#uuuu">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#rrrr">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#ddd">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#aaaa">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#actiongg">CONTACT US</Nav.Link>
                                    <Nav.Link href="#ggggg">FEATURES</Nav.Link>

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>





                </div>
            </div>
        </div>

    )
}

export default Subnav
