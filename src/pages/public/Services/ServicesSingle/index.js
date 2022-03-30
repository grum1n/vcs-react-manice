import React from 'react';
import FrameContainer from '../../../../components/FrameContainer';
import HeroSmall from '../../../../components/HeroSmall';
import './servicesSingle.css';

function ServicesSinglePage() {
    return (
        <FrameContainer>
            <HeroSmall title='Services Single' />
            <div className='container'>ServicesSinglePage</div>
        </FrameContainer>
    );
}

export default ServicesSinglePage;