import React from "react";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import EditTaskForm from "./EditTaskForm";

interface Props {
  task: ITask;
}

const Task: React.FC<Props> = ({ task }) => {
  const {
    state: { editingTask },
    dispatch,
  } = useAppContext();

  const handleClick = () => {
    dispatch({ type: "SET_TASK_TO_EDIT", payload: task.id });
  };

  return (
    <>
      {editingTask === task.id ? (
        <EditTaskForm task={task} />
      ) : (
        <div className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-4 w-4" />
          <span className="ml-2 cursor-pointer" onClick={handleClick}>
            {task.content}
          </span>
        </div>
      )}
    </>
  );
};

export default Task;
