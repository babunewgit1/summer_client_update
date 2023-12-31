import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../Components/Heading/Heading";
import useTitle from "../../hooks/useTitle";

const InstructorsPage = () => {
  useTitle("sF | Class");
  const [axiosSecure] = useAxiosSecure();
  const { data: instractor = [] } = useQuery(["insforall"], async () => {
    const res = await axiosSecure.get("/insforall");
    return res.data;
  });

  console.log(instractor);

  return (
    <section id="instructors" className="md:py-24 py-8 dark:bg-[#20252d]">
      <div className="mycontainer">
        <div className="courseheading">
          <Heading heading="Our Popular Instructors"></Heading>
        </div>
        <div className="classWrapper grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instractor.map((items) => {
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
      </div>
    </section>
  );
};

export default InstructorsPage;
