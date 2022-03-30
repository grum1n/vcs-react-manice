import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import ServicesTable from '../Services/ServicesTable';
import './home.css';

function HomePage() {
    return (
        <FrameContainer>
            <HeroSmall title='Home' />
            <div className='container'>HomePage</div>
            <ServicesTable />
        </FrameContainer>
    );
}

export default HomePage;