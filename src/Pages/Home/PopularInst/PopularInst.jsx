import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PopularInst = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: insforallhome = [] } = useQuery(["insforallhome"], async () => {
    const res = await axiosSecure.get("insforallhome");
    return res.data;
  });

  console.log(insforallhome);

  return (
    <section id="popularins">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="heading">
            <h2>Popular Instractor</h2>
          </div>
          <div className="popularInstWrapper grid grid-cols-3 gap-8">
            {insforallhome.map((items) => {
              return (
                <div key={items._id} className="classBox">
                  <div className="classImg">
                    <img
                      className="w-full h-[300px] mb-5 object-cover object-top"
                      src={items?.photo}
                      alt=""
                    />
                  </div>
                  <h3 className="text-3xl font-medium">{items.name}</h3>
                  <p>{items?.email}</p>
                </div>
              );
            })}
          </div>
          <Link to="/instructors"> See All Instructors</Link>
        </div>
      </div>
    </section>
  );
};

export default PopularInst;
