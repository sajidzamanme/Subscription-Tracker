import CustomBtn from "../components/CustomBtn";
import { useNavigate } from "react-router";

const WelcomeBox = () => {
  const navigate = useNavigate();

  return (
    <section id="welcomeBox" className="h-full w-full flex flex-col justify-start items-center gap-6 mt-32">
      <h1 className="max-w-lg text-5xl text-center font-semibold">
        Track All Your Subscriptions Easily With Us
      </h1>
      <CustomBtn
        label="Join Us Today"
        classList={
          "bg-violet-600 text-white px-6 py-2.5 font-semibold rounded-md text-sm hover:bg-violet-500"
        }
        handleClick={() => navigate("/signup")}
      />
    </section>
  );
};

export default WelcomeBox;
