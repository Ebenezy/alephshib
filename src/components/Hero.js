import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'react-bootstrap'
import alephshib from '../images/alephshib.png'
import alephzero from '../images/aleph-zero-logo.svg'
// import dextools from '../images/dextools.webp'
// import cmc from '../images/cmc.webp'
// import coingecko from '../images/coingecko.webp'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Navigation />
            <div className='hero-inner'>
                <Container>
                    <Row>
                        <Col md={7} id='first'>
                            <div className="hero-left" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <div className="">
                                    <div className="mb-3">
                                        <h1 className="hero-title">ALEPHSHIB</h1>
                                    </div>
                                    <Row>
                                        <Col md={9}>
                                            <p className="hero-text">The Aleph shib project aims to introduce individuals to the Aleph Zero ecosystem through its fun and friendly mascot, Alephshib!</p>
                                            <div className='d-flex pt-3 btns-mobile-center'>
                                                <div className="buy-now-btn hvr-back-pulse me-3">
                                                    Buy Alephshib
                                                </div>
                                                <div className="buy-now-btn hvr-back-pulse">
                                                    View Chart
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} id='second'>
                            <div className="landing-hero-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <img src={alephshib} alt='logo' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='d-flex justify-content-center brands mb-3'>
                <img src={alephzero} className='' alt='logo' />
                {/* <img src={dextools} className='' alt='logo' /> */}
                {/* <img src={cmc} className='' alt='logo' /> */}
                {/* <img src={coingecko} className='' alt='logo' /> */}
            </div>
        </div>
    )
}

export default Hero
