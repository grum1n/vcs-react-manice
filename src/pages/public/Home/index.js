import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';
import ServicesTable from '../Services/ServicesTable';
import './home.css';

function HomePage() {
    return (
        <FrameContainer>
            <HeroSmall title='Home' />
            <div className='container'>HomePage</div>
            <ServicesTable />
            <Partners />
        </FrameContainer>
    );
}

export default HomePage;