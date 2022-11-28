import React from "react";
import toast from "react-hot-toast";

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
    description,
    postTime,
    _id,
  } = catagory;
  console.log("iddd", _id);

  const handlerWishlist = (id) => {
    console.log(id);
    fetch(`http://localhost:4000/wishlist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const wishlist = data[0];

        // post
        fetch(`http://localhost:4000/wishlist`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(wishlist),
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          toast.success('Wishlist Added')
        })
      });
  };
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

          <div className="card-actions justify-between">
            <label
              onClick={() => handlerWishlist(_id)}
              className="btn btn-sm btn-primary"
            >
              Wishlist
            </label>
            <label
              onClick={() => setBookingInfo(catagory)}
              htmlFor="booking-modal"
              className="btn btn-primary btn-sm"
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
