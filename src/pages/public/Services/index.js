import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './services.css';

function ServicesPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Services' />
            <div className='container'>ServicesPage</div>
        </FrameContainer>
    );
}

export default ServicesPage;