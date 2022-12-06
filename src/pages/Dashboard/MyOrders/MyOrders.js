import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { data: allbookings = [] } = useQuery({
    queryKey: ["allbookings"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/allbookings");
      const data = await res.json();
      return data;
    },
  });
  console.log(allbookings);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-6">My Orders</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Item</th>
                <th>Picture</th>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allbookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <td>{1 + i}</td>
                  <td><div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={booking.picture} alt='avatar' />
                    </div>
                  </div></td>
                  <td>{booking.productName}</td>
                  <td>{booking.price}</td>
                  <td>
                  {booking?.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay</button>
                    </Link>
                  )}
                  {booking?.price && booking?.paid && (
                    <span className="text-green-700">Paid</span>
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
