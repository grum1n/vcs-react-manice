import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './index';
import HomePage from '../pages/public/Home';
import AboutPage from '../pages/public/About';
import ContactPage from '../pages/public/Contact';
import FaqPage from '../pages/public/Faq';
import NewsPage from '../pages/public/News';
import NewsSinglePage from '../pages/public/News/NewsSingle';
import Page404 from '../pages/public/Page404';
import PricingPage from '../pages/public/Pricing';
import ServicesPage from '../pages/public/Services';
import ServicesSinglePage from '../pages/public/Services/ServicesSingle';

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.PUBLIC_HOME} element={<HomePage />} />
            <Route path={ROUTES.PUBLIC_ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.PUBLIC_CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.PUBLIC_FAQ} element={<FaqPage />} />
            <Route path={ROUTES.PUBLIC_NEWS} element={<NewsPage />} />
            <Route path={ROUTES.PUBLIC_NEWS_SINGLE} element={<NewsSinglePage />} />
            <Route path={ROUTES.PUBLIC_PAGE_404} element={<Page404 />} />
            <Route path={ROUTES.PUBLIC_PRICING} element={<PricingPage />} />
            <Route path={ROUTES.PUBLIC_SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.PUBLIC_SERVICES_SINGLE} element={<ServicesSinglePage />} />
        </Routes>
    );
}

export default Router;