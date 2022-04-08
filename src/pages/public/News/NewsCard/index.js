import React from 'react';
import { Link } from 'react-router-dom';
import './newsCard.css';

function NewsCard({ url, title, date, category, contentText }) {
    return (
        <div className='newsCard-container'>
            <div className='newsCard-img-box'></div>
            <h3 className='newsCard-img-h3'>{title}</h3>
            <h4 className='newsCard-img-h4'>{date} | {category}</h4>
            <p  className='newsCard-img-p'>{contentText}</p>
            <Link to={url} className='newsCard-link'>
                Read More
            </Link>
        </div>
    );
}

export default NewsCard;