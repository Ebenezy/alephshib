import React from 'react'
import { Container } from 'react-bootstrap'
import YoutubeEmbed from './YoutubeEmbed'

const HowToBuy = () => {
    return (
        <div id='how-to-buy' className='about-section' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Container>
                <div className='text-center'>
                    <h2 className='section-title'>How to Buy</h2>
                    {/* <h4>Coming soon...</h4> */}
                    <YoutubeEmbed embedId="He1DnHi1Nq4" />
                </div>
            </Container>

        </div>
    )
}

export default HowToBuy
