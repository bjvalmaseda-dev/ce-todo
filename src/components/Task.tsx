import React from "react";
import { ITask } from "../types";

interface Props {
  task: ITask;
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox h-4 w-4" />
      <span className="ml-2 cursor-pointer">{task.content}</span>
    </div>
  );
};

export default Task;
