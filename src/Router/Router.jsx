import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/Login/Login";
import NotFround from "../Pages/SharedPages/NotFround/NotFround";
import Home from "../Pages/Home/HomePage/Home";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MangeUser from "../Pages/Dashboard/MangeUser";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminoRoute";
import AddClass from "../Pages/Dashboard/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../Pages/Dashboard/ManageClass";
import MyClass from "../Pages/Dashboard/MyClass";
import ClassPage from "../Pages/ClassPage/ClassPage";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass";
import Payment from "../Pages/Dashboard/Payment";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <NotFround></NotFround>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/classpage",
        element: <ClassPage></ClassPage>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <MangeUser></MangeUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },

      {
        path: "selectedclass",
        element: (
          <StudentRoute>
            <MySelectedClass></MySelectedClass>
          </StudentRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <StudentRoute>
            <EnrolledClass></EnrolledClass>
          </StudentRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
