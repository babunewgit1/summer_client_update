import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PaymentHistory = () => {
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClass = [] } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get(`/payments/${currentuser?.email}`);
    return res.data;
  });

  console.log(enrolledClass);
  return (
    <section id="enrolled">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Sl.NO</th>
            <th>Class Name</th>
            <th>Date</th>
            <th>Transaction Id</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClass.map((items, index) => {
            const dateObj = new Date(items?.date);
            return (
              <tr key={items._id}>
                <td>{index + 1}</td>
                <td>{items?.name}</td>
                <td>
                  {dateObj.toLocaleDateString()} {dateObj.toLocaleTimeString()}
                </td>
                <td>{items?.transactionId}</td>
                <td>{items?.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default PaymentHistory;
