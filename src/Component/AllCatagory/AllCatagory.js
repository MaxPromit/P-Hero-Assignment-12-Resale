import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCatagoryCart from "../AllCatagoryCart/AllCatagoryCart";
import BookingModal from "../BookingModal/BookingModal";

const AllCatagory = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  const [bookingInfo, setBookingInfo] = useState('');
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
        {catagories.map((catagory) => (
          <AllCatagoryCart
            key={catagory._id}
            catagory={catagory}
            setBookingInfo={setBookingInfo}
          ></AllCatagoryCart>
        ))}
      </div>
      <BookingModal 
      bookingInfo={bookingInfo}
      setBookingInfo={setBookingInfo}
      ></BookingModal>
    </div>
  );
};

export default AllCatagory;
