import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function Footer
    () {
    return (
        <div className="container-fluid bg-light">
            <footer className="  ">
                <div className="container ">
                    <Navbar expand="lg" className="rounded bg-primary    ">
                        <Container className="">
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-4 my-lg-0 " style={{ maxHeight: '150px' }} navbarScroll>
                                    <Nav.Link href="#action1"><Button variant="light"><i className="fa-brands fa-md fa fa-facebook-f"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-brands fa fa-twitter"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-sharp fa fa-solid fa-rss"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-brands fa fa-square-youtube"></i></Button></Nav.Link>
                                    <Nav.Link href="#action1"><Button variant="light"><i class="fa-solid fa-camera"></i></Button></Nav.Link>
                                </Nav>
                                <Navbar.Text className='text-white fs-4 me-5'>
                                    SIGN UP FOR NEWSLETTER
                                </Navbar.Text>
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" style={{ width: "400px" }} className=" border-0 " aria-label="Search" />
                                    <Button variant="warning" >Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className="container ">
                <div className="row ">
                    <div className="d-flex justify-content-around ">
                        <div className="d-flex ">
                            <div className="col">
                                <h5>CONTACT US</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="eee"><i className="fa fa-xl  fa-location-dot"></i> 1093 Marigold Lane, Coral Way, Miami,<br /> Florida, 33169
                                    </a></li>
                                    <li><a className="text-muted" href="eee"><i className=" fa fa-xl fa-phone"></i> 610-403-403</a></li>
                                    <li><a className="text-muted" href="eee"><i className='fa fa-xl fa-envelope'></i>company@example.com</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="col">
                                <h5>MY ACCOUNT</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="eee">Cool stuff</a></li>
                                    <li><a className="text-muted" href="eee">Random feature</a></li>
                                    <li><a className="text-muted" href="eee">Team feature</a></li>
                                    <li><a className="text-muted" href="eee">Stuff for developers</a></li>
                                    <li><a className="text-muted" href="eee">Another one</a></li>
                                    <li><a className="text-muted" href="eee">Last time</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="col">
                                <h5>CATEGORIES</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="eee">Resource</a></li>
                                    <li><a className="text-muted" href="eee">Resource name</a></li>
                                    <li><a className="text-muted" href="eee">Another resource</a></li>
                                    <li><a className="text-muted" href="eee">Final resource</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex ">
                            <div className="col">
                                <h5>INFORMATION</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-muted" href="eee">Business</a></li>
                                    <li><a className="text-muted" href="eee">Education</a></li>
                                    <li><a className="text-muted" href="eee">Government</a></li>
                                    <li><a className="text-muted" href="eee">Gaming</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


                <hr className='mb-4' />



                <div className="container">
                    <p >
                        <pre className="text-center">

                            Radio | Hydraulic | Lamp | Pro Electron | Atomtronics | Avionics |
                            Radio | Cryotronics | induction | Circuits | Cryotronics
                        </pre>
                    </p>
                    <p >
                        <pre className="text-center">

                            | Spintronics | Accessories | Electronics | Chairs | Bar Table |
                            Bioelectronics | Circuits
                        </pre>
                    </p>
                </div>

                <hr className='mb-4' />

                <div className="container text-center">
                    <p >Designed by Demo Theme All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
