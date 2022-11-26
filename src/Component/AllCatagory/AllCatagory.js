import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCatagoryCart from '../AllCatagoryCart/AllCatagoryCart';

const AllCatagory = () => {
    const catagories = useLoaderData();
    console.log(catagories)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {catagories.map(catagory => <AllCatagoryCart key={catagory._id} catagory={catagory}></AllCatagoryCart>)}
        </div>
    );
};

export default AllCatagory;