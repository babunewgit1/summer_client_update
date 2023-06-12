import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";

const ClassPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: approvedClass = [] } = useQuery(["classforall"], async () => {
    const res = await axiosSecure.get("/classforall");
    return res.data;
  });

  console.log(approvedClass);

  const handleSelectClass = (id) => {
    console.log(id);

    if (!currentuser) {
      navigate("/login", { state: { from: location } });
      return;
    }

    const selectedClassObj = approvedClass.find((items) => items._id === id);

    const {
      _id,
      available_seats,
      enrolled_students,
      image,
      instructor_name,
      name,
      price,
    } = selectedClassObj;

    const newAddedItems = {
      itemsId: _id,
      available_seats,
      enrolled_students,
      image,
      instructor_name,
      name,
      price,
      email: currentuser.email,
    };

    axiosSecure.post("/selectedclass", newAddedItems).then((data) => {
      if (data.data.message) {
        return toast.error("Class already added");
      }

      if (data.data.insertedId) {
        toast.success("Class added");
      }
    });
  };

  return (
    <section id="course" className="md:py-24 py-8 dark:bg-[#20252d]">
      <div className="mycontainer">
        <div className="courseheading">
          <Heading heading="Our Classes"></Heading>
        </div>
        <div className="classWrapper grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedClass.map((items) => {
            return (
              <div
                key={items._id}
                className="classBox boxShadow rounded-lg overflow-hidden"
              >
                <div className="classImg">
                  <img
                    className="w-full h-[300px] mb-5"
                    src={items.image}
                    alt=""
                  />
                </div>

                <div className="classDetails p-2 md:p-6 dark:text-white">
                  <h3 className="text-3xl font-medium">{items.name}</h3>
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
                  <div className="all mt-3">
                    <button
                      onClick={() => handleSelectClass(items._id)}
                      className="inline-block font-medium bg-[#20252d] dark:bg-[#302787] text-white px-6 py-4"
                    >
                      Select class
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default ClassPage;
