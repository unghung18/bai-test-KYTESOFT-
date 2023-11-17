import React, { useEffect, useRef } from 'react';
import './Navbar.scss';
import { useDispatch } from 'react-redux';
import { menuToggleActions } from '@/redux/slices/menuToggleSlice';

const Navbar = () => {

    const headerRef = useRef(null);
    const dispatch = useDispatch();

    let oldScrollY = 0;

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY == 0) {
                headerRef.current.classList.add('scrollTop');
                headerRef.current.classList.remove('scrollDown');
                headerRef.current.classList.remove('scrollUp');
            }
            else if (window.scrollY > oldScrollY && window.scrollY >= 200) {
                headerRef.current.classList.add('scrollDown');
                headerRef.current.classList.remove('scrollUp');
                headerRef.current.classList.remove('scrollTop');
            } else {
                headerRef.current.classList.add('scrollUp');
                headerRef.current.classList.remove('scrollDown');
                headerRef.current.classList.remove('scrollTop');
            }
            oldScrollY = window.scrollY;
            /*  if (window.scrollY == 0) {
                 headerRef.current.classList.add('scrollTop');
                 headerRef.current.classList.remove('scrollDown');
             }
             else if (window.scrollY >= 200) {
                 headerRef.current.classList.remove('scrollTop');
                 headerRef.current.classList.add('scrollDown');
             } */
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className='header'>
            <div className='header-bg' ref={headerRef}>
                <div className='header__container'>
                    <div className='logo'>
                    </div>
                    <div className='header__container__left'>
                        <ul className='nav'>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Home</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Tours</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Booking</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Destinations</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Pages</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Blog</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Shortcodes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Home 1 - Background Image</a></li>
                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                    <hr />
                                    <li><a href="/">Home 1 - Background Image</a></li>

                                </ul>
                            </li>
                            <li className='nav__item'>
                                <a className='nav__item-link' href="/">
                                    <span>Shop</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="down-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                                <ul className='submenu'>
                                    <li><a href="/">Shop Fullwidth</a></li>
                                    <hr />
                                    <li><a href="/">Shop Sidebar</a></li>

                                    <hr />
                                    <li><a href="/">Single Product Fullwidth</a></li>

                                    <hr />
                                    <li><a href="/">Single Product With Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="menu-icon" onClick={() => dispatch(menuToggleActions.toggle(true))}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <div className='header__container__left-cart'>
                            <span>0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cart-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar