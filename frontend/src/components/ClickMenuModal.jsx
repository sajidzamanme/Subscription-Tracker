import CustomBtn from "./CustomBtn";

const API = "http://localhost:5500/api/v1";

const ClickMenuModal = ({ setModalContent }) => {
  return (
    <div className="w-full bg-[#F7E7DC] shadow-lg rounded-xl flex flex-col items-center justify-start">
      <div
        id="clickMenu"
        className="w-full flex flex-col gap-5 p-6 items-start justify-start"
      >
        <h1 className="self-center text-[#405D72] text-3xl font-bold py-2">
          Choose Action
        </h1>

        <div className="w-full flex flex-col gap-3">
          <CustomBtn label="Edit" handleClick={() => setModalContent("edit")} />
          <CustomBtn
            label="Delete"
            handleClick={() => setModalContent("delete")}
          />
        </div>
      </div>
    </div>
  );
};

export default ClickMenuModal;
