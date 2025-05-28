import { useOutletContext } from "react-router";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const SubscriptionCard = ({ subscription }) => {
  const { setShowModal, setModalContent, setSelectedSub } = useOutletContext();

  return (
    <div
      className="w-full max-w-xl h-[6rem] flex flex-row justify-between items-center
          bg-[#758694] rounded-lg p-4"
      onClick={() => {
        setSelectedSub(subscription);
        setModalContent("edit");
        setShowModal(true);
      }}
    >
      <h1 className="text-2xl text-white font-bold">{subscription.name}</h1>

      <div className="w-[10rem] flex flex-col">
        <h2 className="text-white font-medium text-nowrap overflow-hidden">
          Till Renewal:{" "}
          {Math.floor(
            (Date.parse(subscription.renewalDate) - Date.now()) / MS_PER_DAY
          )}{" "}
          days
        </h2>
        <h2 className="text-white font-medium text-nowrap overflow-hidden">
          Price: {subscription.price} {subscription.currency}
        </h2>
        <h2 className="text-white font-medium text-nowrap overflow-hidden">
          Payment: {subscription.payment}
        </h2>
      </div>
    </div>
  );
};

export default SubscriptionCard;
