import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
const PopularClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: ppclassall = [] } = useQuery(["ppclassall"], async () => {
    const res = await axiosSecure.get("classforallhome");
    return res.data;
  });

  return (
    <section
      id="popularClass"
      className="md:py-16 py-8 dark:bg-[#20252d] -mt-[10px]"
    >
      <div className="mycontainer">
        <div className="wrapper">
          <Heading heading="Our Popular Class"></Heading>
          <div className="ppClasswrapper grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppclassall.map((items) => {
              return (
                <div
                  key={items._id}
                  className="classBox boxShadow rounded-lg overflow-hidden"
                >
                  <div className="classImg">
                    <img
                      className="w-full h-[300px]"
                      src={items.image}
                      alt=""
                    />
                  </div>

                  <div className="classDetails p-2 md:p-6 dark:text-white">
                    <h3 className="text-3xl font-medium mb-5">{items.name}</h3>
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
                      Price <span>{items.price} USD</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="all text-center mt-7">
            <Link
              className="inline-block font-medium bg-[#20252d] dark:bg-[#302787] text-white px-6 py-4"
              to="/classpage"
            >
              See all Classes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
