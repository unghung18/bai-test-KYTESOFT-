import Image from 'next/image';
import React from 'react';
import './DestinationCard.scss';

const DestinationCard = ({ data }) => {
    return (
        <div className='destination-card'>
            <Image src={data.image} alt="card" className='destination-card-img' />
            <h2>{data.title}</h2>
        </div>
    )
}

export default DestinationCard;