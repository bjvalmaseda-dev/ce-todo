import React, { createContext, useReducer } from "react";
import { Action, AppState } from "../types";
import { taskReducer } from "./Reducer";

interface IAppCtx {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const initialState: AppState = {
  tasks: [
    {
      content: "this is #cuba a note whit a a@email.com to @bjvalmaseda ",
      id: 12,
    },
    {
      content: "this is another note http://www.link.com",
      id: 13,
    },
  ],
  editingTask: -1,
  creating: false,
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
