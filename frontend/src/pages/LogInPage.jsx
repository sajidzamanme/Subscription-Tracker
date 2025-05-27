import { useState } from "react";
import CustomBtn from "../components/CustomBtn";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import useLoginState from "../stores/useLoginState";
import useUserStore from "../stores/useUserStore";
import useSubscriptionsStore from "../stores/useSubscriptionsStore";

const API = "http://localhost:5500/api/v1";

const LogInPage = () => {
  const { setLoggedIn } = useLoginState();
  const { setUser } = useUserStore();
  const { setSubscriptions } = useSubscriptionsStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API}/auth/sign-in`, formData);
      const user = response.data.data.user;
      if (response.data.success) {
        setUser({ id: user._id, name: user.name, email: user.email });
        setLoggedIn(true);

        const res = await axios.get(`${API}/subscriptions/user/${user._id}`);
        setSubscriptions(res.data.data);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <section className="w-[93%] max-w-xs bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
        <form
          id="loginForm"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 py-6 px-2 items-start justify-start"
        >
          <h1 className="self-center text-[#405D72] text-3xl font-bold py-7">
            Login Your Account
          </h1>

          <div className="w-full max-w-[20rem] flex flex-col gap-3">
            <input
              type="email"
              value={formData.email}
              className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="password"
              value={formData.password}
              className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
              placeholder="Enter a Password"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-full flex flex-col gap-2 justify-center items-center pb-8">
            <CustomBtn
              label="Continue"
              classList={
                "bg-[#FFF8F3] text-[#405D72] px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-[#fddac3]"
              }
            />
            <h1 className="text-sm">
              Or,{" "}
              <Link
                to={"/signup"}
                className="text-[#405D72] hover:text-[#758694] font-medium"
              >
                Signup Here
              </Link>
            </h1>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LogInPage;
