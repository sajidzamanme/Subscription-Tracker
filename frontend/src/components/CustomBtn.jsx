const CustomBtn = ({
  label = "Button",
  bgCol = "bg-white",
  textCol = "text-black",
  padding = "p-2",
  handleClick = () => {},
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${bgCol} ${textCol} ${padding} rounded-md text-sm font-medium`}
    >
      {label}
    </button>
  );
};

export default CustomBtn;
