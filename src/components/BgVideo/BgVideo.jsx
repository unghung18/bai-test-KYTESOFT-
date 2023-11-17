import React, { useState } from 'react';
import './BgVideo.scss';
import Navbar from '../Navbar/Navbar';

const BgVideo = () => {

    const [advancedSearch, setAdvancedSearch] = useState(false);

    return (
        <div className='bgContainer'>
            <div className='overlay'>
                <video
                    preload="auto"
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source src="/bgvideo.mp4" type="video/mp4" />
                </video>
                <Navbar />
                <div className='standard'>
                    <h2>Where do you want to go?</h2>
                    <div>Trips, experiences, and places. All in one service.</div>
                    <form className='standard__form'>
                        <div className='standard__form__container'>
                            <div className='standard__form__container-item'>
                                <input type="text" placeholder='Destination, city' />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="search-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <div className='standard__form__container-item'>
                                <select name="" id="">
                                    <option value="">Any Month</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="calendar-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                            </div>
                            <div className='standard__form__container-item'>
                                <select name="" id="">
                                    <option value="">Price Low to High</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                    <option value="">a</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sort-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>

                            </div>
                            <div className='standard__form__container-item search-btn-div'>
                                <div className='search-btn'>Search</div>
                            </div>
                        </div>

                        {advancedSearch &&
                            <div className='standard__form__container'>
                                <div className='standard__form__container-item'>
                                    <select name="" id="">
                                        <option value="">All Categorys</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className='standard__form__container-item'>
                                    <select name="" id="">
                                        <option value="">Any Destinations</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                        <option value="">a</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <div className='standard__form__container-item'>
                                    <input type="text" placeholder='Max budget ex. 500' />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="usd-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                            </div>
                        }
                        <div className='standard__form-search-toggle' onClick={() => setAdvancedSearch(!advancedSearch)}>
                            {advancedSearch ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="advanced-search-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="advanced-search-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            }

                            <span>Advanced Search</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BgVideo;