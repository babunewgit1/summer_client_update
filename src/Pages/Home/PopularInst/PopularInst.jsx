import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import { Zoom } from "react-awesome-reveal";

const PopularInst = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: insforallhome = [] } = useQuery(["insforallhome"], async () => {
    const res = await axiosSecure.get("insforallhome");
    return res.data;
  });

  console.log(insforallhome);

  return (
    <section id="popularins" className="md:py-24 py-8 dark:bg-[#20252d]">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="heading">
            <Heading heading="Our Popular Instructors"></Heading>
          </div>
          <Zoom>
            <div className="popularInstWrapper grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insforallhome.map((items) => {
                return (
                  <div
                    key={items._id}
                    className="classBox boxShadow rounded-lg overflow-hidden"
                  >
                    <div className="classImg">
                      <img
                        className="w-full h-[300px] mb-5 object-cover object-top"
                        src={items?.photo}
                        alt=""
                      />
                    </div>
                    <div className="classDetails p-2 md:p-6 dark:text-white">
                      <h3 className="text-3xl font-medium">{items.name}</h3>
                      <p>{items?.email}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Zoom>
          <div className="all text-center mt-7">
            <Link
              className="inline-block font-medium bg-[#20252d] dark:bg-[#302787] text-white px-6 py-4"
              to="/instructors"
            >
              See All Instructors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInst;
