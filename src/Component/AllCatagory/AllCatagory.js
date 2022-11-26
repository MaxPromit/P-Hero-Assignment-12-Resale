import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCatagoryCart from '../AllCatagoryCart/AllCatagoryCart';

const AllCatagory = () => {
    const catagories = useLoaderData();
    console.log(catagories)
    return (
        <div>
           {catagories.map(catagory => <AllCatagoryCart key={catagory._id} catagory={catagory}></AllCatagoryCart>)}
        </div>
    );
};

export default AllCatagory;