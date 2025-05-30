import React from "react";
import CustomBtn from "./CustomBtn";

const SubscriptionForm = ({
  formData,
  setFormData,
  handleSubmit,
  label = "Subscription Form",
}) => {
  return (
    <form
      id="signupForm"
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-5 p-6 items-start justify-start"
    >
      <h1 className="self-center text-[#405D72] text-3xl font-bold py-2">
        {label}
      </h1>

      <div className="w-full flex flex-col gap-3">
        <input
          type="text"
          value={formData.name}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          placeholder="Enter Name of the Subscription"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <input
          type="text"
          value={formData.price}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          placeholder="Enter Price"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              price: e.target.value,
              // parse to Int in handleSubmit
            }))
          }
        />
        <select
          value={formData.currency}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              currency: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Select Currency Type
          </option>
          <option value="USD">USD</option>
          <option value="TK">TK</option>
          <option value="EUR">EURO</option>
        </select>
        <select
          value={formData.frequency}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              frequency: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Select Frequency Type
          </option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <select
          value={formData.category}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Select Category Type
          </option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="news">News</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="politics">Politics</option>
          <option value="others">Others</option>
        </select>
        <input
          type="text"
          value={formData.payment}
          className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
          placeholder="Enter Payment Method"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              payment: e.target.value,
            }))
          }
        />
      </div>

      <div className="w-full flex flex-col gap-2 justify-center items-center pb-3">
        <CustomBtn
          label="Add"
          classList={
            "bg-[#FFF8F3] text-[#405D72] px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-[#fddac3]"
          }
        />
      </div>
    </form>
  );
};

export default SubscriptionForm;
