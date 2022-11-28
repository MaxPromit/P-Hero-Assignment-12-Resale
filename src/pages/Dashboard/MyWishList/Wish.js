import React from 'react';

const Wish = ({wish}) => {
    console.log('dd', wish.info)
    const allwish = wish.info
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={allwish.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{allwish.productName}</h2>
          <p className="text-lg font-medium">{allwish.description}</p>
          <div className="flex justify-between text-lg ">
          <p>Original Price: ${allwish.originalPrice}</p>
          <p>Reseal Price: ${allwish.resalePrice}</p>
          </div>
          <div className="flex justify-between text-lg ">
          <p>Location: {allwish.location}</p>
          <p className="text-lg">Condition: {allwish.conditionType}</p>
          </div>

          
          <p className="text-lg">Seller Name: {allwish.sellerName}</p>
          <p>Status: {allwish.status}</p>
         

          <div className="card-actions justify-between">
          <label className="btn btn-primary btn-sm">
            Book
          </label>
          </div>
        </div>
      </div>

        
        </div>
    );
};

export default Wish;