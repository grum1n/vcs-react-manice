import React from 'react';
import './contact.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';
import * as FaIcons from 'react-icons/fa';
import SimpleMap from './SimpleMap';
import Foto from '../../../images/n-spac.jpg';

function ContactPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Contact' />
            <div className='container'>
                <div className='contact-form'>
                    <div className='col-1 contact-form-map'>
                        <SimpleMap />
                    </div>
                    <div className='col-2'>
                        <div className='contact-form-img'>
                            <img src={Foto} alt='foto' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <ul className='contact-form-info'>
                            <li>
                                <FaIcons.FaRegMap className='contact-form-icon'/>
                                <h3>Address</h3>
                                <p>
                                    99 S.t Jomblo Park
                                    Pekanbaru 28292.
                                    Indonesia
                                </p>
                                <span>
                                    Mon – Fri:<br /> 8AM — 4PM
                                    <br />
                                    Saturday:<br /> 8AM — 4PM
                                </span>

                            </li>
                            <li>
                                <FaIcons.FaPhoneAlt className='contact-form-icon' />
                                <h3>Phone & Email</h3>
                                <span>
                                    Phone: +44-333 014 4501 Fax: +44-333 014 4502
                                </span>
                                <span>
                                    Email: contact@manice.com
                                </span>

                            </li>
                        </ul>
                    </div>
                    <form className='col-4 '>
                        <ul className='contact-form-box'>
                            <li>
                                <h3>Contact Form</h3>
                            </li>
                            <li>
                                <input placeholder='Your Name'/>
                            </li>
                            <li>
                                <input placeholder='Your Email'/>
                            </li>
                            <li>
                                <textarea></textarea>
                            </li>
                            <li>
                                <button>Send</button>
                            </li>
                            <li>
                                <span>
                                    <i>
                                        We provide a professional service for private and commercial customers.
                                    </i>
                                   
                                </span>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Partners />
        </FrameContainer>
    );
}

export default ContactPage;