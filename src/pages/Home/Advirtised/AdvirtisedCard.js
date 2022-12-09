import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const AdvirtisedCard = ({add}) => {
    const {picture,productName,location,resalePrice,originalPrice,sellerName,conditionType,description,status,sellerStatus,yearsOfUse,mobileNumber} = add;
    return (
      <div>
      <div className="card card-compact w-96 bg-white text-black shadow-xl">
        <figure className="">
          <img className="object-cover w-96 h-64" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-around">
            <h2 className="card-title">{productName}</h2>
            <p className='flex justify-end font-bold items-center'>{status}</p>
          </div>
          {sellerStatus === 'Verified' ? <p className="text-base font-medium relative">Seller Name: {sellerName}<FaRegCheckCircle className="inline absolute bottom-3 text-blue-800"/> </p> : <p className="font-medium text-base">Seller Name: {sellerName}</p>}
          <div className="text-lg ">
            <p>
              <span className="font-bold text-base">Product Original Price</span>: $ <span className="font-bold">{originalPrice}</span>
            </p>
            <p>
            <span className="font-bold text-base">Product Resale Price</span>: $ <span className="font-bold">{resalePrice}</span>
            </p>
          </div>
          <div className="flex justify-around font-medium text-base ">
            <p>Location: {location}</p>
            <p>Condition: {conditionType}</p>
          </div>
       

          <div className="card-actions justify-end ">
          <p className="text-base font-medium">Mobile: {mobileNumber}</p> 
          <p className="text-base font-medium">Year Of Use: {yearsOfUse}</p> 
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdvirtisedCard;