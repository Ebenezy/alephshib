import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import square1 from '../images/icons/square1.svg'
import square2 from '../images/icons/square2.svg'
import logo from '../images/alephshib.png'

const Tokenomics = () => {
    return (
        <Container data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className='text-center'>
                <h2 className='section-title'>Tokenomics</h2>
            </div>
            <div className='hero-gradient-bg'>
                <div className='hero-gradient-bg1'>
                    <img src={square1} alt='square' />
                </div>
                <Row>
                    <Col md={8}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <Row>
                                <Col md={3}>
                                    <div className='hero-gradient-1'>
                                        <h4>6%</h4>
                                        <p>Tax</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='hero-gradient-1'>
                                        <h4>1,000,000,000</h4>
                                        <p>Total Supply</p>
                                    </div>
                                </Col>
                                <Col md={3}></Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='text-center'>
                            <img src={logo} alt='logo' width='180px' />
                        </div>
                    </Col>
                </Row>
                <div className='hero-gradient-bg2'>
                    <img src={square2} alt='square' />
                </div>
            </div>
        </Container>
    )
}

export default Tokenomics
