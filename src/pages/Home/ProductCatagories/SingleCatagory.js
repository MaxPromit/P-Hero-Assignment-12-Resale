import React from 'react';

const SingleCatagory = ({catagories}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={catagories.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{catagories.brand}</h2>
          <p>If you want to se products click view button</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    );
};

export default SingleCatagory;