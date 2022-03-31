import React from 'react';
import FrameContainer from '../../../components/FrameContainer';
import HeroSmall from '../../../components/HeroSmall';
import { AccordionData } from '../../../data/AccordionData';
import Accordion from './Accordion';
import './faq.css';

function FaqPage() {
    return (
        <FrameContainer>
            <HeroSmall title='Faq' />
            <ul className='container'>
                <li className='faq-box'>
                    <h3>Nostrud exercitation laboris</h3>
                    <Accordion 
                        title='Question number 01 goes here?' 
                        content='In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque.'
                    />
                    <Accordion 
                        title='Question number 02 goes here?' 
                        content='In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque.'
                    />
                </li>
                <li className='faq-box'>
                    <h3>Nostrud exercitation laboris</h3>
                    {
                        AccordionData.map((item, index) => {
                            return(
                                <div key={index}>
                                    <Accordion 
                                        title={item.title} 
                                        content={item.content}
                                    />
                                </div>
                            );
                        })
                    }
                </li>
            </ul>
            
        </FrameContainer>
        
    );
}

export default FaqPage;