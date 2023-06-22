import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Googlelogin from "../SharedPages/Googlelogin/Googlelogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("sF | Login");
  const [showpass, setShowpass] = useState(true);
  const { customLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log(from);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    if (!data.email) {
      return toast.error("Email field can not be empty");
    }

    if (!data.password) {
      return toast.error("Password field can not be empty");
    }

    customLogin(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          toast.success("Login successfull");
          event.target.reset();
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section id="login" className="dark:bg-[#20252d]">
      <div className="mycontainer">
        <div className="loginWrapper h-screen w-full flex items-center justify-center">
          <div className="loginBox w-[600px] dark:bg-[#20252d] dark:text-white bg-white shadowCustom">
            <div className="logiHeading">
              <h2 className="text-4xl font-semibold text-center mb-5">Login</h2>
            </div>
            <div className="loginFrom">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="loginInput">
                  <div className="loginInput mb-5">
                    <label className="block font-medium mb-2">Email</label>
                    <input
                      required
                      {...register("email")}
                      className="dark:text-black block w-full border border-black bg-white rounded-sm px-5 py-3 outline-0"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="loginInput mb-5 relative">
                    <label className="block font-medium mb-2">Password</label>
                    <input
                      required
                      {...register("password")}
                      className="dark:text-black block w-full border border-black bg-white rounded-sm px-5 pr-16 py-3 outline-0"
                      type={showpass ? "password" : "text"}
                      placeholder="Enter Your Email"
                      autoComplete="off"
                    />
                    <span
                      onClick={() => setShowpass(!showpass)}
                      className="absolute dark:text-black top-[49px] right-3 cursor-pointer"
                    >
                      {showpass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                    </span>
                  </div>
                  <div className="submit">
                    <button
                      className="block w-full px-5 py-3 bg-[#DBB984] font-medium text-white"
                      type="submit"
                    >
                      Log In
                    </button>
                    <p className="text-[#DBB984]">
                      Please use email: admin@gmail.com and password: Admin@1234
                      for testing
                    </p>
                  </div>
                </div>
              </form>
              <div className="formPara text-center mt-6">
                <p className="text-[#DBB984]">
                  New here?
                  <Link to="/register">
                    <strong> Create a New Account</strong>
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

export default Login;
