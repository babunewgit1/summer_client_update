import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../Components/Heading/Heading";
import useTitle from "../../hooks/useTitle";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
  useTitle("sF | Payment");
  const { id } = useParams();

  const location = useLocation();
  const itemId = location.state;

  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classInfo = [] } = useQuery(["selectedclass"], async () => {
    const res = await axiosSecure.get(`/selectedclass/${currentuser?.email}`);
    return res.data;
  });

  const findObj = classInfo.find((items) => items._id === id);
  console.log(findObj);
  const payPrice = parseFloat(findObj?.price.toFixed(2));
  const classesItemsId = findObj?._id;
  const image = findObj?.image;
  const name = findObj?.name;
  const instructor_name = findObj?.instructor_name;

  return (
    <>
      <div className="wrapper bg-white p-10 rounded-lg">
        <Heading heading="Please confirm your payment"></Heading>
        <div className="middle max-w-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              itemsId={classesItemsId}
              amount={payPrice}
              stripe={stripePromise}
              image={image}
              name={name}
              itemId={itemId}
              instructor_name={instructor_name}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
