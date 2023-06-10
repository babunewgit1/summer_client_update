import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MangeUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handelMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success("Making Admin successfull");
        }
      });
  };

  const handelIns = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success("Making Instructor successfull");
        }
      });
  };

  return (
    <section id="manageUser" className="bg-white p-20">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <button onClick={() => handelMakeAdmin(user._id)}>
                    Make Admin
                  </button>
                  <button onClick={() => handelIns(user._id)}>
                    Make Instructor
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Toaster></Toaster>
    </section>
  );
};

export default MangeUser;
