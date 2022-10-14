import axios from "axios";
import React, { useEffect } from "react";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useAppContext from "./hooks/useAppContext";

const App: React.FC = () => {
  const {
    state: { tasks, creating },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get("http://localhost:3001/api/tasks");
      dispatch({ type: "FETCH_TASKS", payload: res.data });
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="container mx-auto my-4">
      {creating ? <TaskForm /> : <NewTaskButton />}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
