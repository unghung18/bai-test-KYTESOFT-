import React from 'react';
import './Footer.scss';
import Image from 'next/image';
import awards from '../../assets/awards.png';

import recenttrip1 from '../../assets/footer-trip1.jpg';
import recenttrip2 from '../../assets/footer-trip2.jpg';
import recenttrip3 from '../../assets/footer-trip3.jpg';
import recenttrip4 from '../../assets/footer-trip4.jpg';
import recenttrip5 from '../../assets/footer-trip5.jpg';
import recenttrip6 from '../../assets/footer-trip6.jpg';


const Footer = () => {
    return (
        <div className='footer'>
            <ul className='footer__widgets'>
                <li className='footer__widgets-item'>
                    <h2 className='footer__widgets-item-title'>Our Awards</h2>
                    <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                    <Image src={awards} alt='awards' className='footer__widgets-item-awards-img' />
                </li>
                <li className='footer__widgets-item'>
                    <h2 className='footer__widgets-item-title'>Contact Info</h2>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        1-567-124-44227
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        184 Main Street East Perl Habour 8007
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        Mon - Sat 8.00 - 18.00 Sunday CLOSED
                    </p>
                </li>
                <li className='footer__widgets-item'>
                    <h2 className='footer__widgets-item-title'>Recent Trips</h2>
                    <ul className='footer__widgets-item-recent-trip'>
                        <li><Image src={recenttrip1} alt='recent-trip' /></li>
                        <li><Image src={recenttrip2} alt='recent-trip' /></li>
                        <li><Image src={recenttrip3} alt='recent-trip' /></li>
                        <li><Image src={recenttrip4} alt='recent-trip' /></li>
                        <li><Image src={recenttrip5} alt='recent-trip' /></li>
                        <li><Image src={recenttrip6} alt='recent-trip' /></li>
                    </ul>
                </li>
            </ul>
            <div className='footer-bar'>
                © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
            </div>
        </div>
    )
}

export default Footer