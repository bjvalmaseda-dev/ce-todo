import React from "react";

interface Props {
  label: string;
  icon: JSX.Element;
  container?: boolean;
  disabled?: boolean;
}

const ActionButton: React.FC<Props> = ({
  label,
  icon,
  container = false,
  disabled = false,
}) => {
  const statusClass = disabled
    ? " text-gray-400 cursor-not-allowed"
    : " text-gray-500 cursor-pointer ";

  return (
    <button
      className={`${statusClass}  ${
        container ? "bg-gray-300" : null
      } flex border rounded px-3 py-1 items-center space-x-2 mr-2`}
    >
      {icon}
      <span className="hidden xl:block">{label}</span>
    </button>
  );
};

export default ActionButton;
