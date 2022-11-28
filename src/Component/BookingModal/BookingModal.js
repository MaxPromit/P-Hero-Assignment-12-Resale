import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ bookingInfo, setBookingInfo }) => {
  const { productName, resalePrice , _id, picture} = bookingInfo;
  const { user } = useContext(AuthContext);

  const handlerStatusChange = (id) =>{
    fetch(`http://localhost:4000/productStatusUpdate/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(err => console.error(err))
  }
  const handlerBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const location = form.location.value;

    const booking = {
        productName: bookingInfo.productName,
        buyerName: name,
        email,
        phone,
        price,
        picture,
        location
      };
      console.log(booking);
      fetch("http://localhost:4000/bookings", {
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

  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{productName}</h3>
          <form
            onSubmit={handlerBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="price"
              type="text"
              value={`Price:$ ${resalePrice}`}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              defaultValue={user?.email}
              readOnly
              type="email"
              placeholder="Email"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input onClick={()=> handlerStatusChange(_id)} type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
