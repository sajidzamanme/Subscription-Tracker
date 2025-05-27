const CustomBtn = ({
  label = "Button",
  classList = null,
  handleClick = () => {},
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        classList ||
        "min-w-[6.2rem] bg-white text-black p-2 rounded-md text-sm font-medium hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
};

export default CustomBtn;
