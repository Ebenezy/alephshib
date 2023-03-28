import React from 'react'
import { Container } from 'react-bootstrap'

const StakingRewards = () => {
    return (
        <div id='rewards' className='about-section text-center dark_bg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Container>
                <div className='content-section'>
                    <h2 className='section-title text-white'>Staking Rewards</h2>
                    <p className='text-white'>Alephshib won't just sit around being a meme.</p>
                    <p className='text-white'>Holders that stake or provide liquidity with their Alephshib tokens will share a pool of rewards ensuring that supporting Alephshib project is always rewarding!</p>
                </div>
            </Container>
        </div>
    )
}

export default StakingRewards
