import React, { useEffect, useState } from 'react';
import { useStripe, CardElement, useElements, } from "@stripe/react-stripe-js";
import toast from 'react-hot-toast';

const CheckoutForm = ({booking}) => {

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const {price ,productName, email, _id, catagoryId } = booking;

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://reseal-bike-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async(event)=>{
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("[error]", error);
        setCardError(error.message);
      } else {
        setCardError("");
      }
      setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: productName,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      // send data to mongodb
      fetch("https://reseal-bike-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed.");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);

  
    }

    const handlerPayAfterDelete = (id) =>{
      console.log('pay',id);
      fetch(`https://reseal-bike-server.vercel.app/myproducts/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount > 0){
            toast.success('Item Sold SuccessFully')
        }
        
    })
    }
    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
        onClick={()=>handlerPayAfterDelete(catagoryId)}
          className="btn btn-sm btn-secondary mt-3"
          type="submit"
          disabled={!stripe || processing ||!clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your TrnasactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
       </>
    );
};

export default CheckoutForm;