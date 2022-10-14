export interface ITask {
  content: string;
  id: string;
}

export type Action =
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "EDIT_TASK"; payload: ITask }
  | { type: "SET_TASK_TO_EDIT"; payload: string | null }
  | { type: "SET_CREATING"; payload: boolean }
  | { type: "FETCH_TASKS"; payload: ITask[] }
  | { type: undefined; payload: undefined };

export interface AppState {
  tasks: ITask[];
  editingTask?: string | null;
  creating?: boolean;
}

export type TActionButton = {
  label: string;
  icon: JSX.Element;
  container?: boolean;
  action?: () => void;
};
