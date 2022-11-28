import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const Wish = ({wish}) => {
  const {user} = useContext(AuthContext)
    console.log('dd', wish.info)
    const allwish = wish.info
    console.log('all wish', allwish);
    const {productName,mobileNumber,resalePrice,picture,location,_id} = allwish

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
          <label onClick={handlerWishlistSubmit} className="btn btn-primary btn-sm">
            Book
          </label>
          </div>
        </div>
      </div>

        
        </div>
    );
};

export default Wish;