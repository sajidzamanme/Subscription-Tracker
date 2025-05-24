import { Link, useNavigate } from "react-router";
import CustomBtn from './CustomBtn';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#405D72] h-[4rem] w-full">
      <div className="h-full container mx-auto flex flex-row justify-between items-center p-3">
        <Link to={"/"} className="text-2xl font-bold text-white">
          Subscription Tracker
        </Link>

        <CustomBtn label="Signup/Login" handleClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Navbar;
