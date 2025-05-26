import CustomBtn from "../components/CustomBtn";
import { useNavigate } from "react-router";

const WelcomeBox = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="max-w-lg text-5xl text-center font-semibold mt-32">
        Track All Your Subscriptions Easily With Us
      </h1>
      <CustomBtn
        label="Join Us Today"
        classList={
          "bg-violet-600 text-white px-6 py-2.5 font-semibold rounded-md text-sm hover:bg-violet-500"
        }
        handleClick={() => navigate("/signup")}
      />
    </>
  );
};

export default WelcomeBox;
