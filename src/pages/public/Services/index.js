import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import ServicesTable from './ServicesTable';

function ServicesPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Services' />
            <ServicesTable />
        </FrameContainer>
    );
}

export default ServicesPage;