import React from "react";

const AllCatagoryCart = ({ catagory , setBookingInfo}) => {
    const {picture,productName,location,resalePrice,originalPrice,yearsOfUse,sellerName,conditionType,mobileNumber,description,postTime} = catagory
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className="text-lg font-medium">{description}</p>
          <div className="flex justify-between text-lg ">
          <p>Original Price: ${originalPrice}</p>
          <p>Reseal Price: ${resalePrice}</p>
          </div>
          <div className="flex justify-between text-lg ">
          <p>Location: {location}</p>
          <p className="text-lg">Condition: {conditionType}</p>
          </div>

          
          <p className="text-lg">Seller Name: {sellerName}</p>
          <p className="text-lg">Mobile: {mobileNumber}</p>
   
         
          <p className="text-lg">Year Of Uses: {yearsOfUse}</p>
          <p className="text-lg">Post Time: {postTime}</p>
         

          <div className="card-actions justify-end">
          <label onClick={()=> setBookingInfo(catagory)} htmlFor="booking-modal" className="btn btn-primary">
            Book Now
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCatagoryCart;
