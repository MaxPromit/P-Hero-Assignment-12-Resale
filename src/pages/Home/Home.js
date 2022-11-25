import React from 'react';
import Carousel from './Carousel/Carousel';
import ContactUs from './ContactUs/ContactUs';
import ProductCatagories from './ProductCatagories/ProductCatagories';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ProductCatagories></ProductCatagories>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;