import { AppState, Action } from "../types";

export const taskReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, content: action.payload.content }
            : t
        ),
      };
    case "SET_TASK_TO_EDIT":
      return {
        ...state,
        editingTask: action.payload,
        creating: false,
      };
    case "SET_CREATING":
      return {
        ...state,
        creating: action.payload,
        editingTask: -1,
      };
    default:
      return state;
  }
};
