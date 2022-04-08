import React from 'react';
import './hero.css';
import ParticleBackground from '../ParticleBg';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Hero() {
    
    return (
        <div className='hero-container'>
            <ParticleBackground/>
           
                <div className='hero-boxes'>
                    <div className='container'>
                        <div className='hero-content'>
                            <h1 className='hero-h1'>We are driven to create a better financial future</h1>
                            <h3 className='hero-h3'>Our professional team works to increase productivity and cost effectiveness on the market.</h3>
                            <div className='flex-container'>
                                <button className='hero-content-button-black'>Learn More</button>
                                <button className='hero-content-button-green'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                   
                <ul className='hero-ul'>
                        <li className='hero-bottom-white'>
                            <h4>Business Solutions</h4>
                            <p>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</p>
                            <Link to='/' className='hero-bottom-white-link'>
                                <FaIcons.FaArrowRight />
                            </Link>
                        </li>
                        <li className='hero-bottom-gray'>
                            <iframe width='100%' height='100%' src='https://www.youtube.com/embed/I7YAXgT_WLQ' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        </li>
                    </ul>

            </div>
          
        </div>
    );
}

export default Hero;