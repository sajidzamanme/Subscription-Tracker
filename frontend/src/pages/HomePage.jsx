import { useNavigate } from "react-router";
import CustomBtn from "../components/CustomBtn";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full pt-32 flex flex-col items-center gap-6">
      <h1 className="text-5xl text-center font-semibold">
        Track All Your Subscriptions Easily With Us
      </h1>
      <CustomBtn
        label="Join Us Today"
        bgCol="bg-violet-400"
        textCol="text-white"
        padding="px-6 py-2.5"
        handleClick={() => navigate("/signup")}
      />
    </div>
  );
};

export default HomePage;
