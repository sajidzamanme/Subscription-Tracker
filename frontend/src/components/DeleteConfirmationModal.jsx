import axios from "axios";
import CustomBtn from "./CustomBtn";
import useSubscriptionsStore from "../stores/useSubscriptionsStore";
import useUserStore from "../stores/useUserStore";

const API = "http://localhost:5500/api/v1";

const DeleteConfirmationModal = ({
  setShowModal,
  setSelectedSub,
  selectedSub,
}) => {
  const { user } = useUserStore();
  const { setSubscriptions } = useSubscriptionsStore();

  const handleYes = async () => {
    try {
      const response = await axios.delete(
        `${API}/subscriptions/${selectedSub._id}`
      );
      if (!response.data.success) {
        const error = new Error(response.data.message);
        error.statusCode = response.data.status;
        throw error;
      } else {
        const res = await axios.get(`${API}/subscriptions/user/${user.id}`);
        setSubscriptions(res.data.data);

        setSelectedSub(null);
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNo = () => {
    setSelectedSub(null);
    setShowModal(false);
  };

  return (
    <div className="w-full bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
      <div
        id="confirmDelete"
        className="w-full flex flex-col gap-5 p-6 items-start justify-start"
      >
        <h1 className="self-center text-[#405D72] text-3xl font-bold py-2">
          Are You Sure?
        </h1>

        <div className="w-full flex flex-col gap-3">
          <CustomBtn label="Yes" handleClick={() => handleYes()} />
          <CustomBtn label="No" handleClick={() => handleNo()} />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
