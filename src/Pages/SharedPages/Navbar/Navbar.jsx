import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Navbar = () => {
  const [bar, setBar] = useState(true);
  const { customLogOut } = useContext(AuthContext);
  const { currentuser } = useContext(AuthContext);
  console.log(currentuser);

  const handelLogout = () => {
    return customLogOut()
      .then(() => {
        toast.success("Logout successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section id="navbar" className=" bg-[#1e272e] py-4 lg:px-10 px-4">
      <div className="fulid">
        <div className="navbarWrapper lg:flex items-center justify-between">
          <div className="logo flex items-center justify-between">
            <Link to="/">
              <h2 className="text-4xl font-bold text-white">SportFusion</h2>
            </Link>
            <div className="bar lg:hidden text-white">
              <div className="barsub">
                <ul className="flex items-center gap-4">
                  {currentuser && (
                    <li className="w-10 h-10 overflow-hidden rounded-full border-2 border-[#DBB984]">
                      <img
                        className="w-full block h-full object-cover"
                        src={currentuser?.photoURL}
                        alt=""
                      />
                    </li>
                  )}
                  <li onClick={() => setBar(!bar)}>
                    {bar ? (
                      <FaBars className="text-white text-3xl cursor-pointer"></FaBars>
                    ) : (
                      <FaTimes className="text-white text-3xl cursor-pointer"></FaTimes>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`menuItems py-6 lg:py-0 lg:block ${bar ? "hidden" : ""}`}
          >
            <ul className="lg:flex items-center gap-5 uppercase font-medium text-white space-y-2 lg:space-y-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classpage">Classes</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {currentuser && (
                <li className="w-10 hidden overflow-hidden lg:block h-10 rounded-full border-2 border-[#DBB984]">
                  <img
                    className="w-full block h-full object-cover"
                    src={currentuser?.photoURL}
                    alt=""
                  />
                </li>
              )}
              {!currentuser && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {currentuser && (
                <li>
                  <button onClick={handelLogout}>LOGOUT</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default Navbar;
