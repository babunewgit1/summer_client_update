import React, { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const MyClass = () => {
  useTitle("sF | My Class");
  const { currentuser } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: allClassbyme = [], refetch } = useQuery(
    ["class", currentuser?.email],
    async () => {
      const res = await axiosSecure.get(`/class/${currentuser?.email}`);
      return res.data;
    }
  );

  const [mupdate, setMupdate] = useState({});

  const handelModal = (items) => {
    setMupdate(items);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axiosSecure.patch(`/class/${mupdate._id}`, data).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        reset();
        toast.success("Data update Successful");
      }
    });
  };

  return (
    <section id="myclass">
      <div className="wrapper">
        <div className="allClassWrapper grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-9">
          {allClassbyme.map((items) => {
            return (
              <div
                className="classbox boxShadow rounded-lg overflow-hidden bg-white"
                key={items._id}
              >
                <img
                  className="w-full mb-2 h-[300px] object-cover"
                  src={items.image}
                  alt=""
                />
                <div className="details p-2 md:p-4">
                  <h3 className="text-3xl font-medium mb-4">{items.name}</h3>
                  <div className="info space-y-1">
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
                      {items.price} USD
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
                    <label
                      onClick={() => handelModal(items)}
                      htmlFor="my_modal_6"
                      className="inline-block text-white bg-yellow-500  px-3 py-2"
                    >
                      Update
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="feedbackForm">
              <h4 className="text-2xl text-center mb-3">Update Form</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="loginInput mb-5">
                  <label className="block font-medium mb-2">Class name</label>
                  <input
                    {...register("name")}
                    required
                    className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                    type="text"
                    placeholder="Enter Class name"
                  />
                </div>
                <div className="loginInput mb-5">
                  <label className="block font-medium mb-2">Price</label>
                  <input
                    {...register("price")}
                    required
                    className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                    type="text"
                    placeholder="Enter Class Price"
                  />
                </div>
                <div className="loginInput mb-5">
                  <label className="block font-medium mb-2">Seat</label>
                  <input
                    {...register("Seat")}
                    required
                    className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                    type="text"
                    placeholder="Enter Class name"
                  />
                </div>
                <button
                  className="inline-block text-white bg-green-400 px-3 py-2 mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default MyClass;
