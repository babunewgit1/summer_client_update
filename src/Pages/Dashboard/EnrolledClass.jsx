import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const EnrolledClass = () => {
  useTitle("sF | Enrolled Class");
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
            <th>Images</th>
            <th>Instructor Name</th>
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
                <td>
                  <img
                    className="w-[60px] h-[60px] object-cover"
                    src={items?.image}
                  />
                </td>
                <td>{items?.instructor_name}</td>
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

export default EnrolledClass;
