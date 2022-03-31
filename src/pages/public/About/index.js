import React from 'react';
import './about.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';

function AboutPage() {
    return (
        <FrameContainer>
            <HeroSmall title='About' />
            <div className='container'>AboutPage</div>
            <Partners />
        </FrameContainer>
    );
}

export default AboutPage;