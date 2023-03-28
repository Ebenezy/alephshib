import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import burning from '../images/alephshib-burning.jpg'
// import fun from '../images/fun.jpg'

const Ignition = () => {
    return (
        <div id='ignition' className='about-section dark_bg' >
            <Container data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className='text-center'>
                    <h3 className='section-title text-white'>Ignition - the burning</h3>
                </div>
                <Row>
                    <Col md={6} className='mb-4'>
                        <div className='section-inner' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4 className='text-white'>Ignition</h4>
                                <p className='text-white'>Alephshib was created to be completely deflationary.</p>
                                <p className='text-white'>No new Alephshib will ever be printed.
                                    In keeping with this spirit, of the 6% token tax, 1% will be burnt on every transaction!</p>
                                <p className='text-white'>This steadily decreases the token supply overtime, making every Alephshib have a little more valuable.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <img src={burning} alt='alephshib' />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Ignition
