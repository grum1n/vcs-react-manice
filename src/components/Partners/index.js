import React from 'react';
import './partners.css';
import PartnersImage1 from '../../images/dummy-logo-1b.png';
import PartnersImage2 from '../../images/dummy-logo-2b.png';
import PartnersImage3 from '../../images/dummy-logo-3b.png';
import PartnersImage4 from '../../images/dummy-logo-4b.png';

function Partners() {
    return (
        <div className='partners-container'>
            <div className='container partners-flex-box'>
                <img src={PartnersImage1} alt='partners1' />
                <img src={PartnersImage2} alt='partners2' />
                <img src={PartnersImage3} alt='partners3' />
                <img src={PartnersImage4} alt='partners4' />
            </div>
        </div>
    );
}

export default Partners;