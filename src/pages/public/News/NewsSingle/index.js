import React from 'react';
import FrameContainer from '../../../../components/FrameContainer';
import HeroSmall from '../../../../components/HeroSmall';
import './newsSingle.css';

function NewsSinglePage() {
    return (
        <FrameContainer>
            <HeroSmall title='News Single' />
            <div className='container'>NewsSinglePage</div>
        </FrameContainer>
    );
}

export default NewsSinglePage;