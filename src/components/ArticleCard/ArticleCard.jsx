import React from 'react';
import './ArticleCard.scss';
import Image from 'next/image';

const ArticleCard = ({ data }) => {
    return (
        <div className='article-card'>
            <Image src={data.image} alt="card" className='article-card-img' />
            <div className='article-card-info'>
                <div>{data.time}</div>
                <h6>{data.title}</h6>
                <p>{data.content}</p>
                <div className='btn-readmore'>
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default ArticleCard