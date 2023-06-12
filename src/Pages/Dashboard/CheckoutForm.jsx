import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Toaster, toast } from "react-hot-toast";

const CheckoutForm = ({
  amount,
  itemsId,
  image,
  name,
  instructor_name,
  itemId,
}) => {
  const { currentuser } = useContext(AuthContext);
  const price = amount;
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      return toast.error(error.message);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: currentuser?.email || "unknown email",
            name: currentuser?.displayName || "anonymous name",
          },
        },
      });

    if (confirmError) {
      toast.error("Someting Wrong");
    }
    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      const payment = {
        email: currentuser?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        oldId: itemsId,
        image,
        name,
        instructor_name,
        itemId,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data.result);
        console.log(res.data.deleteResult);

        if (
          res.data.result.insertedId &&
          res.data.deleteResult.deletedCount > 0
        ) {
          toast.success("Payment success");

          axiosSecure.patch(`/classforall/${itemId}`).then((res) => {
            console.log(res.data);
          });
        }
      });
    }
  };

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
          className="btn btn-primary mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <Toaster></Toaster>
    </>
  );
};

export default CheckoutForm;
