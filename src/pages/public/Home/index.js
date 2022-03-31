import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import Hero from '../../../components/Hero';
import Partners from '../../../components/Partners';
import { NewsData } from '../../../data/NewsData';
import NewsCard from '../News/NewsCard';
import ServicesTable from '../Services/ServicesTable';
import './home.css';

function HomePage() {
    return (
        <FrameContainer>
            <Hero />
            <div className='container'>
                <h3 className='home-title-h3'><span className='home-title-span'>Our</span> Services</h3>
            </div>
            <ServicesTable />
            <Partners />
            <div className='container'>
                <h3 className='home-title-h3'><span className='home-title-span'>Recent</span> Recent</h3>
            </div>
            <div className='container home-component-container'>
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