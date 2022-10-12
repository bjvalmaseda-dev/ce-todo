import React, { useState } from "react";
import {
  FiMaximize2 as OpenIcon,
  FiPlusSquare as AddIcon,
  FiCalendar,
  FiUnlock as PublicIcon,
  FiLoader as NormalIcon,
  FiStopCircle as EstimationIcon,
  FiX,
  FiSave,
  FiTrash2,
} from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import ActionButton from "./ActionButton";

type Button = {
  label: string;
  icon: JSX.Element;
  container?: boolean;
  action?: () => void;
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
  {
    label: "Remove",
    icon: <FiTrash2 />,
  },
];

interface Props {
  task: ITask;
}
const EditTaskForm: React.FC<Props> = ({ task }) => {
  const [editTask, setEditTask] = useState(task.content);
  const { dispatch } = useAppContext();

  const isEdited = task.content !== editTask;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    isEdited &&
      dispatch({ type: "EDIT_TASK", payload: { ...task, content: editTask } });
    handleCancel();
  };

  const handleCancel = () => {
    dispatch({ type: "SET_TASK_TO_EDIT", payload: -1 });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TASK", payload: task.id });
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
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
          </div>
        </div>
        <div className="border p-2 border-gray-200 bg-gray-50">
          <div className="flex py-3">
            {buttons.map((btn) => (
              <ActionButton
                key={`button-${btn.label}`}
                {...btn}
                disabled={editTask === "" ? true : false}
              />
            ))}
            <ActionButton
              label="Remove"
              icon={<FiTrash2 />}
              action={handleRemove}
            />
            <div className="ml-auto flex">
              <button
                type="submit"
                className="flex border rounded p-2 text-white mr-2 ml-auto bg-blue-500"
              >
                {isEdited ? <FiSave /> : <FiX />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
