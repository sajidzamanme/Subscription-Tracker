import { Link, useNavigate } from "react-router";
import CustomBtn from "./CustomBtn";
import useLoginState from "../stores/useLoginState";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useLoginState();
  const [buttonText, setButtonText] = useState("Signup/Login");
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) setButtonText("Logout");
    else setButtonText("Login");
  }, [loggedIn]);

  return (
    <div className="bg-[#405D72] h-[4rem] w-full">
      <div className="h-full container mx-auto flex flex-row justify-between items-center p-3">
        <Link to={"/"} className="text-2xl font-bold text-white">
          Subscription Tracker
        </Link>

        <CustomBtn
          label={buttonText}
          handleClick={() => {
            if (loggedIn) {
              setLoggedIn(false);
            } else {
              navigate("/login");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
