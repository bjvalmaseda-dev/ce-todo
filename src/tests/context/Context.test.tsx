import React, { FC } from "react";
import { renderHook } from "@testing-library/react";
import { AppCtx } from "./../../context/AppContext";
import useAppContext from "../../hooks/useAppContext";
import { AppState } from "../../types";

const initialState: AppState = {
  tasks: [
    { content: "Test task", id: "125" },
    { content: "Test task", id: "126" },
  ],
};

const dispatch = jest.fn();

const mockUseReducer = jest
  .fn()
  .mockImplementation(() => [initialState, dispatch]);
React.useReducer = mockUseReducer;

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppCtx.Provider value={{ state: initialState, dispatch }}>
    {children}
  </AppCtx.Provider>
);

describe("<Context/>", () => {
  test("should have a app state and dispatch", async () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper,
    });
    expect(result.current.state.tasks).toHaveLength(initialState.tasks.length);
    expect(result.current).toEqual({ state: initialState, dispatch });
  });
});
