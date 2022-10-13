import { Action, AppState, ITask } from "../../types";
import { taskReducer } from "./../../context/Reducer";

describe("taskReducer", () => {
  const initialState: AppState = {
    tasks: [
      {
        content: "Test reducer",
        id: 100,
      },
      {
        content: "Test reducer 2",
        id: 2,
      },
    ],
    editingTask: -1,
    creating: false,
  };

  const task: ITask = {
    content: "task content",
    id: 1,
  };

  it("ADD_TASK should be add new task", () => {
    const action: Action = { type: "ADD_TASK", payload: task };
    const updateState: AppState = taskReducer(initialState, action);
    expect(updateState.tasks).toHaveLength(initialState.tasks.length + 1);
  });

  it("REMOVE_TASK should be removed a task", () => {
    const action: Action = {
      type: "REMOVE_TASK",
      payload: initialState.tasks[0].id,
    };
    const updateState: AppState = taskReducer(initialState, action);
    expect(updateState.tasks).toHaveLength(initialState.tasks.length - 1);
    expect(updateState.tasks).not.toContain(initialState.tasks[0].content);
  });

  it("EDIT_TASK should be edited a task", () => {
    const action: Action = {
      type: "EDIT_TASK",
      payload: { id: 100, content: "Edited content" },
    };
    const updateState: AppState = taskReducer(initialState, action);
    expect(updateState.tasks[0].content).toContain(action.payload.content);
  });

  it("SET_TASK_TO_EDIT should be select a id for edit and mark creating in false", () => {
    const action: Action = {
      type: "SET_TASK_TO_EDIT",
      payload: 100,
    };
    const updateState: AppState = taskReducer(initialState, action);
    expect(updateState.editingTask).toBe(action.payload);
    expect(updateState.creating).toBe(false);
  });

  it("SET_CREATING should be change the status to creating and cancel edit mode", () => {
    const action: Action = {
      type: "SET_CREATING",
      payload: true,
    };
    const updateState: AppState = taskReducer(initialState, action);
    expect(updateState.creating).toBe(action.payload);
    expect(updateState.editingTask).toBe(-1);
  });
});
