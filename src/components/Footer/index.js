import React from 'react';
import './footer.css';
import Footernavigation from './FooterNavigation';

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer>
            <section className='footer-green-container'>
                <div className='container footer-green-flex'>
                    <div className='footer-green-flex-col'>
                        <h2 className='footer-green-flex-h2'>Don&#39;t hesitate to contact us any time.</h2>
                        <p className='footer-green-flex-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat cupidatat.</p>
                    </div>
                    <button className='footer-green-button'>Get a Quote</button>
                </div>
            </section>
            <section className='footer-navigation'>
                <Footernavigation />
            </section>
            <section className='footer-black-container'>
                <div className='container flex-justify-center'>
                    <span className='footer-black-container-span'>© {date} Manice Figma Template. All rights reserved</span>
                </div>
            </section>
        </footer>
    );
}

export default Footer;