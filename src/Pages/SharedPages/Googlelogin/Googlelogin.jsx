import React, { useContext } from "react";
import google from "../../../assets/google.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Googlelogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: user?.name,
          photoURL: user?.photo,
        });
        if (user) {
          toast.success("Google login Successfull");
          const saveUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            role: "student",
          };

          fetch("https://server-six-phi.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <ul className="flex items-center justify-center gap-5">
        <li>
          <button onClick={handleGoogle}>
            <img
              className="w-[45px] h-[45px]"
              src={google}
              alt="google login images"
            />
          </button>
        </li>
      </ul>
      <Toaster></Toaster>
    </div>
  );
};

export default Googlelogin;
