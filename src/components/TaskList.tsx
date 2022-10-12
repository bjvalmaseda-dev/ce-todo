import React from "react";
import { ITask } from "../types";
import Task from "./Task";
interface Props {
  tasks: ITask[];
}
const NoteList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="p-2 mt-2 grid-flow-row" data-testid="tasks-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
