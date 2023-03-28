import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div id='about' className='about-section text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Container>
                <div className='content-section'>
                    <h2 className='section-title'>Mission Statement</h2>
                    <p>The Aleph shib project aims to introduce individuals to the Aleph Zero ecosystem through its fun and friendly mascot, Alephshib!</p>
                    <p>The project is community-owned and managed, with strict limits on individual holdings to promote decentralization and widespread adoption.</p>
                    <p>By leveraging the power of memes and community-driven content creation, Alephshib aims to increase awareness and understanding of the Aleph Zero  universe, serving as a guide and companion to all along the way!</p>
                </div>
            </Container>
        </div>
    )
}

export default About
