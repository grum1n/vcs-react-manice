import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import PageContextGoToTop from '../PageContextGoToTop';
import './frameContainer.css';

function FrameContainer({ children }) {
    return (
        <div>
            <Header />
            <PageContextGoToTop />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default FrameContainer;