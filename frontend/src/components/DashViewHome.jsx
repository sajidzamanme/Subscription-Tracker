import useUserStore from "../stores/useUserStore";

const DashViewHome = () => {
  const { user } = useUserStore();

  return (
    <div className="w-[92%] max-w-xl h-[6rem] flex flex-row items-center justify-between bg-[#758694] rounded-xl p-4 m-4">
      {/* Add ... if name is too long */}
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white font-semibold text-2xl">{user.name}</h1>
        <h3 className="text-white font-semibold text-xs">{user.email}</h3>
      </div>

      <div className="bg-[#405D72] rounded-lg p-2">
        <h1 className="text-white font-semibold text-md text-center">
          Subscriptions: 10
        </h1>
      </div>
    </div>
  );
};

export default DashViewHome;
