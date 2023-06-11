import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  const [isStaudent] = useStudent();

  console.log(isStaudent, "hello student");

  return (
    <section id="dashboard">
      <div className="wrapper grid grid-cols-12">
        <div className="dashboardLeft col-span-2 h-screen bg-[#DBB984] p-9">
          {isAdmin && (
            <ul>
              <li>
                <Link to="/dashboard/manageclass">Manage Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/manageusers">Manage Users</Link>
              </li>
            </ul>
          )}
          {isInstructor && (
            <ul>
              <li>
                <Link to="addclass">Add a Class</Link>
              </li>
              <li>
                <Link to="myclass">My Classes</Link>
              </li>
            </ul>
          )}
          {isStaudent && (
            <ul>
              <li>
                <Link to="/dashboard/selectedclass">My Selected Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclass">My Enrolled Classes</Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory">My Payment History</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="dashboardRight col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
