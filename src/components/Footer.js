import React from 'react'
import { Container } from 'react-bootstrap'
import telegram from '../images/icons/telegram.svg'
import twitter from '../images/icons/twitter.svg'

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <Container>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                        <a href="http://t.me/alephshib" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img src={telegram}
                                    alt="telegram"
                                />
                            </div>
                        </a>
                        <a href="http://twitter.com/alephshib" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img
                                    src={twitter}
                                    alt="twitter"
                                />
                            </div>
                        </a>
                    </div>
                    <div className='mb-5'>
                        <a href='mailto:help@alephshib.com' className='mail'>help@alephshib.com</a>
                    </div>
                </Container>
            </div>
            <footer>
                <p className='mb-0'>Copyright © 2023 Alephshib Coin. All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
