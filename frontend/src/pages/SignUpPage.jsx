import { Link, useNavigate } from "react-router";
import CustomBtn from "../components/CustomBtn";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userExistsError, setUserExistsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5500/api/v1/auth/sign-up",
        formData
      );
      setUserExistsError(false);
      setFormData({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      if (error.status === 409) {
        setUserExistsError(true);
      }
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <section className="w-[93%] max-w-xs bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
        <form
          id="signupForm"
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 py-6 px-2 items-start justify-start"
        >
          <h1 className="self-center text-[#405D72] text-3xl font-bold py-7">
            Create a Account
          </h1>

          <div className="w-full max-w-[20rem] flex flex-col gap-3 px-3">
            <input
              type="text"
              value={formData.name}
              className="bg-[#FFF8F3] h-[3rem] rounded-md text-[#405D72] pl-3 shadow-sm placeholder:text-[#405D72]"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
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

          {userExistsError && (
            <h1 className="text-sm text-red-500 font-medium self-center text-center">
              Account with this email already exists
            </h1>
          )}

          <div className="w-full flex flex-col gap-2 justify-center items-center pb-8">
            <CustomBtn
              label="Create"
              classList={
                "bg-[#FFF8F3] text-[#405D72] px-6 py-2.5 font-semibold rounded-md text-sm shadow-sm hover:bg-[#fddac3]"
              }
            />
            <h1 className="text-sm">
              Or,{" "}
              <Link
                to={"/login"}
                className="text-[#405D72] hover:text-[#758694] font-medium"
              >
                Login Here
              </Link>
            </h1>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;
