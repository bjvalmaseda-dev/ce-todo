import React, { useState } from "react";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";
import NoteList from "./components/TaskList";
import useAppContext from "./hooks/useAppContext";
import { ITask } from "./types";

const initNotes: ITask[] = [];

const App: React.FC = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const {
    state: { tasks },
  } = useAppContext();

  const handleAdd = () => {
    setIsAdding(true);
  };

  return (
    <div className="container mx-auto my-4">
      {isAdding ? (
        <TaskForm setIsAdding={setIsAdding} />
      ) : (
        <NewTaskButton action={handleAdd} />
      )}
      <NoteList tasks={tasks} />
    </div>
  );
};

export default App;
