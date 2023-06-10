import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyClass = () => {
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: allClassbyme = [], refetch } = useQuery(
    ["class", currentuser?.email],
    async () => {
      const res = await axiosSecure.get(`/class/${currentuser?.email}`);
      return res.data;
    }
  );

  return (
    <section id="myclass">
      <div className="wrapper max-w-6xl mx-auto">
        <div className="allClassWrapper bg-slate-300 p-14 grid grid-cols-3 gap-x-8 gap-y-9">
          {allClassbyme.map((items) => {
            return (
              <div className="classbox" key={items._id}>
                <img
                  className="w-full mb-2 h-[300px] object-cover"
                  src={items.image}
                  alt=""
                />
                <h3 className="text-3xl font-medium mb-4">{items.name}</h3>
                <div className="info space-y-3">
                  <p className="flex items-center justify-between">
                    <span>Instructor Name :</span>
                    {items.instructor_name}
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Email :</span>
                    {items.instructor_email}
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Available seats :</span>
                    {items.available_seats}
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Price :</span>
                    {items.price}
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Status :</span>
                    <span
                      className={
                        items.status === "pending"
                          ? "pending"
                          : items.status === "approve"
                          ? "approve"
                          : "deny"
                      }
                    >
                      {items.status}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Enrolled Students :</span>
                    {items.enrolled_students}
                  </p>
                  {items.status === "deny" && (
                    <div className="feeback">
                      <p>Feedback</p>
                      <p>{items.feedback}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyClass;
