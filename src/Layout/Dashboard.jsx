import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";
import logo from "../assets/logo.png";
import {
  FaListUl,
  FaBookMedical,
  FaFileInvoiceDollar,
  FaBars,
  FaBookOpen,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import useTitle from "../hooks/useTitle";

const Dashboard = () => {
  useTitle("sF | Dashboard");
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  const [isStaudent] = useStudent();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="dashboardRight p-3 md:p-16 w-full h-full">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden my-6"
          >
            <FaBars className="text-3xl"></FaBars>
          </label>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu m-0 p-0 w-80 h-full bg-base-200 text-base-content">
          <div className="dashboardLeft col-span-2 min-h-screen bg-[#302787] p-9 px-4 text-white">
            <div className="logo py-12">
              <NavLink to="/">
                <img className="inline-block w-[180px]" src={logo} alt="" />
              </NavLink>
            </div>
            {isAdmin && (
              <ul className="dashboardlink">
                <li>
                  <NavLink to="/dashboard/manageclass">
                    {" "}
                    <FaTools></FaTools> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    {" "}
                    <FaUserAlt></FaUserAlt> Manage Users
                  </NavLink>
                </li>
              </ul>
            )}
            {isInstructor && (
              <ul className="dashboardlink">
                <li>
                  <NavLink to="addclass">
                    {" "}
                    <FaBookMedical></FaBookMedical>Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="myclass">
                    {" "}
                    <FaBookOpen></FaBookOpen> My Classes
                  </NavLink>
                </li>
              </ul>
            )}
            {isStaudent && (
              <ul className="dashboardlink">
                <li>
                  <NavLink
                    to="/dashboard/selectedclass"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <FaListUl></FaListUl> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledclass">
                    <FaBookMedical></FaBookMedical> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymenthistory">
                    <FaFileInvoiceDollar></FaFileInvoiceDollar> My Payment
                    History
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
