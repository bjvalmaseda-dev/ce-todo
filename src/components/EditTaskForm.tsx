import React, { useState } from "react";
import { FiX, FiSave, FiTrash2, FiPlusSquare as AddIcon } from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import ActionButton from "./ActionButton";
import { buttons } from "./../utils";

interface Props {
  task: ITask;
}

const EditTaskForm: React.FC<Props> = ({ task }) => {
  const [editTask, setEditTask] = useState(task.content);
  const { dispatch } = useAppContext();
  const isEdited = task.content !== editTask;

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    isEdited &&
      editTask &&
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
    <form onSubmit={handleEdit}>
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
              <ActionButton key={`button-${btn.label}`} {...btn} />
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
