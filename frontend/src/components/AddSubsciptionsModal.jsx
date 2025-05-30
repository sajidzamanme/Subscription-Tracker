import { useState } from "react";
import CustomBtn from "./CustomBtn";
import axios from "axios";
import useUserStore from "../stores/useUserStore";
import useSubscriptionsStore from "../stores/useSubscriptionsStore";
import SubscriptionForm from "./SubscriptionForm";

const API = "http://localhost:5500/api/v1";

const AddSubsciptionsModal = ({ setShowModal }) => {
  const { user } = useUserStore();
  const { setSubscriptions } = useSubscriptionsStore();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    currency: "",
    frequency: "",
    category: "",
    payment: "",
    //startDate: "",
    user: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API}/subscriptions`, {
        ...formData,
        price: parseFloat(formData.price),
        user: user.id,
      });
      if (response.data.success) {
        const res = await axios.get(`${API}/subscriptions/user/${user.id}`);
        setSubscriptions(res.data.data);
        setShowModal(false);
      } else {
        const error = Error("Couldn't create Subscription");
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
        label="Add Subscription"
      />
    </div>
  );
};

export default AddSubsciptionsModal;
