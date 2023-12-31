import React from 'react'
import './style.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
function Movingbrand() {
    return (
        <div>
            <Container className='mt-4 mb-5'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="d-flex justify-content-around">
                            <img  src='/images/s7.png' className='moving'  alt="slide"   />
                            <img  src='/images/s1.jpeg'  className='moving'  alt="slide"   />
                            <img  src='/images/s2.jpeg'  className='moving'  alt="slide"   />
                            <img  src='/images/s3.jpeg' className='moving'   alt="slide"   />
                            <img  src='/images/s4.jpeg' className='moving'   alt="slide"   />
                            <img  src='/images/s5.jpeg' className='moving'   alt="slide"   />
                            <img  src='/images/s7.png'  className='moving'  alt="slide"   />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </Container>

        </div>
    )
}

export default Movingbrand

