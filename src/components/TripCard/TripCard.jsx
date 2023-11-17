import Image from 'next/image';
import React from 'react';
import './TripCard.scss';
import RatingStart from '../RatingStar/RatingStar';

const TripCard = ({ data }) => {
    return (
        <div className='trip-card'>
            <div className='trip-card-top'>
                <Image src={data.image} alt="card" className='trip-card-img' />
                <div className='trip-card-price'>$ {data.price.toLocaleString()}</div>
            </div>
            <div className='trip-card-info'>
                <h4>{data.title}</h4>
                <p>{data.excerpt}</p>
                <div className='trip-card-info-attribute'>
                    <div className='trip-card-info-attribute-rating'>
                        <RatingStart rating={data.rating} />
                        <div style={{ marginLeft: "5px" }}>{data.review} reiviews</div>
                    </div>
                    <div>{data.day} days</div>
                </div>
            </div>
        </div>
    )
}

export default TripCard