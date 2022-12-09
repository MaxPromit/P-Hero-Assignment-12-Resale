import React from "react";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const AllCatagoryCart = ({ catagory, setBookingInfo }) => {
  const {
    picture,
    productName,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    sellerName,
    conditionType,
    mobileNumber,
    // description,
    // postTime,
    _id,
    sellerStatus,
    // email,
  } = catagory;
  console.log("iddd", _id);

  const handlerWishlist = (id) => {
    console.log(id);
    fetch(`https://reseal-bike-server.vercel.app/wishlist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const wishlist = data[0];

        // post
        fetch(`https://reseal-bike-server.vercel.app/wishlist`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(wishlist),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Wishlist Added");
          });
      });
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-white text-black shadow-xl rounded-lg">
        <figure className="">
          <img className="object-cover w-96 h-64" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{productName}</h2>
            <label
              onClick={() => handlerWishlist(_id)}
              className="btn btn-sm bg-orange-900 text-white rounded-md"
            >
              <FaCartPlus></FaCartPlus>
            </label>
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
          <p className="text-base font-medium">Mobile: {mobileNumber}</p>
       

          <div className="card-actions justify-end ">
          <p className="text-base font-medium">Year Of Uses: {yearsOfUse}</p> 
            <label
              onClick={() => setBookingInfo(catagory)}
              htmlFor="booking-modal"
              className="btn bg-blue-800 hover:bg-indigo-900 hover:text-white btn-outline btn-sm text-white rounded-md"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCatagoryCart;
