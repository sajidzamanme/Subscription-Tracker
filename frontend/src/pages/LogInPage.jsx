import { useState } from "react";
import CustomBtn from "../components/CustomBtn";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import useLoginState from "../stores/useLoginState";

const LogInPage = () => {
  const { setLoggedIn } = useLoginState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5500/api/v1/auth/sign-in",
        formData
      );
      if (response.data.success) {
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col items-center justify-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 items-start justify-start"
        >
          <h1 className="self-center text-3xl font-semibold py-2">
            Login Your Account
          </h1>

          <div className="w-[20rem] flex flex-col gap-2">
            <input
              type="email"
              value={formData.email}
              className="border h-[3rem] rounded-md pl-3"
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
              className="border h-[3rem] rounded-md pl-3"
              placeholder="Enter a Password"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <CustomBtn
              label="Continue"
              bgCol="bg-indigo-300"
              padding="px-8 py-2.5"
            />
            <h1 className="text-sm">
              Or,{" "}
              <Link
                to={"/signup"}
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                Signup Here
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
