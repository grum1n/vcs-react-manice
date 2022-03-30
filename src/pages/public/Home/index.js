import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './home.css';

function HomePage() {
    return (
        <FrameContainer>
            <HeroSmall title='Home' />
             <div className='container'>HomePage</div>
        </FrameContainer>
    );
}

export default HomePage;