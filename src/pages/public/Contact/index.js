import React from 'react';
import './contact.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import Partners from '../../../components/Partners';

function ContactPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Contact' />
            <div className='container'>ContactPage</div>
            <Partners />
        </FrameContainer>
    );
}

export default ContactPage;