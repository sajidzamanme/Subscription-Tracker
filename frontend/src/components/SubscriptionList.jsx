import useSubscriptionsStore from "../stores/useSubscriptionsStore";
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionList = () => {
  const { subscriptions } = useSubscriptionsStore();

  return (
    <div className="w-full max-w-xl flex flex-col justify-start items-center gap-3">
      {subscriptions.map((sub) => {
        return <SubscriptionCard key={sub._id} subscription={sub} />;
      })}
    </div>
  );
};

export default SubscriptionList;
