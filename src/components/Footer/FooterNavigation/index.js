import React from 'react';
import './footerNavigation.css';
import LogoImage from '../../../images/logo2.png';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Menu } from '../../../data/Menu';

function Footernavigation() {
    return (
        <div className='container footer-navigation-flex'>
            <div className='footer-navigation-box'>
                <div className='footer-navigation-box-heading'>
                    <img src={LogoImage} alt='Logo' />
                </div>
                <span className='footer-navigation-box-span'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>
                <ul className='flex-between'>
                    <li>
                        <Link to='/' className='footer-navigation-social-links'>
                            <FaIcons.FaFacebookF />
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='footer-navigation-social-links'>
                            <FaIcons.FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='footer-navigation-social-links'>
                            <FaIcons.FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='footer-navigation-social-links'>
                            <FaIcons.FaYoutube />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer-navigation-box'>
                <div className='footer-navigation-box-heading'>
                    <h3>Our Company</h3>
                </div>
                <span className='footer-navigation-box-span'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text
                </span>
            </div>
            <div className='footer-navigation-box'>
                <div className='footer-navigation-box-heading'>
                    <h3>Useful Links</h3>
                </div>
                <ul>
                    {Menu.map((item, index) => {
                        return (
                            <li key={index} className='flex-align-items-center  contact-links-padding'>
                                <Link to={item.path} className='footer-navigation-links'>
                                    <FaIcons.FaChevronRight className='footer-navigation-chevron' /><span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <li className='flex-align-items-center  contact-links-padding'>
                        <Link to='/pricing' className='footer-navigation-links'>
                            <FaIcons.FaChevronRight className='footer-navigation-chevron' /><span>Pricing +</span>
                        </Link>
                    </li>
                    <li className='flex-align-items-center  contact-links-padding'>
                        <Link to='/faq' className='footer-navigation-links'>
                            <FaIcons.FaChevronRight className='footer-navigation-chevron' /><span>FAQ</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer-navigation-box'>
                <div className='footer-navigation-box-heading'>
                    <h3>Contact Info</h3>
                </div>
                <ul className='flex-col'>
                    <li className='flex-align-items-center  contact-links-padding'>
                        <Link to='/' className='footer-navigation-contact-links'>
                            <FaIcons.FaMapMarkerAlt />
                        </Link>
                        <span>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</span>
                    </li>
                    <li className='flex-align-items-center contact-links-padding'>
                        <Link to='/' className='footer-navigation-contact-links'>
                            <FaIcons.FaPhoneAlt />
                        </Link>
                        <span>(0761) 654-123987</span>
                    </li>
                    <li className='flex-align-items-center  contact-links-padding'>
                        <Link to='/' className='footer-navigation-contact-links'>
                            <FaIcons.FaMailBulk />
                        </Link>
                        <span>info@yoursite.com</span>
                    </li>
                    <li className='flex-align-items-center  contact-links-padding'>
                        <Link to='/' className='footer-navigation-contact-links'>
                            <FaIcons.FaRegClock />
                        </Link>
                        <span>Mon - Sat 09:00 - 17:00</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footernavigation;