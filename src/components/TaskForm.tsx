import React, { useState } from "react";
import {
  FiMaximize2 as OpenIcon,
  FiPlusSquare as AddIcon,
  FiCalendar,
  FiUnlock as PublicIcon,
  FiLoader as NormalIcon,
  FiStopCircle as EstimationIcon,
  FiPlus,
  FiX,
} from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";
import ActionButton from "./ActionButton";

type Button = {
  label: string;
  icon: JSX.Element;
  container?: boolean;
};

const buttons: Button[] = [
  {
    label: "Open",
    icon: <OpenIcon />,
    container: true,
  },
  {
    label: "Today",
    icon: <FiCalendar />,
  },
  {
    label: "Public",
    icon: <PublicIcon />,
  },
  {
    label: "Normal",
    icon: <NormalIcon />,
  },
  {
    label: "Estimation",
    icon: <EstimationIcon />,
  },
];

interface Props {
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskForm: React.FC<Props> = ({ setIsAdding }) => {
  const [newNote, setNewNote] = useState("");
  const { dispatch } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote) {
      dispatch({
        type: "ADD_TASK",
        payload: { content: newNote, id: Number(Date.now()) },
      });
    }
    handleCancel();
  };

  const handleCancel = () => {
    setNewNote("");
    setIsAdding(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow-md">
        <div className="border p-2 border-gray-200">
          <div className="flex items-center">
            <AddIcon className="text-blue-500" />
            <input
              type="text"
              placeholder="Type to add new task"
              className="focus:outline-none ml-2 w-5/6"
              onChange={(e) => setNewNote(e.target.value)}
            />
          </div>
        </div>
        <div className="border p-2 border-gray-200 bg-gray-50">
          <div className="flex py-3">
            {buttons.map((btn) => (
              <ActionButton
                key={`button-${btn.label}`}
                {...btn}
                disabled={newNote === "" ? true : false}
              />
            ))}
            <div className="ml-auto flex">
              <button
                onClick={handleCancel}
                className="hidden xl:flex border rounded px-3 py-1 text-gray-600 mr-2 ml-auto bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex border rounded px-3 py-1 text-white mr-2 ml-auto bg-blue-500"
              >
                <span className="add-button hidden xl:block">
                  {newNote ? "Add" : "OK"}
                </span>
                <span className="xl:hidden">
                  {newNote ? <FiPlus /> : <FiX />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
