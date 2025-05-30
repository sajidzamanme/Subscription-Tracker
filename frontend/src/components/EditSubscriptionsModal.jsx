import { useState } from "react";
import axios from "axios";
import useUserStore from "../stores/useUserStore";
import useSubscriptionsStore from "../stores/useSubscriptionsStore";
import SubscriptionForm from "./SubscriptionForm";

const API = "http://localhost:5500/api/v1";

const EditSubscriptionsModal = ({ setShowModal, selectedSub }) => {
  const { user } = useUserStore();
  const { setSubscriptions } = useSubscriptionsStore();
  const [formData, setFormData] = useState({
    name: selectedSub.name,
    price: selectedSub.price,
    currency: selectedSub.currency,
    frequency: selectedSub.frequency,
    category: selectedSub.category,
    payment: selectedSub.payment,
    //startDate: "",
    user: selectedSub.user,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${API}/subscriptions/${selectedSub._id}`,
        {
          ...formData,
          price: parseFloat(formData.price),
        }
      );

      if (response.data.success) {
        setShowModal(false);
        const res = await axios.get(`${API}/subscriptions/user/${user.id}`);
        setSubscriptions(res.data.data);
      } else {
        const error = Error("Couldn't edit subscription");
        error.status = 400;
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
      <SubscriptionForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        label="Edit Subscription"
      />
    </div>
  );
};

export default EditSubscriptionsModal;
