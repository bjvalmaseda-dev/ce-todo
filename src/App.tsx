import React from "react";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";
import NoteList from "./components/TaskList";
import useAppContext from "./hooks/useAppContext";

const App: React.FC = () => {
  const {
    state: { tasks, creating },
  } = useAppContext();

  return (
    <div className="container mx-auto my-4">
      {creating ? <TaskForm /> : <NewTaskButton />}
      <NoteList tasks={tasks} />
    </div>
  );
};

export default App;
