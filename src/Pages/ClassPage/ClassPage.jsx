import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ClassPage = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: approvedClass = [] } = useQuery(["classforall"], async () => {
    const res = await axiosSecure.get("/classforall");
    return res.data;
  });

  console.log(approvedClass);

  return (
    <section id="course">
      <div className="mycontainer">
        <div className="courseheading">
          <h3 className="text-4xl font-bold text-center my-7">All classes</h3>
        </div>
        <div className="classWrapper grid grid-cols-3 gap-8">
          {approvedClass.map((items) => {
            return (
              <div key={items._id} className="classBox">
                <div className="classImg">
                  <img
                    className="w-full h-[300px] mb-5"
                    src={items.image}
                    alt=""
                  />
                </div>
                <h3 className="text-3xl font-medium">{items.name}</h3>
                <div className="classDetails">
                  <p className="flex items-center justify-between space-y-3">
                    Instructor name <span>{items.instructor_name}</span>
                  </p>
                  <p className="flex items-center justify-between space-y-3">
                    Available seats <span>{items.available_seats}</span>
                  </p>
                  <p className="flex items-center justify-between space-y-3">
                    Price <span>{items.price}</span>
                  </p>
                  <button className="btn btn-success">Select class</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassPage;
