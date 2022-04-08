import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import Hero from '../../../components/Hero';
import Partners from '../../../components/Partners';
import { NewsData } from '../../../data/NewsData';
import NewsCard from '../News/NewsCard';
import ServicesTable from '../Services/ServicesTable';
import './home.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import companyValueFotoUrl from '../../../images/pexels-fauxels-3184613.jpg';

function HomePage() {
    return (
        <FrameContainer>
            <Hero />
            <div className='container'>
                <div className='home-stats-top'>
                    <h3 className='home-stats-top-h3'>Experienced in mortgage and financial advice!</h3>
                    <p className='home-stats-top-p'>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</p>
                </div>
                <ul className='home-stats-bottom'>
                    <li>
                        <h2>734</h2>
                        <span>Satisfied Customers</span>
                    </li>
                    <li>
                        <h2>542</h2>
                        <span>Consulteds</span>
                    </li>
                    <li>
                        <h2>17</h2>
                        <span>Years Experience</span>
                    </li>
                    <li>
                        <h2>324</h2>
                        <span>Finance Help</span>
                    </li>
                </ul>
            </div>
            <div className='home-company-value'>
                <div className='container home-company-value-container'>
                    <ul>
                        <li><h3 className='home-title-h3'><span className='home-title-span'>Company</span> Value</h3></li>
                        <li>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</li>
                        <li> <span><FaIcons.FaCheck /></span>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</li>
                        <li> <span><FaIcons.FaCheck /></span>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
                        <li> <span><FaIcons.FaCheck /></span>Consectetur adipisicing elit sed do eiusmod temporin cididunt ut labore et dolore.</li>
                        <li>
                            <Link to='/' className='home-company-value-button'>Learn More</Link>
                        </li>
                    </ul>
                    <div className='home-company-value-img'>
                        <img src={companyValueFotoUrl} alt='foto' />
                    </div>
                    <div className='home-company-value-green'>
                        img
                    </div>
                </div>
            </div>
            <div className='container first-section-padding'>
                <h3 className='home-title-h3'><span className='home-title-span'>Our</span> Services</h3>
            </div>
            <ServicesTable />
            <div className='home-green-line-feedback'>
                <div className='home-green-line-div'>
                    <h3>All of our customers trust their success to us</h3>
                    <p>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</p>
                    <div>
                        <i>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</i>
                        <h4>Rudhi Sasmito</h4>
                        <span>— Head Of Operations</span>
                    </div>
                </div>

            </div>
            <Partners />
            <div className='container'>
                <h3 className='home-title-h3'><span className='home-title-span'>Recent</span> News</h3>
            </div>
            <div className='container home-component-container'>
                <div className='newsPage-flex-container'>
                    {
                        NewsData.map((newsCard, index) => {
                            return(
                                <NewsCard 
                                    url={newsCard.url}
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