import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';  
import { FaRegCheckCircle } from "react-icons/fa";

const Wish = ({wish}) => {
  const {user} = useContext(AuthContext)
    console.log('dd', wish.info)
    const allwish = wish.info
    console.log('all wish', allwish);
    const {productName,mobileNumber,resalePrice,picture,location,_id,sellerStatus,sellerName,originalPrice,conditionType,yearsOfUse} = allwish

    const handlerWishlistSubmit = () =>{
      const booking = {
        productName,
        phone: mobileNumber,
        price: resalePrice,
        picture,
        location,
        buyerName: user?.displayName,
        email: user?.email,
        catagoryId: _id
      }

      fetch("https://reseal-bike-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            // setBookingInfo('')
            console.log('data', data)
          toast.success("Booking Added");
        }
        else{
            // setBookingInfo('')
          toast.error(data.message);
        }
      });
    }
    return (
      <div>
      <div className="card card-compact w-96 bg-white text-black shadow-xl">
        <figure className="">
          <img className="object-cover w-96 h-64" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{productName}</h2>
           
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
              onClick={handlerWishlistSubmit}
              htmlFor="booking-modal"
              className="btn bg-blue-800 hover:bg-indigo-900 btn-outline btn-sm text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Wish;