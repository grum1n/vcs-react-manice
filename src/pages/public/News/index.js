import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './news.css';

function NewsPage() {
    return (
        <FrameContainer>
            <HeroSmall title='News' />
            <div className='container'>NewsPage</div>
        </FrameContainer>
    );
}

export default NewsPage;