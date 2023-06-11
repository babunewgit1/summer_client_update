import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

const ManageClass = () => {
  const [postId, setPostId] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const { data: allClass = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  const handelApprove = (id) => {
    const updateApp = { status: "approve" };
    axiosSecure.patch(`/class/${id}`, updateApp).then((data) => {
      if (data.data.modifiedCount > 0) {
        refetch();
        toast.success("course approved");
      }
    });
  };

  const handelDeny = (id) => {
    const updateApp = { status: "deny" };
    axiosSecure.patch(`/class/${id}`, updateApp).then((data) => {
      if (data.data.modifiedCount > 0) {
        refetch();
        toast.success("course deny");
      }
    });
  };

  const handleFeeback = (id) => {
    setPostId(id);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const text = e.target.textarea.value;

    if (!text) {
      return toast.error("please provide a feedback");
    }

    const updateApp = { feedback: text };
    axiosSecure.put(`/class/${postId}`, updateApp).then((data) => {
      if (data.data.modifiedCount > 0) {
        e.target.reset();
        toast.success("Feedback posted");
        refetch();
      }
    });
  };
  return (
    <section id="allClass">
      <div className="wrapper max-w-6xl mx-auto">
        <div className="allClassWrapper bg-slate-300 p-14 grid grid-cols-3 gap-x-8 gap-y-9">
          {allClass.map((items) => {
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
                    {items.status}
                  </p>
                </div>
                <div className="button mt-4">
                  <ul className="flex items-center justify-between">
                    <li>
                      <button
                        onClick={() => handelApprove(items._id)}
                        className="inline-block text-white bg-green-400 px-3 py-2"
                      >
                        Approve
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handelDeny(items._id)}
                        className="inline-block text-white bg-orange-600 px-3 py-2"
                      >
                        Deny
                      </button>
                    </li>
                    <li>
                      <label
                        onClick={() => handleFeeback(items._id)}
                        htmlFor="my_modal_6"
                        className="inline-block text-white bg-yellow-500 px-3 py-2"
                      >
                        Sent Feedback
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="feedbackForm">
            <h4 className="text-2xl text-center mb-3">Submit Your Feedback</h4>
            <form onSubmit={handelSubmit}>
              <textarea
                name="textarea"
                className="block w-full h-[100px] border border-gray-300 outline-none resize-none p-3"
              ></textarea>
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
    </section>
  );
};

export default ManageClass;
