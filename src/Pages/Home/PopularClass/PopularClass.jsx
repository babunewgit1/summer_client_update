import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: ppclassall = [] } = useQuery(["ppclassall"], async () => {
    const res = await axiosSecure.get("classforallhome");
    return res.data;
  });

  return (
    <section id="popularClass">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="popularheading">
            <h2>Popular Classes</h2>
          </div>
          <div className="ppClasswrapper grid grid-cols-3 gap-5">
            {ppclassall.map((items) => {
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
                      Enrolled students <span>{items.enrolled_students}</span>
                    </p>
                    <p className="flex items-center justify-between space-y-3">
                      Price <span>{items.price}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/classpage">See all Classes</Link>
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
