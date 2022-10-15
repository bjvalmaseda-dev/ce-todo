import React, { useState } from "react";
import { FiX, FiSave, FiTrash2, FiPlusSquare as AddIcon } from "react-icons/fi";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import ActionButton from "./ActionButton";
import { buttons } from "./../utils";
import axios from "axios";
import HighlightedInput from "./HighlightedInput";
interface Props {
  task: ITask;
}

const EditTaskForm: React.FC<Props> = ({ task }) => {
  const [editTask, setEditTask] = useState(task.content);
  const { dispatch } = useAppContext();
  const isEdited = task.content !== editTask;

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdited && editTask) {
      try {
        const newTask = { ...task, content: editTask };
        const res = await axios.put(
          `${process.env.API_URL}/api/tasks/${task.id}`,
          newTask
        );
        const editedTask = res.data as ITask;
        dispatch({ type: "EDIT_TASK", payload: editedTask });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: true });
      }
    }
    handleCancel();
  };

  const handleCancel = () => {
    dispatch({ type: "SET_TASK_TO_EDIT", payload: null });
  };

  const handleRemove = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/tasks/${task.id}`
      );
      dispatch({ type: "REMOVE_TASK", payload: task.id });
    } catch (err) {}
  };

  return (
    <form
      onSubmit={handleEdit}
      className="-mx-2 my-3"
      data-testid="edit-task-form"
    >
      <div className="shadow-md">
        <div className="border p-2 border-gray-200">
          <div className="flex items-center">
            <AddIcon className="text-blue-500" />
            <HighlightedInput
              value={editTask}
              setValue={setEditTask}
              ariaLabel="task-content"
              placeholder="Type to add new task"
            />
          </div>
        </div>
        <div className="border p-2 border-gray-200 bg-gray-50">
          <div className="flex py-3">
            {buttons.map((btn) => (
              <ActionButton key={`button-${btn.label}`} {...btn} />
            ))}

            <ActionButton
              data-testid="remove-task-button"
              label="Remove"
              icon={<FiTrash2 />}
              action={handleRemove}
            />
            <div className="ml-auto flex">
              <button
                type="submit"
                className="flex border rounded p-2 text-white mr-2 ml-auto bg-blue-500"
              >
                {isEdited || !editTask ? (
                  <FiSave data-testid="edit-save-button" />
                ) : (
                  <FiX data-testid="edit-cancel-button" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
