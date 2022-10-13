import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";

const NewTaskButton: React.FC = () => {
  const { dispatch } = useAppContext();
  const handleAdd = () => {
    dispatch({ type: "SET_CREATING", payload: true });
  };
  return (
    <div className="flex items-center">
      <FiPlusSquare className="text-blue-500" />
      <span className="ml-2 text-gray-400" onClick={handleAdd}>
        Type to add new task
      </span>
    </div>
  );
};

export default NewTaskButton;
