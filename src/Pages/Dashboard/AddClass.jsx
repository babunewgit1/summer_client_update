import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Toaster, toast } from "react-hot-toast";

const imagesHostingKey = import.meta.env.VITE_IMG;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { currentuser } = useContext(AuthContext);
  const hostingUrl = `https://api.imgbb.com/1/upload?key=${imagesHostingKey}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(hostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            available_seats,
            instructor_email,
            instructor_name,
            price,
            name,
          } = data;
          const newClassElement = {
            available_seats: parseFloat(available_seats),
            instructor_email,
            instructor_name,
            price: parseFloat(price),
            name,
            image: imgURL,
            status: "pending",
            enrolled_students: parseFloat(0),
          };
          console.log(newClassElement);
          axiosSecure.post("/class", newClassElement).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("Class added");
            }
          });
        }
      });
  };

  return (
    <section id="addClass">
      <div className="addclassbox max-w-2xl mx-auto">
        <div className="heading">
          <h2 className="text-4xl font-semibold">Add A Class</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrapper">
            <div className="inputBox">
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
                <label className="block font-medium mb-2">
                  Instructor name
                </label>
                <input
                  {...register("instructor_name")}
                  required
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  value={currentuser?.displayName}
                  readOnly
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">
                  Instructor email
                </label>
                <input
                  required
                  readOnly
                  {...register("instructor_email")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  value={currentuser?.email}
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">
                  Available seats
                </label>
                <input
                  required
                  {...register("available_seats")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  placeholder="Available seats"
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Price</label>
                <input
                  required
                  {...register("price")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="text"
                  placeholder="Enter Price"
                />
              </div>
              <div className="loginInput mb-5">
                <label className="block font-medium mb-2">Class Image</label>
                <input
                  {...register("image")}
                  className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                  type="file"
                />
              </div>
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default AddClass;
