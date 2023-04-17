import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Roadmap = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('alephshib-whitepaper.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'alephshib-whitepaper.pdf';
                alink.click();
            })
        })
    }

    return (
        <div id='roadmap' className='about-section dark_bg' >
            <Container data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className='text-center'>
                    <h3 className='section-title text-white'>Roadmap</h3>
                </div>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 1</h4>
                                <ul type='disc'>
                                    <li className='text-white'>Website Launch</li>
                                    <li className='text-white'>Create social media</li>
                                    <li className='text-white'>Token launch</li>
                                    <li className='text-white'>Rennounce Contract</li>
                                    <li className='text-white'>Lock Liquidity for a year</li>
                                    <li className='text-white'>Start marketing campaigns</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 2</h4>
                                <ul type='circle'>
                                    <li className='text-white'>500 Holders</li>
                                    <li className='text-white'>Social Media competitions &amp; rewards</li>
                                    <li className='text-white'>Aleph Zero Ecosystem Collaboration</li>
                                    <li className='text-white'>Token Audit</li>
                                    <li className='text-white'>3000 Holders</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 3</h4>
                                <ul type='circle'>
                                    <li className='text-white'>Staking/LP rewards activation</li>
                                    <li className='text-white'>Social media expansion</li>
                                    <li className='text-white'>NFT mints out</li>
                                    <li className='text-white'>Ecosystem Collaboration</li>
                                    <li className='text-white'>Lottery Platform</li>
                                    <li className='text-white'>Coinmarketcap Listing </li>
                                    <li className='text-white'>Coingecko Listing</li>
                                    <li className='text-white'>NFT Lending and borrowing platform</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='whitepaper w-100 pt-5'>
                    <div className='text-center'>
                        <h3 className='section-title text-white'>Whitepaper</h3>
                        <div className='d-flex justify-content-center'>
                            <div onClick={onButtonClick} className="buy-now-btn hvr-back-pulse" style={{ width: 225 }}>
                                Download Whitepaper
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Roadmap
