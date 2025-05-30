import useUserStore from "../stores/useUserStore";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import CustomBtn from "../components/CustomBtn";
import axios from "axios";
import useLoginState from "../stores/useLoginState";
import { useState } from "react";

const API = "http://localhost:5500/api/v1";

const UserDetailsModal = ({ setShowModal }) => {
  const { user, setUser } = useUserStore();
  const { setLoggedIn } = useLoginState();
  const [showEditName, setShowEditName] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showEditPass, setShowEditPass] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

  const handleConfirm = async (event) => {
    event.preventDefault();

    const dataToSend = { ...formData };
    if (dataToSend.password === "") {
      delete dataToSend.password;
      console.log(dataToSend);
    }

    try {
      console.log("before: ", user);
      const response = await axios.put(`${API}/users/${user.id}`, dataToSend);
      if (response.status === 200) {
        const res = await axios.get(`${API}/users/${user.id}`);
        setUser({
          name: res.data.data.name,
          email: res.data.data.email,
          id: res.data.data._id,
        });
        setShowModal(false);
        console.log("after: ", user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API}/users/${user.id}`);
      setLoggedIn(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
      <form
        id="userDetails"
        className="w-full flex flex-col gap-5 py-6 px-3 items-start justify-start"
        onSubmit={handleConfirm}
      >
        <h1 className="self-center text-[#405D72] text-3xl font-bold py-2">
          User Details
        </h1>

        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <FaUser className="size-5" />
            </div>
            {showEditName ? (
              <input
                value={formData.name}
                type="name"
                className="w-full h-[2.5rem] bg-gray-100 rounded-lg border-2 border-gray-300 px-3 font-medium"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            ) : (
              <h1 className="w-full h-[2.5rem] flex flex-row items-center self-center px-3 font-medium">
                {user.name}
              </h1>
            )}
            <div className="px-3">
              <MdEdit
                className="size-5.5 hover:text-white"
                onClick={() => {
                  setShowEditName((prevState) => !prevState);
                  setFormData((prevState) => ({
                    ...prevState,
                    name: user.name,
                  }));
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <MdEmail className="size-5" />
            </div>
            {showEditEmail ? (
              <input
                value={formData.email}
                type="email"
                className="w-full h-[2.5rem] bg-gray-100 rounded-lg border-2 border-gray-300 px-3 font-medium"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            ) : (
              <h1 className="w-full h-[2.5rem] flex flex-row items-center self-center px-3 font-medium">
                {user.email}
              </h1>
            )}
            <div className="px-3">
              <MdEdit
                className="size-5.5 hover:text-white"
                onClick={() => {
                  setShowEditEmail((prevState) => !prevState);
                  setFormData((prevState) => ({
                    ...prevState,
                    email: user.email,
                  }));
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <FaLock className="size-5" />
            </div>
            {showEditPass ? (
              <input
                value={formData.password}
                type="pass"
                placeholder="••••••••"
                className="w-full h-[2.5rem] bg-gray-100 rounded-lg border-2 border-gray-300 px-3 font-medium"
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            ) : (
              <h1 className="w-full h-[2.5rem] flex flex-row items-center self-center px-3 font-medium">
                ••••••••
              </h1>
            )}
            <div className="px-3">
              <MdEdit
                className="size-5.5 hover:text-white"
                onClick={() => {
                  setShowEditPass((prevState) => !prevState);
                  setFormData((prevState) => ({
                    ...prevState,
                    password: "",
                  }));
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row gap-2 justify-center items-center pb-3">
          {(showEditName || showEditEmail || showEditPass) && (
            <CustomBtn
              label="Confirm"
              classList={
                "bg-green-500 text-white px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-green-600"
              }
            />
          )}
          <CustomBtn
            label="Delete"
            classList={
              "bg-red-500 text-white px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-red-600"
            }
            handleClick={handleDelete}
          />
        </div>
      </form>
    </div>
  );
};

export default UserDetailsModal;
