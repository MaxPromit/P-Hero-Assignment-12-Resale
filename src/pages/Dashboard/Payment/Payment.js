import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  console.log(stripePromise);

  const booking = useLoaderData();
  const { productName, price } = booking;
  return (
    <div className="text-center">
      <h3 className="text-3xl">Payment for {productName}</h3>
      <p>
        Please pay <strong>{price}</strong> for your Dream Bike!!!
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
