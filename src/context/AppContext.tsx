import React, { createContext, useContext, useReducer } from "react";
import { Action, AppState } from "../types";
import { taskReducer } from "./Reducer";

interface IAppCtx {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: AppState = {
  tasks: [
    {
      content: "this is a note",
      id: 12,
    },
    {
      content: "this is another note",
      id: 13,
    },
  ],
};

export const AppCtx = createContext<IAppCtx>({
  state: initialState,
  dispatch: () => {},
});

export const Context = ({ children }: any) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <AppCtx.Provider value={{ state, dispatch }}>{children}</AppCtx.Provider>
  );
};

export default Context;
