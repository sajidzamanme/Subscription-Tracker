import useSubscriptionsStore from "../stores/useSubscriptionsStore";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const SubscriptionList = () => {
  const { subscriptions } = useSubscriptionsStore();

  return (
    <div className="w-full max-w-xl flex flex-col justify-start items-center gap-3">
      {subscriptions.map((sub) => {
        console.log(sub);
        return (
          <div
            key={sub._id}
            className="w-full max-w-xl h-[6rem] flex flex-row justify-between items-center
          bg-[#758694] rounded-lg p-4"
          >
            <h1 className="text-2xl text-white font-bold">{sub.name}</h1>

            <div className="w-[10rem] flex flex-col">
              {/* Calculate Renewal */}
              <h2 className="text-white font-medium text-nowrap overflow-hidden">
                Till Renewal:{" "}
                {Math.floor(
                  (Date.parse(sub.renewalDate) - Date.now()) / MS_PER_DAY
                )}
              </h2>
              <h2 className="text-white font-medium text-nowrap overflow-hidden">
                Price: {sub.price}TK
              </h2>
              <h2 className="text-white font-medium text-nowrap overflow-hidden">
                Payment: {sub.payment}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubscriptionList;
