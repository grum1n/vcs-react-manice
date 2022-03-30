import React from 'react';
import './about.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';

function AboutPage() {
    return (
        <FrameContainer>
            <HeroSmall title='About' />
             <div className='container'>AboutPage</div>
        </FrameContainer>
    );
}

export default AboutPage;