import React from 'react';
import SearchComponent from './Component/SearchComponent';
import Navbar from './Components/Navbar';
import HeroSection from './Component/HeroSection';
import Footer from './Component/Footer';
import Features from './Component/Features';
import WhyUs from './Component/WhyUs.jsx';
import CTA from './Component/CTA.jsx';

const Home = () => {
    return (
        <div className='bg-[#09090B] font-jakarta'>
            <Navbar/>
            <HeroSection/>
            <SearchComponent/>
            <Features/>
            <WhyUs/>
            <CTA/>
            <Footer/>
        </div>
    );
};

export default Home;