import React from 'react';
import './contact.css';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';

function ContactPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Contact' />
            <div className='container'>ContactPage</div>
        </FrameContainer>
    );
}

export default ContactPage;