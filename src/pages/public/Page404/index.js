import React from 'react';
import { Link } from 'react-router-dom';
import FrameContainer from '../../../components/FrameContainer';
import './page404.css';
import Image404 from '../../../images/error404.png';

function Page404() {
    return (
        <FrameContainer>
            <div className='page404-box-flex-container'>
                <div className='page404-box'>
                    <img src={Image404} alt='image 404' className='page404-box-img'/>
                    <div className='page404-box-text'>
                        <h3 className='page404-box-text-h3'>Oh no, something went wrong!</h3>
                        <p className='page404-box-text-p'>We provide a professional service for private and commercial customers.</p>
                    </div>
                </div>
                <Link to='/' className='page404-box-button'>
                    Back to Home
                </Link>
            </div>
        </FrameContainer>
    );
}

export default Page404;