import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import './pricing.css';
import * as FaIcons from 'react-icons/fa';

function PricingPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Pricing Table' />
            <div className='container'>
                <div className='pricing-page'>
                    <div>
                        <span>Starter</span>
                        <h2>Free</h2>
                        <span><i>for up to 2 editors and 3 projects</i></span>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div className='active'>
                        <h3>POPULAR</h3>
                        <span>Professional</span>
                        <h2>$9.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div>
                        <span>Organization</span>
                        <h2>$19.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                </div>
                <h3 className='pricing-page-heading'>3 column</h3>
                <div className='pricing-page-col-3'>
                     <div>
                        <span>Starter</span>
                        <h2>Free</h2>
                        <span><i>for up to 2 editors and 3 projects</i></span>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div className='active'>
                        <h3>POPULAR</h3>
                        <span>Professional</span>
                        <h2>$9.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div>
                        <span>Organization</span>
                        <h2>$19.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>

                </div>
                <h3 className='pricing-page-heading'>4 column</h3>
                <div className='pricing-page-col-4'>
                     <div>
                        <span>Starter</span>
                        <h2>Free</h2>
                        <span><i>for up to 2 editors and 3 projects</i></span>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div>
                        <span>Individual</span>
                        <h2>$9.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div className='active'>
                        <h3>POPULAR</h3>
                        <span>Professional</span>
                        <h2>$19.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                    <div>
                        <span>Organization</span>
                        <h2>$19.99/mo</h2>
                        <i>for up to 2 editors and 3 projects</i>
                        <ul>
                            <li><span><FaIcons.FaCheckCircle /></span>3 projects</li>
                            <li><span><FaIcons.FaCheckCircle /></span>30-day version history</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Up to 2 editors</li>
                            <li><span><FaIcons.FaCheckCircle /></span>Unlimited cloud storage</li>
                        </ul>
                        <button>Get Now</button>
                    </div>
                </div>
            </div>
        </FrameContainer>
    );
}

export default PricingPage;