'use client';
import React, { useEffect, useRef } from 'react';
import './globals.scss';
import BgVideo from "@/components/BgVideo/BgVideo.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { menuToggleActions } from '@/redux/slices/menuToggleSlice';
import DestinationCard from '@/components/DestinationCard/DestinationCard.jsx';
import TripCard from '@/components/TripCard/TripCard';
import Image from 'next/image';

import tokyo from '../assets/tokyo.jpg';
import seul from '../assets/seul.jpg';
import paris from '../assets/paris.jpg';
import london from '../assets/london.jpg';
import trip1 from '../assets/trip1.jpeg';
import trip2 from '../assets/trip2.jpeg';
import trip3 from '../assets/trip3.jpeg';

import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';

import photo from '../assets/photo.jpg';

import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpeg';
import article3 from '../assets/article3.jpg';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import Footer from '@/components/Footer/Footer';

export default function Home() {

  const menuRef = useRef();

  const { menuToggleKey } = useSelector(state => state.menuToggle);
  const dispatch = useDispatch();

  const destinationData = [
    {
      image: tokyo,
      title: "Tokyo"
    },
    {
      image: seul,
      title: "Seoul"
    },
    {
      image: paris,
      title: "Paris"
    },
    {
      image: london,
      title: "London"
    }
  ]

  const tripdata = [
    {
      image: trip1,
      price: 5000,
      title: "French Autumn",
      excerpt: "City Tours, Urban",
      rating: 4,
      review: 4,
      day: 5
    },
    {
      image: trip2,
      price: 6000,
      title: "Grand Switzerland",
      excerpt: "Shopping, Mountain, Snow & Ice",
      rating: 4,
      review: 4,
      day: 6
    },
    {
      image: trip3,
      price: 5000,
      title: "Discover Japan",
      excerpt: "City Tours, Iconic",
      rating: 4,
      review: 4,
      day: 5
    }
  ]

  const articleData = [
    {
      image: article1,
      time: "DECEMBER 10, 2016",
      title: "Memorial Day to Someone Told Me to Travel",
      content: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
    },
    {
      image: article2,
      time: "DECEMBER 10, 2016",
      title: "7 Tips For Nomads On A Budget Trips",
      content: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
    },

    {
      image: article3,
      time: "DECEMBER 10, 2016",
      title: "Taking A Travel Blog Victory Lap",
      content: "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
    },

  ]

  useEffect(() => {

    const handleMenuToggle = e => {
      if (!menuRef.current.contains(e.target)) {
        dispatch(menuToggleActions.toggle(false))
      }
    };

    document.addEventListener("mousedown", handleMenuToggle)

    return () => {
      document.removeEventListener("mousedown", handleMenuToggle)
    };
  }, []);

  useEffect(() => {
    console.log(menuToggleKey)
  }, [menuToggleKey]);

  return (
    <div className="App">
      <div className={`container ${menuToggleKey ? "blur" : ""}`}>
        <BgVideo />

        <section>
          <div className='section-header'>
            <h2>Popular Destinations</h2>
            <div>World's best tourist destinations</div>
          </div>
          <div className='section-content grid-4'>
            {destinationData.map((item, i) => (
              <DestinationCard data={item} key={i} />
            ))}
          </div>
        </section>

        <section>
          <div className='section-header'>
            <h2>Best Value Trips</h2>
            <div>Best offers trips from us</div>
          </div>
          <div className='section-content'>
            {tripdata.map((item, i) => (
              <TripCard data={item} key={i} />
            ))}
          </div>
        </section>

        <section>
          <div className='section-header'>
            <h2>Why Choose Us</h2>
            <div>Here are reasons you should plan trip with us</div>
          </div>
          <div className='section-content'>
            <div className='feature'>
              <Image src={feature1} alt='feature' />
              <h4>Handpicked Hotels</h4>
              <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
            <div className='feature'>
              <Image src={feature2} alt='feature' />
              <h4>World Class Service</h4>
              <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
            <div className='feature'>
              <Image src={feature3} alt='feature' />
              <h4>Best Price Guarantee</h4>
              <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
            </div>
          </div>
        </section>

        <div>
          <Image src={photo} alt='photo' />
        </div>

        <section>
          <div className='section-header'>
            <h2>Articles & Tips</h2>
            <div>Explore some of the best tips from around the world</div>
          </div>
          <div className='section-content'>
            {articleData.map((item, i) => (
              <ArticleCard data={item} key={i} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
      <div className={`mobile-menu ${menuToggleKey ? "showMenu" : ""}`}>
        <div className='mobile-menu__left'></div>
        <div className='mobile-menu__right' ref={menuRef}>
          <div className="close-icon" onClick={() => dispatch(menuToggleActions.toggle(false))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <ul className='mobile-menu__right-content'>
            <li className='mobile-menu__right-content-item'><a href="/">Home</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Tour</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Booking</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Destinations</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Pages</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Blog</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Shortcodes</a></li>
            <li className='mobile-menu__right-content-item'><a href="/">Shop</a></li>
          </ul>
        </div>
      </div >
    </div>
  )
}
