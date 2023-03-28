import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import longetivity from '../images/alephshib-longetivity.jpeg'
import banner from '../images/alephshib-banner.jpg'
import fun from '../images/alephshib-fun.jpeg'
import community from '../images/alephshib-open-community.jpeg'
// import fun from '../images/fun.jpg'

const Vision = () => {
    return (
        <div id='vision' className='about-section'>
            <Container>
                <div className='text-center'>
                    <h3 className='section-title'>Vision & Values - Why you should join us</h3>
                </div>
                <Row>
                    <Col md={6} className='mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Dedication</h4>
                                <p>Like the legendary Shiba Inu, Alephshib is here to be a guide and companion for every single community member as they explore the Aleph zero universe.</p>
                                <p>Alephshib is loyal to Aleph zero community, and will introduce new participants to the blockchain’s innovations with a warm smile and a helping hand!</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={banner} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='order-sm-first order-md-last order-lg-last ms-auto mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Longetivity</h4>
                                <p>Aleph Shib is a long term dedicated project to the community. </p>
                                <p>We seek to achieve long term objectives and collaboration within Aleph Zero Ecosystem.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={longetivity} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>FUN</h4>
                                <p>Blockchain and cryptocurrency technology can be daunting and scary, but it doesn’t have to be!</p>
                                <p>Alephshib help everyone understand that crypto can be a space for creativity, collaboration, and connection. Alephshib is a place where people’s talents and skills can shine, and where everyone has something to enjoy!</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={fun} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='order-sm-first order-md-last order-lg-last ms-auto mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Open Community</h4>
                                <p>Alephshib was designed to support a large number of smaller token holders, who will all participate in and benefit from the growth and development of Alephshib Community.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={community} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Vision
