import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Googlelogin from "../SharedPages/Googlelogin/Googlelogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showpass, setShowpass] = useState(true);
  const [showpasscon, setShowpasscon] = useState(true);
  const { customRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    if (!data.email) {
      return toast.error("email field can bot be empty");
    }

    if (!data.password) {
      return toast.error("password field can bot be empty");
    }

    if (data.password !== data.cmpassword) {
      return toast.error("password and comfirm password does not match");
    }

    if (data.password.length < 6 || data.password.length < 6) {
      return toast.error("password can be at least 6 character");
    }

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/.test(
        data.password
      )
    ) {
      return toast.error(
        "password must have a capital letter and a special character"
      );
    }

    customRegister(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: data.name,
          photoURL: data.photo,
        });
        if (user && user?.email) {
          toast.success("Register completed");
          event.target.reset();

          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photo,
            role: "student",
          };

          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section id="login">
      <div className="mycontainer">
        <div className="loginWrapper min-h-screen w-full flex items-center justify-center">
          <div className="loginBox w-[600px] bg-white shadowCustom">
            <div className="logiHeading">
              <h2 className="text-4xl font-semibold text-center mb-5">
                Register
              </h2>
            </div>
            <div className="loginFrom">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="loginInput">
                  <div className="loginInput mb-5">
                    <label className="block font-medium mb-2">Name</label>
                    <input
                      {...register("name")}
                      className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="loginInput mb-5">
                    <label className="block font-medium mb-2">Email</label>
                    <input
                      {...register("email")}
                      className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="loginInput mb-5 relative">
                    <label className="block font-medium mb-2">Password</label>
                    <input
                      {...register("password")}
                      className="block w-full border border-black bg-white rounded-sm px-5 pr-16 py-3 outline-0"
                      type={showpass ? "password" : "text"}
                      placeholder="Enter Your Password"
                      autoComplete="off"
                    />
                    <span
                      onClick={() => setShowpass(!showpass)}
                      className="absolute top-[49px] right-3 cursor-pointer"
                    >
                      {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                    </span>
                  </div>
                  <div className="loginInput mb-5 relative">
                    <label className="block font-medium mb-2">
                      Confirm Password
                    </label>
                    <input
                      {...register("cmpassword")}
                      className="block w-full border border-black bg-white rounded-sm px-5 pr-16 py-3 outline-0"
                      type={showpasscon ? "password" : "text"}
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                    />
                    <span
                      onClick={() => setShowpasscon(!showpasscon)}
                      className="absolute top-[49px] right-3 cursor-pointer"
                    >
                      {showpasscon ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </span>
                  </div>
                  <div className="loginInput mb-5">
                    <label className="block font-medium mb-2">Photo Url</label>
                    <input
                      {...register("photo")}
                      className="block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                      type="text"
                      placeholder="Enter Your Photo Url"
                    />
                  </div>
                  <div className="submit">
                    <button
                      className="block w-full px-5 py-3 bg-[#DBB984] font-medium text-white"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div className="formPara text-center mt-6">
                <p className="text-[#DBB984]">
                  Old user?
                  <Link to="/login">
                    <strong> Please Login here</strong>
                  </Link>
                </p>
              </div>
              <div className="social text-center">
                <p className="font-medium my-5">Or sign in with</p>
                <Googlelogin></Googlelogin>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Register;
