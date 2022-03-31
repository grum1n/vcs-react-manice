import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './news.css';
import NewsCard from './NewsCard';
import { NewsData } from '../../../data/NewsData';

function NewsPage() {
    return (
        <FrameContainer>
            <HeroSmall title='News' />
            <div className='container newsPage-flex-container'>
                {
                    NewsData.map((newsCard, index) => {
                        return(
                            <NewsCard 
                                title={newsCard.title} 
                                date={newsCard.date}
                                category={newsCard.category}
                                contentText={newsCard.contentText}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </FrameContainer>
    );
}

export default NewsPage;