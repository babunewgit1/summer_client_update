import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { Toaster, toast } from "react-hot-toast";

const MySelectedClass = () => {
  useTitle("sF | My Selected Class");
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myAddedClass = [], refetch } = useQuery(
    ["selectedclass"],
    async () => {
      const res = await axiosSecure.get(`/selectedclass/${currentuser?.email}`);
      return res.data;
    }
  );

  const deleteClass = (id) => {
    axiosSecure.delete(`/selectedclass/${id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount > 0) {
        refetch();
        toast.success("Class Removed");
      }
    });
  };
  return (
    <div id="myClass" className="overflow-x-auto">
      <table className="table table-zebra ">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Available seats</th>
            <th>Instructor Name</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myAddedClass.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="block w-[60px] h-[60px] object-cover"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.available_seats}</td>
                <td>{item.instructor_name}</td>
                <td>{item.price}</td>
                <td>
                  <ul className="flex items-center gap-3">
                    <li>
                      <button
                        className="bg-[#FF3B4A] text-white px-3 py-2"
                        onClick={() => deleteClass(item._id)}
                      >
                        Delete
                      </button>
                    </li>
                    <li>
                      <button className="bg-[#50DBB4] text-white px-3 py-2">
                        <Link
                          state={item.itemsId}
                          to={`/dashboard/payment/${item._id}`}
                        >
                          Pay
                        </Link>
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Toaster></Toaster>
    </div>
  );
};

export default MySelectedClass;
