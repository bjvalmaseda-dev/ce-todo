import React from "react";
import useAppContext from "../hooks/useAppContext";
import { ITask } from "../types";
import EditTaskForm from "./EditTaskForm";
import TaskContent from "./TaskContent";

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
  const counter = { mail: 0, link: 0 };

  return (
    <>
      {editingTask === task.id ? (
        <EditTaskForm task={task} />
      ) : (
        <div className="inline-flex items-center w-full" aria-label="">
          <input type="checkbox" className="form-checkbox h-4 w-4" />
          <span
            aria-label="task-item"
            className="ml-2 cursor-pointer w-full"
            onClick={handleClick}
          >
            <TaskContent content={task.content} />
          </span>
        </div>
      )}
    </>
  );
};

export default Task;
