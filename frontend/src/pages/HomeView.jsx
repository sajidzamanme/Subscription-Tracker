import DashViewHome from "../components/DashViewHome";
import CustomBtn from "../components/CustomBtn";
import SubscriptionList from "../components/SubscriptionList";

const HomeView = () => {
  return (
    <div
      id="homeview"
      className="h-full w-full flex flex-col justify-start items-center py-4 px-6 gap-3"
    >
      <DashViewHome />

      <CustomBtn
        label="+"
        classList={
          "w-full max-w-xl h-[3rem] bg-[#758694] rounded-lg text-white text-3xl font-bold"
        }
      />

      <SubscriptionList />
    </div>
  );
};

export default HomeView;
