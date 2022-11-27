import React from 'react';
import Advirtised from './Advirtised/Advirtised';
import Carousel from './Carousel/Carousel';
import ContactUs from './ContactUs/ContactUs';
import ProductCatagories from './ProductCatagories/ProductCatagories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ProductCatagories></ProductCatagories>
            <Advirtised></Advirtised>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;