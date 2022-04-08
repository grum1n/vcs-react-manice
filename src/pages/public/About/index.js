import React from 'react';
import './about.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';
import ServicesTable from '../Services/ServicesTable';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FotoUrl from '../../../images/pexels-essow-936722.jpg';
import personalFotoUrl1 from '../../../images/pexels-andrea-piacquadio-3760263-xx.jpg';
import personalFotoUrl2 from '../../../images/pexels-emmy-e-2381069-xx.jpg';
import personalFotoUrl3 from '../../../images/pexels-andrea-piacquadio-3756679-xx.jpg';


function AboutPage() {
    return (
        <FrameContainer>
            <HeroSmall title='About' />
            <div className='container about-page-container'>
                <div className='about-page-container-left-box'>
                    <img src={FotoUrl} alt='foto'/>
                    <h3>
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.
                    </h3>
                </div>
                <ul className='about-page-container-right-box'>
                    <li>
                        Our <span>Company</span>
                    </li>
                    <li>
                        Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.
                    </li>
                    <li>
                        <i>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</i>
                    </li>
                    <li>
                        Rudhi Sasmito
                    </li>
                    <li>
                        — Head Of Operations
                    </li>
                </ul>
            </div>
            <div className='container first-section-padding'>
                <h3 className='home-title-h3'><span className='home-title-span'>Our</span> Services</h3>
            </div>
            <ServicesTable />
            <div className='about-page-company-value'>
                <div className='about-page-company-value-left-box'>
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
                </div>
                <div className='about-page-company-value-right-box'>
                    <ul>
                        <li><h3 className='home-title-h3'><span className='home-title-span'>Company</span> Value</h3></li>
                        <li>
                            <h4>Business Solution</h4>
                            
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className='container'>
                <h2 className='about-page-our-team-h2'>Our <span>Team</span></h2>
                <ul className='about-page-our-team'>
                    <li>
                        <div className='about-page-our-team-img-box'>
                            <img src={personalFotoUrl1} alt='foto'/>
                        </div>
                        <h3>
                            John Doe
                        </h3>
                        <p>Founder & CEO</p>
                    </li>
                    <li>
                        <div className='about-page-our-team-img-box'>
                            <img src={personalFotoUrl2} alt='foto'/>
                        </div>
                        <h3>
                            Sendi Doe
                        </h3>
                        <p>Chief Finance Officer</p>
                    </li>
                    <li>
                        <div className='about-page-our-team-img-box'>
                            <img src={personalFotoUrl3} alt='foto'/>
                        </div>
                        <h3>
                            John Doe
                        </h3>
                        <p>Chief Marketing Officer</p>
                    </li>
                </ul>
            </div>
            <Partners />
        </FrameContainer>
    );
}

export default AboutPage;