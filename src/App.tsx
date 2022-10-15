import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "./components/Error";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useAppContext from "./hooks/useAppContext";

const App: React.FC = () => {
  const {
    state: { tasks, creating, error },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/tasks");
        dispatch({ type: "FETCH_TASKS", payload: res.data });
      } catch (e) {
        dispatch({ type: "SET_ERROR", payload: true });
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="container mx-auto my-4">
      {creating ? <TaskForm /> : <NewTaskButton />}
      <TaskList tasks={tasks} />
      <Error
        error={error}
        cleanError={() => dispatch({ type: "SET_ERROR", payload: false })}
      />
    </div>
  );
};

export default App;
