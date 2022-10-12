import React from "react";
import { FiPlusSquare } from "react-icons/fi";

interface Props {
  action: () => void;
}

const NewTaskButton: React.FC<Props> = ({ action }) => {
  return (
    <div className="flex items-center">
      <FiPlusSquare className="text-blue-500" />
      <span className="ml-2 text-gray-400" onClick={action}>
        Type to add new task
      </span>
    </div>
  );
};

export default NewTaskButton;
