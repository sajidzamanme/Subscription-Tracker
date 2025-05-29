import useUserStore from "../stores/useUserStore";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import CustomBtn from "../components/CustomBtn";
import axios from "axios";
import { useOutletContext } from "react-router";
import useLoginState from "../stores/useLoginState";

const API = "http://localhost:5500/api/v1";

const UserDetailsModal = ({ setShowModal }) => {
  const { user } = useUserStore();
  const { setLoggedIn } = useLoginState();

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
      <div
        id="userDetails"
        className="w-full flex flex-col gap-5 py-6 px-3 items-start justify-start"
      >
        <h1 className="self-center text-[#405D72] text-3xl font-bold py-2">
          User Details
        </h1>

        {/* handle width */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <FaUser className="size-5" />
            </div>
            <h1 className="w-full px-3 font-medium">{user.name}</h1>
            <div className="px-3">
              <MdEdit className="size-5.5 hover:text-white" />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <MdEmail className="size-5" />
            </div>
            <h1 className="w-full px-3 font-medium">{user.email}</h1>
            <div className="px-3">
              <MdEdit className="size-5.5 hover:text-white" />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="px-3">
              <FaLock className="size-5" />
            </div>
            <h1 className="w-full px-3 font-medium">••••••••</h1>
            <div className="px-3">
              <MdEdit className="size-5.5 hover:text-white" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 justify-center items-center pb-3">
          <CustomBtn
            label="Delete"
            classList={
              "bg-red-500 text-white px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-red-600"
            }
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
