import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const PaymentHistory = () => {
  useTitle("sF | Payment History");
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClass = [] } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get(`/payments/${currentuser?.email}`);
    return res.data;
  });

  return (
    <div id="enrolled" className="overflow-x-auto">
      <table className="table table-zebra ">
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
    </div>
  );
};

export default PaymentHistory;
