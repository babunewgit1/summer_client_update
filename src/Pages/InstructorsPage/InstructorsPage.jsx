import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const InstructorsPage = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instractor = [] } = useQuery(["insforall"], async () => {
    const res = await axiosSecure.get("/insforall");
    return res.data;
  });

  console.log(instractor);

  return (
    <section id="instructors">
      <div className="mycontainer">
        <div className="courseheading">
          <h3 className="text-4xl font-bold text-center my-7">All classes</h3>
        </div>
        <div className="classWrapper grid grid-cols-3 gap-8">
          {instractor.map((items) => {
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
      </div>
    </section>
  );
};

export default InstructorsPage;
