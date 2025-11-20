import React from 'react';
import HeroSection from './feacture/heroSection3';
import SellingPaths from './feacture/sellingPaths';
import SellerTools from './feacture/sellerTools';
import HowItWorks from './feacture/howItWork';
import SuccessStories from './feacture/successStories';
import FeaturedAgents from './feacture/agent';
import ClientSection from '../homePage/feacture/clientSection';

const SellPage = () => {
    return (
        <div>
            <HeroSection/>
            <SellingPaths/>
            <SellerTools/>
            <HowItWorks/>
            <SuccessStories/>
            <FeaturedAgents/>
            <ClientSection/>
        </div>
    );
}

export default SellPage;
