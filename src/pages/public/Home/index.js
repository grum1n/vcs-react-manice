import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';
import { NewsData } from '../../../data/NewsData';
import NewsCard from '../News/NewsCard';
import ServicesTable from '../Services/ServicesTable';
import './home.css';

function HomePage() {
    return (
        <FrameContainer>
            <HeroSmall title='Home' />
            <div className='container home-component-container'>
            <h3 className='home-component-container-h3'><span className='home-component-container-span'>Our</span> Services</h3>
                <ServicesTable />
            </div>
            <Partners />
            <div className='container home-component-container'>
                <h3 className='home-component-container-h3'><span className='home-component-container-span'>Recent</span> News</h3>
                <div className='newsPage-flex-container'>
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
            </div>
           
        </FrameContainer>
    );
}

export default HomePage;